// Compiled by ClojureScript 0.0-2227
goog.provide('silkscreen.xhr');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('cljs.reader');
silkscreen.xhr.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
silkscreen.xhr.edn_xhr = (function edn_xhr(p__16157){var map__16159 = p__16157;var map__16159__$1 = ((cljs.core.seq_QMARK_.call(null,map__16159))?cljs.core.apply.call(null,cljs.core.hash_map,map__16159):map__16159);var on_error = cljs.core.get.call(null,map__16159__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908));var on_complete = cljs.core.get.call(null,map__16159__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__16159__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__16159__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__16159__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__16159,map__16159__$1,on_error,on_complete,data,url,method){
return (function (e){if(cljs.core.truth_(on_complete))
{if(cljs.core.truth_(xhr.isSuccess()))
{return on_complete.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",4416389988),xhr.getStatus(),new cljs.core.Keyword(null,"body","body",1016933652),cljs.reader.read_string.call(null,xhr.getResponseText())], null));
} else
{if(cljs.core.truth_(on_error))
{return on_error.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",4416389988),xhr.getStatus(),new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),xhr.getStatusText()], null)], null));
} else
{return null;
}
}
} else
{return null;
}
});})(xhr,map__16159,map__16159__$1,on_error,on_complete,data,url,method))
);
return xhr.send(url,silkscreen.xhr.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});

//# sourceMappingURL=xhr.js.map