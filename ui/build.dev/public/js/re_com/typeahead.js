// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__21648){
var map__21649 = p__21648;
var map__21649__$1 = (((((!((map__21649 == null))))?(((((map__21649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21649):map__21649);
var args = map__21649__$1;
var on_change = cljs.core.get.call(null,map__21649__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__21649__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__21649__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__21649__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__21649__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__21649__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__21649__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__21651 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4131__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__21651,external_model_value);
} else {
return G__21651;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__21652,event){
var map__21653 = p__21652;
var map__21653__$1 = (((((!((map__21653 == null))))?(((((map__21653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21653):map__21653);
var state = map__21653__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__21653__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__21653__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__21655 = event;
var G__21655__$1 = (((G__21655 instanceof cljs.core.Keyword))?G__21655.fqn:null);
switch (G__21655__$1) {
case "input-text-blurred":
var and__4120__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__4120__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__4131__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21655__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__21657,event){
var map__21658 = p__21657;
var map__21658__$1 = (((((!((map__21658 == null))))?(((((map__21658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21658):map__21658);
var state = map__21658__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__21658__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__21660 = event;
var G__21660__$1 = (((G__21660 instanceof cljs.core.Keyword))?G__21660.fqn:null);
switch (G__21660__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__21662,new_value){
var map__21663 = p__21662;
var map__21663__$1 = (((((!((map__21663 == null))))?(((((map__21663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21663):map__21663);
var state = map__21663__$1;
var on_change = cljs.core.get.call(null,map__21663__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__21665,suggestion){
var map__21666 = p__21665;
var map__21666__$1 = (((((!((map__21666 == null))))?(((((map__21666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21666):map__21666);
var state = map__21666__$1;
var suggestion_to_string = cljs.core.get.call(null,map__21666__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__21668 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__21668,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__21668;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__21669,index){
var map__21670 = p__21669;
var map__21670__$1 = (((((!((map__21670 == null))))?(((((map__21670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21670):map__21670);
var state = map__21670__$1;
var suggestions = cljs.core.get.call(null,map__21670__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__21672 = state;
var G__21672__$1 = cljs.core.assoc.call(null,G__21672,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__21672__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__21672__$1,suggestion):G__21672__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__21672__$2,suggestion);
} else {
return G__21672__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__21673,index){
var map__21674 = p__21673;
var map__21674__$1 = (((((!((map__21674 == null))))?(((((map__21674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21674):map__21674);
var state = map__21674__$1;
var suggestions = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__21676){
var map__21677 = p__21676;
var map__21677__$1 = (((((!((map__21677 == null))))?(((((map__21677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21677):map__21677);
var state = map__21677__$1;
var suggestion_active_index = cljs.core.get.call(null,map__21677__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__21679 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__21679,suggestion_active_index);
} else {
return G__21679;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__21680){
var map__21681 = p__21680;
var map__21681__$1 = (((((!((map__21681 == null))))?(((((map__21681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21681):map__21681);
var state = map__21681__$1;
var suggestions = cljs.core.get.call(null,map__21681__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__21681__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__21683 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__21683,re_com.typeahead.wrap.call(null,((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__21683;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__21684){
var map__21685 = p__21684;
var map__21685__$1 = (((((!((map__21685 == null))))?(((((map__21685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21685):map__21685);
var state = map__21685__$1;
var suggestions = cljs.core.get.call(null,map__21685__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__21685__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__21687 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__21687,re_com.typeahead.wrap.call(null,((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__21687;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__21688 = state;
var G__21688__$1 = re_com.typeahead.clear_suggestions.call(null,G__21688)
;
var G__21688__$2 = cljs.core.assoc.call(null,G__21688__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__21688__$2,null);
} else {
return G__21688__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__21689){
var map__21690 = p__21689;
var map__21690__$1 = (((((!((map__21690 == null))))?(((((map__21690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21690):map__21690);
var state = map__21690__$1;
var input_text = cljs.core.get.call(null,map__21690__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__21690__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__21692 = state;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__4120__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__4120__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__21692,input_text);
} else {
return G__21692;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5718__auto__ = data_source.call(null,text,(function (p1__21693_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__21693_SHARP_);
}));
if(cljs.core.truth_(temp__5718__auto__)){
var return_value = temp__5718__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto__){
return (function (state_21710){
var state_val_21711 = (state_21710[(1)]);
if((state_val_21711 === (1))){
var state_21710__$1 = state_21710;
var statearr_21712_21724 = state_21710__$1;
(statearr_21712_21724[(2)] = null);

(statearr_21712_21724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21711 === (2))){
var state_21710__$1 = state_21710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21710__$1,(4),c_search);
} else {
if((state_val_21711 === (3))){
var inst_21708 = (state_21710[(2)]);
var state_21710__$1 = state_21710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21710__$1,inst_21708);
} else {
if((state_val_21711 === (4))){
var inst_21696 = (state_21710[(7)]);
var inst_21696__$1 = (state_21710[(2)]);
var inst_21697 = cljs.core.deref.call(null,state_atom);
var inst_21698 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_21697);
var inst_21699 = cljs.core._EQ_.call(null,"",inst_21696__$1);
var state_21710__$1 = (function (){var statearr_21713 = state_21710;
(statearr_21713[(7)] = inst_21696__$1);

(statearr_21713[(8)] = inst_21698);

return statearr_21713;
})();
if(inst_21699){
var statearr_21714_21725 = state_21710__$1;
(statearr_21714_21725[(1)] = (5));

} else {
var statearr_21715_21726 = state_21710__$1;
(statearr_21715_21726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21711 === (5))){
var inst_21701 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_21710__$1 = state_21710;
var statearr_21716_21727 = state_21710__$1;
(statearr_21716_21727[(2)] = inst_21701);

(statearr_21716_21727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21711 === (6))){
var inst_21696 = (state_21710[(7)]);
var inst_21698 = (state_21710[(8)]);
var inst_21703 = re_com.typeahead.search_data_source_BANG_.call(null,inst_21698,state_atom,inst_21696);
var state_21710__$1 = state_21710;
var statearr_21717_21728 = state_21710__$1;
(statearr_21717_21728[(2)] = inst_21703);

(statearr_21717_21728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21711 === (7))){
var inst_21705 = (state_21710[(2)]);
var state_21710__$1 = (function (){var statearr_21718 = state_21710;
(statearr_21718[(9)] = inst_21705);

return statearr_21718;
})();
var statearr_21719_21729 = state_21710__$1;
(statearr_21719_21729[(2)] = null);

(statearr_21719_21729[(1)] = (2));


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
});})(c__19649__auto__))
;
return ((function (switch__19554__auto__,c__19649__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__19555__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__19555__auto____0 = (function (){
var statearr_21720 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21720[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__19555__auto__);

(statearr_21720[(1)] = (1));

return statearr_21720;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__19555__auto____1 = (function (state_21710){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_21710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e21721){if((e21721 instanceof Object)){
var ex__19558__auto__ = e21721;
var statearr_21722_21730 = state_21710;
(statearr_21722_21730[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21731 = state_21710;
state_21710 = G__21731;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__19555__auto__ = function(state_21710){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__19555__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__19555__auto____1.call(this,state_21710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__19555__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__19555__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto__))
})();
var state__19651__auto__ = (function (){var statearr_21723 = f__19650__auto__.call(null);
(statearr_21723[(6)] = c__19649__auto__);

return statearr_21723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__))
);

return c__19649__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__21733 = cljs.core.deref.call(null,state_atom);
var map__21733__$1 = (((((!((map__21733 == null))))?(((((map__21733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21733):map__21733);
var state = map__21733__$1;
var input_text = cljs.core.get.call(null,map__21733__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__21733__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__21733,map__21733__$1,state,input_text,c_input){
return (function (p1__21732_SHARP_){
var G__21735 = p1__21732_SHARP_;
var G__21735__$1 = cljs.core.assoc.call(null,G__21735,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__21735__$1,new_text);
} else {
return G__21735__$1;
}
});})(map__21733,map__21733__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__21736 = cljs.core._EQ_;
var expr__21737 = event.which;
if(cljs.core.truth_(pred__21736.call(null,goog.events.KeyCodes.UP,expr__21737))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__21736.call(null,goog.events.KeyCodes.DOWN,expr__21737))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__21736.call(null,goog.events.KeyCodes.ENTER,expr__21737))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__21736.call(null,goog.events.KeyCodes.ESC,expr__21737))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__21736.call(null,goog.events.KeyCodes.TAB,expr__21737))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21761 = arguments.length;
var i__4731__auto___21762 = (0);
while(true){
if((i__4731__auto___21762 < len__4730__auto___21761)){
args__4736__auto__.push((arguments[i__4731__auto___21762]));

var G__21763 = (i__4731__auto___21762 + (1));
i__4731__auto___21762 = G__21763;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__21741){
var map__21742 = p__21741;
var map__21742__$1 = (((((!((map__21742 == null))))?(((((map__21742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21742):map__21742);
var args = map__21742__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead"))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__21744 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__21744__$1 = (((((!((map__21744 == null))))?(((((map__21744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21744):map__21744);
var state = map__21744__$1;
var c_search = cljs.core.get.call(null,map__21744__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__21744__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args){
return (function() { 
var G__21764__delegate = function (p__21746){
var map__21747 = p__21746;
var map__21747__$1 = (((((!((map__21747 == null))))?(((((map__21747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21747):map__21747);
var args__$1 = map__21747__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__21747__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead"))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__21749 = cljs.core.deref.call(null,state_atom);
var map__21749__$1 = (((((!((map__21749 == null))))?(((((map__21749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21749):map__21749);
var state__$1 = map__21749__$1;
var suggestions = cljs.core.get.call(null,map__21749__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__21749__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__21749__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__21749__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__4131__auto__ = width;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4523__auto__ = ((function (map__21749,map__21749__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21747,map__21747__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args){
return (function re_com$typeahead$iter__21751(s__21752){
return (new cljs.core.LazySeq(null,((function (map__21749,map__21749__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21747,map__21747__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args){
return (function (){
var s__21752__$1 = s__21752;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__21752__$1);
if(temp__5720__auto__){
var s__21752__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21752__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__21752__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__21754 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__21753 = (0);
while(true){
if((i__21753 < size__4522__auto__)){
var vec__21755 = cljs.core._nth.call(null,c__4521__auto__,i__21753);
var i = cljs.core.nth.call(null,vec__21755,(0),null);
var s = cljs.core.nth.call(null,vec__21755,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__21754,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__21753,selected_QMARK_,vec__21755,i,s,c__4521__auto__,size__4522__auto__,b__21754,s__21752__$2,temp__5720__auto__,map__21749,map__21749__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21747,map__21747__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__21753,selected_QMARK_,vec__21755,i,s,c__4521__auto__,size__4522__auto__,b__21754,s__21752__$2,temp__5720__auto__,map__21749,map__21749__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21747,map__21747__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__21753,selected_QMARK_,vec__21755,i,s,c__4521__auto__,size__4522__auto__,b__21754,s__21752__$2,temp__5720__auto__,map__21749,map__21749__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21747,map__21747__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args){
return (function (p1__21739_SHARP_){
p1__21739_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__21753,selected_QMARK_,vec__21755,i,s,c__4521__auto__,size__4522__auto__,b__21754,s__21752__$2,temp__5720__auto__,map__21749,map__21749__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21747,map__21747__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__21765 = (i__21753 + (1));
i__21753 = G__21765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21754),re_com$typeahead$iter__21751.call(null,cljs.core.chunk_rest.call(null,s__21752__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21754),null);
}
} else {
var vec__21758 = cljs.core.first.call(null,s__21752__$2);
var i = cljs.core.nth.call(null,vec__21758,(0),null);
var s = cljs.core.nth.call(null,vec__21758,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__21758,i,s,s__21752__$2,temp__5720__auto__,map__21749,map__21749__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21747,map__21747__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__21758,i,s,s__21752__$2,temp__5720__auto__,map__21749,map__21749__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21747,map__21747__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__21758,i,s,s__21752__$2,temp__5720__auto__,map__21749,map__21749__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21747,map__21747__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args){
return (function (p1__21739_SHARP_){
p1__21739_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__21758,i,s,s__21752__$2,temp__5720__auto__,map__21749,map__21749__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21747,map__21747__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__21751.call(null,cljs.core.rest.call(null,s__21752__$2)));
}
} else {
return null;
}
break;
}
});})(map__21749,map__21749__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21747,map__21747__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args))
,null,null));
});})(map__21749,map__21749__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21747,map__21747__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args))
;
return iter__4523__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__21764 = function (var_args){
var p__21746 = null;
if (arguments.length > 0) {
var G__21766__i = 0, G__21766__a = new Array(arguments.length -  0);
while (G__21766__i < G__21766__a.length) {G__21766__a[G__21766__i] = arguments[G__21766__i + 0]; ++G__21766__i;}
  p__21746 = new cljs.core.IndexedSeq(G__21766__a,0,null);
} 
return G__21764__delegate.call(this,p__21746);};
G__21764.cljs$lang$maxFixedArity = 0;
G__21764.cljs$lang$applyTo = (function (arglist__21767){
var p__21746 = cljs.core.seq(arglist__21767);
return G__21764__delegate(p__21746);
});
G__21764.cljs$core$IFn$_invoke$arity$variadic = G__21764__delegate;
return G__21764;
})()
;
;})(map__21744,map__21744__$1,state,c_search,c_input,state_atom,input_text_model,map__21742,map__21742__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq21740){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21740));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__19649__auto___21848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___21848,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19554__auto__ = ((function (c__19649__auto___21848,out){
return (function (state_21818){
var state_val_21819 = (state_21818[(1)]);
if((state_val_21819 === (7))){
var inst_21773 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21820_21849 = state_21818__$1;
(statearr_21820_21849[(2)] = inst_21773);

(statearr_21820_21849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (1))){
var inst_21768 = null;
var state_21818__$1 = (function (){var statearr_21821 = state_21818;
(statearr_21821[(7)] = inst_21768);

return statearr_21821;
})();
var statearr_21822_21850 = state_21818__$1;
(statearr_21822_21850[(2)] = null);

(statearr_21822_21850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (4))){
var state_21818__$1 = state_21818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21818__$1,(7),in$);
} else {
if((state_val_21819 === (15))){
var inst_21803 = (state_21818[(2)]);
var state_21818__$1 = (function (){var statearr_21823 = state_21818;
(statearr_21823[(8)] = inst_21803);

return statearr_21823;
})();
var statearr_21824_21851 = state_21818__$1;
(statearr_21824_21851[(2)] = null);

(statearr_21824_21851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (13))){
var inst_21791 = (state_21818[(9)]);
var inst_21805 = cljs.core._EQ_.call(null,inst_21791,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_21818__$1 = state_21818;
if(inst_21805){
var statearr_21825_21852 = state_21818__$1;
(statearr_21825_21852[(1)] = (16));

} else {
var statearr_21826_21853 = state_21818__$1;
(statearr_21826_21853[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (6))){
var inst_21777 = (state_21818[(10)]);
var inst_21776 = (state_21818[(2)]);
var inst_21777__$1 = cljs.core.async.timeout.call(null,ms);
var inst_21785 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21786 = [in$,inst_21777__$1];
var inst_21787 = (new cljs.core.PersistentVector(null,2,(5),inst_21785,inst_21786,null));
var state_21818__$1 = (function (){var statearr_21827 = state_21818;
(statearr_21827[(11)] = inst_21776);

(statearr_21827[(10)] = inst_21777__$1);

return statearr_21827;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21818__$1,(8),inst_21787);
} else {
if((state_val_21819 === (17))){
var state_21818__$1 = state_21818;
var statearr_21828_21854 = state_21818__$1;
(statearr_21828_21854[(2)] = null);

(statearr_21828_21854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (3))){
var inst_21816 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21818__$1,inst_21816);
} else {
if((state_val_21819 === (12))){
var inst_21776 = (state_21818[(11)]);
var state_21818__$1 = state_21818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21818__$1,(15),out,inst_21776);
} else {
if((state_val_21819 === (2))){
var inst_21768 = (state_21818[(7)]);
var inst_21770 = (inst_21768 == null);
var state_21818__$1 = state_21818;
if(cljs.core.truth_(inst_21770)){
var statearr_21829_21855 = state_21818__$1;
(statearr_21829_21855[(1)] = (4));

} else {
var statearr_21830_21856 = state_21818__$1;
(statearr_21830_21856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (11))){
var inst_21813 = (state_21818[(2)]);
var inst_21768 = inst_21813;
var state_21818__$1 = (function (){var statearr_21831 = state_21818;
(statearr_21831[(7)] = inst_21768);

return statearr_21831;
})();
var statearr_21832_21857 = state_21818__$1;
(statearr_21832_21857[(2)] = null);

(statearr_21832_21857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (9))){
var inst_21789 = (state_21818[(12)]);
var inst_21797 = cljs.core.nth.call(null,inst_21789,(0),null);
var inst_21798 = cljs.core.nth.call(null,inst_21789,(1),null);
var state_21818__$1 = (function (){var statearr_21833 = state_21818;
(statearr_21833[(13)] = inst_21798);

return statearr_21833;
})();
var statearr_21834_21858 = state_21818__$1;
(statearr_21834_21858[(2)] = inst_21797);

(statearr_21834_21858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (5))){
var inst_21768 = (state_21818[(7)]);
var state_21818__$1 = state_21818;
var statearr_21835_21859 = state_21818__$1;
(statearr_21835_21859[(2)] = inst_21768);

(statearr_21835_21859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (14))){
var inst_21811 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21836_21860 = state_21818__$1;
(statearr_21836_21860[(2)] = inst_21811);

(statearr_21836_21860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (16))){
var inst_21790 = (state_21818[(14)]);
var state_21818__$1 = state_21818;
var statearr_21837_21861 = state_21818__$1;
(statearr_21837_21861[(2)] = inst_21790);

(statearr_21837_21861[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (10))){
var inst_21777 = (state_21818[(10)]);
var inst_21791 = (state_21818[(9)]);
var inst_21800 = cljs.core._EQ_.call(null,inst_21791,inst_21777);
var state_21818__$1 = state_21818;
if(inst_21800){
var statearr_21838_21862 = state_21818__$1;
(statearr_21838_21862[(1)] = (12));

} else {
var statearr_21839_21863 = state_21818__$1;
(statearr_21839_21863[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (18))){
var inst_21809 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21840_21864 = state_21818__$1;
(statearr_21840_21864[(2)] = inst_21809);

(statearr_21840_21864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (8))){
var inst_21789 = (state_21818[(12)]);
var inst_21791 = (state_21818[(9)]);
var inst_21789__$1 = (state_21818[(2)]);
var inst_21790 = cljs.core.nth.call(null,inst_21789__$1,(0),null);
var inst_21791__$1 = cljs.core.nth.call(null,inst_21789__$1,(1),null);
var inst_21792 = cljs.core._EQ_.call(null,inst_21791__$1,in$);
var state_21818__$1 = (function (){var statearr_21841 = state_21818;
(statearr_21841[(14)] = inst_21790);

(statearr_21841[(12)] = inst_21789__$1);

(statearr_21841[(9)] = inst_21791__$1);

return statearr_21841;
})();
if(inst_21792){
var statearr_21842_21865 = state_21818__$1;
(statearr_21842_21865[(1)] = (9));

} else {
var statearr_21843_21866 = state_21818__$1;
(statearr_21843_21866[(1)] = (10));

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
});})(c__19649__auto___21848,out))
;
return ((function (switch__19554__auto__,c__19649__auto___21848,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__19555__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__19555__auto____0 = (function (){
var statearr_21844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21844[(0)] = re_com$typeahead$debounce_$_state_machine__19555__auto__);

(statearr_21844[(1)] = (1));

return statearr_21844;
});
var re_com$typeahead$debounce_$_state_machine__19555__auto____1 = (function (state_21818){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_21818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e21845){if((e21845 instanceof Object)){
var ex__19558__auto__ = e21845;
var statearr_21846_21867 = state_21818;
(statearr_21846_21867[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21868 = state_21818;
state_21818 = G__21868;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__19555__auto__ = function(state_21818){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__19555__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__19555__auto____1.call(this,state_21818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__19555__auto____0;
re_com$typeahead$debounce_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__19555__auto____1;
return re_com$typeahead$debounce_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19649__auto___21848,out))
})();
var state__19651__auto__ = (function (){var statearr_21847 = f__19650__auto__.call(null);
(statearr_21847[(6)] = c__19649__auto___21848);

return statearr_21847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___21848,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map
