(ns silkscreen.publish
  (:require [me.raynes.conch :refer [with-programs]]
            [clojure.string :as string]
            [taoensso.timbre :as timbre])
  (:use [clojure.java.shell :only [sh]]
        clj-time.coerce
        org.satta.glob
        [silkscreen.path :only [ensure-path]]
        [silkscreen.post :only [read-file]]
        [silkscreen.blog :only [index-page post-page]]))

(timbre/refer-timbre)

(timbre/set-level! :info)

(defmacro pr-sh [cmd & args]
  `(doseq [line# (~cmd ~@args {:seq true})] (println line#)))

(defn- minify-css [css-file]
  (let [out-file (string/replace css-file #".css" ".min.css")]
    (with-programs [minify]
      (minify css-file out-file))
    out-file))

(defn- concat-files [& css-files] 
  (with-programs [cat]
    (let [cat-to (apply partial (cons cat css-files))]
      (cat-to ">" "tomlynch.io.css"))))

(defn derive-config [config]
  (let [source-dir (:source-dir config)
        [resource-dir post-dir template-dir] 
        (map #(str source-dir % "/") ["resources" "posts" "templates"])
        post-glob (str post-dir "*.post")
        page-glob (str post-dir "*.page")
        target-dir (:target-dir config)]
    {:source-dir source-dir
     :resource-dir resource-dir
     :post-dir post-dir
     :template-dir template-dir
     :post-glob post-glob
     :page-glob page-glob
     :target-dir target-dir}))

(def cfg (derive-config {:source-dir "/home/tom/dev/silkscreen/tomlynch.io.posts/" 
                         :target-dir "/home/tom/dev/attentive.github.io/"}))

(defn publish-index [config data]
  (let [template (:index data)
        rel-path "/"
        path (str (:target-dir config) rel-path)]
    (println "→" rel-path)
    (spit (str path "/index.html")
          (apply str (index-page (str (:template-dir config) template) data)))))

(defn publish-post [config post]
  (spy :debug "publish-post" post)
  (let [template (:template post)
        rel-path (:path (ensure-path post))
        path (str (:target-dir config) rel-path)]
    (with-programs [mkdir] (mkdir "-p" path))
    (println "→" rel-path)
    ; pure post data
    (spit (str path "/post.edn") (pr-str post))
    ; rendered post
    (spit (str path "/index.html") 
          (apply str (post-page (str (:template-dir config) template) post)))))

(defn publish-page [config page]
  (spy :debug "publish-page" page)
  (let [template (:template page)
        rel-path "about"
        path (str (:target-dir config) rel-path)]
    (with-programs [mkdir] (mkdir "-p" path))
    (println "→" rel-path)
    ; pure post data
    (spit (str path "/post.edn") (pr-str page))
    ; rendered post
    (spit (str path "/index.html") 
          (apply str (post-page (str (:template-dir config) template) page)))))

(defn publish-posts [config data]
  (doseq [post (:posts data)]
    (publish-post config post)))

(defn publish-pages [config data]
  (doseq [page (:pages data)]
    (publish-page config page)))

(defn all [config]
  {:title "tomlynch.io"
   :index "/main.html"
   :posts (sort-by #(- (to-long (:published %))) (map #(-> % .getPath read-file) (glob (:post-glob config)))) 
   :pages (sort-by #(- (to-long (:published %))) (map #(-> % .getPath read-file) (glob (:page-glob config))))})

(defn delete-site [config]
  (with-programs [ls rm mkdir]
    (pr-sh mkdir "-vp" (:target-dir config))

    ; delete old
    (doseq [item (ls (:target-dir config) {:seq true})]
      (pr-sh rm "-rvf" (str (:target-dir config) item)))))

(defn copy-dependencies [config]
  (with-programs [cp]

    ; copy dependencies and resources
    (doseq [resx ["js" "css" "fonts" "app" "img"]]
      (pr-sh cp "-rv" (str (:resource-dir config) resx) (:target-dir config)))))

(defn publish-site 
  "Publish an entire site."
  [config]
  ; publish
  (let [config (derive-config config)
        data (all config)]
    (delete-site config)
    (copy-dependencies config)
    (publish-index config data)
    (publish-pages config data)
    (publish-posts config data)))


