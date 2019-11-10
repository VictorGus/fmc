// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13535__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13536__i = 0, G__13536__a = new Array(arguments.length -  0);
while (G__13536__i < G__13536__a.length) {G__13536__a[G__13536__i] = arguments[G__13536__i + 0]; ++G__13536__i;}
  args = new cljs.core.IndexedSeq(G__13536__a,0,null);
} 
return G__13535__delegate.call(this,args);};
G__13535.cljs$lang$maxFixedArity = 0;
G__13535.cljs$lang$applyTo = (function (arglist__13537){
var args = cljs.core.seq(arglist__13537);
return G__13535__delegate(args);
});
G__13535.cljs$core$IFn$_invoke$arity$variadic = G__13535__delegate;
return G__13535;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13538__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13539__i = 0, G__13539__a = new Array(arguments.length -  0);
while (G__13539__i < G__13539__a.length) {G__13539__a[G__13539__i] = arguments[G__13539__i + 0]; ++G__13539__i;}
  args = new cljs.core.IndexedSeq(G__13539__a,0,null);
} 
return G__13538__delegate.call(this,args);};
G__13538.cljs$lang$maxFixedArity = 0;
G__13538.cljs$lang$applyTo = (function (arglist__13540){
var args = cljs.core.seq(arglist__13540);
return G__13538__delegate(args);
});
G__13538.cljs$core$IFn$_invoke$arity$variadic = G__13538__delegate;
return G__13538;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
