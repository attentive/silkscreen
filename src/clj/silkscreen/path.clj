(ns silkscreen.path
  (:require [clojure.string :as string]
            [clj-time.core :as t]
            [taoensso.timbre :as timbre]
            [clj-time.coerce :as coerce]))

(timbre/refer-timbre)

(defn make-slug [name]
  (-> name
      (string/replace #"[^\d\w_]+" "-")
      (string/replace #"-+" "-")
      (string/replace #"-$" "")
      (string/replace #"^-" "")
      (string/trim)
      (string/lower-case)))

(defn path-elements [content]
  "Get all the elements of the path (filesystem or slug) associated with a content item." 
  (let [published (coerce/from-date (:published content))
        date-path [(t/year published) (t/month published) (t/day published)]]
    (conj date-path
          (if (:slug content) 
            (:slug content) 
            (make-slug (:title content))))))

(defn ensure-path [content]
  "Ensure the path required for a content item has been associated with the item."
  (if (:path content) content
      (assoc content :path (str "/" (string/join "/" (path-elements content))))))

(defn post-id [content]
  "Get an id for a content item."
  (->> content
       path-elements
       (string/join "-")))

(defn post-file [post-id]
  "Get the file associated with a post."
  (str post-id ".post"))




