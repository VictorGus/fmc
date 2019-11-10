(ns app.auth
  (:require [reagent.core :as r]
            [app.basic :as basic]))

(defn email-input [email-atom]
  (basic/input-element "email" "email" "email" email-atom "Enter your email"))

(defn first-name-input [first-name-atom]
  (basic/input-element "name" "name" "text" first-name-atom "Enter your first name"))

(defn last-name-input [last-name-atom]
  (basic/input-element "name" "name" "text" last-name-atom "Enter your last name"))

(defn lang-list [langs]
  (basic/dropdown "lang-list" langs))

(defn birthdate-input [birthdate-atom]
  (basic/input-element "birthdate" "birthdate" "date" birthdate-atom ""))

(defn signup-page []
  (let [email-address (r/atom "Enter your email")
        first-name (r/atom "Enter your first name")
        last-name (r/atom "Enter your last name")
        birthdate (r/atom nil)]
    (fn []
      [:div.signup-wrapper
       [:form
        [first-name-input first-name]
        [last-name-input last-name]
        [email-input email-address]
        [birthdate-input birthdate]
        [lang-list ["Russian" "English"]]]])))
