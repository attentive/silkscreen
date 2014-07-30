// Compiled by ClojureScript 0.0-2227
goog.provide('silkscreen.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
silkscreen.events.listen = (function listen(owner,handler){var local_chan = cljs.core.async.chan.call(null);var pub_chan = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));if(!((pub_chan == null)))
{} else
{throw (new Error(("Assert failed: pub chan nil in silkscreen.events/listen\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"pub-chan","pub-chan",-405286437,null))))))));
}
cljs.core.async.sub.call(null,pub_chan,new cljs.core.Keyword(null,"txs","txs",1014019553),local_chan);
var c__13385__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__13385__auto__,local_chan,pub_chan){
return (function (){var f__13386__auto__ = (function (){var switch__13314__auto__ = ((function (c__13385__auto__,local_chan,pub_chan){
return (function (state_16133){var state_val_16134 = (state_16133[1]);if((state_val_16134 === 7))
{var inst_16122 = (state_16133[2]);var inst_16123 = cljs.core.nth.call(null,inst_16122,0,null);var inst_16124 = cljs.core.nth.call(null,inst_16122,1,null);var inst_16125 = handler.call(null,inst_16123,inst_16124);var state_16133__$1 = (function (){var statearr_16135 = state_16133;(statearr_16135[7] = inst_16125);
return statearr_16135;
})();var statearr_16136_16149 = state_16133__$1;(statearr_16136_16149[2] = null);
(statearr_16136_16149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16134 === 6))
{var inst_16129 = (state_16133[2]);var state_16133__$1 = state_16133;var statearr_16137_16150 = state_16133__$1;(statearr_16137_16150[2] = inst_16129);
(statearr_16137_16150[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16134 === 5))
{var state_16133__$1 = state_16133;var statearr_16138_16151 = state_16133__$1;(statearr_16138_16151[2] = null);
(statearr_16138_16151[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16134 === 4))
{var state_16133__$1 = state_16133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16133__$1,7,local_chan);
} else
{if((state_val_16134 === 3))
{var inst_16131 = (state_16133[2]);var state_16133__$1 = state_16133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16133__$1,inst_16131);
} else
{if((state_val_16134 === 2))
{var state_16133__$1 = state_16133;if(true)
{var statearr_16139_16152 = state_16133__$1;(statearr_16139_16152[1] = 4);
} else
{var statearr_16140_16153 = state_16133__$1;(statearr_16140_16153[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16134 === 1))
{var state_16133__$1 = state_16133;var statearr_16141_16154 = state_16133__$1;(statearr_16141_16154[2] = null);
(statearr_16141_16154[1] = 2);
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
});})(c__13385__auto__,local_chan,pub_chan))
;return ((function (switch__13314__auto__,c__13385__auto__,local_chan,pub_chan){
return (function() {
var state_machine__13315__auto__ = null;
var state_machine__13315__auto____0 = (function (){var statearr_16145 = [null,null,null,null,null,null,null,null];(statearr_16145[0] = state_machine__13315__auto__);
(statearr_16145[1] = 1);
return statearr_16145;
});
var state_machine__13315__auto____1 = (function (state_16133){while(true){
var ret_value__13316__auto__ = (function (){try{while(true){
var result__13317__auto__ = switch__13314__auto__.call(null,state_16133);if(cljs.core.keyword_identical_QMARK_.call(null,result__13317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13317__auto__;
}
break;
}
}catch (e16146){if((e16146 instanceof Object))
{var ex__13318__auto__ = e16146;var statearr_16147_16155 = state_16133;(statearr_16147_16155[5] = ex__13318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16133);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16146;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16156 = state_16133;
state_16133 = G__16156;
continue;
}
} else
{return ret_value__13316__auto__;
}
break;
}
});
state_machine__13315__auto__ = function(state_16133){
switch(arguments.length){
case 0:
return state_machine__13315__auto____0.call(this);
case 1:
return state_machine__13315__auto____1.call(this,state_16133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13315__auto____0;
state_machine__13315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13315__auto____1;
return state_machine__13315__auto__;
})()
;})(switch__13314__auto__,c__13385__auto__,local_chan,pub_chan))
})();var state__13387__auto__ = (function (){var statearr_16148 = f__13386__auto__.call(null);(statearr_16148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13385__auto__);
return statearr_16148;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13387__auto__);
});})(c__13385__auto__,local_chan,pub_chan))
);
return c__13385__auto__;
});

//# sourceMappingURL=events.js.map