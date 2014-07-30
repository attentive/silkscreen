(ns silkscreen.conduit
  (:use [net.cgrand enlive-html tagsoup]))

; The implementations of conduit and defconduit are modified versions of 
; the macros template and deftemplate from the guts of Enlive. 

; They're named 'conduit' because the selectors and transformations serve as a 
; channel between the scaffold of HTML and some data provided as an argument.

; Tagsoup is used to parse a list of HTML nodes from a specified input file at runtime.

(defmacro conduit
  [args & forms]
  (let [[& body] (list* args forms)]
    `(fn [source# ~@args]
       (let [nodes# (parser (clojure.java.io/reader source#))]
         (emit* ((snippet* nodes# ~@body) ~@args))))))

(defmacro defconduit
  "Defines a group of selectors and transformations to be applied to 
   a nominated HTML template and arguments."
  [name args & forms]
  `(def ~name (conduit ~args ~@forms)))

; An example …

#_(defconduit page
    [page-data]
    [:head :title] (content (:title page-data))
    [:body :div#main] (content (:body page-data)))

; And this is how you use it …

#_(apply str 
         (page "/path/to/some/file.html" 
               {:title "This title will be inserted"
                :body "As will this body content, if there's a div in the input with id 'main'."}))
