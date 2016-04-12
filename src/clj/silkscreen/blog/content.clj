(ns ^{:author "Tom Lynch"
      :doc "Content renderers for various common page elements."}
  silkscreen.blog.content
  (:require [autoclave.core :refer [markdown-to-html markdown-processor]]
            [clj-time format core coerce]
            [taoensso.timbre :as timbre])
  (:use [silkscreen.path :only [ensure-path make-slug]]
        hiccup.core
        hickory.core))

(timbre/refer-timbre)

(defonce pegd (markdown-processor :fenced-code-blocks))

(defn- date [fmt inst]
  "Create a span containing a date."
  (clj-time.format/unparse
   (clj-time.format/formatter fmt) 
   (clj-time.coerce/from-date inst)))

(defn formal-date [inst]
  (date "d MMMM, yyyy" inst)) 

(defn post-link [content]
  "Create a link to a content item."
  [:a {:href (:path (ensure-path content))} (:title content)])

(defn category-link [category]
  "Create a link to a category."
  [:a {:href (str "/categories/" (make-slug category))} category])

(defn post-content [post]
  "Create the HTML-rendered Markdown content of a post."
  (as-hiccup (parse (markdown-to-html pegd (:body post))))) 

(defn title [data]
  "The title of some data."
  (:title data))

#_(def navbar
    [:nav.navbar.navbar-default.nav-stacked
     [:div.navbar-default
      [:ul.nav.navbar-nav
       [:li [:h3 [:a {:href "/"} "tomlynch.io"]]]]]
     [:div.collapse.navbar-collapse
      [:ul.nav.navbar-nav
       [:li [:h3 [:a {:href "/about"} "about"]]]
       [:li [:h3 [:a {:href "/archive"} "archive"]]] 
       [:li [:h3 [:a {:href "/categories"} "categories"]]] 
       [:li [:h3 [:a {:href "/tags"} "tags"]]]]]]) 

