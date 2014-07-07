(ns silkscreen.views
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as async :refer [put! chan mult tap alts! pub sub]]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as string]
            [silkscreen.controls :as controls]
            [silkscreen.events :as events]
            silkscreen.app))

(defn post-header [post]
  [:span
   [:h2 {:style {:display "inline"
                 :margin-right "10px"}}
    (:title post)]])

(defn add-post-control [ent]
  [:span.pull-right
   [:h4 {:style {:display "inline" :margin-right "10px"}} "Add new post"]
   [:a {:on-click #(silkscreen.app/dispatch!
                     "/post/new")}
    [:span.glyphicon.glyphicon-plus-sign]]])

(defn post-editor [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (events/listen
        owner 
        (fn [{:keys [path old-value new-value] :as topic} value]
          (if (= [:mode] path)
            (let [[old-mode] old-value
                  [new-mode] new-value]
              (println old-mode "-->" new-mode)
              (when (= [old-mode new-mode] [:edit :saved])
                (silkscreen.app/save-or-create-post!)))))))
    om/IRenderState
    (render-state [_ {:keys [editing]}]
      (let [post (get app :post)
            mode (get-in app [:mode 0])]
        (assert (not= mode :new) "should not be rendering post-editor in mode :new")
        (when post (set! (.-title js/document) (:title post)))
        (html 
          (case mode 
            :edit
            [:div
             [:div.row-fluid
              [:span.span4 
               (om/build controls/edit-field post 
                         {:opts {:data-key :title
                                 :finish-edit #(om/transact! app :mode
                                                             (fn [_] [:saved]))}})]
              [:span.pull-right (om/build controls/edit-control app)]]
             [:hr]
             [:div.row-fluid
              (om/build controls/editable-textarea post
                        {:opts {:data-key :body 
                                :finish-edit #(om/transact! app :mode
                                                            (fn [_] [:saved]))}})]]
            (:show :saved :cancelled)
            [:div
             [:div.row-fluid
              [:span (post-header post)]
              [:span.pull-right (om/build controls/edit-control app)]]
             [:hr]
             [:div.row-fluid
             (om/build controls/markdown-textarea post
                       {:opts {:data-fn #(:body %)
                               :display-fn (constantly true)}})]]))))))

(defn post-id-link [post-id]
  (html [:p [:a {:href "#"
                 :on-click 
                 #(silkscreen.app/dispatch! 
                    (str"/posts/" post-id))} post-id]]))

(defn post-ids-view [app owner]
  (reify 
    om/IRender
    (render [_]
      (let [post-ids (get app :post-ids)]
        (apply dom/div nil
               (map post-id-link (conj post-ids "new")))))))

