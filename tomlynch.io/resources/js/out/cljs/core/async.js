// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t17618 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17618 = (function (f,fn_handler,meta17619){
this.f = f;
this.fn_handler = fn_handler;
this.meta17619 = meta17619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17618.cljs$lang$type = true;
cljs.core.async.t17618.cljs$lang$ctorStr = "cljs.core.async/t17618";
cljs.core.async.t17618.cljs$lang$ctorPrWriter = (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"cljs.core.async/t17618");
});
cljs.core.async.t17618.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17618.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t17618.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t17618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17620){var self__ = this;
var _17620__$1 = this;return self__.meta17619;
});
cljs.core.async.t17618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17620,meta17619__$1){var self__ = this;
var _17620__$1 = this;return (new cljs.core.async.t17618(self__.f,self__.fn_handler,meta17619__$1));
});
cljs.core.async.__GT_t17618 = (function __GT_t17618(f__$1,fn_handler__$1,meta17619){return (new cljs.core.async.t17618(f__$1,fn_handler__$1,meta17619));
});
}
return (new cljs.core.async.t17618(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__17622 = buff;if(G__17622)
{var bit__9776__auto__ = null;if(cljs.core.truth_((function (){var or__9126__auto__ = bit__9776__auto__;if(cljs.core.truth_(or__9126__auto__))
{return or__9126__auto__;
} else
{return G__17622.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__17622.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17622);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17622);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_17623 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_17623);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_17623,ret){
return (function (){return fn1.call(null,val_17623);
});})(val_17623,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9982__auto___17624 = n;var x_17625 = 0;while(true){
if((x_17625 < n__9982__auto___17624))
{(a[x_17625] = 0);
{
var G__17626 = (x_17625 + 1);
x_17625 = G__17626;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__17627 = (i + 1);
i = G__17627;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t17631 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17631 = (function (flag,alt_flag,meta17632){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17632 = meta17632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17631.cljs$lang$type = true;
cljs.core.async.t17631.cljs$lang$ctorStr = "cljs.core.async/t17631";
cljs.core.async.t17631.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"cljs.core.async/t17631");
});})(flag))
;
cljs.core.async.t17631.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t17631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t17631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17633){var self__ = this;
var _17633__$1 = this;return self__.meta17632;
});})(flag))
;
cljs.core.async.t17631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17633,meta17632__$1){var self__ = this;
var _17633__$1 = this;return (new cljs.core.async.t17631(self__.flag,self__.alt_flag,meta17632__$1));
});})(flag))
;
cljs.core.async.__GT_t17631 = ((function (flag){
return (function __GT_t17631(flag__$1,alt_flag__$1,meta17632){return (new cljs.core.async.t17631(flag__$1,alt_flag__$1,meta17632));
});})(flag))
;
}
return (new cljs.core.async.t17631(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t17637 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17637 = (function (cb,flag,alt_handler,meta17638){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17638 = meta17638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17637.cljs$lang$type = true;
cljs.core.async.t17637.cljs$lang$ctorStr = "cljs.core.async/t17637";
cljs.core.async.t17637.cljs$lang$ctorPrWriter = (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"cljs.core.async/t17637");
});
cljs.core.async.t17637.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17637.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t17637.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t17637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17639){var self__ = this;
var _17639__$1 = this;return self__.meta17638;
});
cljs.core.async.t17637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17639,meta17638__$1){var self__ = this;
var _17639__$1 = this;return (new cljs.core.async.t17637(self__.cb,self__.flag,self__.alt_handler,meta17638__$1));
});
cljs.core.async.__GT_t17637 = (function __GT_t17637(cb__$1,flag__$1,alt_handler__$1,meta17638){return (new cljs.core.async.t17637(cb__$1,flag__$1,alt_handler__$1,meta17638));
});
}
return (new cljs.core.async.t17637(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17640_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17640_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17641_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17641_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9126__auto__ = wport;if(cljs.core.truth_(or__9126__auto__))
{return or__9126__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__17642 = (i + 1);
i = G__17642;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__9126__auto__ = ret;if(cljs.core.truth_(or__9126__auto__))
{return or__9126__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__9114__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__9114__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__9114__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__17643){var map__17645 = p__17643;var map__17645__$1 = ((cljs.core.seq_QMARK_.call(null,map__17645))?cljs.core.apply.call(null,cljs.core.hash_map,map__17645):map__17645);var opts = map__17645__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__17643 = null;if (arguments.length > 1) {
  p__17643 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__17643);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17646){
var ports = cljs.core.first(arglist__17646);
var p__17643 = cljs.core.rest(arglist__17646);
return alts_BANG___delegate(ports,p__17643);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17654 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17654 = (function (ch,f,map_LT_,meta17655){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17655 = meta17655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17654.cljs$lang$type = true;
cljs.core.async.t17654.cljs$lang$ctorStr = "cljs.core.async/t17654";
cljs.core.async.t17654.cljs$lang$ctorPrWriter = (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"cljs.core.async/t17654");
});
cljs.core.async.t17654.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t17654.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t17657 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17657 = (function (fn1,_,meta17655,ch,f,map_LT_,meta17658){
this.fn1 = fn1;
this._ = _;
this.meta17655 = meta17655;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17658 = meta17658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17657.cljs$lang$type = true;
cljs.core.async.t17657.cljs$lang$ctorStr = "cljs.core.async/t17657";
cljs.core.async.t17657.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"cljs.core.async/t17657");
});})(___$1))
;
cljs.core.async.t17657.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t17657.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t17657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__17647_SHARP_){return f1.call(null,(((p1__17647_SHARP_ == null))?null:self__.f.call(null,p1__17647_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t17657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17659){var self__ = this;
var _17659__$1 = this;return self__.meta17658;
});})(___$1))
;
cljs.core.async.t17657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17659,meta17658__$1){var self__ = this;
var _17659__$1 = this;return (new cljs.core.async.t17657(self__.fn1,self__._,self__.meta17655,self__.ch,self__.f,self__.map_LT_,meta17658__$1));
});})(___$1))
;
cljs.core.async.__GT_t17657 = ((function (___$1){
return (function __GT_t17657(fn1__$1,___$2,meta17655__$1,ch__$2,f__$2,map_LT___$2,meta17658){return (new cljs.core.async.t17657(fn1__$1,___$2,meta17655__$1,ch__$2,f__$2,map_LT___$2,meta17658));
});})(___$1))
;
}
return (new cljs.core.async.t17657(fn1,___$1,self__.meta17655,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__9114__auto__ = ret;if(cljs.core.truth_(and__9114__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__9114__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t17654.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17654.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17656){var self__ = this;
var _17656__$1 = this;return self__.meta17655;
});
cljs.core.async.t17654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17656,meta17655__$1){var self__ = this;
var _17656__$1 = this;return (new cljs.core.async.t17654(self__.ch,self__.f,self__.map_LT_,meta17655__$1));
});
cljs.core.async.__GT_t17654 = (function __GT_t17654(ch__$1,f__$1,map_LT___$1,meta17655){return (new cljs.core.async.t17654(ch__$1,f__$1,map_LT___$1,meta17655));
});
}
return (new cljs.core.async.t17654(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17663 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17663 = (function (ch,f,map_GT_,meta17664){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17664 = meta17664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17663.cljs$lang$type = true;
cljs.core.async.t17663.cljs$lang$ctorStr = "cljs.core.async/t17663";
cljs.core.async.t17663.cljs$lang$ctorPrWriter = (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"cljs.core.async/t17663");
});
cljs.core.async.t17663.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t17663.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17663.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17665){var self__ = this;
var _17665__$1 = this;return self__.meta17664;
});
cljs.core.async.t17663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17665,meta17664__$1){var self__ = this;
var _17665__$1 = this;return (new cljs.core.async.t17663(self__.ch,self__.f,self__.map_GT_,meta17664__$1));
});
cljs.core.async.__GT_t17663 = (function __GT_t17663(ch__$1,f__$1,map_GT___$1,meta17664){return (new cljs.core.async.t17663(ch__$1,f__$1,map_GT___$1,meta17664));
});
}
return (new cljs.core.async.t17663(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17669 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17669 = (function (ch,p,filter_GT_,meta17670){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17670 = meta17670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17669.cljs$lang$type = true;
cljs.core.async.t17669.cljs$lang$ctorStr = "cljs.core.async/t17669";
cljs.core.async.t17669.cljs$lang$ctorPrWriter = (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"cljs.core.async/t17669");
});
cljs.core.async.t17669.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17669.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t17669.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17669.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17669.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17669.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17669.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17671){var self__ = this;
var _17671__$1 = this;return self__.meta17670;
});
cljs.core.async.t17669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17671,meta17670__$1){var self__ = this;
var _17671__$1 = this;return (new cljs.core.async.t17669(self__.ch,self__.p,self__.filter_GT_,meta17670__$1));
});
cljs.core.async.__GT_t17669 = (function __GT_t17669(ch__$1,p__$1,filter_GT___$1,meta17670){return (new cljs.core.async.t17669(ch__$1,p__$1,filter_GT___$1,meta17670));
});
}
return (new cljs.core.async.t17669(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13385__auto___17754 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto___17754,out){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto___17754,out){
return (function (state_17733){var state_val_17734 = (state_17733[1]);if((state_val_17734 === 1))
{var state_17733__$1 = state_17733;var statearr_17735_17755 = state_17733__$1;(statearr_17735_17755[2] = null);
(statearr_17735_17755[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17734 === 2))
{var state_17733__$1 = state_17733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17733__$1,4,ch);
} else
{if((state_val_17734 === 3))
{var inst_17731 = (state_17733[2]);var state_17733__$1 = state_17733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17733__$1,inst_17731);
} else
{if((state_val_17734 === 4))
{var inst_17715 = (state_17733[7]);var inst_17715__$1 = (state_17733[2]);var inst_17716 = (inst_17715__$1 == null);var state_17733__$1 = (function (){var statearr_17736 = state_17733;(statearr_17736[7] = inst_17715__$1);
return statearr_17736;
})();if(cljs.core.truth_(inst_17716))
{var statearr_17737_17756 = state_17733__$1;(statearr_17737_17756[1] = 5);
} else
{var statearr_17738_17757 = state_17733__$1;(statearr_17738_17757[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17734 === 5))
{var inst_17718 = cljs.core.async.close_BANG_.call(null,out);var state_17733__$1 = state_17733;var statearr_17739_17758 = state_17733__$1;(statearr_17739_17758[2] = inst_17718);
(statearr_17739_17758[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17734 === 6))
{var inst_17715 = (state_17733[7]);var inst_17720 = p.call(null,inst_17715);var state_17733__$1 = state_17733;if(cljs.core.truth_(inst_17720))
{var statearr_17740_17759 = state_17733__$1;(statearr_17740_17759[1] = 8);
} else
{var statearr_17741_17760 = state_17733__$1;(statearr_17741_17760[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17734 === 7))
{var inst_17729 = (state_17733[2]);var state_17733__$1 = state_17733;var statearr_17742_17761 = state_17733__$1;(statearr_17742_17761[2] = inst_17729);
(statearr_17742_17761[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17734 === 8))
{var inst_17715 = (state_17733[7]);var state_17733__$1 = state_17733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17733__$1,11,out,inst_17715);
} else
{if((state_val_17734 === 9))
{var state_17733__$1 = state_17733;var statearr_17743_17762 = state_17733__$1;(statearr_17743_17762[2] = null);
(statearr_17743_17762[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17734 === 10))
{var inst_17726 = (state_17733[2]);var state_17733__$1 = (function (){var statearr_17744 = state_17733;(statearr_17744[8] = inst_17726);
return statearr_17744;
})();var statearr_17745_17763 = state_17733__$1;(statearr_17745_17763[2] = null);
(statearr_17745_17763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17734 === 11))
{var inst_17723 = (state_17733[2]);var state_17733__$1 = state_17733;var statearr_17746_17764 = state_17733__$1;(statearr_17746_17764[2] = inst_17723);
(statearr_17746_17764[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto___17754,out))
;return ((function (switch__13314__auto__,c__13385__auto___17754,out){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_17750 = [null,null,null,null,null,null,null,null,null];(statearr_17750[0] = state_machine__13315__auto__);
(statearr_17750[1] = 1);
return statearr_17750;
});
var state_machine__13315__auto____1 = (function (state_17733){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_17733);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e17751){if((e17751 instanceof Object))
{var ex__13318__auto__ = e17751;var statearr_17752_17765 = state_17733;(statearr_17752_17765[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17766 = state_17733;
state_17733 = G__17766;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_17733){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_17733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto___17754,out))
})();var state__13387__auto__ = (function (){var statearr_17753 = f__13386__auto__.call(null);(statearr_17753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto___17754);
return statearr_17753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto___17754,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13385__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto__){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto__){
return (function (state_17932){var state_val_17933 = (state_17932[1]);if((state_val_17933 === 1))
{var state_17932__$1 = state_17932;var statearr_17934_17975 = state_17932__$1;(statearr_17934_17975[2] = null);
(statearr_17934_17975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 2))
{var state_17932__$1 = state_17932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17932__$1,4,in$);
} else
{if((state_val_17933 === 3))
{var inst_17930 = (state_17932[2]);var state_17932__$1 = state_17932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17932__$1,inst_17930);
} else
{if((state_val_17933 === 4))
{var inst_17873 = (state_17932[7]);var inst_17873__$1 = (state_17932[2]);var inst_17874 = (inst_17873__$1 == null);var state_17932__$1 = (function (){var statearr_17935 = state_17932;(statearr_17935[7] = inst_17873__$1);
return statearr_17935;
})();if(cljs.core.truth_(inst_17874))
{var statearr_17936_17976 = state_17932__$1;(statearr_17936_17976[1] = 5);
} else
{var statearr_17937_17977 = state_17932__$1;(statearr_17937_17977[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 5))
{var inst_17876 = cljs.core.async.close_BANG_.call(null,out);var state_17932__$1 = state_17932;var statearr_17938_17978 = state_17932__$1;(statearr_17938_17978[2] = inst_17876);
(statearr_17938_17978[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 6))
{var inst_17873 = (state_17932[7]);var inst_17882 = f.call(null,inst_17873);var inst_17883 = cljs.core.seq.call(null,inst_17882);var inst_17884 = inst_17883;var inst_17885 = null;var inst_17886 = 0;var inst_17887 = 0;var state_17932__$1 = (function (){var statearr_17939 = state_17932;(statearr_17939[8] = inst_17887);
(statearr_17939[9] = inst_17885);
(statearr_17939[10] = inst_17886);
(statearr_17939[11] = inst_17884);
return statearr_17939;
})();var statearr_17940_17979 = state_17932__$1;(statearr_17940_17979[2] = null);
(statearr_17940_17979[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 7))
{var inst_17928 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_17941_17980 = state_17932__$1;(statearr_17941_17980[2] = inst_17928);
(statearr_17941_17980[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 8))
{var inst_17887 = (state_17932[8]);var inst_17886 = (state_17932[10]);var inst_17889 = (inst_17887 < inst_17886);var inst_17890 = inst_17889;var state_17932__$1 = state_17932;if(cljs.core.truth_(inst_17890))
{var statearr_17942_17981 = state_17932__$1;(statearr_17942_17981[1] = 10);
} else
{var statearr_17943_17982 = state_17932__$1;(statearr_17943_17982[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 9))
{var inst_17920 = (state_17932[2]);var inst_17921 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_17932__$1 = (function (){var statearr_17944 = state_17932;(statearr_17944[12] = inst_17920);
return statearr_17944;
})();if(cljs.core.truth_(inst_17921))
{var statearr_17945_17983 = state_17932__$1;(statearr_17945_17983[1] = 21);
} else
{var statearr_17946_17984 = state_17932__$1;(statearr_17946_17984[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 10))
{var inst_17887 = (state_17932[8]);var inst_17885 = (state_17932[9]);var inst_17892 = cljs.core._nth.call(null,inst_17885,inst_17887);var state_17932__$1 = state_17932;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17932__$1,13,out,inst_17892);
} else
{if((state_val_17933 === 11))
{var inst_17884 = (state_17932[11]);var inst_17898 = (state_17932[13]);var inst_17898__$1 = cljs.core.seq.call(null,inst_17884);var state_17932__$1 = (function (){var statearr_17950 = state_17932;(statearr_17950[13] = inst_17898__$1);
return statearr_17950;
})();if(inst_17898__$1)
{var statearr_17951_17985 = state_17932__$1;(statearr_17951_17985[1] = 14);
} else
{var statearr_17952_17986 = state_17932__$1;(statearr_17952_17986[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 12))
{var inst_17918 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_17953_17987 = state_17932__$1;(statearr_17953_17987[2] = inst_17918);
(statearr_17953_17987[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 13))
{var inst_17887 = (state_17932[8]);var inst_17885 = (state_17932[9]);var inst_17886 = (state_17932[10]);var inst_17884 = (state_17932[11]);var inst_17894 = (state_17932[2]);var inst_17895 = (inst_17887 + 1);var tmp17947 = inst_17885;var tmp17948 = inst_17886;var tmp17949 = inst_17884;var inst_17884__$1 = tmp17949;var inst_17885__$1 = tmp17947;var inst_17886__$1 = tmp17948;var inst_17887__$1 = inst_17895;var state_17932__$1 = (function (){var statearr_17954 = state_17932;(statearr_17954[8] = inst_17887__$1);
(statearr_17954[9] = inst_17885__$1);
(statearr_17954[10] = inst_17886__$1);
(statearr_17954[11] = inst_17884__$1);
(statearr_17954[14] = inst_17894);
return statearr_17954;
})();var statearr_17955_17988 = state_17932__$1;(statearr_17955_17988[2] = null);
(statearr_17955_17988[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 14))
{var inst_17898 = (state_17932[13]);var inst_17900 = cljs.core.chunked_seq_QMARK_.call(null,inst_17898);var state_17932__$1 = state_17932;if(inst_17900)
{var statearr_17956_17989 = state_17932__$1;(statearr_17956_17989[1] = 17);
} else
{var statearr_17957_17990 = state_17932__$1;(statearr_17957_17990[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 15))
{var state_17932__$1 = state_17932;var statearr_17958_17991 = state_17932__$1;(statearr_17958_17991[2] = null);
(statearr_17958_17991[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 16))
{var inst_17916 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_17959_17992 = state_17932__$1;(statearr_17959_17992[2] = inst_17916);
(statearr_17959_17992[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 17))
{var inst_17898 = (state_17932[13]);var inst_17902 = cljs.core.chunk_first.call(null,inst_17898);var inst_17903 = cljs.core.chunk_rest.call(null,inst_17898);var inst_17904 = cljs.core.count.call(null,inst_17902);var inst_17884 = inst_17903;var inst_17885 = inst_17902;var inst_17886 = inst_17904;var inst_17887 = 0;var state_17932__$1 = (function (){var statearr_17960 = state_17932;(statearr_17960[8] = inst_17887);
(statearr_17960[9] = inst_17885);
(statearr_17960[10] = inst_17886);
(statearr_17960[11] = inst_17884);
return statearr_17960;
})();var statearr_17961_17993 = state_17932__$1;(statearr_17961_17993[2] = null);
(statearr_17961_17993[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 18))
{var inst_17898 = (state_17932[13]);var inst_17907 = cljs.core.first.call(null,inst_17898);var state_17932__$1 = state_17932;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17932__$1,20,out,inst_17907);
} else
{if((state_val_17933 === 19))
{var inst_17913 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_17962_17994 = state_17932__$1;(statearr_17962_17994[2] = inst_17913);
(statearr_17962_17994[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 20))
{var inst_17898 = (state_17932[13]);var inst_17909 = (state_17932[2]);var inst_17910 = cljs.core.next.call(null,inst_17898);var inst_17884 = inst_17910;var inst_17885 = null;var inst_17886 = 0;var inst_17887 = 0;var state_17932__$1 = (function (){var statearr_17963 = state_17932;(statearr_17963[8] = inst_17887);
(statearr_17963[9] = inst_17885);
(statearr_17963[10] = inst_17886);
(statearr_17963[11] = inst_17884);
(statearr_17963[15] = inst_17909);
return statearr_17963;
})();var statearr_17964_17995 = state_17932__$1;(statearr_17964_17995[2] = null);
(statearr_17964_17995[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 21))
{var state_17932__$1 = state_17932;var statearr_17965_17996 = state_17932__$1;(statearr_17965_17996[2] = null);
(statearr_17965_17996[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 22))
{var state_17932__$1 = state_17932;var statearr_17966_17997 = state_17932__$1;(statearr_17966_17997[2] = null);
(statearr_17966_17997[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 23))
{var inst_17926 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_17967_17998 = state_17932__$1;(statearr_17967_17998[2] = inst_17926);
(statearr_17967_17998[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto__))
;return ((function (switch__13314__auto__,c__13385__auto__){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_17971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17971[0] = state_machine__13315__auto__);
(statearr_17971[1] = 1);
return statearr_17971;
});
var state_machine__13315__auto____1 = (function (state_17932){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_17932);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e17972){if((e17972 instanceof Object))
{var ex__13318__auto__ = e17972;var statearr_17973_17999 = state_17932;(statearr_17973_17999[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17972;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18000 = state_17932;
state_17932 = G__18000;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_17932){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_17932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto__))
})();var state__13387__auto__ = (function (){var statearr_17974 = f__13386__auto__.call(null);(statearr_17974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto__);
return statearr_17974;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto__))
);
return c__13385__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__13385__auto___18095 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto___18095){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto___18095){
return (function (state_18071){var state_val_18072 = (state_18071[1]);if((state_val_18072 === 1))
{var state_18071__$1 = state_18071;var statearr_18073_18096 = state_18071__$1;(statearr_18073_18096[2] = null);
(statearr_18073_18096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18072 === 2))
{var state_18071__$1 = state_18071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18071__$1,4,from);
} else
{if((state_val_18072 === 3))
{var inst_18069 = (state_18071[2]);var state_18071__$1 = state_18071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18071__$1,inst_18069);
} else
{if((state_val_18072 === 4))
{var inst_18050 = (state_18071[7]);var inst_18050__$1 = (state_18071[2]);var inst_18051 = (inst_18050__$1 == null);var state_18071__$1 = (function (){var statearr_18074 = state_18071;(statearr_18074[7] = inst_18050__$1);
return statearr_18074;
})();if(cljs.core.truth_(inst_18051))
{var statearr_18075_18097 = state_18071__$1;(statearr_18075_18097[1] = 5);
} else
{var statearr_18076_18098 = state_18071__$1;(statearr_18076_18098[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18072 === 5))
{var state_18071__$1 = state_18071;if(cljs.core.truth_(close_QMARK_))
{var statearr_18077_18099 = state_18071__$1;(statearr_18077_18099[1] = 8);
} else
{var statearr_18078_18100 = state_18071__$1;(statearr_18078_18100[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18072 === 6))
{var inst_18050 = (state_18071[7]);var state_18071__$1 = state_18071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18071__$1,11,to,inst_18050);
} else
{if((state_val_18072 === 7))
{var inst_18067 = (state_18071[2]);var state_18071__$1 = state_18071;var statearr_18079_18101 = state_18071__$1;(statearr_18079_18101[2] = inst_18067);
(statearr_18079_18101[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18072 === 8))
{var inst_18054 = cljs.core.async.close_BANG_.call(null,to);var state_18071__$1 = state_18071;var statearr_18080_18102 = state_18071__$1;(statearr_18080_18102[2] = inst_18054);
(statearr_18080_18102[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18072 === 9))
{var state_18071__$1 = state_18071;var statearr_18081_18103 = state_18071__$1;(statearr_18081_18103[2] = null);
(statearr_18081_18103[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18072 === 10))
{var inst_18057 = (state_18071[2]);var state_18071__$1 = state_18071;var statearr_18082_18104 = state_18071__$1;(statearr_18082_18104[2] = inst_18057);
(statearr_18082_18104[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18072 === 11))
{var inst_18060 = (state_18071[2]);var state_18071__$1 = state_18071;if(cljs.core.truth_(inst_18060))
{var statearr_18083_18105 = state_18071__$1;(statearr_18083_18105[1] = 12);
} else
{var statearr_18084_18106 = state_18071__$1;(statearr_18084_18106[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18072 === 12))
{var state_18071__$1 = state_18071;var statearr_18085_18107 = state_18071__$1;(statearr_18085_18107[2] = null);
(statearr_18085_18107[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18072 === 13))
{var state_18071__$1 = state_18071;var statearr_18086_18108 = state_18071__$1;(statearr_18086_18108[2] = null);
(statearr_18086_18108[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18072 === 14))
{var inst_18065 = (state_18071[2]);var state_18071__$1 = state_18071;var statearr_18087_18109 = state_18071__$1;(statearr_18087_18109[2] = inst_18065);
(statearr_18087_18109[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto___18095))
;return ((function (switch__13314__auto__,c__13385__auto___18095){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_18091 = [null,null,null,null,null,null,null,null];(statearr_18091[0] = state_machine__13315__auto__);
(statearr_18091[1] = 1);
return statearr_18091;
});
var state_machine__13315__auto____1 = (function (state_18071){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_18071);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e18092){if((e18092 instanceof Object))
{var ex__13318__auto__ = e18092;var statearr_18093_18110 = state_18071;(statearr_18093_18110[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18071);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18111 = state_18071;
state_18071 = G__18111;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_18071){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_18071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto___18095))
})();var state__13387__auto__ = (function (){var statearr_18094 = f__13386__auto__.call(null);(statearr_18094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto___18095);
return statearr_18094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto___18095))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13385__auto___18212 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto___18212,tc,fc){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto___18212,tc,fc){
return (function (state_18187){var state_val_18188 = (state_18187[1]);if((state_val_18188 === 1))
{var state_18187__$1 = state_18187;var statearr_18189_18213 = state_18187__$1;(statearr_18189_18213[2] = null);
(statearr_18189_18213[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18188 === 2))
{var state_18187__$1 = state_18187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18187__$1,4,ch);
} else
{if((state_val_18188 === 3))
{var inst_18185 = (state_18187[2]);var state_18187__$1 = state_18187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18187__$1,inst_18185);
} else
{if((state_val_18188 === 4))
{var inst_18164 = (state_18187[7]);var inst_18164__$1 = (state_18187[2]);var inst_18165 = (inst_18164__$1 == null);var state_18187__$1 = (function (){var statearr_18190 = state_18187;(statearr_18190[7] = inst_18164__$1);
return statearr_18190;
})();if(cljs.core.truth_(inst_18165))
{var statearr_18191_18214 = state_18187__$1;(statearr_18191_18214[1] = 5);
} else
{var statearr_18192_18215 = state_18187__$1;(statearr_18192_18215[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18188 === 5))
{var inst_18167 = cljs.core.async.close_BANG_.call(null,tc);var inst_18168 = cljs.core.async.close_BANG_.call(null,fc);var state_18187__$1 = (function (){var statearr_18193 = state_18187;(statearr_18193[8] = inst_18167);
return statearr_18193;
})();var statearr_18194_18216 = state_18187__$1;(statearr_18194_18216[2] = inst_18168);
(statearr_18194_18216[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18188 === 6))
{var inst_18164 = (state_18187[7]);var inst_18170 = p.call(null,inst_18164);var state_18187__$1 = state_18187;if(cljs.core.truth_(inst_18170))
{var statearr_18195_18217 = state_18187__$1;(statearr_18195_18217[1] = 9);
} else
{var statearr_18196_18218 = state_18187__$1;(statearr_18196_18218[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18188 === 7))
{var inst_18183 = (state_18187[2]);var state_18187__$1 = state_18187;var statearr_18197_18219 = state_18187__$1;(statearr_18197_18219[2] = inst_18183);
(statearr_18197_18219[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18188 === 8))
{var inst_18176 = (state_18187[2]);var state_18187__$1 = state_18187;if(cljs.core.truth_(inst_18176))
{var statearr_18198_18220 = state_18187__$1;(statearr_18198_18220[1] = 12);
} else
{var statearr_18199_18221 = state_18187__$1;(statearr_18199_18221[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18188 === 9))
{var state_18187__$1 = state_18187;var statearr_18200_18222 = state_18187__$1;(statearr_18200_18222[2] = tc);
(statearr_18200_18222[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18188 === 10))
{var state_18187__$1 = state_18187;var statearr_18201_18223 = state_18187__$1;(statearr_18201_18223[2] = fc);
(statearr_18201_18223[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18188 === 11))
{var inst_18164 = (state_18187[7]);var inst_18174 = (state_18187[2]);var state_18187__$1 = state_18187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18187__$1,8,inst_18174,inst_18164);
} else
{if((state_val_18188 === 12))
{var state_18187__$1 = state_18187;var statearr_18202_18224 = state_18187__$1;(statearr_18202_18224[2] = null);
(statearr_18202_18224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18188 === 13))
{var state_18187__$1 = state_18187;var statearr_18203_18225 = state_18187__$1;(statearr_18203_18225[2] = null);
(statearr_18203_18225[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18188 === 14))
{var inst_18181 = (state_18187[2]);var state_18187__$1 = state_18187;var statearr_18204_18226 = state_18187__$1;(statearr_18204_18226[2] = inst_18181);
(statearr_18204_18226[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto___18212,tc,fc))
;return ((function (switch__13314__auto__,c__13385__auto___18212,tc,fc){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_18208 = [null,null,null,null,null,null,null,null,null];(statearr_18208[0] = state_machine__13315__auto__);
(statearr_18208[1] = 1);
return statearr_18208;
});
var state_machine__13315__auto____1 = (function (state_18187){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_18187);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e18209){if((e18209 instanceof Object))
{var ex__13318__auto__ = e18209;var statearr_18210_18227 = state_18187;(statearr_18210_18227[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18187);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18228 = state_18187;
state_18187 = G__18228;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_18187){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_18187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto___18212,tc,fc))
})();var state__13387__auto__ = (function (){var statearr_18211 = f__13386__auto__.call(null);(statearr_18211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto___18212);
return statearr_18211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto___18212,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13385__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto__){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto__){
return (function (state_18275){var state_val_18276 = (state_18275[1]);if((state_val_18276 === 7))
{var inst_18271 = (state_18275[2]);var state_18275__$1 = state_18275;var statearr_18277_18293 = state_18275__$1;(statearr_18277_18293[2] = inst_18271);
(statearr_18277_18293[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18276 === 6))
{var inst_18261 = (state_18275[7]);var inst_18264 = (state_18275[8]);var inst_18268 = f.call(null,inst_18261,inst_18264);var inst_18261__$1 = inst_18268;var state_18275__$1 = (function (){var statearr_18278 = state_18275;(statearr_18278[7] = inst_18261__$1);
return statearr_18278;
})();var statearr_18279_18294 = state_18275__$1;(statearr_18279_18294[2] = null);
(statearr_18279_18294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18276 === 5))
{var inst_18261 = (state_18275[7]);var state_18275__$1 = state_18275;var statearr_18280_18295 = state_18275__$1;(statearr_18280_18295[2] = inst_18261);
(statearr_18280_18295[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18276 === 4))
{var inst_18264 = (state_18275[8]);var inst_18264__$1 = (state_18275[2]);var inst_18265 = (inst_18264__$1 == null);var state_18275__$1 = (function (){var statearr_18281 = state_18275;(statearr_18281[8] = inst_18264__$1);
return statearr_18281;
})();if(cljs.core.truth_(inst_18265))
{var statearr_18282_18296 = state_18275__$1;(statearr_18282_18296[1] = 5);
} else
{var statearr_18283_18297 = state_18275__$1;(statearr_18283_18297[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18276 === 3))
{var inst_18273 = (state_18275[2]);var state_18275__$1 = state_18275;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18275__$1,inst_18273);
} else
{if((state_val_18276 === 2))
{var state_18275__$1 = state_18275;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18275__$1,4,ch);
} else
{if((state_val_18276 === 1))
{var inst_18261 = init;var state_18275__$1 = (function (){var statearr_18284 = state_18275;(statearr_18284[7] = inst_18261);
return statearr_18284;
})();var statearr_18285_18298 = state_18275__$1;(statearr_18285_18298[2] = null);
(statearr_18285_18298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__13385__auto__))
;return ((function (switch__13314__auto__,c__13385__auto__){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_18289 = [null,null,null,null,null,null,null,null,null];(statearr_18289[0] = state_machine__13315__auto__);
(statearr_18289[1] = 1);
return statearr_18289;
});
var state_machine__13315__auto____1 = (function (state_18275){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_18275);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e18290){if((e18290 instanceof Object))
{var ex__13318__auto__ = e18290;var statearr_18291_18299 = state_18275;(statearr_18291_18299[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18275);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18300 = state_18275;
state_18275 = G__18300;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_18275){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_18275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto__))
})();var state__13387__auto__ = (function (){var statearr_18292 = f__13386__auto__.call(null);(statearr_18292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto__);
return statearr_18292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto__))
);
return c__13385__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13385__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto__){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto__){
return (function (state_18374){var state_val_18375 = (state_18374[1]);if((state_val_18375 === 1))
{var inst_18350 = cljs.core.seq.call(null,coll);var inst_18351 = inst_18350;var state_18374__$1 = (function (){var statearr_18376 = state_18374;(statearr_18376[7] = inst_18351);
return statearr_18376;
})();var statearr_18377_18399 = state_18374__$1;(statearr_18377_18399[2] = null);
(statearr_18377_18399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 2))
{var inst_18351 = (state_18374[7]);var state_18374__$1 = state_18374;if(cljs.core.truth_(inst_18351))
{var statearr_18378_18400 = state_18374__$1;(statearr_18378_18400[1] = 4);
} else
{var statearr_18379_18401 = state_18374__$1;(statearr_18379_18401[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 3))
{var inst_18372 = (state_18374[2]);var state_18374__$1 = state_18374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18374__$1,inst_18372);
} else
{if((state_val_18375 === 4))
{var inst_18351 = (state_18374[7]);var inst_18354 = cljs.core.first.call(null,inst_18351);var state_18374__$1 = state_18374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18374__$1,7,ch,inst_18354);
} else
{if((state_val_18375 === 5))
{var inst_18351 = (state_18374[7]);var state_18374__$1 = state_18374;var statearr_18380_18402 = state_18374__$1;(statearr_18380_18402[2] = inst_18351);
(statearr_18380_18402[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 6))
{var inst_18359 = (state_18374[2]);var state_18374__$1 = state_18374;if(cljs.core.truth_(inst_18359))
{var statearr_18381_18403 = state_18374__$1;(statearr_18381_18403[1] = 8);
} else
{var statearr_18382_18404 = state_18374__$1;(statearr_18382_18404[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 7))
{var inst_18356 = (state_18374[2]);var state_18374__$1 = state_18374;var statearr_18383_18405 = state_18374__$1;(statearr_18383_18405[2] = inst_18356);
(statearr_18383_18405[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 8))
{var inst_18351 = (state_18374[7]);var inst_18361 = cljs.core.next.call(null,inst_18351);var inst_18351__$1 = inst_18361;var state_18374__$1 = (function (){var statearr_18384 = state_18374;(statearr_18384[7] = inst_18351__$1);
return statearr_18384;
})();var statearr_18385_18406 = state_18374__$1;(statearr_18385_18406[2] = null);
(statearr_18385_18406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 9))
{var state_18374__$1 = state_18374;if(cljs.core.truth_(close_QMARK_))
{var statearr_18386_18407 = state_18374__$1;(statearr_18386_18407[1] = 11);
} else
{var statearr_18387_18408 = state_18374__$1;(statearr_18387_18408[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 10))
{var inst_18370 = (state_18374[2]);var state_18374__$1 = state_18374;var statearr_18388_18409 = state_18374__$1;(statearr_18388_18409[2] = inst_18370);
(statearr_18388_18409[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 11))
{var inst_18365 = cljs.core.async.close_BANG_.call(null,ch);var state_18374__$1 = state_18374;var statearr_18389_18410 = state_18374__$1;(statearr_18389_18410[2] = inst_18365);
(statearr_18389_18410[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 12))
{var state_18374__$1 = state_18374;var statearr_18390_18411 = state_18374__$1;(statearr_18390_18411[2] = null);
(statearr_18390_18411[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 13))
{var inst_18368 = (state_18374[2]);var state_18374__$1 = state_18374;var statearr_18391_18412 = state_18374__$1;(statearr_18391_18412[2] = inst_18368);
(statearr_18391_18412[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto__))
;return ((function (switch__13314__auto__,c__13385__auto__){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_18395 = [null,null,null,null,null,null,null,null];(statearr_18395[0] = state_machine__13315__auto__);
(statearr_18395[1] = 1);
return statearr_18395;
});
var state_machine__13315__auto____1 = (function (state_18374){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_18374);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e18396){if((e18396 instanceof Object))
{var ex__13318__auto__ = e18396;var statearr_18397_18413 = state_18374;(statearr_18397_18413[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18374);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18414 = state_18374;
state_18374 = G__18414;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_18374){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_18374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto__))
})();var state__13387__auto__ = (function (){var statearr_18398 = f__13386__auto__.call(null);(statearr_18398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto__);
return statearr_18398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto__))
);
return c__13385__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj18416 = {};return obj18416;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__9114__auto__ = _;if(and__9114__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__9114__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__9753__auto__ = (((_ == null))?null:_);return (function (){var or__9126__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9753__auto__)]);if(or__9126__auto__)
{return or__9126__auto__;
} else
{var or__9126__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__9126__auto____$1)
{return or__9126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj18418 = {};return obj18418;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__9114__auto__ = m;if(and__9114__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__9114__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__9753__auto__ = (((m == null))?null:m);return (function (){var or__9126__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9753__auto__)]);if(or__9126__auto__)
{return or__9126__auto__;
} else
{var or__9126__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__9126__auto____$1)
{return or__9126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__9114__auto__ = m;if(and__9114__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__9114__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__9753__auto__ = (((m == null))?null:m);return (function (){var or__9126__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9753__auto__)]);if(or__9126__auto__)
{return or__9126__auto__;
} else
{var or__9126__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__9126__auto____$1)
{return or__9126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__9114__auto__ = m;if(and__9114__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__9114__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__9753__auto__ = (((m == null))?null:m);return (function (){var or__9126__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9753__auto__)]);if(or__9126__auto__)
{return or__9126__auto__;
} else
{var or__9126__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__9126__auto____$1)
{return or__9126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t18640 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18640 = (function (cs,ch,mult,meta18641){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18641 = meta18641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18640.cljs$lang$type = true;
cljs.core.async.t18640.cljs$lang$ctorStr = "cljs.core.async/t18640";
cljs.core.async.t18640.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"cljs.core.async/t18640");
});})(cs))
;
cljs.core.async.t18640.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t18640.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t18640.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t18640.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t18640.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18640.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t18640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18642){var self__ = this;
var _18642__$1 = this;return self__.meta18641;
});})(cs))
;
cljs.core.async.t18640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18642,meta18641__$1){var self__ = this;
var _18642__$1 = this;return (new cljs.core.async.t18640(self__.cs,self__.ch,self__.mult,meta18641__$1));
});})(cs))
;
cljs.core.async.__GT_t18640 = ((function (cs){
return (function __GT_t18640(cs__$1,ch__$1,mult__$1,meta18641){return (new cljs.core.async.t18640(cs__$1,ch__$1,mult__$1,meta18641));
});})(cs))
;
}
return (new cljs.core.async.t18640(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13385__auto___18861 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto___18861,cs,m,dchan,dctr,done){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto___18861,cs,m,dchan,dctr,done){
return (function (state_18773){var state_val_18774 = (state_18773[1]);if((state_val_18774 === 32))
{var inst_18716 = (state_18773[7]);var inst_18715 = (state_18773[8]);var inst_18714 = (state_18773[9]);var inst_18713 = (state_18773[10]);var inst_18728 = (state_18773[2]);var inst_18729 = (inst_18716 + 1);var tmp18775 = inst_18715;var tmp18776 = inst_18714;var tmp18777 = inst_18713;var inst_18713__$1 = tmp18777;var inst_18714__$1 = tmp18776;var inst_18715__$1 = tmp18775;var inst_18716__$1 = inst_18729;var state_18773__$1 = (function (){var statearr_18778 = state_18773;(statearr_18778[11] = inst_18728);
(statearr_18778[7] = inst_18716__$1);
(statearr_18778[8] = inst_18715__$1);
(statearr_18778[9] = inst_18714__$1);
(statearr_18778[10] = inst_18713__$1);
return statearr_18778;
})();var statearr_18779_18862 = state_18773__$1;(statearr_18779_18862[2] = null);
(statearr_18779_18862[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 1))
{var state_18773__$1 = state_18773;var statearr_18780_18863 = state_18773__$1;(statearr_18780_18863[2] = null);
(statearr_18780_18863[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 33))
{var inst_18732 = (state_18773[12]);var inst_18734 = cljs.core.chunked_seq_QMARK_.call(null,inst_18732);var state_18773__$1 = state_18773;if(inst_18734)
{var statearr_18781_18864 = state_18773__$1;(statearr_18781_18864[1] = 36);
} else
{var statearr_18782_18865 = state_18773__$1;(statearr_18782_18865[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 2))
{var state_18773__$1 = state_18773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18773__$1,4,ch);
} else
{if((state_val_18774 === 34))
{var state_18773__$1 = state_18773;var statearr_18783_18866 = state_18773__$1;(statearr_18783_18866[2] = null);
(statearr_18783_18866[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 3))
{var inst_18771 = (state_18773[2]);var state_18773__$1 = state_18773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18773__$1,inst_18771);
} else
{if((state_val_18774 === 35))
{var inst_18755 = (state_18773[2]);var state_18773__$1 = state_18773;var statearr_18784_18867 = state_18773__$1;(statearr_18784_18867[2] = inst_18755);
(statearr_18784_18867[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 4))
{var inst_18645 = (state_18773[13]);var inst_18645__$1 = (state_18773[2]);var inst_18646 = (inst_18645__$1 == null);var state_18773__$1 = (function (){var statearr_18785 = state_18773;(statearr_18785[13] = inst_18645__$1);
return statearr_18785;
})();if(cljs.core.truth_(inst_18646))
{var statearr_18786_18868 = state_18773__$1;(statearr_18786_18868[1] = 5);
} else
{var statearr_18787_18869 = state_18773__$1;(statearr_18787_18869[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 36))
{var inst_18732 = (state_18773[12]);var inst_18736 = cljs.core.chunk_first.call(null,inst_18732);var inst_18737 = cljs.core.chunk_rest.call(null,inst_18732);var inst_18738 = cljs.core.count.call(null,inst_18736);var inst_18713 = inst_18737;var inst_18714 = inst_18736;var inst_18715 = inst_18738;var inst_18716 = 0;var state_18773__$1 = (function (){var statearr_18788 = state_18773;(statearr_18788[7] = inst_18716);
(statearr_18788[8] = inst_18715);
(statearr_18788[9] = inst_18714);
(statearr_18788[10] = inst_18713);
return statearr_18788;
})();var statearr_18789_18870 = state_18773__$1;(statearr_18789_18870[2] = null);
(statearr_18789_18870[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 5))
{var inst_18652 = cljs.core.deref.call(null,cs);var inst_18653 = cljs.core.seq.call(null,inst_18652);var inst_18654 = inst_18653;var inst_18655 = null;var inst_18656 = 0;var inst_18657 = 0;var state_18773__$1 = (function (){var statearr_18790 = state_18773;(statearr_18790[14] = inst_18657);
(statearr_18790[15] = inst_18655);
(statearr_18790[16] = inst_18656);
(statearr_18790[17] = inst_18654);
return statearr_18790;
})();var statearr_18791_18871 = state_18773__$1;(statearr_18791_18871[2] = null);
(statearr_18791_18871[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 37))
{var inst_18645 = (state_18773[13]);var inst_18732 = (state_18773[12]);var inst_18741 = (state_18773[18]);var inst_18741__$1 = cljs.core.first.call(null,inst_18732);var inst_18742 = cljs.core.async.put_BANG_.call(null,inst_18741__$1,inst_18645,done);var state_18773__$1 = (function (){var statearr_18792 = state_18773;(statearr_18792[18] = inst_18741__$1);
return statearr_18792;
})();if(cljs.core.truth_(inst_18742))
{var statearr_18793_18872 = state_18773__$1;(statearr_18793_18872[1] = 39);
} else
{var statearr_18794_18873 = state_18773__$1;(statearr_18794_18873[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 6))
{var inst_18705 = (state_18773[19]);var inst_18704 = cljs.core.deref.call(null,cs);var inst_18705__$1 = cljs.core.keys.call(null,inst_18704);var inst_18706 = cljs.core.count.call(null,inst_18705__$1);var inst_18707 = cljs.core.reset_BANG_.call(null,dctr,inst_18706);var inst_18712 = cljs.core.seq.call(null,inst_18705__$1);var inst_18713 = inst_18712;var inst_18714 = null;var inst_18715 = 0;var inst_18716 = 0;var state_18773__$1 = (function (){var statearr_18795 = state_18773;(statearr_18795[7] = inst_18716);
(statearr_18795[8] = inst_18715);
(statearr_18795[19] = inst_18705__$1);
(statearr_18795[9] = inst_18714);
(statearr_18795[10] = inst_18713);
(statearr_18795[20] = inst_18707);
return statearr_18795;
})();var statearr_18796_18874 = state_18773__$1;(statearr_18796_18874[2] = null);
(statearr_18796_18874[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 38))
{var inst_18752 = (state_18773[2]);var state_18773__$1 = state_18773;var statearr_18797_18875 = state_18773__$1;(statearr_18797_18875[2] = inst_18752);
(statearr_18797_18875[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 7))
{var inst_18769 = (state_18773[2]);var state_18773__$1 = state_18773;var statearr_18798_18876 = state_18773__$1;(statearr_18798_18876[2] = inst_18769);
(statearr_18798_18876[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 39))
{var state_18773__$1 = state_18773;var statearr_18799_18877 = state_18773__$1;(statearr_18799_18877[2] = null);
(statearr_18799_18877[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 8))
{var inst_18657 = (state_18773[14]);var inst_18656 = (state_18773[16]);var inst_18659 = (inst_18657 < inst_18656);var inst_18660 = inst_18659;var state_18773__$1 = state_18773;if(cljs.core.truth_(inst_18660))
{var statearr_18800_18878 = state_18773__$1;(statearr_18800_18878[1] = 10);
} else
{var statearr_18801_18879 = state_18773__$1;(statearr_18801_18879[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 40))
{var inst_18741 = (state_18773[18]);var inst_18745 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18746 = cljs.core.async.untap_STAR_.call(null,m,inst_18741);var state_18773__$1 = (function (){var statearr_18802 = state_18773;(statearr_18802[21] = inst_18745);
return statearr_18802;
})();var statearr_18803_18880 = state_18773__$1;(statearr_18803_18880[2] = inst_18746);
(statearr_18803_18880[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 9))
{var inst_18702 = (state_18773[2]);var state_18773__$1 = state_18773;var statearr_18804_18881 = state_18773__$1;(statearr_18804_18881[2] = inst_18702);
(statearr_18804_18881[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 41))
{var inst_18732 = (state_18773[12]);var inst_18748 = (state_18773[2]);var inst_18749 = cljs.core.next.call(null,inst_18732);var inst_18713 = inst_18749;var inst_18714 = null;var inst_18715 = 0;var inst_18716 = 0;var state_18773__$1 = (function (){var statearr_18805 = state_18773;(statearr_18805[7] = inst_18716);
(statearr_18805[8] = inst_18715);
(statearr_18805[9] = inst_18714);
(statearr_18805[10] = inst_18713);
(statearr_18805[22] = inst_18748);
return statearr_18805;
})();var statearr_18806_18882 = state_18773__$1;(statearr_18806_18882[2] = null);
(statearr_18806_18882[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 10))
{var inst_18657 = (state_18773[14]);var inst_18655 = (state_18773[15]);var inst_18663 = cljs.core._nth.call(null,inst_18655,inst_18657);var inst_18664 = cljs.core.nth.call(null,inst_18663,0,null);var inst_18665 = cljs.core.nth.call(null,inst_18663,1,null);var state_18773__$1 = (function (){var statearr_18807 = state_18773;(statearr_18807[23] = inst_18664);
return statearr_18807;
})();if(cljs.core.truth_(inst_18665))
{var statearr_18808_18883 = state_18773__$1;(statearr_18808_18883[1] = 13);
} else
{var statearr_18809_18884 = state_18773__$1;(statearr_18809_18884[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 42))
{var state_18773__$1 = state_18773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18773__$1,45,dchan);
} else
{if((state_val_18774 === 11))
{var inst_18654 = (state_18773[17]);var inst_18674 = (state_18773[24]);var inst_18674__$1 = cljs.core.seq.call(null,inst_18654);var state_18773__$1 = (function (){var statearr_18810 = state_18773;(statearr_18810[24] = inst_18674__$1);
return statearr_18810;
})();if(inst_18674__$1)
{var statearr_18811_18885 = state_18773__$1;(statearr_18811_18885[1] = 16);
} else
{var statearr_18812_18886 = state_18773__$1;(statearr_18812_18886[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 43))
{var state_18773__$1 = state_18773;var statearr_18813_18887 = state_18773__$1;(statearr_18813_18887[2] = null);
(statearr_18813_18887[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 12))
{var inst_18700 = (state_18773[2]);var state_18773__$1 = state_18773;var statearr_18814_18888 = state_18773__$1;(statearr_18814_18888[2] = inst_18700);
(statearr_18814_18888[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 44))
{var inst_18766 = (state_18773[2]);var state_18773__$1 = (function (){var statearr_18815 = state_18773;(statearr_18815[25] = inst_18766);
return statearr_18815;
})();var statearr_18816_18889 = state_18773__$1;(statearr_18816_18889[2] = null);
(statearr_18816_18889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 13))
{var inst_18664 = (state_18773[23]);var inst_18667 = cljs.core.async.close_BANG_.call(null,inst_18664);var state_18773__$1 = state_18773;var statearr_18817_18890 = state_18773__$1;(statearr_18817_18890[2] = inst_18667);
(statearr_18817_18890[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 45))
{var inst_18763 = (state_18773[2]);var state_18773__$1 = state_18773;var statearr_18821_18891 = state_18773__$1;(statearr_18821_18891[2] = inst_18763);
(statearr_18821_18891[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 14))
{var state_18773__$1 = state_18773;var statearr_18822_18892 = state_18773__$1;(statearr_18822_18892[2] = null);
(statearr_18822_18892[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 15))
{var inst_18657 = (state_18773[14]);var inst_18655 = (state_18773[15]);var inst_18656 = (state_18773[16]);var inst_18654 = (state_18773[17]);var inst_18670 = (state_18773[2]);var inst_18671 = (inst_18657 + 1);var tmp18818 = inst_18655;var tmp18819 = inst_18656;var tmp18820 = inst_18654;var inst_18654__$1 = tmp18820;var inst_18655__$1 = tmp18818;var inst_18656__$1 = tmp18819;var inst_18657__$1 = inst_18671;var state_18773__$1 = (function (){var statearr_18823 = state_18773;(statearr_18823[26] = inst_18670);
(statearr_18823[14] = inst_18657__$1);
(statearr_18823[15] = inst_18655__$1);
(statearr_18823[16] = inst_18656__$1);
(statearr_18823[17] = inst_18654__$1);
return statearr_18823;
})();var statearr_18824_18893 = state_18773__$1;(statearr_18824_18893[2] = null);
(statearr_18824_18893[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 16))
{var inst_18674 = (state_18773[24]);var inst_18676 = cljs.core.chunked_seq_QMARK_.call(null,inst_18674);var state_18773__$1 = state_18773;if(inst_18676)
{var statearr_18825_18894 = state_18773__$1;(statearr_18825_18894[1] = 19);
} else
{var statearr_18826_18895 = state_18773__$1;(statearr_18826_18895[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 17))
{var state_18773__$1 = state_18773;var statearr_18827_18896 = state_18773__$1;(statearr_18827_18896[2] = null);
(statearr_18827_18896[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 18))
{var inst_18698 = (state_18773[2]);var state_18773__$1 = state_18773;var statearr_18828_18897 = state_18773__$1;(statearr_18828_18897[2] = inst_18698);
(statearr_18828_18897[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 19))
{var inst_18674 = (state_18773[24]);var inst_18678 = cljs.core.chunk_first.call(null,inst_18674);var inst_18679 = cljs.core.chunk_rest.call(null,inst_18674);var inst_18680 = cljs.core.count.call(null,inst_18678);var inst_18654 = inst_18679;var inst_18655 = inst_18678;var inst_18656 = inst_18680;var inst_18657 = 0;var state_18773__$1 = (function (){var statearr_18829 = state_18773;(statearr_18829[14] = inst_18657);
(statearr_18829[15] = inst_18655);
(statearr_18829[16] = inst_18656);
(statearr_18829[17] = inst_18654);
return statearr_18829;
})();var statearr_18830_18898 = state_18773__$1;(statearr_18830_18898[2] = null);
(statearr_18830_18898[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 20))
{var inst_18674 = (state_18773[24]);var inst_18684 = cljs.core.first.call(null,inst_18674);var inst_18685 = cljs.core.nth.call(null,inst_18684,0,null);var inst_18686 = cljs.core.nth.call(null,inst_18684,1,null);var state_18773__$1 = (function (){var statearr_18831 = state_18773;(statearr_18831[27] = inst_18685);
return statearr_18831;
})();if(cljs.core.truth_(inst_18686))
{var statearr_18832_18899 = state_18773__$1;(statearr_18832_18899[1] = 22);
} else
{var statearr_18833_18900 = state_18773__$1;(statearr_18833_18900[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 21))
{var inst_18695 = (state_18773[2]);var state_18773__$1 = state_18773;var statearr_18834_18901 = state_18773__$1;(statearr_18834_18901[2] = inst_18695);
(statearr_18834_18901[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 22))
{var inst_18685 = (state_18773[27]);var inst_18688 = cljs.core.async.close_BANG_.call(null,inst_18685);var state_18773__$1 = state_18773;var statearr_18835_18902 = state_18773__$1;(statearr_18835_18902[2] = inst_18688);
(statearr_18835_18902[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 23))
{var state_18773__$1 = state_18773;var statearr_18836_18903 = state_18773__$1;(statearr_18836_18903[2] = null);
(statearr_18836_18903[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 24))
{var inst_18674 = (state_18773[24]);var inst_18691 = (state_18773[2]);var inst_18692 = cljs.core.next.call(null,inst_18674);var inst_18654 = inst_18692;var inst_18655 = null;var inst_18656 = 0;var inst_18657 = 0;var state_18773__$1 = (function (){var statearr_18837 = state_18773;(statearr_18837[14] = inst_18657);
(statearr_18837[15] = inst_18655);
(statearr_18837[16] = inst_18656);
(statearr_18837[17] = inst_18654);
(statearr_18837[28] = inst_18691);
return statearr_18837;
})();var statearr_18838_18904 = state_18773__$1;(statearr_18838_18904[2] = null);
(statearr_18838_18904[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 25))
{var inst_18716 = (state_18773[7]);var inst_18715 = (state_18773[8]);var inst_18718 = (inst_18716 < inst_18715);var inst_18719 = inst_18718;var state_18773__$1 = state_18773;if(cljs.core.truth_(inst_18719))
{var statearr_18839_18905 = state_18773__$1;(statearr_18839_18905[1] = 27);
} else
{var statearr_18840_18906 = state_18773__$1;(statearr_18840_18906[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 26))
{var inst_18705 = (state_18773[19]);var inst_18759 = (state_18773[2]);var inst_18760 = cljs.core.seq.call(null,inst_18705);var state_18773__$1 = (function (){var statearr_18841 = state_18773;(statearr_18841[29] = inst_18759);
return statearr_18841;
})();if(inst_18760)
{var statearr_18842_18907 = state_18773__$1;(statearr_18842_18907[1] = 42);
} else
{var statearr_18843_18908 = state_18773__$1;(statearr_18843_18908[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 27))
{var inst_18721 = (state_18773[30]);var inst_18645 = (state_18773[13]);var inst_18716 = (state_18773[7]);var inst_18714 = (state_18773[9]);var inst_18721__$1 = cljs.core._nth.call(null,inst_18714,inst_18716);var inst_18722 = cljs.core.async.put_BANG_.call(null,inst_18721__$1,inst_18645,done);var state_18773__$1 = (function (){var statearr_18844 = state_18773;(statearr_18844[30] = inst_18721__$1);
return statearr_18844;
})();if(cljs.core.truth_(inst_18722))
{var statearr_18845_18909 = state_18773__$1;(statearr_18845_18909[1] = 30);
} else
{var statearr_18846_18910 = state_18773__$1;(statearr_18846_18910[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 28))
{var inst_18732 = (state_18773[12]);var inst_18713 = (state_18773[10]);var inst_18732__$1 = cljs.core.seq.call(null,inst_18713);var state_18773__$1 = (function (){var statearr_18847 = state_18773;(statearr_18847[12] = inst_18732__$1);
return statearr_18847;
})();if(inst_18732__$1)
{var statearr_18848_18911 = state_18773__$1;(statearr_18848_18911[1] = 33);
} else
{var statearr_18849_18912 = state_18773__$1;(statearr_18849_18912[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 29))
{var inst_18757 = (state_18773[2]);var state_18773__$1 = state_18773;var statearr_18850_18913 = state_18773__$1;(statearr_18850_18913[2] = inst_18757);
(statearr_18850_18913[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 30))
{var state_18773__$1 = state_18773;var statearr_18851_18914 = state_18773__$1;(statearr_18851_18914[2] = null);
(statearr_18851_18914[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18774 === 31))
{var inst_18721 = (state_18773[30]);var inst_18725 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18726 = cljs.core.async.untap_STAR_.call(null,m,inst_18721);var state_18773__$1 = (function (){var statearr_18852 = state_18773;(statearr_18852[31] = inst_18725);
return statearr_18852;
})();var statearr_18853_18915 = state_18773__$1;(statearr_18853_18915[2] = inst_18726);
(statearr_18853_18915[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto___18861,cs,m,dchan,dctr,done))
;return ((function (switch__13314__auto__,c__13385__auto___18861,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_18857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18857[0] = state_machine__13315__auto__);
(statearr_18857[1] = 1);
return statearr_18857;
});
var state_machine__13315__auto____1 = (function (state_18773){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_18773);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e18858){if((e18858 instanceof Object))
{var ex__13318__auto__ = e18858;var statearr_18859_18916 = state_18773;(statearr_18859_18916[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18773);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18858;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18917 = state_18773;
state_18773 = G__18917;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_18773){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_18773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto___18861,cs,m,dchan,dctr,done))
})();var state__13387__auto__ = (function (){var statearr_18860 = f__13386__auto__.call(null);(statearr_18860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto___18861);
return statearr_18860;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto___18861,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj18919 = {};return obj18919;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__9114__auto__ = m;if(and__9114__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__9114__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__9753__auto__ = (((m == null))?null:m);return (function (){var or__9126__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9753__auto__)]);if(or__9126__auto__)
{return or__9126__auto__;
} else
{var or__9126__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__9126__auto____$1)
{return or__9126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__9114__auto__ = m;if(and__9114__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__9114__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__9753__auto__ = (((m == null))?null:m);return (function (){var or__9126__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9753__auto__)]);if(or__9126__auto__)
{return or__9126__auto__;
} else
{var or__9126__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__9126__auto____$1)
{return or__9126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__9114__auto__ = m;if(and__9114__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__9114__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__9753__auto__ = (((m == null))?null:m);return (function (){var or__9126__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9753__auto__)]);if(or__9126__auto__)
{return or__9126__auto__;
} else
{var or__9126__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__9126__auto____$1)
{return or__9126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__9114__auto__ = m;if(and__9114__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__9114__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__9753__auto__ = (((m == null))?null:m);return (function (){var or__9126__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9753__auto__)]);if(or__9126__auto__)
{return or__9126__auto__;
} else
{var or__9126__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__9126__auto____$1)
{return or__9126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__9114__auto__ = m;if(and__9114__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__9114__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__9753__auto__ = (((m == null))?null:m);return (function (){var or__9126__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9753__auto__)]);if(or__9126__auto__)
{return or__9126__auto__;
} else
{var or__9126__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__9126__auto____$1)
{return or__9126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t19039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19039 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta19040){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta19040 = meta19040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19039.cljs$lang$type = true;
cljs.core.async.t19039.cljs$lang$ctorStr = "cljs.core.async/t19039";
cljs.core.async.t19039.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"cljs.core.async/t19039");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19039.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t19039.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19039.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19039.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19039.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19039.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19039.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19041){var self__ = this;
var _19041__$1 = this;return self__.meta19040;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19041,meta19040__$1){var self__ = this;
var _19041__$1 = this;return (new cljs.core.async.t19039(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta19040__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t19039 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19039(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19040){return (new cljs.core.async.t19039(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19040));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t19039(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13385__auto___19158 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto___19158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto___19158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19111){var state_val_19112 = (state_19111[1]);if((state_val_19112 === 1))
{var inst_19045 = (state_19111[7]);var inst_19045__$1 = calc_state.call(null);var inst_19046 = cljs.core.seq_QMARK_.call(null,inst_19045__$1);var state_19111__$1 = (function (){var statearr_19113 = state_19111;(statearr_19113[7] = inst_19045__$1);
return statearr_19113;
})();if(inst_19046)
{var statearr_19114_19159 = state_19111__$1;(statearr_19114_19159[1] = 2);
} else
{var statearr_19115_19160 = state_19111__$1;(statearr_19115_19160[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 2))
{var inst_19045 = (state_19111[7]);var inst_19048 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19045);var state_19111__$1 = state_19111;var statearr_19116_19161 = state_19111__$1;(statearr_19116_19161[2] = inst_19048);
(statearr_19116_19161[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 3))
{var inst_19045 = (state_19111[7]);var state_19111__$1 = state_19111;var statearr_19117_19162 = state_19111__$1;(statearr_19117_19162[2] = inst_19045);
(statearr_19117_19162[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 4))
{var inst_19045 = (state_19111[7]);var inst_19051 = (state_19111[2]);var inst_19052 = cljs.core.get.call(null,inst_19051,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19053 = cljs.core.get.call(null,inst_19051,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19054 = cljs.core.get.call(null,inst_19051,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_19055 = inst_19045;var state_19111__$1 = (function (){var statearr_19118 = state_19111;(statearr_19118[8] = inst_19052);
(statearr_19118[9] = inst_19053);
(statearr_19118[10] = inst_19054);
(statearr_19118[11] = inst_19055);
return statearr_19118;
})();var statearr_19119_19163 = state_19111__$1;(statearr_19119_19163[2] = null);
(statearr_19119_19163[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 5))
{var inst_19055 = (state_19111[11]);var inst_19058 = cljs.core.seq_QMARK_.call(null,inst_19055);var state_19111__$1 = state_19111;if(inst_19058)
{var statearr_19120_19164 = state_19111__$1;(statearr_19120_19164[1] = 7);
} else
{var statearr_19121_19165 = state_19111__$1;(statearr_19121_19165[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 6))
{var inst_19109 = (state_19111[2]);var state_19111__$1 = state_19111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19111__$1,inst_19109);
} else
{if((state_val_19112 === 7))
{var inst_19055 = (state_19111[11]);var inst_19060 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19055);var state_19111__$1 = state_19111;var statearr_19122_19166 = state_19111__$1;(statearr_19122_19166[2] = inst_19060);
(statearr_19122_19166[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 8))
{var inst_19055 = (state_19111[11]);var state_19111__$1 = state_19111;var statearr_19123_19167 = state_19111__$1;(statearr_19123_19167[2] = inst_19055);
(statearr_19123_19167[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 9))
{var inst_19063 = (state_19111[12]);var inst_19063__$1 = (state_19111[2]);var inst_19064 = cljs.core.get.call(null,inst_19063__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19065 = cljs.core.get.call(null,inst_19063__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19066 = cljs.core.get.call(null,inst_19063__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_19111__$1 = (function (){var statearr_19124 = state_19111;(statearr_19124[12] = inst_19063__$1);
(statearr_19124[13] = inst_19065);
(statearr_19124[14] = inst_19066);
return statearr_19124;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19111__$1,10,inst_19064);
} else
{if((state_val_19112 === 10))
{var inst_19071 = (state_19111[15]);var inst_19070 = (state_19111[16]);var inst_19069 = (state_19111[2]);var inst_19070__$1 = cljs.core.nth.call(null,inst_19069,0,null);var inst_19071__$1 = cljs.core.nth.call(null,inst_19069,1,null);var inst_19072 = (inst_19070__$1 == null);var inst_19073 = cljs.core._EQ_.call(null,inst_19071__$1,change);var inst_19074 = (inst_19072) || (inst_19073);var state_19111__$1 = (function (){var statearr_19125 = state_19111;(statearr_19125[15] = inst_19071__$1);
(statearr_19125[16] = inst_19070__$1);
return statearr_19125;
})();if(cljs.core.truth_(inst_19074))
{var statearr_19126_19168 = state_19111__$1;(statearr_19126_19168[1] = 11);
} else
{var statearr_19127_19169 = state_19111__$1;(statearr_19127_19169[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 11))
{var inst_19070 = (state_19111[16]);var inst_19076 = (inst_19070 == null);var state_19111__$1 = state_19111;if(cljs.core.truth_(inst_19076))
{var statearr_19128_19170 = state_19111__$1;(statearr_19128_19170[1] = 14);
} else
{var statearr_19129_19171 = state_19111__$1;(statearr_19129_19171[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 12))
{var inst_19085 = (state_19111[17]);var inst_19071 = (state_19111[15]);var inst_19066 = (state_19111[14]);var inst_19085__$1 = inst_19066.call(null,inst_19071);var state_19111__$1 = (function (){var statearr_19130 = state_19111;(statearr_19130[17] = inst_19085__$1);
return statearr_19130;
})();if(cljs.core.truth_(inst_19085__$1))
{var statearr_19131_19172 = state_19111__$1;(statearr_19131_19172[1] = 17);
} else
{var statearr_19132_19173 = state_19111__$1;(statearr_19132_19173[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 13))
{var inst_19107 = (state_19111[2]);var state_19111__$1 = state_19111;var statearr_19133_19174 = state_19111__$1;(statearr_19133_19174[2] = inst_19107);
(statearr_19133_19174[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 14))
{var inst_19071 = (state_19111[15]);var inst_19078 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19071);var state_19111__$1 = state_19111;var statearr_19134_19175 = state_19111__$1;(statearr_19134_19175[2] = inst_19078);
(statearr_19134_19175[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 15))
{var state_19111__$1 = state_19111;var statearr_19135_19176 = state_19111__$1;(statearr_19135_19176[2] = null);
(statearr_19135_19176[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 16))
{var inst_19081 = (state_19111[2]);var inst_19082 = calc_state.call(null);var inst_19055 = inst_19082;var state_19111__$1 = (function (){var statearr_19136 = state_19111;(statearr_19136[18] = inst_19081);
(statearr_19136[11] = inst_19055);
return statearr_19136;
})();var statearr_19137_19177 = state_19111__$1;(statearr_19137_19177[2] = null);
(statearr_19137_19177[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 17))
{var inst_19085 = (state_19111[17]);var state_19111__$1 = state_19111;var statearr_19138_19178 = state_19111__$1;(statearr_19138_19178[2] = inst_19085);
(statearr_19138_19178[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 18))
{var inst_19071 = (state_19111[15]);var inst_19065 = (state_19111[13]);var inst_19066 = (state_19111[14]);var inst_19088 = cljs.core.empty_QMARK_.call(null,inst_19066);var inst_19089 = inst_19065.call(null,inst_19071);var inst_19090 = cljs.core.not.call(null,inst_19089);var inst_19091 = (inst_19088) && (inst_19090);var state_19111__$1 = state_19111;var statearr_19139_19179 = state_19111__$1;(statearr_19139_19179[2] = inst_19091);
(statearr_19139_19179[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 19))
{var inst_19093 = (state_19111[2]);var state_19111__$1 = state_19111;if(cljs.core.truth_(inst_19093))
{var statearr_19140_19180 = state_19111__$1;(statearr_19140_19180[1] = 20);
} else
{var statearr_19141_19181 = state_19111__$1;(statearr_19141_19181[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 20))
{var inst_19070 = (state_19111[16]);var state_19111__$1 = state_19111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19111__$1,23,out,inst_19070);
} else
{if((state_val_19112 === 21))
{var inst_19063 = (state_19111[12]);var inst_19055 = inst_19063;var state_19111__$1 = (function (){var statearr_19142 = state_19111;(statearr_19142[11] = inst_19055);
return statearr_19142;
})();var statearr_19143_19182 = state_19111__$1;(statearr_19143_19182[2] = null);
(statearr_19143_19182[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 22))
{var inst_19105 = (state_19111[2]);var state_19111__$1 = state_19111;var statearr_19144_19183 = state_19111__$1;(statearr_19144_19183[2] = inst_19105);
(statearr_19144_19183[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 23))
{var inst_19096 = (state_19111[2]);var state_19111__$1 = state_19111;if(cljs.core.truth_(inst_19096))
{var statearr_19145_19184 = state_19111__$1;(statearr_19145_19184[1] = 24);
} else
{var statearr_19146_19185 = state_19111__$1;(statearr_19146_19185[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 24))
{var inst_19063 = (state_19111[12]);var inst_19055 = inst_19063;var state_19111__$1 = (function (){var statearr_19147 = state_19111;(statearr_19147[11] = inst_19055);
return statearr_19147;
})();var statearr_19148_19186 = state_19111__$1;(statearr_19148_19186[2] = null);
(statearr_19148_19186[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 25))
{var state_19111__$1 = state_19111;var statearr_19149_19187 = state_19111__$1;(statearr_19149_19187[2] = null);
(statearr_19149_19187[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19112 === 26))
{var inst_19101 = (state_19111[2]);var state_19111__$1 = state_19111;var statearr_19150_19188 = state_19111__$1;(statearr_19150_19188[2] = inst_19101);
(statearr_19150_19188[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto___19158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13314__auto__,c__13385__auto___19158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_19154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19154[0] = state_machine__13315__auto__);
(statearr_19154[1] = 1);
return statearr_19154;
});
var state_machine__13315__auto____1 = (function (state_19111){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_19111);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e19155){if((e19155 instanceof Object))
{var ex__13318__auto__ = e19155;var statearr_19156_19189 = state_19111;(statearr_19156_19189[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19190 = state_19111;
state_19111 = G__19190;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_19111){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_19111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto___19158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13387__auto__ = (function (){var statearr_19157 = f__13386__auto__.call(null);(statearr_19157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto___19158);
return statearr_19157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto___19158,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj19192 = {};return obj19192;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__9114__auto__ = p;if(and__9114__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__9114__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__9753__auto__ = (((p == null))?null:p);return (function (){var or__9126__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9753__auto__)]);if(or__9126__auto__)
{return or__9126__auto__;
} else
{var or__9126__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__9126__auto____$1)
{return or__9126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__9114__auto__ = p;if(and__9114__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__9114__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__9753__auto__ = (((p == null))?null:p);return (function (){var or__9126__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9753__auto__)]);if(or__9126__auto__)
{return or__9126__auto__;
} else
{var or__9126__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__9126__auto____$1)
{return or__9126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__9114__auto__ = p;if(and__9114__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__9114__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__9753__auto__ = (((p == null))?null:p);return (function (){var or__9126__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9753__auto__)]);if(or__9126__auto__)
{return or__9126__auto__;
} else
{var or__9126__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9126__auto____$1)
{return or__9126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__9114__auto__ = p;if(and__9114__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__9114__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__9753__auto__ = (((p == null))?null:p);return (function (){var or__9126__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9753__auto__)]);if(or__9126__auto__)
{return or__9126__auto__;
} else
{var or__9126__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9126__auto____$1)
{return or__9126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__9126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__9126__auto__))
{return or__9126__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9126__auto__,mults){
return (function (p1__19193_SHARP_){if(cljs.core.truth_(p1__19193_SHARP_.call(null,topic)))
{return p1__19193_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__19193_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9126__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19316 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19316 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19317){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19317 = meta19317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19316.cljs$lang$type = true;
cljs.core.async.t19316.cljs$lang$ctorStr = "cljs.core.async/t19316";
cljs.core.async.t19316.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"cljs.core.async/t19316");
});})(mults,ensure_mult))
;
cljs.core.async.t19316.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19316.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19316.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19316.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19318){var self__ = this;
var _19318__$1 = this;return self__.meta19317;
});})(mults,ensure_mult))
;
cljs.core.async.t19316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19318,meta19317__$1){var self__ = this;
var _19318__$1 = this;return (new cljs.core.async.t19316(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19317__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19316 = ((function (mults,ensure_mult){
return (function __GT_t19316(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19317){return (new cljs.core.async.t19316(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19317));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19316(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13385__auto___19438 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto___19438,mults,ensure_mult,p){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto___19438,mults,ensure_mult,p){
return (function (state_19390){var state_val_19391 = (state_19390[1]);if((state_val_19391 === 1))
{var state_19390__$1 = state_19390;var statearr_19392_19439 = state_19390__$1;(statearr_19392_19439[2] = null);
(statearr_19392_19439[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 2))
{var state_19390__$1 = state_19390;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19390__$1,4,ch);
} else
{if((state_val_19391 === 3))
{var inst_19388 = (state_19390[2]);var state_19390__$1 = state_19390;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19390__$1,inst_19388);
} else
{if((state_val_19391 === 4))
{var inst_19321 = (state_19390[7]);var inst_19321__$1 = (state_19390[2]);var inst_19322 = (inst_19321__$1 == null);var state_19390__$1 = (function (){var statearr_19393 = state_19390;(statearr_19393[7] = inst_19321__$1);
return statearr_19393;
})();if(cljs.core.truth_(inst_19322))
{var statearr_19394_19440 = state_19390__$1;(statearr_19394_19440[1] = 5);
} else
{var statearr_19395_19441 = state_19390__$1;(statearr_19395_19441[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 5))
{var inst_19328 = cljs.core.deref.call(null,mults);var inst_19329 = cljs.core.vals.call(null,inst_19328);var inst_19330 = cljs.core.seq.call(null,inst_19329);var inst_19331 = inst_19330;var inst_19332 = null;var inst_19333 = 0;var inst_19334 = 0;var state_19390__$1 = (function (){var statearr_19396 = state_19390;(statearr_19396[8] = inst_19332);
(statearr_19396[9] = inst_19331);
(statearr_19396[10] = inst_19334);
(statearr_19396[11] = inst_19333);
return statearr_19396;
})();var statearr_19397_19442 = state_19390__$1;(statearr_19397_19442[2] = null);
(statearr_19397_19442[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 6))
{var inst_19371 = (state_19390[12]);var inst_19369 = (state_19390[13]);var inst_19321 = (state_19390[7]);var inst_19369__$1 = topic_fn.call(null,inst_19321);var inst_19370 = cljs.core.deref.call(null,mults);var inst_19371__$1 = cljs.core.get.call(null,inst_19370,inst_19369__$1);var state_19390__$1 = (function (){var statearr_19398 = state_19390;(statearr_19398[12] = inst_19371__$1);
(statearr_19398[13] = inst_19369__$1);
return statearr_19398;
})();if(cljs.core.truth_(inst_19371__$1))
{var statearr_19399_19443 = state_19390__$1;(statearr_19399_19443[1] = 19);
} else
{var statearr_19400_19444 = state_19390__$1;(statearr_19400_19444[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 7))
{var inst_19386 = (state_19390[2]);var state_19390__$1 = state_19390;var statearr_19401_19445 = state_19390__$1;(statearr_19401_19445[2] = inst_19386);
(statearr_19401_19445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 8))
{var inst_19334 = (state_19390[10]);var inst_19333 = (state_19390[11]);var inst_19336 = (inst_19334 < inst_19333);var inst_19337 = inst_19336;var state_19390__$1 = state_19390;if(cljs.core.truth_(inst_19337))
{var statearr_19405_19446 = state_19390__$1;(statearr_19405_19446[1] = 10);
} else
{var statearr_19406_19447 = state_19390__$1;(statearr_19406_19447[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 9))
{var inst_19367 = (state_19390[2]);var state_19390__$1 = state_19390;var statearr_19407_19448 = state_19390__$1;(statearr_19407_19448[2] = inst_19367);
(statearr_19407_19448[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 10))
{var inst_19332 = (state_19390[8]);var inst_19331 = (state_19390[9]);var inst_19334 = (state_19390[10]);var inst_19333 = (state_19390[11]);var inst_19339 = cljs.core._nth.call(null,inst_19332,inst_19334);var inst_19340 = cljs.core.async.muxch_STAR_.call(null,inst_19339);var inst_19341 = cljs.core.async.close_BANG_.call(null,inst_19340);var inst_19342 = (inst_19334 + 1);var tmp19402 = inst_19332;var tmp19403 = inst_19331;var tmp19404 = inst_19333;var inst_19331__$1 = tmp19403;var inst_19332__$1 = tmp19402;var inst_19333__$1 = tmp19404;var inst_19334__$1 = inst_19342;var state_19390__$1 = (function (){var statearr_19408 = state_19390;(statearr_19408[8] = inst_19332__$1);
(statearr_19408[9] = inst_19331__$1);
(statearr_19408[10] = inst_19334__$1);
(statearr_19408[11] = inst_19333__$1);
(statearr_19408[14] = inst_19341);
return statearr_19408;
})();var statearr_19409_19449 = state_19390__$1;(statearr_19409_19449[2] = null);
(statearr_19409_19449[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 11))
{var inst_19331 = (state_19390[9]);var inst_19345 = (state_19390[15]);var inst_19345__$1 = cljs.core.seq.call(null,inst_19331);var state_19390__$1 = (function (){var statearr_19410 = state_19390;(statearr_19410[15] = inst_19345__$1);
return statearr_19410;
})();if(inst_19345__$1)
{var statearr_19411_19450 = state_19390__$1;(statearr_19411_19450[1] = 13);
} else
{var statearr_19412_19451 = state_19390__$1;(statearr_19412_19451[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 12))
{var inst_19365 = (state_19390[2]);var state_19390__$1 = state_19390;var statearr_19413_19452 = state_19390__$1;(statearr_19413_19452[2] = inst_19365);
(statearr_19413_19452[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 13))
{var inst_19345 = (state_19390[15]);var inst_19347 = cljs.core.chunked_seq_QMARK_.call(null,inst_19345);var state_19390__$1 = state_19390;if(inst_19347)
{var statearr_19414_19453 = state_19390__$1;(statearr_19414_19453[1] = 16);
} else
{var statearr_19415_19454 = state_19390__$1;(statearr_19415_19454[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 14))
{var state_19390__$1 = state_19390;var statearr_19416_19455 = state_19390__$1;(statearr_19416_19455[2] = null);
(statearr_19416_19455[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 15))
{var inst_19363 = (state_19390[2]);var state_19390__$1 = state_19390;var statearr_19417_19456 = state_19390__$1;(statearr_19417_19456[2] = inst_19363);
(statearr_19417_19456[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 16))
{var inst_19345 = (state_19390[15]);var inst_19349 = cljs.core.chunk_first.call(null,inst_19345);var inst_19350 = cljs.core.chunk_rest.call(null,inst_19345);var inst_19351 = cljs.core.count.call(null,inst_19349);var inst_19331 = inst_19350;var inst_19332 = inst_19349;var inst_19333 = inst_19351;var inst_19334 = 0;var state_19390__$1 = (function (){var statearr_19418 = state_19390;(statearr_19418[8] = inst_19332);
(statearr_19418[9] = inst_19331);
(statearr_19418[10] = inst_19334);
(statearr_19418[11] = inst_19333);
return statearr_19418;
})();var statearr_19419_19457 = state_19390__$1;(statearr_19419_19457[2] = null);
(statearr_19419_19457[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 17))
{var inst_19345 = (state_19390[15]);var inst_19354 = cljs.core.first.call(null,inst_19345);var inst_19355 = cljs.core.async.muxch_STAR_.call(null,inst_19354);var inst_19356 = cljs.core.async.close_BANG_.call(null,inst_19355);var inst_19357 = cljs.core.next.call(null,inst_19345);var inst_19331 = inst_19357;var inst_19332 = null;var inst_19333 = 0;var inst_19334 = 0;var state_19390__$1 = (function (){var statearr_19420 = state_19390;(statearr_19420[8] = inst_19332);
(statearr_19420[9] = inst_19331);
(statearr_19420[10] = inst_19334);
(statearr_19420[11] = inst_19333);
(statearr_19420[16] = inst_19356);
return statearr_19420;
})();var statearr_19421_19458 = state_19390__$1;(statearr_19421_19458[2] = null);
(statearr_19421_19458[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 18))
{var inst_19360 = (state_19390[2]);var state_19390__$1 = state_19390;var statearr_19422_19459 = state_19390__$1;(statearr_19422_19459[2] = inst_19360);
(statearr_19422_19459[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 19))
{var inst_19371 = (state_19390[12]);var inst_19321 = (state_19390[7]);var inst_19373 = cljs.core.async.muxch_STAR_.call(null,inst_19371);var state_19390__$1 = state_19390;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19390__$1,22,inst_19373,inst_19321);
} else
{if((state_val_19391 === 20))
{var state_19390__$1 = state_19390;var statearr_19423_19460 = state_19390__$1;(statearr_19423_19460[2] = null);
(statearr_19423_19460[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 21))
{var inst_19383 = (state_19390[2]);var state_19390__$1 = (function (){var statearr_19424 = state_19390;(statearr_19424[17] = inst_19383);
return statearr_19424;
})();var statearr_19425_19461 = state_19390__$1;(statearr_19425_19461[2] = null);
(statearr_19425_19461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 22))
{var inst_19375 = (state_19390[2]);var state_19390__$1 = state_19390;if(cljs.core.truth_(inst_19375))
{var statearr_19426_19462 = state_19390__$1;(statearr_19426_19462[1] = 23);
} else
{var statearr_19427_19463 = state_19390__$1;(statearr_19427_19463[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 23))
{var state_19390__$1 = state_19390;var statearr_19428_19464 = state_19390__$1;(statearr_19428_19464[2] = null);
(statearr_19428_19464[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 24))
{var inst_19369 = (state_19390[13]);var inst_19378 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19369);var state_19390__$1 = state_19390;var statearr_19429_19465 = state_19390__$1;(statearr_19429_19465[2] = inst_19378);
(statearr_19429_19465[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19391 === 25))
{var inst_19380 = (state_19390[2]);var state_19390__$1 = state_19390;var statearr_19430_19466 = state_19390__$1;(statearr_19430_19466[2] = inst_19380);
(statearr_19430_19466[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto___19438,mults,ensure_mult,p))
;return ((function (switch__13314__auto__,c__13385__auto___19438,mults,ensure_mult,p){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_19434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19434[0] = state_machine__13315__auto__);
(statearr_19434[1] = 1);
return statearr_19434;
});
var state_machine__13315__auto____1 = (function (state_19390){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_19390);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e19435){if((e19435 instanceof Object))
{var ex__13318__auto__ = e19435;var statearr_19436_19467 = state_19390;(statearr_19436_19467[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19390);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19468 = state_19390;
state_19390 = G__19468;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_19390){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_19390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto___19438,mults,ensure_mult,p))
})();var state__13387__auto__ = (function (){var statearr_19437 = f__13386__auto__.call(null);(statearr_19437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto___19438);
return statearr_19437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto___19438,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__13385__auto___19605 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto___19605,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto___19605,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19575){var state_val_19576 = (state_19575[1]);if((state_val_19576 === 1))
{var state_19575__$1 = state_19575;var statearr_19577_19606 = state_19575__$1;(statearr_19577_19606[2] = null);
(statearr_19577_19606[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19576 === 2))
{var inst_19538 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_19539 = 0;var state_19575__$1 = (function (){var statearr_19578 = state_19575;(statearr_19578[7] = inst_19539);
(statearr_19578[8] = inst_19538);
return statearr_19578;
})();var statearr_19579_19607 = state_19575__$1;(statearr_19579_19607[2] = null);
(statearr_19579_19607[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19576 === 3))
{var inst_19573 = (state_19575[2]);var state_19575__$1 = state_19575;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19575__$1,inst_19573);
} else
{if((state_val_19576 === 4))
{var inst_19539 = (state_19575[7]);var inst_19541 = (inst_19539 < cnt);var state_19575__$1 = state_19575;if(cljs.core.truth_(inst_19541))
{var statearr_19580_19608 = state_19575__$1;(statearr_19580_19608[1] = 6);
} else
{var statearr_19581_19609 = state_19575__$1;(statearr_19581_19609[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19576 === 5))
{var inst_19559 = (state_19575[2]);var state_19575__$1 = (function (){var statearr_19582 = state_19575;(statearr_19582[9] = inst_19559);
return statearr_19582;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19575__$1,12,dchan);
} else
{if((state_val_19576 === 6))
{var state_19575__$1 = state_19575;var statearr_19583_19610 = state_19575__$1;(statearr_19583_19610[2] = null);
(statearr_19583_19610[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19576 === 7))
{var state_19575__$1 = state_19575;var statearr_19584_19611 = state_19575__$1;(statearr_19584_19611[2] = null);
(statearr_19584_19611[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19576 === 8))
{var inst_19557 = (state_19575[2]);var state_19575__$1 = state_19575;var statearr_19585_19612 = state_19575__$1;(statearr_19585_19612[2] = inst_19557);
(statearr_19585_19612[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19576 === 9))
{var inst_19539 = (state_19575[7]);var inst_19552 = (state_19575[2]);var inst_19553 = (inst_19539 + 1);var inst_19539__$1 = inst_19553;var state_19575__$1 = (function (){var statearr_19586 = state_19575;(statearr_19586[7] = inst_19539__$1);
(statearr_19586[10] = inst_19552);
return statearr_19586;
})();var statearr_19587_19613 = state_19575__$1;(statearr_19587_19613[2] = null);
(statearr_19587_19613[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19576 === 10))
{var inst_19543 = (state_19575[2]);var inst_19544 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_19575__$1 = (function (){var statearr_19588 = state_19575;(statearr_19588[11] = inst_19543);
return statearr_19588;
})();var statearr_19589_19614 = state_19575__$1;(statearr_19589_19614[2] = inst_19544);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19575__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19576 === 11))
{var inst_19539 = (state_19575[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19575,10,Object,null,9);var inst_19548 = chs__$1.call(null,inst_19539);var inst_19549 = done.call(null,inst_19539);var inst_19550 = cljs.core.async.take_BANG_.call(null,inst_19548,inst_19549);var state_19575__$1 = state_19575;var statearr_19590_19615 = state_19575__$1;(statearr_19590_19615[2] = inst_19550);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19575__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19576 === 12))
{var inst_19561 = (state_19575[12]);var inst_19561__$1 = (state_19575[2]);var inst_19562 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19561__$1);var state_19575__$1 = (function (){var statearr_19591 = state_19575;(statearr_19591[12] = inst_19561__$1);
return statearr_19591;
})();if(cljs.core.truth_(inst_19562))
{var statearr_19592_19616 = state_19575__$1;(statearr_19592_19616[1] = 13);
} else
{var statearr_19593_19617 = state_19575__$1;(statearr_19593_19617[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19576 === 13))
{var inst_19564 = cljs.core.async.close_BANG_.call(null,out);var state_19575__$1 = state_19575;var statearr_19594_19618 = state_19575__$1;(statearr_19594_19618[2] = inst_19564);
(statearr_19594_19618[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19576 === 14))
{var inst_19561 = (state_19575[12]);var inst_19566 = cljs.core.apply.call(null,f,inst_19561);var state_19575__$1 = state_19575;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19575__$1,16,out,inst_19566);
} else
{if((state_val_19576 === 15))
{var inst_19571 = (state_19575[2]);var state_19575__$1 = state_19575;var statearr_19595_19619 = state_19575__$1;(statearr_19595_19619[2] = inst_19571);
(statearr_19595_19619[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19576 === 16))
{var inst_19568 = (state_19575[2]);var state_19575__$1 = (function (){var statearr_19596 = state_19575;(statearr_19596[13] = inst_19568);
return statearr_19596;
})();var statearr_19597_19620 = state_19575__$1;(statearr_19597_19620[2] = null);
(statearr_19597_19620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto___19605,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13314__auto__,c__13385__auto___19605,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_19601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19601[0] = state_machine__13315__auto__);
(statearr_19601[1] = 1);
return statearr_19601;
});
var state_machine__13315__auto____1 = (function (state_19575){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_19575);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e19602){if((e19602 instanceof Object))
{var ex__13318__auto__ = e19602;var statearr_19603_19621 = state_19575;(statearr_19603_19621[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19575);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19622 = state_19575;
state_19575 = G__19622;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_19575){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_19575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto___19605,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13387__auto__ = (function (){var statearr_19604 = f__13386__auto__.call(null);(statearr_19604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto___19605);
return statearr_19604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto___19605,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13385__auto___19730 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto___19730,out){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto___19730,out){
return (function (state_19706){var state_val_19707 = (state_19706[1]);if((state_val_19707 === 1))
{var inst_19677 = cljs.core.vec.call(null,chs);var inst_19678 = inst_19677;var state_19706__$1 = (function (){var statearr_19708 = state_19706;(statearr_19708[7] = inst_19678);
return statearr_19708;
})();var statearr_19709_19731 = state_19706__$1;(statearr_19709_19731[2] = null);
(statearr_19709_19731[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19707 === 2))
{var inst_19678 = (state_19706[7]);var inst_19680 = cljs.core.count.call(null,inst_19678);var inst_19681 = (inst_19680 > 0);var state_19706__$1 = state_19706;if(cljs.core.truth_(inst_19681))
{var statearr_19710_19732 = state_19706__$1;(statearr_19710_19732[1] = 4);
} else
{var statearr_19711_19733 = state_19706__$1;(statearr_19711_19733[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19707 === 3))
{var inst_19704 = (state_19706[2]);var state_19706__$1 = state_19706;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19706__$1,inst_19704);
} else
{if((state_val_19707 === 4))
{var inst_19678 = (state_19706[7]);var state_19706__$1 = state_19706;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19706__$1,7,inst_19678);
} else
{if((state_val_19707 === 5))
{var inst_19700 = cljs.core.async.close_BANG_.call(null,out);var state_19706__$1 = state_19706;var statearr_19712_19734 = state_19706__$1;(statearr_19712_19734[2] = inst_19700);
(statearr_19712_19734[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19707 === 6))
{var inst_19702 = (state_19706[2]);var state_19706__$1 = state_19706;var statearr_19713_19735 = state_19706__$1;(statearr_19713_19735[2] = inst_19702);
(statearr_19713_19735[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19707 === 7))
{var inst_19686 = (state_19706[8]);var inst_19685 = (state_19706[9]);var inst_19685__$1 = (state_19706[2]);var inst_19686__$1 = cljs.core.nth.call(null,inst_19685__$1,0,null);var inst_19687 = cljs.core.nth.call(null,inst_19685__$1,1,null);var inst_19688 = (inst_19686__$1 == null);var state_19706__$1 = (function (){var statearr_19714 = state_19706;(statearr_19714[10] = inst_19687);
(statearr_19714[8] = inst_19686__$1);
(statearr_19714[9] = inst_19685__$1);
return statearr_19714;
})();if(cljs.core.truth_(inst_19688))
{var statearr_19715_19736 = state_19706__$1;(statearr_19715_19736[1] = 8);
} else
{var statearr_19716_19737 = state_19706__$1;(statearr_19716_19737[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19707 === 8))
{var inst_19678 = (state_19706[7]);var inst_19687 = (state_19706[10]);var inst_19686 = (state_19706[8]);var inst_19685 = (state_19706[9]);var inst_19690 = (function (){var c = inst_19687;var v = inst_19686;var vec__19683 = inst_19685;var cs = inst_19678;return ((function (c,v,vec__19683,cs,inst_19678,inst_19687,inst_19686,inst_19685,state_val_19707,c__13385__auto___19730,out){
return (function (p1__19623_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__19623_SHARP_);
});
;})(c,v,vec__19683,cs,inst_19678,inst_19687,inst_19686,inst_19685,state_val_19707,c__13385__auto___19730,out))
})();var inst_19691 = cljs.core.filterv.call(null,inst_19690,inst_19678);var inst_19678__$1 = inst_19691;var state_19706__$1 = (function (){var statearr_19717 = state_19706;(statearr_19717[7] = inst_19678__$1);
return statearr_19717;
})();var statearr_19718_19738 = state_19706__$1;(statearr_19718_19738[2] = null);
(statearr_19718_19738[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19707 === 9))
{var inst_19686 = (state_19706[8]);var state_19706__$1 = state_19706;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19706__$1,11,out,inst_19686);
} else
{if((state_val_19707 === 10))
{var inst_19698 = (state_19706[2]);var state_19706__$1 = state_19706;var statearr_19720_19739 = state_19706__$1;(statearr_19720_19739[2] = inst_19698);
(statearr_19720_19739[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19707 === 11))
{var inst_19678 = (state_19706[7]);var inst_19695 = (state_19706[2]);var tmp19719 = inst_19678;var inst_19678__$1 = tmp19719;var state_19706__$1 = (function (){var statearr_19721 = state_19706;(statearr_19721[11] = inst_19695);
(statearr_19721[7] = inst_19678__$1);
return statearr_19721;
})();var statearr_19722_19740 = state_19706__$1;(statearr_19722_19740[2] = null);
(statearr_19722_19740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto___19730,out))
;return ((function (switch__13314__auto__,c__13385__auto___19730,out){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_19726 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19726[0] = state_machine__13315__auto__);
(statearr_19726[1] = 1);
return statearr_19726;
});
var state_machine__13315__auto____1 = (function (state_19706){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_19706);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e19727){if((e19727 instanceof Object))
{var ex__13318__auto__ = e19727;var statearr_19728_19741 = state_19706;(statearr_19728_19741[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19706);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19727;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19742 = state_19706;
state_19706 = G__19742;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_19706){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_19706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto___19730,out))
})();var state__13387__auto__ = (function (){var statearr_19729 = f__13386__auto__.call(null);(statearr_19729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto___19730);
return statearr_19729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto___19730,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13385__auto___19835 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto___19835,out){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto___19835,out){
return (function (state_19812){var state_val_19813 = (state_19812[1]);if((state_val_19813 === 1))
{var inst_19789 = 0;var state_19812__$1 = (function (){var statearr_19814 = state_19812;(statearr_19814[7] = inst_19789);
return statearr_19814;
})();var statearr_19815_19836 = state_19812__$1;(statearr_19815_19836[2] = null);
(statearr_19815_19836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19813 === 2))
{var inst_19789 = (state_19812[7]);var inst_19791 = (inst_19789 < n);var state_19812__$1 = state_19812;if(cljs.core.truth_(inst_19791))
{var statearr_19816_19837 = state_19812__$1;(statearr_19816_19837[1] = 4);
} else
{var statearr_19817_19838 = state_19812__$1;(statearr_19817_19838[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19813 === 3))
{var inst_19809 = (state_19812[2]);var inst_19810 = cljs.core.async.close_BANG_.call(null,out);var state_19812__$1 = (function (){var statearr_19818 = state_19812;(statearr_19818[8] = inst_19809);
return statearr_19818;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19812__$1,inst_19810);
} else
{if((state_val_19813 === 4))
{var state_19812__$1 = state_19812;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19812__$1,7,ch);
} else
{if((state_val_19813 === 5))
{var state_19812__$1 = state_19812;var statearr_19819_19839 = state_19812__$1;(statearr_19819_19839[2] = null);
(statearr_19819_19839[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19813 === 6))
{var inst_19807 = (state_19812[2]);var state_19812__$1 = state_19812;var statearr_19820_19840 = state_19812__$1;(statearr_19820_19840[2] = inst_19807);
(statearr_19820_19840[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19813 === 7))
{var inst_19794 = (state_19812[9]);var inst_19794__$1 = (state_19812[2]);var inst_19795 = (inst_19794__$1 == null);var inst_19796 = cljs.core.not.call(null,inst_19795);var state_19812__$1 = (function (){var statearr_19821 = state_19812;(statearr_19821[9] = inst_19794__$1);
return statearr_19821;
})();if(inst_19796)
{var statearr_19822_19841 = state_19812__$1;(statearr_19822_19841[1] = 8);
} else
{var statearr_19823_19842 = state_19812__$1;(statearr_19823_19842[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19813 === 8))
{var inst_19794 = (state_19812[9]);var state_19812__$1 = state_19812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19812__$1,11,out,inst_19794);
} else
{if((state_val_19813 === 9))
{var state_19812__$1 = state_19812;var statearr_19824_19843 = state_19812__$1;(statearr_19824_19843[2] = null);
(statearr_19824_19843[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19813 === 10))
{var inst_19804 = (state_19812[2]);var state_19812__$1 = state_19812;var statearr_19825_19844 = state_19812__$1;(statearr_19825_19844[2] = inst_19804);
(statearr_19825_19844[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19813 === 11))
{var inst_19789 = (state_19812[7]);var inst_19799 = (state_19812[2]);var inst_19800 = (inst_19789 + 1);var inst_19789__$1 = inst_19800;var state_19812__$1 = (function (){var statearr_19826 = state_19812;(statearr_19826[7] = inst_19789__$1);
(statearr_19826[10] = inst_19799);
return statearr_19826;
})();var statearr_19827_19845 = state_19812__$1;(statearr_19827_19845[2] = null);
(statearr_19827_19845[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto___19835,out))
;return ((function (switch__13314__auto__,c__13385__auto___19835,out){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_19831 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19831[0] = state_machine__13315__auto__);
(statearr_19831[1] = 1);
return statearr_19831;
});
var state_machine__13315__auto____1 = (function (state_19812){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_19812);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e19832){if((e19832 instanceof Object))
{var ex__13318__auto__ = e19832;var statearr_19833_19846 = state_19812;(statearr_19833_19846[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19812);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19847 = state_19812;
state_19812 = G__19847;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_19812){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_19812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto___19835,out))
})();var state__13387__auto__ = (function (){var statearr_19834 = f__13386__auto__.call(null);(statearr_19834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto___19835);
return statearr_19834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto___19835,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13385__auto___19944 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto___19944,out){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto___19944,out){
return (function (state_19919){var state_val_19920 = (state_19919[1]);if((state_val_19920 === 1))
{var inst_19896 = null;var state_19919__$1 = (function (){var statearr_19921 = state_19919;(statearr_19921[7] = inst_19896);
return statearr_19921;
})();var statearr_19922_19945 = state_19919__$1;(statearr_19922_19945[2] = null);
(statearr_19922_19945[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19920 === 2))
{var state_19919__$1 = state_19919;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19919__$1,4,ch);
} else
{if((state_val_19920 === 3))
{var inst_19916 = (state_19919[2]);var inst_19917 = cljs.core.async.close_BANG_.call(null,out);var state_19919__$1 = (function (){var statearr_19923 = state_19919;(statearr_19923[8] = inst_19916);
return statearr_19923;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19919__$1,inst_19917);
} else
{if((state_val_19920 === 4))
{var inst_19899 = (state_19919[9]);var inst_19899__$1 = (state_19919[2]);var inst_19900 = (inst_19899__$1 == null);var inst_19901 = cljs.core.not.call(null,inst_19900);var state_19919__$1 = (function (){var statearr_19924 = state_19919;(statearr_19924[9] = inst_19899__$1);
return statearr_19924;
})();if(inst_19901)
{var statearr_19925_19946 = state_19919__$1;(statearr_19925_19946[1] = 5);
} else
{var statearr_19926_19947 = state_19919__$1;(statearr_19926_19947[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19920 === 5))
{var inst_19899 = (state_19919[9]);var inst_19896 = (state_19919[7]);var inst_19903 = cljs.core._EQ_.call(null,inst_19899,inst_19896);var state_19919__$1 = state_19919;if(inst_19903)
{var statearr_19927_19948 = state_19919__$1;(statearr_19927_19948[1] = 8);
} else
{var statearr_19928_19949 = state_19919__$1;(statearr_19928_19949[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19920 === 6))
{var state_19919__$1 = state_19919;var statearr_19930_19950 = state_19919__$1;(statearr_19930_19950[2] = null);
(statearr_19930_19950[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19920 === 7))
{var inst_19914 = (state_19919[2]);var state_19919__$1 = state_19919;var statearr_19931_19951 = state_19919__$1;(statearr_19931_19951[2] = inst_19914);
(statearr_19931_19951[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19920 === 8))
{var inst_19896 = (state_19919[7]);var tmp19929 = inst_19896;var inst_19896__$1 = tmp19929;var state_19919__$1 = (function (){var statearr_19932 = state_19919;(statearr_19932[7] = inst_19896__$1);
return statearr_19932;
})();var statearr_19933_19952 = state_19919__$1;(statearr_19933_19952[2] = null);
(statearr_19933_19952[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19920 === 9))
{var inst_19899 = (state_19919[9]);var state_19919__$1 = state_19919;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19919__$1,11,out,inst_19899);
} else
{if((state_val_19920 === 10))
{var inst_19911 = (state_19919[2]);var state_19919__$1 = state_19919;var statearr_19934_19953 = state_19919__$1;(statearr_19934_19953[2] = inst_19911);
(statearr_19934_19953[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19920 === 11))
{var inst_19899 = (state_19919[9]);var inst_19908 = (state_19919[2]);var inst_19896 = inst_19899;var state_19919__$1 = (function (){var statearr_19935 = state_19919;(statearr_19935[10] = inst_19908);
(statearr_19935[7] = inst_19896);
return statearr_19935;
})();var statearr_19936_19954 = state_19919__$1;(statearr_19936_19954[2] = null);
(statearr_19936_19954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto___19944,out))
;return ((function (switch__13314__auto__,c__13385__auto___19944,out){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_19940 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19940[0] = state_machine__13315__auto__);
(statearr_19940[1] = 1);
return statearr_19940;
});
var state_machine__13315__auto____1 = (function (state_19919){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_19919);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e19941){if((e19941 instanceof Object))
{var ex__13318__auto__ = e19941;var statearr_19942_19955 = state_19919;(statearr_19942_19955[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19919);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19941;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19956 = state_19919;
state_19919 = G__19956;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_19919){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_19919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto___19944,out))
})();var state__13387__auto__ = (function (){var statearr_19943 = f__13386__auto__.call(null);(statearr_19943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto___19944);
return statearr_19943;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto___19944,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13385__auto___20091 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto___20091,out){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto___20091,out){
return (function (state_20061){var state_val_20062 = (state_20061[1]);if((state_val_20062 === 1))
{var inst_20024 = (new Array(n));var inst_20025 = inst_20024;var inst_20026 = 0;var state_20061__$1 = (function (){var statearr_20063 = state_20061;(statearr_20063[7] = inst_20025);
(statearr_20063[8] = inst_20026);
return statearr_20063;
})();var statearr_20064_20092 = state_20061__$1;(statearr_20064_20092[2] = null);
(statearr_20064_20092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20062 === 2))
{var state_20061__$1 = state_20061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20061__$1,4,ch);
} else
{if((state_val_20062 === 3))
{var inst_20059 = (state_20061[2]);var state_20061__$1 = state_20061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20061__$1,inst_20059);
} else
{if((state_val_20062 === 4))
{var inst_20029 = (state_20061[9]);var inst_20029__$1 = (state_20061[2]);var inst_20030 = (inst_20029__$1 == null);var inst_20031 = cljs.core.not.call(null,inst_20030);var state_20061__$1 = (function (){var statearr_20065 = state_20061;(statearr_20065[9] = inst_20029__$1);
return statearr_20065;
})();if(inst_20031)
{var statearr_20066_20093 = state_20061__$1;(statearr_20066_20093[1] = 5);
} else
{var statearr_20067_20094 = state_20061__$1;(statearr_20067_20094[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20062 === 5))
{var inst_20029 = (state_20061[9]);var inst_20025 = (state_20061[7]);var inst_20034 = (state_20061[10]);var inst_20026 = (state_20061[8]);var inst_20033 = (inst_20025[inst_20026] = inst_20029);var inst_20034__$1 = (inst_20026 + 1);var inst_20035 = (inst_20034__$1 < n);var state_20061__$1 = (function (){var statearr_20068 = state_20061;(statearr_20068[10] = inst_20034__$1);
(statearr_20068[11] = inst_20033);
return statearr_20068;
})();if(cljs.core.truth_(inst_20035))
{var statearr_20069_20095 = state_20061__$1;(statearr_20069_20095[1] = 8);
} else
{var statearr_20070_20096 = state_20061__$1;(statearr_20070_20096[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20062 === 6))
{var inst_20026 = (state_20061[8]);var inst_20047 = (inst_20026 > 0);var state_20061__$1 = state_20061;if(cljs.core.truth_(inst_20047))
{var statearr_20072_20097 = state_20061__$1;(statearr_20072_20097[1] = 12);
} else
{var statearr_20073_20098 = state_20061__$1;(statearr_20073_20098[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20062 === 7))
{var inst_20057 = (state_20061[2]);var state_20061__$1 = state_20061;var statearr_20074_20099 = state_20061__$1;(statearr_20074_20099[2] = inst_20057);
(statearr_20074_20099[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20062 === 8))
{var inst_20025 = (state_20061[7]);var inst_20034 = (state_20061[10]);var tmp20071 = inst_20025;var inst_20025__$1 = tmp20071;var inst_20026 = inst_20034;var state_20061__$1 = (function (){var statearr_20075 = state_20061;(statearr_20075[7] = inst_20025__$1);
(statearr_20075[8] = inst_20026);
return statearr_20075;
})();var statearr_20076_20100 = state_20061__$1;(statearr_20076_20100[2] = null);
(statearr_20076_20100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20062 === 9))
{var inst_20025 = (state_20061[7]);var inst_20039 = cljs.core.vec.call(null,inst_20025);var state_20061__$1 = state_20061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20061__$1,11,out,inst_20039);
} else
{if((state_val_20062 === 10))
{var inst_20045 = (state_20061[2]);var state_20061__$1 = state_20061;var statearr_20077_20101 = state_20061__$1;(statearr_20077_20101[2] = inst_20045);
(statearr_20077_20101[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20062 === 11))
{var inst_20041 = (state_20061[2]);var inst_20042 = (new Array(n));var inst_20025 = inst_20042;var inst_20026 = 0;var state_20061__$1 = (function (){var statearr_20078 = state_20061;(statearr_20078[12] = inst_20041);
(statearr_20078[7] = inst_20025);
(statearr_20078[8] = inst_20026);
return statearr_20078;
})();var statearr_20079_20102 = state_20061__$1;(statearr_20079_20102[2] = null);
(statearr_20079_20102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20062 === 12))
{var inst_20025 = (state_20061[7]);var inst_20049 = cljs.core.vec.call(null,inst_20025);var state_20061__$1 = state_20061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20061__$1,15,out,inst_20049);
} else
{if((state_val_20062 === 13))
{var state_20061__$1 = state_20061;var statearr_20080_20103 = state_20061__$1;(statearr_20080_20103[2] = null);
(statearr_20080_20103[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20062 === 14))
{var inst_20054 = (state_20061[2]);var inst_20055 = cljs.core.async.close_BANG_.call(null,out);var state_20061__$1 = (function (){var statearr_20081 = state_20061;(statearr_20081[13] = inst_20054);
return statearr_20081;
})();var statearr_20082_20104 = state_20061__$1;(statearr_20082_20104[2] = inst_20055);
(statearr_20082_20104[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20062 === 15))
{var inst_20051 = (state_20061[2]);var state_20061__$1 = state_20061;var statearr_20083_20105 = state_20061__$1;(statearr_20083_20105[2] = inst_20051);
(statearr_20083_20105[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto___20091,out))
;return ((function (switch__13314__auto__,c__13385__auto___20091,out){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_20087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20087[0] = state_machine__13315__auto__);
(statearr_20087[1] = 1);
return statearr_20087;
});
var state_machine__13315__auto____1 = (function (state_20061){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_20061);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e20088){if((e20088 instanceof Object))
{var ex__13318__auto__ = e20088;var statearr_20089_20106 = state_20061;(statearr_20089_20106[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20061);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20107 = state_20061;
state_20061 = G__20107;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_20061){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_20061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto___20091,out))
})();var state__13387__auto__ = (function (){var statearr_20090 = f__13386__auto__.call(null);(statearr_20090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto___20091);
return statearr_20090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto___20091,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13385__auto___20250 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto___20250,out){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto___20250,out){
return (function (state_20220){var state_val_20221 = (state_20220[1]);if((state_val_20221 === 1))
{var inst_20179 = [];var inst_20180 = inst_20179;var inst_20181 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_20220__$1 = (function (){var statearr_20222 = state_20220;(statearr_20222[7] = inst_20181);
(statearr_20222[8] = inst_20180);
return statearr_20222;
})();var statearr_20223_20251 = state_20220__$1;(statearr_20223_20251[2] = null);
(statearr_20223_20251[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20221 === 2))
{var state_20220__$1 = state_20220;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20220__$1,4,ch);
} else
{if((state_val_20221 === 3))
{var inst_20218 = (state_20220[2]);var state_20220__$1 = state_20220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20220__$1,inst_20218);
} else
{if((state_val_20221 === 4))
{var inst_20184 = (state_20220[9]);var inst_20184__$1 = (state_20220[2]);var inst_20185 = (inst_20184__$1 == null);var inst_20186 = cljs.core.not.call(null,inst_20185);var state_20220__$1 = (function (){var statearr_20224 = state_20220;(statearr_20224[9] = inst_20184__$1);
return statearr_20224;
})();if(inst_20186)
{var statearr_20225_20252 = state_20220__$1;(statearr_20225_20252[1] = 5);
} else
{var statearr_20226_20253 = state_20220__$1;(statearr_20226_20253[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20221 === 5))
{var inst_20184 = (state_20220[9]);var inst_20181 = (state_20220[7]);var inst_20188 = (state_20220[10]);var inst_20188__$1 = f.call(null,inst_20184);var inst_20189 = cljs.core._EQ_.call(null,inst_20188__$1,inst_20181);var inst_20190 = cljs.core.keyword_identical_QMARK_.call(null,inst_20181,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_20191 = (inst_20189) || (inst_20190);var state_20220__$1 = (function (){var statearr_20227 = state_20220;(statearr_20227[10] = inst_20188__$1);
return statearr_20227;
})();if(cljs.core.truth_(inst_20191))
{var statearr_20228_20254 = state_20220__$1;(statearr_20228_20254[1] = 8);
} else
{var statearr_20229_20255 = state_20220__$1;(statearr_20229_20255[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20221 === 6))
{var inst_20180 = (state_20220[8]);var inst_20205 = inst_20180.length;var inst_20206 = (inst_20205 > 0);var state_20220__$1 = state_20220;if(cljs.core.truth_(inst_20206))
{var statearr_20231_20256 = state_20220__$1;(statearr_20231_20256[1] = 12);
} else
{var statearr_20232_20257 = state_20220__$1;(statearr_20232_20257[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20221 === 7))
{var inst_20216 = (state_20220[2]);var state_20220__$1 = state_20220;var statearr_20233_20258 = state_20220__$1;(statearr_20233_20258[2] = inst_20216);
(statearr_20233_20258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20221 === 8))
{var inst_20184 = (state_20220[9]);var inst_20180 = (state_20220[8]);var inst_20188 = (state_20220[10]);var inst_20193 = inst_20180.push(inst_20184);var tmp20230 = inst_20180;var inst_20180__$1 = tmp20230;var inst_20181 = inst_20188;var state_20220__$1 = (function (){var statearr_20234 = state_20220;(statearr_20234[7] = inst_20181);
(statearr_20234[8] = inst_20180__$1);
(statearr_20234[11] = inst_20193);
return statearr_20234;
})();var statearr_20235_20259 = state_20220__$1;(statearr_20235_20259[2] = null);
(statearr_20235_20259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20221 === 9))
{var inst_20180 = (state_20220[8]);var inst_20196 = cljs.core.vec.call(null,inst_20180);var state_20220__$1 = state_20220;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20220__$1,11,out,inst_20196);
} else
{if((state_val_20221 === 10))
{var inst_20203 = (state_20220[2]);var state_20220__$1 = state_20220;var statearr_20236_20260 = state_20220__$1;(statearr_20236_20260[2] = inst_20203);
(statearr_20236_20260[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20221 === 11))
{var inst_20184 = (state_20220[9]);var inst_20188 = (state_20220[10]);var inst_20198 = (state_20220[2]);var inst_20199 = [];var inst_20200 = inst_20199.push(inst_20184);var inst_20180 = inst_20199;var inst_20181 = inst_20188;var state_20220__$1 = (function (){var statearr_20237 = state_20220;(statearr_20237[12] = inst_20200);
(statearr_20237[13] = inst_20198);
(statearr_20237[7] = inst_20181);
(statearr_20237[8] = inst_20180);
return statearr_20237;
})();var statearr_20238_20261 = state_20220__$1;(statearr_20238_20261[2] = null);
(statearr_20238_20261[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20221 === 12))
{var inst_20180 = (state_20220[8]);var inst_20208 = cljs.core.vec.call(null,inst_20180);var state_20220__$1 = state_20220;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20220__$1,15,out,inst_20208);
} else
{if((state_val_20221 === 13))
{var state_20220__$1 = state_20220;var statearr_20239_20262 = state_20220__$1;(statearr_20239_20262[2] = null);
(statearr_20239_20262[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20221 === 14))
{var inst_20213 = (state_20220[2]);var inst_20214 = cljs.core.async.close_BANG_.call(null,out);var state_20220__$1 = (function (){var statearr_20240 = state_20220;(statearr_20240[14] = inst_20213);
return statearr_20240;
})();var statearr_20241_20263 = state_20220__$1;(statearr_20241_20263[2] = inst_20214);
(statearr_20241_20263[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20221 === 15))
{var inst_20210 = (state_20220[2]);var state_20220__$1 = state_20220;var statearr_20242_20264 = state_20220__$1;(statearr_20242_20264[2] = inst_20210);
(statearr_20242_20264[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__13385__auto___20250,out))
;return ((function (switch__13314__auto__,c__13385__auto___20250,out){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_20246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20246[0] = state_machine__13315__auto__);
(statearr_20246[1] = 1);
return statearr_20246;
});
var state_machine__13315__auto____1 = (function (state_20220){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_20220);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e20247){if((e20247 instanceof Object))
{var ex__13318__auto__ = e20247;var statearr_20248_20265 = state_20220;(statearr_20248_20265[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20220);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20247;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20266 = state_20220;
state_20220 = G__20266;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_20220){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_20220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto___20250,out))
})();var state__13387__auto__ = (function (){var statearr_20249 = f__13386__auto__.call(null);(statearr_20249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto___20250);
return statearr_20249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto___20250,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map