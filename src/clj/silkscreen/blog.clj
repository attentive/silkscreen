(ns silkscreen.blog
  (:require [net.cgrand.enlive-html :refer [append at clone-for content 
                                            html-content attr? do->]]
            [autoclave.core :refer [markdown-to-html markdown-processor]]
            [clj-time format core coerce]
            hiccup.core
            taoensso.timbre)
  (:use [silkscreen.conduit :only [defconduit]]
        [silkscreen.extend :only [extend-node]]
        [silkscreen.path :only [ensure-path make-slug]]))

(taoensso.timbre/refer-timbre)

(defonce pegd (markdown-processor :fenced-code-blocks))

(defn format-date [inst]
  (clj-time.format/unparse
    (clj-time.format/formatter "d MMMM, yyyy")
    (clj-time.coerce/from-date inst)))

(defn post-link [post]
  "Create a link to a post."
  (hiccup.core/html
    [:a {:href (:path (ensure-path post))} (:title post)])) 

(defn category-link [category]
  "Create a link to a category."
  (hiccup.core/html
    [:a {:href (str "/categories/" (make-slug category))} category]))

(def navbar
  (hiccup.core/html
    [:nav.navbar.navbar-default.nav-stacked
     [:div.navbar-default
      [:ul.nav.navbar-nav
       [:li [:h3 [:a {:href "/"} "tomlynch.io"]]]
       [:li [:h3 [:a {:href "/about"} "about"]]]]]
     [:div.collapse.navbar-collapse
      [:ul.nav.navbar-nav
       [:li [:h3 [:a {:href "/archive"} "archive"]]] 
       [:li [:h3 [:a {:href "/categories"} "categories"]]] 
       [:li [:h3 [:a {:href "/tags"} "tags"]]]]]])) 

(defn body [post]
  (fn [nodes]
    (at nodes
        [:.silkscreen-title] (html-content (post-link post))
        [:.silkscreen-published] (content (format-date (:published post)))
        [:.silkscreen-body] (html-content (markdown-to-html pegd (:body post)))
        [[(attr? :silkscreen)]] extend-node)))

(defconduit post-page
  [post]
  [:title] (content (:title post))
  [:.silkscreen-nav] (html-content navbar)
  ;[:.silkscreen-related] (content "Related posts")
  [:.silkscreen-post] (body post))

(defconduit index-page
  [data]
  [:title] (content (:title data))
  [:.silkscreen-nav] (html-content navbar)
  [:.silkscreen-post] 
  (clone-for [post (take 10 (:posts data))]
             [:.silkscreen-post] (body post)))

