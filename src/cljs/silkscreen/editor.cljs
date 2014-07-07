(ns silkscreen.editor
  (:require [om.core :as om :include-macros true]
            [cljs.core.async :refer [put! chan pub]]
            [sablono.core :as html :refer-macros [html]]
            silkscreen.app
            silkscreen.views))

(enable-console-print!)

(silkscreen.app/load-post-ids!)

(defn editor-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.container-fluid
             [:div.row-fluid {:style {:padding "10px"}} [:span [:a {:href "/editor.html"} [:h2 "silkscreen :: editor"]]]]
             [:div.row-fluid 
              [:div.col-md-3 (om/build silkscreen.views/post-ids-view app)]
              [:div.col-md-9 (om/build silkscreen.views/post-editor app)]]]))))

(let [tx-chan (chan)
      tx-pub-chan (pub tx-chan (fn [_] :txs))]
  (om/root
    editor-view
    silkscreen.app/editor-state
    {:target (. js/document (getElementById "main"))
     :shared {:event-chan tx-pub-chan}
     :tx-listen (fn [tx-data root-cursor] (put! tx-chan [tx-data root-cursor]))}))

(silkscreen.app/set-new-post!)

