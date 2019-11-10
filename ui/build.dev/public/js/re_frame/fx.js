// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__23247 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23248 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23248;

try{try{var seq__23249 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23250 = null;
var count__23251 = (0);
var i__23252 = (0);
while(true){
if((i__23252 < count__23251)){
var vec__23259 = cljs.core._nth.call(null,chunk__23250,i__23252);
var effect_key = cljs.core.nth.call(null,vec__23259,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23259,(1),null);
var temp__5718__auto___23281 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___23281)){
var effect_fn_23282 = temp__5718__auto___23281;
effect_fn_23282.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23283 = seq__23249;
var G__23284 = chunk__23250;
var G__23285 = count__23251;
var G__23286 = (i__23252 + (1));
seq__23249 = G__23283;
chunk__23250 = G__23284;
count__23251 = G__23285;
i__23252 = G__23286;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23249);
if(temp__5720__auto__){
var seq__23249__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23249__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23249__$1);
var G__23287 = cljs.core.chunk_rest.call(null,seq__23249__$1);
var G__23288 = c__4550__auto__;
var G__23289 = cljs.core.count.call(null,c__4550__auto__);
var G__23290 = (0);
seq__23249 = G__23287;
chunk__23250 = G__23288;
count__23251 = G__23289;
i__23252 = G__23290;
continue;
} else {
var vec__23262 = cljs.core.first.call(null,seq__23249__$1);
var effect_key = cljs.core.nth.call(null,vec__23262,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23262,(1),null);
var temp__5718__auto___23291 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___23291)){
var effect_fn_23292 = temp__5718__auto___23291;
effect_fn_23292.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23293 = cljs.core.next.call(null,seq__23249__$1);
var G__23294 = null;
var G__23295 = (0);
var G__23296 = (0);
seq__23249 = G__23293;
chunk__23250 = G__23294;
count__23251 = G__23295;
i__23252 = G__23296;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__14476__auto___23297 = re_frame.interop.now.call(null);
var duration__14477__auto___23298 = (end__14476__auto___23297 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14477__auto___23298,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__14476__auto___23297);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23247;
}} else {
var seq__23265 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23266 = null;
var count__23267 = (0);
var i__23268 = (0);
while(true){
if((i__23268 < count__23267)){
var vec__23275 = cljs.core._nth.call(null,chunk__23266,i__23268);
var effect_key = cljs.core.nth.call(null,vec__23275,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23275,(1),null);
var temp__5718__auto___23299 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___23299)){
var effect_fn_23300 = temp__5718__auto___23299;
effect_fn_23300.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23301 = seq__23265;
var G__23302 = chunk__23266;
var G__23303 = count__23267;
var G__23304 = (i__23268 + (1));
seq__23265 = G__23301;
chunk__23266 = G__23302;
count__23267 = G__23303;
i__23268 = G__23304;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23265);
if(temp__5720__auto__){
var seq__23265__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23265__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23265__$1);
var G__23305 = cljs.core.chunk_rest.call(null,seq__23265__$1);
var G__23306 = c__4550__auto__;
var G__23307 = cljs.core.count.call(null,c__4550__auto__);
var G__23308 = (0);
seq__23265 = G__23305;
chunk__23266 = G__23306;
count__23267 = G__23307;
i__23268 = G__23308;
continue;
} else {
var vec__23278 = cljs.core.first.call(null,seq__23265__$1);
var effect_key = cljs.core.nth.call(null,vec__23278,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23278,(1),null);
var temp__5718__auto___23309 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___23309)){
var effect_fn_23310 = temp__5718__auto___23309;
effect_fn_23310.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23311 = cljs.core.next.call(null,seq__23265__$1);
var G__23312 = null;
var G__23313 = (0);
var G__23314 = (0);
seq__23265 = G__23311;
chunk__23266 = G__23312;
count__23267 = G__23313;
i__23268 = G__23314;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__23315 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__23316 = null;
var count__23317 = (0);
var i__23318 = (0);
while(true){
if((i__23318 < count__23317)){
var map__23323 = cljs.core._nth.call(null,chunk__23316,i__23318);
var map__23323__$1 = (((((!((map__23323 == null))))?(((((map__23323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23323):map__23323);
var effect = map__23323__$1;
var ms = cljs.core.get.call(null,map__23323__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23323__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23315,chunk__23316,count__23317,i__23318,map__23323,map__23323__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23315,chunk__23316,count__23317,i__23318,map__23323,map__23323__$1,effect,ms,dispatch))
,ms);
}


var G__23327 = seq__23315;
var G__23328 = chunk__23316;
var G__23329 = count__23317;
var G__23330 = (i__23318 + (1));
seq__23315 = G__23327;
chunk__23316 = G__23328;
count__23317 = G__23329;
i__23318 = G__23330;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23315);
if(temp__5720__auto__){
var seq__23315__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23315__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23315__$1);
var G__23331 = cljs.core.chunk_rest.call(null,seq__23315__$1);
var G__23332 = c__4550__auto__;
var G__23333 = cljs.core.count.call(null,c__4550__auto__);
var G__23334 = (0);
seq__23315 = G__23331;
chunk__23316 = G__23332;
count__23317 = G__23333;
i__23318 = G__23334;
continue;
} else {
var map__23325 = cljs.core.first.call(null,seq__23315__$1);
var map__23325__$1 = (((((!((map__23325 == null))))?(((((map__23325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23325):map__23325);
var effect = map__23325__$1;
var ms = cljs.core.get.call(null,map__23325__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23325__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23315,chunk__23316,count__23317,i__23318,map__23325,map__23325__$1,effect,ms,dispatch,seq__23315__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23315,chunk__23316,count__23317,i__23318,map__23325,map__23325__$1,effect,ms,dispatch,seq__23315__$1,temp__5720__auto__))
,ms);
}


var G__23335 = cljs.core.next.call(null,seq__23315__$1);
var G__23336 = null;
var G__23337 = (0);
var G__23338 = (0);
seq__23315 = G__23335;
chunk__23316 = G__23336;
count__23317 = G__23337;
i__23318 = G__23338;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__23339 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__23340 = null;
var count__23341 = (0);
var i__23342 = (0);
while(true){
if((i__23342 < count__23341)){
var event = cljs.core._nth.call(null,chunk__23340,i__23342);
re_frame.router.dispatch.call(null,event);


var G__23343 = seq__23339;
var G__23344 = chunk__23340;
var G__23345 = count__23341;
var G__23346 = (i__23342 + (1));
seq__23339 = G__23343;
chunk__23340 = G__23344;
count__23341 = G__23345;
i__23342 = G__23346;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23339);
if(temp__5720__auto__){
var seq__23339__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23339__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23339__$1);
var G__23347 = cljs.core.chunk_rest.call(null,seq__23339__$1);
var G__23348 = c__4550__auto__;
var G__23349 = cljs.core.count.call(null,c__4550__auto__);
var G__23350 = (0);
seq__23339 = G__23347;
chunk__23340 = G__23348;
count__23341 = G__23349;
i__23342 = G__23350;
continue;
} else {
var event = cljs.core.first.call(null,seq__23339__$1);
re_frame.router.dispatch.call(null,event);


var G__23351 = cljs.core.next.call(null,seq__23339__$1);
var G__23352 = null;
var G__23353 = (0);
var G__23354 = (0);
seq__23339 = G__23351;
chunk__23340 = G__23352;
count__23341 = G__23353;
i__23342 = G__23354;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__23355 = cljs.core.seq.call(null,value);
var chunk__23356 = null;
var count__23357 = (0);
var i__23358 = (0);
while(true){
if((i__23358 < count__23357)){
var event = cljs.core._nth.call(null,chunk__23356,i__23358);
clear_event.call(null,event);


var G__23359 = seq__23355;
var G__23360 = chunk__23356;
var G__23361 = count__23357;
var G__23362 = (i__23358 + (1));
seq__23355 = G__23359;
chunk__23356 = G__23360;
count__23357 = G__23361;
i__23358 = G__23362;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23355);
if(temp__5720__auto__){
var seq__23355__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23355__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23355__$1);
var G__23363 = cljs.core.chunk_rest.call(null,seq__23355__$1);
var G__23364 = c__4550__auto__;
var G__23365 = cljs.core.count.call(null,c__4550__auto__);
var G__23366 = (0);
seq__23355 = G__23363;
chunk__23356 = G__23364;
count__23357 = G__23365;
i__23358 = G__23366;
continue;
} else {
var event = cljs.core.first.call(null,seq__23355__$1);
clear_event.call(null,event);


var G__23367 = cljs.core.next.call(null,seq__23355__$1);
var G__23368 = null;
var G__23369 = (0);
var G__23370 = (0);
seq__23355 = G__23367;
chunk__23356 = G__23368;
count__23357 = G__23369;
i__23358 = G__23370;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
