// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frisk_shell.filter_parser');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader');
goog.require('clojure.string');
re_frisk_shell.filter_parser.read_all = (function re_frisk_shell$filter_parser$read_all(rdr){
var G__22863 = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
if(cljs.core._EQ_.call(null,null,G__22863)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,cljs.tools.reader.reader_types.read_char.call(null,rdr),re_frisk_shell.filter_parser.read_all.call(null,rdr));

}
});
re_frisk_shell.filter_parser.read_string_SINGLEQUOTE_ = (function re_frisk_shell$filter_parser$read_string_SINGLEQUOTE_(s){
var sr = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
var val = cljs.tools.reader.read.call(null,sr);
var rest = clojure.string.join.call(null,re_frisk_shell.filter_parser.read_all.call(null,sr));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
});
re_frisk_shell.filter_parser.parse_freeform = (function re_frisk_shell$filter_parser$parse_freeform(s){
var vec__22864 = clojure.string.split.call(null,s,/\s+/,(2));
var prefix = cljs.core.nth.call(null,vec__22864,(0),null);
var rest = cljs.core.nth.call(null,vec__22864,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"free","free",801364328),prefix], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),(function (){var or__4131__auto__ = rest;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})()], null);
});
re_frisk_shell.filter_parser.parse_clojure_expr = (function re_frisk_shell$filter_parser$parse_clojure_expr(s){
try{var map__22868 = re_frisk_shell.filter_parser.read_string_SINGLEQUOTE_.call(null,s);
var map__22868__$1 = (((((!((map__22868 == null))))?(((((map__22868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22868):map__22868);
var foo = map__22868__$1;
var val = cljs.core.get.call(null,map__22868__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.call(null,map__22868__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),val], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
}catch (e22867){var _ = e22867;
return re_frisk_shell.filter_parser.parse_freeform.call(null,s);
}});
re_frisk_shell.filter_parser.parse_clojure_string = (function re_frisk_shell$filter_parser$parse_clojure_string(s){
try{var map__22874 = re_frisk_shell.filter_parser.read_string_SINGLEQUOTE_.call(null,s);
var map__22874__$1 = (((((!((map__22874 == null))))?(((((map__22874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22874):map__22874);
var val = cljs.core.get.call(null,map__22874__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.call(null,map__22874__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),val], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
}catch (e22870){var _ = e22870;
var vec__22871 = clojure.string.split.call(null,s,/\s+/,(2));
var prefix = cljs.core.nth.call(null,vec__22871,(0),null);
var rest = cljs.core.nth.call(null,vec__22871,(1),null);
var prefix__$1 = clojure.string.replace.call(null,prefix,/^\"/,"");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string-prefix","string-prefix",2091851734),prefix__$1], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),(function (){var or__4131__auto__ = rest;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})()], null);
}});
re_frisk_shell.filter_parser.parse_part = (function re_frisk_shell$filter_parser$parse_part(s){
var G__22876 = cljs.core.first.call(null,s);
switch (G__22876) {
case "[":
case "(":
case "{":
case "#":
case "\\":
case "'":
case ":":
return re_frisk_shell.filter_parser.parse_clojure_expr.call(null,s);

break;
case "\"":
return re_frisk_shell.filter_parser.parse_clojure_string.call(null,s);

break;
default:
return re_frisk_shell.filter_parser.parse_freeform.call(null,s);

}
});
re_frisk_shell.filter_parser.parse_SINGLEQUOTE_ = (function re_frisk_shell$filter_parser$parse_SINGLEQUOTE_(s){
var s__$1 = clojure.string.trim.call(null,s);
var s__$2 = clojure.string.replace.call(null,s__$1,/^\[(.*)\]$/,"$1");
if(cljs.core._EQ_.call(null,s__$2,"")){
return cljs.core.List.EMPTY;
} else {
var map__22878 = re_frisk_shell.filter_parser.parse_part.call(null,s__$2);
var map__22878__$1 = (((((!((map__22878 == null))))?(((((map__22878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22878):map__22878);
var val = cljs.core.get.call(null,map__22878__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.call(null,map__22878__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return cljs.core.cons.call(null,val,re_frisk_shell.filter_parser.parse_SINGLEQUOTE_.call(null,rest));
}
});
re_frisk_shell.filter_parser.parse = (function re_frisk_shell$filter_parser$parse(s){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,re_frisk_shell.filter_parser.parse_SINGLEQUOTE_.call(null,s));
});

//# sourceMappingURL=filter_parser.js.map
