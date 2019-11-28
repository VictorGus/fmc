(ns semantic.core
  (:require [arachne.aristotle :as aa]
            [arachne.aristotle.query :as q]
            [arachne.aristotle.registry :as r]
            [arachne.aristotle.graph :as g]
            [route-map.core :as rm])
  (:use org.httpkit.server))

(def graph (aa/graph :jena-mini))

(defn init! []
  (r/prefix 'foaf "http://xmlns.com/foaf/0.1/")
  (r/prefix 'semantic.core "http://arachne-framework.org/example#")
  (g/triples {:rdf/about ::diagnosis
              :foaf/symptoms [{:rdf/about ::temperature
                               :foaf/value "> 39"}]})

  (aa/add graph {:rdf/about ::sepsis
                 :foaf/diagnosis "Sepsis"
                 :foaf/symptoms [{:foaf/temperature ">= 39"
                                  :foaf/heart-rate "> 90"
                                  :foaf/blood-pressure "< 110"}]})
  true)

(defn ask-sparql [{:keys [temperature age blood-pressure heart-rate other] :as params}]
  (q/run graph '[:bgp [:semantic.core/sepsis :foaf/temperature ?person]
                 [?person :foaf/name ?name]]))

(comment
  (g/triple [::sepsis :foaf/diagnosis "Sepsis"])

  (q/run graph '[:bgp [:semantic.core/sepsis :foaf/temperature ?person]
                 [?person :foaf/name ?name]]))

(defn get-diagnosis [req]
  (if-let [diag (ask-sparql {})]
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body {:message "Data has been received successfully"
            :diagnosis diagnosis}}
    {:status 400
     :headers {"Content-Type" "application/json"}
     :body {:message "There is no such diagnosis"}}))

(defn app [req]
  (if (init!)
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body "Service initialized"}
    {:status 404
     :headers {"Content-Type" "application/json"}
     :body "Unable to initialized service"}))

(def routes
  {:GET #'app
   "dianosis" {:GET #'get-diagnosis}})

(defn dispatch [{meth :request-method uri :uri :as req}]
  (if-let [{handler :match params :params} (rm/match [meth uri] #'routes)]
    (handler (assoc req :route-params params))))

(comment

  (def ser (run-server #'dispatch {:port 5556}))

  (ser)

  )
