(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{XCFn:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_toast",function(){return b});var i=o("mrSG"),n=o("Twl7"),r=(o("ttJE"),o("wSPg"),o("FX7f")),a=o("CTpc"),s=o("Jky2"),d=o("zwjO"),c=function(t,e){var o=Object(r.a)(),i=Object(r.a)(),n=t.host||t,a=t.querySelector(".toast-wrapper");switch(i.addElement(a),e){case"top":i.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":var s=Math.floor(n.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",i.fromTo("opacity",.01,1);break;default:i.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return o.addElement(n).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(i)},l=function(t,e){var o=Object(r.a)(),i=Object(r.a)(),n=t.host||t,a=t.querySelector(".toast-wrapper");switch(i.addElement(a),e){case"top":i.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return o.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(i)},p=function(t,e){var o=Object(r.a)(),i=Object(r.a)(),n=t.host||t,a=t.querySelector(".toast-wrapper");switch(i.addElement(a),e){case"top":a.style.top="calc(8px + var(--ion-safe-area-top, 0px))",i.fromTo("opacity",.01,1);break;case"middle":var s=Math.floor(n.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",i.fromTo("opacity",.01,1);break;default:a.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",i.fromTo("opacity",.01,1)}return o.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(i)},u=function(t){var e=Object(r.a)(),o=Object(r.a)(),i=t.host||t,n=t.querySelector(".toast-wrapper");return o.addElement(n).fromTo("opacity",.99,0),e.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)},b=function(){function t(t){Object(n.l)(this,t),this.presented=!1,this.mode=Object(n.e)(this),this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0,Object(a.e)(this.el),this.didPresent=Object(n.d)(this,"ionToastDidPresent",7),this.willPresent=Object(n.d)(this,"ionToastWillPresent",7),this.willDismiss=Object(n.d)(this,"ionToastWillDismiss",7),this.didDismiss=Object(n.d)(this,"ionToastDidDismiss",7)}return t.prototype.present=function(){return Object(i.b)(this,void 0,void 0,function(){var t=this;return Object(i.e)(this,function(e){switch(e.label){case 0:return[4,Object(a.f)(this,"toastEnter",c,p,this.position)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss(void 0,"timeout")},this.duration)),[2]}})})},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(a.g)(this,t,e,"toastLeave",l,u,this.position)},t.prototype.onDidDismiss=function(){return Object(a.h)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(a.h)(this.el,"ionToastWillDismiss")},t.prototype.getButtons=function(){var t=this,e=this.buttons?this.buttons.map(function(t){return"string"==typeof t?{text:t}:t}):[];return this.showCloseButton&&e.push({text:this.closeButtonText||"Close",handler:function(){return t.dismiss(void 0,"cancel")}}),e},t.prototype.buttonClick=function(t){return Object(i.b)(this,void 0,void 0,function(){var e;return Object(i.e)(this,function(o){switch(o.label){case 0:return e=t.role,Object(a.j)(e)?[2,this.dismiss(void 0,e)]:[4,this.callButtonHandler(t)];case 1:return o.sent()?[2,this.dismiss(void 0,t.role)]:[2,Promise.resolve()]}})})},t.prototype.callButtonHandler=function(t){return Object(i.b)(this,void 0,void 0,function(){var e;return Object(i.e)(this,function(o){switch(o.label){case 0:if(!t||!t.handler)return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,Object(a.p)(t.handler)];case 2:return!1===o.sent()?[2,!1]:[3,4];case 3:return e=o.sent(),console.error(e),[3,4];case 4:return[2,!0]}})})},t.prototype.renderButtons=function(t,e){var o,i=this;if(0!==t.length){var r=Object(n.e)(this),a=((o={"toast-button-group":!0})["toast-button-group-"+e]=!0,o);return Object(n.i)("div",{class:a},t.map(function(t){return Object(n.i)("button",{type:"button",class:h(t),tabIndex:0,onClick:function(){return i.buttonClick(t)}},Object(n.i)("div",{class:"toast-button-inner"},t.icon&&Object(n.i)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===r&&Object(n.i)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))}))}},t.prototype.render=function(){var t,e,o=this.getButtons(),i=o.filter(function(t){return"start"===t.side}),r=o.filter(function(t){return"start"!==t.side}),a=Object(n.e)(this),c=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(n.i)(n.a,{style:{zIndex:""+(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign((e={},e[a]=!0,e),Object(s.a)(this.color)),Object(s.b)(this.cssClass)),{"toast-translucent":this.translucent})},Object(n.i)("div",{class:c},Object(n.i)("div",{class:"toast-container"},this.renderButtons(i,"start"),Object(n.i)("div",{class:"toast-content"},void 0!==this.header&&Object(n.i)("div",{class:"toast-header"},this.header),void 0!==this.message&&Object(n.i)("div",{class:"toast-message",innerHTML:Object(d.a)(this.message)})),this.renderButtons(r,"end"))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-header,.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover:hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}"},enumerable:!0,configurable:!0}),t}(),h=function(t){var e;return Object.assign(((e={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text})["toast-button-"+t.role]=void 0!==t.role,e["ion-focusable"]=!0,e["ion-activatable"]=!0,e),Object(s.b)(t.cssClass))}}}]);