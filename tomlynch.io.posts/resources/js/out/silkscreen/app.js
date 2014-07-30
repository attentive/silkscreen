// Compiled by ClojureScript 0.0-2227
goog.provide('silkscreen.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('silkscreen.xhr');
goog.require('cljs.core.async');
goog.require('secretary.core');
goog.require('secretary.core');
goog.require('om.core');
goog.require('om.core');
silkscreen.app.dispatch_BANG_ = (function dispatch_BANG_(r){return secretary.core.dispatch_BANG_.call(null,r);
});
/**
* Add a state entry and update the url to show it.
*/
silkscreen.app.push_state_BANG_ = (function push_state_BANG_(url){return History.pushState(null,null,url);
});
/**
* Return the current route as a string
*/
silkscreen.app.get_state = (function get_state(){return History.getState().hash;
});
/**
* Add a state-change callback. The callback should be a fn that takes a single
* 'location' argument
*/
silkscreen.app.on_state_change = (function on_state_change(fun){return (History["Adapter"]).bind(window,"statechange",(function (){return fun.call(null,silkscreen.app.get_state.call(null));
}));
});
silkscreen.app.on_state_change.call(null,(function (p1__20883_SHARP_){return silkscreen.app.dispatch_BANG_.call(null,p1__20883_SHARP_);
}));
var action__15902__auto___20886 = (function (params__15903__auto__){if(cljs.core.map_QMARK_.call(null,params__15903__auto__))
{var map__20884 = params__15903__auto__;var map__20884__$1 = ((cljs.core.seq_QMARK_.call(null,map__20884))?cljs.core.apply.call(null,cljs.core.hash_map,map__20884):map__20884);return silkscreen.app.set_new_post_BANG_.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__15903__auto__))
{var vec__20885 = params__15903__auto__;return silkscreen.app.set_new_post_BANG_.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/posts/new",action__15902__auto___20886);
var action__15902__auto___20889 = (function (params__15903__auto__){if(cljs.core.map_QMARK_.call(null,params__15903__auto__))
{var map__20887 = params__15903__auto__;var map__20887__$1 = ((cljs.core.seq_QMARK_.call(null,map__20887))?cljs.core.apply.call(null,cljs.core.hash_map,map__20887):map__20887);var params = map__20887__$1;return silkscreen.app.set_current_post_BANG_.call(null,new cljs.core.Keyword(null,"post-id","post-id",622644442).cljs$core$IFn$_invoke$arity$1(params));
} else
{if(cljs.core.vector_QMARK_.call(null,params__15903__auto__))
{var map__20888 = params__15903__auto__;var map__20888__$1 = ((cljs.core.seq_QMARK_.call(null,map__20888))?cljs.core.apply.call(null,cljs.core.hash_map,map__20888):map__20888);var params = map__20888__$1;return silkscreen.app.set_current_post_BANG_.call(null,new cljs.core.Keyword(null,"post-id","post-id",622644442).cljs$core$IFn$_invoke$arity$1(params));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/posts/:post-id",action__15902__auto___20889);
silkscreen.app.editor_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",1110689146),null,new cljs.core.Keyword(null,"post","post",1017351186),null,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",1017433711)], null),new cljs.core.Keyword(null,"post-ids","post-ids",1769752445),null], null));
/**
* Set the current application error.
*/
silkscreen.app.set_error_BANG_ = (function set_error_BANG_(err){return cljs.core.swap_BANG_.call(null,silkscreen.app.editor_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",1110689146),err);
});
/**
* Start editing a new post.
*/
silkscreen.app.set_new_post_BANG_ = (function set_new_post_BANG_(){silkscreen.app.push_state_BANG_.call(null,"/post/new");
return cljs.core.swap_BANG_.call(null,silkscreen.app.editor_state,cljs.core.assoc,new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),"[new post]",new cljs.core.Keyword(null,"body","body",1016933652),""], null));
});
/**
* Set the current post and update the browser address.
*/
silkscreen.app.set_current_post_BANG_ = (function set_current_post_BANG_(post_id){var link = ("/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_id));cljs.core.println.call(null,"(set-current-post! ",post_id,")");
return silkscreen.xhr.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),link,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),((function (link){
return (function (p1__20890_SHARP_){silkscreen.app.push_state_BANG_.call(null,link);
return cljs.core.swap_BANG_.call(null,silkscreen.app.editor_state,cljs.core.assoc,new cljs.core.Keyword(null,"post","post",1017351186),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-id","post-id",622644442),post_id], null),new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(p1__20890_SHARP_)));
});})(link))
,new cljs.core.Keyword(null,"on-error","on-error",1418576908),((function (link){
return (function (p1__20891_SHARP_){return silkscreen.app.set_error_BANG_.call(null,("Error retrieving post: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(p1__20891_SHARP_)))));
});})(link))
], null));
});
silkscreen.app.create_post_BANG_ = (function create_post_BANG_(){var link = ("/posts");cljs.core.println.call(null,"post: ",new cljs.core.Keyword(null,"post","post",1017351186).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,silkscreen.app.editor_state)));
return silkscreen.xhr.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"post","post",1017351186).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,silkscreen.app.editor_state)),new cljs.core.Keyword(null,"url","url",1014020321),link,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),((function (link){
return (function (p1__20892_SHARP_){cljs.core.println.call(null,"(create-post!)");
return silkscreen.app.dispatch_BANG_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"post-id","post-id",622644442).cljs$core$IFn$_invoke$arity$1(p1__20892_SHARP_))));
});})(link))
,new cljs.core.Keyword(null,"on-error","on-error",1418576908),((function (link){
return (function (p1__20893_SHARP_){return silkscreen.app.set_error_BANG_.call(null,("Error updating post: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(p1__20893_SHARP_)))));
});})(link))
], null));
});
silkscreen.app.save_post_BANG_ = (function save_post_BANG_(){var post_id = new cljs.core.Keyword(null,"post-id","post-id",622644442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"post","post",1017351186).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,silkscreen.app.editor_state)));var link = ("/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_id));return silkscreen.xhr.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"post","post",1017351186).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,silkscreen.app.editor_state)),new cljs.core.Keyword(null,"url","url",1014020321),link,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),((function (post_id,link){
return (function (){cljs.core.println.call(null,"(save-post! ",post_id,")");
return silkscreen.app.dispatch_BANG_.call(null,link);
});})(post_id,link))
,new cljs.core.Keyword(null,"on-error","on-error",1418576908),((function (post_id,link){
return (function (p1__20894_SHARP_){return silkscreen.app.set_error_BANG_.call(null,("Error updating post: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(p1__20894_SHARP_)))));
});})(post_id,link))
], null));
});
silkscreen.app.save_or_create_post_BANG_ = (function save_or_create_post_BANG_(){var post_id = new cljs.core.Keyword(null,"post-id","post-id",622644442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"post","post",1017351186).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,silkscreen.app.editor_state)));if(cljs.core.truth_(post_id))
{return silkscreen.app.save_post_BANG_.call(null);
} else
{return silkscreen.app.create_post_BANG_.call(null);
}
});
/**
* Retrieve a list of all-post-ids.
*/
silkscreen.app.load_post_ids_BANG_ = (function load_post_ids_BANG_(){cljs.core.println.call(null,"(load-post-ids!)");
return silkscreen.xhr.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),"/posts",new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__20895_SHARP_){return cljs.core.swap_BANG_.call(null,silkscreen.app.editor_state,cljs.core.assoc,new cljs.core.Keyword(null,"post-ids","post-ids",1769752445),new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(p1__20895_SHARP_));
}),new cljs.core.Keyword(null,"on-error","on-error",1418576908),(function (p1__20896_SHARP_){return silkscreen.app.set_error_BANG_.call(null,("Error retrieving post-ids: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(p1__20896_SHARP_)))));
})], null));
});

//# sourceMappingURL=app.js.map