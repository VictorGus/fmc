(ns app.basic
  (:require [reagent.core :as r]))

(defn input-element [id name type value default-value]
  [:input {:id id
           :name name
           :style {	:-webkit-transition "all 0.30s ease-in-out"
                   :-moz-transition "all 0.30s ease-in-out"
                   :-ms-transition "all 0.30s ease-in-out"
                   :-o-transition "all 0.30s ease-in-out"
                   :outline "none"
                   :box-sizing "border-box"
                   :-webkit-box-sizing "border-box"
                   :-moz-box-sizing "border-box"
                   :width "100%"
                   :background "#fff"
                   :margin-bottom "4%"
                   :border "1px solid #ccc"
                   :padding "3%"
                   :color "#555"
                   :font "95% Arial, Helvetica, sans-serif"}
           :type type
           :required ""
           :value @value
           :on-change #(reset! value (-> % .-target .-value))
           :on-focus (when (= @value default-value)
                       #(reset! value nil))
           :on-blur (when (clojure.string/blank? @value)
                       #(reset! value default-value))}])

(defn dropdown [name opts]
  [:select {:name name}
   (map (fn [opt] [:option {:value (clojure.string/lower-case opt)} opt]) opts)])
