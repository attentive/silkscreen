(ns silkscreen.path
  (:require [clojure.string :as string]
            [clj-time.core :as t]
            [clj-time.coerce :as coerce]))

(defn make-slug [name]
  (-> name
      (string/replace #"[^\d\w_]+" "-")
      (string/replace #"-+" "-")
      (string/replace #"-$" "")
      (string/replace #"^-" "")
      (string/trim)
      (string/lower-case)))

(defn path-elements [post]
  (let [published (coerce/from-date (:published post))
        date-path [(t/year published) (t/month published) (t/day published)]]
    (conj date-path
          (if (:slug post) 
            (:slug post) 
            (make-slug (:title post))))))

(defn ensure-path [post]
  (if (:path post) post
    (assoc post :path (string/join "/" (path-elements post)))))

(defn post-id [post]
  (->> post
       path-elements
       (string/join "-")))


