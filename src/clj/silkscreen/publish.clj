(ns silkscreen.publish
  (:require [net.cgrand.enlive-html :refer [append clone-for content html-content]]
            [me.raynes.conch :refer [with-programs]]
            [autoclave.core :refer [markdown-to-html markdown-processor]]
            [hiccup.core :refer [html]]
            [clojure.string :as string])
  (:use [clojure.java.shell :only [sh]]
        org.satta.glob
        [silkscreen.pygmentize :only [pygmentize-node]]
        [silkscreen.path :only [ensure-path]]
        [silkscreen.post :only [read-file]]
        [silkscreen.conduit :only [defconduit]]))

(defonce pegd (markdown-processor :fenced-code-blocks))

(let [source-dir "/home/tom/dev/tomlynch.io.posts/"
      [resource-dir post-dir template-dir] 
      (map #(str source-dir % "/") ["resources" "posts" "templates"])
      post-glob (str post-dir "*.post")
      target-dir "/home/tom/dev/attentive.github.io/"]

  (def nav
    (html
      [:div.container-fluid
       [:ul.nav.navbar.navbar-nav
        [:li.active [:a {:href "/"} [:h3 "home"]]] 
        [:li.active [:a {:href "/about"} [:h3 "about"]]] 
        [:li.active [:a {:href "/archive"} [:h3 "archive"]]] 
        [:li.active [:a {:href "/categories"} [:h3 "categories"]]] 
        [:li.active [:a {:href "/tags"} [:h3 "tags"]]]]])) 

  (defconduit post-page
    [post]
    [:head :title] (content (:title post))
    [:body :div#nav] (html-content nav)
    [:body :div#post] (html-content (markdown-to-html pegd (:body post))))

  (defconduit alpha-index-page
    [index]
    [:head :title] (content (:title index))
    [:body :div#nav] (html-content nav)
    [:body :div#index :li] (clone-for [item (:items index)]
                                      [:li] (content item)))
    
  (defmacro pr-sh [cmd & args]
    `(doseq [line# (~cmd ~@args {:seq true})] (println line#)))

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
            (apply str (post-page (str template-dir (:template post)) 
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
    (with-programs [ls cp rm mkdir]

      (pr-sh mkdir "-vp" target-dir)
      ; delete old
      (doseq [item (ls target-dir {:seq true})]
        (pr-sh rm "-rvf" (str target-dir item)))

      ; copy dependencies and resources
      (doseq [resx ["js" "css" "fonts" "app" "img"]]
        (pr-sh cp "-rv" (str resource-dir resx) target-dir))

      ; publish
      (doseq [post-file (all-post-files)]
        (publish-post (read-file post-file) target-dir)))))


