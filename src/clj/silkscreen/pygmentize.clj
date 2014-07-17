(ns silkscreen.pygmentize
  (:require [me.raynes.conch :refer [let-programs]]
            [net.cgrand.enlive-html :refer [at html-content html-snippet select substitute]]
            taoensso.timbre))

(taoensso.timbre/refer-timbre)

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
  (let [code (first (select node [:code]))
        language (-> code :attrs :class)
        new-content (if language 
                      (pygmentize language (:content code))
                      (:content code))]
    ((substitute (html-snippet new-content)) node)))

