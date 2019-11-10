// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__14498){
var map__14499 = p__14498;
var map__14499__$1 = (((((!((map__14499 == null))))?(((((map__14499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14499):map__14499);
var operation = cljs.core.get.call(null,map__14499__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__14499__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__14499__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__14499__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__14501_14521 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__14502_14522 = null;
var count__14503_14523 = (0);
var i__14504_14524 = (0);
while(true){
if((i__14504_14524 < count__14503_14523)){
var vec__14513_14525 = cljs.core._nth.call(null,chunk__14502_14522,i__14504_14524);
var k_14526 = cljs.core.nth.call(null,vec__14513_14525,(0),null);
var cb_14527 = cljs.core.nth.call(null,vec__14513_14525,(1),null);
try{cb_14527.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e14516){var e_14528 = e14516;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_14526,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_14528);
}

var G__14529 = seq__14501_14521;
var G__14530 = chunk__14502_14522;
var G__14531 = count__14503_14523;
var G__14532 = (i__14504_14524 + (1));
seq__14501_14521 = G__14529;
chunk__14502_14522 = G__14530;
count__14503_14523 = G__14531;
i__14504_14524 = G__14532;
continue;
} else {
var temp__5720__auto___14533 = cljs.core.seq.call(null,seq__14501_14521);
if(temp__5720__auto___14533){
var seq__14501_14534__$1 = temp__5720__auto___14533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14501_14534__$1)){
var c__4550__auto___14535 = cljs.core.chunk_first.call(null,seq__14501_14534__$1);
var G__14536 = cljs.core.chunk_rest.call(null,seq__14501_14534__$1);
var G__14537 = c__4550__auto___14535;
var G__14538 = cljs.core.count.call(null,c__4550__auto___14535);
var G__14539 = (0);
seq__14501_14521 = G__14536;
chunk__14502_14522 = G__14537;
count__14503_14523 = G__14538;
i__14504_14524 = G__14539;
continue;
} else {
var vec__14517_14540 = cljs.core.first.call(null,seq__14501_14534__$1);
var k_14541 = cljs.core.nth.call(null,vec__14517_14540,(0),null);
var cb_14542 = cljs.core.nth.call(null,vec__14517_14540,(1),null);
try{cb_14542.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e14520){var e_14543 = e14520;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_14541,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_14543);
}

var G__14544 = cljs.core.next.call(null,seq__14501_14534__$1);
var G__14545 = null;
var G__14546 = (0);
var G__14547 = (0);
seq__14501_14521 = G__14544;
chunk__14502_14522 = G__14545;
count__14503_14523 = G__14546;
i__14504_14524 = G__14547;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
