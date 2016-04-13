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

(facts
  (let [all-content (:content (publish/all test-cfg))]
    (fact "posts and pages generate different path elements" 
          (into [] (map (comp path/path-elements :index) all-content)) =>
          [["about"] [2014 7 6 "let-s-try-a-new-one"]])))

