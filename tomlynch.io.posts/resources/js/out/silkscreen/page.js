// Compiled by ClojureScript 0.0-2227
goog.provide('silkscreen.page');
goog.require('cljs.core');
goog.require('silkscreen.xhr');
goog.require('silkscreen.xhr');
goog.require('silkscreen.controls');
goog.require('silkscreen.controls');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
silkscreen.page.page_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post","post",1017351186),null], null));
silkscreen.xhr.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),"post.edn",new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__21700_SHARP_){return cljs.core.swap_BANG_.call(null,silkscreen.page.page_state,cljs.core.assoc,new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(p1__21700_SHARP_));
}),new cljs.core.Keyword(null,"on-error","on-error",1418576908),(function (){return cljs.core.println.call(null,"Error retrieving post.");
})], null));
silkscreen.page.nav_view = (function nav_view(_,owner){if(typeof silkscreen.page.t21706 !== 'undefined')
{} else
{
/**
* @constructor
*/
silkscreen.page.t21706 = (function (owner,_,nav_view,meta21707){
this.owner = owner;
this._ = _;
this.nav_view = nav_view;
this.meta21707 = meta21707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
silkscreen.page.t21706.cljs$lang$type = true;
silkscreen.page.t21706.cljs$lang$ctorStr = "silkscreen.page/t21706";
silkscreen.page.t21706.cljs$lang$ctorPrWriter = (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"silkscreen.page/t21706");
});
silkscreen.page.t21706.prototype.om$core$IRender$ = true;
silkscreen.page.t21706.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "container-fluid"},React.DOM.ul({"className": "nav navbar navbar-nav"},React.DOM.li({"className": "active"},React.DOM.a({"href": "#"},React.DOM.h3(null,"home"))),React.DOM.li({"className": "active"},React.DOM.a({"href": "#"},React.DOM.h3(null,"about"))),React.DOM.li({"className": "active"},React.DOM.a({"href": "#"},React.DOM.h3(null,"archive"))),React.DOM.li({"className": "active"},React.DOM.a({"href": "#"},React.DOM.h3(null,"categories"))),React.DOM.li({"className": "active"},React.DOM.a({"href": "#"},React.DOM.h3(null,"tags")))));
});
silkscreen.page.t21706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21708){var self__ = this;
var _21708__$1 = this;return self__.meta21707;
});
silkscreen.page.t21706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21708,meta21707__$1){var self__ = this;
var _21708__$1 = this;return (new silkscreen.page.t21706(self__.owner,self__._,self__.nav_view,meta21707__$1));
});
silkscreen.page.__GT_t21706 = (function __GT_t21706(owner__$1,___$1,nav_view__$1,meta21707){return (new silkscreen.page.t21706(owner__$1,___$1,nav_view__$1,meta21707));
});
}
return (new silkscreen.page.t21706(owner,_,nav_view,null));
});
silkscreen.page.post_view = (function post_view(app,owner){if(typeof silkscreen.page.t21716 !== 'undefined')
{} else
{
/**
* @constructor
*/
silkscreen.page.t21716 = (function (owner,app,post_view,meta21717){
this.owner = owner;
this.app = app;
this.post_view = post_view;
this.meta21717 = meta21717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
silkscreen.page.t21716.cljs$lang$type = true;
silkscreen.page.t21716.cljs$lang$ctorStr = "silkscreen.page/t21716";
silkscreen.page.t21716.cljs$lang$ctorPrWriter = (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"silkscreen.page/t21716");
});
silkscreen.page.t21716.prototype.om$core$IRender$ = true;
silkscreen.page.t21716.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,self__.app,new cljs.core.Keyword(null,"post","post",1017351186));if(cljs.core.truth_(temp__4092__auto__))
{var post = temp__4092__auto__;var attrs21719 = om.core.build.call(null,silkscreen.controls.markdown_textarea,post,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-fn","data-fn",2457051453),((function (post,temp__4092__auto__,___$1){
return (function (p1__21711_SHARP_){return new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(p1__21711_SHARP_);
});})(post,temp__4092__auto__,___$1))
,new cljs.core.Keyword(null,"display-fn","display-fn",4394303781),cljs.core.constantly.call(null,true)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs21719))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["container"], null)], null),attrs21719)):{"className": "container"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21719))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21719)], null))));
} else
{return null;
}
});
silkscreen.page.t21716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21718){var self__ = this;
var _21718__$1 = this;return self__.meta21717;
});
silkscreen.page.t21716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21718,meta21717__$1){var self__ = this;
var _21718__$1 = this;return (new silkscreen.page.t21716(self__.owner,self__.app,self__.post_view,meta21717__$1));
});
silkscreen.page.__GT_t21716 = (function __GT_t21716(owner__$1,app__$1,post_view__$1,meta21717){return (new silkscreen.page.t21716(owner__$1,app__$1,post_view__$1,meta21717));
});
}
return (new silkscreen.page.t21716(owner,app,post_view,null));
});
om.core.root.call(null,silkscreen.page.nav_view,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("nav")], null));
om.core.root.call(null,silkscreen.page.post_view,silkscreen.page.page_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("post")], null));

//# sourceMappingURL=page.js.map