(ns leiningen.silkscreen
  (:require [silkscreen.publish :as silkscreen]))

(defn silkscreen [project & args]
  (let [config (:silkscreen project)]
    (if config
      (silkscreen/publish-site config)
      (println "Error no silkscreen options provided in project.clj"))))


