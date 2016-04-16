(ns silkscreen.publish
  (:require [me.raynes.conch :refer [with-programs]]
            [clojure.string :as string]
            [taoensso.timbre :as timbre])
  (:use [clojure.java.shell :only [sh]]
        clj-time.coerce
        org.satta.glob
        [me.raynes.fs :only [directory? file find-files find-files* list-dir]]
        [silkscreen.path :only [path-elements ensure-path]]
        [silkscreen.post :only [read-file header]]
        [silkscreen.blog.conduits :only [index-page post-page]]))

(timbre/refer-timbre)
(timbre/set-level! :debug)

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

(defn post-file [config post-id]
  (str (:post-dir config) post-id "/index.post"))

(defn derive-config [config]
  (let [source-dir (:source-dir config)
        [resource-dir post-dir template-dir] (map #(str source-dir % "/") ["resources" "posts" "templates"])
        target-dir (:target-dir config)]
    {:source-dir source-dir
     :resource-dir resource-dir
     :post-dir post-dir
     :template-dir template-dir
     :target-dir target-dir}))

(def cfg (derive-config {:source-dir "/Volumes/Space/personal/dev/silkscreen/tomlynch.io/" 
                         :target-dir "/Volumes/Space/personal/dev/attentive.github.io/"}))


;; Get files

(defn get-content-files 
  "Gets all files under [content-dir] that match pattern"
  [content-dir] 
  (map read-file (find-files content-dir #".*(post|page)")))

(defn get-index
  "Gets the index file under [content-dir] if it exists"
  [content-dir]
  (if-let [index-file (first (find-files content-dir #".*index.(post|page)"))]
    (read-file index-file)))

(defn get-content
  [post-dir]
  "Gets all directories under [post-dir]"
  (let [content-dirs (filter directory? (list-dir post-dir))]
    (map #(hash-map :dir %
                    :files (get-content-files %)
                    :index (get-index %)) 
         content-dirs)))

(defn publish-content [content config]
  (let [post (:index content)
        rel-path (:path (ensure-path post))
        path (str (:target-dir config) rel-path)]
    (with-programs [mkdir] (mkdir "-p" path))
    (println "→" rel-path)
    (let [post (:index content)
          change-ext #(string/replace %1 #"(.*)\.(page|post)" (str "$1." %2))
          postf (.getName (:file post))
          templatef (str (:template-dir config) (:template post))
          ednf (change-ext postf "edn")
          htmlf (change-ext postf "html")]
      (with-programs [cp]
        (let [expr (str (.getPath (:dir content)) "/*")
              all-content-files (glob expr)]
          (doseq [file all-content-files]
            (println "→→" (.getName file))
            (pr-sh cp (.getPath file) path))))
      (println "→→" ednf)
      (spit (str path "/" ednf) (pr-str post))
      (println "→→" htmlf)
      (spit (str path "/" htmlf) (apply str (post-page templatef post))))))

(defn all [config]
  "Return all the resources that will be published via the specified configuration."
  {:title "tomlynch.io"
   :index "/main.html"
   :content (get-content (:post-dir config))})

(defn publish-all-content [config]
  (let [data (all config)]
    (doseq [content (:content data)]
      (publish-content content config))))

(defn publish-index [config]
  (let [data (all config)
        template (:index data)
        index-path (str (:target-dir config) "index.html")]
    (println "→ index.html")
    (spit index-path
          (apply str (index-page (str (:template-dir config) template) data)))))

(defn delete-site [config]
  "Delete existing published site (preparing for re-publish)."
  (with-programs [ls rm mkdir]
    (pr-sh mkdir "-vp" (:target-dir config))
    (doseq [item (ls (:target-dir config) {:seq true})]
      (let [full-path (str (:target-dir config) item)]
        (println "rm -r" full-path)
        (pr-sh rm "-r" full-path)))))

(defn copy-dependencies [config]
  "Copy site dependencies (eg images, fonts, CSS and JavaScript) to the target directory."
  (with-programs [cp]
    (doseq [resx ["js" "css" "fonts" "img"]]
      (println "→" resx)
      (pr-sh cp "-r" (str (:resource-dir config) resx) (:target-dir config)))))

(defn publish-site 
  "Publish an entire site."
  [config]
  ; publish
  (let [config (derive-config config)]
    (delete-site config)
    (copy-dependencies config)
    (publish-index config)
    (publish-all-content config)))


