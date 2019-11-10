// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__19709 = arguments.length;
switch (G__19709) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19710 = (function (f,blockable,meta19711){
this.f = f;
this.blockable = blockable;
this.meta19711 = meta19711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19712,meta19711__$1){
var self__ = this;
var _19712__$1 = this;
return (new cljs.core.async.t_cljs$core$async19710(self__.f,self__.blockable,meta19711__$1));
});

cljs.core.async.t_cljs$core$async19710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19712){
var self__ = this;
var _19712__$1 = this;
return self__.meta19711;
});

cljs.core.async.t_cljs$core$async19710.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19711","meta19711",-579772220,null)], null);
});

cljs.core.async.t_cljs$core$async19710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19710";

cljs.core.async.t_cljs$core$async19710.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async19710");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19710.
 */
cljs.core.async.__GT_t_cljs$core$async19710 = (function cljs$core$async$__GT_t_cljs$core$async19710(f__$1,blockable__$1,meta19711){
return (new cljs.core.async.t_cljs$core$async19710(f__$1,blockable__$1,meta19711));
});

}

return (new cljs.core.async.t_cljs$core$async19710(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__19716 = arguments.length;
switch (G__19716) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__19719 = arguments.length;
switch (G__19719) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__19722 = arguments.length;
switch (G__19722) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19724 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19724);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19724,ret){
return (function (){
return fn1.call(null,val_19724);
});})(val_19724,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__19726 = arguments.length;
switch (G__19726) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___19728 = n;
var x_19729 = (0);
while(true){
if((x_19729 < n__4607__auto___19728)){
(a[x_19729] = (0));

var G__19730 = (x_19729 + (1));
x_19729 = G__19730;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19731 = (i + (1));
i = G__19731;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19732 = (function (flag,meta19733){
this.flag = flag;
this.meta19733 = meta19733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19734,meta19733__$1){
var self__ = this;
var _19734__$1 = this;
return (new cljs.core.async.t_cljs$core$async19732(self__.flag,meta19733__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19734){
var self__ = this;
var _19734__$1 = this;
return self__.meta19733;
});})(flag))
;

cljs.core.async.t_cljs$core$async19732.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19732.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19732.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19733","meta19733",-435811580,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19732.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19732";

cljs.core.async.t_cljs$core$async19732.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async19732");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19732.
 */
cljs.core.async.__GT_t_cljs$core$async19732 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19732(flag__$1,meta19733){
return (new cljs.core.async.t_cljs$core$async19732(flag__$1,meta19733));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19732(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19735 = (function (flag,cb,meta19736){
this.flag = flag;
this.cb = cb;
this.meta19736 = meta19736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19737,meta19736__$1){
var self__ = this;
var _19737__$1 = this;
return (new cljs.core.async.t_cljs$core$async19735(self__.flag,self__.cb,meta19736__$1));
});

cljs.core.async.t_cljs$core$async19735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19737){
var self__ = this;
var _19737__$1 = this;
return self__.meta19736;
});

cljs.core.async.t_cljs$core$async19735.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19735.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19736","meta19736",-1903755078,null)], null);
});

cljs.core.async.t_cljs$core$async19735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19735";

cljs.core.async.t_cljs$core$async19735.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async19735");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19735.
 */
cljs.core.async.__GT_t_cljs$core$async19735 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19735(flag__$1,cb__$1,meta19736){
return (new cljs.core.async.t_cljs$core$async19735(flag__$1,cb__$1,meta19736));
});

}

