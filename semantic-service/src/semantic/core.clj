(ns semantic.core
  (:require [arachne.aristotle :as aa])
  (:use org.httpkit.server))


(defn app [req]
  {:status 200
   :heaers {"Content-Type" "text/html"}
   :body req})

(comment

  (def ser (run-server app {:port 5555}))

  (ser)

  )
