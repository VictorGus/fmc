(ns app.info
  (:require [reagent.core :as r]
            [app.basic :as basic]
            [re-frame.core :as rf]
            [garden.core :as gc]
            [ajax.core :refer [GET POST]]
            [app.styles :as styles]))

(rf/reg-sub
 :form-data
 (fn [db _]
   ))

(rf/register-handler
 :send-data
 (fn [db _]
   (POST "http://localhost:5555/info")))

(def defaults {:temperature "Enter your current temperature"
                :blood-pressure "Enter your current blood pressure"
                :heart-rate "Enter your current heart rate"})

(GET "/hello")

(defn temperature-input [temperature-atom]
  (basic/input-element "temperature" "temperature" "text" temperature-atom (:temperature defaults)))

(defn blood-pressure-input [pressure-atom]
  (basic/input-element "temperature" "temperature" "text" pressure-atom (:blood-pressure defaults)))

(defn heart-rate-input [rate-atom]
  (basic/input-element "temperature" "temperature" "text" rate-atom (:heart-rate defaults)))

(defn sympthoms-page
  []
  (let [temperature (r/atom (:temperature defaults))
        blood-pressure (r/atom (:blood-pressure defaults))
        heart-rate (r/atom (:heart-rate defaults))]
    (fn
      []
      [:div.input-form {:style
                        {:font "95% Arial, Helvetica, sans-serif"
                         :max-width "400px"
                         :margin "10px auto"
                         :padding "16px"
                         :background "#F7F7F7"}}
       [:form
        [temperature-input temperature]
        [blood-pressure-input blood-pressure]
        [heart-rate-input heart-rate]
        [:input.btn {:type "Submit"
                     :on-click #(rf/dispatch [:form-data])
                     :style {:box-sizing "border-box"
                             :-webkit-box-sizing "border-box"
                             :-moz-box-sizing "border-box"
                             :width "100%"
                             :padding "3%"
                             :background "#43D1AF"
                             :border-bottom "2px solid #30C29E"
                             :border-top-style "none"
                             :border-right-style "none"
                             :border-left-style "none"
                             :color "#fff"}
                     :value "Get diagnosis"}]]])))
