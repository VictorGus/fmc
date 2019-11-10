(ns app.basic
  (:require [reagent.core :as r]))

(defn input-element [id name type value default-value]
  [:input {:id id
           :name name
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
