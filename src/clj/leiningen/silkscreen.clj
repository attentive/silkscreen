(ns leiningen.silkscreen
  (:require [silkscreen.publish :as silkscreen]))

(defn silkscreen [project & args]
  (let [opts (:silkscreen project)]
    (if opts
      (silkscreen/publish-site opts)
      (println "Error no silkscreen options provided in project.clj"))))


