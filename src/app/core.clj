(ns app.core
  (:require [org.httpkit.client :as http]
            [route-map.core :as rm]
            [app.auth])
  (:use org.httpkit.server))

(defn client-info-handler [req]
  (request-semantic! "http://localhost:5556/")
  {:status "200"
   :headers {"Content-Type" "text/html"}
   :body (:uid (:route-params req))})

(defn signup-handler [req]
  {:status "200"
   :headers {"Content-Type" "application/jsom"}
   :body req})

(defn get-diagnosis [req]
  )

(def routes
  {:GET #'signup-handler
   "info" {:GET #'client-info-handler}
   "diag" {:GET #'get-diagnosis}})

(defn dispatch [{meth :request-method uri :uri :as req}]
  (if-let [{handler :match params :params} (rm/match [meth uri] #'routes)]
    (handler (assoc req :route-params params))))

(comment

  (def ser (run-server #'dispatch {:port 5555}))

  (ser)

  )
