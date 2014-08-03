(ns silkscreen.post-test
  (:use midje.sweet)
  (:require [silkscreen.post :as post]
            [silkscreen.blog.content :as content]
            [silkscreen.publish :as publish]))

(def test-post (post/read-file "test/2014-7-5-test-post-2.post"))

(facts 
 (fact "`post-content` returns hiccup data"
       (even? (first [2 4])) => truthy 
       (vector? (first (content/post-content test-post))) => true))