return (new cljs.core.async.t_cljs$core$async19735(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19738_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19738_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19739_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19739_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19740 = (i + (1));
i = G__19740;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19746 = arguments.length;
var i__4731__auto___19747 = (0);
while(true){
if((i__4731__auto___19747 < len__4730__auto___19746)){
args__4736__auto__.push((arguments[i__4731__auto___19747]));

var G__19748 = (i__4731__auto___19747 + (1));
i__4731__auto___19747 = G__19748;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19743){
var map__19744 = p__19743;
var map__19744__$1 = (((((!((map__19744 == null))))?(((((map__19744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19744):map__19744);
var opts = map__19744__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19741){
var G__19742 = cljs.core.first.call(null,seq19741);
var seq19741__$1 = cljs.core.next.call(null,seq19741);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19742,seq19741__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__19750 = arguments.length;
switch (G__19750) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19649__auto___19796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___19796){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___19796){
return (function (state_19774){
var state_val_19775 = (state_19774[(1)]);
if((state_val_19775 === (7))){
var inst_19770 = (state_19774[(2)]);
var state_19774__$1 = state_19774;
var statearr_19776_19797 = state_19774__$1;
(statearr_19776_19797[(2)] = inst_19770);

(statearr_19776_19797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (1))){
var state_19774__$1 = state_19774;
var statearr_19777_19798 = state_19774__$1;
(statearr_19777_19798[(2)] = null);

(statearr_19777_19798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (4))){
var inst_19753 = (state_19774[(7)]);
var inst_19753__$1 = (state_19774[(2)]);
var inst_19754 = (inst_19753__$1 == null);
var state_19774__$1 = (function (){var statearr_19778 = state_19774;
(statearr_19778[(7)] = inst_19753__$1);

return statearr_19778;
})();
if(cljs.core.truth_(inst_19754)){
var statearr_19779_19799 = state_19774__$1;
(statearr_19779_19799[(1)] = (5));

} else {
var statearr_19780_19800 = state_19774__$1;
(statearr_19780_19800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (13))){
var state_19774__$1 = state_19774;
var statearr_19781_19801 = state_19774__$1;
(statearr_19781_19801[(2)] = null);

(statearr_19781_19801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (6))){
var inst_19753 = (state_19774[(7)]);
var state_19774__$1 = state_19774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19774__$1,(11),to,inst_19753);
} else {
if((state_val_19775 === (3))){
var inst_19772 = (state_19774[(2)]);
var state_19774__$1 = state_19774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19774__$1,inst_19772);
} else {
if((state_val_19775 === (12))){
var state_19774__$1 = state_19774;
var statearr_19782_19802 = state_19774__$1;
(statearr_19782_19802[(2)] = null);

(statearr_19782_19802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (2))){
var state_19774__$1 = state_19774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19774__$1,(4),from);
} else {
if((state_val_19775 === (11))){
var inst_19763 = (state_19774[(2)]);
var state_19774__$1 = state_19774;
if(cljs.core.truth_(inst_19763)){
var statearr_19783_19803 = state_19774__$1;
(statearr_19783_19803[(1)] = (12));

} else {
var statearr_19784_19804 = state_19774__$1;
(statearr_19784_19804[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (9))){
var state_19774__$1 = state_19774;
var statearr_19785_19805 = state_19774__$1;
(statearr_19785_19805[(2)] = null);

(statearr_19785_19805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (5))){
var state_19774__$1 = state_19774;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19786_19806 = state_19774__$1;
(statearr_19786_19806[(1)] = (8));

} else {
var statearr_19787_19807 = state_19774__$1;
(statearr_19787_19807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (14))){
var inst_19768 = (state_19774[(2)]);
var state_19774__$1 = state_19774;
var statearr_19788_19808 = state_19774__$1;
(statearr_19788_19808[(2)] = inst_19768);

(statearr_19788_19808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (10))){
var inst_19760 = (state_19774[(2)]);
var state_19774__$1 = state_19774;
var statearr_19789_19809 = state_19774__$1;
(statearr_19789_19809[(2)] = inst_19760);

(statearr_19789_19809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (8))){
var inst_19757 = cljs.core.async.close_BANG_.call(null,to);
var state_19774__$1 = state_19774;
var statearr_19790_19810 = state_19774__$1;
(statearr_19790_19810[(2)] = inst_19757);

(statearr_19790_19810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___19796))
;
return ((function (switch__19554__auto__,c__19649__auto___19796){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_19791 = [null,null,null,null,null,null,null,null];
(statearr_19791[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_19791[(1)] = (1));

return statearr_19791;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_19774){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_19774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e19792){if((e19792 instanceof Object)){
var ex__19558__auto__ = e19792;
var statearr_19793_19811 = state_19774;
(statearr_19793_19811[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19812 = state_19774;
state_19774 = G__19812;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_19774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_19774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___19796))
})();
var state__19651__auto__ = (function (){var statearr_19794 = f__19650__auto__.call(null);
(statearr_19794[(6)] = c__19649__auto___19796);

return statearr_19794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___19796))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19813){
var vec__19814 = p__19813;
var v = cljs.core.nth.call(null,vec__19814,(0),null);
var p = cljs.core.nth.call(null,vec__19814,(1),null);
var job = vec__19814;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19649__auto___19985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___19985,res,vec__19814,v,p,job,jobs,results){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___19985,res,vec__19814,v,p,job,jobs,results){
return (function (state_19821){
var state_val_19822 = (state_19821[(1)]);
if((state_val_19822 === (1))){
var state_19821__$1 = state_19821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19821__$1,(2),res,v);
} else {
if((state_val_19822 === (2))){
var inst_19818 = (state_19821[(2)]);
var inst_19819 = cljs.core.async.close_BANG_.call(null,res);
var state_19821__$1 = (function (){var statearr_19823 = state_19821;
(statearr_19823[(7)] = inst_19818);

return statearr_19823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19821__$1,inst_19819);
} else {
return null;
}
}
});})(c__19649__auto___19985,res,vec__19814,v,p,job,jobs,results))
;
return ((function (switch__19554__auto__,c__19649__auto___19985,res,vec__19814,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0 = (function (){
var statearr_19824 = [null,null,null,null,null,null,null,null];
(statearr_19824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__);

(statearr_19824[(1)] = (1));

return statearr_19824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1 = (function (state_19821){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_19821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e19825){if((e19825 instanceof Object)){
var ex__19558__auto__ = e19825;
var statearr_19826_19986 = state_19821;
(statearr_19826_19986[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19987 = state_19821;
state_19821 = G__19987;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = function(state_19821){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1.call(this,state_19821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___19985,res,vec__19814,v,p,job,jobs,results))
})();
var state__19651__auto__ = (function (){var statearr_19827 = f__19650__auto__.call(null);
(statearr_19827[(6)] = c__19649__auto___19985);

return statearr_19827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___19985,res,vec__19814,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19828){
var vec__19829 = p__19828;
var v = cljs.core.nth.call(null,vec__19829,(0),null);
var p = cljs.core.nth.call(null,vec__19829,(1),null);
var job = vec__19829;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___19988 = n;
var __19989 = (0);
while(true){
if((__19989 < n__4607__auto___19988)){
var G__19832_19990 = type;
var G__19832_19991__$1 = (((G__19832_19990 instanceof cljs.core.Keyword))?G__19832_19990.fqn:null);
switch (G__19832_19991__$1) {
case "compute":
var c__19649__auto___19993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19989,c__19649__auto___19993,G__19832_19990,G__19832_19991__$1,n__4607__auto___19988,jobs,results,process,async){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (__19989,c__19649__auto___19993,G__19832_19990,G__19832_19991__$1,n__4607__auto___19988,jobs,results,process,async){
return (function (state_19845){
var state_val_19846 = (state_19845[(1)]);
if((state_val_19846 === (1))){
var state_19845__$1 = state_19845;
var statearr_19847_19994 = state_19845__$1;
(statearr_19847_19994[(2)] = null);

(statearr_19847_19994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (2))){
var state_19845__$1 = state_19845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19845__$1,(4),jobs);
} else {
if((state_val_19846 === (3))){
var inst_19843 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19845__$1,inst_19843);
} else {
if((state_val_19846 === (4))){
var inst_19835 = (state_19845[(2)]);
var inst_19836 = process.call(null,inst_19835);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19836)){
var statearr_19848_19995 = state_19845__$1;
(statearr_19848_19995[(1)] = (5));

} else {
var statearr_19849_19996 = state_19845__$1;
(statearr_19849_19996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (5))){
var state_19845__$1 = state_19845;
var statearr_19850_19997 = state_19845__$1;
(statearr_19850_19997[(2)] = null);

(statearr_19850_19997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (6))){
var state_19845__$1 = state_19845;
var statearr_19851_19998 = state_19845__$1;
(statearr_19851_19998[(2)] = null);

(statearr_19851_19998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (7))){
var inst_19841 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
var statearr_19852_19999 = state_19845__$1;
(statearr_19852_19999[(2)] = inst_19841);

(statearr_19852_19999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19989,c__19649__auto___19993,G__19832_19990,G__19832_19991__$1,n__4607__auto___19988,jobs,results,process,async))
;
return ((function (__19989,switch__19554__auto__,c__19649__auto___19993,G__19832_19990,G__19832_19991__$1,n__4607__auto___19988,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0 = (function (){
var statearr_19853 = [null,null,null,null,null,null,null];
(statearr_19853[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__);

(statearr_19853[(1)] = (1));

return statearr_19853;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1 = (function (state_19845){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_19845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e19854){if((e19854 instanceof Object)){
var ex__19558__auto__ = e19854;
var statearr_19855_20000 = state_19845;
(statearr_19855_20000[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20001 = state_19845;
state_19845 = G__20001;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = function(state_19845){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1.call(this,state_19845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__;
})()
;})(__19989,switch__19554__auto__,c__19649__auto___19993,G__19832_19990,G__19832_19991__$1,n__4607__auto___19988,jobs,results,process,async))
})();
var state__19651__auto__ = (function (){var statearr_19856 = f__19650__auto__.call(null);
(statearr_19856[(6)] = c__19649__auto___19993);

return statearr_19856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(__19989,c__19649__auto___19993,G__19832_19990,G__19832_19991__$1,n__4607__auto___19988,jobs,results,process,async))
);


break;
case "async":
var c__19649__auto___20002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19989,c__19649__auto___20002,G__19832_19990,G__19832_19991__$1,n__4607__auto___19988,jobs,results,process,async){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (__19989,c__19649__auto___20002,G__19832_19990,G__19832_19991__$1,n__4607__auto___19988,jobs,results,process,async){
return (function (state_19869){
var state_val_19870 = (state_19869[(1)]);
if((state_val_19870 === (1))){
var state_19869__$1 = state_19869;
var statearr_19871_20003 = state_19869__$1;
(statearr_19871_20003[(2)] = null);

(statearr_19871_20003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (2))){
var state_19869__$1 = state_19869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19869__$1,(4),jobs);
} else {
if((state_val_19870 === (3))){
var inst_19867 = (state_19869[(2)]);
var state_19869__$1 = state_19869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19869__$1,inst_19867);
} else {
if((state_val_19870 === (4))){
var inst_19859 = (state_19869[(2)]);
var inst_19860 = async.call(null,inst_19859);
var state_19869__$1 = state_19869;
if(cljs.core.truth_(inst_19860)){
var statearr_19872_20004 = state_19869__$1;
(statearr_19872_20004[(1)] = (5));

} else {
var statearr_19873_20005 = state_19869__$1;
(statearr_19873_20005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (5))){
var state_19869__$1 = state_19869;
var statearr_19874_20006 = state_19869__$1;
(statearr_19874_20006[(2)] = null);

(statearr_19874_20006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (6))){
var state_19869__$1 = state_19869;
var statearr_19875_20007 = state_19869__$1;
(statearr_19875_20007[(2)] = null);

(statearr_19875_20007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (7))){
var inst_19865 = (state_19869[(2)]);
var state_19869__$1 = state_19869;
var statearr_19876_20008 = state_19869__$1;
(statearr_19876_20008[(2)] = inst_19865);

(statearr_19876_20008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19989,c__19649__auto___20002,G__19832_19990,G__19832_19991__$1,n__4607__auto___19988,jobs,results,process,async))
;
return ((function (__19989,switch__19554__auto__,c__19649__auto___20002,G__19832_19990,G__19832_19991__$1,n__4607__auto___19988,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0 = (function (){
var statearr_19877 = [null,null,null,null,null,null,null];
(statearr_19877[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__);

(statearr_19877[(1)] = (1));

return statearr_19877;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1 = (function (state_19869){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_19869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e19878){if((e19878 instanceof Object)){
var ex__19558__auto__ = e19878;
var statearr_19879_20009 = state_19869;
(statearr_19879_20009[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20010 = state_19869;
state_19869 = G__20010;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = function(state_19869){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1.call(this,state_19869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__;
})()
;})(__19989,switch__19554__auto__,c__19649__auto___20002,G__19832_19990,G__19832_19991__$1,n__4607__auto___19988,jobs,results,process,async))
})();
var state__19651__auto__ = (function (){var statearr_19880 = f__19650__auto__.call(null);
(statearr_19880[(6)] = c__19649__auto___20002);

return statearr_19880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(__19989,c__19649__auto___20002,G__19832_19990,G__19832_19991__$1,n__4607__auto___19988,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19832_19991__$1)].join('')));

}

var G__20011 = (__19989 + (1));
__19989 = G__20011;
continue;
} else {
}
break;
}

var c__19649__auto___20012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___20012,jobs,results,process,async){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___20012,jobs,results,process,async){
return (function (state_19902){
var state_val_19903 = (state_19902[(1)]);
if((state_val_19903 === (7))){
var inst_19898 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
var statearr_19904_20013 = state_19902__$1;
(statearr_19904_20013[(2)] = inst_19898);

(statearr_19904_20013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (1))){
var state_19902__$1 = state_19902;
var statearr_19905_20014 = state_19902__$1;
(statearr_19905_20014[(2)] = null);

(statearr_19905_20014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (4))){
var inst_19883 = (state_19902[(7)]);
var inst_19883__$1 = (state_19902[(2)]);
var inst_19884 = (inst_19883__$1 == null);
var state_19902__$1 = (function (){var statearr_19906 = state_19902;
(statearr_19906[(7)] = inst_19883__$1);

return statearr_19906;
})();
if(cljs.core.truth_(inst_19884)){
var statearr_19907_20015 = state_19902__$1;
(statearr_19907_20015[(1)] = (5));

} else {
var statearr_19908_20016 = state_19902__$1;
(statearr_19908_20016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (6))){
var inst_19883 = (state_19902[(7)]);
var inst_19888 = (state_19902[(8)]);
var inst_19888__$1 = cljs.core.async.chan.call(null,(1));
var inst_19889 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19890 = [inst_19883,inst_19888__$1];
var inst_19891 = (new cljs.core.PersistentVector(null,2,(5),inst_19889,inst_19890,null));
var state_19902__$1 = (function (){var statearr_19909 = state_19902;
(statearr_19909[(8)] = inst_19888__$1);

return statearr_19909;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19902__$1,(8),jobs,inst_19891);
} else {
if((state_val_19903 === (3))){
var inst_19900 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19902__$1,inst_19900);
} else {
if((state_val_19903 === (2))){
var state_19902__$1 = state_19902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19902__$1,(4),from);
} else {
if((state_val_19903 === (9))){
var inst_19895 = (state_19902[(2)]);
var state_19902__$1 = (function (){var statearr_19910 = state_19902;
(statearr_19910[(9)] = inst_19895);

return statearr_19910;
})();
var statearr_19911_20017 = state_19902__$1;
(statearr_19911_20017[(2)] = null);

(statearr_19911_20017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (5))){
var inst_19886 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19902__$1 = state_19902;
var statearr_19912_20018 = state_19902__$1;
(statearr_19912_20018[(2)] = inst_19886);

(statearr_19912_20018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (8))){
var inst_19888 = (state_19902[(8)]);
var inst_19893 = (state_19902[(2)]);
var state_19902__$1 = (function (){var statearr_19913 = state_19902;
(statearr_19913[(10)] = inst_19893);

return statearr_19913;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19902__$1,(9),results,inst_19888);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___20012,jobs,results,process,async))
;
return ((function (switch__19554__auto__,c__19649__auto___20012,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0 = (function (){
var statearr_19914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__);

(statearr_19914[(1)] = (1));

return statearr_19914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1 = (function (state_19902){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_19902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e19915){if((e19915 instanceof Object)){
var ex__19558__auto__ = e19915;
var statearr_19916_20019 = state_19902;
(statearr_19916_20019[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20020 = state_19902;
state_19902 = G__20020;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = function(state_19902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1.call(this,state_19902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___20012,jobs,results,process,async))
})();
var state__19651__auto__ = (function (){var statearr_19917 = f__19650__auto__.call(null);
(statearr_19917[(6)] = c__19649__auto___20012);

return statearr_19917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___20012,jobs,results,process,async))
);


var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__,jobs,results,process,async){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto__,jobs,results,process,async){
return (function (state_19955){
var state_val_19956 = (state_19955[(1)]);
if((state_val_19956 === (7))){
var inst_19951 = (state_19955[(2)]);
var state_19955__$1 = state_19955;
var statearr_19957_20021 = state_19955__$1;
(statearr_19957_20021[(2)] = inst_19951);

(statearr_19957_20021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (20))){
var state_19955__$1 = state_19955;
var statearr_19958_20022 = state_19955__$1;
(statearr_19958_20022[(2)] = null);

(statearr_19958_20022[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (1))){
var state_19955__$1 = state_19955;
var statearr_19959_20023 = state_19955__$1;
(statearr_19959_20023[(2)] = null);

(statearr_19959_20023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (4))){
var inst_19920 = (state_19955[(7)]);
var inst_19920__$1 = (state_19955[(2)]);
var inst_19921 = (inst_19920__$1 == null);
var state_19955__$1 = (function (){var statearr_19960 = state_19955;
(statearr_19960[(7)] = inst_19920__$1);

return statearr_19960;
})();
if(cljs.core.truth_(inst_19921)){
var statearr_19961_20024 = state_19955__$1;
(statearr_19961_20024[(1)] = (5));

} else {
var statearr_19962_20025 = state_19955__$1;
(statearr_19962_20025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (15))){
var inst_19933 = (state_19955[(8)]);
var state_19955__$1 = state_19955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19955__$1,(18),to,inst_19933);
} else {
if((state_val_19956 === (21))){
var inst_19946 = (state_19955[(2)]);
var state_19955__$1 = state_19955;
var statearr_19963_20026 = state_19955__$1;
(statearr_19963_20026[(2)] = inst_19946);

(statearr_19963_20026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (13))){
var inst_19948 = (state_19955[(2)]);
var state_19955__$1 = (function (){var statearr_19964 = state_19955;
(statearr_19964[(9)] = inst_19948);

return statearr_19964;
})();
var statearr_19965_20027 = state_19955__$1;
(statearr_19965_20027[(2)] = null);

(statearr_19965_20027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (6))){
var inst_19920 = (state_19955[(7)]);
var state_19955__$1 = state_19955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19955__$1,(11),inst_19920);
} else {
if((state_val_19956 === (17))){
var inst_19941 = (state_19955[(2)]);
var state_19955__$1 = state_19955;
if(cljs.core.truth_(inst_19941)){
var statearr_19966_20028 = state_19955__$1;
(statearr_19966_20028[(1)] = (19));

} else {
var statearr_19967_20029 = state_19955__$1;
(statearr_19967_20029[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (3))){
var inst_19953 = (state_19955[(2)]);
var state_19955__$1 = state_19955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19955__$1,inst_19953);
} else {
if((state_val_19956 === (12))){
var inst_19930 = (state_19955[(10)]);
var state_19955__$1 = state_19955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19955__$1,(14),inst_19930);
} else {
if((state_val_19956 === (2))){
var state_19955__$1 = state_19955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19955__$1,(4),results);
} else {
if((state_val_19956 === (19))){
var state_19955__$1 = state_19955;
var statearr_19968_20030 = state_19955__$1;
(statearr_19968_20030[(2)] = null);

(statearr_19968_20030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (11))){
var inst_19930 = (state_19955[(2)]);
var state_19955__$1 = (function (){var statearr_19969 = state_19955;
(statearr_19969[(10)] = inst_19930);

return statearr_19969;
})();
var statearr_19970_20031 = state_19955__$1;
(statearr_19970_20031[(2)] = null);

(statearr_19970_20031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (9))){
var state_19955__$1 = state_19955;
var statearr_19971_20032 = state_19955__$1;
(statearr_19971_20032[(2)] = null);

(statearr_19971_20032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (5))){
var state_19955__$1 = state_19955;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19972_20033 = state_19955__$1;
(statearr_19972_20033[(1)] = (8));

} else {
var statearr_19973_20034 = state_19955__$1;
(statearr_19973_20034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (14))){
var inst_19933 = (state_19955[(8)]);
var inst_19935 = (state_19955[(11)]);
var inst_19933__$1 = (state_19955[(2)]);
var inst_19934 = (inst_19933__$1 == null);
var inst_19935__$1 = cljs.core.not.call(null,inst_19934);
var state_19955__$1 = (function (){var statearr_19974 = state_19955;
(statearr_19974[(8)] = inst_19933__$1);

(statearr_19974[(11)] = inst_19935__$1);

return statearr_19974;
})();
if(inst_19935__$1){
var statearr_19975_20035 = state_19955__$1;
(statearr_19975_20035[(1)] = (15));

} else {
var statearr_19976_20036 = state_19955__$1;
(statearr_19976_20036[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (16))){
var inst_19935 = (state_19955[(11)]);
var state_19955__$1 = state_19955;
var statearr_19977_20037 = state_19955__$1;
(statearr_19977_20037[(2)] = inst_19935);

(statearr_19977_20037[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (10))){
var inst_19927 = (state_19955[(2)]);
var state_19955__$1 = state_19955;
var statearr_19978_20038 = state_19955__$1;
(statearr_19978_20038[(2)] = inst_19927);

(statearr_19978_20038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (18))){
var inst_19938 = (state_19955[(2)]);
var state_19955__$1 = state_19955;
var statearr_19979_20039 = state_19955__$1;
(statearr_19979_20039[(2)] = inst_19938);

(statearr_19979_20039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (8))){
var inst_19924 = cljs.core.async.close_BANG_.call(null,to);
var state_19955__$1 = state_19955;
var statearr_19980_20040 = state_19955__$1;
(statearr_19980_20040[(2)] = inst_19924);

(statearr_19980_20040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto__,jobs,results,process,async))
;
return ((function (switch__19554__auto__,c__19649__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0 = (function (){
var statearr_19981 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19981[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__);

(statearr_19981[(1)] = (1));

return statearr_19981;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1 = (function (state_19955){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_19955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e19982){if((e19982 instanceof Object)){
var ex__19558__auto__ = e19982;
var statearr_19983_20041 = state_19955;
(statearr_19983_20041[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20042 = state_19955;
state_19955 = G__20042;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = function(state_19955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1.call(this,state_19955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto__,jobs,results,process,async))
})();
var state__19651__auto__ = (function (){var statearr_19984 = f__19650__auto__.call(null);
(statearr_19984[(6)] = c__19649__auto__);

return statearr_19984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__,jobs,results,process,async))
);

return c__19649__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__20044 = arguments.length;
switch (G__20044) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__20047 = arguments.length;
switch (G__20047) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__20050 = arguments.length;
switch (G__20050) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19649__auto___20099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___20099,tc,fc){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___20099,tc,fc){
return (function (state_20076){
var state_val_20077 = (state_20076[(1)]);
if((state_val_20077 === (7))){
var inst_20072 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
var statearr_20078_20100 = state_20076__$1;
(statearr_20078_20100[(2)] = inst_20072);

(statearr_20078_20100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20077 === (1))){
var state_20076__$1 = state_20076;
var statearr_20079_20101 = state_20076__$1;
(statearr_20079_20101[(2)] = null);

(statearr_20079_20101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20077 === (4))){
var inst_20053 = (state_20076[(7)]);
var inst_20053__$1 = (state_20076[(2)]);
var inst_20054 = (inst_20053__$1 == null);
var state_20076__$1 = (function (){var statearr_20080 = state_20076;
(statearr_20080[(7)] = inst_20053__$1);

return statearr_20080;
})();
if(cljs.core.truth_(inst_20054)){
var statearr_20081_20102 = state_20076__$1;
(statearr_20081_20102[(1)] = (5));

} else {
var statearr_20082_20103 = state_20076__$1;
(statearr_20082_20103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20077 === (13))){
var state_20076__$1 = state_20076;
var statearr_20083_20104 = state_20076__$1;
(statearr_20083_20104[(2)] = null);

(statearr_20083_20104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20077 === (6))){
var inst_20053 = (state_20076[(7)]);
var inst_20059 = p.call(null,inst_20053);
var state_20076__$1 = state_20076;
if(cljs.core.truth_(inst_20059)){
var statearr_20084_20105 = state_20076__$1;
(statearr_20084_20105[(1)] = (9));

} else {
var statearr_20085_20106 = state_20076__$1;
(statearr_20085_20106[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20077 === (3))){
var inst_20074 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20076__$1,inst_20074);
} else {
if((state_val_20077 === (12))){
var state_20076__$1 = state_20076;
var statearr_20086_20107 = state_20076__$1;
(statearr_20086_20107[(2)] = null);

(statearr_20086_20107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20077 === (2))){
var state_20076__$1 = state_20076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20076__$1,(4),ch);
} else {
if((state_val_20077 === (11))){
var inst_20053 = (state_20076[(7)]);
var inst_20063 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20076__$1,(8),inst_20063,inst_20053);
} else {
if((state_val_20077 === (9))){
var state_20076__$1 = state_20076;
var statearr_20087_20108 = state_20076__$1;
(statearr_20087_20108[(2)] = tc);

(statearr_20087_20108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20077 === (5))){
var inst_20056 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20057 = cljs.core.async.close_BANG_.call(null,fc);
var state_20076__$1 = (function (){var statearr_20088 = state_20076;
(statearr_20088[(8)] = inst_20056);

return statearr_20088;
})();
var statearr_20089_20109 = state_20076__$1;
(statearr_20089_20109[(2)] = inst_20057);

(statearr_20089_20109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20077 === (14))){
var inst_20070 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
var statearr_20090_20110 = state_20076__$1;
(statearr_20090_20110[(2)] = inst_20070);

(statearr_20090_20110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20077 === (10))){
var state_20076__$1 = state_20076;
var statearr_20091_20111 = state_20076__$1;
(statearr_20091_20111[(2)] = fc);

(statearr_20091_20111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20077 === (8))){
var inst_20065 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
if(cljs.core.truth_(inst_20065)){
var statearr_20092_20112 = state_20076__$1;
(statearr_20092_20112[(1)] = (12));

} else {
var statearr_20093_20113 = state_20076__$1;
(statearr_20093_20113[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___20099,tc,fc))
;
return ((function (switch__19554__auto__,c__19649__auto___20099,tc,fc){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_20094 = [null,null,null,null,null,null,null,null,null];
(statearr_20094[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_20094[(1)] = (1));

return statearr_20094;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_20076){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_20076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e20095){if((e20095 instanceof Object)){
var ex__19558__auto__ = e20095;
var statearr_20096_20114 = state_20076;
(statearr_20096_20114[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20115 = state_20076;
state_20076 = G__20115;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_20076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_20076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___20099,tc,fc))
})();
var state__19651__auto__ = (function (){var statearr_20097 = f__19650__auto__.call(null);
(statearr_20097[(6)] = c__19649__auto___20099);

return statearr_20097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___20099,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto__){
return (function (state_20136){
var state_val_20137 = (state_20136[(1)]);
if((state_val_20137 === (7))){
var inst_20132 = (state_20136[(2)]);
var state_20136__$1 = state_20136;
var statearr_20138_20156 = state_20136__$1;
(statearr_20138_20156[(2)] = inst_20132);

(statearr_20138_20156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20137 === (1))){
var inst_20116 = init;
var state_20136__$1 = (function (){var statearr_20139 = state_20136;
(statearr_20139[(7)] = inst_20116);

return statearr_20139;
})();
var statearr_20140_20157 = state_20136__$1;
(statearr_20140_20157[(2)] = null);

(statearr_20140_20157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20137 === (4))){
var inst_20119 = (state_20136[(8)]);
var inst_20119__$1 = (state_20136[(2)]);
var inst_20120 = (inst_20119__$1 == null);
var state_20136__$1 = (function (){var statearr_20141 = state_20136;
(statearr_20141[(8)] = inst_20119__$1);

return statearr_20141;
})();
if(cljs.core.truth_(inst_20120)){
var statearr_20142_20158 = state_20136__$1;
(statearr_20142_20158[(1)] = (5));

} else {
var statearr_20143_20159 = state_20136__$1;
(statearr_20143_20159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20137 === (6))){
var inst_20119 = (state_20136[(8)]);
var inst_20123 = (state_20136[(9)]);
var inst_20116 = (state_20136[(7)]);
var inst_20123__$1 = f.call(null,inst_20116,inst_20119);
var inst_20124 = cljs.core.reduced_QMARK_.call(null,inst_20123__$1);
var state_20136__$1 = (function (){var statearr_20144 = state_20136;
(statearr_20144[(9)] = inst_20123__$1);

return statearr_20144;
})();
if(inst_20124){
var statearr_20145_20160 = state_20136__$1;
(statearr_20145_20160[(1)] = (8));

} else {
var statearr_20146_20161 = state_20136__$1;
(statearr_20146_20161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20137 === (3))){
var inst_20134 = (state_20136[(2)]);
var state_20136__$1 = state_20136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20136__$1,inst_20134);
} else {
if((state_val_20137 === (2))){
var state_20136__$1 = state_20136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20136__$1,(4),ch);
} else {
if((state_val_20137 === (9))){
var inst_20123 = (state_20136[(9)]);
var inst_20116 = inst_20123;
var state_20136__$1 = (function (){var statearr_20147 = state_20136;
(statearr_20147[(7)] = inst_20116);

return statearr_20147;
})();
var statearr_20148_20162 = state_20136__$1;
(statearr_20148_20162[(2)] = null);

(statearr_20148_20162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20137 === (5))){
var inst_20116 = (state_20136[(7)]);
var state_20136__$1 = state_20136;
var statearr_20149_20163 = state_20136__$1;
(statearr_20149_20163[(2)] = inst_20116);

(statearr_20149_20163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20137 === (10))){
var inst_20130 = (state_20136[(2)]);
var state_20136__$1 = state_20136;
var statearr_20150_20164 = state_20136__$1;
(statearr_20150_20164[(2)] = inst_20130);

(statearr_20150_20164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20137 === (8))){
var inst_20123 = (state_20136[(9)]);
var inst_20126 = cljs.core.deref.call(null,inst_20123);
var state_20136__$1 = state_20136;
var statearr_20151_20165 = state_20136__$1;
(statearr_20151_20165[(2)] = inst_20126);

(statearr_20151_20165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto__))
;
return ((function (switch__19554__auto__,c__19649__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19555__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19555__auto____0 = (function (){
var statearr_20152 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20152[(0)] = cljs$core$async$reduce_$_state_machine__19555__auto__);

(statearr_20152[(1)] = (1));

return statearr_20152;
});
var cljs$core$async$reduce_$_state_machine__19555__auto____1 = (function (state_20136){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_20136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e20153){if((e20153 instanceof Object)){
var ex__19558__auto__ = e20153;
var statearr_20154_20166 = state_20136;
(statearr_20154_20166[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20167 = state_20136;
state_20136 = G__20167;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19555__auto__ = function(state_20136){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19555__auto____1.call(this,state_20136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19555__auto____0;
cljs$core$async$reduce_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19555__auto____1;
return cljs$core$async$reduce_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto__))
})();
var state__19651__auto__ = (function (){var statearr_20155 = f__19650__auto__.call(null);
(statearr_20155[(6)] = c__19649__auto__);

return statearr_20155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__))
);

return c__19649__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__,f__$1){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto__,f__$1){
return (function (state_20173){
var state_val_20174 = (state_20173[(1)]);
if((state_val_20174 === (1))){
var inst_20168 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_20173__$1 = state_20173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20173__$1,(2),inst_20168);
} else {
if((state_val_20174 === (2))){
var inst_20170 = (state_20173[(2)]);
var inst_20171 = f__$1.call(null,inst_20170);
var state_20173__$1 = state_20173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20173__$1,inst_20171);
} else {
return null;
}
}
});})(c__19649__auto__,f__$1))
;
return ((function (switch__19554__auto__,c__19649__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__19555__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19555__auto____0 = (function (){
var statearr_20175 = [null,null,null,null,null,null,null];
(statearr_20175[(0)] = cljs$core$async$transduce_$_state_machine__19555__auto__);

(statearr_20175[(1)] = (1));

return statearr_20175;
});
var cljs$core$async$transduce_$_state_machine__19555__auto____1 = (function (state_20173){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_20173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e20176){if((e20176 instanceof Object)){
var ex__19558__auto__ = e20176;
var statearr_20177_20179 = state_20173;
(statearr_20177_20179[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20180 = state_20173;
state_20173 = G__20180;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19555__auto__ = function(state_20173){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19555__auto____1.call(this,state_20173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19555__auto____0;
cljs$core$async$transduce_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19555__auto____1;
return cljs$core$async$transduce_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto__,f__$1))
})();
var state__19651__auto__ = (function (){var statearr_20178 = f__19650__auto__.call(null);
(statearr_20178[(6)] = c__19649__auto__);

return statearr_20178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__,f__$1))
);

return c__19649__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__20182 = arguments.length;
switch (G__20182) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto__){
return (function (state_20207){
var state_val_20208 = (state_20207[(1)]);
if((state_val_20208 === (7))){
var inst_20189 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
var statearr_20209_20230 = state_20207__$1;
(statearr_20209_20230[(2)] = inst_20189);

(statearr_20209_20230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (1))){
var inst_20183 = cljs.core.seq.call(null,coll);
var inst_20184 = inst_20183;
var state_20207__$1 = (function (){var statearr_20210 = state_20207;
(statearr_20210[(7)] = inst_20184);

return statearr_20210;
})();
var statearr_20211_20231 = state_20207__$1;
(statearr_20211_20231[(2)] = null);

(statearr_20211_20231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (4))){
var inst_20184 = (state_20207[(7)]);
var inst_20187 = cljs.core.first.call(null,inst_20184);
var state_20207__$1 = state_20207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20207__$1,(7),ch,inst_20187);
} else {
if((state_val_20208 === (13))){
var inst_20201 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
var statearr_20212_20232 = state_20207__$1;
(statearr_20212_20232[(2)] = inst_20201);

(statearr_20212_20232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (6))){
var inst_20192 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
if(cljs.core.truth_(inst_20192)){
var statearr_20213_20233 = state_20207__$1;
(statearr_20213_20233[(1)] = (8));

} else {
var statearr_20214_20234 = state_20207__$1;
(statearr_20214_20234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (3))){
var inst_20205 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20207__$1,inst_20205);
} else {
if((state_val_20208 === (12))){
var state_20207__$1 = state_20207;
var statearr_20215_20235 = state_20207__$1;
(statearr_20215_20235[(2)] = null);

(statearr_20215_20235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (2))){
var inst_20184 = (state_20207[(7)]);
var state_20207__$1 = state_20207;
if(cljs.core.truth_(inst_20184)){
var statearr_20216_20236 = state_20207__$1;
(statearr_20216_20236[(1)] = (4));

} else {
var statearr_20217_20237 = state_20207__$1;
(statearr_20217_20237[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (11))){
var inst_20198 = cljs.core.async.close_BANG_.call(null,ch);
var state_20207__$1 = state_20207;
var statearr_20218_20238 = state_20207__$1;
(statearr_20218_20238[(2)] = inst_20198);

(statearr_20218_20238[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (9))){
var state_20207__$1 = state_20207;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20219_20239 = state_20207__$1;
(statearr_20219_20239[(1)] = (11));

} else {
var statearr_20220_20240 = state_20207__$1;
(statearr_20220_20240[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (5))){
var inst_20184 = (state_20207[(7)]);
var state_20207__$1 = state_20207;
var statearr_20221_20241 = state_20207__$1;
(statearr_20221_20241[(2)] = inst_20184);

(statearr_20221_20241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (10))){
var inst_20203 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
var statearr_20222_20242 = state_20207__$1;
(statearr_20222_20242[(2)] = inst_20203);

(statearr_20222_20242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (8))){
var inst_20184 = (state_20207[(7)]);
var inst_20194 = cljs.core.next.call(null,inst_20184);
var inst_20184__$1 = inst_20194;
var state_20207__$1 = (function (){var statearr_20223 = state_20207;
(statearr_20223[(7)] = inst_20184__$1);

return statearr_20223;
})();
var statearr_20224_20243 = state_20207__$1;
(statearr_20224_20243[(2)] = null);

(statearr_20224_20243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto__))
;
return ((function (switch__19554__auto__,c__19649__auto__){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_20225 = [null,null,null,null,null,null,null,null];
(statearr_20225[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_20225[(1)] = (1));

return statearr_20225;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_20207){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_20207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e20226){if((e20226 instanceof Object)){
var ex__19558__auto__ = e20226;
var statearr_20227_20244 = state_20207;
(statearr_20227_20244[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20245 = state_20207;
state_20207 = G__20245;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_20207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_20207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto__))
})();
var state__19651__auto__ = (function (){var statearr_20228 = f__19650__auto__.call(null);
(statearr_20228[(6)] = c__19649__auto__);

return statearr_20228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__))
);

return c__19649__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20246 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20246 = (function (ch,cs,meta20247){
this.ch = ch;
this.cs = cs;
this.meta20247 = meta20247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20248,meta20247__$1){
var self__ = this;
var _20248__$1 = this;
return (new cljs.core.async.t_cljs$core$async20246(self__.ch,self__.cs,meta20247__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20248){
var self__ = this;
var _20248__$1 = this;
return self__.meta20247;
});})(cs))
;

cljs.core.async.t_cljs$core$async20246.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20246.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20246.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20246.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20246.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20246.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20246.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20247","meta20247",322134041,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20246";

cljs.core.async.t_cljs$core$async20246.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20246");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20246.
 */
cljs.core.async.__GT_t_cljs$core$async20246 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20246(ch__$1,cs__$1,meta20247){
return (new cljs.core.async.t_cljs$core$async20246(ch__$1,cs__$1,meta20247));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20246(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19649__auto___20468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___20468,cs,m,dchan,dctr,done){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___20468,cs,m,dchan,dctr,done){
return (function (state_20383){
var state_val_20384 = (state_20383[(1)]);
if((state_val_20384 === (7))){
var inst_20379 = (state_20383[(2)]);
var state_20383__$1 = state_20383;
var statearr_20385_20469 = state_20383__$1;
(statearr_20385_20469[(2)] = inst_20379);

(statearr_20385_20469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (20))){
var inst_20282 = (state_20383[(7)]);
var inst_20294 = cljs.core.first.call(null,inst_20282);
var inst_20295 = cljs.core.nth.call(null,inst_20294,(0),null);
var inst_20296 = cljs.core.nth.call(null,inst_20294,(1),null);
var state_20383__$1 = (function (){var statearr_20386 = state_20383;
(statearr_20386[(8)] = inst_20295);

return statearr_20386;
})();
if(cljs.core.truth_(inst_20296)){
var statearr_20387_20470 = state_20383__$1;
(statearr_20387_20470[(1)] = (22));

} else {
var statearr_20388_20471 = state_20383__$1;
(statearr_20388_20471[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (27))){
var inst_20331 = (state_20383[(9)]);
var inst_20324 = (state_20383[(10)]);
var inst_20251 = (state_20383[(11)]);
var inst_20326 = (state_20383[(12)]);
var inst_20331__$1 = cljs.core._nth.call(null,inst_20324,inst_20326);
var inst_20332 = cljs.core.async.put_BANG_.call(null,inst_20331__$1,inst_20251,done);
var state_20383__$1 = (function (){var statearr_20389 = state_20383;
(statearr_20389[(9)] = inst_20331__$1);

return statearr_20389;
})();
if(cljs.core.truth_(inst_20332)){
var statearr_20390_20472 = state_20383__$1;
(statearr_20390_20472[(1)] = (30));

} else {
var statearr_20391_20473 = state_20383__$1;
(statearr_20391_20473[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (1))){
var state_20383__$1 = state_20383;
var statearr_20392_20474 = state_20383__$1;
(statearr_20392_20474[(2)] = null);

(statearr_20392_20474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (24))){
var inst_20282 = (state_20383[(7)]);
var inst_20301 = (state_20383[(2)]);
var inst_20302 = cljs.core.next.call(null,inst_20282);
var inst_20260 = inst_20302;
var inst_20261 = null;
var inst_20262 = (0);
var inst_20263 = (0);
var state_20383__$1 = (function (){var statearr_20393 = state_20383;
(statearr_20393[(13)] = inst_20263);

(statearr_20393[(14)] = inst_20262);

(statearr_20393[(15)] = inst_20261);

(statearr_20393[(16)] = inst_20260);

(statearr_20393[(17)] = inst_20301);

return statearr_20393;
})();
var statearr_20394_20475 = state_20383__$1;
(statearr_20394_20475[(2)] = null);

(statearr_20394_20475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (39))){
var state_20383__$1 = state_20383;
var statearr_20398_20476 = state_20383__$1;
(statearr_20398_20476[(2)] = null);

(statearr_20398_20476[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (4))){
var inst_20251 = (state_20383[(11)]);
var inst_20251__$1 = (state_20383[(2)]);
var inst_20252 = (inst_20251__$1 == null);
var state_20383__$1 = (function (){var statearr_20399 = state_20383;
(statearr_20399[(11)] = inst_20251__$1);

return statearr_20399;
})();
if(cljs.core.truth_(inst_20252)){
var statearr_20400_20477 = state_20383__$1;
(statearr_20400_20477[(1)] = (5));

} else {
var statearr_20401_20478 = state_20383__$1;
(statearr_20401_20478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (15))){
var inst_20263 = (state_20383[(13)]);
var inst_20262 = (state_20383[(14)]);
var inst_20261 = (state_20383[(15)]);
var inst_20260 = (state_20383[(16)]);
var inst_20278 = (state_20383[(2)]);
var inst_20279 = (inst_20263 + (1));
var tmp20395 = inst_20262;
var tmp20396 = inst_20261;
var tmp20397 = inst_20260;
var inst_20260__$1 = tmp20397;
var inst_20261__$1 = tmp20396;
var inst_20262__$1 = tmp20395;
var inst_20263__$1 = inst_20279;
var state_20383__$1 = (function (){var statearr_20402 = state_20383;
(statearr_20402[(13)] = inst_20263__$1);

(statearr_20402[(14)] = inst_20262__$1);

(statearr_20402[(15)] = inst_20261__$1);

(statearr_20402[(18)] = inst_20278);

(statearr_20402[(16)] = inst_20260__$1);

return statearr_20402;
})();
var statearr_20403_20479 = state_20383__$1;
(statearr_20403_20479[(2)] = null);

(statearr_20403_20479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (21))){
var inst_20305 = (state_20383[(2)]);
var state_20383__$1 = state_20383;
var statearr_20407_20480 = state_20383__$1;
(statearr_20407_20480[(2)] = inst_20305);

(statearr_20407_20480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (31))){
var inst_20331 = (state_20383[(9)]);
var inst_20335 = done.call(null,null);
var inst_20336 = cljs.core.async.untap_STAR_.call(null,m,inst_20331);
var state_20383__$1 = (function (){var statearr_20408 = state_20383;
(statearr_20408[(19)] = inst_20335);

return statearr_20408;
})();
var statearr_20409_20481 = state_20383__$1;
(statearr_20409_20481[(2)] = inst_20336);

(statearr_20409_20481[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (32))){
var inst_20323 = (state_20383[(20)]);
var inst_20324 = (state_20383[(10)]);
var inst_20325 = (state_20383[(21)]);
var inst_20326 = (state_20383[(12)]);
var inst_20338 = (state_20383[(2)]);
var inst_20339 = (inst_20326 + (1));
var tmp20404 = inst_20323;
var tmp20405 = inst_20324;
var tmp20406 = inst_20325;
var inst_20323__$1 = tmp20404;
var inst_20324__$1 = tmp20405;
var inst_20325__$1 = tmp20406;
var inst_20326__$1 = inst_20339;
var state_20383__$1 = (function (){var statearr_20410 = state_20383;
(statearr_20410[(22)] = inst_20338);

(statearr_20410[(20)] = inst_20323__$1);

(statearr_20410[(10)] = inst_20324__$1);

(statearr_20410[(21)] = inst_20325__$1);

(statearr_20410[(12)] = inst_20326__$1);

return statearr_20410;
})();
var statearr_20411_20482 = state_20383__$1;
(statearr_20411_20482[(2)] = null);

(statearr_20411_20482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (40))){
var inst_20351 = (state_20383[(23)]);
var inst_20355 = done.call(null,null);
var inst_20356 = cljs.core.async.untap_STAR_.call(null,m,inst_20351);
var state_20383__$1 = (function (){var statearr_20412 = state_20383;
(statearr_20412[(24)] = inst_20355);

return statearr_20412;
})();
var statearr_20413_20483 = state_20383__$1;
(statearr_20413_20483[(2)] = inst_20356);

(statearr_20413_20483[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (33))){
var inst_20342 = (state_20383[(25)]);
var inst_20344 = cljs.core.chunked_seq_QMARK_.call(null,inst_20342);
var state_20383__$1 = state_20383;
if(inst_20344){
var statearr_20414_20484 = state_20383__$1;
(statearr_20414_20484[(1)] = (36));

} else {
var statearr_20415_20485 = state_20383__$1;
(statearr_20415_20485[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (13))){
var inst_20272 = (state_20383[(26)]);
var inst_20275 = cljs.core.async.close_BANG_.call(null,inst_20272);
var state_20383__$1 = state_20383;
var statearr_20416_20486 = state_20383__$1;
(statearr_20416_20486[(2)] = inst_20275);

(statearr_20416_20486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (22))){
var inst_20295 = (state_20383[(8)]);
var inst_20298 = cljs.core.async.close_BANG_.call(null,inst_20295);
var state_20383__$1 = state_20383;
var statearr_20417_20487 = state_20383__$1;
(statearr_20417_20487[(2)] = inst_20298);

(statearr_20417_20487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (36))){
var inst_20342 = (state_20383[(25)]);
var inst_20346 = cljs.core.chunk_first.call(null,inst_20342);
var inst_20347 = cljs.core.chunk_rest.call(null,inst_20342);
var inst_20348 = cljs.core.count.call(null,inst_20346);
var inst_20323 = inst_20347;
var inst_20324 = inst_20346;
var inst_20325 = inst_20348;
var inst_20326 = (0);
var state_20383__$1 = (function (){var statearr_20418 = state_20383;
(statearr_20418[(20)] = inst_20323);

(statearr_20418[(10)] = inst_20324);

(statearr_20418[(21)] = inst_20325);

(statearr_20418[(12)] = inst_20326);

return statearr_20418;
})();
var statearr_20419_20488 = state_20383__$1;
(statearr_20419_20488[(2)] = null);

(statearr_20419_20488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (41))){
var inst_20342 = (state_20383[(25)]);
var inst_20358 = (state_20383[(2)]);
var inst_20359 = cljs.core.next.call(null,inst_20342);
var inst_20323 = inst_20359;
var inst_20324 = null;
var inst_20325 = (0);
var inst_20326 = (0);
var state_20383__$1 = (function (){var statearr_20420 = state_20383;
(statearr_20420[(27)] = inst_20358);

(statearr_20420[(20)] = inst_20323);

(statearr_20420[(10)] = inst_20324);

(statearr_20420[(21)] = inst_20325);

(statearr_20420[(12)] = inst_20326);

return statearr_20420;
})();
var statearr_20421_20489 = state_20383__$1;
(statearr_20421_20489[(2)] = null);

(statearr_20421_20489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (43))){
var state_20383__$1 = state_20383;
var statearr_20422_20490 = state_20383__$1;
(statearr_20422_20490[(2)] = null);

(statearr_20422_20490[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (29))){
var inst_20367 = (state_20383[(2)]);
var state_20383__$1 = state_20383;
var statearr_20423_20491 = state_20383__$1;
(statearr_20423_20491[(2)] = inst_20367);

(statearr_20423_20491[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (44))){
var inst_20376 = (state_20383[(2)]);
var state_20383__$1 = (function (){var statearr_20424 = state_20383;
(statearr_20424[(28)] = inst_20376);

return statearr_20424;
})();
var statearr_20425_20492 = state_20383__$1;
(statearr_20425_20492[(2)] = null);

(statearr_20425_20492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (6))){
var inst_20315 = (state_20383[(29)]);
var inst_20314 = cljs.core.deref.call(null,cs);
var inst_20315__$1 = cljs.core.keys.call(null,inst_20314);
var inst_20316 = cljs.core.count.call(null,inst_20315__$1);
var inst_20317 = cljs.core.reset_BANG_.call(null,dctr,inst_20316);
var inst_20322 = cljs.core.seq.call(null,inst_20315__$1);
var inst_20323 = inst_20322;
var inst_20324 = null;
var inst_20325 = (0);
var inst_20326 = (0);
var state_20383__$1 = (function (){var statearr_20426 = state_20383;
(statearr_20426[(30)] = inst_20317);

(statearr_20426[(20)] = inst_20323);

(statearr_20426[(10)] = inst_20324);

(statearr_20426[(29)] = inst_20315__$1);

(statearr_20426[(21)] = inst_20325);

(statearr_20426[(12)] = inst_20326);

return statearr_20426;
})();
var statearr_20427_20493 = state_20383__$1;
(statearr_20427_20493[(2)] = null);

(statearr_20427_20493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (28))){
var inst_20342 = (state_20383[(25)]);
var inst_20323 = (state_20383[(20)]);
var inst_20342__$1 = cljs.core.seq.call(null,inst_20323);
var state_20383__$1 = (function (){var statearr_20428 = state_20383;
(statearr_20428[(25)] = inst_20342__$1);

return statearr_20428;
})();
if(inst_20342__$1){
var statearr_20429_20494 = state_20383__$1;
(statearr_20429_20494[(1)] = (33));

} else {
var statearr_20430_20495 = state_20383__$1;
(statearr_20430_20495[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (25))){
var inst_20325 = (state_20383[(21)]);
var inst_20326 = (state_20383[(12)]);
var inst_20328 = (inst_20326 < inst_20325);
var inst_20329 = inst_20328;
var state_20383__$1 = state_20383;
if(cljs.core.truth_(inst_20329)){
var statearr_20431_20496 = state_20383__$1;
(statearr_20431_20496[(1)] = (27));

} else {
var statearr_20432_20497 = state_20383__$1;
(statearr_20432_20497[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (34))){
var state_20383__$1 = state_20383;
var statearr_20433_20498 = state_20383__$1;
(statearr_20433_20498[(2)] = null);

(statearr_20433_20498[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (17))){
var state_20383__$1 = state_20383;
var statearr_20434_20499 = state_20383__$1;
(statearr_20434_20499[(2)] = null);

(statearr_20434_20499[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (3))){
var inst_20381 = (state_20383[(2)]);
var state_20383__$1 = state_20383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20383__$1,inst_20381);
} else {
if((state_val_20384 === (12))){
var inst_20310 = (state_20383[(2)]);
var state_20383__$1 = state_20383;
var statearr_20435_20500 = state_20383__$1;
(statearr_20435_20500[(2)] = inst_20310);

(statearr_20435_20500[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (2))){
var state_20383__$1 = state_20383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20383__$1,(4),ch);
} else {
if((state_val_20384 === (23))){
var state_20383__$1 = state_20383;
var statearr_20436_20501 = state_20383__$1;
(statearr_20436_20501[(2)] = null);

(statearr_20436_20501[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (35))){
var inst_20365 = (state_20383[(2)]);
var state_20383__$1 = state_20383;
var statearr_20437_20502 = state_20383__$1;
(statearr_20437_20502[(2)] = inst_20365);

(statearr_20437_20502[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (19))){
var inst_20282 = (state_20383[(7)]);
var inst_20286 = cljs.core.chunk_first.call(null,inst_20282);
var inst_20287 = cljs.core.chunk_rest.call(null,inst_20282);
var inst_20288 = cljs.core.count.call(null,inst_20286);
var inst_20260 = inst_20287;
var inst_20261 = inst_20286;
var inst_20262 = inst_20288;
var inst_20263 = (0);
var state_20383__$1 = (function (){var statearr_20438 = state_20383;
(statearr_20438[(13)] = inst_20263);

(statearr_20438[(14)] = inst_20262);

(statearr_20438[(15)] = inst_20261);

(statearr_20438[(16)] = inst_20260);

return statearr_20438;
})();
var statearr_20439_20503 = state_20383__$1;
(statearr_20439_20503[(2)] = null);

(statearr_20439_20503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (11))){
var inst_20282 = (state_20383[(7)]);
var inst_20260 = (state_20383[(16)]);
var inst_20282__$1 = cljs.core.seq.call(null,inst_20260);
var state_20383__$1 = (function (){var statearr_20440 = state_20383;
(statearr_20440[(7)] = inst_20282__$1);

return statearr_20440;
})();
if(inst_20282__$1){
var statearr_20441_20504 = state_20383__$1;
(statearr_20441_20504[(1)] = (16));

} else {
var statearr_20442_20505 = state_20383__$1;
(statearr_20442_20505[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (9))){
var inst_20312 = (state_20383[(2)]);
var state_20383__$1 = state_20383;
var statearr_20443_20506 = state_20383__$1;
(statearr_20443_20506[(2)] = inst_20312);

(statearr_20443_20506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (5))){
var inst_20258 = cljs.core.deref.call(null,cs);
var inst_20259 = cljs.core.seq.call(null,inst_20258);
var inst_20260 = inst_20259;
var inst_20261 = null;
var inst_20262 = (0);
var inst_20263 = (0);
var state_20383__$1 = (function (){var statearr_20444 = state_20383;
(statearr_20444[(13)] = inst_20263);

(statearr_20444[(14)] = inst_20262);

(statearr_20444[(15)] = inst_20261);

(statearr_20444[(16)] = inst_20260);

return statearr_20444;
})();
var statearr_20445_20507 = state_20383__$1;
(statearr_20445_20507[(2)] = null);

(statearr_20445_20507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (14))){
var state_20383__$1 = state_20383;
var statearr_20446_20508 = state_20383__$1;
(statearr_20446_20508[(2)] = null);

(statearr_20446_20508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (45))){
var inst_20373 = (state_20383[(2)]);
var state_20383__$1 = state_20383;
var statearr_20447_20509 = state_20383__$1;
(statearr_20447_20509[(2)] = inst_20373);

(statearr_20447_20509[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (26))){
var inst_20315 = (state_20383[(29)]);
var inst_20369 = (state_20383[(2)]);
var inst_20370 = cljs.core.seq.call(null,inst_20315);
var state_20383__$1 = (function (){var statearr_20448 = state_20383;
(statearr_20448[(31)] = inst_20369);

return statearr_20448;
})();
if(inst_20370){
var statearr_20449_20510 = state_20383__$1;
(statearr_20449_20510[(1)] = (42));

} else {
var statearr_20450_20511 = state_20383__$1;
(statearr_20450_20511[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (16))){
var inst_20282 = (state_20383[(7)]);
var inst_20284 = cljs.core.chunked_seq_QMARK_.call(null,inst_20282);
var state_20383__$1 = state_20383;
if(inst_20284){
var statearr_20451_20512 = state_20383__$1;
(statearr_20451_20512[(1)] = (19));

} else {
var statearr_20452_20513 = state_20383__$1;
(statearr_20452_20513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (38))){
var inst_20362 = (state_20383[(2)]);
var state_20383__$1 = state_20383;
var statearr_20453_20514 = state_20383__$1;
(statearr_20453_20514[(2)] = inst_20362);

(statearr_20453_20514[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (30))){
var state_20383__$1 = state_20383;
var statearr_20454_20515 = state_20383__$1;
(statearr_20454_20515[(2)] = null);

(statearr_20454_20515[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (10))){
var inst_20263 = (state_20383[(13)]);
var inst_20261 = (state_20383[(15)]);
var inst_20271 = cljs.core._nth.call(null,inst_20261,inst_20263);
var inst_20272 = cljs.core.nth.call(null,inst_20271,(0),null);
var inst_20273 = cljs.core.nth.call(null,inst_20271,(1),null);
var state_20383__$1 = (function (){var statearr_20455 = state_20383;
(statearr_20455[(26)] = inst_20272);

return statearr_20455;
})();
if(cljs.core.truth_(inst_20273)){
var statearr_20456_20516 = state_20383__$1;
(statearr_20456_20516[(1)] = (13));

} else {
var statearr_20457_20517 = state_20383__$1;
(statearr_20457_20517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (18))){
var inst_20308 = (state_20383[(2)]);
var state_20383__$1 = state_20383;
var statearr_20458_20518 = state_20383__$1;
(statearr_20458_20518[(2)] = inst_20308);

(statearr_20458_20518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (42))){
var state_20383__$1 = state_20383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20383__$1,(45),dchan);
} else {
if((state_val_20384 === (37))){
var inst_20342 = (state_20383[(25)]);
var inst_20351 = (state_20383[(23)]);
var inst_20251 = (state_20383[(11)]);
var inst_20351__$1 = cljs.core.first.call(null,inst_20342);
var inst_20352 = cljs.core.async.put_BANG_.call(null,inst_20351__$1,inst_20251,done);
var state_20383__$1 = (function (){var statearr_20459 = state_20383;
(statearr_20459[(23)] = inst_20351__$1);

return statearr_20459;
})();
if(cljs.core.truth_(inst_20352)){
var statearr_20460_20519 = state_20383__$1;
(statearr_20460_20519[(1)] = (39));

} else {
var statearr_20461_20520 = state_20383__$1;
(statearr_20461_20520[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20384 === (8))){
var inst_20263 = (state_20383[(13)]);
var inst_20262 = (state_20383[(14)]);
var inst_20265 = (inst_20263 < inst_20262);
var inst_20266 = inst_20265;
var state_20383__$1 = state_20383;
if(cljs.core.truth_(inst_20266)){
var statearr_20462_20521 = state_20383__$1;
(statearr_20462_20521[(1)] = (10));

} else {
var statearr_20463_20522 = state_20383__$1;
(statearr_20463_20522[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___20468,cs,m,dchan,dctr,done))
;
return ((function (switch__19554__auto__,c__19649__auto___20468,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19555__auto__ = null;
var cljs$core$async$mult_$_state_machine__19555__auto____0 = (function (){
var statearr_20464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20464[(0)] = cljs$core$async$mult_$_state_machine__19555__auto__);

(statearr_20464[(1)] = (1));

return statearr_20464;
});
var cljs$core$async$mult_$_state_machine__19555__auto____1 = (function (state_20383){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_20383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e20465){if((e20465 instanceof Object)){
var ex__19558__auto__ = e20465;
var statearr_20466_20523 = state_20383;
(statearr_20466_20523[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20524 = state_20383;
state_20383 = G__20524;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19555__auto__ = function(state_20383){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19555__auto____1.call(this,state_20383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19555__auto____0;
cljs$core$async$mult_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19555__auto____1;
return cljs$core$async$mult_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___20468,cs,m,dchan,dctr,done))
})();
var state__19651__auto__ = (function (){var statearr_20467 = f__19650__auto__.call(null);
(statearr_20467[(6)] = c__19649__auto___20468);

return statearr_20467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___20468,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__20526 = arguments.length;
switch (G__20526) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20538 = arguments.length;
var i__4731__auto___20539 = (0);
while(true){
if((i__4731__auto___20539 < len__4730__auto___20538)){
args__4736__auto__.push((arguments[i__4731__auto___20539]));

var G__20540 = (i__4731__auto___20539 + (1));
i__4731__auto___20539 = G__20540;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20532){
var map__20533 = p__20532;
var map__20533__$1 = (((((!((map__20533 == null))))?(((((map__20533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20533):map__20533);
var opts = map__20533__$1;
var statearr_20535_20541 = state;
(statearr_20535_20541[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__20533,map__20533__$1,opts){
return (function (val){
var statearr_20536_20542 = state;
(statearr_20536_20542[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20533,map__20533__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_20537_20543 = state;
(statearr_20537_20543[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20528){
var G__20529 = cljs.core.first.call(null,seq20528);
var seq20528__$1 = cljs.core.next.call(null,seq20528);
var G__20530 = cljs.core.first.call(null,seq20528__$1);
var seq20528__$2 = cljs.core.next.call(null,seq20528__$1);
var G__20531 = cljs.core.first.call(null,seq20528__$2);
var seq20528__$3 = cljs.core.next.call(null,seq20528__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20529,G__20530,G__20531,seq20528__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20544 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20545){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20545 = meta20545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20546,meta20545__$1){
var self__ = this;
var _20546__$1 = this;
return (new cljs.core.async.t_cljs$core$async20544(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20545__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20546){
var self__ = this;
var _20546__$1 = this;
return self__.meta20545;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20544.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20545","meta20545",1032698265,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20544";

cljs.core.async.t_cljs$core$async20544.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20544");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20544.
 */
cljs.core.async.__GT_t_cljs$core$async20544 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20544(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20545){
return (new cljs.core.async.t_cljs$core$async20544(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20545));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20544(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19649__auto___20708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___20708,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___20708,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20648){
var state_val_20649 = (state_20648[(1)]);
if((state_val_20649 === (7))){
var inst_20563 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
var statearr_20650_20709 = state_20648__$1;
(statearr_20650_20709[(2)] = inst_20563);

(statearr_20650_20709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (20))){
var inst_20575 = (state_20648[(7)]);
var state_20648__$1 = state_20648;
var statearr_20651_20710 = state_20648__$1;
(statearr_20651_20710[(2)] = inst_20575);

(statearr_20651_20710[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (27))){
var state_20648__$1 = state_20648;
var statearr_20652_20711 = state_20648__$1;
(statearr_20652_20711[(2)] = null);

(statearr_20652_20711[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (1))){
var inst_20550 = (state_20648[(8)]);
var inst_20550__$1 = calc_state.call(null);
var inst_20552 = (inst_20550__$1 == null);
var inst_20553 = cljs.core.not.call(null,inst_20552);
var state_20648__$1 = (function (){var statearr_20653 = state_20648;
(statearr_20653[(8)] = inst_20550__$1);

return statearr_20653;
})();
if(inst_20553){
var statearr_20654_20712 = state_20648__$1;
(statearr_20654_20712[(1)] = (2));

} else {
var statearr_20655_20713 = state_20648__$1;
(statearr_20655_20713[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (24))){
var inst_20599 = (state_20648[(9)]);
var inst_20608 = (state_20648[(10)]);
var inst_20622 = (state_20648[(11)]);
var inst_20622__$1 = inst_20599.call(null,inst_20608);
var state_20648__$1 = (function (){var statearr_20656 = state_20648;
(statearr_20656[(11)] = inst_20622__$1);

return statearr_20656;
})();
if(cljs.core.truth_(inst_20622__$1)){
var statearr_20657_20714 = state_20648__$1;
(statearr_20657_20714[(1)] = (29));

} else {
var statearr_20658_20715 = state_20648__$1;
(statearr_20658_20715[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (4))){
var inst_20566 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
if(cljs.core.truth_(inst_20566)){
var statearr_20659_20716 = state_20648__$1;
(statearr_20659_20716[(1)] = (8));

} else {
var statearr_20660_20717 = state_20648__$1;
(statearr_20660_20717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (15))){
var inst_20593 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
if(cljs.core.truth_(inst_20593)){
var statearr_20661_20718 = state_20648__$1;
(statearr_20661_20718[(1)] = (19));

} else {
var statearr_20662_20719 = state_20648__$1;
(statearr_20662_20719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (21))){
var inst_20598 = (state_20648[(12)]);
var inst_20598__$1 = (state_20648[(2)]);
var inst_20599 = cljs.core.get.call(null,inst_20598__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20600 = cljs.core.get.call(null,inst_20598__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20601 = cljs.core.get.call(null,inst_20598__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20648__$1 = (function (){var statearr_20663 = state_20648;
(statearr_20663[(9)] = inst_20599);

(statearr_20663[(13)] = inst_20600);

(statearr_20663[(12)] = inst_20598__$1);

return statearr_20663;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20648__$1,(22),inst_20601);
} else {
if((state_val_20649 === (31))){
var inst_20630 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
if(cljs.core.truth_(inst_20630)){
var statearr_20664_20720 = state_20648__$1;
(statearr_20664_20720[(1)] = (32));

} else {
var statearr_20665_20721 = state_20648__$1;
(statearr_20665_20721[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (32))){
var inst_20607 = (state_20648[(14)]);
var state_20648__$1 = state_20648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20648__$1,(35),out,inst_20607);
} else {
if((state_val_20649 === (33))){
var inst_20598 = (state_20648[(12)]);
var inst_20575 = inst_20598;
var state_20648__$1 = (function (){var statearr_20666 = state_20648;
(statearr_20666[(7)] = inst_20575);

return statearr_20666;
})();
var statearr_20667_20722 = state_20648__$1;
(statearr_20667_20722[(2)] = null);

(statearr_20667_20722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (13))){
var inst_20575 = (state_20648[(7)]);
var inst_20582 = inst_20575.cljs$lang$protocol_mask$partition0$;
var inst_20583 = (inst_20582 & (64));
var inst_20584 = inst_20575.cljs$core$ISeq$;
var inst_20585 = (cljs.core.PROTOCOL_SENTINEL === inst_20584);
var inst_20586 = ((inst_20583) || (inst_20585));
var state_20648__$1 = state_20648;
if(cljs.core.truth_(inst_20586)){
var statearr_20668_20723 = state_20648__$1;
(statearr_20668_20723[(1)] = (16));

} else {
var statearr_20669_20724 = state_20648__$1;
(statearr_20669_20724[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (22))){
var inst_20607 = (state_20648[(14)]);
var inst_20608 = (state_20648[(10)]);
var inst_20606 = (state_20648[(2)]);
var inst_20607__$1 = cljs.core.nth.call(null,inst_20606,(0),null);
var inst_20608__$1 = cljs.core.nth.call(null,inst_20606,(1),null);
var inst_20609 = (inst_20607__$1 == null);
var inst_20610 = cljs.core._EQ_.call(null,inst_20608__$1,change);
var inst_20611 = ((inst_20609) || (inst_20610));
var state_20648__$1 = (function (){var statearr_20670 = state_20648;
(statearr_20670[(14)] = inst_20607__$1);

(statearr_20670[(10)] = inst_20608__$1);

return statearr_20670;
})();
if(cljs.core.truth_(inst_20611)){
var statearr_20671_20725 = state_20648__$1;
(statearr_20671_20725[(1)] = (23));

} else {
var statearr_20672_20726 = state_20648__$1;
(statearr_20672_20726[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (36))){
var inst_20598 = (state_20648[(12)]);
var inst_20575 = inst_20598;
var state_20648__$1 = (function (){var statearr_20673 = state_20648;
(statearr_20673[(7)] = inst_20575);

return statearr_20673;
})();
var statearr_20674_20727 = state_20648__$1;
(statearr_20674_20727[(2)] = null);

(statearr_20674_20727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (29))){
var inst_20622 = (state_20648[(11)]);
var state_20648__$1 = state_20648;
var statearr_20675_20728 = state_20648__$1;
(statearr_20675_20728[(2)] = inst_20622);

(statearr_20675_20728[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (6))){
var state_20648__$1 = state_20648;
var statearr_20676_20729 = state_20648__$1;
(statearr_20676_20729[(2)] = false);

(statearr_20676_20729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (28))){
var inst_20618 = (state_20648[(2)]);
var inst_20619 = calc_state.call(null);
var inst_20575 = inst_20619;
var state_20648__$1 = (function (){var statearr_20677 = state_20648;
(statearr_20677[(7)] = inst_20575);

(statearr_20677[(15)] = inst_20618);

return statearr_20677;
})();
var statearr_20678_20730 = state_20648__$1;
(statearr_20678_20730[(2)] = null);

(statearr_20678_20730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (25))){
var inst_20644 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
var statearr_20679_20731 = state_20648__$1;
(statearr_20679_20731[(2)] = inst_20644);

(statearr_20679_20731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (34))){
var inst_20642 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
var statearr_20680_20732 = state_20648__$1;
(statearr_20680_20732[(2)] = inst_20642);

(statearr_20680_20732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (17))){
var state_20648__$1 = state_20648;
var statearr_20681_20733 = state_20648__$1;
(statearr_20681_20733[(2)] = false);

(statearr_20681_20733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (3))){
var state_20648__$1 = state_20648;
var statearr_20682_20734 = state_20648__$1;
(statearr_20682_20734[(2)] = false);

(statearr_20682_20734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (12))){
var inst_20646 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20648__$1,inst_20646);
} else {
if((state_val_20649 === (2))){
var inst_20550 = (state_20648[(8)]);
var inst_20555 = inst_20550.cljs$lang$protocol_mask$partition0$;
var inst_20556 = (inst_20555 & (64));
var inst_20557 = inst_20550.cljs$core$ISeq$;
var inst_20558 = (cljs.core.PROTOCOL_SENTINEL === inst_20557);
var inst_20559 = ((inst_20556) || (inst_20558));
var state_20648__$1 = state_20648;
if(cljs.core.truth_(inst_20559)){
var statearr_20683_20735 = state_20648__$1;
(statearr_20683_20735[(1)] = (5));

} else {
var statearr_20684_20736 = state_20648__$1;
(statearr_20684_20736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (23))){
var inst_20607 = (state_20648[(14)]);
var inst_20613 = (inst_20607 == null);
var state_20648__$1 = state_20648;
if(cljs.core.truth_(inst_20613)){
var statearr_20685_20737 = state_20648__$1;
(statearr_20685_20737[(1)] = (26));

} else {
var statearr_20686_20738 = state_20648__$1;
(statearr_20686_20738[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (35))){
var inst_20633 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
if(cljs.core.truth_(inst_20633)){
var statearr_20687_20739 = state_20648__$1;
(statearr_20687_20739[(1)] = (36));

} else {
var statearr_20688_20740 = state_20648__$1;
(statearr_20688_20740[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (19))){
var inst_20575 = (state_20648[(7)]);
var inst_20595 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20575);
var state_20648__$1 = state_20648;
var statearr_20689_20741 = state_20648__$1;
(statearr_20689_20741[(2)] = inst_20595);

(statearr_20689_20741[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (11))){
var inst_20575 = (state_20648[(7)]);
var inst_20579 = (inst_20575 == null);
var inst_20580 = cljs.core.not.call(null,inst_20579);
var state_20648__$1 = state_20648;
if(inst_20580){
var statearr_20690_20742 = state_20648__$1;
(statearr_20690_20742[(1)] = (13));

} else {
var statearr_20691_20743 = state_20648__$1;
(statearr_20691_20743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (9))){
var inst_20550 = (state_20648[(8)]);
var state_20648__$1 = state_20648;
var statearr_20692_20744 = state_20648__$1;
(statearr_20692_20744[(2)] = inst_20550);

(statearr_20692_20744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (5))){
var state_20648__$1 = state_20648;
var statearr_20693_20745 = state_20648__$1;
(statearr_20693_20745[(2)] = true);

(statearr_20693_20745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (14))){
var state_20648__$1 = state_20648;
var statearr_20694_20746 = state_20648__$1;
(statearr_20694_20746[(2)] = false);

(statearr_20694_20746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (26))){
var inst_20608 = (state_20648[(10)]);
var inst_20615 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20608);
var state_20648__$1 = state_20648;
var statearr_20695_20747 = state_20648__$1;
(statearr_20695_20747[(2)] = inst_20615);

(statearr_20695_20747[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (16))){
var state_20648__$1 = state_20648;
var statearr_20696_20748 = state_20648__$1;
(statearr_20696_20748[(2)] = true);

(statearr_20696_20748[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (38))){
var inst_20638 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
var statearr_20697_20749 = state_20648__$1;
(statearr_20697_20749[(2)] = inst_20638);

(statearr_20697_20749[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (30))){
var inst_20599 = (state_20648[(9)]);
var inst_20600 = (state_20648[(13)]);
var inst_20608 = (state_20648[(10)]);
var inst_20625 = cljs.core.empty_QMARK_.call(null,inst_20599);
var inst_20626 = inst_20600.call(null,inst_20608);
var inst_20627 = cljs.core.not.call(null,inst_20626);
var inst_20628 = ((inst_20625) && (inst_20627));
var state_20648__$1 = state_20648;
var statearr_20698_20750 = state_20648__$1;
(statearr_20698_20750[(2)] = inst_20628);

(statearr_20698_20750[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (10))){
var inst_20550 = (state_20648[(8)]);
var inst_20571 = (state_20648[(2)]);
var inst_20572 = cljs.core.get.call(null,inst_20571,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20573 = cljs.core.get.call(null,inst_20571,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20574 = cljs.core.get.call(null,inst_20571,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20575 = inst_20550;
var state_20648__$1 = (function (){var statearr_20699 = state_20648;
(statearr_20699[(16)] = inst_20574);

(statearr_20699[(17)] = inst_20573);

(statearr_20699[(18)] = inst_20572);

(statearr_20699[(7)] = inst_20575);

return statearr_20699;
})();
var statearr_20700_20751 = state_20648__$1;
(statearr_20700_20751[(2)] = null);

(statearr_20700_20751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (18))){
var inst_20590 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
var statearr_20701_20752 = state_20648__$1;
(statearr_20701_20752[(2)] = inst_20590);

(statearr_20701_20752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (37))){
var state_20648__$1 = state_20648;
var statearr_20702_20753 = state_20648__$1;
(statearr_20702_20753[(2)] = null);

(statearr_20702_20753[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (8))){
var inst_20550 = (state_20648[(8)]);
var inst_20568 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20550);
var state_20648__$1 = state_20648;
var statearr_20703_20754 = state_20648__$1;
(statearr_20703_20754[(2)] = inst_20568);

(statearr_20703_20754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___20708,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19554__auto__,c__19649__auto___20708,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19555__auto__ = null;
var cljs$core$async$mix_$_state_machine__19555__auto____0 = (function (){
var statearr_20704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20704[(0)] = cljs$core$async$mix_$_state_machine__19555__auto__);

(statearr_20704[(1)] = (1));

return statearr_20704;
});
var cljs$core$async$mix_$_state_machine__19555__auto____1 = (function (state_20648){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_20648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e20705){if((e20705 instanceof Object)){
var ex__19558__auto__ = e20705;
var statearr_20706_20755 = state_20648;
(statearr_20706_20755[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20756 = state_20648;
state_20648 = G__20756;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19555__auto__ = function(state_20648){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19555__auto____1.call(this,state_20648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19555__auto____0;
cljs$core$async$mix_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19555__auto____1;
return cljs$core$async$mix_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___20708,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19651__auto__ = (function (){var statearr_20707 = f__19650__auto__.call(null);
(statearr_20707[(6)] = c__19649__auto___20708);

return statearr_20707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___20708,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__20758 = arguments.length;
switch (G__20758) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__20762 = arguments.length;
switch (G__20762) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__20760_SHARP_){
if(cljs.core.truth_(p1__20760_SHARP_.call(null,topic))){
return p1__20760_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20760_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20763 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20764){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20764 = meta20764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20765,meta20764__$1){
var self__ = this;
var _20765__$1 = this;
return (new cljs.core.async.t_cljs$core$async20763(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20764__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20765){
var self__ = this;
var _20765__$1 = this;
return self__.meta20764;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20763.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20763.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20763.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20763.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20763.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20763.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20764","meta20764",-29163905,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20763";

cljs.core.async.t_cljs$core$async20763.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20763");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20763.
 */
cljs.core.async.__GT_t_cljs$core$async20763 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20763(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20764){
return (new cljs.core.async.t_cljs$core$async20763(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20764));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20763(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19649__auto___20883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___20883,mults,ensure_mult,p){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___20883,mults,ensure_mult,p){
return (function (state_20837){
var state_val_20838 = (state_20837[(1)]);
if((state_val_20838 === (7))){
var inst_20833 = (state_20837[(2)]);
var state_20837__$1 = state_20837;
var statearr_20839_20884 = state_20837__$1;
(statearr_20839_20884[(2)] = inst_20833);

(statearr_20839_20884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (20))){
var state_20837__$1 = state_20837;
var statearr_20840_20885 = state_20837__$1;
(statearr_20840_20885[(2)] = null);

(statearr_20840_20885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (1))){
var state_20837__$1 = state_20837;
var statearr_20841_20886 = state_20837__$1;
(statearr_20841_20886[(2)] = null);

(statearr_20841_20886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (24))){
var inst_20816 = (state_20837[(7)]);
var inst_20825 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20816);
var state_20837__$1 = state_20837;
var statearr_20842_20887 = state_20837__$1;
(statearr_20842_20887[(2)] = inst_20825);

(statearr_20842_20887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (4))){
var inst_20768 = (state_20837[(8)]);
var inst_20768__$1 = (state_20837[(2)]);
var inst_20769 = (inst_20768__$1 == null);
var state_20837__$1 = (function (){var statearr_20843 = state_20837;
(statearr_20843[(8)] = inst_20768__$1);

return statearr_20843;
})();
if(cljs.core.truth_(inst_20769)){
var statearr_20844_20888 = state_20837__$1;
(statearr_20844_20888[(1)] = (5));

} else {
var statearr_20845_20889 = state_20837__$1;
(statearr_20845_20889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (15))){
var inst_20810 = (state_20837[(2)]);
var state_20837__$1 = state_20837;
var statearr_20846_20890 = state_20837__$1;
(statearr_20846_20890[(2)] = inst_20810);

(statearr_20846_20890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (21))){
var inst_20830 = (state_20837[(2)]);
var state_20837__$1 = (function (){var statearr_20847 = state_20837;
(statearr_20847[(9)] = inst_20830);

return statearr_20847;
})();
var statearr_20848_20891 = state_20837__$1;
(statearr_20848_20891[(2)] = null);

(statearr_20848_20891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (13))){
var inst_20792 = (state_20837[(10)]);
var inst_20794 = cljs.core.chunked_seq_QMARK_.call(null,inst_20792);
var state_20837__$1 = state_20837;
if(inst_20794){
var statearr_20849_20892 = state_20837__$1;
(statearr_20849_20892[(1)] = (16));

} else {
var statearr_20850_20893 = state_20837__$1;
(statearr_20850_20893[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (22))){
var inst_20822 = (state_20837[(2)]);
var state_20837__$1 = state_20837;
if(cljs.core.truth_(inst_20822)){
var statearr_20851_20894 = state_20837__$1;
(statearr_20851_20894[(1)] = (23));

} else {
var statearr_20852_20895 = state_20837__$1;
(statearr_20852_20895[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (6))){
var inst_20818 = (state_20837[(11)]);
var inst_20768 = (state_20837[(8)]);
var inst_20816 = (state_20837[(7)]);
var inst_20816__$1 = topic_fn.call(null,inst_20768);
var inst_20817 = cljs.core.deref.call(null,mults);
var inst_20818__$1 = cljs.core.get.call(null,inst_20817,inst_20816__$1);
var state_20837__$1 = (function (){var statearr_20853 = state_20837;
(statearr_20853[(11)] = inst_20818__$1);

(statearr_20853[(7)] = inst_20816__$1);

return statearr_20853;
})();
if(cljs.core.truth_(inst_20818__$1)){
var statearr_20854_20896 = state_20837__$1;
(statearr_20854_20896[(1)] = (19));

} else {
var statearr_20855_20897 = state_20837__$1;
(statearr_20855_20897[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (25))){
var inst_20827 = (state_20837[(2)]);
var state_20837__$1 = state_20837;
var statearr_20856_20898 = state_20837__$1;
(statearr_20856_20898[(2)] = inst_20827);

(statearr_20856_20898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (17))){
var inst_20792 = (state_20837[(10)]);
var inst_20801 = cljs.core.first.call(null,inst_20792);
var inst_20802 = cljs.core.async.muxch_STAR_.call(null,inst_20801);
var inst_20803 = cljs.core.async.close_BANG_.call(null,inst_20802);
var inst_20804 = cljs.core.next.call(null,inst_20792);
var inst_20778 = inst_20804;
var inst_20779 = null;
var inst_20780 = (0);
var inst_20781 = (0);
var state_20837__$1 = (function (){var statearr_20857 = state_20837;
(statearr_20857[(12)] = inst_20803);

(statearr_20857[(13)] = inst_20781);

(statearr_20857[(14)] = inst_20779);

(statearr_20857[(15)] = inst_20780);

(statearr_20857[(16)] = inst_20778);

return statearr_20857;
})();
var statearr_20858_20899 = state_20837__$1;
(statearr_20858_20899[(2)] = null);

(statearr_20858_20899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (3))){
var inst_20835 = (state_20837[(2)]);
var state_20837__$1 = state_20837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20837__$1,inst_20835);
} else {
if((state_val_20838 === (12))){
var inst_20812 = (state_20837[(2)]);
var state_20837__$1 = state_20837;
var statearr_20859_20900 = state_20837__$1;
(statearr_20859_20900[(2)] = inst_20812);

(statearr_20859_20900[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (2))){
var state_20837__$1 = state_20837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20837__$1,(4),ch);
} else {
if((state_val_20838 === (23))){
var state_20837__$1 = state_20837;
var statearr_20860_20901 = state_20837__$1;
(statearr_20860_20901[(2)] = null);

(statearr_20860_20901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (19))){
var inst_20818 = (state_20837[(11)]);
var inst_20768 = (state_20837[(8)]);
var inst_20820 = cljs.core.async.muxch_STAR_.call(null,inst_20818);
var state_20837__$1 = state_20837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20837__$1,(22),inst_20820,inst_20768);
} else {
if((state_val_20838 === (11))){
var inst_20792 = (state_20837[(10)]);
var inst_20778 = (state_20837[(16)]);
var inst_20792__$1 = cljs.core.seq.call(null,inst_20778);
var state_20837__$1 = (function (){var statearr_20861 = state_20837;
(statearr_20861[(10)] = inst_20792__$1);

return statearr_20861;
})();
if(inst_20792__$1){
var statearr_20862_20902 = state_20837__$1;
(statearr_20862_20902[(1)] = (13));

} else {
var statearr_20863_20903 = state_20837__$1;
(statearr_20863_20903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (9))){
var inst_20814 = (state_20837[(2)]);
var state_20837__$1 = state_20837;
var statearr_20864_20904 = state_20837__$1;
(statearr_20864_20904[(2)] = inst_20814);

(statearr_20864_20904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (5))){
var inst_20775 = cljs.core.deref.call(null,mults);
var inst_20776 = cljs.core.vals.call(null,inst_20775);
var inst_20777 = cljs.core.seq.call(null,inst_20776);
var inst_20778 = inst_20777;
var inst_20779 = null;
var inst_20780 = (0);
var inst_20781 = (0);
var state_20837__$1 = (function (){var statearr_20865 = state_20837;
(statearr_20865[(13)] = inst_20781);

(statearr_20865[(14)] = inst_20779);

(statearr_20865[(15)] = inst_20780);

(statearr_20865[(16)] = inst_20778);

return statearr_20865;
})();
var statearr_20866_20905 = state_20837__$1;
(statearr_20866_20905[(2)] = null);

(statearr_20866_20905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (14))){
var state_20837__$1 = state_20837;
var statearr_20870_20906 = state_20837__$1;
(statearr_20870_20906[(2)] = null);

(statearr_20870_20906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (16))){
var inst_20792 = (state_20837[(10)]);
var inst_20796 = cljs.core.chunk_first.call(null,inst_20792);
var inst_20797 = cljs.core.chunk_rest.call(null,inst_20792);
var inst_20798 = cljs.core.count.call(null,inst_20796);
var inst_20778 = inst_20797;
var inst_20779 = inst_20796;
var inst_20780 = inst_20798;
var inst_20781 = (0);
var state_20837__$1 = (function (){var statearr_20871 = state_20837;
(statearr_20871[(13)] = inst_20781);

(statearr_20871[(14)] = inst_20779);

(statearr_20871[(15)] = inst_20780);

(statearr_20871[(16)] = inst_20778);

return statearr_20871;
})();
var statearr_20872_20907 = state_20837__$1;
(statearr_20872_20907[(2)] = null);

(statearr_20872_20907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (10))){
var inst_20781 = (state_20837[(13)]);
var inst_20779 = (state_20837[(14)]);
var inst_20780 = (state_20837[(15)]);
var inst_20778 = (state_20837[(16)]);
var inst_20786 = cljs.core._nth.call(null,inst_20779,inst_20781);
var inst_20787 = cljs.core.async.muxch_STAR_.call(null,inst_20786);
var inst_20788 = cljs.core.async.close_BANG_.call(null,inst_20787);
var inst_20789 = (inst_20781 + (1));
var tmp20867 = inst_20779;
var tmp20868 = inst_20780;
var tmp20869 = inst_20778;
var inst_20778__$1 = tmp20869;
var inst_20779__$1 = tmp20867;
var inst_20780__$1 = tmp20868;
var inst_20781__$1 = inst_20789;
var state_20837__$1 = (function (){var statearr_20873 = state_20837;
(statearr_20873[(13)] = inst_20781__$1);

(statearr_20873[(14)] = inst_20779__$1);

(statearr_20873[(17)] = inst_20788);

(statearr_20873[(15)] = inst_20780__$1);

(statearr_20873[(16)] = inst_20778__$1);

return statearr_20873;
})();
var statearr_20874_20908 = state_20837__$1;
(statearr_20874_20908[(2)] = null);

(statearr_20874_20908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (18))){
var inst_20807 = (state_20837[(2)]);
var state_20837__$1 = state_20837;
var statearr_20875_20909 = state_20837__$1;
(statearr_20875_20909[(2)] = inst_20807);

(statearr_20875_20909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (8))){
var inst_20781 = (state_20837[(13)]);
var inst_20780 = (state_20837[(15)]);
var inst_20783 = (inst_20781 < inst_20780);
var inst_20784 = inst_20783;
var state_20837__$1 = state_20837;
if(cljs.core.truth_(inst_20784)){
var statearr_20876_20910 = state_20837__$1;
(statearr_20876_20910[(1)] = (10));

} else {
var statearr_20877_20911 = state_20837__$1;
(statearr_20877_20911[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___20883,mults,ensure_mult,p))
;
return ((function (switch__19554__auto__,c__19649__auto___20883,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_20878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20878[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_20878[(1)] = (1));

return statearr_20878;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_20837){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_20837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e20879){if((e20879 instanceof Object)){
var ex__19558__auto__ = e20879;
var statearr_20880_20912 = state_20837;
(statearr_20880_20912[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20913 = state_20837;
state_20837 = G__20913;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_20837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_20837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___20883,mults,ensure_mult,p))
})();
var state__19651__auto__ = (function (){var statearr_20881 = f__19650__auto__.call(null);
(statearr_20881[(6)] = c__19649__auto___20883);

return statearr_20881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___20883,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__20915 = arguments.length;
switch (G__20915) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__20918 = arguments.length;
switch (G__20918) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__20921 = arguments.length;
switch (G__20921) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19649__auto___20988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___20988,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___20988,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20960){
var state_val_20961 = (state_20960[(1)]);
if((state_val_20961 === (7))){
var state_20960__$1 = state_20960;
var statearr_20962_20989 = state_20960__$1;
(statearr_20962_20989[(2)] = null);

(statearr_20962_20989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (1))){
var state_20960__$1 = state_20960;
var statearr_20963_20990 = state_20960__$1;
(statearr_20963_20990[(2)] = null);

(statearr_20963_20990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (4))){
var inst_20924 = (state_20960[(7)]);
var inst_20926 = (inst_20924 < cnt);
var state_20960__$1 = state_20960;
if(cljs.core.truth_(inst_20926)){
var statearr_20964_20991 = state_20960__$1;
(statearr_20964_20991[(1)] = (6));

} else {
var statearr_20965_20992 = state_20960__$1;
(statearr_20965_20992[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (15))){
var inst_20956 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
var statearr_20966_20993 = state_20960__$1;
(statearr_20966_20993[(2)] = inst_20956);

(statearr_20966_20993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (13))){
var inst_20949 = cljs.core.async.close_BANG_.call(null,out);
var state_20960__$1 = state_20960;
var statearr_20967_20994 = state_20960__$1;
(statearr_20967_20994[(2)] = inst_20949);

(statearr_20967_20994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (6))){
var state_20960__$1 = state_20960;
var statearr_20968_20995 = state_20960__$1;
(statearr_20968_20995[(2)] = null);

(statearr_20968_20995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (3))){
var inst_20958 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20960__$1,inst_20958);
} else {
if((state_val_20961 === (12))){
var inst_20946 = (state_20960[(8)]);
var inst_20946__$1 = (state_20960[(2)]);
var inst_20947 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20946__$1);
var state_20960__$1 = (function (){var statearr_20969 = state_20960;
(statearr_20969[(8)] = inst_20946__$1);

return statearr_20969;
})();
if(cljs.core.truth_(inst_20947)){
var statearr_20970_20996 = state_20960__$1;
(statearr_20970_20996[(1)] = (13));

} else {
var statearr_20971_20997 = state_20960__$1;
(statearr_20971_20997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (2))){
var inst_20923 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20924 = (0);
var state_20960__$1 = (function (){var statearr_20972 = state_20960;
(statearr_20972[(7)] = inst_20924);

(statearr_20972[(9)] = inst_20923);

return statearr_20972;
})();
var statearr_20973_20998 = state_20960__$1;
(statearr_20973_20998[(2)] = null);

(statearr_20973_20998[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (11))){
var inst_20924 = (state_20960[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20960,(10),Object,null,(9));
var inst_20933 = chs__$1.call(null,inst_20924);
var inst_20934 = done.call(null,inst_20924);
var inst_20935 = cljs.core.async.take_BANG_.call(null,inst_20933,inst_20934);
var state_20960__$1 = state_20960;
var statearr_20974_20999 = state_20960__$1;
(statearr_20974_20999[(2)] = inst_20935);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (9))){
var inst_20924 = (state_20960[(7)]);
var inst_20937 = (state_20960[(2)]);
var inst_20938 = (inst_20924 + (1));
var inst_20924__$1 = inst_20938;
var state_20960__$1 = (function (){var statearr_20975 = state_20960;
(statearr_20975[(7)] = inst_20924__$1);

(statearr_20975[(10)] = inst_20937);

return statearr_20975;
})();
var statearr_20976_21000 = state_20960__$1;
(statearr_20976_21000[(2)] = null);

(statearr_20976_21000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (5))){
var inst_20944 = (state_20960[(2)]);
var state_20960__$1 = (function (){var statearr_20977 = state_20960;
(statearr_20977[(11)] = inst_20944);

return statearr_20977;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20960__$1,(12),dchan);
} else {
if((state_val_20961 === (14))){
var inst_20946 = (state_20960[(8)]);
var inst_20951 = cljs.core.apply.call(null,f,inst_20946);
var state_20960__$1 = state_20960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20960__$1,(16),out,inst_20951);
} else {
if((state_val_20961 === (16))){
var inst_20953 = (state_20960[(2)]);
var state_20960__$1 = (function (){var statearr_20978 = state_20960;
(statearr_20978[(12)] = inst_20953);

return statearr_20978;
})();
var statearr_20979_21001 = state_20960__$1;
(statearr_20979_21001[(2)] = null);

(statearr_20979_21001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (10))){
var inst_20928 = (state_20960[(2)]);
var inst_20929 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20960__$1 = (function (){var statearr_20980 = state_20960;
(statearr_20980[(13)] = inst_20928);

return statearr_20980;
})();
var statearr_20981_21002 = state_20960__$1;
(statearr_20981_21002[(2)] = inst_20929);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (8))){
var inst_20942 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
var statearr_20982_21003 = state_20960__$1;
(statearr_20982_21003[(2)] = inst_20942);

(statearr_20982_21003[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___20988,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19554__auto__,c__19649__auto___20988,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_20983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20983[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_20983[(1)] = (1));

return statearr_20983;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_20960){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_20960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e20984){if((e20984 instanceof Object)){
var ex__19558__auto__ = e20984;
var statearr_20985_21004 = state_20960;
(statearr_20985_21004[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21005 = state_20960;
state_20960 = G__21005;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_20960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_20960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___20988,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19651__auto__ = (function (){var statearr_20986 = f__19650__auto__.call(null);
(statearr_20986[(6)] = c__19649__auto___20988);

return statearr_20986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___20988,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__21008 = arguments.length;
switch (G__21008) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19649__auto___21062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___21062,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___21062,out){
return (function (state_21040){
var state_val_21041 = (state_21040[(1)]);
if((state_val_21041 === (7))){
var inst_21020 = (state_21040[(7)]);
var inst_21019 = (state_21040[(8)]);
var inst_21019__$1 = (state_21040[(2)]);
var inst_21020__$1 = cljs.core.nth.call(null,inst_21019__$1,(0),null);
var inst_21021 = cljs.core.nth.call(null,inst_21019__$1,(1),null);
var inst_21022 = (inst_21020__$1 == null);
var state_21040__$1 = (function (){var statearr_21042 = state_21040;
(statearr_21042[(9)] = inst_21021);

(statearr_21042[(7)] = inst_21020__$1);

(statearr_21042[(8)] = inst_21019__$1);

return statearr_21042;
})();
if(cljs.core.truth_(inst_21022)){
var statearr_21043_21063 = state_21040__$1;
(statearr_21043_21063[(1)] = (8));

} else {
var statearr_21044_21064 = state_21040__$1;
(statearr_21044_21064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (1))){
var inst_21009 = cljs.core.vec.call(null,chs);
var inst_21010 = inst_21009;
var state_21040__$1 = (function (){var statearr_21045 = state_21040;
(statearr_21045[(10)] = inst_21010);

return statearr_21045;
})();
var statearr_21046_21065 = state_21040__$1;
(statearr_21046_21065[(2)] = null);

(statearr_21046_21065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (4))){
var inst_21010 = (state_21040[(10)]);
var state_21040__$1 = state_21040;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21040__$1,(7),inst_21010);
} else {
if((state_val_21041 === (6))){
var inst_21036 = (state_21040[(2)]);
var state_21040__$1 = state_21040;
var statearr_21047_21066 = state_21040__$1;
(statearr_21047_21066[(2)] = inst_21036);

(statearr_21047_21066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (3))){
var inst_21038 = (state_21040[(2)]);
var state_21040__$1 = state_21040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21040__$1,inst_21038);
} else {
if((state_val_21041 === (2))){
var inst_21010 = (state_21040[(10)]);
var inst_21012 = cljs.core.count.call(null,inst_21010);
var inst_21013 = (inst_21012 > (0));
var state_21040__$1 = state_21040;
if(cljs.core.truth_(inst_21013)){
var statearr_21049_21067 = state_21040__$1;
(statearr_21049_21067[(1)] = (4));

} else {
var statearr_21050_21068 = state_21040__$1;
(statearr_21050_21068[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (11))){
var inst_21010 = (state_21040[(10)]);
var inst_21029 = (state_21040[(2)]);
var tmp21048 = inst_21010;
var inst_21010__$1 = tmp21048;
var state_21040__$1 = (function (){var statearr_21051 = state_21040;
(statearr_21051[(11)] = inst_21029);

(statearr_21051[(10)] = inst_21010__$1);

return statearr_21051;
})();
var statearr_21052_21069 = state_21040__$1;
(statearr_21052_21069[(2)] = null);

(statearr_21052_21069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (9))){
var inst_21020 = (state_21040[(7)]);
var state_21040__$1 = state_21040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21040__$1,(11),out,inst_21020);
} else {
if((state_val_21041 === (5))){
var inst_21034 = cljs.core.async.close_BANG_.call(null,out);
var state_21040__$1 = state_21040;
var statearr_21053_21070 = state_21040__$1;
(statearr_21053_21070[(2)] = inst_21034);

(statearr_21053_21070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (10))){
var inst_21032 = (state_21040[(2)]);
var state_21040__$1 = state_21040;
var statearr_21054_21071 = state_21040__$1;
(statearr_21054_21071[(2)] = inst_21032);

(statearr_21054_21071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (8))){
var inst_21021 = (state_21040[(9)]);
var inst_21020 = (state_21040[(7)]);
var inst_21010 = (state_21040[(10)]);
var inst_21019 = (state_21040[(8)]);
var inst_21024 = (function (){var cs = inst_21010;
var vec__21015 = inst_21019;
var v = inst_21020;
var c = inst_21021;
return ((function (cs,vec__21015,v,c,inst_21021,inst_21020,inst_21010,inst_21019,state_val_21041,c__19649__auto___21062,out){
return (function (p1__21006_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21006_SHARP_);
});
;})(cs,vec__21015,v,c,inst_21021,inst_21020,inst_21010,inst_21019,state_val_21041,c__19649__auto___21062,out))
})();
var inst_21025 = cljs.core.filterv.call(null,inst_21024,inst_21010);
var inst_21010__$1 = inst_21025;
var state_21040__$1 = (function (){var statearr_21055 = state_21040;
(statearr_21055[(10)] = inst_21010__$1);

return statearr_21055;
})();
var statearr_21056_21072 = state_21040__$1;
(statearr_21056_21072[(2)] = null);

(statearr_21056_21072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___21062,out))
;
return ((function (switch__19554__auto__,c__19649__auto___21062,out){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_21057 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21057[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_21057[(1)] = (1));

return statearr_21057;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_21040){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_21040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e21058){if((e21058 instanceof Object)){
var ex__19558__auto__ = e21058;
var statearr_21059_21073 = state_21040;
(statearr_21059_21073[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21074 = state_21040;
state_21040 = G__21074;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_21040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_21040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___21062,out))
})();
var state__19651__auto__ = (function (){var statearr_21060 = f__19650__auto__.call(null);
(statearr_21060[(6)] = c__19649__auto___21062);

return statearr_21060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___21062,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__21076 = arguments.length;
switch (G__21076) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19649__auto___21121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___21121,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___21121,out){
return (function (state_21100){
var state_val_21101 = (state_21100[(1)]);
if((state_val_21101 === (7))){
var inst_21082 = (state_21100[(7)]);
var inst_21082__$1 = (state_21100[(2)]);
var inst_21083 = (inst_21082__$1 == null);
var inst_21084 = cljs.core.not.call(null,inst_21083);
var state_21100__$1 = (function (){var statearr_21102 = state_21100;
(statearr_21102[(7)] = inst_21082__$1);

return statearr_21102;
})();
if(inst_21084){
var statearr_21103_21122 = state_21100__$1;
(statearr_21103_21122[(1)] = (8));

} else {
var statearr_21104_21123 = state_21100__$1;
(statearr_21104_21123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (1))){
var inst_21077 = (0);
var state_21100__$1 = (function (){var statearr_21105 = state_21100;
(statearr_21105[(8)] = inst_21077);

return statearr_21105;
})();
var statearr_21106_21124 = state_21100__$1;
(statearr_21106_21124[(2)] = null);

(statearr_21106_21124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (4))){
var state_21100__$1 = state_21100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21100__$1,(7),ch);
} else {
if((state_val_21101 === (6))){
var inst_21095 = (state_21100[(2)]);
var state_21100__$1 = state_21100;
var statearr_21107_21125 = state_21100__$1;
(statearr_21107_21125[(2)] = inst_21095);

(statearr_21107_21125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (3))){
var inst_21097 = (state_21100[(2)]);
var inst_21098 = cljs.core.async.close_BANG_.call(null,out);
var state_21100__$1 = (function (){var statearr_21108 = state_21100;
(statearr_21108[(9)] = inst_21097);

return statearr_21108;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21100__$1,inst_21098);
} else {
if((state_val_21101 === (2))){
var inst_21077 = (state_21100[(8)]);
var inst_21079 = (inst_21077 < n);
var state_21100__$1 = state_21100;
if(cljs.core.truth_(inst_21079)){
var statearr_21109_21126 = state_21100__$1;
(statearr_21109_21126[(1)] = (4));

} else {
var statearr_21110_21127 = state_21100__$1;
(statearr_21110_21127[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (11))){
var inst_21077 = (state_21100[(8)]);
var inst_21087 = (state_21100[(2)]);
var inst_21088 = (inst_21077 + (1));
var inst_21077__$1 = inst_21088;
var state_21100__$1 = (function (){var statearr_21111 = state_21100;
(statearr_21111[(8)] = inst_21077__$1);

(statearr_21111[(10)] = inst_21087);

return statearr_21111;
})();
var statearr_21112_21128 = state_21100__$1;
(statearr_21112_21128[(2)] = null);

(statearr_21112_21128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (9))){
var state_21100__$1 = state_21100;
var statearr_21113_21129 = state_21100__$1;
(statearr_21113_21129[(2)] = null);

(statearr_21113_21129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (5))){
var state_21100__$1 = state_21100;
var statearr_21114_21130 = state_21100__$1;
(statearr_21114_21130[(2)] = null);

(statearr_21114_21130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (10))){
var inst_21092 = (state_21100[(2)]);
var state_21100__$1 = state_21100;
var statearr_21115_21131 = state_21100__$1;
(statearr_21115_21131[(2)] = inst_21092);

(statearr_21115_21131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (8))){
var inst_21082 = (state_21100[(7)]);
var state_21100__$1 = state_21100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21100__$1,(11),out,inst_21082);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___21121,out))
;
return ((function (switch__19554__auto__,c__19649__auto___21121,out){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_21116 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21116[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_21116[(1)] = (1));

return statearr_21116;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_21100){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_21100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e21117){if((e21117 instanceof Object)){
var ex__19558__auto__ = e21117;
var statearr_21118_21132 = state_21100;
(statearr_21118_21132[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21133 = state_21100;
state_21100 = G__21133;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_21100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_21100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___21121,out))
})();
var state__19651__auto__ = (function (){var statearr_21119 = f__19650__auto__.call(null);
(statearr_21119[(6)] = c__19649__auto___21121);

return statearr_21119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___21121,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21135 = (function (f,ch,meta21136){
this.f = f;
this.ch = ch;
this.meta21136 = meta21136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21137,meta21136__$1){
var self__ = this;
var _21137__$1 = this;
return (new cljs.core.async.t_cljs$core$async21135(self__.f,self__.ch,meta21136__$1));
});

cljs.core.async.t_cljs$core$async21135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21137){
var self__ = this;
var _21137__$1 = this;
return self__.meta21136;
});

cljs.core.async.t_cljs$core$async21135.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21135.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21135.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21135.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21135.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21138 = (function (f,ch,meta21136,_,fn1,meta21139){
this.f = f;
this.ch = ch;
this.meta21136 = meta21136;
this._ = _;
this.fn1 = fn1;
this.meta21139 = meta21139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21140,meta21139__$1){
var self__ = this;
var _21140__$1 = this;
return (new cljs.core.async.t_cljs$core$async21138(self__.f,self__.ch,self__.meta21136,self__._,self__.fn1,meta21139__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21140){
var self__ = this;
var _21140__$1 = this;
return self__.meta21139;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21138.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21134_SHARP_){
return f1.call(null,(((p1__21134_SHARP_ == null))?null:self__.f.call(null,p1__21134_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21138.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21136","meta21136",960756030,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21135","cljs.core.async/t_cljs$core$async21135",-1342691890,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21139","meta21139",2034865438,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21138";

cljs.core.async.t_cljs$core$async21138.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21138");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21138.
 */
cljs.core.async.__GT_t_cljs$core$async21138 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21138(f__$1,ch__$1,meta21136__$1,___$2,fn1__$1,meta21139){
return (new cljs.core.async.t_cljs$core$async21138(f__$1,ch__$1,meta21136__$1,___$2,fn1__$1,meta21139));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21138(self__.f,self__.ch,self__.meta21136,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21135.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21135.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21136","meta21136",960756030,null)], null);
});

cljs.core.async.t_cljs$core$async21135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21135";

cljs.core.async.t_cljs$core$async21135.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21135");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21135.
 */
cljs.core.async.__GT_t_cljs$core$async21135 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21135(f__$1,ch__$1,meta21136){
return (new cljs.core.async.t_cljs$core$async21135(f__$1,ch__$1,meta21136));
});

}

return (new cljs.core.async.t_cljs$core$async21135(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21141 = (function (f,ch,meta21142){
this.f = f;
this.ch = ch;
this.meta21142 = meta21142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21143,meta21142__$1){
var self__ = this;
var _21143__$1 = this;
return (new cljs.core.async.t_cljs$core$async21141(self__.f,self__.ch,meta21142__$1));
});

cljs.core.async.t_cljs$core$async21141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21143){
var self__ = this;
var _21143__$1 = this;
return self__.meta21142;
});

cljs.core.async.t_cljs$core$async21141.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21141.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21141.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21141.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21141.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21141.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21142","meta21142",618145687,null)], null);
});

cljs.core.async.t_cljs$core$async21141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21141";

cljs.core.async.t_cljs$core$async21141.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21141");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21141.
 */
cljs.core.async.__GT_t_cljs$core$async21141 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21141(f__$1,ch__$1,meta21142){
return (new cljs.core.async.t_cljs$core$async21141(f__$1,ch__$1,meta21142));
});

}

return (new cljs.core.async.t_cljs$core$async21141(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21144 = (function (p,ch,meta21145){
this.p = p;
this.ch = ch;
this.meta21145 = meta21145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21146,meta21145__$1){
var self__ = this;
var _21146__$1 = this;
return (new cljs.core.async.t_cljs$core$async21144(self__.p,self__.ch,meta21145__$1));
});

cljs.core.async.t_cljs$core$async21144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21146){
var self__ = this;
var _21146__$1 = this;
return self__.meta21145;
});

cljs.core.async.t_cljs$core$async21144.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21144.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21144.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21144.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21145","meta21145",-1667049649,null)], null);
});

cljs.core.async.t_cljs$core$async21144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21144";

cljs.core.async.t_cljs$core$async21144.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21144");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21144.
 */
cljs.core.async.__GT_t_cljs$core$async21144 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21144(p__$1,ch__$1,meta21145){
return (new cljs.core.async.t_cljs$core$async21144(p__$1,ch__$1,meta21145));
});

}

return (new cljs.core.async.t_cljs$core$async21144(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__21148 = arguments.length;
switch (G__21148) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19649__auto___21188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___21188,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___21188,out){
return (function (state_21169){
var state_val_21170 = (state_21169[(1)]);
if((state_val_21170 === (7))){
var inst_21165 = (state_21169[(2)]);
var state_21169__$1 = state_21169;
var statearr_21171_21189 = state_21169__$1;
(statearr_21171_21189[(2)] = inst_21165);

(statearr_21171_21189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (1))){
var state_21169__$1 = state_21169;
var statearr_21172_21190 = state_21169__$1;
(statearr_21172_21190[(2)] = null);

(statearr_21172_21190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (4))){
var inst_21151 = (state_21169[(7)]);
var inst_21151__$1 = (state_21169[(2)]);
var inst_21152 = (inst_21151__$1 == null);
var state_21169__$1 = (function (){var statearr_21173 = state_21169;
(statearr_21173[(7)] = inst_21151__$1);

return statearr_21173;
})();
if(cljs.core.truth_(inst_21152)){
var statearr_21174_21191 = state_21169__$1;
(statearr_21174_21191[(1)] = (5));

} else {
var statearr_21175_21192 = state_21169__$1;
(statearr_21175_21192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (6))){
var inst_21151 = (state_21169[(7)]);
var inst_21156 = p.call(null,inst_21151);
var state_21169__$1 = state_21169;
if(cljs.core.truth_(inst_21156)){
var statearr_21176_21193 = state_21169__$1;
(statearr_21176_21193[(1)] = (8));

} else {
var statearr_21177_21194 = state_21169__$1;
(statearr_21177_21194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (3))){
var inst_21167 = (state_21169[(2)]);
var state_21169__$1 = state_21169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21169__$1,inst_21167);
} else {
if((state_val_21170 === (2))){
var state_21169__$1 = state_21169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21169__$1,(4),ch);
} else {
if((state_val_21170 === (11))){
var inst_21159 = (state_21169[(2)]);
var state_21169__$1 = state_21169;
var statearr_21178_21195 = state_21169__$1;
(statearr_21178_21195[(2)] = inst_21159);

(statearr_21178_21195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (9))){
var state_21169__$1 = state_21169;
var statearr_21179_21196 = state_21169__$1;
(statearr_21179_21196[(2)] = null);

(statearr_21179_21196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (5))){
var inst_21154 = cljs.core.async.close_BANG_.call(null,out);
var state_21169__$1 = state_21169;
var statearr_21180_21197 = state_21169__$1;
(statearr_21180_21197[(2)] = inst_21154);

(statearr_21180_21197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (10))){
var inst_21162 = (state_21169[(2)]);
var state_21169__$1 = (function (){var statearr_21181 = state_21169;
(statearr_21181[(8)] = inst_21162);

return statearr_21181;
})();
var statearr_21182_21198 = state_21169__$1;
(statearr_21182_21198[(2)] = null);

(statearr_21182_21198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (8))){
var inst_21151 = (state_21169[(7)]);
var state_21169__$1 = state_21169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21169__$1,(11),out,inst_21151);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___21188,out))
;
return ((function (switch__19554__auto__,c__19649__auto___21188,out){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_21183 = [null,null,null,null,null,null,null,null,null];
(statearr_21183[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_21183[(1)] = (1));

return statearr_21183;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_21169){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_21169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e21184){if((e21184 instanceof Object)){
var ex__19558__auto__ = e21184;
var statearr_21185_21199 = state_21169;
(statearr_21185_21199[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21200 = state_21169;
state_21169 = G__21200;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_21169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_21169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___21188,out))
})();
var state__19651__auto__ = (function (){var statearr_21186 = f__19650__auto__.call(null);
(statearr_21186[(6)] = c__19649__auto___21188);

return statearr_21186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___21188,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__21202 = arguments.length;
switch (G__21202) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto__){
return (function (state_21265){
var state_val_21266 = (state_21265[(1)]);
if((state_val_21266 === (7))){
var inst_21261 = (state_21265[(2)]);
var state_21265__$1 = state_21265;
var statearr_21267_21305 = state_21265__$1;
(statearr_21267_21305[(2)] = inst_21261);

(statearr_21267_21305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (20))){
var inst_21231 = (state_21265[(7)]);
var inst_21242 = (state_21265[(2)]);
var inst_21243 = cljs.core.next.call(null,inst_21231);
var inst_21217 = inst_21243;
var inst_21218 = null;
var inst_21219 = (0);
var inst_21220 = (0);
var state_21265__$1 = (function (){var statearr_21268 = state_21265;
(statearr_21268[(8)] = inst_21218);

(statearr_21268[(9)] = inst_21217);

(statearr_21268[(10)] = inst_21220);

(statearr_21268[(11)] = inst_21219);

(statearr_21268[(12)] = inst_21242);

return statearr_21268;
})();
var statearr_21269_21306 = state_21265__$1;
(statearr_21269_21306[(2)] = null);

(statearr_21269_21306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (1))){
var state_21265__$1 = state_21265;
var statearr_21270_21307 = state_21265__$1;
(statearr_21270_21307[(2)] = null);

(statearr_21270_21307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (4))){
var inst_21206 = (state_21265[(13)]);
var inst_21206__$1 = (state_21265[(2)]);
var inst_21207 = (inst_21206__$1 == null);
var state_21265__$1 = (function (){var statearr_21271 = state_21265;
(statearr_21271[(13)] = inst_21206__$1);

return statearr_21271;
})();
if(cljs.core.truth_(inst_21207)){
var statearr_21272_21308 = state_21265__$1;
(statearr_21272_21308[(1)] = (5));

} else {
var statearr_21273_21309 = state_21265__$1;
(statearr_21273_21309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (15))){
var state_21265__$1 = state_21265;
var statearr_21277_21310 = state_21265__$1;
(statearr_21277_21310[(2)] = null);

(statearr_21277_21310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (21))){
var state_21265__$1 = state_21265;
var statearr_21278_21311 = state_21265__$1;
(statearr_21278_21311[(2)] = null);

(statearr_21278_21311[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (13))){
var inst_21218 = (state_21265[(8)]);
var inst_21217 = (state_21265[(9)]);
var inst_21220 = (state_21265[(10)]);
var inst_21219 = (state_21265[(11)]);
var inst_21227 = (state_21265[(2)]);
var inst_21228 = (inst_21220 + (1));
var tmp21274 = inst_21218;
var tmp21275 = inst_21217;
var tmp21276 = inst_21219;
var inst_21217__$1 = tmp21275;
var inst_21218__$1 = tmp21274;
var inst_21219__$1 = tmp21276;
var inst_21220__$1 = inst_21228;
var state_21265__$1 = (function (){var statearr_21279 = state_21265;
(statearr_21279[(8)] = inst_21218__$1);

(statearr_21279[(9)] = inst_21217__$1);

(statearr_21279[(14)] = inst_21227);

(statearr_21279[(10)] = inst_21220__$1);

(statearr_21279[(11)] = inst_21219__$1);

return statearr_21279;
})();
var statearr_21280_21312 = state_21265__$1;
(statearr_21280_21312[(2)] = null);

(statearr_21280_21312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (22))){
var state_21265__$1 = state_21265;
var statearr_21281_21313 = state_21265__$1;
(statearr_21281_21313[(2)] = null);

(statearr_21281_21313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (6))){
var inst_21206 = (state_21265[(13)]);
var inst_21215 = f.call(null,inst_21206);
var inst_21216 = cljs.core.seq.call(null,inst_21215);
var inst_21217 = inst_21216;
var inst_21218 = null;
var inst_21219 = (0);
var inst_21220 = (0);
var state_21265__$1 = (function (){var statearr_21282 = state_21265;
(statearr_21282[(8)] = inst_21218);

(statearr_21282[(9)] = inst_21217);

(statearr_21282[(10)] = inst_21220);

(statearr_21282[(11)] = inst_21219);

return statearr_21282;
})();
var statearr_21283_21314 = state_21265__$1;
(statearr_21283_21314[(2)] = null);

(statearr_21283_21314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (17))){
var inst_21231 = (state_21265[(7)]);
var inst_21235 = cljs.core.chunk_first.call(null,inst_21231);
var inst_21236 = cljs.core.chunk_rest.call(null,inst_21231);
var inst_21237 = cljs.core.count.call(null,inst_21235);
var inst_21217 = inst_21236;
var inst_21218 = inst_21235;
var inst_21219 = inst_21237;
var inst_21220 = (0);
var state_21265__$1 = (function (){var statearr_21284 = state_21265;
(statearr_21284[(8)] = inst_21218);

(statearr_21284[(9)] = inst_21217);

(statearr_21284[(10)] = inst_21220);

(statearr_21284[(11)] = inst_21219);

return statearr_21284;
})();
var statearr_21285_21315 = state_21265__$1;
(statearr_21285_21315[(2)] = null);

(statearr_21285_21315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (3))){
var inst_21263 = (state_21265[(2)]);
var state_21265__$1 = state_21265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21265__$1,inst_21263);
} else {
if((state_val_21266 === (12))){
var inst_21251 = (state_21265[(2)]);
var state_21265__$1 = state_21265;
var statearr_21286_21316 = state_21265__$1;
(statearr_21286_21316[(2)] = inst_21251);

(statearr_21286_21316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (2))){
var state_21265__$1 = state_21265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21265__$1,(4),in$);
} else {
if((state_val_21266 === (23))){
var inst_21259 = (state_21265[(2)]);
var state_21265__$1 = state_21265;
var statearr_21287_21317 = state_21265__$1;
(statearr_21287_21317[(2)] = inst_21259);

(statearr_21287_21317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (19))){
var inst_21246 = (state_21265[(2)]);
var state_21265__$1 = state_21265;
var statearr_21288_21318 = state_21265__$1;
(statearr_21288_21318[(2)] = inst_21246);

(statearr_21288_21318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (11))){
var inst_21217 = (state_21265[(9)]);
var inst_21231 = (state_21265[(7)]);
var inst_21231__$1 = cljs.core.seq.call(null,inst_21217);
var state_21265__$1 = (function (){var statearr_21289 = state_21265;
(statearr_21289[(7)] = inst_21231__$1);

return statearr_21289;
})();
if(inst_21231__$1){
var statearr_21290_21319 = state_21265__$1;
(statearr_21290_21319[(1)] = (14));

} else {
var statearr_21291_21320 = state_21265__$1;
(statearr_21291_21320[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (9))){
var inst_21253 = (state_21265[(2)]);
var inst_21254 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21265__$1 = (function (){var statearr_21292 = state_21265;
(statearr_21292[(15)] = inst_21253);

return statearr_21292;
})();
if(cljs.core.truth_(inst_21254)){
var statearr_21293_21321 = state_21265__$1;
(statearr_21293_21321[(1)] = (21));

} else {
var statearr_21294_21322 = state_21265__$1;
(statearr_21294_21322[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (5))){
var inst_21209 = cljs.core.async.close_BANG_.call(null,out);
var state_21265__$1 = state_21265;
var statearr_21295_21323 = state_21265__$1;
(statearr_21295_21323[(2)] = inst_21209);

(statearr_21295_21323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (14))){
var inst_21231 = (state_21265[(7)]);
var inst_21233 = cljs.core.chunked_seq_QMARK_.call(null,inst_21231);
var state_21265__$1 = state_21265;
if(inst_21233){
var statearr_21296_21324 = state_21265__$1;
(statearr_21296_21324[(1)] = (17));

} else {
var statearr_21297_21325 = state_21265__$1;
(statearr_21297_21325[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (16))){
var inst_21249 = (state_21265[(2)]);
var state_21265__$1 = state_21265;
var statearr_21298_21326 = state_21265__$1;
(statearr_21298_21326[(2)] = inst_21249);

(statearr_21298_21326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (10))){
var inst_21218 = (state_21265[(8)]);
var inst_21220 = (state_21265[(10)]);
var inst_21225 = cljs.core._nth.call(null,inst_21218,inst_21220);
var state_21265__$1 = state_21265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21265__$1,(13),out,inst_21225);
} else {
if((state_val_21266 === (18))){
var inst_21231 = (state_21265[(7)]);
var inst_21240 = cljs.core.first.call(null,inst_21231);
var state_21265__$1 = state_21265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21265__$1,(20),out,inst_21240);
} else {
if((state_val_21266 === (8))){
var inst_21220 = (state_21265[(10)]);
var inst_21219 = (state_21265[(11)]);
var inst_21222 = (inst_21220 < inst_21219);
var inst_21223 = inst_21222;
var state_21265__$1 = state_21265;
if(cljs.core.truth_(inst_21223)){
var statearr_21299_21327 = state_21265__$1;
(statearr_21299_21327[(1)] = (10));

} else {
var statearr_21300_21328 = state_21265__$1;
(statearr_21300_21328[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto__))
;
return ((function (switch__19554__auto__,c__19649__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19555__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19555__auto____0 = (function (){
var statearr_21301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21301[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19555__auto__);

(statearr_21301[(1)] = (1));

return statearr_21301;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19555__auto____1 = (function (state_21265){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_21265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e21302){if((e21302 instanceof Object)){
var ex__19558__auto__ = e21302;
var statearr_21303_21329 = state_21265;
(statearr_21303_21329[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21330 = state_21265;
state_21265 = G__21330;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19555__auto__ = function(state_21265){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19555__auto____1.call(this,state_21265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19555__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19555__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto__))
})();
var state__19651__auto__ = (function (){var statearr_21304 = f__19650__auto__.call(null);
(statearr_21304[(6)] = c__19649__auto__);

return statearr_21304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__))
);

return c__19649__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__21332 = arguments.length;
switch (G__21332) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__21335 = arguments.length;
switch (G__21335) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__21338 = arguments.length;
switch (G__21338) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19649__auto___21385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___21385,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___21385,out){
return (function (state_21362){
var state_val_21363 = (state_21362[(1)]);
if((state_val_21363 === (7))){
var inst_21357 = (state_21362[(2)]);
var state_21362__$1 = state_21362;
var statearr_21364_21386 = state_21362__$1;
(statearr_21364_21386[(2)] = inst_21357);

(statearr_21364_21386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (1))){
var inst_21339 = null;
var state_21362__$1 = (function (){var statearr_21365 = state_21362;
(statearr_21365[(7)] = inst_21339);

return statearr_21365;
})();
var statearr_21366_21387 = state_21362__$1;
(statearr_21366_21387[(2)] = null);

(statearr_21366_21387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (4))){
var inst_21342 = (state_21362[(8)]);
var inst_21342__$1 = (state_21362[(2)]);
var inst_21343 = (inst_21342__$1 == null);
var inst_21344 = cljs.core.not.call(null,inst_21343);
var state_21362__$1 = (function (){var statearr_21367 = state_21362;
(statearr_21367[(8)] = inst_21342__$1);

return statearr_21367;
})();
if(inst_21344){
var statearr_21368_21388 = state_21362__$1;
(statearr_21368_21388[(1)] = (5));

} else {
var statearr_21369_21389 = state_21362__$1;
(statearr_21369_21389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (6))){
var state_21362__$1 = state_21362;
var statearr_21370_21390 = state_21362__$1;
(statearr_21370_21390[(2)] = null);

(statearr_21370_21390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (3))){
var inst_21359 = (state_21362[(2)]);
var inst_21360 = cljs.core.async.close_BANG_.call(null,out);
var state_21362__$1 = (function (){var statearr_21371 = state_21362;
(statearr_21371[(9)] = inst_21359);

return statearr_21371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21362__$1,inst_21360);
} else {
if((state_val_21363 === (2))){
var state_21362__$1 = state_21362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21362__$1,(4),ch);
} else {
if((state_val_21363 === (11))){
var inst_21342 = (state_21362[(8)]);
var inst_21351 = (state_21362[(2)]);
var inst_21339 = inst_21342;
var state_21362__$1 = (function (){var statearr_21372 = state_21362;
(statearr_21372[(10)] = inst_21351);

(statearr_21372[(7)] = inst_21339);

return statearr_21372;
})();
var statearr_21373_21391 = state_21362__$1;
(statearr_21373_21391[(2)] = null);

(statearr_21373_21391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (9))){
var inst_21342 = (state_21362[(8)]);
var state_21362__$1 = state_21362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21362__$1,(11),out,inst_21342);
} else {
if((state_val_21363 === (5))){
var inst_21339 = (state_21362[(7)]);
var inst_21342 = (state_21362[(8)]);
var inst_21346 = cljs.core._EQ_.call(null,inst_21342,inst_21339);
var state_21362__$1 = state_21362;
if(inst_21346){
var statearr_21375_21392 = state_21362__$1;
(statearr_21375_21392[(1)] = (8));

} else {
var statearr_21376_21393 = state_21362__$1;
(statearr_21376_21393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (10))){
var inst_21354 = (state_21362[(2)]);
var state_21362__$1 = state_21362;
var statearr_21377_21394 = state_21362__$1;
(statearr_21377_21394[(2)] = inst_21354);

(statearr_21377_21394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (8))){
var inst_21339 = (state_21362[(7)]);
var tmp21374 = inst_21339;
var inst_21339__$1 = tmp21374;
var state_21362__$1 = (function (){var statearr_21378 = state_21362;
(statearr_21378[(7)] = inst_21339__$1);

return statearr_21378;
})();
var statearr_21379_21395 = state_21362__$1;
(statearr_21379_21395[(2)] = null);

(statearr_21379_21395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___21385,out))
;
return ((function (switch__19554__auto__,c__19649__auto___21385,out){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_21380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21380[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_21380[(1)] = (1));

return statearr_21380;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_21362){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_21362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e21381){if((e21381 instanceof Object)){
var ex__19558__auto__ = e21381;
var statearr_21382_21396 = state_21362;
(statearr_21382_21396[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21397 = state_21362;
state_21362 = G__21397;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_21362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_21362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___21385,out))
})();
var state__19651__auto__ = (function (){var statearr_21383 = f__19650__auto__.call(null);
(statearr_21383[(6)] = c__19649__auto___21385);

return statearr_21383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___21385,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__21399 = arguments.length;
switch (G__21399) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19649__auto___21465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___21465,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___21465,out){
return (function (state_21437){
var state_val_21438 = (state_21437[(1)]);
if((state_val_21438 === (7))){
var inst_21433 = (state_21437[(2)]);
var state_21437__$1 = state_21437;
var statearr_21439_21466 = state_21437__$1;
(statearr_21439_21466[(2)] = inst_21433);

(statearr_21439_21466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (1))){
var inst_21400 = (new Array(n));
var inst_21401 = inst_21400;
var inst_21402 = (0);
var state_21437__$1 = (function (){var statearr_21440 = state_21437;
(statearr_21440[(7)] = inst_21402);

(statearr_21440[(8)] = inst_21401);

return statearr_21440;
})();
var statearr_21441_21467 = state_21437__$1;
(statearr_21441_21467[(2)] = null);

(statearr_21441_21467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (4))){
var inst_21405 = (state_21437[(9)]);
var inst_21405__$1 = (state_21437[(2)]);
var inst_21406 = (inst_21405__$1 == null);
var inst_21407 = cljs.core.not.call(null,inst_21406);
var state_21437__$1 = (function (){var statearr_21442 = state_21437;
(statearr_21442[(9)] = inst_21405__$1);

return statearr_21442;
})();
if(inst_21407){
var statearr_21443_21468 = state_21437__$1;
(statearr_21443_21468[(1)] = (5));

} else {
var statearr_21444_21469 = state_21437__$1;
(statearr_21444_21469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (15))){
var inst_21427 = (state_21437[(2)]);
var state_21437__$1 = state_21437;
var statearr_21445_21470 = state_21437__$1;
(statearr_21445_21470[(2)] = inst_21427);

(statearr_21445_21470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (13))){
var state_21437__$1 = state_21437;
var statearr_21446_21471 = state_21437__$1;
(statearr_21446_21471[(2)] = null);

(statearr_21446_21471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (6))){
var inst_21402 = (state_21437[(7)]);
var inst_21423 = (inst_21402 > (0));
var state_21437__$1 = state_21437;
if(cljs.core.truth_(inst_21423)){
var statearr_21447_21472 = state_21437__$1;
(statearr_21447_21472[(1)] = (12));

} else {
var statearr_21448_21473 = state_21437__$1;
(statearr_21448_21473[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (3))){
var inst_21435 = (state_21437[(2)]);
var state_21437__$1 = state_21437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21437__$1,inst_21435);
} else {
if((state_val_21438 === (12))){
var inst_21401 = (state_21437[(8)]);
var inst_21425 = cljs.core.vec.call(null,inst_21401);
var state_21437__$1 = state_21437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21437__$1,(15),out,inst_21425);
} else {
if((state_val_21438 === (2))){
var state_21437__$1 = state_21437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21437__$1,(4),ch);
} else {
if((state_val_21438 === (11))){
var inst_21417 = (state_21437[(2)]);
var inst_21418 = (new Array(n));
var inst_21401 = inst_21418;
var inst_21402 = (0);
var state_21437__$1 = (function (){var statearr_21449 = state_21437;
(statearr_21449[(7)] = inst_21402);

(statearr_21449[(10)] = inst_21417);

(statearr_21449[(8)] = inst_21401);

return statearr_21449;
})();
var statearr_21450_21474 = state_21437__$1;
(statearr_21450_21474[(2)] = null);

(statearr_21450_21474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (9))){
var inst_21401 = (state_21437[(8)]);
var inst_21415 = cljs.core.vec.call(null,inst_21401);
var state_21437__$1 = state_21437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21437__$1,(11),out,inst_21415);
} else {
if((state_val_21438 === (5))){
var inst_21402 = (state_21437[(7)]);
var inst_21410 = (state_21437[(11)]);
var inst_21405 = (state_21437[(9)]);
var inst_21401 = (state_21437[(8)]);
var inst_21409 = (inst_21401[inst_21402] = inst_21405);
var inst_21410__$1 = (inst_21402 + (1));
var inst_21411 = (inst_21410__$1 < n);
var state_21437__$1 = (function (){var statearr_21451 = state_21437;
(statearr_21451[(11)] = inst_21410__$1);

(statearr_21451[(12)] = inst_21409);

return statearr_21451;
})();
if(cljs.core.truth_(inst_21411)){
var statearr_21452_21475 = state_21437__$1;
(statearr_21452_21475[(1)] = (8));

} else {
var statearr_21453_21476 = state_21437__$1;
(statearr_21453_21476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (14))){
var inst_21430 = (state_21437[(2)]);
var inst_21431 = cljs.core.async.close_BANG_.call(null,out);
var state_21437__$1 = (function (){var statearr_21455 = state_21437;
(statearr_21455[(13)] = inst_21430);

return statearr_21455;
})();
var statearr_21456_21477 = state_21437__$1;
(statearr_21456_21477[(2)] = inst_21431);

(statearr_21456_21477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (10))){
var inst_21421 = (state_21437[(2)]);
var state_21437__$1 = state_21437;
var statearr_21457_21478 = state_21437__$1;
(statearr_21457_21478[(2)] = inst_21421);

(statearr_21457_21478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (8))){
var inst_21410 = (state_21437[(11)]);
var inst_21401 = (state_21437[(8)]);
var tmp21454 = inst_21401;
var inst_21401__$1 = tmp21454;
var inst_21402 = inst_21410;
var state_21437__$1 = (function (){var statearr_21458 = state_21437;
(statearr_21458[(7)] = inst_21402);

(statearr_21458[(8)] = inst_21401__$1);

return statearr_21458;
})();
var statearr_21459_21479 = state_21437__$1;
(statearr_21459_21479[(2)] = null);

(statearr_21459_21479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___21465,out))
;
return ((function (switch__19554__auto__,c__19649__auto___21465,out){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_21460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21460[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_21460[(1)] = (1));

return statearr_21460;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_21437){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_21437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e21461){if((e21461 instanceof Object)){
var ex__19558__auto__ = e21461;
var statearr_21462_21480 = state_21437;
(statearr_21462_21480[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21481 = state_21437;
state_21437 = G__21481;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_21437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_21437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___21465,out))
})();
var state__19651__auto__ = (function (){var statearr_21463 = f__19650__auto__.call(null);
(statearr_21463[(6)] = c__19649__auto___21465);

return statearr_21463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___21465,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21483 = arguments.length;
switch (G__21483) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19649__auto___21553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___21553,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___21553,out){
return (function (state_21525){
var state_val_21526 = (state_21525[(1)]);
if((state_val_21526 === (7))){
var inst_21521 = (state_21525[(2)]);
var state_21525__$1 = state_21525;
var statearr_21527_21554 = state_21525__$1;
(statearr_21527_21554[(2)] = inst_21521);

(statearr_21527_21554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21526 === (1))){
var inst_21484 = [];
var inst_21485 = inst_21484;
var inst_21486 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21525__$1 = (function (){var statearr_21528 = state_21525;
(statearr_21528[(7)] = inst_21486);

(statearr_21528[(8)] = inst_21485);

return statearr_21528;
})();
var statearr_21529_21555 = state_21525__$1;
(statearr_21529_21555[(2)] = null);

(statearr_21529_21555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21526 === (4))){
var inst_21489 = (state_21525[(9)]);
var inst_21489__$1 = (state_21525[(2)]);
var inst_21490 = (inst_21489__$1 == null);
var inst_21491 = cljs.core.not.call(null,inst_21490);
var state_21525__$1 = (function (){var statearr_21530 = state_21525;
(statearr_21530[(9)] = inst_21489__$1);

return statearr_21530;
})();
if(inst_21491){
var statearr_21531_21556 = state_21525__$1;
(statearr_21531_21556[(1)] = (5));

} else {
var statearr_21532_21557 = state_21525__$1;
(statearr_21532_21557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21526 === (15))){
var inst_21515 = (state_21525[(2)]);
var state_21525__$1 = state_21525;
var statearr_21533_21558 = state_21525__$1;
(statearr_21533_21558[(2)] = inst_21515);

(statearr_21533_21558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21526 === (13))){
var state_21525__$1 = state_21525;
var statearr_21534_21559 = state_21525__$1;
(statearr_21534_21559[(2)] = null);

(statearr_21534_21559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21526 === (6))){
var inst_21485 = (state_21525[(8)]);
var inst_21510 = inst_21485.length;
var inst_21511 = (inst_21510 > (0));
var state_21525__$1 = state_21525;
if(cljs.core.truth_(inst_21511)){
var statearr_21535_21560 = state_21525__$1;
(statearr_21535_21560[(1)] = (12));

} else {
var statearr_21536_21561 = state_21525__$1;
(statearr_21536_21561[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21526 === (3))){
var inst_21523 = (state_21525[(2)]);
var state_21525__$1 = state_21525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21525__$1,inst_21523);
} else {
if((state_val_21526 === (12))){
var inst_21485 = (state_21525[(8)]);
var inst_21513 = cljs.core.vec.call(null,inst_21485);
var state_21525__$1 = state_21525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21525__$1,(15),out,inst_21513);
} else {
if((state_val_21526 === (2))){
var state_21525__$1 = state_21525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21525__$1,(4),ch);
} else {
if((state_val_21526 === (11))){
var inst_21493 = (state_21525[(10)]);
var inst_21489 = (state_21525[(9)]);
var inst_21503 = (state_21525[(2)]);
var inst_21504 = [];
var inst_21505 = inst_21504.push(inst_21489);
var inst_21485 = inst_21504;
var inst_21486 = inst_21493;
var state_21525__$1 = (function (){var statearr_21537 = state_21525;
(statearr_21537[(11)] = inst_21503);

(statearr_21537[(12)] = inst_21505);

(statearr_21537[(7)] = inst_21486);

(statearr_21537[(8)] = inst_21485);

return statearr_21537;
})();
var statearr_21538_21562 = state_21525__$1;
(statearr_21538_21562[(2)] = null);

(statearr_21538_21562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21526 === (9))){
var inst_21485 = (state_21525[(8)]);
var inst_21501 = cljs.core.vec.call(null,inst_21485);
var state_21525__$1 = state_21525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21525__$1,(11),out,inst_21501);
} else {
if((state_val_21526 === (5))){
var inst_21493 = (state_21525[(10)]);
var inst_21489 = (state_21525[(9)]);
var inst_21486 = (state_21525[(7)]);
var inst_21493__$1 = f.call(null,inst_21489);
var inst_21494 = cljs.core._EQ_.call(null,inst_21493__$1,inst_21486);
var inst_21495 = cljs.core.keyword_identical_QMARK_.call(null,inst_21486,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21496 = ((inst_21494) || (inst_21495));
var state_21525__$1 = (function (){var statearr_21539 = state_21525;
(statearr_21539[(10)] = inst_21493__$1);

return statearr_21539;
})();
if(cljs.core.truth_(inst_21496)){
var statearr_21540_21563 = state_21525__$1;
(statearr_21540_21563[(1)] = (8));

} else {
var statearr_21541_21564 = state_21525__$1;
(statearr_21541_21564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21526 === (14))){
var inst_21518 = (state_21525[(2)]);
var inst_21519 = cljs.core.async.close_BANG_.call(null,out);
var state_21525__$1 = (function (){var statearr_21543 = state_21525;
(statearr_21543[(13)] = inst_21518);

return statearr_21543;
})();
var statearr_21544_21565 = state_21525__$1;
(statearr_21544_21565[(2)] = inst_21519);

(statearr_21544_21565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21526 === (10))){
var inst_21508 = (state_21525[(2)]);
var state_21525__$1 = state_21525;
var statearr_21545_21566 = state_21525__$1;
(statearr_21545_21566[(2)] = inst_21508);

(statearr_21545_21566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21526 === (8))){
var inst_21493 = (state_21525[(10)]);
var inst_21489 = (state_21525[(9)]);
var inst_21485 = (state_21525[(8)]);
var inst_21498 = inst_21485.push(inst_21489);
var tmp21542 = inst_21485;
var inst_21485__$1 = tmp21542;
var inst_21486 = inst_21493;
var state_21525__$1 = (function (){var statearr_21546 = state_21525;
(statearr_21546[(7)] = inst_21486);

(statearr_21546[(8)] = inst_21485__$1);

(statearr_21546[(14)] = inst_21498);

return statearr_21546;
})();
var statearr_21547_21567 = state_21525__$1;
(statearr_21547_21567[(2)] = null);

(statearr_21547_21567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___21553,out))
;
return ((function (switch__19554__auto__,c__19649__auto___21553,out){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_21548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21548[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_21548[(1)] = (1));

return statearr_21548;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_21525){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_21525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e21549){if((e21549 instanceof Object)){
var ex__19558__auto__ = e21549;
var statearr_21550_21568 = state_21525;
(statearr_21550_21568[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21569 = state_21525;
state_21525 = G__21569;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_21525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_21525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___21553,out))
})();
var state__19651__auto__ = (function (){var statearr_21551 = f__19650__auto__.call(null);
(statearr_21551[(6)] = c__19649__auto___21553);

return statearr_21551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___21553,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
