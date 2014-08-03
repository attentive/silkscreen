(ns ^{:author "Tom Lynch"
      :doc "Template elements are connected to rendered content via conduit definitions."} 
  silkscreen.blog.conduits
  (:require [net.cgrand.enlive-html :refer [html-content content at 
                                            clone-for attr?]])
  (:use [silkscreen.blog.content :only [formal-date post-link category-link 
                                   post-content title]]  
        [silkscreen.conduit :only [defconduit]]
        [silkscreen.extend :only [extend-node]]
        hiccup.core))

(defmulti ->content type)

(defmethod ->content clojure.lang.PersistentVector [markup] 
  (html-content (html markup)))

(defmethod ->content java.lang.String [text]
  (content text))

(defmethod ->content clojure.lang.LazySeq [markup-seq]
  (html-content (apply str (map (fn [mk] (html mk)) markup-seq))))

(defn body [post]
  "Create the body of a post."
  (fn [nodes]
    (at nodes
        [:.silkscreen-title] (->content (post-link post))
        [:.silkscreen-published] (->content (formal-date (:published post)))
        [:.silkscreen-body] (->content (post-content post))
        [[(attr? :silkscreen)]] extend-node)))

(defconduit post-page
  [post]
  [:title] (->content (title post))
  [:.silkscreen-post] (body post))

(defconduit index-page
  [data]
  [:title] (content (title data))
  [:.silkscreen-post] 
  (clone-for [post (take 10 (:posts data))]
             [:.silkscreen-post] (body post)))

