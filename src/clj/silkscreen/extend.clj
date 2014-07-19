(ns silkscreen.extend
  (:require [me.raynes.conch :refer [let-programs]]
            [net.cgrand.enlive-html :refer [at html-snippet content]]
            [clojure.string :as string]
            rhizome.viz
            taoensso.timbre))

(taoensso.timbre/refer-timbre)

(defn extend-attr
  "Retrieve a Silkscreen extension attribute from a document node. This consists of 
  an extension name and one or more arguments separated by spaces, and is returned 
  as a vector in which the first term is transformed into a keyword.

  eg <div silkscreen=\"pygmentize clojure\"/> → [:pygmentize \"clojure\"]"
  [node]
  (let [attr (string/split (:silkscreen (:attrs node)) #" ")]
    (into [] (cons (keyword (first attr)) (rest attr)))))

(defmulti extend-node #(first (extend-attr %)))

(defn pygmentize
  "Syntax highlight some code."
  [language text]
  (let-programs [pygmentize "/usr/bin/pygmentize"]
    (pygmentize "-fhtml" (str "-l" language)
                (str "-Ostripnl=False,encoding=utf-8")
                {:in text})))

(defmethod extend-node :pygmentize
  [node]
  "Syntax highlight a node. The language to be used for highlighting must 
  be supplied as the second element of the silkscreen attribute."
  (let [attr (extend-attr node)
        language (second attr)
        new-content (if language 
                      (pygmentize language (:content node))
                      (:content node))]
    ((content (html-snippet new-content)) node)))

(defn rhizomize
  "Replace a Clojure graph with embedded SVG visualising the graph.
  Example graph: 
  {:a [:b :c]
  :b [:a]
  :c [:c]}"
  [text]
  (let [grf (read-string text)]
    (rhizome.viz/graph->svg 
      (keys grf) ; nodes
      grf        ; node adjacencies
      :node->descriptor (fn [n] {:label n}))))

(defmethod extend-node :rhizomize
  [node]
  "Turn a Rhizome graph description into a rendered SVG graph."
  ((content (html-snippet (rhizomize (first (:content node))))) node))


