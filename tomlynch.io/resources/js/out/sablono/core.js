// Compiled by ClojureScript 0.0-2227
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__20379__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__20378 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__20378,0,null);var body = cljs.core.nthnext.call(null,vec__20378,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__20379 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20379__delegate.call(this,args);};
G__20379.cljs$lang$maxFixedArity = 0;
G__20379.cljs$lang$applyTo = (function (arglist__20380){
var args = cljs.core.seq(arglist__20380);
return G__20379__delegate(args);
});
G__20379.cljs$core$IFn$_invoke$arity$variadic = G__20379__delegate;
return G__20379;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__9851__auto__ = (function iter__20385(s__20386){return (new cljs.core.LazySeq(null,(function (){var s__20386__$1 = s__20386;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__20386__$1);if(temp__4092__auto__)
{var s__20386__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20386__$2))
{var c__9849__auto__ = cljs.core.chunk_first.call(null,s__20386__$2);var size__9850__auto__ = cljs.core.count.call(null,c__9849__auto__);var b__20388 = cljs.core.chunk_buffer.call(null,size__9850__auto__);if((function (){var i__20387 = 0;while(true){
if((i__20387 < size__9850__auto__))
{var args = cljs.core._nth.call(null,c__9849__auto__,i__20387);cljs.core.chunk_append.call(null,b__20388,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__20389 = (i__20387 + 1);
i__20387 = G__20389;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20388),iter__20385.call(null,cljs.core.chunk_rest.call(null,s__20386__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20388),null);
}
} else
{var args = cljs.core.first.call(null,s__20386__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__20385.call(null,cljs.core.rest.call(null,s__20386__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9851__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__9851__auto__ = (function iter__20394(s__20395){return (new cljs.core.LazySeq(null,(function (){var s__20395__$1 = s__20395;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__20395__$1);if(temp__4092__auto__)
{var s__20395__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20395__$2))
{var c__9849__auto__ = cljs.core.chunk_first.call(null,s__20395__$2);var size__9850__auto__ = cljs.core.count.call(null,c__9849__auto__);var b__20397 = cljs.core.chunk_buffer.call(null,size__9850__auto__);if((function (){var i__20396 = 0;while(true){
if((i__20396 < size__9850__auto__))
{var style = cljs.core._nth.call(null,c__9849__auto__,i__20396);cljs.core.chunk_append.call(null,b__20397,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__20398 = (i__20396 + 1);
i__20396 = G__20398;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20397),iter__20394.call(null,cljs.core.chunk_rest.call(null,s__20395__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20397),null);
}
} else
{var style = cljs.core.first.call(null,s__20395__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__20394.call(null,cljs.core.rest.call(null,s__20395__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9851__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__20399){
var styles = cljs.core.seq(arglist__20399);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to20400 = (function() { 
var link_to20400__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to20400 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to20400__delegate.call(this,url,content);};
link_to20400.cljs$lang$maxFixedArity = 1;
link_to20400.cljs$lang$applyTo = (function (arglist__20401){
var url = cljs.core.first(arglist__20401);
var content = cljs.core.rest(arglist__20401);
return link_to20400__delegate(url,content);
});
link_to20400.cljs$core$IFn$_invoke$arity$variadic = link_to20400__delegate;
return link_to20400;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to20400);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to20402 = (function() { 
var mail_to20402__delegate = function (e_mail,p__20403){var vec__20405 = p__20403;var content = cljs.core.nth.call(null,vec__20405,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__9126__auto__ = content;if(cljs.core.truth_(or__9126__auto__))
{return or__9126__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to20402 = function (e_mail,var_args){
var p__20403 = null;if (arguments.length > 1) {
  p__20403 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to20402__delegate.call(this,e_mail,p__20403);};
mail_to20402.cljs$lang$maxFixedArity = 1;
mail_to20402.cljs$lang$applyTo = (function (arglist__20406){
var e_mail = cljs.core.first(arglist__20406);
var p__20403 = cljs.core.rest(arglist__20406);
return mail_to20402__delegate(e_mail,p__20403);
});
mail_to20402.cljs$core$IFn$_invoke$arity$variadic = mail_to20402__delegate;
return mail_to20402;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to20402);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list20407 = (function unordered_list20407(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__9851__auto__ = (function iter__20412(s__20413){return (new cljs.core.LazySeq(null,(function (){var s__20413__$1 = s__20413;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__20413__$1);if(temp__4092__auto__)
{var s__20413__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20413__$2))
{var c__9849__auto__ = cljs.core.chunk_first.call(null,s__20413__$2);var size__9850__auto__ = cljs.core.count.call(null,c__9849__auto__);var b__20415 = cljs.core.chunk_buffer.call(null,size__9850__auto__);if((function (){var i__20414 = 0;while(true){
if((i__20414 < size__9850__auto__))
{var x = cljs.core._nth.call(null,c__9849__auto__,i__20414);cljs.core.chunk_append.call(null,b__20415,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__20416 = (i__20414 + 1);
i__20414 = G__20416;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20415),iter__20412.call(null,cljs.core.chunk_rest.call(null,s__20413__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20415),null);
}
} else
{var x = cljs.core.first.call(null,s__20413__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__20412.call(null,cljs.core.rest.call(null,s__20413__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9851__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list20407);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list20417 = (function ordered_list20417(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__9851__auto__ = (function iter__20422(s__20423){return (new cljs.core.LazySeq(null,(function (){var s__20423__$1 = s__20423;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__20423__$1);if(temp__4092__auto__)
{var s__20423__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20423__$2))
{var c__9849__auto__ = cljs.core.chunk_first.call(null,s__20423__$2);var size__9850__auto__ = cljs.core.count.call(null,c__9849__auto__);var b__20425 = cljs.core.chunk_buffer.call(null,size__9850__auto__);if((function (){var i__20424 = 0;while(true){
if((i__20424 < size__9850__auto__))
{var x = cljs.core._nth.call(null,c__9849__auto__,i__20424);cljs.core.chunk_append.call(null,b__20425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__20426 = (i__20424 + 1);
i__20424 = G__20426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20425),iter__20422.call(null,cljs.core.chunk_rest.call(null,s__20423__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20425),null);
}
} else
{var x = cljs.core.first.call(null,s__20423__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__20422.call(null,cljs.core.rest.call(null,s__20423__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9851__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list20417);
/**
* Create an image element.
*/
sablono.core.image20427 = (function() {
var image20427 = null;
var image20427__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image20427__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image20427 = function(src,alt){
switch(arguments.length){
case 1:
return image20427__1.call(this,src);
case 2:
return image20427__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image20427.cljs$core$IFn$_invoke$arity$1 = image20427__1;
image20427.cljs$core$IFn$_invoke$arity$2 = image20427__2;
return image20427;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image20427);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__20428_SHARP_,p2__20429_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20428_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__20429_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__20430_SHARP_,p2__20431_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20430_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__20431_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field20432 = (function() {
var color_field20432 = null;
var color_field20432__1 = (function (name__11120__auto__){return color_field20432.call(null,name__11120__auto__,null);
});
var color_field20432__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__11120__auto__,value__11121__auto__);
});
color_field20432 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return color_field20432__1.call(this,name__11120__auto__);
case 2:
return color_field20432__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field20432.cljs$core$IFn$_invoke$arity$1 = color_field20432__1;
color_field20432.cljs$core$IFn$_invoke$arity$2 = color_field20432__2;
return color_field20432;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field20432);
/**
* Creates a date input field.
*/
sablono.core.date_field20433 = (function() {
var date_field20433 = null;
var date_field20433__1 = (function (name__11120__auto__){return date_field20433.call(null,name__11120__auto__,null);
});
var date_field20433__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__11120__auto__,value__11121__auto__);
});
date_field20433 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return date_field20433__1.call(this,name__11120__auto__);
case 2:
return date_field20433__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field20433.cljs$core$IFn$_invoke$arity$1 = date_field20433__1;
date_field20433.cljs$core$IFn$_invoke$arity$2 = date_field20433__2;
return date_field20433;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field20433);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field20434 = (function() {
var datetime_field20434 = null;
var datetime_field20434__1 = (function (name__11120__auto__){return datetime_field20434.call(null,name__11120__auto__,null);
});
var datetime_field20434__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__11120__auto__,value__11121__auto__);
});
datetime_field20434 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return datetime_field20434__1.call(this,name__11120__auto__);
case 2:
return datetime_field20434__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field20434.cljs$core$IFn$_invoke$arity$1 = datetime_field20434__1;
datetime_field20434.cljs$core$IFn$_invoke$arity$2 = datetime_field20434__2;
return datetime_field20434;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field20434);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field20435 = (function() {
var datetime_local_field20435 = null;
var datetime_local_field20435__1 = (function (name__11120__auto__){return datetime_local_field20435.call(null,name__11120__auto__,null);
});
var datetime_local_field20435__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__11120__auto__,value__11121__auto__);
});
datetime_local_field20435 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return datetime_local_field20435__1.call(this,name__11120__auto__);
case 2:
return datetime_local_field20435__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field20435.cljs$core$IFn$_invoke$arity$1 = datetime_local_field20435__1;
datetime_local_field20435.cljs$core$IFn$_invoke$arity$2 = datetime_local_field20435__2;
return datetime_local_field20435;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field20435);
/**
* Creates a email input field.
*/
sablono.core.email_field20436 = (function() {
var email_field20436 = null;
var email_field20436__1 = (function (name__11120__auto__){return email_field20436.call(null,name__11120__auto__,null);
});
var email_field20436__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__11120__auto__,value__11121__auto__);
});
email_field20436 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return email_field20436__1.call(this,name__11120__auto__);
case 2:
return email_field20436__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field20436.cljs$core$IFn$_invoke$arity$1 = email_field20436__1;
email_field20436.cljs$core$IFn$_invoke$arity$2 = email_field20436__2;
return email_field20436;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field20436);
/**
* Creates a file input field.
*/
sablono.core.file_field20437 = (function() {
var file_field20437 = null;
var file_field20437__1 = (function (name__11120__auto__){return file_field20437.call(null,name__11120__auto__,null);
});
var file_field20437__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__11120__auto__,value__11121__auto__);
});
file_field20437 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return file_field20437__1.call(this,name__11120__auto__);
case 2:
return file_field20437__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field20437.cljs$core$IFn$_invoke$arity$1 = file_field20437__1;
file_field20437.cljs$core$IFn$_invoke$arity$2 = file_field20437__2;
return file_field20437;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field20437);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field20438 = (function() {
var hidden_field20438 = null;
var hidden_field20438__1 = (function (name__11120__auto__){return hidden_field20438.call(null,name__11120__auto__,null);
});
var hidden_field20438__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__11120__auto__,value__11121__auto__);
});
hidden_field20438 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return hidden_field20438__1.call(this,name__11120__auto__);
case 2:
return hidden_field20438__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field20438.cljs$core$IFn$_invoke$arity$1 = hidden_field20438__1;
hidden_field20438.cljs$core$IFn$_invoke$arity$2 = hidden_field20438__2;
return hidden_field20438;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field20438);
/**
* Creates a month input field.
*/
sablono.core.month_field20439 = (function() {
var month_field20439 = null;
var month_field20439__1 = (function (name__11120__auto__){return month_field20439.call(null,name__11120__auto__,null);
});
var month_field20439__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__11120__auto__,value__11121__auto__);
});
month_field20439 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return month_field20439__1.call(this,name__11120__auto__);
case 2:
return month_field20439__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field20439.cljs$core$IFn$_invoke$arity$1 = month_field20439__1;
month_field20439.cljs$core$IFn$_invoke$arity$2 = month_field20439__2;
return month_field20439;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field20439);
/**
* Creates a number input field.
*/
sablono.core.number_field20440 = (function() {
var number_field20440 = null;
var number_field20440__1 = (function (name__11120__auto__){return number_field20440.call(null,name__11120__auto__,null);
});
var number_field20440__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__11120__auto__,value__11121__auto__);
});
number_field20440 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return number_field20440__1.call(this,name__11120__auto__);
case 2:
return number_field20440__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field20440.cljs$core$IFn$_invoke$arity$1 = number_field20440__1;
number_field20440.cljs$core$IFn$_invoke$arity$2 = number_field20440__2;
return number_field20440;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field20440);
/**
* Creates a password input field.
*/
sablono.core.password_field20441 = (function() {
var password_field20441 = null;
var password_field20441__1 = (function (name__11120__auto__){return password_field20441.call(null,name__11120__auto__,null);
});
var password_field20441__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__11120__auto__,value__11121__auto__);
});
password_field20441 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return password_field20441__1.call(this,name__11120__auto__);
case 2:
return password_field20441__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field20441.cljs$core$IFn$_invoke$arity$1 = password_field20441__1;
password_field20441.cljs$core$IFn$_invoke$arity$2 = password_field20441__2;
return password_field20441;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20441);
/**
* Creates a range input field.
*/
sablono.core.range_field20442 = (function() {
var range_field20442 = null;
var range_field20442__1 = (function (name__11120__auto__){return range_field20442.call(null,name__11120__auto__,null);
});
var range_field20442__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__11120__auto__,value__11121__auto__);
});
range_field20442 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return range_field20442__1.call(this,name__11120__auto__);
case 2:
return range_field20442__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field20442.cljs$core$IFn$_invoke$arity$1 = range_field20442__1;
range_field20442.cljs$core$IFn$_invoke$arity$2 = range_field20442__2;
return range_field20442;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field20442);
/**
* Creates a search input field.
*/
sablono.core.search_field20443 = (function() {
var search_field20443 = null;
var search_field20443__1 = (function (name__11120__auto__){return search_field20443.call(null,name__11120__auto__,null);
});
var search_field20443__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__11120__auto__,value__11121__auto__);
});
search_field20443 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return search_field20443__1.call(this,name__11120__auto__);
case 2:
return search_field20443__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field20443.cljs$core$IFn$_invoke$arity$1 = search_field20443__1;
search_field20443.cljs$core$IFn$_invoke$arity$2 = search_field20443__2;
return search_field20443;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field20443);
/**
* Creates a tel input field.
*/
sablono.core.tel_field20444 = (function() {
var tel_field20444 = null;
var tel_field20444__1 = (function (name__11120__auto__){return tel_field20444.call(null,name__11120__auto__,null);
});
var tel_field20444__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__11120__auto__,value__11121__auto__);
});
tel_field20444 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return tel_field20444__1.call(this,name__11120__auto__);
case 2:
return tel_field20444__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field20444.cljs$core$IFn$_invoke$arity$1 = tel_field20444__1;
tel_field20444.cljs$core$IFn$_invoke$arity$2 = tel_field20444__2;
return tel_field20444;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field20444);
/**
* Creates a text input field.
*/
sablono.core.text_field20445 = (function() {
var text_field20445 = null;
var text_field20445__1 = (function (name__11120__auto__){return text_field20445.call(null,name__11120__auto__,null);
});
var text_field20445__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__11120__auto__,value__11121__auto__);
});
text_field20445 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return text_field20445__1.call(this,name__11120__auto__);
case 2:
return text_field20445__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field20445.cljs$core$IFn$_invoke$arity$1 = text_field20445__1;
text_field20445.cljs$core$IFn$_invoke$arity$2 = text_field20445__2;
return text_field20445;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20445);
/**
* Creates a time input field.
*/
sablono.core.time_field20446 = (function() {
var time_field20446 = null;
var time_field20446__1 = (function (name__11120__auto__){return time_field20446.call(null,name__11120__auto__,null);
});
var time_field20446__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__11120__auto__,value__11121__auto__);
});
time_field20446 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return time_field20446__1.call(this,name__11120__auto__);
case 2:
return time_field20446__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field20446.cljs$core$IFn$_invoke$arity$1 = time_field20446__1;
time_field20446.cljs$core$IFn$_invoke$arity$2 = time_field20446__2;
return time_field20446;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field20446);
/**
* Creates a url input field.
*/
sablono.core.url_field20447 = (function() {
var url_field20447 = null;
var url_field20447__1 = (function (name__11120__auto__){return url_field20447.call(null,name__11120__auto__,null);
});
var url_field20447__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__11120__auto__,value__11121__auto__);
});
url_field20447 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return url_field20447__1.call(this,name__11120__auto__);
case 2:
return url_field20447__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field20447.cljs$core$IFn$_invoke$arity$1 = url_field20447__1;
url_field20447.cljs$core$IFn$_invoke$arity$2 = url_field20447__2;
return url_field20447;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field20447);
/**
* Creates a week input field.
*/
sablono.core.week_field20448 = (function() {
var week_field20448 = null;
var week_field20448__1 = (function (name__11120__auto__){return week_field20448.call(null,name__11120__auto__,null);
});
var week_field20448__2 = (function (name__11120__auto__,value__11121__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__11120__auto__,value__11121__auto__);
});
week_field20448 = function(name__11120__auto__,value__11121__auto__){
switch(arguments.length){
case 1:
return week_field20448__1.call(this,name__11120__auto__);
case 2:
return week_field20448__2.call(this,name__11120__auto__,value__11121__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field20448.cljs$core$IFn$_invoke$arity$1 = week_field20448__1;
week_field20448.cljs$core$IFn$_invoke$arity$2 = week_field20448__2;
return week_field20448;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field20448);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box20449 = (function() {
var check_box20449 = null;
var check_box20449__1 = (function (name){return check_box20449.call(null,name,null);
});
var check_box20449__2 = (function (name,checked_QMARK_){return check_box20449.call(null,name,checked_QMARK_,"true");
});
var check_box20449__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box20449 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box20449__1.call(this,name);
case 2:
return check_box20449__2.call(this,name,checked_QMARK_);
case 3:
return check_box20449__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box20449.cljs$core$IFn$_invoke$arity$1 = check_box20449__1;
check_box20449.cljs$core$IFn$_invoke$arity$2 = check_box20449__2;
check_box20449.cljs$core$IFn$_invoke$arity$3 = check_box20449__3;
return check_box20449;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box20449);
/**
* Creates a radio button.
*/
sablono.core.radio_button20450 = (function() {
var radio_button20450 = null;
var radio_button20450__1 = (function (group){return radio_button20450.call(null,group,null);
});
var radio_button20450__2 = (function (group,checked_QMARK_){return radio_button20450.call(null,group,checked_QMARK_,"true");
});
var radio_button20450__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button20450 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button20450__1.call(this,group);
case 2:
return radio_button20450__2.call(this,group,checked_QMARK_);
case 3:
return radio_button20450__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button20450.cljs$core$IFn$_invoke$arity$1 = radio_button20450__1;
radio_button20450.cljs$core$IFn$_invoke$arity$2 = radio_button20450__2;
radio_button20450.cljs$core$IFn$_invoke$arity$3 = radio_button20450__3;
return radio_button20450;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button20450);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options20451 = (function() {
var select_options20451 = null;
var select_options20451__1 = (function (coll){return select_options20451.call(null,coll,null);
});
var select_options20451__2 = (function (coll,selected){var iter__9851__auto__ = (function iter__20460(s__20461){return (new cljs.core.LazySeq(null,(function (){var s__20461__$1 = s__20461;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__20461__$1);if(temp__4092__auto__)
{var s__20461__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20461__$2))
{var c__9849__auto__ = cljs.core.chunk_first.call(null,s__20461__$2);var size__9850__auto__ = cljs.core.count.call(null,c__9849__auto__);var b__20463 = cljs.core.chunk_buffer.call(null,size__9850__auto__);if((function (){var i__20462 = 0;while(true){
if((i__20462 < size__9850__auto__))
{var x = cljs.core._nth.call(null,c__9849__auto__,i__20462);cljs.core.chunk_append.call(null,b__20463,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20466 = x;var text = cljs.core.nth.call(null,vec__20466,0,null);var val = cljs.core.nth.call(null,vec__20466,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__20466,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options20451.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__20468 = (i__20462 + 1);
i__20462 = G__20468;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20463),iter__20460.call(null,cljs.core.chunk_rest.call(null,s__20461__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20463),null);
}
} else
{var x = cljs.core.first.call(null,s__20461__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20467 = x;var text = cljs.core.nth.call(null,vec__20467,0,null);var val = cljs.core.nth.call(null,vec__20467,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__20467,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options20451.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__20460.call(null,cljs.core.rest.call(null,s__20461__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9851__auto__.call(null,coll);
});
select_options20451 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options20451__1.call(this,coll);
case 2:
return select_options20451__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options20451.cljs$core$IFn$_invoke$arity$1 = select_options20451__1;
select_options20451.cljs$core$IFn$_invoke$arity$2 = select_options20451__2;
return select_options20451;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options20451);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down20469 = (function() {
var drop_down20469 = null;
var drop_down20469__2 = (function (name,options){return drop_down20469.call(null,name,options,null);
});
var drop_down20469__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down20469 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down20469__2.call(this,name,options);
case 3:
return drop_down20469__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down20469.cljs$core$IFn$_invoke$arity$2 = drop_down20469__2;
drop_down20469.cljs$core$IFn$_invoke$arity$3 = drop_down20469__3;
return drop_down20469;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down20469);
/**
* Creates a text area element.
*/
sablono.core.text_area20470 = (function() {
var text_area20470 = null;
var text_area20470__1 = (function (name){return text_area20470.call(null,name,null);
});
var text_area20470__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area20470 = function(name,value){
switch(arguments.length){
case 1:
return text_area20470__1.call(this,name);
case 2:
return text_area20470__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area20470.cljs$core$IFn$_invoke$arity$1 = text_area20470__1;
text_area20470.cljs$core$IFn$_invoke$arity$2 = text_area20470__2;
return text_area20470;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area20470);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label20471 = (function label20471(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label20471);
/**
* Creates a submit button.
*/
sablono.core.submit_button20472 = (function submit_button20472(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20472);
/**
* Creates a form reset button.
*/
sablono.core.reset_button20473 = (function reset_button20473(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20473);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to20474 = (function() { 
var form_to20474__delegate = function (p__20475,body){var vec__20477 = p__20475;var method = cljs.core.nth.call(null,vec__20477,0,null);var action = cljs.core.nth.call(null,vec__20477,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to20474 = function (p__20475,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to20474__delegate.call(this,p__20475,body);};
form_to20474.cljs$lang$maxFixedArity = 1;
form_to20474.cljs$lang$applyTo = (function (arglist__20478){
var p__20475 = cljs.core.first(arglist__20478);
var body = cljs.core.rest(arglist__20478);
return form_to20474__delegate(p__20475,body);
});
form_to20474.cljs$core$IFn$_invoke$arity$variadic = form_to20474__delegate;
return form_to20474;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20474);

//# sourceMappingURL=core.js.map