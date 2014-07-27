(ns silkscreen.publish
  (:require [me.raynes.conch :refer [with-programs]]
            [clojure.string :as string])
  (:use [clojure.java.shell :only [sh]]
        org.satta.glob
        [silkscreen.path :only [ensure-path]]
        [silkscreen.post :only [read-file]]
        [silkscreen.blog :only [index-page post-page]]))

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

(defn publish-site 
  "Publish an entire site."
  [opts]

  (let [source-dir (:source-dir opts)
        [resource-dir post-dir template-dir] 
        (map #(str source-dir % "/") ["resources" "posts" "templates"])
        post-glob (str post-dir "*.post")
        page-glob (str post-dir "*.page")
        target-dir (:target-dir opts)]

    (defn publish-index [data dir]
      (let [template (:index data)
            rel-path "/"
            path (str dir rel-path)]
        (println "→" rel-path)
        (spit (str path "/index.html")
              (apply str (index-page (str template-dir template) data)))))

    (defn publish-post [post dir]
      (let [template (:template post)
            rel-path (:path (ensure-path post))
            path (str dir rel-path)]
        (with-programs [mkdir] (mkdir "-p" path))
        (println "→" rel-path)
        ; pure post data
        (spit (str path "/post.edn") (pr-str post))
        ; rendered post
        (spit (str path "/index.html") 
              (apply str (post-page (str template-dir template) 
                                    post)))))

    (defn publish-page [page dir]
      (let [template (:template page)
            rel-path "about"
            path (str dir rel-path)]
        (with-programs [mkdir] (mkdir "-p" path))
        (println "→" rel-path)
        ; pure post data
        (spit (str path "/post.edn") (pr-str page))
        ; rendered post
        (spit (str path "/index.html") 
              (apply str (post-page (str template-dir template) 
                                    page)))))

    (defn publish-posts [data dir]
        (doseq [post (:posts data)]
          (publish-post post target-dir)))

    (defn publish-pages [data dir]
        (doseq [page (:pages data)]
          (publish-page page target-dir)))
    
    (defn all []
      {:title "tomlynch.io"
       :index "/main.html"
       :posts (map #(-> % .getPath read-file) (glob post-glob))
       :pages (map #(-> % .getPath read-file) (glob page-glob))})

    (with-programs [ls cp rm mkdir]

      (pr-sh mkdir "-vp" target-dir)

      ; delete old
      (doseq [item (ls target-dir {:seq true})]
        (pr-sh rm "-rvf" (str target-dir item)))

      ; copy dependencies and resources
      (doseq [resx ["js" "css" "fonts" "app" "img"]]
        (pr-sh cp "-rv" (str resource-dir resx) target-dir))

      ; publish
      (let [data (all)]
        (publish-index data target-dir)
        (publish-pages data target-dir)
        (publish-posts data target-dir)))))


