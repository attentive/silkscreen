(ns silkscreen.editor
  (:require 
    [org.httpkit.server :as http-kit]
    silkscreen.web))

(defprotocol LifeCycle
  (start [this])
  (stop [this]))

(defn start-system [system]
  (doseq [s (->> system :order (map system))]
    (start s)))

(defn stop-system [system]
  (doseq [s (->> system :order (map system) reverse)]
    (stop s)))

(defrecord HttpKitServer [state]
  LifeCycle
  (start [_]
    (reset! state (http-kit/run-server #'silkscreen.web/silkscreen-app {:port 8082 :join? false})))
  (stop [_]
    ; The state returned by http-kit/run-server is a function that stops the server
    (when @state (@state))
    (reset! state nil)))

(defn create-httpkit []
  (->HttpKitServer (atom nil)))

(defn create-system []
    {:httpkit (create-httpkit)
     :order [:httpkit]})
      
(defn -main []
  (start-system (create-system)))


