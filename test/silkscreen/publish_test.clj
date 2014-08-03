(ns silkscreen.publish-test
  (:use midje.sweet)
  (:require [silkscreen.blog.conduits :as conduits]  
            [silkscreen.publish :as publish]
            [silkscreen.post-test :as post-test]
            [clojure.string :as string]))

(def test-cfg 
  (publish/derive-config 
   {:source-dir "/home/tom/dev/silkscreen/test/blog_data/" 
    :target-dir "/home/tom/dev/silkscreen/test/blog_data/attentive.github.io/"}))

(facts 
 (fact
  ;(conduits/post-page (:template (post-test/test-post)) post-test/test-post) => truthy
  (publish/publish-post test-cfg post-test/test-post) => nil))

(facts
 (fact 
  (.startsWith (apply str (conduits/post-page (str (:template-dir test-cfg) (:template post-test/test-post)) post-test/test-post)) "<!DOCTYPE html>") 
  (conduits/post-page (str (:template-dir test-cfg) (:template post-test/test-post)) post-test/test-post) => truthy))

