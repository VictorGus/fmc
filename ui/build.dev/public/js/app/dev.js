// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.dev');
goog.require('cljs.core');
goog.require('app.core');
goog.require('re_frisk.core');
goog.require('devtools.core');
devtools.core.install_BANG_.call(null);
cljs.core.enable_console_print_BANG_.call(null);
re_frisk.core.enable_re_frisk_BANG_.call(null);
app.core.init_BANG_.call(null);
app.dev.reload = (function app$dev$reload(){
cljs.core.println.call(null,"Reload");

return app.core.mount_root.call(null);
});

//# sourceMappingURL=dev.js.map
