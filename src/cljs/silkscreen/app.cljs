(ns silkscreen.app
  (:require [om.core :as om :include-macros true]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [cljs.core.async :refer [put! chan pub]]
            silkscreen.xhr))

(declare set-new-post! set-current-post!)

(defn dispatch! [r]
  (secretary/dispatch! r))

; Handle interacting with the history api. 
; Built on top of history.js to smooth over cross-browser stupidity.
; Code is from: 
; https://github.com/tomconnors/birds/blob/master/src/client/birds/history.cljs

(defn push-state!
  "Add a state entry and update the url to show it."
  [url]
  (.pushState js/History nil nil url))

(defn get-state
  "Return the current route as a string"
  []
  (.-hash (.getState js/History)))

(defn on-state-change
  "Add a state-change callback. The callback should be a fn that takes a single
  'location' argument"
  [fun]
  (.bind (aget js/History "Adapter") js/window "statechange" #(fun (get-state))))

; Make back button handle pushState by 
; dispatching the new location
(on-state-change
  #(dispatch! %))

; Set up post routes
(defroute "/posts/new" []
  (set-new-post!))

(defroute "/posts/:post-id" {:as params}
  (set-current-post! (:post-id params)))

; editor-state structure eg 
#_{:error "error on login"
   :post {}
   :mode [:show]
   :post-ids ["post-id-1" "post-id-2"]}
 
; :mode can be :show, :edit, :new, :cancelled or :saved

(def editor-state (atom {:error nil :post nil :mode [:show] :post-ids nil}))

(defn set-error!
  "Set the current application error."
  [err]
  (swap! editor-state assoc :error err))

(defn set-new-post!
  "Start editing a new post."
  []
  (push-state! "/post/new")
  (swap! editor-state assoc :post {:title "[new post]" :body ""}))

(defn set-current-post! 
  "Set the current post and update the browser address."
  [post-id]
  (let [link (str "/posts/" post-id)]
    (println "(set-current-post! " post-id ")")
    (silkscreen.xhr/edn-xhr
      {:method :get
       :url link
       :on-complete #(do (push-state! link)
                         (swap! editor-state assoc :post 
                                (merge {:post-id post-id} (:body %))))
       :on-error #(set-error! (str "Error retrieving post: " (:error (:body %))))})))

(defn create-post!
  []
  (let [link (str "/posts")]
    (println "post: " (:post @editor-state))
    (silkscreen.xhr/edn-xhr
      {:method :post
       :data (:post @editor-state)
       :url link
       :on-complete #(do (println "(create-post!)")
                         (dispatch! (str link "/" (:post-id %))))
       :on-error #(set-error! (str "Error updating post: " (:error (:body %))))})))

(defn save-post! 
  []
  (let [post-id (:post-id (:post @editor-state))
        link (str "/posts/" post-id)]
    (silkscreen.xhr/edn-xhr
      {:method :put
       :data (:post @editor-state)
       :url link
       :on-complete #(do (println "(save-post! " post-id ")")
                         (dispatch! link))
       :on-error #(set-error! (str "Error updating post: " (:error (:body %))))})))

(defn save-or-create-post!
  []
  (let [post-id (:post-id (:post @editor-state))]
    (if post-id
      (save-post!)
      (create-post!))))

(defn load-post-ids!
  "Retrieve a list of all-post-ids."
  []
  (println "(load-post-ids!)")
  (silkscreen.xhr/edn-xhr
    {:method :get
     :url "/posts"
     :on-complete #(swap! editor-state assoc :post-ids (:body %))
     :on-error #(set-error! (str "Error retrieving post-ids: " 
                                 (:error (:body %))))}))

