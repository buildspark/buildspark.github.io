(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{v1ax:function(a,n,t){"use strict";t.r(n),t.d(n,"mdTransitionAnimation",function(){return o}),t("Twl7"),t("ttJE"),t("wSPg");var e=t("FX7f"),i=(t("ocqh"),t("YNVt")),o=function(a,n){var t="back"===n.direction,o=n.enteringEl,r=n.leavingEl,c=Object(i.b)(o),d=c.querySelector("ion-toolbar"),b=Object(e.a)();if(b.addElement(c).fill("both").beforeRemoveClass("ion-page-invisible"),t?b.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):b.duration(n.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),d){var s=Object(e.a)();s.addElement(d),b.addAnimation(s)}if(r&&t){b.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var l=Object(e.a)();l.addElement(Object(i.b)(r)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),b.addAnimation(l)}return b}}}]);