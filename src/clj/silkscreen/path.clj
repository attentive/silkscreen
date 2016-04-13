(ns silkscreen.path
  (:require [clojure.string :as string]
            [clj-time.core :as t]
            [taoensso.timbre :as timbre]
            [clj-time.coerce :as coerce]
            [me.raynes.fs :as fs]))

(timbre/refer-timbre)

(defn make-slug [name]
  (-> name
      (string/replace #"[^\d\w_]+" "-")
      (string/replace #"-+" "-")
      (string/replace #"-$" "")
      (string/replace #"^-" "")
      (string/trim)
      (string/lower-case)))


(defn content-ext [content]
  (fs/extension (:file content)))

(defmulti path-elements content-ext)

(defmethod path-elements ".post" [content]
  "Get all the elements of the path (filesystem or slug) associated with a post content item." 
  (let [published (coerce/from-date (:published content))
        date-path [(t/year published) (t/month published) (t/day published)]]
    (conj date-path
          (if (:slug content) 
            (:slug content) 
            (make-slug (:title content))))))

(defmethod path-elements ".page" [content]
  "Get all the elements of the path (filesystem or slug) associated with a page content item." 
  [(if (:slug content) 
     (:slug content) 
     (make-slug (:title content)))])

(defn ensure-path [content]
  "Ensure the path required for a content item has been associated with the item."
  (if (:path content) content
      (assoc content :path (string/join "/" (path-elements content)))))

(defn post-id [content]
  "Get an id for a content item."
  (->> content
       path-elements
       (string/join "-")))

(defn post-file [post-id]
  "Get the file associated with a post."
  (str post-id ".post"))




