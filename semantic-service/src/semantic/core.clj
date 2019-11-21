(ns semantic.core
  (:require [arachne.aristotle :as aa]
            [route-map.core :as rm])
  (:use org.httpkit.server))

(defn another [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "<h1>Hello world</h1>"})

(defn app [req]
  {:status 200
   :heaers {"Content-Type" "text/html"}
   :body req})

(def routes
  {:GET #'app
   "hello" {:GET #'another}})

(defn dispatch [{meth :request-method uri :uri :as req}]
  (if-let [{handler :match params :params} (rm/match [meth uri] #'routes)]
    (handler (assoc req :route-params params))))

(comment

  (def ser (run-server #'dispatch {:port 5555}))

  (ser)

  )
