(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function oa(){this.o=!1;this.l=null;this.i=void 0;this.h=1;this.A=this.m=0;this.C=this.j=null}
function pa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
oa.prototype.B=function(a){this.i=a};
function qa(a,b){a.j={Va:b,Xa:!0};a.h=a.m||a.A}
oa.prototype.return=function(a){this.j={return:a};this.h=this.A};
function w(a,b,c){a.h=c;return{value:b}}
oa.prototype.u=function(a){this.h=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.A=c)}
function sa(a){a.m=0;var b=a.j.Va;a.j=null;return b}
function ta(a){a.C=[a.j];a.m=0;a.A=0}
function ua(a){var b=a.C.splice(0)[0];(b=a.j=a.j||b)?b.Xa?a.h=a.m||a.A:void 0!=b.u&&a.A<b.u?(a.h=b.u,a.j=null):a.h=a.A:a.h=0}
function va(a){this.h=new oa;this.i=a}
function wa(a,b){pa(a.h);var c=a.h.l;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),ya(a)}a.h.l=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Xa)throw b.Va;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=ya(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l["throw"],b,a.h.B):(qa(a.h,b),b=ya(a));return b};
this.return=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){b=new za(new va(b));na&&a.prototype&&na(b,a.prototype);return b}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ia});
t("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Aa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Aa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Aa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Aa(h.data_,l))for(h=0;h<n.length;h++){var q=n[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:n,index:h,entry:q}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||na});
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Aa(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.A()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.A=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.P),reject:g(this.A)}};
b.prototype.P=function(g){if(g===this)this.A(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ea(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.L(g):this.m(g)}};
b.prototype.L=function(g){var h=void 0;try{h=g.then}catch(k){this.A(k);return}"function"==typeof h?this.fa(h,g):this.m(g)};
b.prototype.A=function(g){this.B(2,g)};
b.prototype.m=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.R();this.C()};
b.prototype.R=function(){var g=this;e(function(){if(g.I()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.I=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ea=function(g){var h=this.l();g.oa(h.resolve,h.reject)};
b.prototype.fa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(A){try{l(r(A))}catch(I){n(I)}}:p}
var l,n,q=new b(function(r,p){l=r;n=p});
this.oa(k(g,l),k(h,n));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.oa=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).oa(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function q(A){return function(I){r[A]=I;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).oa(q(r.length-1),n),k=h.next();while(!k.done)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push([d,b[d]]);return c}});
t("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ea(){}
function Fa(a){a.Ga=void 0;a.getInstance=function(){return a.Ga?a.Ga:a.Ga=new a}}
function Ga(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ha(a){var b=Ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ja(a){return Object.prototype.hasOwnProperty.call(a,Ka)&&a[Ka]||(a[Ka]=++Ma)}
var Ka="closure_uid_"+(1E9*Math.random()>>>0),Ma=0;function Na(a,b,c){return a.call.apply(a.bind,arguments)}
function Oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Pa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Pa=Na:Pa=Oa;return Pa.apply(null,arguments)}
function Qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ra(a,b){z(a,b,void 0)}
function C(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.wm=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Sa(a){return a}
;function Ta(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ta);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.ob=b)}
C(Ta,Error);Ta.prototype.name="CustomError";function Ua(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Va(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Xa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ya=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Za=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function $a(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ab(a,b){b=Wa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function bb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function cb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ha(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function db(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function eb(a){var b=fb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function gb(a){for(var b in a)return!1;return!0}
function hb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ib(){var a=E("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function jb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function kb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function lb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=lb(a[c]);return b}
var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ob;function pb(){if(void 0===ob){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Sa,createScript:Sa,createScriptURL:Sa})}catch(c){y.console&&y.console.error(c.message)}ob=a}else ob=a}return ob}
;function qb(a,b){this.h=a===rb&&b||""}
qb.prototype.U=!0;qb.prototype.T=function(){return this.h};
function sb(a){return new qb(rb,a)}
var rb={};sb("");var tb={};function ub(a){this.h=tb===tb?a:"";this.U=!0}
ub.prototype.T=function(){return this.h.toString()};
ub.prototype.toString=function(){return this.h.toString()};function vb(a,b){this.h=b===wb?a:""}
m=vb.prototype;m.U=!0;m.T=function(){return this.h.toString()};
m.Fa=!0;m.Ba=function(){return 1};
m.toString=function(){return this.h+""};
function xb(a){if(a instanceof vb&&a.constructor===vb)return a.h;Ga(a);return"type_error:TrustedResourceUrl"}
var wb={};function yb(a){var b=pb();a=b?b.createScriptURL(a):a;return new vb(a,wb)}
;var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.h=b===Ib?a:""}
m=Hb.prototype;m.U=!0;m.T=function(){return this.h.toString()};
m.Fa=!0;m.Ba=function(){return 1};
m.toString=function(){return this.h.toString()};
function Jb(a){if(a instanceof Hb&&a.constructor===Hb)return a.h;Ga(a);return"type_error:SafeUrl"}
var Kb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),Lb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Mb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ib={},Nb=new Hb("about:invalid#zClosurez",Ib);var Ob;a:{var Pb=y.navigator;if(Pb){var Qb=Pb.userAgent;if(Qb){Ob=Qb;break a}}Ob=""}function F(a){return-1!=Ob.indexOf(a)}
;function Rb(){return F("Firefox")||F("FxiOS")}
function Sb(){return(F("Chrome")||F("CriOS"))&&!F("Edge")}
;var Tb={};function Ub(a,b,c){this.h=c===Tb?a:"";this.i=b;this.U=this.Fa=!0}
Ub.prototype.Ba=function(){return this.i};
Ub.prototype.T=function(){return this.h.toString()};
Ub.prototype.toString=function(){return this.h.toString()};
function Vb(a,b){var c=pb();a=c?c.createHTML(a):a;return new Ub(a,b,Tb)}
;function Wb(a,b){b instanceof Hb||b instanceof Hb||(b="object"==typeof b&&b.U?b.T():String(b),Mb.test(b)||(b="about:invalid#zClosurez"),b=new Hb(b,Ib));a.href=Jb(b)}
function Xb(a,b){a.rel="stylesheet";a.href=xb(b).toString();(b=Yb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Zb(){return Yb("script[nonce]",void 0)}
var $b=/^[\w+/_-]+[=]{0,2}$/;function Yb(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&$b.test(a)?a:"":""}
;function ac(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var bc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cc(a){return a?decodeURI(a):a}
function dc(a){return cc(a.match(bc)[3]||null)}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function gc(a,b){b=fc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var hc=/#|$/;function H(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function ic(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function jc(a){jc[" "](a);return a}
jc[" "]=Ea;var kc=F("Opera"),lc=F("Trident")||F("MSIE"),mc=F("Edge"),nc=F("Gecko")&&!(-1!=Ob.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),oc=-1!=Ob.toLowerCase().indexOf("webkit")&&!F("Edge"),pc=F("Android");function qc(){var a=y.document;return a?a.documentMode:void 0}
var rc;a:{var sc="",tc=function(){var a=Ob;if(nc)return/rv:([^\);]+)(\)|;)/.exec(a);if(mc)return/Edge\/([\d\.]+)/.exec(a);if(lc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(oc)return/WebKit\/(\S+)/.exec(a);if(kc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
tc&&(sc=tc?tc[1]:"");if(lc){var uc=qc();if(null!=uc&&uc>parseFloat(sc)){rc=String(uc);break a}}rc=sc}var vc=rc,wc;if(y.document&&lc){var xc=qc();wc=xc?xc:parseInt(vc,10)||void 0}else wc=void 0;var yc=wc;Rb();var zc=ic()||F("iPod"),Ac=F("iPad");!F("Android")||Sb()||Rb();Sb();var Bc=F("Safari")&&!(Sb()||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||Rb()||F("Silk")||F("Android"))&&!(ic()||F("iPad")||F("iPod"));var Cc={},Dc=null;
function Ec(a){var b=3;Ha(a);void 0===b&&(b=0);if(!Dc){Dc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Cc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Dc[h]&&(Dc[h]=g)}}}b=Cc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Fc={ym:{value:!0,configurable:!0}};var Gc=Object,Hc=Gc.freeze,Ic=[];Array.isArray(Ic)&&!Object.isFrozen(Ic)&&Object.defineProperties(Ic,Fc);Hc.call(Gc,Ic);var J=window;sb("csi.gstatic.com");sb("googleads.g.doubleclick.net");sb("pagead2.googlesyndication.com");sb("partner.googleadservices.com");sb("pubads.g.doubleclick.net");sb("securepubads.g.doubleclick.net");sb("tpc.googlesyndication.com");var Jc={};function Kc(){}
function Lc(a){this.h=a}
v(Lc,Kc);Lc.prototype.toString=function(){return this.h};
var Mc=new Lc("about:invalid#zTSz",Jc);function Nc(a){if(a instanceof Kc)if(a instanceof Lc)a=a.h;else throw Error("");else a=Jb(a);return a}
;function Oc(a,b){a.src=xb(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;var d=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]");(c=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Pc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Pc.prototype;m.clone=function(){return new Pc(this.x,this.y)};
m.equals=function(a){return a instanceof Pc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Qc(a,b){this.width=a;this.height=b}
m=Qc.prototype;m.clone=function(){return new Qc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Rc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Sc(a,b){db(b,function(c,d){c&&"object"==typeof c&&c.U&&(c=c.T());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Tc.hasOwnProperty(d)?a.setAttribute(Tc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Tc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Uc(a,b,c){var d=arguments,e=document,f=d[1],g=Vc(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):Sc(g,f));2<d.length&&Wc(e,g,d);return g}
function Wc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ha(f)||Ia(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ia(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}D(g?bb(f):f,d)}}}
function Vc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Xc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Yc(a){var b=Zc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function $c(){var a=[];Yc(function(b){a.push(b)});
return a}
var Zc={hc:"allow-forms",ic:"allow-modals",jc:"allow-orientation-lock",kc:"allow-pointer-lock",lc:"allow-popups",mc:"allow-popups-to-escape-sandbox",nc:"allow-presentation",oc:"allow-same-origin",pc:"allow-scripts",qc:"allow-top-navigation",sc:"allow-top-navigation-by-user-activation"},ad=Va(function(){return $c()});
function bd(){var a=Vc(document,"IFRAME"),b={};D(ad(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function cd(a){this.isValid=a}
function dd(a){return new cd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ed=[dd("data"),dd("http"),dd("https"),dd("mailto"),dd("ftp"),new cd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function fd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var gd=(new Date).getTime();function hd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function id(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(q){for(var r=g,p=0;64>p;p+=4)r[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(q<<1|q>>>31)&4294967295;q=e[0];var A=e[1],I=e[2],G=e[3],R=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var V=G^A&(I^G);var K=1518500249}else V=A^I^G,K=1859775393;else 60>p?(V=A&I|G&(A|I),K=2400959708):(V=A^I^G,K=3395469782);V=((q<<5|q>>>27)&4294967295)+V+R+K+r[p]&4294967295;R=G;G=I;I=(A<<30|A>>>2)&4294967295;A=q;q=V}e[0]=e[0]+q&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+I&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+R&4294967295}
function c(q,r){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],A=0,I=q.length;A<I;++A)p.push(q.charCodeAt(A));q=p}r||(r=q.length);p=0;if(0==l)for(;p+64<r;)b(q.slice(p,p+64)),p+=64,n+=64;for(;p<r;)if(f[l++]=q[p++],n++,64==l)for(l=0,b(f);p+64<r;)b(q.slice(p,p+64)),p+=64,n+=64}
function d(){var q=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var A=24;0<=A;A-=8)q[r++]=e[p]>>A&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,qb:function(){for(var q=d(),r="",p=0;p<q.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return r}}}
;function jd(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,kd(hd(d),a,c||null)].join(" "):null}
function kd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),ld(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=ld(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ld(a){var b=id();b.update(a);return b.qb().toLowerCase()}
;var md={};function nd(a){this.h=a||{cookie:""}}
m=nd.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ha:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Dm;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ha}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ha:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var od=new nd("undefined"==typeof document?null:document);function pd(a){return!!md.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function qd(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;pd(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new nd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");pd(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function rd(a,b,c,d){(a=y[a])||(a=(new nd(document)).get(b));return a?jd(a,c,d):null}
function sd(a){var b=void 0===b?!1:b;var c=hd(String(y.location.href)),d=[];if(qd(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new nd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?jd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&pd(b)&&((b=rd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=rd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function td(){this.data_=[];this.h=-1}
td.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
td.prototype.get=function(a){return!!this.data_[a]};
function ud(a){-1==a.h&&(a.h=Za(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function vd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
vd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function wd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var xd;
function yd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Vc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Pa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ra;c.Ra=null;e()}};
return function(e){d.next={Ra:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function zd(a){y.setTimeout(function(){throw a;},0)}
;function Ad(){this.i=this.h=null}
Ad.prototype.add=function(a,b){var c=Bd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ad.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Bd=new vd(function(){return new Cd},function(a){return a.reset()});
function Cd(){this.next=this.scope=this.h=null}
Cd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Cd.prototype.reset=function(){this.next=this.scope=this.h=null};function Dd(a,b){Ed||Fd();Gd||(Ed(),Gd=!0);Hd.add(a,b)}
var Ed;function Fd(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Ed=function(){a.then(Id)}}else Ed=function(){var b=Id;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!F("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(xd||(xd=yd()),xd(b)):y.setImmediate(b)}}
var Gd=!1,Hd=new Ad;function Id(){for(var a;a=Hd.remove();){try{a.h.call(a.scope)}catch(b){zd(b)}wd(Bd,a)}Gd=!1}
;function Jd(a,b){this.i=a[y.Symbol.iterator]();this.j=b;this.l=0}
Jd.prototype[Symbol.iterator]=function(){return this};
Jd.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value,this.l++),done:a.done}};
function Kd(a,b){return new Jd(a,b)}
;function Ld(){this.blockSize=-1}
;function Md(){this.blockSize=-1;this.blockSize=64;this.h=[];this.A=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
C(Md,Ld);Md.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Nd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Md.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.A,f=this.i;d<b;){if(0==f)for(;d<=c;)Nd(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Nd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Nd(this,e);f=0;break}}this.i=f;this.l+=b}};
Md.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.A[c]=b&255,b/=256;Nd(this,this.A);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Od(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Pd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Qd[c])c=Qd[c];else{c=String(c);if(!Qd[c]){var f=/function\s+([^\(]+)/m.exec(c);Qd[c]=f?f[1]:"[Anonymous]"}c=Qd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Pd(a,b){b||(b={});b[Rd(a)]=!0;var c=a.stack||"";(a=a.ob)&&!b[Rd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Pd(a,b));return c}
function Rd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Qd={};function Sd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Td(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ha(d)?Td.apply(null,d):Sd(d)}}
;function L(){this.h=this.h;this.A=this.A}
L.prototype.h=!1;L.prototype.dispose=function(){this.h||(this.h=!0,this.D())};
function Ud(a,b){a.h?b():(a.A||(a.A=[]),a.A.push(b))}
L.prototype.D=function(){if(this.A)for(;this.A.length;)this.A.shift()()};function Vd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Wd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Xd(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Vd(a).match(/\S+/g)||[],b=0<=Wa(a,b));return b}
function Yd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Xd(a,"inverted-hdpi")&&Wd(a,Array.prototype.filter.call(a.classList?a.classList:Vd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Zd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function $d(){}
$d.prototype.next=function(){return $d.prototype.h.call(this)};
$d.prototype.h=function(){throw Zd;};
$d.prototype.M=function(){return this};function ae(a){if(a instanceof be||a instanceof ce||a instanceof de)return a;if("function"==typeof a.next)return new be(function(){return ee(a)});
if("function"==typeof a[Symbol.iterator])return new be(function(){return a[Symbol.iterator]()});
if("function"==typeof a.M)return new be(function(){return ee(a.M())});
throw Error("Not an iterator or iterable.");}
function ee(a){if(!(a instanceof $d))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.h();break}catch(d){if(d!==Zd)throw d;b=!0}return{value:c,done:b}}}}
function be(a){this.j=a}
be.prototype.M=function(){return new ce(this.j())};
be.prototype[Symbol.iterator]=function(){return new de(this.j())};
be.prototype.i=function(){return new de(this.j())};
function ce(a){this.j=a}
v(ce,$d);ce.prototype.h=function(){var a=this.j.next();if(a.done)throw Zd;return a.value};
ce.prototype.next=function(){return ce.prototype.h.call(this)};
ce.prototype[Symbol.iterator]=function(){return new de(this.j)};
ce.prototype.i=function(){return new de(this.j)};
function de(a){be.call(this,function(){return a});
this.l=a}
v(de,be);de.prototype.next=function(){return this.l.next()};function fe(a,b){this.i={};this.h=[];this.aa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof fe)for(c=ge(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ge(a){he(a);return a.h.concat()}
m=fe.prototype;m.has=function(a){return ie(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||je;he(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function je(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.aa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return ie(this.i,a)?(delete this.i[a],--this.size,this.aa++,this.h.length>2*this.size&&he(this),!0):!1};
function he(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];ie(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],ie(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return ie(this.i,a)?this.i[a]:b};
m.set=function(a,b){ie(this.i,a)||(this.size+=1,this.h.push(a),this.aa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=ge(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new fe(this)};
m.keys=function(){return ae(this.M(!0)).i()};
m.values=function(){return ae(this.M(!1)).i()};
m.entries=function(){var a=this;return Kd(this.keys(),function(b){return[b,a.get(b)]})};
m.M=function(a){he(this);var b=0,c=this.aa,d=this,e=new $d;e.h=function(){if(c!=d.aa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Zd;var f=d.h[b++];return a?f:d.i[f]};
e.next=e.h.bind(e);return e};
function ie(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function ke(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
ke.prototype.stopPropagation=function(){this.j=!0};
ke.prototype.preventDefault=function(){this.defaultPrevented=!0};var le=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ea,b),y.removeEventListener("test",Ea,b)}catch(c){}return a}();function me(a,b){ke.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
C(me,ke);var ne={2:"touch",3:"pen",4:"mouse"};
me.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(nc){a:{try{jc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ne[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&me.O.preventDefault.call(this)};
me.prototype.stopPropagation=function(){me.O.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
me.prototype.preventDefault=function(){me.O.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var oe="closure_listenable_"+(1E6*Math.random()|0);var pe=0;function qe(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.ta=e;this.key=++pe;this.ja=this.na=!1}
function re(a){a.ja=!0;a.listener=null;a.h=null;a.src=null;a.ta=null}
;function se(a){this.src=a;this.listeners={};this.h=0}
se.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=te(a,b,d,e);-1<g?(b=a[g],c||(b.na=!1)):(b=new qe(b,this.src,f,!!d,e),b.na=c,a.push(b));return b};
se.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=te(e,b,c,d);return-1<b?(re(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ue(a,b){var c=b.type;c in a.listeners&&ab(a.listeners[c],b)&&(re(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function te(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ja&&f.listener==b&&f.capture==!!c&&f.ta==d)return e}return-1}
;var ve="closure_lm_"+(1E6*Math.random()|0),we={},xe=0;function ye(a,b,c,d,e){if(d&&d.once)ze(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ye(a,b[f],c,d,e);else c=Ae(c),a&&a[oe]?a.V(b,c,Ia(d)?!!d.capture:!!d,e):Be(a,b,c,!1,d,e)}
function Be(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ia(e)?!!e.capture:!!e,h=Ce(a);h||(a[ve]=h=new se(a));c=h.add(b,c,d,g,f);if(!c.h){d=De();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)le||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ee(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");xe++}}
function De(){function a(c){return b.call(a.src,a.listener,c)}
var b=Fe;return a}
function ze(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);else c=Ae(c),a&&a[oe]?a.i.add(String(b),c,!0,Ia(d)?!!d.capture:!!d,e):Be(a,b,c,!0,d,e)}
function Ge(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ge(a,b[f],c,d,e);else(d=Ia(d)?!!d.capture:!!d,c=Ae(c),a&&a[oe])?a.i.remove(String(b),c,d,e):a&&(a=Ce(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=te(b,c,d,e)),(c=-1<a?b[a]:null)&&He(c))}
function He(a){if("number"!==typeof a&&a&&!a.ja){var b=a.src;if(b&&b[oe])ue(b.i,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ee(c),d):b.addListener&&b.removeListener&&b.removeListener(d);xe--;(c=Ce(b))?(ue(c,a),0==c.h&&(c.src=null,b[ve]=null)):re(a)}}}
function Ee(a){return a in we?we[a]:we[a]="on"+a}
function Fe(a,b){if(a.ja)a=!0;else{b=new me(b,this);var c=a.listener,d=a.ta||a.src;a.na&&He(a);a=c.call(d,b)}return a}
function Ce(a){a=a[ve];return a instanceof se?a:null}
var Ie="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ae(a){if("function"===typeof a)return a;a[Ie]||(a[Ie]=function(b){return a.handleEvent(b)});
return a[Ie]}
;function Je(){L.call(this);this.i=new se(this);this.L=this;this.o=null}
C(Je,L);Je.prototype[oe]=!0;Je.prototype.addEventListener=function(a,b,c,d){ye(this,a,b,c,d)};
Je.prototype.removeEventListener=function(a,b,c,d){Ge(this,a,b,c,d)};
function Ke(a,b){var c=a.o;if(c){var d=[];for(var e=1;c;c=c.o)d.push(c),++e}a=a.L;c=b.type||b;"string"===typeof b?b=new ke(b,a):b instanceof ke?b.target=b.target||a:(e=b,b=new ke(c,a),nb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Le(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Le(g,c,!0,b)&&e,b.j||(e=Le(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Le(g,c,!1,b)&&e}
Je.prototype.D=function(){Je.O.D.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,re(d[e]);delete a.listeners[c];a.h--}}this.o=null};
Je.prototype.V=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Le(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ja&&g.capture==c){var h=g.listener,k=g.ta||g.src;g.na&&ue(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Me(a){Ne();return yb(a)}
var Ne=Ea;function Oe(a){var b=[];Pe(new Qe,a,b);return b.join("")}
function Qe(){}
function Pe(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Pe(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Re(d,c),c.push(":"),Pe(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Re(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Se={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Te=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Re(a,b){b.push('"',a.replace(Te,function(c){var d=Se[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Se[c]=d);return d}),'"')}
;function Ue(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Ve(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.A=this.m=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){We(b,2,c)},function(c){We(b,3,c)})}catch(c){We(this,3,c)}}
function Xe(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Xe.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Ye=new vd(function(){return new Xe},function(a){a.reset()});
function Ze(a,b,c){var d=Ye.get();d.i=a;d.onRejected=b;d.context=c;return d}
function $e(a){return new Ve(function(b,c){c(a)})}
Ve.prototype.then=function(a,b,c){return af(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ve.prototype.$goog_Thenable=!0;function bf(a,b){return af(a,null,b,void 0)}
Ve.prototype.cancel=function(a){if(0==this.h){var b=new cf(a);Dd(function(){df(this,b)},this)}};
function df(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?df(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ef(c),ff(c,e,3,b)))}a.j=null}else We(a,3,b)}
function gf(a,b){a.i||2!=a.h&&3!=a.h||hf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function af(a,b,c,d){var e=Ze(null,null,null);e.h=new Ve(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof cf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;gf(a,e);return e.h}
Ve.prototype.C=function(a){this.h=0;We(this,2,a)};
Ve.prototype.I=function(a){this.h=0;We(this,3,a)};
function We(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.I;if(d instanceof Ve){gf(d,Ze(e||Ea,f||null,a));var g=!0}else if(Ue(d))d.then(e,f,a),g=!0;else{if(Ia(d))try{var h=d.then;if("function"===typeof h){jf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.h=b,a.j=null,hf(a),3!=b||c instanceof cf||kf(a,c))}}
function jf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function hf(a){a.m||(a.m=!0,Dd(a.B,a))}
function ef(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Ve.prototype.B=function(){for(var a;a=ef(this);)ff(this,a,this.h,this.o);this.m=!1};
function ff(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.A;a=a.j)a.A=!1;if(b.h)b.h.j=null,lf(b,c,d);else try{b.j?b.i.call(b.context):lf(b,c,d)}catch(e){mf.call(null,e)}wd(Ye,b)}
function lf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function kf(a,b){a.A=!0;Dd(function(){a.A&&mf.call(null,b)})}
var mf=zd;function cf(a){Ta.call(this,a)}
C(cf,Ta);cf.prototype.name="cancel";function M(a){L.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.B=!!a}
C(M,L);m=M.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function nf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ia(b)}}
m.ia=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ea):(c&&ab(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.ba=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];of(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.ia(c)}}return 0!=e}return!1};
function of(a,b,c){Dd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.ia,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.D=function(){M.O.D.call(this);this.clear();this.l.length=0};function pf(a){this.h=a}
pf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Oe(b))};
pf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
pf.prototype.remove=function(a){this.h.remove(a)};function qf(a){this.h=a}
C(qf,pf);function rf(a){this.data=a}
function sf(a){return void 0===a||a instanceof rf?a:new rf(a)}
qf.prototype.set=function(a,b){qf.O.set.call(this,a,sf(b))};
qf.prototype.i=function(a){a=qf.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
qf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function tf(a){this.h=a}
C(tf,qf);tf.prototype.set=function(a,b,c){if(b=sf(b)){if(c){if(c<Date.now()){tf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}tf.O.set.call(this,a,b)};
tf.prototype.i=function(a){var b=tf.O.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())tf.prototype.remove.call(this,a);else return b}};function uf(){}
;function vf(){}
C(vf,uf);vf.prototype[Symbol.iterator]=function(){return ae(this.M(!0)).i()};
vf.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function wf(a){this.h=a}
C(wf,vf);m=wf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.M=function(a){var b=0,c=this.h,d=new $d;d.h=function(){if(b>=c.length)throw Zd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function xf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
C(xf,wf);function yf(a,b){this.i=a;this.h=null;var c;if(c=lc)c=!(9<=Number(yc));if(c){zf||(zf=new fe);this.h=zf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),zf.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
C(yf,vf);var Af={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},zf=null;function Bf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Af[b]})}
m=yf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Bf(a),b);Cf(this)};
m.get=function(a){a=this.h.getAttribute(Bf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Bf(a));Cf(this)};
m.M=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new $d;d.h=function(){if(b>=c.length)throw Zd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Cf(this)};
function Cf(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Df(a,b){this.i=a;this.h=b+"::"}
C(Df,vf);Df.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Df.prototype.get=function(a){return this.i.get(this.h+a)};
Df.prototype.remove=function(a){this.i.remove(this.h+a)};
Df.prototype.M=function(a){var b=this.i.M(!0),c=this,d=new $d;d.h=function(){for(var e=b.h();e.substr(0,c.h.length)!=c.h;)e=b.h();return a?e.substr(c.h.length):c.i.get(e)};
d.next=d.h.bind(d);return d};function Ef(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Ff,Gf,Hf=y.window,If=(null===(Ff=null===Hf||void 0===Hf?void 0:Hf.yt)||void 0===Ff?void 0:Ff.config_)||(null===(Gf=null===Hf||void 0===Hf?void 0:Hf.ytcfg)||void 0===Gf?void 0:Gf.data_)||{};z("yt.config_",If,void 0);function N(a){for(var b=0;b<arguments.length;++b);Ef(If,arguments)}
function E(a,b){return a in If?If[a]:b}
;var Jf=[];function Kf(a){Jf.forEach(function(b){return b(a)})}
function Lf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Mf(b)}}:a}
function Mf(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=E("ERRORS",[]),e.push([a,"ERROR",b,c,d]),N("ERRORS",e));Kf(a)}
function Nf(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=E("ERRORS",[]),e.push([a,"WARNING",b,c,d]),N("ERRORS",e))}
;var Of=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Of,void 0);function Pf(a){Ef(Of,arguments)}
;function O(a){a=Qf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Rf(a,b){a=Qf(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Qf(a){var b=E("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:E("EXPERIMENT_FLAGS",{})[a]}
;var Sf=0,Tf=oc?"webkit":nc?"moz":lc?"ms":kc?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Sf},void 0);var Uf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Vf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Uf||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Wf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Vf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Vf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Vf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var fb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",fb,void 0);var Xf=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",Xf,void 0);
function Yf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return eb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ia(e[4])&&Ia(d)&&jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Zf=Va(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function $f(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Yf(a,b,c,d);if(e)return e;e=++Xf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Vf(h);if(!Xc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Vf(h);
h.currentTarget=a;return c.call(a,h)};
g=Lf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Zf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);fb[e]=[a,b,c,g,d];return e}
function ag(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in fb){var c=fb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Zf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete fb[b]}}))}
;var bg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function cg(a,b){"function"===typeof a&&(a=Lf(a));return window.setTimeout(a,b)}
function dg(a){window.clearTimeout(a)}
;function eg(a){this.C=a;this.i=null;this.m=0;this.B=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.L=$f(window,"mousemove",Pa(this.P,this));a=Pa(this.I,this);"function"===typeof a&&(a=Lf(a));this.R=window.setInterval(a,25)}
C(eg,L);eg.prototype.P=function(a){void 0===a.h&&Wf(a);var b=a.h;void 0===a.i&&Wf(a);this.i=new Pc(b,a.i)};
eg.prototype.I=function(){if(this.i){var a=bg();if(0!=this.m){var b=this.B,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.o=d}this.m=a;this.B=this.i;this.l=(this.l+1)%4}};
eg.prototype.D=function(){window.clearInterval(this.R);ag(this.L)};function fg(){}
function gg(a,b){return hg(a,0,b)}
function ig(a,b){return hg(a,1,b)}
;function jg(){fg.apply(this,arguments)}
v(jg,fg);function kg(){jg.h||(jg.h=new jg);return jg.h}
function hg(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):cg(a,c||0)}
function lg(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):dg(a)}}
jg.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
jg.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};kg();var mg={};
function ng(a){var b=void 0===a?{}:a;a=void 0===b.Hb?!1:b.Hb;b=void 0===b.sb?!0:b.sb;if(null==B("_lact",window)){var c=parseInt(E("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&og();$f(document,"keydown",og);$f(document,"keyup",og);$f(document,"mousedown",og);$f(document,"mouseup",og);a?$f(window,"touchmove",function(){pg("touchmove",200)},{passive:!0}):($f(window,"resize",function(){pg("resize",200)}),b&&$f(window,"scroll",function(){pg("scroll",200)}));
new eg(function(){pg("mouse",100)});
$f(document,"touchstart",og,{passive:!0});$f(document,"touchend",og,{passive:!0})}}
function pg(a,b){mg[a]||(mg[a]=!0,ig(function(){og();mg[a]=!1},b))}
function og(){null==B("_lact",window)&&ng();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function qg(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function rg(){var a=sg;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function tg(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var ug=/^[\w.]*$/,vg={q:!0,search_query:!0};function wg(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=xg(f[0]||""),h=xg(f[1]||"");g in c?Array.isArray(c[g])?cb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],n=String(wg);k.args=[{key:l,value:f[1],query:a,method:yg==n?"unchanged":n}];vg.hasOwnProperty(l)||Nf(k)}}return c}
var yg=String(wg);function zg(a){var b=[];db(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ag(a){"?"==a.charAt(0)&&(a=a.substr(1));return wg(a,"&")}
function Bg(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Ag(1<a.length?a[1]:a[0])):{}}
function Cg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ag(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return gc(a,e)+d}
function Dg(a){if(!b)var b=window.location.href;var c=a.match(bc)[1]||null,d=dc(a);c&&d?(a=a.match(bc),b=b.match(bc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?dc(b)==d&&(Number(b.match(bc)[4]||null)||null)==(Number(a.match(bc)[4]||null)||null):!0;return a}
function xg(a){return a&&a.match(ug)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Eg(a){var b=Fg;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=gd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(La){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?J:g;try{var h=g.history.length}catch(La){h=0}e.u_his=h;e.u_java=!!J.navigator&&"unknown"!==typeof J.navigator.javaEnabled&&!!J.navigator.javaEnabled&&J.navigator.javaEnabled();J.screen&&(e.u_h=J.screen.height,e.u_w=J.screen.width,
e.u_ah=J.screen.availHeight,e.u_aw=J.screen.availWidth,e.u_cd=J.screen.colorDepth);J.navigator&&J.navigator.plugins&&(e.u_nplug=J.navigator.plugins.length);J.navigator&&J.navigator.mimeTypes&&(e.u_nmime=J.navigator.mimeTypes.length)}catch(La){}h=b.h;try{var k=h.screenX;var l=h.screenY}catch(La){}try{var n=h.outerWidth;var q=h.outerHeight}catch(La){}try{var r=h.innerWidth;var p=h.innerHeight}catch(La){}try{var A=h.screenLeft;var I=h.screenTop}catch(La){}try{r=h.innerWidth,p=h.innerHeight}catch(La){}try{var G=
h.screen.availWidth;var R=h.screen.availTop}catch(La){}k=[A,I,k,l,G,R,n,q,r,p];l=b.h.top;try{var V=(l||window).document,K="CSS1Compat"==V.compatMode?V.documentElement:V.body;var U=(new Qc(K.clientWidth,K.clientHeight)).round()}catch(La){U=new Qc(-12245933,-12245933)}V=U;U={};K=new td;y.SVGElement&&y.document.createElementNS&&K.set(0);l=bd();l["allow-top-navigation-by-user-activation"]&&K.set(1);l["allow-popups-to-escape-sandbox"]&&K.set(2);y.crypto&&y.crypto.subtle&&K.set(3);y.TextDecoder&&y.TextEncoder&&
K.set(4);K=ud(K);U.bc=K;U.bih=V.height;U.biw=V.width;U.brdim=k.join();b=b.i;b=(U.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,U.wgl=!!J.WebGLRenderingContext,U);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Fg=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return zg(Eg(a))},void 0);Date.now();var Gg="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Hg(){if(!Gg)return null;var a=Gg();return"open"in a?a:null}
function Ig(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var Jg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Kg="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),Lg=!1;
function Mg(a,b){b=void 0===b?{}:b;var c=Dg(a),d=O("web_ajax_ignore_global_headers_if_set"),e;for(e in Jg){var f=E(Jg[e]);!f||!c&&dc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!dc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!dc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!dc(a))b["X-YouTube-Ad-Signals"]=zg(Eg(void 0));return b}
function Ng(a){var b=window.location.search,c=dc(a);O("debug_handle_relative_url_for_query_forward_killswitch")||c||!Dg(a)||(c=document.location.hostname);var d=cc(a.match(bc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ag(b),f={};D(Kg,function(g){e[g]&&(f[g]=e[g])});
return Cg(a,f||{},!1)}
function Og(a,b){var c=b.format||"JSON";a=Pg(a,b);var d=Qg(a,b),e=!1,f=Rg(a,function(k){if(!e){e=!0;h&&dg(h);var l=Ig(k),n=null,q=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||q||r)n=Sg(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};q=b.context||y;l?b.onSuccess&&b.onSuccess.call(q,k,n):b.onError&&b.onError.call(q,k,n);b.onFinish&&b.onFinish.call(q,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=cg(function(){e||(e=!0,f.abort(),dg(h),g.call(b.context||y,f))},b.timeout)}return f}
function Pg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=E("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=Cg(a,b||{},!0);return a}
function Qg(a,b){var c=E("XSRF_FIELD_NAME",void 0),d=E("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=E("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||dc(a)&&!b.withCredentials&&dc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ag(e),nb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):fc(e));f=e||f&&!gb(f);!Lg&&f&&
"POST"!=b.method&&(Lg=!0,Mf(Error("AJAX request with postData should use POST")));return e}
function Sg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Nf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Tg(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ug(g)})}d&&Vg(e);
return e}
function Vg(a){if(Ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;sb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Vb(a[b],null);a[c]=d}else Vg(a[b])}}
function Tg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ug(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Rg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Lf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Hg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;O("debug_forward_web_query_parameters")&&(a=Ng(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Mg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Wg=zc||Ac;function Xg(a){var b=Ob;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Yg={},Zg=0;
function $g(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Xg("cobalt")){if(a){a instanceof Hb||(a="object"==typeof a&&a.U?a.T():String(a),Mb.test(a)?a=new Hb(a,Ib):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Lb))&&Kb.test(b[1])?new Hb(a,Ib):null));b=Jb(a||Nb);if("about:invalid#zClosurez"===b||b.startsWith("data"))a="";else{if(b instanceof Ub)a=b;else{var f="object"==typeof b;a=null;f&&b.Fa&&(a=b.Ba());b=f&&b.U?b.T():String(b);Gb.test(b)&&(-1!=b.indexOf("&")&&(b=b.replace(Ab,"&amp;")),-1!=b.indexOf("<")&&
(b=b.replace(Bb,"&lt;")),-1!=b.indexOf(">")&&(b=b.replace(Cb,"&gt;")),-1!=b.indexOf('"')&&(b=b.replace(Db,"&quot;")),-1!=b.indexOf("'")&&(b=b.replace(Eb,"&#39;")),-1!=b.indexOf("\x00")&&(b=b.replace(Fb,"&#0;")));a=Vb(b,a)}a instanceof Ub&&a.constructor===Ub?a=a.h:(Ga(a),a="type_error:SafeHtml");a=encodeURIComponent(String(Oe(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Uc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Rg(a,
b,"POST",e,d);else if(E("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Rg(a,b,"GET","",d);else{b:{try{var g=new Ua({url:a});if(g.j&&g.i||g.l){var h=cc(a.match(bc)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(hc);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var q=a.charCodeAt(c+2);if(!q||61==q||38==q||35==q){var r=c;break d}}c+=3}r=-1}if(0>r)var p=null;else{var A=a.indexOf("&",r);if(0>A||A>l)A=l;r+=3;p=decodeURIComponent(a.substr(r,A-r).replace(/\+/g,
" "))}k="1"!==p}f=!k;break b}}catch(I){}f=!1}f?ah(a)?(b&&b(),f=!0):f=!1:f=!1;f||bh(a,b)}}
function ch(a,b,c){c=void 0===c?"":c;ah(a,c)?b&&b():$g(a,b,void 0,void 0,c)}
function ah(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function bh(a,b){var c=new Image,d=""+Zg++;Yg[d]=c;c.onload=c.onerror=function(){b&&Yg[d]&&b();delete Yg[d]};
c.src=a}
;var dh=y.ytPubsubPubsubInstance||new M,eh=y.ytPubsubPubsubSubscribedKeys||{},fh=y.ytPubsubPubsubTopicToKeys||{},gh=y.ytPubsubPubsubIsSynchronous||{};function hh(a,b){var c=ih();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){eh[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{gh[a]?f():cg(f,0)}catch(g){Mf(g)}},void 0);
eh[d]=!0;fh[a]||(fh[a]=[]);fh[a].push(d);return d}return 0}
function jh(a){var b=ih();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),D(a,function(c){b.unsubscribeByKey(c);delete eh[c]}))}
function kh(a,b){var c=ih();c&&c.publish.apply(c,arguments)}
function lh(a){var b=ih();if(b)if(b.clear(a),a)mh(a);else for(var c in fh)mh(c)}
function ih(){return y.ytPubsubPubsubInstance}
function mh(a){fh[a]&&(a=fh[a],D(a,function(b){eh[b]&&delete eh[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.ia;M.prototype.publish=M.prototype.ba;M.prototype.clear=M.prototype.clear;z("ytPubsubPubsubInstance",dh,void 0);z("ytPubsubPubsubTopicToKeys",fh,void 0);z("ytPubsubPubsubIsSynchronous",gh,void 0);z("ytPubsubPubsubSubscribedKeys",eh,void 0);var nh=window,P=nh.ytcsi&&nh.ytcsi.now?nh.ytcsi.now:nh.performance&&nh.performance.timing&&nh.performance.now&&nh.performance.timing.navigationStart?function(){return nh.performance.timing.navigationStart+nh.performance.now()}:function(){return(new Date).getTime()};var oh=Rf("initial_gel_batch_timeout",2E3),ph=Math.pow(2,16)-1,qh=void 0,rh=0,sh=0,th=0,uh=!0,vh=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",vh,void 0);var wh=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",wh,void 0);
function xh(a,b){if("log_event"===a.endpoint){var c="";a.ra?c="visitorOnlyApprovedKey":a.cttAuthInfo&&(wh[a.cttAuthInfo.token]=yh(a.cttAuthInfo),c=a.cttAuthInfo.token);var d=vh.get(c)||[];vh.set(c,d);d.push(a.payload);b&&(qh=new b);a=Rf("tvhtml5_logging_max_batch")||Rf("web_logging_max_batch")||100;b=P();d.length>=a?zh({writeThenSend:!0},O("flush_only_full_queue")?c:void 0):10<=b-th&&(Ah(),th=b)}}
function Bh(a,b){if("log_event"===a.endpoint){var c="";a.ra?c="visitorOnlyApprovedKey":a.cttAuthInfo&&(wh[a.cttAuthInfo.token]=yh(a.cttAuthInfo),c=a.cttAuthInfo.token);var d=new Map;d.set(c,[a.payload]);b&&(qh=new b);return new Ve(function(e){qh&&qh.isReady()?Ch(d,e,{bypassNetworkless:!0}):e()})}}
function zh(a,b){a=void 0===a?{}:a;new Ve(function(c){dg(rh);dg(sh);sh=0;if(qh&&qh.isReady())if(void 0!==b){var d=new Map,e=vh.get(b)||[];d.set(b,e);Ch(d,c,a);vh.delete(b)}else Ch(vh,c,a),vh.clear();else Ah(),c()})}
function Ah(){O("web_gel_timeout_cap")&&!sh&&(sh=cg(function(){zh({writeThenSend:!0})},6E4));
dg(rh);var a=E("LOGGING_BATCH_TIMEOUT",Rf("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&uh&&(a=oh);rh=cg(function(){zh({writeThenSend:!0})},a)}
function Ch(a,b,c){var d=qh;c=void 0===c?{}:c;var e=Math.round(P()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h=h.next().value;h=lb({context:Dh(d.config_||Eh())});h.events=k;(k=wh[g])&&Fh(h,g,k);delete wh[g];g="visitorOnlyApprovedKey"===g;Gh(h,e,g);O("always_send_and_write")&&(c.writeThenSend=!1);O("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&ch("/generate_204");Hh(d,"log_event",h,{retry:!0,onSuccess:function(){f--;
f||b()},
onError:function(){f--;f||b()},
bb:c,ra:g});uh=!1}}
function Gh(a,b,c){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=E("EVENT_ID",void 0))&&((c=E("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*ph/2)),c++,c>ph&&(c=1),N("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Fh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function yh(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var Ih=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Ih,void 0);
function Jh(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=qg();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&d.Z&&(a=e.context,b=d.Z,Ih[b]=b in Ih?Ih[b]+1:0,a.sequence={index:Ih[b],groupKey:b},d.tb&&delete Ih[d.Z]);(d.Em?Bh:xh)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,ra:d.ra},c)}
;function Kh(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Lh(a,b,c,d,e){od.set(""+a,b,{Ha:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var Mh=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Mh,void 0);function Nh(){this.h=E("ALT_PREF_COOKIE_NAME","PREF");this.i=E("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=od.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Mh[d]=c.toString())}}}
Nh.prototype.get=function(a,b){Oh(a);Ph(a);a=void 0!==Mh[a]?Mh[a].toString():null;return null!=a?a:b?b:""};
Nh.prototype.set=function(a,b){Oh(a);Ph(a);if(null==b)throw Error("ExpectedNotNull");Mh[a]=b.toString()};
Nh.prototype.remove=function(a){Oh(a);Ph(a);delete Mh[a]};
Nh.prototype.clear=function(){for(var a in Mh)delete Mh[a]};
function Ph(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Oh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Qh(a){a=void 0!==Mh[a]?Mh[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Fa(Nh);var Rh={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Sh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Th(){var a=y.navigator;return a?a.connection:void 0}
;function Uh(){return"INNERTUBE_API_KEY"in If&&"INNERTUBE_API_VERSION"in If}
function Eh(){return{innertubeApiKey:E("INNERTUBE_API_KEY",void 0),innertubeApiVersion:E("INNERTUBE_API_VERSION",void 0),vb:E("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wb:E("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),yb:E("INNERTUBE_CONTEXT_HL",void 0),xb:E("INNERTUBE_CONTEXT_GL",void 0),zb:E("INNERTUBE_HOST_OVERRIDE",void 0)||"",Bb:!!E("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ab:!!E("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:E("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Dh(a){var b={client:{hl:a.yb,gl:a.xb,clientName:a.wb,clientVersion:a.innertubeContextClientVersion,configInfo:a.vb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=E("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=E("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=E("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!O("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Kh()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!O("music_web_display_mode_killswitch")){var h;b.client.ab=null!=(h=b.client.ab)?h:{};b.client.ab.webDisplayMode=Kh()}a.appInstallData&&
(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);E("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:E("DELEGATED_SESSION_ID")});a:{if(h=Th()){a=Rh[h.type||"unknown"]||"CONN_UNKNOWN";h=Rh[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);O("web_log_effective_connection_type")&&
(a=Th(),a=null!==a&&void 0!==a&&a.effectiveType?Sh.hasOwnProperty(a.effectiveType)?Sh[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(Ag(E("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=
d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function Vh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||E("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.vm||E("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().um:b=sd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=E("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=E("DELEGATED_SESSION_ID")));return d}
;function Wh(a){a=Object.assign({},a);delete a.Authorization;var b=sd();if(b){var c=new Md;c.update(E("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Ec(c.digest())}return a}
;function Xh(a){var b=new xf;(b=b.isAvailable()?a?new Df(b,a):b:null)||(a=new yf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new tf(a):null;this.i=document.domain||window.location.hostname}
Xh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Oe(b))}catch(f){return}else e=escape(b);Lh(a,e,c,this.i)};
Xh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=od.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Xh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;od.remove(""+a,"/",void 0===b?"youtube.com":b)};var Yh;function Zh(){Yh||(Yh=new Xh("yt.innertube"));return Yh}
function $h(a,b,c,d){if(d)return null;d=Zh().get("nextId",!0)||1;var e=Zh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Wh(c),requestTime:Math.round(P())};Zh().set("nextId",d+1,86400,!0);Zh().set("requests",e,86400,!0);return d}
function ai(a){var b=Zh().get("requests",!0)||{};delete b[a];Zh().set("requests",b,86400,!0)}
function bi(a){var b=Zh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Wh(Vh(!1));jb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Hh(a,d.method,e,{}));delete b[c]}}Zh().set("requests",b,86400,!0)}}
;function ci(a,b){this.version=a;this.args=b}
;function di(a,b){this.topic=a;this.h=b}
di.prototype.toString=function(){return this.topic};var ei=B("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.ia;M.prototype.publish=M.prototype.ba;M.prototype.clear=M.prototype.clear;z("ytPubsub2Pubsub2Instance",ei,void 0);var fi=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",fi,void 0);var gi=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",gi,void 0);var hi=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",hi,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function ii(a,b){var c=ji();c&&c.publish.call(c,a.toString(),a,b)}
function ki(a){var b=li,c=ji();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(fi[d])try{if(f&&b instanceof di&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.aa){var l=new h;h.aa=l.version}var n=h.aa}catch(q){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
bb(k.args))}catch(q){throw q.message="yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+q.message,q;}a.call(window,f)}catch(q){Mf(q)}},hi[b.toString()]?B("yt.scheduler.instance")?hg(g,1,void 0):cg(g,0):g())});
fi[d]=!0;gi[b.toString()]||(gi[b.toString()]=[]);gi[b.toString()].push(d);return d}
function mi(){var a=ni,b=ki(function(c){a.apply(void 0,arguments);oi(b)});
return b}
function oi(a){var b=ji();b&&("number"===typeof a&&(a=[a]),D(a,function(c){b.unsubscribeByKey(c);delete fi[c]}))}
function ji(){return B("ytPubsub2Pubsub2Instance")}
;var pi=function(){var a;return function(){a||(a=new Xh("ytidb"));return a}}();
function qi(){var a;return null===(a=pi())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function ri(a){this.h=void 0===a?!1:a;(a=qi())||(a={hasSucceededOnce:this.h});this.i=a;var b,c;null!==(b=pi())&&void 0!==b&&b.h&&(b={hasSucceededOnce:this.i.hasSucceededOnce||this.h},null===(c=pi())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0))}
ri.prototype.isSupported=function(){return this.h};var si=[],ti=!1;function ui(a){ti||(si.push({type:"ERROR",payload:a}),10<si.length&&si.shift())}
function vi(a,b){ti||(si.push({type:"EVENT",eventType:a,payload:b}),10<si.length&&si.shift())}
;function wi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(fa(c))}
v(wi,Error);function xi(){try{return yi(),!0}catch(a){return!1}}
function yi(){if(void 0!==E("DATASYNC_ID",void 0))return E("DATASYNC_ID",void 0);throw new wi("Datasync ID not set","unknown");}
;function zi(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Ai(a){return a.substr(0,a.indexOf(":"))||a}
;var Bi={},Ci=(Bi.AUTH_INVALID="No user identifier specified.",Bi.EXPLICIT_ABORT="Transaction was explicitly aborted.",Bi.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Bi.MISSING_INDEX="Index not created.",Bi.MISSING_OBJECT_STORE="Object store not created.",Bi.DB_DELETED_BY_MISSING_OBJECT_STORE="Database is deleted because an expected object store was not created.",Bi.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Bi.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",
Bi.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Bi.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Bi.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Bi),Di={},Ei=(Di.AUTH_INVALID="ERROR",Di.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Di.EXPLICIT_ABORT="IGNORED",Di.IDB_NOT_SUPPORTED="ERROR",Di.MISSING_INDEX="WARNING",Di.MISSING_OBJECT_STORE="ERROR",Di.DB_DELETED_BY_MISSING_OBJECT_STORE=
"WARNING",Di.QUOTA_EXCEEDED="WARNING",Di.QUOTA_MAYBE_EXCEEDED="WARNING",Di.UNKNOWN_ABORT="WARNING",Di.INCOMPATIBLE_DB_VERSION="WARNING",Di),Fi={},Gi=(Fi.AUTH_INVALID=!1,Fi.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Fi.EXPLICIT_ABORT=!1,Fi.IDB_NOT_SUPPORTED=!1,Fi.MISSING_INDEX=!1,Fi.MISSING_OBJECT_STORE=!1,Fi.DB_DELETED_BY_MISSING_OBJECT_STORE=!1,Fi.QUOTA_EXCEEDED=!1,Fi.QUOTA_MAYBE_EXCEEDED=!0,Fi.UNKNOWN_ABORT=!0,Fi.INCOMPATIBLE_DB_VERSION=!1,Fi);
function Q(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Ci[a]:c;d=void 0===d?Ei[a]:d;e=void 0===e?Gi[a]:e;wi.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Q.prototype)}
v(Q,wi);function Hi(a){Q.call(this,"MISSING_OBJECT_STORE",{Db:a},Ci.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Hi.prototype)}
v(Hi,Q);function Ii(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ii.prototype)}
v(Ii,Error);var Ji=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ki(a,b,c,d){b=Ai(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Q)return e;if("QuotaExceededError"===e.name)return new Q("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(Bc&&"UnknownError"===e.name)return new Q("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if(e instanceof Ii)return new Q("MISSING_INDEX",{dbName:b,dbVersion:d,objectStore:e.objectStore,index:e.index});if("InvalidStateError"===e.name&&Ji.some(function(f){return e.message.includes(f)}))return new Q("EXECUTE_TRANSACTION_ON_CLOSED_DB",
{objectStoreNames:c,
dbName:b});if("AbortError"===e.name)return new Q("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},e.message);e.args=[{name:"IdbError",Am:e.name,dbName:b,objectStoreNames:c}];e.level="WARNING";return e}
function Li(a,b,c){return new Q("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c}})}
;function Mi(a){if(!a)throw Error();throw a;}
function Ni(a){return a}
function Oi(a){this.h=a}
function S(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
S.all=function(a){return new S(new Oi(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={da:0};f.da<a.length;f={da:f.da},++f.da)Pi(S.resolve(a[f.da]).then(function(g){return function(h){d[g.da]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
S.resolve=function(a){return new S(new Oi(function(b,c){a instanceof S?a.then(b,c):b(a)}))};
S.reject=function(a){return new S(new Oi(function(b,c){c(a)}))};
S.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Ni,e=null!==b&&void 0!==b?b:Mi;return new S(new Oi(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Qi(c,c,d,f,g)}),c.onRejected.push(function(){Ri(c,c,e,f,g)})):"FULFILLED"===c.state.status?Qi(c,c,d,f,g):"REJECTED"===c.state.status&&Ri(c,c,e,f,g)}))};
function Pi(a,b){a.then(void 0,b)}
function Qi(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof S?Si(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ri(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof S?Si(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Si(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof S?Si(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ti(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ui(a){return new Promise(function(b,c){Ti(a,b,c)})}
function Vi(a){return new S(new Oi(function(b,c){Ti(a,b,c)}))}
;function Wi(a,b){return new S(new Oi(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Xi(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}
m=Xi.prototype;m.add=function(a,b,c){return Yi(this,[a],{mode:"readwrite",J:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Yi(this,[a],{mode:"readwrite",J:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Yi(this,[a],{mode:"readonly",J:!0},function(c){return c.objectStore(a).count(b)})};
function Zi(a,b,c){a=a.h.createObjectStore(b,c);return new $i(a)}
m.delete=function(a,b){return Yi(this,[a],{mode:"readwrite",J:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Yi(this,[a],{mode:"readonly",J:!0},function(c){return c.objectStore(a).get(b)})};
function aj(a,b){return Yi(a,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(c){c=c.objectStore("LogsRequestsStore");return Vi(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Yi(a,b,c,d){return H(a,function f(){var g=this,h,k,l,n,q,r,p,A,I,G,R,V;return x(f,function(K){switch(K.h){case 1:var U={mode:"readonly",J:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?U.mode=c:Object.assign(U,c);h=U;g.transactionCount++;k=h.J?3:1;l=0;case 2:if(n){K.u(3);break}l++;q=Math.round(P());ra(K,4);r=g.h.transaction(b,h.mode);U=new bj(r);U=cj(U,d);return w(K,U,6);case 6:return p=K.i,A=Math.round(P()),dj(g,q,A,l,void 0,b.join(),h),K.return(p);case 4:I=sa(K);G=Math.round(P());
R=Ki(I,g.h.name,b.join(),g.h.version);if((V=R instanceof Q&&!R.h)||l>=k)dj(g,q,G,l,R,b.join(),h),n=R;K.u(2);break;case 3:return K.return(Promise.reject(n))}})})}
function dj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Q&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&vi("QUOTA_EXCEEDED",{dbName:Ai(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Q&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),vi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),ej(a,!1,d,f,b,g.tag),ui(e)):ej(a,!0,d,f,b,g.tag)}
function ej(a,b,c,d,e,f){vi("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function $i(a){this.h=a}
m=$i.prototype;m.add=function(a,b){return Vi(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Vi(this.h.clear()).then(function(){})};
m.count=function(a){return Vi(this.h.count(a))};
function fj(a,b){return gj(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?fj(this,a):Vi(this.h.delete(a))};
m.get=function(a){return Vi(this.h.get(a))};
m.index=function(a){try{return new hj(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Ii(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function gj(a,b,c){a=a.h.openCursor(b.query,b.direction);return ij(a).then(function(d){return Wi(d,c)})}
function bj(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Q;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function cj(a,b){var c=new Promise(function(d,e){try{Pi(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
bj.prototype.abort=function(){this.h.abort();this.i=!0;throw new Q("EXPLICIT_ABORT");};
bj.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new $i(a),this.j.set(a,b));return b};
function hj(a){this.h=a}
m=hj.prototype;m.count=function(a){return Vi(this.h.count(a))};
m.delete=function(a){return jj(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Vi(this.h.get(a))};
m.getKey=function(a){return Vi(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function jj(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ij(a).then(function(d){return Wi(d,c)})}
function kj(a,b){this.request=a;this.cursor=b}
function ij(a){return Vi(a).then(function(b){return b?new kj(a,b):null})}
m=kj.prototype;m.advance=function(a){this.cursor.advance(a);return ij(this.request)};
m.continue=function(a){this.cursor.continue(a);return ij(this.request)};
m.delete=function(){return Vi(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Vi(this.cursor.update(a))};function lj(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Xi(g.result,{closed:q}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.Sb,n=c.upgrade,q=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&vi("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Ai(a)});var A=f(),I=new bj(g.transaction);
n&&n(A,function(G){return p.oldVersion<G&&p.newVersion>=G},I);
I.done.catch(function(G){e(G)})}catch(G){e(G)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){vi("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ai(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function mj(a,b,c){c=void 0===c?{}:c;return lj(a,b,c)}
function nj(a,b){b=void 0===b?{}:b;return H(this,function d(){var e,f,g;return x(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,Ui(e),0)})})}
;function oj(a,b){this.name=a;this.options=b;this.l=!0;this.j=!1}
oj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return mj(a,b,c)};
oj.prototype.delete=function(a){a=void 0===a?{}:a;return nj(this.name,a)};
function pj(a,b){return new Q("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
oj.prototype.open=function(){function a(){return H(c,function g(){var h=this,k,l,n,q,r;return x(g,function(p){switch(p.h){case 1:return ra(p,2),w(p,h.i(h.name,h.options.version,e),4);case 4:k=p.i;a:{var A=h.options;for(var I=u(Object.keys(A.va)),G=I.next();!G.done;G=I.next()){G=G.value;var R=A.va[G],V=void 0===R.Jb?Number.MAX_VALUE:R.Jb;if(k.h.version>=R.Aa&&!(k.h.version>=V)&&!k.h.objectStoreNames.contains(G)){A=G;break a}}A=void 0}l=A;if(void 0===l){p.u(5);break}if(h.j){p.u(6);break}h.j=!0;return w(p,
h.delete(),7);case 7:return ui(new Q("DB_DELETED_BY_MISSING_OBJECT_STORE",{dbName:h.name,Db:l})),p.return(a());case 6:throw new Hi(l);case 5:return p.return(k);case 2:n=sa(p);if(n instanceof DOMException?"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){p.u(8);break}return w(p,h.i(h.name,void 0,Object.assign(Object.assign({},
e),{upgrade:void 0})),9);case 9:q=p.i;r=q.h.version;if(void 0!==h.options.version&&r>h.options.version+1)throw q.close(),h.l=!1,pj(h,r);return p.return(q);case 8:throw b(),n;}})})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw pj(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Sb:b,upgrade:this.options.upgrade};return this.h=d=a()};var qj=new oj("YtIdbMeta",{va:{databases:{Aa:1}},upgrade:function(a,b){b(1)&&Zi(a,"databases",{keyPath:"actualName"})}});
function rj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,qj.open(),2);d=e.i;return e.return(Yi(d,["databases"],{J:!0,mode:"readwrite"},function(f){var g=f.objectStore("databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier:1)return Vi(g.h.put(a,void 0)).then(function(){})})}))})})}
function sj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return a?w(e,qj.open(),2):e.return();d=e.i;return e.return(d.delete("databases",a))})})}
function tj(a){return H(this,function c(){var d,e;return x(c,function(f){return 1==f.h?(d=[],w(f,qj.open(),2)):3!=f.h?(e=f.i,w(f,Yi(e,["databases"],{J:!0,mode:"readonly"},function(g){d.length=0;return gj(g.objectStore("databases"),{},function(h){a(h.getValue())&&d.push(h.getValue());return h.continue()})}),3)):f.return(d)})})}
function uj(){return tj(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var vj,wj=new function(){}(new function(){});
function xj(){return H(this,function b(){var c,d,e;return x(b,function(f){switch(f.h){case 1:c=qi();if(null===c||void 0===c?0:c.hasSucceededOnce)return f.return(new ri(!0));var g;if(g=Wg)g=/WebKit\/([0-9]+)/.exec(Ob),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(Ob),g=!(g&&602<=parseInt(g[1],10)));if(g||mc)return f.return(new ri(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new ri(!1))}catch(h){return f.return(new ri(!1))}if(!("IDBTransaction"in
self&&"objectStoreNames"in IDBTransaction.prototype))return f.return(new ri(!1));ra(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(f,rj(e),4);case 4:return w(f,sj("yt-idb-test-do-not-use"),5);case 5:return f.return(new ri(!0));case 2:return sa(f),f.return(new ri(!1))}})})}
function yj(){if(void 0!==vj)return vj;ti=!0;return vj=xj().then(function(a){ti=!1;return a.isSupported()})}
function zj(){return yj().then(function(a){return a?wj:void 0})}
;new function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function Aj(a){if(!xi())throw a=new Q("AUTH_INVALID",{dbName:a}),ui(a),a;var b=yi();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Bj(a,b,c,d){return H(this,function f(){var g,h,k,l;return x(f,function(n){switch(n.h){case 1:return w(n,zj(),2);case 2:g=n.i;if(!g)throw h=Li("openDbImpl",a,b),ui(h),h;zi(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Aj(a);ra(n,3);return w(n,rj(k),5);case 5:return w(n,mj(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=sa(n),ra(n,7),w(n,sj(k.actualName),9);case 9:n.h=8;n.m=0;break;case 7:sa(n);case 8:throw l;}})})}
function Cj(a,b,c){c=void 0===c?{}:c;return Bj(a,b,!1,c)}
function Dj(a,b,c){c=void 0===c?{}:c;return Bj(a,b,!0,c)}
function Ej(a,b){b=void 0===b?{}:b;return H(this,function d(){var e,f;return x(d,function(g){if(1==g.h)return w(g,zj(),2);if(3!=g.h){e=g.i;if(!e)return g.return();zi(a);f=Aj(a);return w(g,nj(f.actualName,b),3)}return w(g,sj(f.actualName),0)})})}
function Fj(a,b){var c=this;a=a.map(function(d){return H(c,function f(){return x(f,function(g){return 1==g.h?w(g,nj(d.actualName,b),2):w(g,sj(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function Gj(){var a=void 0===a?{}:a;return H(this,function c(){var d,e;return x(c,function(f){if(1==f.h)return w(f,zj(),2);if(3!=f.h){d=f.i;if(!d)return f.return();zi("LogsDatabaseV2");return w(f,uj(),3)}e=f.i;return w(f,Fj(e,a),0)})})}
function Hj(a,b){b=void 0===b?{}:b;return H(this,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,zj(),2);if(3!=f.h){e=f.i;if(!e)return f.return();zi(a);return w(f,nj(a,b),3)}return w(f,sj(a),0)})})}
;function Ij(a,b){oj.call(this,a,b);this.options=b;zi(a)}
v(Ij,oj);function Jj(a,b){var c;return function(){c||(c=new Ij(a,b));return c}}
Ij.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ma?Dj:Cj)(a,b,Object.assign({},c))};
Ij.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ma?Hj:Ej)(this.name,a)};
function Kj(a,b){return Jj(a,b)}
;var Lj;
function Mj(){if(Lj)return Lj();var a={};Lj=Kj("LogsDatabaseV2",{va:(a.LogsRequestsStore={Aa:2},a),Ma:!1,upgrade:function(b,c,d){c(2)&&Zi(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Lj()}
;function Nj(a){return H(this,function c(){var d,e,f,g;return x(c,function(h){if(1==h.h)return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(h,Mj().open(),2);if(3!=h.h)return e=h.i,f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:E("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(h,aj(e,f),3);g=h.i;d.Tb=P();Oj(d);return h.return(g)})})}
function Pj(a){return H(this,function c(){var d,e,f,g,h,k,l;return x(c,function(n){if(1==n.h)return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(n,Mj().open(),2);if(3!=n.h)return e=n.i,f=E("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,f,0],h=[a,f,P()],k=IDBKeyRange.bound(g,h),l=void 0,w(n,Yi(e,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(q){return jj(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:k,direction:"prev"},function(r){r.getValue()&&(l=r.getValue(),
"NEW"===a&&(l.status="QUEUED",r.update(l)))})}),3);
d.Tb=P();Oj(d);return n.return(l)})})}
function Qj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Mj().open(),2);d=e.i;return e.return(Yi(d,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",Vi(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function Rj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Mj().open(),2);d=e.i;return e.return(Yi(d,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,Vi(g.h.put(h,void 0)).then(function(){return h})):S.resolve(void 0)})}))})})}
function Sj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Mj().open(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function Tj(){return H(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Mj().open(),2);c=e.i;d=P()-2592E6;return w(e,Yi(c,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(f){return gj(f.objectStore("LogsRequestsStore"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Uj(){return H(this,function b(){return x(b,function(c){return w(c,Gj(),0)})})}
function Oj(a){O("nwl_csi_killswitch")||.01>=Math.random()&&ii("nwl_transaction_latency_payload",a)}
;var Vj={},Wj=Kj("ServiceWorkerLogsDatabase",{va:(Vj.SWHealthLog={Aa:1},Vj),Ma:!0,upgrade:function(a,b){b(1)&&Zi(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Xj(){return H(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return O("web_clean_sw_logs_store")?w(e,Wj().open(),3):e.u(0);c=e.i;d=P()-2592E6;return w(e,Yi(c,["SWHealthLog"],{mode:"readwrite",J:!0},function(f){return gj(f.objectStore("SWHealthLog"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Yj(){return H(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,Wj().open(),2);c=d.i;return w(d,c.clear("SWHealthLog"),0)})})}
;var Zj;function ak(){Zj||(Zj=new Xh("yt.offline"));return Zj}
function bk(a){if(O("offline_error_handling")){var b=ak().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);ak().set("errors",b,2592E3,!0)}}
;var ck=Rf("network_polling_interval",3E4);function T(){Je.call(this);this.C=0;this.I=this.l=!1;this.j=this.Ea();dk(this);ek(this)}
v(T,Je);function fk(){if(!T.h){var a=B("yt.networkStatusManager.instance")||new T;z("yt.networkStatusManager.instance",a,void 0);T.h=a}return T.h}
m=T.prototype;m.G=function(){return this.j};
m.X=function(a,b){a!==this.j&&((void 0===b?0:b)?this.N():this.j=a)};
m.Eb=function(a){this.l=!0;if(void 0===a?0:a)this.C||gk(this)};
m.Ea=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.rb=function(){this.I=!0};
m.V=function(a,b){return Je.prototype.V.call(this,a,b)};
function ek(a){window.addEventListener("online",function(){return H(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return w(e,d.N(),2);if(d.I&&O("offline_error_handling")){var f=ak().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new wi(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;Mf(h)}ak().set("errors",{},2592E3,!0)}}e.h=0})})})}
function dk(a){window.addEventListener("offline",function(){return H(a,function c(){var d=this;return x(c,function(e){return w(e,d.N(),0)})})})}
function gk(a){a.C=gg(function(){return H(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return d.j?d.Ea()||!d.l?e.u(3):w(e,d.N(),3):w(e,d.N(),3);gk(d);e.h=0})})},ck)}
m.N=function(a){var b=this;return this.m?this.m:this.m=new Promise(function(c){return H(b,function e(){var f,g,h,k=this;return x(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,ra(l,2,3),f&&(k.B=ig(function(){f.abort()},a||2E4)),w(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ta(l);k.m=void 0;k.B&&lg(k.B);h!==k.j&&(k.j=h,k.j&&k.l?Ke(k,"ytnetworkstatus-online"):k.l&&Ke(k,"ytnetworkstatus-offline"));c(h);ua(l);break;case 2:sa(l),h=!1,l.u(3)}})})})};
T.prototype.sendNetworkCheckRequest=T.prototype.N;T.prototype.listen=T.prototype.V;T.prototype.enableErrorFlushing=T.prototype.rb;T.prototype.getWindowStatus=T.prototype.Ea;T.prototype.monitorNetworkStatusChange=T.prototype.Eb;T.prototype.networkStatusHint=T.prototype.X;T.prototype.isNetworkAvailable=T.prototype.G;T.getInstance=fk;function hk(a){a=void 0===a?{}:a;Je.call(this);var b=this;this.l=this.B=0;this.j=fk();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.Ua);a.Za&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.j))a.xa?(this.xa=a.xa,c("ytnetworkstatus-online",function(){ik(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){ik(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){Ke(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){Ke(b,"publicytnetworkstatus-offline")}))}
v(hk,Je);hk.prototype.G=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.j);return a?a():!0};
hk.prototype.X=function(a,b){b=void 0===b?!1:b;var c=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);c&&c(a,b)};
hk.prototype.N=function(a){return H(this,function c(){var d=this,e;return x(c,function(f){return(e=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.j))?f.return(e(a)):f.return(!0)})})};
function ik(a,b){a.xa?a.l?(lg(a.B),a.B=ig(function(){a.m!==b&&(Ke(a,b),a.m=b,a.l=P())},a.xa-(P()-a.l))):(Ke(a,b),a.m=b,a.l=P()):Ke(a,b)}
;var jk=!1,kk,lk=0,mk=0,nk,ok=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:jk,databaseToken:kk,potentialEsfErrorCounter:mk,isIdbSupported:!!kk};z("ytNetworklessLoggingInitializationOptions",ok,void 0);
function pk(){H(this,function b(){return x(b,function(c){switch(c.h){case 1:return w(c,zj(),2);case 2:kk=c.i;if(!kk||!xi()&&!O("nwl_init_require_datasync_id_killswitch")){c.u(0);break}jk=!0;ok.isNwlInitialized=jk;ok.databaseToken=kk;ok.isIdbSupported=!!kk;return w(c,Hj("LogsDatabaseV2"),4);case 4:if(!(.1>=Math.random())){c.u(5);break}return w(c,Tj(kk),6);case 6:return w(c,Xj(),5);case 5:qk();rk().G()&&sk();rk().V("publicytnetworkstatus-online",sk);rk().V("publicytnetworkstatus-offline",tk);if(!O("networkless_immediately_drop_sw_health_store")){c.u(8);
break}return w(c,uk(),8);case 8:if(O("networkless_immediately_drop_all_requests"))return w(c,Uj(),0);c.u(0)}})})}
function vk(a,b){function c(d){var e=rk().G();if(!wk()||!d||e&&O("vss_networkless_bypass_write"))xk(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};Nj(f,d).then(function(g){f.id=g;rk().G()&&yk(f)}).catch(function(g){yk(f);
rk().G()?Mf(g):bk(g)})}}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?zj().then(function(d){c(d)}):c(zk())}
function Ak(a,b){function c(d){if(wk()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Sj(e.id,d):f=!0;O("vss_network_hint")&&rk().X(!0);g(h,k)};
xk(e.url,e.options);Nj(e,d).then(function(h){e.id=h;f&&Sj(e.id,d)}).catch(function(h){rk().G()?Mf(h):bk(h)})}else xk(a,b)}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?zj().then(function(d){c(d)}):c(zk())}
function sk(){var a=this,b=zk();if(!b)throw Li("throttleSend");lk||(lk=ig(function(){return H(a,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,Pj("NEW",b),2);if(3!=f.h)return e=f.i,e?w(f,yk(e),3):(tk(),f.return());lk&&(lk=0,sk());f.h=0})})},100))}
function tk(){lg(lk);lk=0}
function yk(a){return H(this,function c(){var d,e,f;return x(c,function(g){switch(g.h){case 1:d=zk();if(!d)throw e=Li("immediateSend"),e;if(void 0===a.id){g.u(2);break}return w(g,Qj(a.id,d),3);case 3:(f=g.i)?a=f:Nf(Error("The request cannot be found in the database."));case 2:if(Bk(a,2592E6)){g.u(4);break}Nf(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){g.u(5);break}return w(g,Sj(a.id,d),5);case 5:return g.return();case 4:a.skipRetry||(a=Ck(a));var h=a,k,l;
if(null===(l=null===(k=null===h||void 0===h?void 0:h.options)||void 0===k?void 0:k.postParams)||void 0===l?0:l.requestTimeMs)h.options.postParams.requestTimeMs=Math.round(P());a=h;if(!a){g.u(0);break}if(!a.skipRetry||void 0===a.id){g.u(8);break}return w(g,Sj(a.id,d),8);case 8:xk(a.url,a.options,!!a.skipRetry),g.h=0}})})}
function Ck(a){var b=this,c=zk();if(!c)throw Li("updateRequestHandlers");var d=a.options.onError?a.options.onError:function(){};
a.options.onError=function(f,g){return H(b,function k(){return x(k,function(l){switch(l.h){case 1:if(!((B("ytNetworklessLoggingInitializationOptions")?ok.potentialEsfErrorCounter:mk)<=Rf("potential_esf_error_limit",10))){l.u(2);break}return w(l,rk().N(),3);case 3:if(rk().G())B("ytNetworklessLoggingInitializationOptions")&&ok.potentialEsfErrorCounter++,mk++;else return d(f,g),l.return();case 2:if(void 0===(null===a||void 0===a?void 0:a.id)){l.u(4);break}return 1>a.sendCount?w(l,Rj(a.id,c),8):w(l,Sj(a.id,
c),4);case 8:ig(function(){rk().G()&&sk()},5E3);
case 4:d(f,g),l.h=0}})})};
var e=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(f,g){return H(b,function k(){return x(k,function(l){if(1==l.h)return void 0===(null===a||void 0===a?void 0:a.id)?l.u(2):w(l,Sj(a.id,c),2);O("vss_network_hint")&&rk().X(!0);e(f,g);l.h=0})})};
return a}
function Bk(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function qk(){var a=this,b=zk();if(!b)throw Li("retryQueuedRequests");Pj("QUEUED",b).then(function(c){c&&!Bk(c,12E4)?ig(function(){return H(a,function e(){return x(e,function(f){if(1==f.h)return void 0===c.id?f.u(2):w(f,Rj(c.id,b),2);qk();f.h=0})})}):rk().G()&&sk()})}
function uk(){return H(this,function b(){var c,d;return x(b,function(e){c=zk();if(!c)throw d=Li("clearSWHealthLogsDb"),d;return e.return(Yj().catch(function(f){Mf(f)}))})})}
function rk(){nk||(nk=new hk({Za:!0,Ua:!0}));return nk}
function xk(a,b,c){if(O("networkless_with_beacon")){var d=["method","postBody"];if(Object.keys(b).length>d.length)c=!0;else{c=0;d=u(d);for(var e=d.next();!e.done;e=d.next())b.hasOwnProperty(e.value)&&c++;c=Object.keys(b).length!==c}c?Og(a,b):ch(a,void 0,b.postBody)}else c&&0===Object.keys(b).length?$g(a):Og(a,b)}
function wk(){return B("ytNetworklessLoggingInitializationOptions")?ok.isNwlInitialized:jk}
function zk(){return B("ytNetworklessLoggingInitializationOptions")?ok.databaseToken:kk}
;function Dk(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ha=function(){};
this.now=Date.now;this.kb=null!==(b=a.kb)&&void 0!==b?b:100;this.ib=null!==(c=a.ib)&&void 0!==c?c:1;this.fb=null!==(d=a.fb)&&void 0!==d?d:2592E6;this.cb=null!==(e=a.cb)&&void 0!==e?e:12E4;this.hb=null!==(f=a.hb)&&void 0!==f?f:5E3;this.databaseToken=null!==(g=a.databaseToken)&&void 0!==g?g:void 0;this.sa=!!a.sa;this.qa=null!==(h=a.qa)&&void 0!==h?h:.1;this.La=null!==(k=a.La)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.ha&&(this.ha=a.ha);this.K=a.K;this.Ya=a.Ya;this.F=a.F;this.H=
a.H;this.Y=a.Y;this.Ka=a.Ka;this.Ja=a.Ja;this.databaseToken&&(!this.K||this.K("networkless_logging"))&&Ek(this)}
function Ek(a){H(a,function c(){var d=this;return x(c,function(e){if(!d.databaseToken)return e.return();Fk(d);d.H.G()&&d.ka();d.H.V(d.Ka,d.ka.bind(d));d.H.V(d.Ja,d.Qa.bind(d));d.h=!0;return d.sa&&Math.random()<=d.qa?w(e,d.F.pb(d.databaseToken),0):e.u(0)})})}
m=Dk.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F.set(d,this.databaseToken).then(function(e){d.id=e;c.H.G()&&Gk(c,d)}).catch(function(e){Gk(c,d);
Hk(c,e)})}else this.Y(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.K&&this.K("nwl_skip_retry")&&(e.skipRetry=c);if(this.H.G()){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return H(d,function l(){var n=this,q;return x(l,function(r){if(1==r.h)return q=n,w(r,n.F.set(e,n.databaseToken).catch(function(p){Hk(q,p)}),2);
f(g,h);r.h=0})})}}this.Y(a,b,e.skipRetry)}else this.F.set(e,this.databaseToken).catch(function(g){Hk(d,g)})}else this.Y(a,b,this.K&&this.K("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.F.ga(d.id,c.databaseToken):e=!0;c.H.X&&c.K&&c.K("vss_network_hint")&&c.H.X(!0);f(g,h)};
this.Y(d.url,d.options);this.F.set(d,this.databaseToken).then(function(g){d.id=g;e&&c.F.ga(d.id,c.databaseToken)}).catch(function(g){Hk(c,g)})}else this.Y(a,b)};
m.ka=function(){var a=this;if(!this.databaseToken)throw Li("throttleSend");this.i||(this.i=ig(function(){return H(a,function c(){var d=this,e;return x(c,function(f){if(1==f.h)return w(f,d.F.Wa("NEW",d.databaseToken),2);if(3!=f.h)return e=f.i,e?w(f,Gk(d,e),3):(d.Qa(),f.return());d.i&&(d.i=0,d.ka());f.h=0})})},this.kb))};
m.Qa=function(){lg(this.i);this.i=0};
function Gk(a,b){return H(a,function d(){var e=this,f,g;return x(d,function(h){switch(h.h){case 1:if(!e.databaseToken)throw f=Li("immediateSend"),f;if(void 0===b.id){h.u(2);break}return w(h,e.F.Cb(b.id,e.databaseToken),3);case 3:(g=h.i)?b=g:e.ha(Error("The request cannot be found in the database."));case 2:if(Ik(e,b,e.fb)){h.u(4);break}e.ha(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){h.u(5);break}return w(h,e.F.ga(b.id,e.databaseToken),5);case 5:return h.return();
case 4:b.skipRetry||(b=Jk(e,b));if(!b){h.u(0);break}if(!b.skipRetry||void 0===b.id){h.u(8);break}return w(h,e.F.ga(b.id,e.databaseToken),8);case 8:e.Y(b.url,b.options,!!b.skipRetry),h.h=0}})})}
function Jk(a,b){if(!a.databaseToken)throw Li("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){return H(a,function h(){var k=this,l;return x(h,function(n){switch(n.h){case 1:l=k;if(!(k.potentialEsfErrorCounter<=k.La)){n.u(2);break}if(!k.H.N){n.u(3);break}return w(n,k.H.N(),3);case 3:if(k.H.G())k.potentialEsfErrorCounter++;else return c(e,f),n.return();case 2:if(void 0===(null===b||void 0===b?void 0:b.id)){n.u(5);break}return b.sendCount<k.ib?w(n,k.F.gb(b.id,k.databaseToken),9):w(n,k.F.ga(b.id,k.databaseToken),5);case 9:ig(function(){l.H.G()&&l.ka()},k.hb);
case 5:c(e,f),n.h=0}})})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return H(a,function h(){var k=this;return x(h,function(l){if(1==l.h)return void 0===(null===b||void 0===b?void 0:b.id)?l.u(2):w(l,k.F.ga(b.id,k.databaseToken),2);k.H.X&&k.K&&k.K("vss_network_hint")&&k.H.X(!0);d(e,f);l.h=0})})};
return b}
function Ik(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Fk(a){if(!a.databaseToken)throw Li("retryQueuedRequests");a.F.Wa("QUEUED",a.databaseToken).then(function(b){b&&!Ik(a,b,a.cb)?ig(function(){return H(a,function d(){var e=this;return x(d,function(f){if(1==f.h)return void 0===b.id?f.u(2):w(f,e.F.gb(b.id,e.databaseToken),2);Fk(e);f.h=0})})}):a.H.G()&&a.ka()})}
function Hk(a,b){a.lb&&!a.H.G()?a.lb(b):a.handleError(b)}
;function Kk(){Dk.call(this,{F:{pb:Tj,ga:Sj,Wa:Pj,Cb:Qj,gb:Rj,set:Nj},H:new hk({Za:!0,Ua:!0}),handleError:Mf,ha:Nf,Y:Lk,now:P,lb:bk,Ya:kg(),Ka:"publicytnetworkstatus-online",Ja:"publicytnetworkstatus-offline",sa:!0,qa:.1,La:Rf("potential_esf_error_limit",10),K:O});this.sa&&Math.random()<=this.qa&&this.databaseToken&&Xj();O("networkless_immediately_drop_sw_health_store")&&Mk(this);O("networkless_immediately_drop_all_requests")&&Uj();Hj("LogsDatabaseV2")}
v(Kk,Dk);function Nk(){var a=B("yt.networklessRequestController.instance");a||(a=new Kk,z("yt.networklessRequestController.instance",a,void 0),O("networkless_logging")&&zj().then(function(b){a.databaseToken=b;Ek(a)}));
return a}
Kk.prototype.writeThenSend=function(a,b){b||(b={});xi()||(this.h=!1);Dk.prototype.writeThenSend.call(this,a,b)};
Kk.prototype.sendThenWrite=function(a,b,c){b||(b={});xi()||(this.h=!1);Dk.prototype.sendThenWrite.call(this,a,b,c)};
Kk.prototype.sendAndWrite=function(a,b){b||(b={});xi()||(this.h=!1);Dk.prototype.sendAndWrite.call(this,a,b)};
function Mk(a){H(a,function c(){var d=this,e,f;return x(c,function(g){e=d;if(!d.databaseToken)throw f=Li("clearSWHealthLogsDb"),f;return g.return(Yj().catch(function(h){e.handleError(h)}))})})}
function Lk(a,b,c){var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P());if(O("networkless_with_beacon")){c=b;var e=["method","postBody"];if(Object.keys(c).length>e.length)c=!0;else{d=0;e=u(e);for(var f=e.next();!f.done;f=e.next())c.hasOwnProperty(f.value)&&d++;c=Object.keys(c).length!==d}c?Og(a,b):ch(a,void 0,b.postBody)}else c&&0===Object.keys(b).length?$g(a):Og(a,b)}
;function Ok(a){var b=this;this.config_=null;a?this.config_=a:Uh()&&(this.config_=Eh());gg(function(){bi(b)},5E3)}
Ok.prototype.isReady=function(){!this.config_&&Uh()&&(this.config_=Eh());return!!this.config_};
function Hh(a,b,c,d){function e(r){r=void 0===r?!1:r;var p;if(d.retry&&"www.youtube-nocookie.com"!=h&&(r||O("skip_ls_gel_retry")||(p=$h(b,c,l,k)),p)){var A=g.onSuccess,I=g.onFetchSuccess;g.onSuccess=function(G,R){ai(p);A(G,R)};
c.onFetchSuccess=function(G,R){ai(p);I(G,R)}}try{r&&d.retry&&!d.bb.bypassNetworkless?(g.method="POST",d.bb.writeThenSend?O("use_new_nwl")?Nk().writeThenSend(q,g):vk(q,g):O("use_new_nwl")?Nk().sendAndWrite(q,g):Ak(q,g)):(g.method="POST",g.postParams||(g.postParams={}),Og(q,g))}catch(G){if("InvalidAccessError"==G.name)p&&(ai(p),p=0),Nf(Error("An extension is blocking network request."));
else throw G;}p&&gg(function(){bi(a)},5E3)}
!E("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Nf(new wi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new wi("innertube xhrclient not ready",b,c,d);Mf(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(r,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,p){if(d.onError)d.onError(p)},
onFetchError:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.zb)&&(h=f);var k=a.config_.Bb||!1,l=Vh(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.config_.innertubeApiVersion+"/"+b;var n={alt:"json"};a.config_.Ab&&g.headers.Authorization||(n.key=a.config_.innertubeApiKey);var q=Cg(""+h+f,n||{},!0);O("use_new_nwl")||wk()?yj().then(function(r){e(r)}):e(!1)}
;function Pk(a,b,c){c=void 0===c?{}:c;var d=Ok;E("ytLoggingEventsDefaultDisabled",!1)&&Ok==Ok&&(d=null);Jh(a,b,d,c)}
;var Qk=[{Ia:function(a){return"Cannot read property '"+a.key+"'"},
wa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ia:function(a){return"Cannot call '"+a.key+"'"},
wa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ia:function(a){return a.key+" is not defined"},
wa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Sk={W:[],S:[{Pa:Rk,weight:500}]};function Rk(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Tk(){this.S=[];this.W=[]}
var Uk;function Vk(){if(!Uk){var a=Uk=new Tk;a.W.length=0;a.S.length=0;Sk.W&&a.W.push.apply(a.W,Sk.W);Sk.S&&a.S.push.apply(a.S,Sk.S)}return Uk}
;var Wk=new M;function Xk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Yk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Yk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Yk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Yk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Zk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=$k(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Xk(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?$k(e+".ve",f,g,h):0;d+=g;d+=$k(e,a[e],b,c);if(500<d)break}}else c[b]=al(a),d+=c[b].length;else c[b]=al(a),d+=c[b].length;return d}
function $k(a,b,c,d){c+="."+a;a=al(b);d[c]=a;return c.length+a.length}
function al(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var bl=new Set,cl=0,dl=0,el=0,fl=[],gl=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function hl(a){il(a,"WARNING")}
function il(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||E("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),O("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=cl))){var g=Od(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Zk(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var q="params."+l,r=al(n[l]);c[q]=r;k+=q.length+r.length;if(500<k)break}}else c.params=al(n)}if(fl.length)for(l=0;l<fl.length&&!(k=Zk(fl[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
Vk();c=u(a.W);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.zm)){a=d.weight;break a}a=u(a.S);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Pa(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(Qk);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.wa[l.name])for(e=u(c.wa[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.Ia(f);break}l.params||(l.params={});a=Vk();l.params["params.errorServiceSignature"]="msg="+a.W.length+"&cb="+a.S.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));sb("sample").constructor!==qb&&(l.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!bl.has(l.message)){"ERROR"===b?(Wk.ba("handleError",
l),O("record_app_crashed_web")&&0===el&&1===l.sampleWeight&&(el++,Pk("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),dl++):"WARNING"===b&&Wk.ba("handleWarning",l);if(O("kevlar_gel_error_routing")){a=b;b:{c=u(gl);for(d=c.next();!d.done;d=c.next())if(Xg(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||
isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};E("FEXP_EXPERIMENTS")&&(e.experimentIds=E("FEXP_EXPERIMENTS"));if(f=l.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=
g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});f=E("SERVER_NAME",void 0);g=E("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(Pk("clientError",c),("ERROR"===a||O("errors_flush_gel_always_killswitch"))&&zh())}if(!O("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,
level:b,"client.name":a.name},postParams:{url:E("PAGE_NAME",window.location.href),file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=E("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=E("SERVER_NAME",void 0);c=E("SERVER_VERSION",void 0);
a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}Og(E("ECATCHER_REPORT_HOST","")+"/error_204",b)}try{bl.add(l.message)}catch(p){}cl++}}}
function jl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,fa(c))}
;var kl={Hc:3611,Ub:27686,Vb:85013,Wb:23462,Yb:42016,Zb:62407,ac:26926,Xb:43781,cc:51236,dc:79148,ec:50160,fc:77504,tc:87907,uc:18630,wc:54445,xc:80935,yc:105675,zc:37521,Ac:47786,Bc:98349,Cc:123695,Dc:6827,Ec:29434,Fc:7282,Gc:124448,Kc:32276,Jc:76278,Lc:93911,Mc:106531,Nc:27259,Oc:27262,Pc:27263,Rc:21759,Sc:27107,Tc:62936,Uc:49568,Vc:38408,Wc:80637,Xc:68727,Yc:68728,Zc:80353,bd:80356,cd:74610,dd:45707,ed:83962,fd:83970,gd:46713,hd:89711,jd:74612,kd:93265,ld:74611,md:131380,od:128979,pd:128978,nd:131391,
qd:105350,sd:134800,rd:131392,ud:113533,vd:93252,wd:99357,yd:94521,zd:114252,Ad:113532,Bd:94522,xd:94583,Cd:88E3,Dd:93253,Ed:93254,Fd:94387,Gd:94388,Hd:93255,Id:97424,td:72502,Jd:110111,Kd:76019,Md:117092,Nd:117093,Ld:89431,Od:110466,Pd:77240,Qd:60508,Rd:73393,Sd:113534,Td:92098,Ud:131381,Vd:84517,Wd:83759,Xd:80357,Yd:86113,Zd:72598,ae:72733,be:107349,ce:124275,de:118203,ee:133275,ge:133274,he:133272,ie:133273,je:133276,le:117431,ke:133797,me:128572,ne:133405,oe:117429,pe:117430,qe:117432,re:120080,
se:117259,te:121692,ue:132972,we:133051,xe:133658,ye:132971,ze:97615,Ae:31402,Ce:133624,De:133623,Ee:133622,Be:133621,Fe:84774,Ge:95117,He:98930,Ie:98931,Je:98932,Ke:43347,Le:129889,Me:45474,Ne:100352,Oe:84758,Pe:98443,Qe:117985,Re:74613,Se:74614,Te:64502,Ue:74615,Ve:74616,We:122224,Xe:74617,Ye:77820,Ze:74618,af:93278,bf:93274,cf:93275,df:93276,ef:22110,ff:29433,gf:133798,hf:132295,kf:120541,mf:82047,nf:113550,pf:75836,qf:75837,rf:42352,sf:84512,tf:76065,uf:75989,vf:16623,wf:32594,xf:27240,yf:32633,
zf:74858,Bf:3945,Af:16989,Cf:45520,Df:25488,Ef:25492,Ff:25494,Gf:55760,Hf:14057,If:18451,Jf:57204,Kf:57203,Lf:17897,Mf:57205,Nf:18198,Of:17898,Pf:17909,Qf:43980,Rf:46220,Sf:11721,Tf:49954,Uf:96369,Vf:3854,Wf:56251,Xf:25624,Yf:16906,Zf:99999,ag:68172,cg:27068,dg:47973,eg:72773,fg:26970,gg:26971,hg:96805,ig:17752,jg:73233,kg:109512,lg:22256,mg:14115,ng:22696,og:89278,pg:89277,qg:109513,rg:43278,sg:43459,tg:43464,ug:89279,vg:43717,wg:55764,xg:22255,yg:89281,zg:40963,Ag:43277,Bg:43442,Cg:91824,Dg:120137,
Eg:96367,Fg:36850,Gg:72694,Hg:37414,Ig:36851,Kg:124863,Jg:121343,Lg:73491,Mg:54473,Ng:43375,Og:46674,Pg:32473,Qg:72901,Rg:72906,Sg:50947,Tg:50612,Ug:50613,Vg:50942,Wg:84938,Xg:84943,Yg:84939,Zg:84941,ah:84944,bh:84940,dh:84942,eh:35585,fh:51926,gh:79983,hh:63238,ih:18921,jh:63241,kh:57893,lh:41182,mh:135732,nh:33424,oh:22207,ph:42993,qh:36229,rh:22206,sh:22205,th:18993,uh:19001,vh:18990,wh:18991,xh:18997,yh:18725,zh:19003,Ah:36874,Bh:44763,Ch:33427,Dh:67793,Eh:22182,Fh:37091,Gh:34650,Hh:50617,Ih:47261,
Jh:22287,Kh:25144,Lh:97917,Mh:62397,Nh:125598,Oh:36961,Ph:108035,Qh:27426,Rh:27857,Sh:27846,Th:27854,Uh:69692,Vh:61411,Wh:39299,Xh:38696,Yh:62520,Zh:36382,ai:108701,bi:50663,ci:36387,di:14908,fi:37533,gi:105443,hi:61635,ii:62274,ji:133818,ki:65702,li:65703,mi:65701,ni:76256,oi:37671,ri:49953,ti:36216,vi:28237,wi:39553,xi:29222,yi:26107,zi:38050,Ai:26108,Ci:120745,Bi:26109,Di:26110,Ei:66881,Fi:28236,Gi:14586,Hi:57929,Ii:74723,Ji:44098,Ki:44099,Ni:23528,Oi:61699,Li:134104,Mi:134103,Pi:59149,Qi:101951,
Ri:97346,Si:118051,Ti:95102,Ui:64882,Vi:119505,Wi:63595,Xi:63349,Yi:95101,Zi:75240,aj:27039,bj:68823,cj:21537,dj:83464,ej:75707,fj:83113,gj:101952,hj:101953,jj:79610,kj:125755,lj:24402,mj:24400,nj:32925,oj:57173,pj:122502,qj:64423,rj:64424,sj:33986,tj:100828,uj:129089,vj:21409,zj:135155,Aj:135156,Bj:135157,Cj:135158,Dj:135159,Ej:135160,Fj:135161,Gj:135162,Hj:135163,Ij:135164,Jj:135165,Kj:135166,wj:11070,xj:11074,yj:17880,Lj:14001,Nj:30709,Oj:30707,Pj:30711,Qj:30710,Rj:30708,Mj:26984,Sj:63648,Tj:63649,
Uj:51879,Vj:111059,Wj:5754,Xj:20445,Zj:130975,Yj:130976,ak:110386,bk:113746,ck:66557,dk:17310,ek:28631,fk:21589,gk:68012,hk:60480,ik:31571,jk:76980,kk:41577,lk:45469,mk:38669,nk:13768,pk:13777,qk:62985,rk:4724,sk:59369,tk:43927,uk:43928,vk:12924,wk:100355,zk:56219,Ak:27669,Bk:10337,yk:47896,Ck:122629,Dk:121258,Ek:107598,Fk:127991,Gk:96639,Hk:107536,Ik:130169,Jk:96661,Kk:96658,Lk:116646,Mk:121122,Nk:96660,Ok:127738,Pk:127083,Qk:104443,Rk:96659,Sk:106442,Tk:134840,Uk:63667,Vk:63668,Wk:63669,Xk:130686,
Yk:78314,Zk:55761,al:127098,bl:134841,dl:96368,fl:67374,il:48992,jl:49956,kl:31961,ll:26388,ml:23811,nl:5E4,ol:126250,pl:96370,ql:47355,rl:47356,sl:37935,ul:45521,vl:21760,wl:83769,xl:49977,yl:49974,zl:93497,Al:93498,Bl:34325,Cl:115803,Dl:123707,El:100081,Fl:35309,Gl:68314,Hl:25602,Il:100339,Jl:59018,Kl:18248,Ll:50625,Ml:9729,Nl:37168,Ol:37169,Pl:21667,Ql:16749,Rl:18635,Sl:39305,Tl:18046,Ul:53969,Vl:8213,Wl:93926,Xl:102852,Yl:110099,Zl:22678,am:69076,cm:100856,dm:17736,em:3832,fm:55759,gm:64031,hm:93044,
im:93045,jm:34388,km:17657,lm:17655,mm:39579,nm:39578,om:77448,pm:8196,qm:11357,rm:69877,sm:8197,tm:82039};function ll(){var a=kb(ml),b;return bf(new Ve(function(c,d){a.onSuccess=function(e){Ig(e)?c(new nl(e)):d(new ol("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new ol("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new ol("Request timed out","net.timeout",e))};
b=Og("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof cf&&b.abort();
return $e(c)})}
function ol(a,b,c){Ta.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(ol,Ta);function nl(a){this.xhr=a}
;function pl(){this.i=0;this.h=null}
pl.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Ue(a)?a:ql(a)):2===this.i&&b?(a=b.call(c,this.h),Ue(a)?a:rl(a)):this};
pl.prototype.getValue=function(){return this.h};
pl.prototype.$goog_Thenable=!0;function rl(a){var b=new pl;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function ql(a){var b=new pl;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function sl(){if(qd())return!0;var a=E("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||Wg&&Xg("applewebkit")&&!Xg("version")&&(!Xg("safari")||Xg("gsa/"))||pc&&Xg("version/")?!0:(a=od.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function tl(a){Ta.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ul;this.isTimeout=a instanceof ol&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof cf}
v(tl,Ta);tl.prototype.name="BiscottiError";function ul(){Ta.call(this,"Biscotti ID is missing from server")}
v(ul,Ta);ul.prototype.name="BiscottiMissingError";var ml={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},vl=null;function sg(){if(O("disable_biscotti_fetch_entirely_for_all_web_clients"))return $e(Error("Biscotti id fetching has been disabled entirely."));if(!sl())return $e(Error("User has not consented - not fetching biscotti id."));if("1"==ib())return $e(Error("Biscotti ID is not available in private embed mode"));vl||(vl=bf(ll().then(wl),function(a){return xl(2,a)}));
return vl}
function wl(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ul;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ul;a=a.id;tg(a);vl=ql(a);yl(18E5,2);return a}
function xl(a,b){b=new tl(b);tg("");vl=rl(b);0<a&&yl(12E4,a-1);throw b;}
function yl(a,b){cg(function(){bf(ll().then(wl,function(c){return xl(b,c)}),Ea)},a)}
function zl(){try{var a=B("yt.ads.biscotti.getId_");return a?a():sg()}catch(b){return $e(b)}}
;function Al(a){if("1"!=ib()){a&&rg();try{zl().then(function(){},function(){}),cg(Al,18E5)}catch(b){Mf(b)}}}
;var Bl=Date.now().toString();
function Cl(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Bl)for(a=1,b=0;b<Bl.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Bl.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Dl,El=y.ytLoggingDocDocumentNonce_;El||(El=Cl(),Ra("ytLoggingDocDocumentNonce_",El));Dl=El;var Fl={jf:0,Ic:1,Qc:2,si:3,lf:4,bm:5,ij:6,xk:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function Gl(a){this.h=a}
function Hl(a){return new Gl({trackingParams:a})}
Gl.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Gl.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Gl.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Il(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Jl(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Kl(a){return E(Jl(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",Kl,void 0);function Ll(a){return(a=Kl(void 0===a?0:a))?new Gl({veType:a,youtubeData:void 0}):null}
function Ml(){var a=E("csn-to-ctt-auth-info");a||(a={},N("csn-to-ctt-auth-info",a));return a}
function Nl(a){a=void 0===a?0:a;var b=E(Il(a));if(!b&&!E("USE_CSN_FALLBACK",!0))return null;b||!O("use_undefined_csn_any_layer")&&0!=a||(b="UNDEFINED_CSN");return b?b:null}
z("yt_logging_screen.getCurrentCsn",Nl,void 0);function Ol(a,b,c){var d=Ml();(c=Nl(c))&&delete d[c];b&&(d[a]=b)}
function Pl(a){return Ml()[a]}
z("yt_logging_screen.getCttAuthInfo",Pl,void 0);function Ql(a,b,c,d){c=void 0===c?0:c;if(a!==E(Il(c))||b!==E(Jl(c)))Ol(a,d,c),N(Il(c),a),N(Jl(c),b),b=function(){setTimeout(function(){a&&Jh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Dl,clientScreenNonce:a},Ok)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",Ql,void 0);function Rl(a){ci.call(this,1,arguments);this.csn=a}
v(Rl,ci);var li=new di("screen-created",Rl),Sl=[],Ul=Tl,Vl=0;function Wl(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:Ya(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(gb(e)||!e.trackingParams&&!e.veType)&&hl(Error("Child VE logged with no data"));d={cttAuthInfo:Pl(b),Z:b};"UNDEFINED_CSN"==b?Xl("visualElementAttached",c,d):a?Jh("visualElementAttached",c,a,d):Pk("visualElementAttached",c,d)}
function Tl(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Ec(b)}
function Xl(a,b,c){Sl.push({payloadName:a,payload:b,options:c});Vl||(Vl=mi())}
function ni(a){if(Sl){for(var b=u(Sl),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Jh(c.payloadName,c.payload,null,c.options));Sl.length=0}Vl=0}
;function Yl(){this.i=new Set;this.h=new Set;this.j=new Map}
Yl.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Fa(Yl);function Zl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!$l(a)||c.some(function(e){return!$l(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())am(a,d.value);return a}
function am(a,b){for(var c in b)if($l(b[c])){if(c in a&&!$l(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});am(a[c],b[c])}else if(bm(b[c])){if(c in a&&!bm(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);cm(a[c],b[c])}else a[c]=b[c];return a}
function cm(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,$l(c)?a.push(am({},c)):bm(c)?a.push(cm([],c)):a.push(c);return a}
function $l(a){return"object"===typeof a&&!Array.isArray(a)}
function bm(a){return"object"===typeof a&&Array.isArray(a)}
;function dm(a,b){ci.call(this,1,arguments)}
v(dm,ci);function em(a,b){ci.call(this,1,arguments)}
v(em,ci);var fm=new di("aft-recorded",dm),gm=new di("timing-sent",em);var hm=window;function im(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var W=hm.performance||hm.mozPerformance||hm.msPerformance||hm.webkitPerformance||new im;var jm=!1,km={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Pa(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||Ea,W);function lm(a){var b=mm(a);if(b.aft)return b.aft;a=E((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function nm(){var a;if(O("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===W||void 0===W?void 0:W.getEntriesByType)||void 0===a?void 0:a.call(W,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=om(e.requestStart),e.responseEnd=om(e.responseEnd),e.redirectStart=om(e.redirectStart),e.redirectEnd=om(e.redirectEnd),e.domainLookupEnd=om(e.domainLookupEnd),e.connectStart=om(e.connectStart),
e.connectEnd=om(e.connectEnd),e.responseStart=om(e.responseStart),e.secureConnectionStart=om(e.secureConnectionStart),e.domainLookupStart=om(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=W.timing}else a=W.timing;return a}
function pm(){return O("csi_use_time_origin")&&W.timeOrigin?Math.floor(W.timeOrigin):W.timing.navigationStart}
function om(a){return Math.round(pm()+a)}
function qm(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ra("ytcsi."+(a||"")+"data_",b));return b}
function rm(a){a=qm(a);a.info||(a.info={});return a.info}
function mm(a){a=qm(a);a.tick||(a.tick={});return a.tick}
function sm(a){var b=qm(a).nonce;b||(b=Cl(),qm(a).nonce=b);return b}
function tm(a){var b=mm(a||""),c=lm(a);c&&!jm&&(ii(fm,new dm(Math.round(c-b._start),a)),jm=!0)}
;function um(){if(W.getEntriesByType){var a=W.getEntriesByType("paint");if(a=$a(a,function(b){return"first-paint"===b.name}))return om(a.startTime)}a=W.timing;
return a.Fb?Math.max(0,a.Fb):0}
;function vm(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function wm(a){a=a||"";var b=B("ytcsi.reference");b||(vm(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=vm(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var xm=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",xm,void 0);function ym(){this.h=0}
function zm(){ym.h||(ym.h=new ym);return ym.h}
ym.prototype.tick=function(a,b,c,d){Am(this,"tick_"+a+"_"+b)||Pk("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
ym.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Am(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Pk("latencyActionInfo",a,{cttAuthInfo:c}))};
ym.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Am(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Pk("latencyActionSpan",a,{cttAuthInfo:c}))};
function Am(a,b){xm[b]=xm[b]||{count:0};var c=xm[b];c.count++;c.time=P();a.h||(a.h=gg(function(){var d=P(),e;for(e in xm)xm[e]&&6E4<d-xm[e].time&&delete xm[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new wi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||hl(c)),!0):!1}
;var X={},Bm=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X.browse="LATENCY_ACTION_BROWSE",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard=
"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.playlists"]=
"LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf=
"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard=
"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest=
"LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X),Y={},Cm=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an=
"adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.aac_type="tvAppInfo.authAccessCredentialType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cs="commandSource",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid=
"requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",
Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm=
"shellStartupDurationMs",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),Dm="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Em={},Fm=(Em.ccs="CANARY_STATE_",
Em.mver="MEASUREMENT_VERSION_",Em.pis="PLAYER_INITIALIZED_STATE_",Em.yt_pt="LATENCY_PLAYER_",Em.pa="LATENCY_ACTION_",Em.ctop="TOP_ENTITY_TYPE_",Em.yt_vst="VIDEO_STREAM_TYPE_",Em),Gm="all_vc ap aq c cbr cbrand cbrver cmodel cos cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Hm(a){return!!E("FORCE_CSI_ON_GEL",!1)||O("csi_on_gel")||O("enable_csi_on_gel")||O("unplugged_tvhtml5_csi_on_gel")||!!qm(a).useGel}
function Im(a,b,c){var d=Jm(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||P();if(Hm(c)){wm(c||"").tick[a]=b||P();d=sm(c);var e=qm(c).cttAuthInfo;"_start"===a?(a=zm(),Am(a,"baseline_"+d)||Pk("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:e})):zm().tick(a,d,b,e);tm(c);return!0}return!1}
function Km(a,b,c){c=Jm(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Cm){c=Cm[a];0<=Wa(Dm,c)&&(b=!!b);a in Fm&&"string"===typeof b&&(b=Fm[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Zl({},d)}0<=Wa(Gm,a)||hl(new wi("Unknown label logged with GEL CSI",a))}
function Jm(a){a=qm(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Lm(a){a=Jm(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function Mm(a,b,c){null!==b&&(rm(c)[a]=b,Hm(c)?(a=Km(a,b,c))&&Hm(c)&&(b=wm(c||""),Zl(b.info,a),Zl(Lm(c),a),b=sm(c),c=qm(c).cttAuthInfo,zm().info(a,b,c)):wm(c||"").info[a]=b)}
function Z(a,b,c){var d=mm(c);if(!b&&"_"!==a[0]){var e=a;W.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),W.mark(e))}e=b||P();d[a]=e;Im(a,b,c)||c||(Nm(),wm("").tick[a]=b||P());return d[a]}
function Om(){var a=sm(void 0);requestAnimationFrame(function(){setTimeout(function(){a===sm(void 0)&&Z("ol",void 0,void 0)},0)})}
function Nm(){if(!B("yt.timing.pingSent_")){var a=E("TIMING_ACTION",void 0),b=mm();if(a=!!B("ytglobal.timingready_")&&a)a="_start"in mm(void 0);if(a&&lm()){tm();a=!0;var c=E("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in b)){a=!1;break}if(a&&!Hm()){c=mm();d=rm();e=c._start;var f=E("CSI_SERVICE_NAME","youtube");a={v:2,s:f,action:E("TIMING_ACTION",void 0)};b=d.srt;void 0!==c.srt&&delete d.srt;c.aft=lm();var g=mm(void 0),h=g.pbr,k=g.vc;g=g.pbs;h&&k&&g&&h<k&&k<g&&rm(void 0).yt_pvis&&
"youtube"===f&&(Mm("yt_lt","hot_bg"),f=c.vc,h=c.pbs,delete c.aft,d.aft=Math.round(h-f));for(var l in d)"_"!==l.charAt(0)&&(a[l]=d[l]);c.ps=P();l={};f=[];for(var n in c)"_"!==n.charAt(0)&&(h=Math.round(c[n]-e),l[n]=h,f.push(n+"."+h));a.rt=f.join(",");n=!!d.ap;c="";for(var q in a)a.hasOwnProperty(q)&&(c+="&"+q+"="+a[q]);q="/csi_204?"+c.substring(1);window.navigator&&n?ch(q):$g(q);z("yt.timing.pingSent_",!0,void 0);ii(gm,new em(l.aft+(Number(b)||0)))}}}}
function Pm(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Tf+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Qm(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Zb()&&a.setAttribute("nonce",Zb());return c?(a=W.getEntriesByName(c))&&a[0]&&(a=a[0],c=pm(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Rm(){var a=window.location.protocol,b=W.getEntriesByType("resource");b=Xa(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Za(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",om(b.startTime)),Z("wffe",om(b.responseEnd)))}
var Sm=window;Sm.ytcsi&&(Sm.ytcsi.info=Mm,Sm.ytcsi.tick=Z);function Tm(){this.A=[];this.o=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.B=new Map}
function Um(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=Nl(c),h=Ll(c);g&&h&&((null===(e=d.response)||void 0===e?0:e.trackingParams)&&Wl(a.client,g,h,[Hl(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Wl(a.client,g,h,[Hl(d.playerResponse.trackingParams)]))})}
function Vm(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.A.push([b,c]);else{var e=Nl(d);c=c||Ll(d);e&&c&&Wl(a.client,e,c,[b])}}
Tm.prototype.clickCommand=function(a,b,c){a=a.clickTrackingParams;c=void 0===c?0:c;if(a)if(c=Nl(void 0===c?0:c)){var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:Hl(a).getAsJson(),gestureType:e};b&&(a.clientData=b);b={cttAuthInfo:Pl(c),Z:c};"UNDEFINED_CSN"==c?Xl("visualElementGestured",a,b):d?Jh("visualElementGestured",a,d,b):Pk("visualElementGestured",a,b);b=!0}else b=!1;else b=!1;return b};
function Wm(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Xm(a,b,c);var f=Ll(c.layer);if(f){for(var g=u(a.A),h=g.next();!h.done;h=g.next())h=h.value,Vm(a,h[0],h[1]||f,c.layer);f=u(a.o);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Nl(g);var l=k[0]||Ll(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={cttAuthInfo:Pl(h),Z:h},"UNDEFINED_CSN"==h?Xl("visualElementStateChanged",k,l):g?Jh("visualElementStateChanged",k,g,l):Pk("visualElementStateChanged",
k,l))}}};
Nl(c.layer)||a.j();if(c.Ta)for(var d=u(c.Ta),e=d.next();!e.done;e=d.next())Um(a,e.value,c.layer);else il(Error("Delayed screen needs a data promise."))}
function Xm(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Gb?c.Gb:c.layer;var e=Nl(d);d=Ll(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=E("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.Sa,n=c.cttAuthInfo,q=Ul(),r={csn:q,pageVe:(new Gl({veType:b,youtubeData:g})).getAsJson()};h&&h.visualElement?r.implicitGesture=
{parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&hl(new wi("newScreen() parent element does not have a VE - rootVe",b));l&&(r.cloneCsn=l);l={cttAuthInfo:n,Z:q};k?Jh("screenCreated",r,k,l):Pk("screenCreated",r,l);ii(li,new Rl(q));var p=q}catch(A){jl(A,{Cm:b,rootVe:d,parentVisualElement:void 0,xm:e,Bm:f,Sa:c.Sa});il(A);return}Ql(p,b,c.layer,c.cttAuthInfo);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=O("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(Fl));for(f=b.next();!f.done;f=
b.next())if(Nl(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={cttAuthInfo:Pl(e),Z:e,tb:f},"UNDEFINED_CSN"==e?Xl("visualElementHidden",d,f):b?Jh("visualElementHidden",d,b,f):Pk("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=p||"");Mm("csn",p);Yl.getInstance().clear();d=Ll(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(O("web_mark_root_visible")||O("music_web_mark_root_visible"))&&(e=p,
p={csn:e,ve:d.getAsJson(),eventType:1},b={cttAuthInfo:Pl(e),Z:e},"UNDEFINED_CSN"==e?Xl("visualElementShown",p,b):Pk("visualElementShown",p,b));a.i.delete(c.layer||0);a.j=void 0;e=u(a.B);for(p=e.next();!p.done;p=e.next())b=u(p.value),p=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Vm(a,p,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(A){il(A)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(A){il(A)}}}
;function Ym(a){a&&(a.dataset?a.dataset[Zm("loaded")]="true":a.setAttribute("data-loaded","true"))}
function $m(a,b){return a?a.dataset?a.dataset[Zm(b)]:a.getAttribute("data-"+b):null}
var an={};function Zm(a){return an[a]||(an[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var bn=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,cn=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function dn(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(bn,""),c=c.replace(cn,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else en(a,b,c)}
function en(a,b,c){c=void 0===c?null:c;var d=fn(a),e=document.getElementById(d),f=e&&$m(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=hh(d,b),b=""+Ja(b),gn[b]=f),g||(e=hn(a,d,function(){$m(e,"loaded")||(Ym(e),kh(d),cg(Qa(lh,d),0))},c)))}
function hn(a,b,c,d){d=void 0===d?null:d;var e=Vc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Oc(e,Me(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function jn(a){a=fn(a);var b=document.getElementById(a);b&&(lh(a),b.parentNode.removeChild(b))}
function kn(a,b){a&&b&&(a=""+Ja(b),(a=gn[a])&&jh(a))}
function fn(a){var b=document.createElement("a");Wb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ac(a)}
var gn={};var ln=[],mn=!1;function nn(){if(!O("disable_biscotti_fetch_for_ad_blocker_detection")&&!O("disable_biscotti_fetch_entirely_for_all_web_clients")&&sl()&&"1"!=ib()){var a=function(){mn=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)};
try{dn("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}ln.push(ig(function(){if(!(mn||"google_ad_status"in window)){try{kn("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}mn=!0;N("DCLKSTAT",3)}},5E3))}}
function on(){var a=Number(E("DCLKSTAT",0));return isNaN(a)?0:a}
;function pn(){this.i=!1;this.h=null}
pn.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript;sb("From proto message. b/166824318");g=g.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=pb();g=k?k.createScript(g):g;g=(new ub(g)).toString()}a.interpreterSafeUrl&&(h=a.interpreterSafeUrl,sb("From proto message. b/166824318"),h=yb(h.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||
"").toString());qn(this,g,h,a.program,b,c,d)}else hl(Error("Cannot initialize botguard without program"))};
function qn(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,dn(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?rn(a,d,!!g,h,e):(jn(c),hl(new wi("Unable to load Botguard","from "+c)))},f)):b&&(f=Vc(document,"SCRIPT"),f.textContent=b,f.nonce=Zb(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?rn(a,d,!!g,b,e):hl(Error("Unable to load Botguard from JS")))}
function rn(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{sn(a,new d(b,e?function(){return e(b)}:Ea))}catch(h){h instanceof Error&&hl(h)}else{try{sn(a,new d(b))}catch(h){h instanceof Error&&hl(h)}e&&e(b)}else hl(Error("Failed to finish initializing VM"))}
pn.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
pn.prototype.dispose=function(){this.h=null};
function sn(a,b){a.h=b}
;var tn=new pn;function un(){return!!tn.h}
function vn(a){a=void 0===a?{}:a;return tn.invoke(a)}
;var wn=window,xn=/[A-Za-z]+\/[0-9.]+/g;function yn(a,b){if(a.replace(xn,"")!==b.replace(xn,""))return!1;a=a.match(xn);b=b.match(xn);if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(!d.startsWith(e)&&!e.startsWith(d))return!1}return!0}
function zn(){var a=wn.uaChPolyfill.state;if(0===a.type)Pk("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&yn(a.syntheticUa,b),d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),il(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);Pk("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),Pk("clientHintsPolyfillDiagnostics",
b))}}
var An=!1;function Bn(){var a;1===(null===(a=wn.uaChPolyfill)||void 0===a?void 0:a.state.type)?An||(wn.uaChPolyfill.onReady=Bn,An=!0):wn.uaChPolyfill&&zn()}
;function Cn(a,b,c){L.call(this);var d=this;c=c||E("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.I=!!a;this.B=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.I&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.o||0<=Wa(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.i=this.m=null;window.addEventListener("message",this.B)}
v(Cn,L);Cn.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.C)}catch(d){Nf(d)}}};
Cn.prototype.D=function(){window.removeEventListener("message",this.B);L.prototype.D.call(this)};function Dn(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Cn(!!E("WIDGET_ID_ENFORCE")),b=this.Ib.bind(this);a.m=b;a.o=null;this.h.channel="widget";if(a=E("WIDGET_ID"))this.h.sessionId=a}
m=Dn.prototype;m.Ib=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,En(this,a)),this.j[a]=!0)):this.Na(a,b,c)};
m.Na=function(){};
function En(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.ub=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Da());this.sendMessage("onReady");D(this.i,this.jb,this);this.i=[]};
m.Da=function(){return null};
function Fn(a,b){a.sendMessage("infoDelivery",b)}
m.jb=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.jb({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function Gn(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Hn(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function In(a,b,c,d){if(Ia(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Jn(a){Dn.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Pb.bind(this));this.addEventListener("onVolumeChange",this.Qb.bind(this));this.addEventListener("onApiChange",this.Kb.bind(this));this.addEventListener("onPlaybackQualityChange",this.Mb.bind(this));this.addEventListener("onPlaybackRateChange",this.Nb.bind(this));this.addEventListener("onStateChange",this.Ob.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Rb.bind(this))}
v(Jn,Dn);m=Jn.prototype;
m.Na=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Gn(a)){var d=b;if(Ia(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Hn(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Hn(e);break;case "loadPlaylist":case "cuePlaylist":e=In(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Gn(a)&&Fn(this,this.Da())}};
m.onReady=function(){var a=this.ub.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Da=function(){if(!this.api)return null;var a=this.api.getApiInterface();ab(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Ob=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Fn(this,a)};
m.Mb=function(a){Fn(this,{playbackQuality:a})};
m.Nb=function(a){Fn(this,{playbackRate:a})};
m.Kb=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Qb=function(){Fn(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Pb=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Fn(this,a)};
m.Rb=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Fn(this,a)};
m.dispose=function(){Dn.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Kn(a){L.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.eb,this)}
v(Kn,L);m=Kn.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.ca("RECEIVING"))};
m.ca=function(a,b){this.started&&!this.h&&this.connection.ca(a,b)};
m.eb=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Ln(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Mn(a,c))&&this.ca(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Lb.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Lb=function(a,b){this.started&&!this.h&&this.connection.ca(a,this.Ca(a,b))};
m.Ca=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.D=function(){var a=this.connection;a.h||nf(a.i,"command",this.eb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);L.prototype.D.call(this)};function Nn(a,b){Kn.call(this,b);this.api=a;this.start()}
v(Nn,Kn);Nn.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Nn.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Ln(a,b){switch(a){case "loadVideoById":return a=Hn(b),[a];case "cueVideoById":return a=Hn(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=In(b),[a];case "cuePlaylist":return a=In(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Mn(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Nn.prototype.Ca=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Kn.prototype.Ca.call(this,a,b)};
Nn.prototype.D=function(){Kn.prototype.D.call(this);delete this.api};function On(a){a=void 0===a?!1:a;L.call(this);this.i=new M(a);Ud(this,Qa(Sd,this.i))}
C(On,L);On.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
On.prototype.l=function(a,b){this.h||this.i.ba.apply(this.i,arguments)};function Pn(a,b,c){On.call(this);this.j=a;this.destination=b;this.id=c}
v(Pn,On);Pn.prototype.ca=function(a,b){this.h||this.j.ca(this.destination,this.id,a,b)};
Pn.prototype.D=function(){this.destination=this.j=null;On.prototype.D.call(this)};function Qn(a,b,c){L.call(this);this.destination=a;this.origin=c;this.i=$f(window,"message",this.j.bind(this));this.connection=new Pn(this,a,b);Ud(this,Qa(Sd,this.connection))}
v(Qn,L);Qn.prototype.ca=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Oe(a),this.origin))};
Qn.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
Qn.prototype.D=function(){ag(this.i);this.destination=null;L.prototype.D.call(this)};function Rn(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||kb(b);this.assets=a.assets||{};this.attrs=a.attrs||kb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Rn.prototype.clone=function(){var a=new Rn,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ga(c)?a[b]=kb(c):a[b]=c}return a};var Sn=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Tn(a){a=a||"";if(window.spf){var b=a.match(Sn);spf.style.load(a,b?b[1]:"",void 0)}else Un(a)}
function Un(a){var b=Vn(a),c=document.getElementById(b),d=c&&$m(c,"loaded");d||c&&!d||(c=Wn(a,b,function(){$m(c,"loaded")||(Ym(c),kh(b),cg(Qa(lh,b),0))}))}
function Wn(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Me(a);Xb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Vn(a){var b=Vc(document,"A");sb("This URL is never added to the DOM");Wb(b,new Hb(a,Ib));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ac(a)}
;function Xn(){L.call(this);this.i=[]}
v(Xn,L);Xn.prototype.D=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Pa,void 0)}L.prototype.D.call(this)};function Yn(){Xn.apply(this,arguments)}
v(Yn,Xn);function Zn(a,b,c,d){L.call(this);var e=this;this.I=b;this.webPlayerContextConfig=d;this.ya=!1;this.api={};this.fa=this.m=null;this.L=new M;this.i={};this.R=this.la=this.elementId=this.za=this.config=null;this.P=!1;this.l=this.B=null;this.ma={};this.mb=["onReady"];this.lastError=null;this.Oa=NaN;this.C={};this.nb=new Yn(this);this.ea=0;this.j=this.o=a;Ud(this,Qa(Sd,this.L));$n(this);ao(this);Ud(this,Qa(Sd,this.nb));c?this.ea=cg(function(){e.loadNewVideoConfig(c)},0):d&&(bo(this),co(this))}
v(Zn,L);m=Zn.prototype;m.getId=function(){return this.I};
m.loadNewVideoConfig=function(a){if(!this.h){this.ea&&(dg(this.ea),this.ea=0);var b=a||{};b instanceof Rn||(b=new Rn(b));this.config=b;this.setConfig(a);co(this);this.isReady()&&eo(this)}};
function bo(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.I,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.I:a.config.attrs.id=a.I);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.za=a;this.config=fo(a);bo(this);this.la||(this.la=go(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=fd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=fd(Number(a)||a))};
function eo(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function ho(a){var b=!0,c=io(a);c&&a.config&&(a=jo(a),b=$m(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function co(a){if(!a.h&&!a.P){var b=ho(a);if(b&&"html5"===(io(a)?"html5":null))a.R="html5",a.isReady()||ko(a);else if(lo(a),a.R="html5",b&&a.l&&a.o)a.o.appendChild(a.l),ko(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=mo(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?fo(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);ko(a)};
a.P=!0;b?a.B():(dn(jo(a),a.B),(b=no(a))&&Tn(b),oo(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function io(a){var b=Rc(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function ko(a){var b;if(!a.h){var c=io(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.P=!1,!mo(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||po(a)):a.Oa=cg(function(){ko(a)},50)}}
function po(a){$n(a);a.ya=!0;var b=io(a);if(b){a.m=qo(a,b,"addEventListener");a.fa=qo(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=qo(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.m&&a.m(g,a.i[g]);eo(a);a.la&&a.la(a.api);a.L.ba("onReady",a.api)}
function qo(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,hl(h))}}}
function $n(a){a.ya=!1;if(a.fa)for(var b in a.i)a.i.hasOwnProperty(b)&&a.fa(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&dg(Number(c));a.C={};a.m=null;a.fa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.za};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.ya};
function ao(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){kh("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){kh("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){kh("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=go(this,b);d&&(0<=Wa(this.mb,a)||this.i[a]||(b=ro(this,a),this.m&&this.m(a,b)),this.L.subscribe(a,d),"onReady"===a&&this.isReady()&&cg(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=go(this,b))&&nf(this.L,a,b)};
function go(a,b){var c=b;if("string"===typeof b){if(a.ma[b])return a.ma[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];if(f=B(b))try{f.apply(y,e)}catch(g){il(g)}};
a.ma[b]=c}return c?c:null}
function ro(a,b){var c="ytPlayer"+b+a.I;a.i[b]=c;y[c]=function(d){var e=cg(function(){if(!a.h){a.L.ba(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
hb(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.R||(io(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function lo(a){a.cancel();$n(a);a.R=null;a.config&&(a.config.loaded=!1);var b=io(a);b&&(ho(a)||!oo(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&kn(jo(this),this.B);dg(this.Oa);this.P=!1};
m.D=function(){lo(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){il(b)}this.ma=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.za=this.config=this.api=null;delete this.o;delete this.j;L.prototype.D.call(this)};
function oo(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function jo(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function no(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function mo(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===wg(d||"","&")[b]}
function fo(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?kb(e):e}return b}
;var so={},to="player_uid_"+(1E9*Math.random()>>>0);function uo(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Rc(d):d;var e=to+"_"+Ja(d),f=so[e];if(f&&c)return vo(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Zn(d,e,a,b);so[e]=f;kh("player-added",f.api);Ud(f,function(){delete so[f.getId()]});
return f.api}
function vo(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var wo=null,xo=null,yo=null;function zo(){var a=wo.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Ao(a,b,c){a="ST-"+ac(a).toString(36);b=b?fc(b):"";c=c||5;sl()&&Lh(a,b,c)}
;function Bo(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=E("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=E("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=dc(window.location.href);g&&f.push(g);g=dc(d);if(0<=Wa(f,g)||!g&&0==d.lastIndexOf("/",0))if(O("autoescape_tempdata_url")&&(f=document.createElement("a"),Wb(f,d),d=f.href),d){g=d.match(bc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Nl()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&Ao(d,b,k)}else Ao(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var q=void 0===q?window:q;c=q.location;a=gc(a,l)+n;var r=void 0===r?ed:r;a:{r=void 0===r?ed:r;for(l=0;l<r.length;++l)if(n=r[l],n instanceof cd&&n.isValid(a)){r=new Lc(a,Jc);break a}r=void 0}c.href=Nc(r||Mc)}return!0}
;z("yt.setConfig",N,void 0);z("yt.config.set",N,void 0);z("yt.setMsg",Pf,void 0);z("yt.msgs.set",Pf,void 0);z("yt.logging.errors.log",il,void 0);
z("writeEmbed",function(){var a=E("PLAYER_CONFIG",void 0);if(!a){var b=E("PLAYER_VARS",void 0);b&&(a={args:b})}Al(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=E("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);O("embeds_js_api_set_1p_cookie")&&(c=Bg(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));N("FORCE_CSI_ON_GEL",!0);
c=["ol"];wm("").info.actionType="embed";c&&N("TIMING_AFT_KEYS",c);N("TIMING_ACTION","embed");c=E("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&Mm(d,c[d]);Mm("is_nav",1);(d=Nl())&&Mm("csn",d);(d=E("PREVIOUS_ACTION",void 0))&&!Hm()&&Mm("pa",d);d=rm();c=E("CLIENT_PROTOCOL");var e=E("CLIENT_TRANSPORT");c&&Mm("p",c);e&&Mm("t",e);Mm("yt_vis",Pm());Mm("yt_lt","cold");c=nm();if(e=pm())Z("srt",c.responseStart),1!==d.prerender&&(Mm("yt_sts","n",void 0),Z("_start",e,void 0));d=um();0<d&&Z("fpt",d);d=
nm();d.isPerformanceNavigationTiming&&Mm("pnt",1,void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=pm()&&0<d.connectEnd-
d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));W&&W.getEntriesByType&&Rm();d=[];if(document.querySelector&&W&&W.getEntriesByName)for(var f in km)km.hasOwnProperty(f)&&(c=km[f],Qm(f,c)&&d.push(c));for(f=0;f<d.length;f++)Mm("rc",d[f]);if(Hm(void 0)){f={actionType:Bm[E("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:Bm[E("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(d=Nl())f.clientScreenNonce=d;d=sm(void 0);c=qm(void 0).cttAuthInfo;
zm().info(f,d,c)}f=rm();c=mm();if("cold"===f.yt_lt&&(d=Jm(),e=d.gelTicks?d.gelTicks:d.gelTicks={},d=d.gelInfos?d.gelInfos:d.gelInfos={},Hm())){for(var g in c)"tick_"+g in e||Im(g,c[g]);g=Lm();c=sm();e=qm().cttAuthInfo;var h={},k=!1,l;for(l in f)if(!("info_"+l in d)){var n=Km(l,f[l]);n&&(Zl(g,n),Zl(h,n),k=!0)}k&&zm().info(h,c,e)}z("ytglobal.timingready_",!0,void 0);Nm();(l=E("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in l?(l=l.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,
l.serializedForcedExperimentIds||(g=Bg(),g.forced_experiments&&(l.serializedForcedExperimentIds=g.forced_experiments)),wo=uo(a,l,!1)):wo=uo(a);wo.addEventListener("onVideoDataChange",zo);a=E("POST_MESSAGE_ID","player");E("ENABLE_JS_API")?yo=new Jn(wo):E("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(xo=new Qn(window.parent,a,b),yo=new Nn(wo,xo.connection));nn();O("networkless_logging_web_embedded")&&(O("embeds_web_enable_new_nwl")?Nk():pk());O("embeds_enable_ua_ch_polyfill")&&Bn()},
void 0);
var Co=Lf(function(){Om();var a=Nh.getInstance(),b=!!((Qh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Xd(document.body,"exp-invert-logo"))if(c&&!Xd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Xd(d,"inverted-hdpi")){var e=Vd(d);Wd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Xd(document.body,"inverted-hdpi")&&Yd();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Qh(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete Mh[b]:(c=d.toString(16),Mh[b]=c.toString());c=!0;O("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Mh)d.push(f+"="+encodeURIComponent(String(Mh[f])));Lh(b,d.join("&"),63072E3,a.i,c)}Tm.h||(Tm.h=new Tm);a=Tm.h;f=16623;var g=void 0===g?{}:g;Object.values(kl).includes(f)||(hl(new wi("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.A=[];a.o=[];g.Ta?Wm(a,f,g):Xm(a,f,g)}),Do=Lf(function(){wo&&
wo.sendAbandonmentPing&&wo.sendAbandonmentPing();
E("PL_ATT")&&tn.dispose();for(var a=0,b=ln.length;a<b;a++)lg(ln[a]);ln.length=0;jn("//static.doubleclick.net/instream/ad_status.js");mn=!1;N("DCLKSTAT",0);Td(yo,xo);wo&&(wo.removeEventListener("onVideoDataChange",zo),wo.destroy())});
window.addEventListener?(window.addEventListener("load",Co),window.addEventListener("unload",Do)):window.attachEvent&&(window.attachEvent("onload",Co),window.attachEvent("onunload",Do));Ra("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||un);Ra("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||vn);Ra("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||on);
Ra("yt.player.exports.navigate",B("yt.player.exports.navigate")||Bo);Ra("yt.util.activity.init",B("yt.util.activity.init")||ng);Ra("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||qg);Ra("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||og);}).call(this);
