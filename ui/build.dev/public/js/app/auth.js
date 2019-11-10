// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.auth');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('app.basic');
app.auth.email_input = (function app$auth$email_input(email_atom){
return app.basic.input_element.call(null,"email","email","email",email_atom,"Enter your email");
});
app.auth.first_name_input = (function app$auth$first_name_input(first_name_atom){
return app.basic.input_element.call(null,"name","name","text",first_name_atom,"Enter your first name");
});
app.auth.last_name_input = (function app$auth$last_name_input(last_name_atom){
return app.basic.input_element.call(null,"name","name","text",last_name_atom,"Enter your last name");
});
app.auth.lang_list = (function app$auth$lang_list(langs){
return app.basic.dropdown.call(null,"lang-list",langs);
});
app.auth.birthdate_input = (function app$auth$birthdate_input(birthdate_atom){
return app.basic.input_element.call(null,"birthdate","birthdate","date",birthdate_atom,"");
});
app.auth.signup_page = (function app$auth$signup_page(){
var email_address = reagent.core.atom.call(null,"Enter your email");
var first_name = reagent.core.atom.call(null,"Enter your first name");
var last_name = reagent.core.atom.call(null,"Enter your last name");
var birthdate = reagent.core.atom.call(null,null);
return ((function (email_address,first_name,last_name,birthdate){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.signup-wrapper","div.signup-wrapper",1155566122),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.auth.first_name_input,first_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.auth.last_name_input,last_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.auth.email_input,email_address], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.auth.birthdate_input,birthdate], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.auth.lang_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Russian","English"], null)], null)], null)], null);
});
;})(email_address,first_name,last_name,birthdate))
});

//# sourceMappingURL=auth.js.map
