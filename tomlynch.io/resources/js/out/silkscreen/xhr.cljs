(ns silkscreen.xhr
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.reader :as reader]
            [goog.events :as events])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn edn-xhr [{:keys [method url data on-complete on-error]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
                   (fn [e]
                     (when on-complete
                       (if (.isSuccess xhr)
                         (on-complete 
                           {:status (.getStatus xhr)
                            :body (reader/read-string (.getResponseText xhr))})
                         (when on-error
                           (on-error 
                             {:status (.getStatus xhr)
                              :body {:error (.getStatusText xhr)}}))))))
    (. xhr
       (send url (meths method) (when data (pr-str data))
             #js {"Content-Type" "application/edn"}))))


