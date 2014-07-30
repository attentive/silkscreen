(ns silkscreen.goban
  (:require [clojure.string :as string]
            hiccup.core))

(let [CEL 5.0   ; cell dimension in SVG viewport units
      BDR 3.0   ; border width
      PXR 10    ; ratio of pixels to SVG vw
      BOA (* CEL 18) ; board side
      DIM (+ BOA (* BDR 2))] ; goban side

  (defn markup-stone [column row colour]
    "Append a stone of the specified colour in the specified location to an svg diagram. 
     row - 1 through 19 
     column - keywords :a through :t
     colour - :black, :white or :red"
    (let [row (dec row)
          col (- (int (first (name column))) (int \a))]
      [:circle {:cy (+ BDR (* row CEL)) :cx (+ BDR (* col CEL))
                :r (/ CEL 2) :stroke "none" :fill (name colour)}]))

  (defn- svg-path [moves]
    (apply str (for [[typ & args] moves]
                 (if (= typ :point) 
                   (string/join "," args)
                   (str (name typ) (string/join "," args))))))

  (defn markup-board [stones]
    "Create a goban as Hiccup data."
    (concat
      [:g
       [:rect {:width DIM :height DIM :fill #_"#e7dbd7" "#dcb35c"}]
       [:rect {:width BOA :height BOA :x BDR :y BDR :stroke "#000" :stroke-width 0.2 :fill "none"}]
       [:path {:stroke "#000" :stroke-width 0.2 :fill "none" 
               :d (svg-path (interleave (cons [:m BDR (+ BDR CEL)] (repeat 16 [:m 0 CEL])) 
                                        (cycle [[:h BOA] [:h (- BOA)]])))}] ; horizontals
       [:path {:stroke "#000" :stroke-width 0.2 :fill "none"
               :d (svg-path (interleave (cons [:m (+ BDR CEL) BDR] (repeat 16 [:m CEL 0]))
                                        (cycle [[:v BOA] [:v (- BOA)]])))}] ; verticals
       [:path {:stroke "#000" :stroke-width 0.8 :stroke-linecap "round" 
               :d (svg-path (partition 3 (flatten
                                           (interleave (cons [:m 18 78] (repeat 3 [[:m 0 -30] [:point 10 0]]))
                                                       (cycle [(repeat 2 [[:m 30 0] [:point 10 0]])
                                                               (repeat 2 [[:m -30 0] [:point 10 0]])])))))}]]
      (into [] (map #(apply markup-stone %) stones))))

  (defn markup-empty-board []
    (markup-board))

  (defn board->svg [stones]
    (str "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">"
         (hiccup.core/html [:svg {:xmlns "http://www.w3.org/2000/svg"
                                  :width (* PXR DIM) :height (* PXR DIM) 
                                  :viewBox (string/join " " (map str [0 0 DIM DIM]))}
                            (markup-board stones)]))))

(defn test-board []
  (board->svg [[:a 1 :white]
               [:b 2 :black]
               [:c 3 :white]
               [:d 4 :red]]))



