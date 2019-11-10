// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('app.auth');
app.core.simple_component = (function app$core$simple_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.redsquare","div.redsquare",750223053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bluesquare","div.bluesquare",1728806048),"Square"], null)], null);
});
app.core.counter_value_keeper = (function app$core$counter_value_keeper(value){
return (function (value__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),value__$1], null)], null);
});
});
app.core.counting_button = (function app$core$counting_button(txt){
var state = reagent.core.atom.call(null,(0));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (state){
return (function (){
return cljs.core.println.call(null,"I have just been updated");
});})(state))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (state){
return (function (txt__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.green","button.green",-1328299291),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.inc);
});})(state))
], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (state){
return (function (){
return cljs.core.reset_BANG_.call(null,state,(0));
});})(state))
], null),"Reset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.counter_value_keeper,cljs.core.deref.call(null,state)], null)], null);
});})(state))
], null));
});
app.core.complex_component = (function app$core$complex_component(a,b,c){
var state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (state){
return (function (){
return cljs.core.println.call(null,"I mounted");
});})(state))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"complex-component",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (state){
return (function (a__$1,b__$1,c__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),a__$1], null)," ",b__$1], null);
});})(state))
], null));
});
app.core.mount_root = (function app$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.auth.signup_page], null),document.getElementById("app"));
});
app.core.init_BANG_ = (function app$core$init_BANG_(){
return app.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map
