(ns app.core
  (:require [reagent.core :as r]
            [app.info :as info]))

(defn mount-root []
  (r/render [info/sympthoms-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
