(ns silkscreen.publish
  (:require [net.cgrand.enlive-html :refer [content html-content append]]
            [me.raynes.fs :refer [mkdirs hidden? file delete list-dir with-cwd]]
            [autoclave.core :refer [markdown-to-html]]
            [hiccup.core :refer [html]]
            [clojure.string :as string])
  (:use [clojure.java.shell :only [sh]]
        org.satta.glob
        [silkscreen.path :only [ensure-path]]
        [silkscreen.post :only [read-file]]
        [silkscreen.conduit :only [defconduit]]))

(defmacro print-sh [& args]
  `(print (:out (sh ~@args))))

(let [source-dir "/home/tom/dev/tomlynch.io.posts/"
      [resource-dir post-dir template-dir] 
      (map #(str source-dir % "/") ["resources" "posts" "templates"])
      post-glob (str post-dir "*.post")
      target-dir "/home/tom/dev/attentive.github.io/"]

  (defconduit page
    [post]
    [:head :title] (content (:title post))
    [:body :div#nav] 
    (html-content 
      (html
        [:div.container-fluid
         [:ul.nav.navbar.navbar-nav
          [:li.active [:a {:href "#"} [:h3 "home"]]] 
          [:li.active [:a {:href "#"} [:h3 "about"]]] 
          [:li.active [:a {:href "#"} [:h3 "archive"]]] 
          [:li.active [:a {:href "#"} [:h3 "categories"]]] 
          [:li.active [:a {:href "#"} [:h3 "tags"]]]]])) 
    [:body :div#post] (html-content (markdown-to-html (:body post))))

  (defn publish-post [post dir]
    (let [template (:template post)
          rel-path (:path (ensure-path post))
          path (str dir rel-path)]
      (mkdirs path)
      (println "publishing" rel-path)
      (spit (str path "/post.edn") (pr-str post)) ; pure data now
      (spit (str path "/index.html") 
            (apply str (page (str template-dir (:template post)) 
                             post)))))

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


