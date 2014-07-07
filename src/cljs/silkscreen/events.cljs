(ns silkscreen.events
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [cljs.core.async :as async :refer [<! chan sub]]))

(defn listen [owner handler]
  (let [local-chan (chan)
        pub-chan (om/get-shared owner :event-chan)]
    (assert (not (nil? pub-chan)) "pub chan nil in silkscreen.events/listen")
    (sub pub-chan :txs local-chan)
    (go (while true
          (let [[topic value] (<! local-chan)]
            (handler topic value))))))

