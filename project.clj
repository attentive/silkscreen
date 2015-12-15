(defproject silkscreen "0.2"
  :description "Client-side blog renderer"
  :jvm-opts ^:replace ["-Xmx1g" "-server"]

  :dependencies [; publisher
                 [org.clojure/clojure "1.5.1"]
                 [enlive "1.1.5"]                 
                 [clj-time "0.7.0"]
                 [clj-glob "1.0.0"]
                 [me.raynes/conch "0.8.0"]
                 [autoclave "0.1.7"]
                 [rhizome "0.2.1"]
                 [hickory "0.5.3"]

                 ; editor backend
                 [com.stuartsierra/component "0.2.1"]
                 [http-kit "2.1.16"]
                 [ring/ring "1.2.1"]
                 [compojure "1.1.6"]
                 [fogus/ring-edn "0.2.0"]
                 [com.taoensso/timbre "3.2.1"]

                 ; clojurescript deps
                 [org.clojure/clojurescript "0.0-2227"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [jayq "2.5.1"]
                 [cljs-ajax "0.2.4"]
                 [om "0.6.2"]
                 [secretary "1.1.0"]
                 [sablono "0.2.17"]]


  :profiles {:dev {:source-paths ["dev"]
                   :dependencies [[org.clojure/tools.namespace "0.2.4"]
                                  [org.clojure/java.classpath "0.2.2"]
                                  [midje "1.6.3"]]}}

  :silkscreen {:source-dir "/Volumes/Space/personal/dev/silkscreen/tomlynch.io/"
               :target-dir "/Volumes/Space/personal/dev/attentive.github.io/"}

  :eval-in-leiningen true

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src/clj"]

  :resource-paths ["resources"]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/public/js/silkscreen.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/public/js/silkscreen.js"
                                   :output-dir "resources/public/js/prod"
                                   :optimizations :whitespace
                                   :source-map "resources/public/js/silkscreen.js.map"
                                   :pretty-print false}}]})
