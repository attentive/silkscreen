(ns leiningen.silkscreen
  (:require [silkscreen.publish :as silkscreen]))

(defn silkscreen [project & args]
  (let [opts (:silkscreen project)]
    (silkscreen/publish-site opts)))


