(ns silkscreen.pygmentize
  (:require [me.raynes.conch :refer [let-programs]]
            [net.cgrand.enlive-html :refer [html-content]]
            taoensso.timbre))

(defn pygmentize
  "Syntax highlight some code."
  [language text]
  (let-programs [pygmentize "/usr/bin/pygmentize"]
    (pygmentize "-fhtml" (str "-l" language)
                (str "-Ostripnl=False,encoding=utf-8")
                {:in text})))

(defn pygmentize-node
  "Syntax highlight a node. The node must have the language in the
  data-language attribute."
  [node]
  (let [language (-> node :attrs :class)
        new-content (pygmentize language (:content node))]
    ((html-content new-content) node)))

