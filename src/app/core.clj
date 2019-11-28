(ns app.core
  (:require [org.httpkit.client :as http]
            [route-map.core :as rm]
            [app.auth])
  (:use org.httpkit.server))

(defn request-semantic! [{url :url opts :opts body :body :as ctx}]
  @(http/get url opts))

(defn initialize-semantic! []
  (request-semantic {:url "" :method :GET :request-body ""}))

(defn client-info-handler [req]
  {:status "200"
   :headers {"Content-Type" "application/json"}
   :body (:query-string req)})

(defn auth-handler [req]
  {:status "200"
   :headers {"Content-Type" "application/jsom"}
   :body req})

(defn get-diagnosis [req]
  )

(def routes
  {:GET #'auth-handler
   "info" {:POST #'client-info-handler}
   "diag" {:GET #'get-diagnosis}})

(defn dispatch [{meth :request-method uri :uri :as req}]
  (if-let [{handler :match params :params} (rm/match [meth uri] #'routes)]
    (handler (assoc req :route-params params))))

(comment

  (def ser (run-server #'dispatch {:port 5555}))

  (ser)

  )
