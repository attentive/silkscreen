// Compiled by ClojureScript 0.0-2227
goog.provide('silkscreen.controls');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('om.core');
goog.require('om.core');
silkscreen.controls.ENTER_KEY = 13;
silkscreen.controls.handle_change = (function handle_change(e,data,data_key,owner){return om.core.transact_BANG_.call(null,data,data_key,(function (_){return e.target.value;
}));
});
silkscreen.controls.edit_control = (function edit_control(app,owner){if(typeof silkscreen.controls.t24198 !== 'undefined')
{} else
{
/**
* @constructor
*/
silkscreen.controls.t24198 = (function (owner,app,edit_control,meta24199){
this.owner = owner;
this.app = app;
this.edit_control = edit_control;
this.meta24199 = meta24199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
silkscreen.controls.t24198.cljs$lang$type = true;
silkscreen.controls.t24198.cljs$lang$ctorStr = "silkscreen.controls/t24198";
silkscreen.controls.t24198.cljs$lang$ctorPrWriter = (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"silkscreen.controls/t24198");
});
silkscreen.controls.t24198.prototype.om$core$IRender$ = true;
silkscreen.controls.t24198.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mode = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",1017261333),0], null));return sablono.interpreter.interpret.call(null,(function (){var G__24201 = (((mode instanceof cljs.core.Keyword))?mode.fqn:null);var caseval__24202;
switch (G__24201){
case "cancelled":
caseval__24202=new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-group","div.button-group",590991827),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",2988506100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"on-click","on-click",1416542092),((function (G__24201,mode,___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"mode","mode",1017261333),((function (G__24201,mode,___$1){
return (function (___$2){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit","edit",1017012604)], null);
});})(G__24201,mode,___$1))
);
});})(G__24201,mode,___$1))
], null),"Edit"], null)], null)
break;
case "saved":
caseval__24202=new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-group","div.button-group",590991827),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",2988506100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"on-click","on-click",1416542092),((function (G__24201,mode,___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"mode","mode",1017261333),((function (G__24201,mode,___$1){
return (function (___$2){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit","edit",1017012604)], null);
});})(G__24201,mode,___$1))
);
});})(G__24201,mode,___$1))
], null),"Edit"], null)], null)
break;
case "show":
caseval__24202=new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-group","div.button-group",590991827),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",2988506100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"on-click","on-click",1416542092),((function (G__24201,mode,___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"mode","mode",1017261333),((function (G__24201,mode,___$1){
return (function (___$2){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit","edit",1017012604)], null);
});})(G__24201,mode,___$1))
);
});})(G__24201,mode,___$1))
], null),"Edit"], null)], null)
break;
case "edit":
caseval__24202=new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-group","div.button-group",590991827),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",2988506100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"on-click","on-click",1416542092),((function (G__24201,mode,___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"mode","mode",1017261333),((function (G__24201,mode,___$1){
return (function (___$2){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",1017433711)], null);
});})(G__24201,mode,___$1))
);
});})(G__24201,mode,___$1))
], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",2988506100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"on-click","on-click",1416542092),((function (G__24201,mode,___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"mode","mode",1017261333),((function (G__24201,mode,___$1){
return (function (___$2){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved","saved",1123115513)], null);
});})(G__24201,mode,___$1))
);
});})(G__24201,mode,___$1))
], null),"Save"], null)], null)
break;
default:
caseval__24202=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode))))})()
}
return caseval__24202;
})());
});
silkscreen.controls.t24198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24200){var self__ = this;
var _24200__$1 = this;return self__.meta24199;
});
silkscreen.controls.t24198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24200,meta24199__$1){var self__ = this;
var _24200__$1 = this;return (new silkscreen.controls.t24198(self__.owner,self__.app,self__.edit_control,meta24199__$1));
});
silkscreen.controls.__GT_t24198 = (function __GT_t24198(owner__$1,app__$1,edit_control__$1,meta24199){return (new silkscreen.controls.t24198(owner__$1,app__$1,edit_control__$1,meta24199));
});
}
return (new silkscreen.controls.t24198(owner,app,edit_control,null));
});
silkscreen.controls.edit_field = (function edit_field(data,owner,p__24204){var map__24209 = p__24204;var map__24209__$1 = ((cljs.core.seq_QMARK_.call(null,map__24209))?cljs.core.apply.call(null,cljs.core.hash_map,map__24209):map__24209);var opts = map__24209__$1;var finish_edit = cljs.core.get.call(null,map__24209__$1,new cljs.core.Keyword(null,"finish-edit","finish-edit",2315180662));var data_key = cljs.core.get.call(null,map__24209__$1,new cljs.core.Keyword(null,"data-key","data-key",2801799470));if(typeof silkscreen.controls.t24210 !== 'undefined')
{} else
{
/**
* @constructor
*/
silkscreen.controls.t24210 = (function (data_key,finish_edit,opts,map__24209,p__24204,owner,data,edit_field,meta24211){
this.data_key = data_key;
this.finish_edit = finish_edit;
this.opts = opts;
this.map__24209 = map__24209;
this.p__24204 = p__24204;
this.owner = owner;
this.data = data;
this.edit_field = edit_field;
this.meta24211 = meta24211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
silkscreen.controls.t24210.cljs$lang$type = true;
silkscreen.controls.t24210.cljs$lang$ctorStr = "silkscreen.controls/t24210";
silkscreen.controls.t24210.cljs$lang$ctorPrWriter = ((function (map__24209,map__24209__$1,opts,finish_edit,data_key){
return (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"silkscreen.controls/t24210");
});})(map__24209,map__24209__$1,opts,finish_edit,data_key))
;
silkscreen.controls.t24210.prototype.om$core$IRender$ = true;
silkscreen.controls.t24210.prototype.om$core$IRender$render$arity$1 = ((function (map__24209,map__24209__$1,opts,finish_edit,data_key){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.println.call(null,"edit-field");
var edit_data = self__.data_key.call(null,self__.data);return sablono.interpreter.input.call(null,{"className": "input-lg", "type": "text", "value": edit_data, "onChange": ((function (edit_data,___$1,map__24209,map__24209__$1,opts,finish_edit,data_key){
return (function (p1__24203_SHARP_){return silkscreen.controls.handle_change.call(null,p1__24203_SHARP_,self__.data,self__.data_key,self__.owner);
});})(edit_data,___$1,map__24209,map__24209__$1,opts,finish_edit,data_key))
});
});})(map__24209,map__24209__$1,opts,finish_edit,data_key))
;
silkscreen.controls.t24210.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24209,map__24209__$1,opts,finish_edit,data_key){
return (function (_24212){var self__ = this;
var _24212__$1 = this;return self__.meta24211;
});})(map__24209,map__24209__$1,opts,finish_edit,data_key))
;
silkscreen.controls.t24210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24209,map__24209__$1,opts,finish_edit,data_key){
return (function (_24212,meta24211__$1){var self__ = this;
var _24212__$1 = this;return (new silkscreen.controls.t24210(self__.data_key,self__.finish_edit,self__.opts,self__.map__24209,self__.p__24204,self__.owner,self__.data,self__.edit_field,meta24211__$1));
});})(map__24209,map__24209__$1,opts,finish_edit,data_key))
;
silkscreen.controls.__GT_t24210 = ((function (map__24209,map__24209__$1,opts,finish_edit,data_key){
return (function __GT_t24210(data_key__$1,finish_edit__$1,opts__$1,map__24209__$2,p__24204__$1,owner__$1,data__$1,edit_field__$1,meta24211){return (new silkscreen.controls.t24210(data_key__$1,finish_edit__$1,opts__$1,map__24209__$2,p__24204__$1,owner__$1,data__$1,edit_field__$1,meta24211));
});})(map__24209,map__24209__$1,opts,finish_edit,data_key))
;
}
return (new silkscreen.controls.t24210(data_key,finish_edit,opts,map__24209__$1,p__24204,owner,data,edit_field,null));
});
silkscreen.controls.markdown_textarea = (function markdown_textarea(data,owner,p__24213){var map__24220 = p__24213;var map__24220__$1 = ((cljs.core.seq_QMARK_.call(null,map__24220))?cljs.core.apply.call(null,cljs.core.hash_map,map__24220):map__24220);var opts = map__24220__$1;var data_fn = cljs.core.get.call(null,map__24220__$1,new cljs.core.Keyword(null,"data-fn","data-fn",2457051453));var display_fn = cljs.core.get.call(null,map__24220__$1,new cljs.core.Keyword(null,"display-fn","display-fn",4394303781));if(typeof silkscreen.controls.t24221 !== 'undefined')
{} else
{
/**
* @constructor
*/
silkscreen.controls.t24221 = (function (display_fn,data_fn,opts,map__24220,p__24213,owner,data,markdown_textarea,meta24222){
this.display_fn = display_fn;
this.data_fn = data_fn;
this.opts = opts;
this.map__24220 = map__24220;
this.p__24213 = p__24213;
this.owner = owner;
this.data = data;
this.markdown_textarea = markdown_textarea;
this.meta24222 = meta24222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
silkscreen.controls.t24221.cljs$lang$type = true;
silkscreen.controls.t24221.cljs$lang$ctorStr = "silkscreen.controls/t24221";
silkscreen.controls.t24221.cljs$lang$ctorPrWriter = ((function (map__24220,map__24220__$1,opts,data_fn,display_fn){
return (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"silkscreen.controls/t24221");
});})(map__24220,map__24220__$1,opts,data_fn,display_fn))
;
silkscreen.controls.t24221.prototype.om$core$IRender$ = true;
silkscreen.controls.t24221.prototype.om$core$IRender$render$arity$1 = ((function (map__24220,map__24220__$1,opts,data_fn,display_fn){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.data))
{return React.DOM.span({"style": {"display": (cljs.core.truth_(self__.display_fn)?self__.display_fn.call(null,self__.data):true)}, "dangerouslySetInnerHTML": {"__html": (new Showdown.converter()).makeHtml((function (){var or__9126__auto__ = self__.data_fn.call(null,self__.data);if(cljs.core.truth_(or__9126__auto__))
{return or__9126__auto__;
} else
{return "[add text]";
}
})())}});
} else
{return React.DOM.span(null,"[loading \u2026]");
}
});})(map__24220,map__24220__$1,opts,data_fn,display_fn))
;
silkscreen.controls.t24221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24220,map__24220__$1,opts,data_fn,display_fn){
return (function (_24223){var self__ = this;
var _24223__$1 = this;return self__.meta24222;
});})(map__24220,map__24220__$1,opts,data_fn,display_fn))
;
silkscreen.controls.t24221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24220,map__24220__$1,opts,data_fn,display_fn){
return (function (_24223,meta24222__$1){var self__ = this;
var _24223__$1 = this;return (new silkscreen.controls.t24221(self__.display_fn,self__.data_fn,self__.opts,self__.map__24220,self__.p__24213,self__.owner,self__.data,self__.markdown_textarea,meta24222__$1));
});})(map__24220,map__24220__$1,opts,data_fn,display_fn))
;
silkscreen.controls.__GT_t24221 = ((function (map__24220,map__24220__$1,opts,data_fn,display_fn){
return (function __GT_t24221(display_fn__$1,data_fn__$1,opts__$1,map__24220__$2,p__24213__$1,owner__$1,data__$1,markdown_textarea__$1,meta24222){return (new silkscreen.controls.t24221(display_fn__$1,data_fn__$1,opts__$1,map__24220__$2,p__24213__$1,owner__$1,data__$1,markdown_textarea__$1,meta24222));
});})(map__24220,map__24220__$1,opts,data_fn,display_fn))
;
}
return (new silkscreen.controls.t24221(display_fn,data_fn,opts,map__24220__$1,p__24213,owner,data,markdown_textarea,null));
});
silkscreen.controls.editable_textarea = (function editable_textarea(data,owner,p__24227){var map__24232 = p__24227;var map__24232__$1 = ((cljs.core.seq_QMARK_.call(null,map__24232))?cljs.core.apply.call(null,cljs.core.hash_map,map__24232):map__24232);var opts = map__24232__$1;var finish_edit = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"finish-edit","finish-edit",2315180662));var data_key = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"data-key","data-key",2801799470));if(typeof silkscreen.controls.t24233 !== 'undefined')
{} else
{
/**
* @constructor
*/
silkscreen.controls.t24233 = (function (data_key,finish_edit,opts,map__24232,p__24227,owner,data,editable_textarea,meta24234){
this.data_key = data_key;
this.finish_edit = finish_edit;
this.opts = opts;
this.map__24232 = map__24232;
this.p__24227 = p__24227;
this.owner = owner;
this.data = data;
this.editable_textarea = editable_textarea;
this.meta24234 = meta24234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
silkscreen.controls.t24233.cljs$lang$type = true;
silkscreen.controls.t24233.cljs$lang$ctorStr = "silkscreen.controls/t24233";
silkscreen.controls.t24233.cljs$lang$ctorPrWriter = ((function (map__24232,map__24232__$1,opts,finish_edit,data_key){
return (function (this__9693__auto__,writer__9694__auto__,opt__9695__auto__){return cljs.core._write.call(null,writer__9694__auto__,"silkscreen.controls/t24233");
});})(map__24232,map__24232__$1,opts,finish_edit,data_key))
;
silkscreen.controls.t24233.prototype.om$core$IRender$ = true;
silkscreen.controls.t24233.prototype.om$core$IRender$render$arity$1 = ((function (map__24232,map__24232__$1,opts,finish_edit,data_key){
return (function (_){var self__ = this;
var ___$1 = this;var edit_data = self__.data_key.call(null,self__.data);return sablono.interpreter.textarea.call(null,{"className": "col-md-8", "rows": "10", "style": {"resize": "vertical", "padding-left": "3px"}, "value": edit_data, "onChange": ((function (edit_data,___$1,map__24232,map__24232__$1,opts,finish_edit,data_key){
return (function (p1__24226_SHARP_){return silkscreen.controls.handle_change.call(null,p1__24226_SHARP_,self__.data,self__.data_key,self__.owner);
});})(edit_data,___$1,map__24232,map__24232__$1,opts,finish_edit,data_key))
});
});})(map__24232,map__24232__$1,opts,finish_edit,data_key))
;
silkscreen.controls.t24233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24232,map__24232__$1,opts,finish_edit,data_key){
return (function (_24235){var self__ = this;
var _24235__$1 = this;return self__.meta24234;
});})(map__24232,map__24232__$1,opts,finish_edit,data_key))
;
silkscreen.controls.t24233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24232,map__24232__$1,opts,finish_edit,data_key){
return (function (_24235,meta24234__$1){var self__ = this;
var _24235__$1 = this;return (new silkscreen.controls.t24233(self__.data_key,self__.finish_edit,self__.opts,self__.map__24232,self__.p__24227,self__.owner,self__.data,self__.editable_textarea,meta24234__$1));
});})(map__24232,map__24232__$1,opts,finish_edit,data_key))
;
silkscreen.controls.__GT_t24233 = ((function (map__24232,map__24232__$1,opts,finish_edit,data_key){
return (function __GT_t24233(data_key__$1,finish_edit__$1,opts__$1,map__24232__$2,p__24227__$1,owner__$1,data__$1,editable_textarea__$1,meta24234){return (new silkscreen.controls.t24233(data_key__$1,finish_edit__$1,opts__$1,map__24232__$2,p__24227__$1,owner__$1,data__$1,editable_textarea__$1,meta24234));
});})(map__24232,map__24232__$1,opts,finish_edit,data_key))
;
}
return (new silkscreen.controls.t24233(data_key,finish_edit,opts,map__24232__$1,p__24227,owner,data,editable_textarea,null));
});
silkscreen.controls.attribution = (function attribution(rec){return React.DOM.div({"className": "row-fluid"},React.DOM.span({"className": "pull-right"},(function (){var attrs24237 = ("Modified by "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modified_by","modified_by",3764683007).cljs$core$IFn$_invoke$arity$1(rec))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modified","modified",4693358139).cljs$core$IFn$_invoke$arity$1(rec)));return cljs.core.apply.call(null,React.DOM.em,((cljs.core.map_QMARK_.call(null,attrs24237))?sablono.interpreter.attributes.call(null,attrs24237):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24237))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24237)], null))));
})()));
});
silkscreen.controls.combo = (function combo(data,id){return React.DOM.select({"placeholder": "relates to ...", "id": id},sablono.interpreter.interpret.call(null,cljs.core.map.call(null,(function (d){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),d], null);
}),data)));
});

//# sourceMappingURL=controls.js.map