// Compiled by ClojureScript 0.0-2227
goog.provide('silkscreen.editor');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('silkscreen.views');
goog.require('silkscreen.app');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
silkscreen.app.load_post_ids_BANG_.call(null);
silkscreen.editor.editor_view = (function editor_view(app,owner){if(typeof silkscreen.editor.t24245 !== 'undefined')
{} else
{
/**
* @constructor
*/
silkscreen.editor.t24245 = (function (owner,app,editor_view,meta24246){
this.owner = owner;
this.app = app;
this.editor_view = editor_view;
this.meta24246 = meta24246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
silkscreen.editor.t24245.cljs$lang$type = true;
silkscreen.editor.t24245.cljs$lang$ctorStr = "silkscreen.editor/t24245";
silkscreen.editor.t24245.cljs$lang$ctorPrWriter = (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"silkscreen.editor/t24245");
});
silkscreen.editor.t24245.prototype.om$core$IRender$ = true;
silkscreen.editor.t24245.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row-fluid", "style": {"padding": "10px"}},React.DOM.span(null,React.DOM.a({"href": "/editor.html"},React.DOM.h2(null,"silkscreen :: editor")))),React.DOM.div({"className": "row-fluid"},(function (){var attrs24250 = om.core.build.call(null,silkscreen.views.post_ids_view,self__.app);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24250))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-3"], null)], null),attrs24250)):{"className": "col-md-3"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24250))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24250)], null))));
})(),(function (){var attrs24251 = om.core.build.call(null,silkscreen.views.post_editor,self__.app);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24251))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-9"], null)], null),attrs24251)):{"className": "col-md-9"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24251))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24251)], null))));
})()));
});
silkscreen.editor.t24245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24247){var self__ = this;
var _24247__$1 = this;return self__.meta24246;
});
silkscreen.editor.t24245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24247,meta24246__$1){var self__ = this;
var _24247__$1 = this;return (new silkscreen.editor.t24245(self__.owner,self__.app,self__.editor_view,meta24246__$1));
});
silkscreen.editor.__GT_t24245 = (function __GT_t24245(owner__$1,app__$1,editor_view__$1,meta24246){return (new silkscreen.editor.t24245(owner__$1,app__$1,editor_view__$1,meta24246));
});
}
return (new silkscreen.editor.t24245(owner,app,editor_view,null));
});
var tx_chan_24252 = cljs.core.async.chan.call(null);var tx_pub_chan_24253 = cljs.core.async.pub.call(null,tx_chan_24252,((function (tx_chan_24252){
return (function (_){return new cljs.core.Keyword(null,"txs","txs",1014019553);
});})(tx_chan_24252))
);om.core.root.call(null,silkscreen.editor.editor_view,silkscreen.app.editor_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("main"),new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),tx_pub_chan_24253], null),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),((function (tx_chan_24252,tx_pub_chan_24253){
return (function (tx_data,root_cursor){return cljs.core.async.put_BANG_.call(null,tx_chan_24252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_data,root_cursor], null));
});})(tx_chan_24252,tx_pub_chan_24253))
], null));
silkscreen.app.set_new_post_BANG_.call(null);

//# sourceMappingURL=editor.js.map