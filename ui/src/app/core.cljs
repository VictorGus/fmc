(ns app.core
  (:require [reagent.core :as r]
            [app.auth :as auth]))

(defn simple-component []
  [:div.redsquare
   [:div.bluesquare "Square"]])



(defn counter-value-keeper [value]
  (fn [value]
    [:div
     [:a value]]))

(defn counting-button [txt]
  (let [state (r/atom 0)] ;; state is accessible in the render function
    (r/create-class
     {:component-did-update
      (fn []
        (println "I have just been updated"))

      :reagent-render
      (fn [txt]
        [:div
         [:button.green
          {:on-click #(swap! state inc)}
          (str txt " " @state)]
         [:button
          {:on-click #(reset! state 0)}
          "Reset"]
         [counter-value-keeper @state]])})))

(defn complex-component [a b c]
  (let [state (r/atom {})] ;; you can include state
    (r/create-class
     {:component-did-mount
      (fn [] (println "I mounted"))

      :display-name "complex-component"

      :reagent-render
      (fn [a b c]
        [:div {:class c}
         [:i a] " " b])})))

(defn mount-root []
  (r/render [auth/signup-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
