(ns silkscreen.publish
  (:require [net.cgrand.enlive-html :refer [html emit* snippet* content append deftemplate]]
            [net.cgrand.tagsoup :refer [parser]]
            [me.raynes.fs :refer [mkdirs hidden? file delete list-dir with-cwd]]
            [clojure.string :as string])
  (:use [clojure.java.shell :only [sh]]
        org.satta.glob
        [silkscreen.path :only [ensure-path]]
        [silkscreen.post :only [read-file]]))

(defmacro print-sh [& args]
  `(print (:out (sh ~@args))))

(let [source-dir "/home/tom/dev/tomlynch.io.posts/"
      [resource-dir post-dir template-dir] 
      (map #(str source-dir % "/") ["resources" "posts" "templates"])
      post-glob (str post-dir "*.post")
      target-dir "/home/tom/dev/attentive.github.io/"]

  (defn- render-post 
    "Given a template file and a post, use these transformations to produce an HTML output."
    [post]
    (let [nodes (parser (clojure.java.io/reader (str template-dir (:template post))))]
      (apply str 
             (emit* 
               ((snippet* nodes
                          [post]
                          [:head :title] (content (:title post))) 
                post)))))

  (defn publish-post [post dir]
    (let [template (:template post)
          rel-path (:path (ensure-path post))
          path (str dir rel-path)]
      (mkdirs path)
      (println "publishing" rel-path)
      (spit (str path "/post.edn") (pr-str post)) ; pure data now
      (spit (str path "/index.html") (render-post post))))

  (defn post-file [post-id]
    (str post-dir post-id ".post"))

  (defn all-post-files []
    (map #(.getPath %) (glob post-glob)))

  (defn all-post-ids []
    (map #(-> % 
              (.getName)
              (string/replace #"(?<root>.*).post" "${root}"))
         (glob post-glob)))

  (defn publish-site 
    "Publish an entire site."
    []
    (println "re-creating site directory" target-dir)
    (mkdirs target-dir)
    (doseq [item (list-dir target-dir)]
      (when (not (hidden? (file item)))
        (print (:out (sh "rm" "-rvf" (str target-dir item))))))

    (println "copying site resources from" resource-dir)
    (print (:out (sh "cp" "-rv" (str resource-dir "js") target-dir)))
    (print (:out (sh "cp" "-rv" (str resource-dir "css") target-dir)))
    (print (:out (sh "cp" "-rv" (str resource-dir "fonts") target-dir)))
    (print (:out (sh "cp" "-rv" (str resource-dir "app") target-dir)))
    (print (:out (sh "cp" "-rv" (str resource-dir "img") target-dir)))

    (println "publishing posts")
    (for [post-file (all-post-files)]
      (publish-post (read-file post-file) target-dir))))


