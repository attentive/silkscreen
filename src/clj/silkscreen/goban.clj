(ns silkscreen.goban
  (:require [clojure.string :as string]))

(defn- svg-path [moves]
  (apply str (for [[typ & args] moves]
               (if (= typ :point) 
                 (string/join "," args)
                 (str (name typ) (string/join "," args))))))

(def board 
  [:svg {:xmlns "http://w3.org/2000/svg" :viewBox "0 0 96 96"}
   [:rect {:width 96 :height 96 :fill #_"#e7dbd7" "#dcb35c"}]
   [:rect {:width 90 :height 90 :x 3 :y 3 :stroke "#000" :stroke-width 0.2 :fill "none"}]
   [:path {:stroke "#000" :stroke-width 0.2 :fill "none" 
           :d (svg-path (interleave (cons [:m 3 8] (repeat 16 [:m 0 5])) 
                                    (cycle [[:h 90] [:h -90]])))}] ; horizontals
   [:path {:stroke "#000" :stroke-width 0.2 :fill "none"
           :d (svg-path (interleave (cons [:m 8 3] (repeat 16 [:m 5 0]))
                                    (cycle [[:v 90] [:v -90]])))}] ; verticals
   [:path {:stroke "#000" :stroke-width 0.8 :stroke-linecap "round" 
           :d (svg-path (partition 3 (flatten
                                      (interleave (cons [:m 18 78] (repeat 3 [[:m 0 -30] [:point 10 0]]))
                                                  (cycle [(repeat 2 [[:m 30 0] [:point 10 0]])
                                                          (repeat 2 [[:m -30 0] [:point 10 0]])])))))}]])
