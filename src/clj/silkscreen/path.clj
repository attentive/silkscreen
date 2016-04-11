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

(defn path-elements [post]
  (spy :debug "path-elements" post)
  (let [published (coerce/from-date (:published post))
        date-path [(t/year published) (t/month published) (t/day published)]]
    (conj date-path
          (if (:slug post) 
            (:slug post) 
            (make-slug (:title post))))))

(defn post-id [post]
  (->> post
       path-elements
       (string/join "-")))

(defn post-file [post-id]
  "Get the file associated with a post."
  (str post-id ".post"))




