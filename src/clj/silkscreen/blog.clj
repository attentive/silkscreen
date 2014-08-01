(ns ^{:author "Tom Lynch"
      :doc "Template elements are connected to rendered content via conduit definitions."} 
  silkscreen.blog
  (:require [net.cgrand.enlive-html :refer [at clone-for attr?]])
  (:use [silkscreen.content :only [formal-date post-link category-link 
                                   post-content title]]  
        [silkscreen.conduit :only [defconduit]]
        [silkscreen.extend :only [extend-node]]))

(defn body [post]
  "Create the body of a post."
  (fn [nodes]
    (at nodes
        [:.silkscreen-title] (post-link post)
        [:.silkscreen-published] (formal-date (:published post))
        [:.silkscreen-body] (post-content post)
        [[(attr? :silkscreen)]] extend-node)))

(defconduit post-page
  [post]
  [:title] (title post)
  [:.silkscreen-post] (body post))

(defconduit index-page
  [data]
  [:title] (title data)
  [:.silkscreen-post] 
  (clone-for [post (take 10 (:posts data))]
             [:.silkscreen-post] (body post)))

