(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{PtrR:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",function(){return o});var i=n("wSPg"),o=function(t){var e,n,o,v,l=10*-f,p=0,L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),m=new WeakMap,w=function(t){l=Object(i.i)(t),b(t)},h=function(){clearTimeout(v),v=void 0,n&&(T(!1),n=void 0)},E=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,g(a(t),t))},b=function(t){g(void 0,t)},g=function(t,e){if(!t||t!==n){clearTimeout(v),v=void 0;var o=Object(i.j)(e),a=o.x,c=o.y;if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(s)||j(n,a,c),T(!0)}if(t){var u=m.get(t);u&&(clearTimeout(u),m.delete(t));var f=r(t)?0:d;t.classList.remove(s),v=setTimeout(function(){j(t,a,c),v=void 0},f)}n=t}},j=function(t,e,n){p=Date.now(),t.classList.add(s);var i=L&&c(t);i&&i.addRipple&&(S(),o=i.addRipple(e,n))},S=function(){void 0!==o&&(o.then(function(t){return t()}),o=void 0)},T=function(t){S();var e=n;if(e){var i=u-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout(function(){e.classList.remove(s),m.delete(e)},u);m.set(e,o)}else e.classList.remove(s)}},O=document;O.addEventListener("ionScrollStart",function(t){e=t.target,h()}),O.addEventListener("ionScrollEnd",function(){e=void 0}),O.addEventListener("ionGestureCaptured",h),O.addEventListener("touchstart",function(t){l=Object(i.i)(t),E(t)},!0),O.addEventListener("touchcancel",w,!0),O.addEventListener("touchend",w,!0),O.addEventListener("mousedown",function(t){var e=Object(i.i)(t)-f;l<e&&E(t)},!0),O.addEventListener("mouseup",function(t){var e=Object(i.i)(t)-f;l<e&&b(t)},!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="activated",d=200,u=200,f=2500}}]);