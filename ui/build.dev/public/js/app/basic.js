// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.basic');
goog.require('cljs.core');
goog.require('reagent.core');
app.basic.input_element = (function app$basic$input_element(id,name,type,value,default_value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),"",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23597_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__23597_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,value),default_value))?(function (){
return cljs.core.reset_BANG_.call(null,value,null);
}):null),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((clojure.string.blank_QMARK_.call(null,cljs.core.deref.call(null,value)))?(function (){
return cljs.core.reset_BANG_.call(null,value,default_value);
}):null)], null)], null);
});
app.basic.dropdown = (function app$basic$dropdown(name,opts){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null),cljs.core.map.call(null,(function (opt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),clojure.string.lower_case.call(null,opt)], null),opt], null);
}),opts)], null);
});

//# sourceMappingURL=basic.js.map
