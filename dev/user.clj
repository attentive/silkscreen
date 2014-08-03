(ns user
  "Tools for interactive development with the REPL. This file should
  not be included in a production build of the application."
  (:require
    [clojure.java.io :as io]
    [clojure.java.javadoc :refer (javadoc)]
    [clojure.pprint :refer (pprint)]
    [clojure.reflect :refer (reflect)]
    [clojure.repl :refer (apropos dir doc find-doc pst source)]
    [clojure.set :as set]
    [clojure.string :as str]
    [clojure.test :as test]
    [clojure.tools.namespace.repl :refer (refresh refresh-all)]
    [com.stuartsierra.component :as component]  
    midje.repl
    silkscreen.editor))

(def system nil)

(defn init []
  (println "initialising editor …")
  (alter-var-root #'system 
                  (constantly (silkscreen.editor/editor-system))))

(defn start []
  (println "starting editor …")
  (alter-var-root #'system component/start))

(defn stop []
  (println "stopping editor …")
  (alter-var-root #'system component/stop))

(defn go []
  (init)
  (start))

(defn reset []
  (stop)
  (refresh :after 'user/go))

(defn reset-all []
  (stop)
  (refresh-all :after 'user/go))

(defn midje []
  (midje.repl/autotest))

