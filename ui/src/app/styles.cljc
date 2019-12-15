(ns app.styles
  (:require [garden.core :as gc]))

(defn style [styles]
  [:style (gc/css styles)])

(def styles
  [[:input-form
    {:font "95% Arial, Helvetica, sans-serif"
     :max-width "400px"
     :margin "10px auto"
     :padding "1600px"
     :background "#F7F7F7"}]
   [:btn:hover
    {:background "#2EBC99"}]])
