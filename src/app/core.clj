(ns app.core
  (:require [org.httpkit.client :as http]
            [route-map.core :as rm]
            [app.auth])
  (:use org.httpkit.server))

(defn client-info-handler [req]
  (let [temperature (get-in req [:route-params :temperature])
        blood-pressure (get-in req [:route-params :blood-pressure])
        heart-rate (get-in req [:route-params :heart-rate])
        opts (assoc {} :temperature temperature :blood-pressure blood-pressure :heart-rate heart-rate)]
    (request-semantic! {:url "http://localhost:5556/" :opts opts})
    {:status "200"
     :headers {"Content-Type" "text/html"}
     :body (:uid (:route-params req))}))

(defn signup-handler [req]
  {:status "200"
   :headers {"Content-Type" "application/jsom"}
   :body req})


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
