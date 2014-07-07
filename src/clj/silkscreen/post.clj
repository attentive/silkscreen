(ns silkscreen.post
  (:require [clojure.string :as string]
            [clojure.pprint :as pretty])
  (:import java.util.Date))

; Persistence

; protocol here - eg defprotocol Post, deftype Jekyllesque?

(defn- ruler
  "A rather arbitrary separator for head and body in post files."
  []
  "==========")

(defn- is-ruler [line] (= line (ruler)))

(defn- read-post* 
  [post-line-seq]
  (let [[header body]
        (split-with (complement is-ruler) 
                    post-line-seq)]
    (assoc (read-string (apply str header)) 
           :body 
           (string/trimr (apply str (interpose \newline (rest body)))))))

(defn read-post
  "Read a post from a string."
  [post-string]
  (read-post* (string/split-lines post-string)))

(defn read-file
  "Read a post from a file containing a post header and body separated by (ruler)."
  [post-file]
  (read-post* (line-seq (clojure.java.io/reader post-file))))

(defn pretty-post 
  "Produce a string suitable for saving a post back out to 'source'."
  [post]
  (with-out-str 
    (pretty/pprint (dissoc post :body))
    (println (ruler))
    (println (:body post))))

(defn write-post
  "Write a post back to file."
  [post file]
  (spit file (pretty-post post)))

(defn new-post
  "Add all necessary keys to an initial post map."
  [post]
  (merge {:template "resources/templates/index.html"
          :title "[untitled]"
          :published (java.util.Date.)}
        post)) 

