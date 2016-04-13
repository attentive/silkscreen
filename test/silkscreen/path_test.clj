(ns silkscreen.path-test
  (:use midje.sweet)
  (:require [silkscreen.blog.conduits :as conduits]  
            [silkscreen.path :as path]
            [silkscreen.publish :as publish]
            [silkscreen.post-test :as post-test]
            [clojure.string :as string]))

(def test-cfg 
  (publish/derive-config 
    {:source-dir "/Volumes/Space/personal/dev/silkscreen/test/blog_data/" 
     :target-dir "/Volumes/Space/personal/dev/silkscreen/test/blog_data/attentive.github.io/"}))

#_(facts
  (fact "every content item has a directory, files and an index file"
        (every? #(= #{:files :dir :index} (-> % keys set)) 
                (:content (publish/all test-cfg))) => true)

  (let [first-item-index (-> (publish/all test-cfg) :content first :index)
        templatef (str (:template-dir test-cfg) (:template first-item-index))]

    (fact "index of the first content item has a template file with .html extension"
          (.endsWith templatef ".html") => true)

    (fact "post-page conduit works with the first content item"
          (= (first (conduits/post-page templatef first-item-index)) "<!DOCTYPE html>\n") => true))

  (fact "publishing the first content item completes successfully, returning nil" 
        (publish/publish-content (first (:content (publish/all test-cfg))) test-cfg) => nil)

  (fact "publishing all content completes successfully, returning nil"
          (publish/publish-all-content test-cfg) => nil))

