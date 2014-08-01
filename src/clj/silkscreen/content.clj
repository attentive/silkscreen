(ns ^{:author "Tom Lynch"
      :doc "Content renderers for various common page elements."}
  silkscreen.content
  (:require [net.cgrand.enlive-html :refer [content html-content]]
            [autoclave.core :refer [markdown-to-html markdown-processor]]
            [clj-time format core coerce])
  (:use [silkscreen.path :only [ensure-path make-slug]]
        hiccup.core))

(defonce pegd (markdown-processor :fenced-code-blocks))

(defn- date [formatter inst]
  "Create a span containing a date."
  (html-content 
   (html [:span
          (clj-time.format/unparse
           (clj-time.format/formatter 
            "d MMMM, yyyy"
            (clj-time.coerce/from-date inst)))])))

(def formal-date (partial date "d MMMM, yyyy")) 

(defn post-link [post]
  "Create a link to a post."
  (html-content 
   (html
    [:a {:href (:path (ensure-path post))} (:title post)])))

(defn category-link [category]
  "Create a link to a category."
  (html-content 
   (html [:a {:href (str "/categories/" (make-slug category))} category])))

(defn post-content [post]
  "Create the HTML-rendered Markdown content of a post."
  (html-content (markdown-to-html pegd (:body post)))) 

(defn title [data]
  "The title of some data."
  (content (:title data)))

#_(def navbar
  (html
    [:nav.navbar.navbar-default.nav-stacked
     [:div.navbar-default
      [:ul.nav.navbar-nav
       [:li [:h3 [:a {:href "/"} "tomlynch.io"]]]]]
     [:div.collapse.navbar-collapse
      [:ul.nav.navbar-nav
       [:li [:h3 [:a {:href "/about"} "about"]]]
       [:li [:h3 [:a {:href "/archive"} "archive"]]] 
       [:li [:h3 [:a {:href "/categories"} "categories"]]] 
       [:li [:h3 [:a {:href "/tags"} "tags"]]]]]])) 

