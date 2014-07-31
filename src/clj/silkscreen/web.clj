(ns silkscreen.web
  (:use compojure.core
        [ring.middleware edn file file-info stacktrace reload]
        ring.middleware.session.cookie
        [silkscreen.publish :only [all cfg]])
  (:require compojure.handler
            [taoensso.timbre :as timbre]
            [ring.util.response :as resp]
            [silkscreen post publish path]))

(timbre/refer-timbre)

(defn- post-file [post-id]
  (str (:post-dir cfg)
       (silkscreen.path/post-file post-id)))

(defn- edn [data & status]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (str (pr-str data) \newline)})

(defn- all-post-ids []
  (let [a (all cfg)]
    (spy a)
    (map silkscreen.path/post-id (:posts (all cfg)))))

(defroutes editor-routes
  (GET "/posts/:post-id" [post-id]
       (spy post-id)
       (edn (silkscreen.post/read-file (post-file post-id))))

  (GET "/posts" _
       (edn (all-post-ids)))

  (PUT "/posts/:post-id" req
       (let [{params :params edn-params :edn-params} req]
         (silkscreen.post/write-post edn-params (post-file (:post-id params)))
         (edn {:message "Post updated" :success true})))

  (POST "/posts" req
        (let [{params :params edn-params :edn-params} req
              post (silkscreen.post/new-post edn-params)
              post-id (silkscreen.path/post-id post)]
          (spy post)
          (silkscreen.post/write-post post (post-file post-id))
          (edn {:message post-id :success true})))

  (DELETE "/posts/:post-id" [post-id]
            (clojure.java.io/delete-file (post-file post-id))
            (edn {:message "Post deleted" :success true}))

  (GET "/publish-site" req
       (silkscreen.publish/publish-site)
       (edn {:message "Site published" :success true}))
  
  (ANY "*" req
       (resp/redirect "/editor.html")))


(def silkscreen-app
  (-> editor-routes
      compojure.handler/api
      (wrap-edn-params)
      (wrap-file "resources/public")
      (wrap-file-info)))

