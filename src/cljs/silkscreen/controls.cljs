(ns silkscreen.controls
  (:require [om.core :as om :include-macros true]
            [jayq.core :as jq :refer [$]]
            [sablono.core :as html :refer-macros [html]]))

(def ENTER-KEY 13)

(defn handle-change [e data data-key owner]
  ;(println "handle-change" e @data edit-key owner)
  (om/transact! data data-key (fn [_] (.. e -target -value))))

(defn edit-control [app owner]
  (reify
    om/IRender
    (render [_]
      (let [mode (get-in app [:mode 0])]
        (html (case mode
                :edit
                [:div.button-group
                 [:button.btn.btn-default
                  {:type "button"
                   :on-click #(om/transact! app :mode (fn [_] [:show]))}
                  "Cancel"]
                 [:button.btn.btn-default
                  {:type "button"
                   :on-click #(om/transact! app :mode (fn [_] [:saved]))}
                  "Save"]]
                (:show :saved :cancelled)
                [:div.button-group
                 [:button.btn.btn-default
                  {:type "button"
                   :on-click #(om/transact! app :mode (fn [_] [:edit]))}
                  "Edit"]]))))))

(defn edit-field [data owner {:keys [data-key finish-edit] :as opts}]
  (reify
    om/IRender
    (render [_]
      (println "edit-field")
      (let [edit-data (data-key data)]
        (html 
          [:input.input-lg
           {:type "text"
            :value edit-data
            :on-change #(handle-change % data data-key owner)}])))))

(defn markdown-textarea [data owner {:keys [display-fn data-fn] :as opts}]
  (reify
    om/IRender
    (render [_]
      (html (if data 
              [:span {:style {:display (if display-fn (display-fn data) true)}
                      :dangerouslySetInnerHTML 
                      {:__html (.makeHtml (js/Showdown.converter.) 
                                          (or (data-fn data) "[add text]"))}}]
              [:span "[loading …]"])))))

(defn editable-textarea [data owner {:keys [data-key finish-edit] :as opts}]
  (reify
    om/IRender
    (render [_]
      (let [edit-data (data-key data)]
        (html
           ; usually displayed when editing
           [:textarea.col-md-8 
            {:rows "10"
             :style {:resize "vertical"
                     :padding-left "3px"}
             :value edit-data
             :on-change #(handle-change % data data-key owner)}]))))) ; submit changes 

(defn attribution [rec] 
  (html [:div.row-fluid 
         [:span.pull-right
          [:em
           (str "Modified by " (:modified_by rec) " " (:modified rec))]]]))

(defn combo [data id]
  (html [:select {:placeholder "relates to ..." :id id} 
         (map (fn [d] [:option d]) data)]))


