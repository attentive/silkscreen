(ns silkscreen.editor
  (:require 
   [org.httpkit.server :as http-kit]
   [com.stuartsierra.component :as component]  
   silkscreen.web))

(defrecord HttpKitServer []
  component/Lifecycle
  (start [server]
    (println "starting httpkit …")
    (if-not (nil? (:stopfn server)) 
      server
      (assoc server :stopfn 
             (http-kit/run-server #'silkscreen.web/silkscreen-app 
                                  {:port 8082 :join? false}))))
  (stop [server]
    (println "stopping httpkit …")
    ; The value returned by http-kit/run-server is a fn that stops the server
    (when-not (nil? (:stopfn server))
      ((:stopfn server))
      (assoc server :stopfn nil))))

(defn editor-system []
  (component/system-map
   :httpkit (map->HttpKitServer {})))


