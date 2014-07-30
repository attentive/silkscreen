// Compiled by ClojureScript 0.0-2227
goog.provide('silkscreen.views');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('silkscreen.events');
goog.require('cljs.core.async');
goog.require('silkscreen.events');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('silkscreen.controls');
goog.require('silkscreen.app');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('silkscreen.controls');
goog.require('cljs.core.async');
silkscreen.views.post_header = (function post_header(post){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"margin-right","margin-right",4420916399),"10px"], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(post)], null)], null);
});
silkscreen.views.add_post_control = (function add_post_control(ent){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pull-right","span.pull-right",4108617002),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",1013907518),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"margin-right","margin-right",4420916399),"10px"], null)], null),"Add new post"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return silkscreen.app.dispatch_BANG_.call(null,"/post/new");
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-plus-sign","span.glyphicon.glyphicon-plus-sign",1990471149)], null)], null)], null);
});
silkscreen.views.post_editor = (function post_editor(app,owner){if(typeof silkscreen.views.t24045 !== 'undefined')
{} else
{
/**
* @constructor
*/
silkscreen.views.t24045 = (function (owner,app,post_editor,meta24046){
this.owner = owner;
this.app = app;
this.post_editor = post_editor;
this.meta24046 = meta24046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
silkscreen.views.t24045.cljs$lang$type = true;
silkscreen.views.t24045.cljs$lang$ctorStr = "silkscreen.views/t24045";
silkscreen.views.t24045.cljs$lang$ctorPrWriter = (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"silkscreen.views/t24045");
});
silkscreen.views.t24045.prototype.om$core$IRenderState$ = true;
silkscreen.views.t24045.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__24048){var self__ = this;
var map__24049 = p__24048;var map__24049__$1 = ((cljs.core.seq_QMARK_.call(null,map__24049))?cljs.core.apply.call(null,cljs.core.hash_map,map__24049):map__24049);var editing = cljs.core.get.call(null,map__24049__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var ___$1 = this;var post = cljs.core.get.call(null,self__.app,new cljs.core.Keyword(null,"post","post",1017351186));var mode = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",1017261333),0], null));if(cljs.core.not_EQ_.call(null,mode,new cljs.core.Keyword(null,"new","new",1014013202)))
{} else
{throw (new Error(("Assert failed: should not be rendering post-editor in mode :new\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",-1637144189,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null),new cljs.core.Keyword(null,"new","new",1014013202)))))));
}
if(cljs.core.truth_(post))
{document.title = new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(post);
} else
{}
return sablono.interpreter.interpret.call(null,(function (){var G__24050 = (((mode instanceof cljs.core.Keyword))?mode.fqn:null);var caseval__24055;
switch (G__24050){
case "cancelled":
caseval__24055=new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-fluid","div.row-fluid",4577216108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),silkscreen.views.post_header.call(null,post)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pull-right","span.pull-right",4108617002),om.core.build.call(null,silkscreen.controls.edit_control,self__.app)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-fluid","div.row-fluid",4577216108),om.core.build.call(null,silkscreen.controls.markdown_textarea,post,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-fn","data-fn",2457051453),((function (G__24050,post,mode,___$1,map__24049,map__24049__$1,editing){
return (function (p1__24034_SHARP_){return new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(p1__24034_SHARP_);
});})(G__24050,post,mode,___$1,map__24049,map__24049__$1,editing))
,new cljs.core.Keyword(null,"display-fn","display-fn",4394303781),cljs.core.constantly.call(null,true)], null)], null))], null)], null)
break;
case "saved":
caseval__24055=new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-fluid","div.row-fluid",4577216108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),silkscreen.views.post_header.call(null,post)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pull-right","span.pull-right",4108617002),om.core.build.call(null,silkscreen.controls.edit_control,self__.app)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-fluid","div.row-fluid",4577216108),om.core.build.call(null,silkscreen.controls.markdown_textarea,post,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-fn","data-fn",2457051453),((function (G__24050,post,mode,___$1,map__24049,map__24049__$1,editing){
return (function (p1__24034_SHARP_){return new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(p1__24034_SHARP_);
});})(G__24050,post,mode,___$1,map__24049,map__24049__$1,editing))
,new cljs.core.Keyword(null,"display-fn","display-fn",4394303781),cljs.core.constantly.call(null,true)], null)], null))], null)], null)
break;
case "show":
caseval__24055=new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-fluid","div.row-fluid",4577216108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),silkscreen.views.post_header.call(null,post)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pull-right","span.pull-right",4108617002),om.core.build.call(null,silkscreen.controls.edit_control,self__.app)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-fluid","div.row-fluid",4577216108),om.core.build.call(null,silkscreen.controls.markdown_textarea,post,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-fn","data-fn",2457051453),((function (G__24050,post,mode,___$1,map__24049,map__24049__$1,editing){
return (function (p1__24034_SHARP_){return new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(p1__24034_SHARP_);
});})(G__24050,post,mode,___$1,map__24049,map__24049__$1,editing))
,new cljs.core.Keyword(null,"display-fn","display-fn",4394303781),cljs.core.constantly.call(null,true)], null)], null))], null)], null)
break;
case "edit":
caseval__24055=new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-fluid","div.row-fluid",4577216108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.span4","span.span4",1134864888),om.core.build.call(null,silkscreen.controls.edit_field,post,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-key","data-key",2801799470),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"finish-edit","finish-edit",2315180662),((function (G__24050,post,mode,___$1,map__24049,map__24049__$1,editing){
return (function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"mode","mode",1017261333),((function (G__24050,post,mode,___$1,map__24049,map__24049__$1,editing){
return (function (___$2){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved","saved",1123115513)], null);
});})(G__24050,post,mode,___$1,map__24049,map__24049__$1,editing))
);
});})(G__24050,post,mode,___$1,map__24049,map__24049__$1,editing))
], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pull-right","span.pull-right",4108617002),om.core.build.call(null,silkscreen.controls.edit_control,self__.app)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-fluid","div.row-fluid",4577216108),om.core.build.call(null,silkscreen.controls.editable_textarea,post,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-key","data-key",2801799470),new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.Keyword(null,"finish-edit","finish-edit",2315180662),((function (G__24050,post,mode,___$1,map__24049,map__24049__$1,editing){
return (function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"mode","mode",1017261333),((function (G__24050,post,mode,___$1,map__24049,map__24049__$1,editing){
return (function (___$2){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved","saved",1123115513)], null);
});})(G__24050,post,mode,___$1,map__24049,map__24049__$1,editing))
);
});})(G__24050,post,mode,___$1,map__24049,map__24049__$1,editing))
], null)], null))], null)], null)
break;
default:
caseval__24055=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode))))})()
}
return caseval__24055;
})());
});
silkscreen.views.t24045.prototype.om$core$IWillMount$ = true;
silkscreen.views.t24045.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return silkscreen.events.listen.call(null,self__.owner,((function (___$1){
return (function (p__24051,value){var map__24052 = p__24051;var map__24052__$1 = ((cljs.core.seq_QMARK_.call(null,map__24052))?cljs.core.apply.call(null,cljs.core.hash_map,map__24052):map__24052);var topic = map__24052__$1;var new_value = cljs.core.get.call(null,map__24052__$1,new cljs.core.Keyword(null,"new-value","new-value",3626601078));var old_value = cljs.core.get.call(null,map__24052__$1,new cljs.core.Keyword(null,"old-value","old-value",1451216317));var path = cljs.core.get.call(null,map__24052__$1,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",1017261333)], null),path))
{var vec__24053 = old_value;var old_mode = cljs.core.nth.call(null,vec__24053,0,null);var vec__24054 = new_value;var new_mode = cljs.core.nth.call(null,vec__24054,0,null);cljs.core.println.call(null,old_mode,"-->",new_mode);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_mode,new_mode], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit","edit",1017012604),new cljs.core.Keyword(null,"saved","saved",1123115513)], null)))
{return silkscreen.app.save_or_create_post_BANG_.call(null);
} else
{return null;
}
} else
{return null;
}
});})(___$1))
);
});
silkscreen.views.t24045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24047){var self__ = this;
var _24047__$1 = this;return self__.meta24046;
});
silkscreen.views.t24045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24047,meta24046__$1){var self__ = this;
var _24047__$1 = this;return (new silkscreen.views.t24045(self__.owner,self__.app,self__.post_editor,meta24046__$1));
});
silkscreen.views.__GT_t24045 = (function __GT_t24045(owner__$1,app__$1,post_editor__$1,meta24046){return (new silkscreen.views.t24045(owner__$1,app__$1,post_editor__$1,meta24046));
});
}
return (new silkscreen.views.t24045(owner,app,post_editor,null));
});
silkscreen.views.post_id_link = (function post_id_link(post_id){return React.DOM.p(null,React.DOM.a({"href": "#", "onClick": (function (){return silkscreen.app.dispatch_BANG_.call(null,("/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_id)));
})},sablono.interpreter.interpret.call(null,post_id)));
});
silkscreen.views.post_ids_view = (function post_ids_view(app,owner){if(typeof silkscreen.views.t24059 !== 'undefined')
{} else
{
/**
* @constructor
*/
silkscreen.views.t24059 = (function (owner,app,post_ids_view,meta24060){
this.owner = owner;
this.app = app;
this.post_ids_view = post_ids_view;
this.meta24060 = meta24060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
silkscreen.views.t24059.cljs$lang$type = true;
silkscreen.views.t24059.cljs$lang$ctorStr = "silkscreen.views/t24059";
silkscreen.views.t24059.cljs$lang$ctorPrWriter = (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"silkscreen.views/t24059");
});
silkscreen.views.t24059.prototype.om$core$IRender$ = true;
silkscreen.views.t24059.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var post_ids = cljs.core.get.call(null,self__.app,new cljs.core.Keyword(null,"post-ids","post-ids",1769752445));return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,silkscreen.views.post_id_link,cljs.core.conj.call(null,post_ids,"new")));
});
silkscreen.views.t24059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24061){var self__ = this;
var _24061__$1 = this;return self__.meta24060;
});
silkscreen.views.t24059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24061,meta24060__$1){var self__ = this;
var _24061__$1 = this;return (new silkscreen.views.t24059(self__.owner,self__.app,self__.post_ids_view,meta24060__$1));
});
silkscreen.views.__GT_t24059 = (function __GT_t24059(owner__$1,app__$1,post_ids_view__$1,meta24060){return (new silkscreen.views.t24059(owner__$1,app__$1,post_ids_view__$1,meta24060));
});
}
return (new silkscreen.views.t24059(owner,app,post_ids_view,null));
});

//# sourceMappingURL=views.js.map