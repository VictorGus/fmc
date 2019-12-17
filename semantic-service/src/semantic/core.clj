(ns semantic.core
  (:require [arachne.aristotle :as aa]
            [arachne.aristotle.query :as q]
            [arachne.aristotle.registry :as r]
            [arachne.aristotle.graph :as g]
            [clojure.java.io :as io]
            [route-map.core :as rm])
  (:use org.httpkit.server))

(def graph (aa/graph :jena-mini))

(defn init! []
  (r/prefix 'foaf "http://xmlns.com/foaf/0.1/")
  (r/prefix 'semantic.core "http://arachne-framework.org/example#")
  true)

(defn ask-jena [{:keys [temperature blood-pressure heart-rate] :as params}]
  (let [g (aa/read (aa/graph :jena-mini) (io/resource "diagnosis.rdf.edn"))]
    (q/run g '[?name]
      '[:bgp
        ["<http://example.com/sympthoms>" :foaf/associated-with ?diagnosis]
        [?diagnosis :foaf/diagnosis ?name]])))

(comment
  (init!)

  (first (ask-jena {}))

  (g/triples {:rdf/about ::diagnosis
              :foaf/symptoms [{:rdf/about ::temperature
                               :foaf/value "> 39"}]})

  (aa/add graph {:rdf/about ::sepsis
                 :foaf/diagnosis "Sepsis"
                 :foaf/symptoms [{:foaf/temperature ">= 39"
                                  :foaf/heart-rate "> 90"
                                  :foaf/blood-pressure "< 110"}]})

  (g/triple [::sepsis :foaf/diagnosis "Sepsis"])

  (aa/read (aa/graph :simple) (io/resource "diagnosis.rdf.edn"))

  )

(defn request-semantic! [{url :url opts :opts body :body :as ctx}]
  @(get url opts))

(defn initialize-semantic! []
  (request-semantic! {:url "" :method :GET :request-body ""}))

(defn get-diagnosis [req]
  (if-let [diag (ask-jena {})]
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body {:message "Data has been received successfully"
            :diagnosis diag}}
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
