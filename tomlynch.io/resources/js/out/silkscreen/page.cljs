(ns silkscreen.page
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [silkscreen.controls :as controls]
            [silkscreen.xhr :as xhr]))

(enable-console-print!)

(def page-state (atom {:post nil}))

(silkscreen.xhr/edn-xhr
  {:method :get
   :url "post.edn"
   :on-complete #(swap! page-state assoc :post (:body %)) 
   :on-error #(println "Error retrieving post.")})

(defn nav-view [_ owner]
  (reify
    om/IRender
    (render [_]
      (html
        [:div.container-fluid
          [:ul.nav.navbar.navbar-nav
           [:li.active [:a {:href "#"} [:h3 "home"]]] 
           [:li.active [:a {:href "#"} [:h3 "about"]]] 
           [:li.active [:a {:href "#"} [:h3 "archive"]]] 
           [:li.active [:a {:href "#"} [:h3 "categories"]]] 
           [:li.active [:a {:href "#"} [:h3 "tags"]]]]])))) 

(defn post-view [app owner]
  (reify
    om/IRender
    (render [_]
      (when-let [post (get app :post)]
        ;(set! (.-title js/document (:title post)))
        (html [:div.container
               (om/build controls/markdown-textarea post
                       {:opts {:data-fn #(:body %)
                               :display-fn (constantly true)}})])))))

(om/root
  nav-view
  (atom {})
  {:target (. js/document (getElementById "nav"))})

(om/root
  post-view
  page-state
  {:target (. js/document (getElementById "post"))})


