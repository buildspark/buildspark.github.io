(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9jQl":function(n,t,e){n.exports=function(n,t){"use strict";n=n&&n.hasOwnProperty("default")?n.default:n,t=t&&t.hasOwnProperty("default")?t.default:t;var e=n.helpers,l=n.Zoom=n.Zoom||{},a=l.zoomFunctions=l.zoomFunctions||{},o=l.panFunctions=l.panFunctions||{};function i(n,t){var l={};void 0!==n.options.pan&&(l.pan=n.options.pan),void 0!==n.options.pan&&(l.zoom=n.options.zoom);var a=n.$zoom;t=a._options=e.merge({},[t,l]);var o=a._node,i=t.zoom&&t.zoom.enabled,r=t.zoom.drag;i&&!r?o.addEventListener("wheel",a._wheelHandler):o.removeEventListener("wheel",a._wheelHandler),i&&r?(o.addEventListener("mousedown",a._mouseDownHandler),o.ownerDocument.addEventListener("mouseup",a._mouseUpHandler)):(o.removeEventListener("mousedown",a._mouseDownHandler),o.removeEventListener("mousemove",a._mouseMoveHandler),o.ownerDocument.removeEventListener("mouseup",a._mouseUpHandler))}function r(n){var t=n.$zoom._originalOptions;e.each(n.scales,function(n){t[n.id]||(t[n.id]=e.clone(n.options))}),e.each(t,function(e,l){n.scales[l]||delete t[l]})}function u(n,t){return void 0===n||"string"==typeof n&&-1!==n.indexOf(t)}function s(n,t){if(n.scaleAxes&&n.rangeMax&&!e.isNullOrUndef(n.rangeMax[n.scaleAxes])){var l=n.rangeMax[n.scaleAxes];t>l&&(t=l)}return t}function c(n,t){if(n.scaleAxes&&n.rangeMin&&!e.isNullOrUndef(n.rangeMin[n.scaleAxes])){var l=n.rangeMin[n.scaleAxes];t<l&&(t=l)}return t}function d(n,t,e,l){var a=n.max-n.min,o=a*(t-1),i=n.isHorizontal()?e.x:e.y,r=(n.getValueForPixel(i)-n.min)/a,u=o*(1-r);n.options.ticks.min=c(l,n.min+o*r),n.options.ticks.max=s(l,n.max-u)}function m(n,t,e,l){var o=a[n.type];o&&o(n,t,e,l)}function b(n,t,l,a,o,i){var s=n.chartArea;a||(a={x:(s.left+s.right)/2,y:(s.top+s.bottom)/2});var c=n.$zoom._options.zoom;if(c.enabled){r(n);var d,b="function"==typeof c.mode?c.mode({chart:n}):c.mode;d="xy"===b&&void 0!==o?o:"xy",e.each(n.scales,function(n){n.isHorizontal()&&u(b,"x")&&u(d,"x")?(c.scaleAxes="x",m(n,t,a,c)):!n.isHorizontal()&&u(b,"y")&&u(d,"y")&&(c.scaleAxes="y",m(n,l,a,c))}),n.update(i?{duration:i,easing:"easeOutQuad"}:0),"function"==typeof c.onZoom&&c.onZoom({chart:n})}}function p(n,t,l){var a,o=n.options.ticks,i=n.min,r=n.max,u=n.getValueForPixel(n.getPixelForValue(i)-t),s=n.getValueForPixel(n.getPixelForValue(r)-t),c=u=u.valueOf?u.valueOf():u,d=s=s.valueOf?s.valueOf():s;l.scaleAxes&&l.rangeMin&&!e.isNullOrUndef(l.rangeMin[l.scaleAxes])&&(c=l.rangeMin[l.scaleAxes]),l.scaleAxes&&l.rangeMax&&!e.isNullOrUndef(l.rangeMax[l.scaleAxes])&&(d=l.rangeMax[l.scaleAxes]),u>=c&&s<=d?(o.min=u,o.max=s):u<c?(a=i-c,o.min=c,o.max=r-a):s>d&&(a=d-r,o.max=d,o.min=i+a)}function f(n,t,e){var l=o[n.type];l&&l(n,t,e)}n.Zoom.defaults=n.defaults.global.plugins.zoom={pan:{enabled:!1,mode:"xy",speed:20,threshold:10},zoom:{enabled:!1,mode:"xy",sensitivity:3,speed:.1}},l.zoomFunctions.category=function(n,t,e,a){var o=n.chart.data.labels,i=n.minIndex,r=o.length-1,u=n.maxIndex,d=a.sensitivity,m=n.isHorizontal()?n.left+n.width/2:n.top+n.height/2,b=n.isHorizontal()?e.x:e.y;l.zoomCumulativeDelta=t>1?l.zoomCumulativeDelta+1:l.zoomCumulativeDelta-1,Math.abs(l.zoomCumulativeDelta)>d&&(l.zoomCumulativeDelta<0?(b>=m?i<=0?u=Math.min(r,u+1):i=Math.max(0,i-1):b<m&&(u>=r?i=Math.max(0,i-1):u=Math.min(r,u+1)),l.zoomCumulativeDelta=0):l.zoomCumulativeDelta>0&&(b>=m?i=i<u?i=Math.min(u,i+1):i:b<m&&(u=u>i?u=Math.max(i,u-1):u),l.zoomCumulativeDelta=0),n.options.ticks.min=c(a,o[i]),n.options.ticks.max=s(a,o[u]))},l.zoomFunctions.time=function(n,t,e,l){d(n,t,e,l);var a=n.options;a.time&&(a.time.min&&(a.time.min=a.ticks.min),a.time.max&&(a.time.max=a.ticks.max))},l.zoomFunctions.linear=d,l.zoomFunctions.logarithmic=d,l.panFunctions.category=function(n,t,e){var a,o=n.chart.data.labels,i=o.length-1,r=Math.max(n.ticks.length,1),u=n.minIndex,d=Math.round(n.width/(r*e.speed));l.panCumulativeDelta+=t,u=l.panCumulativeDelta>d?Math.max(0,u-1):l.panCumulativeDelta<-d?Math.min(i-r+1,u+1):u,l.panCumulativeDelta=u!==n.minIndex?0:l.panCumulativeDelta,a=Math.min(i,u+r-1),n.options.ticks.min=c(e,o[u]),n.options.ticks.max=s(e,o[a])},l.panFunctions.time=function(n,t,e){p(n,t,e);var l=n.options;l.time&&(l.time.min&&(l.time.min=l.ticks.min),l.time.max&&(l.time.max=l.ticks.max))},l.panFunctions.linear=p,l.panFunctions.logarithmic=p,l.panCumulativeDelta=0,l.zoomCumulativeDelta=0;var h={id:"zoom",afterInit:function(n){n.resetZoom=function(){r(n);var t=n.$zoom._originalOptions;e.each(n.scales,function(n){var e=n.options.time,l=n.options.ticks;t[n.id]?(e&&(e.min=t[n.id].time.min,e.max=t[n.id].time.max),l&&(l.min=t[n.id].ticks.min,l.max=t[n.id].ticks.max)):(e&&(delete e.min,delete e.max),l&&(delete l.min,delete l.max))}),n.update()}},beforeUpdate:function(n,t){i(n,t)},beforeInit:function(n,a){n.$zoom={_originalOptions:{}};var o=n.$zoom._node=n.ctx.canvas;i(n,a);var s=n.$zoom._options,c=s.pan&&s.pan.threshold;n.$zoom._mouseDownHandler=function(t){o.addEventListener("mousemove",n.$zoom._mouseMoveHandler),n.$zoom._dragZoomStart=t},n.$zoom._mouseMoveHandler=function(t){n.$zoom._dragZoomStart&&(n.$zoom._dragZoomEnd=t,n.update(0))},n.$zoom._mouseUpHandler=function(t){if(n.$zoom._dragZoomStart){o.removeEventListener("mousemove",n.$zoom._mouseMoveHandler);var e=n.$zoom._dragZoomStart,l=e.target.getBoundingClientRect().left,a=Math.min(e.clientX,t.clientX)-l,i=Math.max(e.clientX,t.clientX)-l,r=e.target.getBoundingClientRect().top,s=Math.min(e.clientY,t.clientY)-r,c=i-a,d=Math.max(e.clientY,t.clientY)-r-s;if(n.$zoom._dragZoomStart=null,n.$zoom._dragZoomEnd=null,!(c<=0&&d<=0)){var m=n.chartArea,p=n.$zoom._options.zoom,f=m.right-m.left,h=u(p.mode,"x")&&c?1+(f-c)/f:1,g=m.bottom-m.top,v=u(p.mode,"y");b(n,h,v&&d?1+(g-d)/g:1,{x:(a-m.left)/(1-c/f)+m.left,y:(s-m.top)/(1-d/g)+m.top},void 0,p.drag.animationDuration),"function"==typeof p.onZoomComplete&&p.onZoomComplete({chart:n})}}};var d=null;if(n.$zoom._wheelHandler=function(t){var e=t.target.getBoundingClientRect(),l=n.$zoom._options.zoom,a=l.speed;t.deltaY>=0&&(a=-a),b(n,1+a,1+a,{x:t.clientX-e.left,y:t.clientY-e.top}),clearTimeout(d),d=setTimeout(function(){"function"==typeof l.onZoomComplete&&l.onZoomComplete({chart:n})},250),t.cancelable&&t.preventDefault()},t){var m,p=new t.Manager(o);p.add(new t.Pinch),p.add(new t.Pan({threshold:c}));var h=function(t){var e=1/m*t.scale,l=t.target.getBoundingClientRect(),a={x:t.center.x-l.left,y:t.center.y-l.top},o=Math.abs(t.pointers[0].clientX-t.pointers[1].clientX),i=Math.abs(t.pointers[0].clientY-t.pointers[1].clientY),r=o/i;b(n,e,e,a,r>.3&&r<1.7?"xy":o>i?"x":"y");var u=n.$zoom._options.zoom;"function"==typeof u.onZoomComplete&&u.onZoomComplete({chart:n}),m=t.scale};p.on("pinchstart",function(){m=1}),p.on("pinch",h),p.on("pinchend",function(n){h(n),m=null,l.zoomCumulativeDelta=0});var g=null,v=null,x=!1,y=function(t){if(null!==g&&null!==v){x=!0;var l=t.deltaX-g,a=t.deltaY-v;g=t.deltaX,v=t.deltaY,function(n,t,l){r(n);var a=n.$zoom._options.pan;if(a.enabled){var o="function"==typeof a.mode?a.mode({chart:n}):a.mode;e.each(n.scales,function(n){n.isHorizontal()&&u(o,"x")&&0!==t?(a.scaleAxes="x",f(n,t,a)):!n.isHorizontal()&&u(o,"y")&&0!==l&&(a.scaleAxes="y",f(n,l,a))}),n.update(0),"function"==typeof a.onPan&&a.onPan({chart:n})}}(n,l,a)}};p.on("panstart",function(n){g=0,v=0,y(n)}),p.on("panmove",y),p.on("panend",function(){g=null,v=null,l.panCumulativeDelta=0,setTimeout(function(){x=!1},500);var t=n.$zoom._options.pan;"function"==typeof t.onPanComplete&&t.onPanComplete({chart:n})}),n.$zoom._ghostClickHandler=function(n){x&&n.cancelable&&(n.stopImmediatePropagation(),n.preventDefault())},o.addEventListener("click",n.$zoom._ghostClickHandler),n._mc=p}},beforeDatasetsDraw:function(n){var t=n.ctx;if(n.$zoom._dragZoomEnd){var e=function(n){for(var t=n.scales,e=Object.keys(t),l=0;l<e.length;l++){var a=t[e[l]];if(a.isHorizontal())return a}}(n),l=function(n){for(var t=n.scales,e=Object.keys(t),l=0;l<e.length;l++){var a=t[e[l]];if(!a.isHorizontal())return a}}(n),a=n.$zoom._dragZoomStart,o=n.$zoom._dragZoomEnd,i=e.left,r=e.right,s=l.top,c=l.bottom;if(u(n.$zoom._options.zoom.mode,"x")){var d=a.target.getBoundingClientRect().left;i=Math.min(a.clientX,o.clientX)-d,r=Math.max(a.clientX,o.clientX)-d}if(u(n.$zoom._options.zoom.mode,"y")){var m=a.target.getBoundingClientRect().top;s=Math.min(a.clientY,o.clientY)-m,c=Math.max(a.clientY,o.clientY)-m}var b=r-i,p=c-s,f=n.$zoom._options.zoom.drag;t.save(),t.beginPath(),t.fillStyle=f.backgroundColor||"rgba(225,225,225,0.3)",t.fillRect(i,s,b,p),f.borderWidth>0&&(t.lineWidth=f.borderWidth,t.strokeStyle=f.borderColor||"rgba(225,225,225)",t.strokeRect(i,s,b,p)),t.restore()}},destroy:function(n){if(n.$zoom){var t=n.$zoom,e=t._node;e.removeEventListener("mousedown",t._mouseDownHandler),e.removeEventListener("mousemove",t._mouseMoveHandler),e.ownerDocument.removeEventListener("mouseup",t._mouseUpHandler),e.removeEventListener("wheel",t._wheelHandler),e.removeEventListener("click",t._ghostClickHandler),delete n.$zoom;var l=n._mc;l&&(l.remove("pinchstart"),l.remove("pinch"),l.remove("pinchend"),l.remove("panstart"),l.remove("pan"),l.remove("panend"),l.destroy())}}};return n.plugins.register(h),h}(e("MO+k"),e("yLV6"))},"9zIK":function(n,t,e){"use strict";var l=e("CcnG"),a=e("oBZk"),o=e("ZZ/e");e("gQxg"),e.d(t,"a",function(){return i}),e.d(t,"b",function(){return r});var i=l.qb({encapsulation:0,styles:[[".chartWrapper[_ngcontent-%COMP%]{position:relative}.chartWrapper[_ngcontent-%COMP%] > canvas[_ngcontent-%COMP%]{position:absolute;left:0;top:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.chartAreaWrapper[_ngcontent-%COMP%]{width:600px;overflow-x:scroll}.scrolling-wrapper[_ngcontent-%COMP%]{overflow-x:scroll;overflow-y:hidden;white-space:nowrap;pointer-events:auto}.scrolling-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:inline-block}.chart-top[_ngcontent-%COMP%]{position:relative;z-index:100}"]],data:{}});function r(n){return l.Lb(0,[l.Hb(402653184,1,{canvas:0}),(n()(),l.sb(1,0,null,null,10,"div",[],null,null,null,null,null)),(n()(),l.sb(2,0,null,null,9,"ion-card",[["class","welcome-card"]],null,null,null,a.P,a.e)),l.rb(3,49152,null,0,o.n,[l.h,l.k,l.B],null,null),(n()(),l.sb(4,0,null,0,4,"ion-card-header",[],null,null,null,a.M,a.g)),l.rb(5,49152,null,0,o.p,[l.h,l.k,l.B],null,null),(n()(),l.sb(6,0,null,0,2,"ion-card-title",[],null,null,null,a.O,a.i)),l.rb(7,49152,null,0,o.r,[l.h,l.k,l.B],null,null),(n()(),l.Jb(8,0,["",""])),(n()(),l.sb(9,0,null,0,2,"ion-card-content",[],null,null,null,a.L,a.f)),l.rb(10,49152,null,0,o.o,[l.h,l.k,l.B],null,null),(n()(),l.sb(11,0,[[1,0],["canvas",1]],0,0,"canvas",[],null,null,null,null,null))],null,function(n,t){n(t,8,0,t.component.data.device)})}},"Mr+X":function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o});var l=e("CcnG"),a=(e("SMsm"),e("Fzqc"),e("Wf4p"),e("ZYjt"),l.qb({encapsulation:2,styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],data:{}}));function o(n){return l.Lb(2,[l.Bb(null,0)],null,null)}},OFIl:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var l=e("mrSG"),a=(e("ZZ/e"),function(){function n(n,t){this.modalController=n,this.navParams=t,this.isSelectMachine=!1}return n.prototype.ngOnInit=function(){this.checkBoxList=this.navParams.data.checkBoxList,this.modalTitle=this.navParams.data.paramTitle,this.checkEvent()},n.prototype.cancelModal=function(){return l.b(this,void 0,void 0,function(){return l.e(this,function(n){switch(n.label){case 0:return[4,this.modalController.dismiss()];case 1:return n.sent(),[2]}})})},n.prototype.closeModal=function(){return l.b(this,void 0,void 0,function(){return l.e(this,function(n){switch(n.label){case 0:return[4,this.modalController.dismiss(this.checkBoxList)];case 1:return n.sent(),[2]}})})},n.prototype.checkMaster=function(){var n=this;setTimeout(function(){n.checkBoxList.forEach(function(t){t.isChecked=n.masterCheck})})},n.prototype.checkEvent=function(){var n=this.checkBoxList.length,t=0;this.checkBoxList.map(function(n){n.isChecked&&t++}),t>0&&t<n?(this.isIndeterminate=!0,this.masterCheck=!1):t==n?(this.masterCheck=!0,this.isIndeterminate=!1):(this.isIndeterminate=!1,this.masterCheck=!1)},n}())},PCNd:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){return function(){}}()},Rlre:function(n,t,e){"use strict";e.d(t,"b",function(){return p}),e.d(t,"c",function(){return y}),e.d(t,"a",function(){return M}),e.d(t,"d",function(){return B});var l=e("CcnG"),a=e("La40"),o=e("Ip0R"),i=e("M2Lx"),r=e("Fzqc"),u=e("Wf4p"),s=(e("ZYjt"),e("4c35")),c=e("dWZg"),d=e("lLAP"),m=e("wFw1"),b=e("qAlS"),p=l.qb({encapsulation:2,styles:[".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:0}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-label{opacity:1}}@media (max-width:599px){.mat-tab-label{padding:0 12px}}@media (max-width:959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height .5s cubic-bezier(.35,0,.25,1)}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}"],data:{}});function f(n){return l.Lb(0,[(n()(),l.jb(0,null,null,0))],null,null)}function h(n){return l.Lb(0,[(n()(),l.jb(16777216,null,null,1,null,f)),l.rb(1,212992,null,0,s.c,[l.j,l.R],{portal:[0,"portal"]},null),(n()(),l.jb(0,null,null,0))],function(n,t){n(t,1,0,t.parent.context.$implicit.templateLabel)},null)}function g(n){return l.Lb(0,[(n()(),l.Jb(0,null,["",""]))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.textLabel)})}function v(n){return l.Lb(0,[(n()(),l.sb(0,0,null,null,8,"div",[["cdkMonitorElementFocus",""],["class","mat-tab-label mat-ripple"],["mat-ripple",""],["matTabLabelWrapper",""],["role","tab"]],[[8,"id",0],[1,"tabIndex",0],[1,"aria-posinset",0],[1,"aria-setsize",0],[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-label",0],[1,"aria-labelledby",0],[2,"mat-tab-label-active",null],[2,"mat-ripple-unbounded",null],[2,"mat-tab-disabled",null],[1,"aria-disabled",0]],[[null,"click"]],function(n,t,e){var a=!0;return"click"===t&&(a=!1!==n.component._handleClick(n.context.$implicit,l.Cb(n.parent,3),n.context.index)&&a),a},null,null)),l.rb(1,212992,null,0,u.r,[l.k,l.B,c.a,[2,u.k],[2,m.a]],{disabled:[0,"disabled"]},null),l.rb(2,147456,null,0,d.d,[l.k,d.g],null,null),l.rb(3,16384,[[3,4]],0,a.i,[l.k],{disabled:[0,"disabled"]},null),(n()(),l.sb(4,0,null,null,4,"div",[["class","mat-tab-label-content"]],null,null,null,null,null)),(n()(),l.jb(16777216,null,null,1,null,h)),l.rb(6,16384,null,0,o.k,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(n()(),l.jb(16777216,null,null,1,null,g)),l.rb(8,16384,null,0,o.k,[l.R,l.O],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,1,0,t.context.$implicit.disabled||t.component.disableRipple),n(t,3,0,t.context.$implicit.disabled),n(t,6,0,t.context.$implicit.templateLabel),n(t,8,0,!t.context.$implicit.templateLabel)},function(n,t){var e=t.component;n(t,0,1,[e._getTabLabelId(t.context.index),e._getTabIndex(t.context.$implicit,t.context.index),t.context.index+1,e._tabs.length,e._getTabContentId(t.context.index),e.selectedIndex==t.context.index,t.context.$implicit.ariaLabel||null,!t.context.$implicit.ariaLabel&&t.context.$implicit.ariaLabelledby?t.context.$implicit.ariaLabelledby:null,e.selectedIndex==t.context.index,l.Cb(t,1).unbounded,l.Cb(t,3).disabled,!!l.Cb(t,3).disabled])})}function x(n){return l.Lb(0,[(n()(),l.sb(0,0,null,null,1,"mat-tab-body",[["class","mat-tab-body"],["role","tabpanel"]],[[8,"id",0],[1,"aria-labelledby",0],[2,"mat-tab-body-active",null]],[[null,"_onCentered"],[null,"_onCentering"]],function(n,t,e){var l=!0,a=n.component;return"_onCentered"===t&&(l=!1!==a._removeTabBodyWrapperHeight()&&l),"_onCentering"===t&&(l=!1!==a._setTabBodyWrapperHeight(e)&&l),l},_,C)),l.rb(1,245760,null,0,a.d,[l.k,[2,r.b],l.h],{_content:[0,"_content"],origin:[1,"origin"],animationDuration:[2,"animationDuration"],position:[3,"position"]},{_onCentering:"_onCentering",_onCentered:"_onCentered"})],function(n,t){n(t,1,0,t.context.$implicit.content,t.context.$implicit.origin,t.component.animationDuration,t.context.$implicit.position)},function(n,t){var e=t.component;n(t,0,0,e._getTabContentId(t.context.index),e._getTabLabelId(t.context.index),e.selectedIndex==t.context.index)})}function y(n){return l.Lb(2,[l.Hb(402653184,1,{_tabBodyWrapper:0}),l.Hb(402653184,2,{_tabHeader:0}),(n()(),l.sb(2,0,null,null,4,"mat-tab-header",[["class","mat-tab-header"]],[[2,"mat-tab-header-pagination-controls-enabled",null],[2,"mat-tab-header-rtl",null]],[[null,"indexFocused"],[null,"selectFocusedIndex"]],function(n,t,e){var l=!0,a=n.component;return"indexFocused"===t&&(l=!1!==a._focusChanged(e)&&l),"selectFocusedIndex"===t&&(l=!1!==(a.selectedIndex=e)&&l),l},z,w)),l.rb(3,7520256,[[2,4],["tabHeader",4]],1,a.g,[l.k,l.h,b.e,[2,r.b],l.B,c.a],{disableRipple:[0,"disableRipple"],selectedIndex:[1,"selectedIndex"]},{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}),l.Hb(603979776,3,{_labelWrappers:1}),(n()(),l.jb(16777216,null,0,1,null,v)),l.rb(6,278528,null,0,o.j,[l.R,l.O,l.u],{ngForOf:[0,"ngForOf"]},null),(n()(),l.sb(7,0,[[1,0],["tabBodyWrapper",1]],null,2,"div",[["class","mat-tab-body-wrapper"]],null,null,null,null,null)),(n()(),l.jb(16777216,null,null,1,null,x)),l.rb(9,278528,null,0,o.j,[l.R,l.O,l.u],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var e=t.component;n(t,3,0,e.disableRipple,e.selectedIndex),n(t,6,0,e._tabs),n(t,9,0,e._tabs)},function(n,t){n(t,2,0,l.Cb(t,3)._showPaginationControls,"rtl"==l.Cb(t,3)._getLayoutDirection())})}var C=l.qb({encapsulation:2,styles:[".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}"],data:{animation:[{type:7,name:"translateTab",definitions:[{type:0,name:"center, void, left-origin-center, right-origin-center",styles:{type:6,styles:{transform:"none"},offset:null},options:void 0},{type:0,name:"left",styles:{type:6,styles:{transform:"translate3d(-100%, 0, 0)",minHeight:"1px"},offset:null},options:void 0},{type:0,name:"right",styles:{type:6,styles:{transform:"translate3d(100%, 0, 0)",minHeight:"1px"},offset:null},options:void 0},{type:1,expr:"* => left, * => right, left => center, right => center",animation:{type:4,styles:null,timings:"{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"},options:null},{type:1,expr:"void => left-origin-center",animation:[{type:6,styles:{transform:"translate3d(-100%, 0, 0)"},offset:null},{type:4,styles:null,timings:"{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"}],options:null},{type:1,expr:"void => right-origin-center",animation:[{type:6,styles:{transform:"translate3d(100%, 0, 0)"},offset:null},{type:4,styles:null,timings:"{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"}],options:null}],options:{}}]}});function k(n){return l.Lb(0,[(n()(),l.jb(0,null,null,0))],null,null)}function _(n){return l.Lb(2,[l.Hb(402653184,1,{_portalHost:0}),(n()(),l.sb(1,0,[["content",1]],null,4,"div",[["class","mat-tab-body-content"]],[[24,"@translateTab",0]],[[null,"@translateTab.start"],[null,"@translateTab.done"]],function(n,t,e){var l=!0,a=n.component;return"@translateTab.start"===t&&(l=!1!==a._onTranslateTabStarted(e)&&l),"@translateTab.done"===t&&(l=!1!==a._translateTabComplete.next(e)&&l),l},null,null)),l.Fb(2,{animationDuration:0}),l.Fb(3,{value:0,params:1}),(n()(),l.jb(16777216,null,null,1,null,k)),l.rb(5,212992,null,0,a.e,[l.j,l.R,a.d],null,null)],function(n,t){n(t,5,0)},function(n,t){var e=t.component,l=n(t,3,0,e._position,n(t,2,0,e.animationDuration));n(t,1,0,l)})}var w=l.qb({encapsulation:2,styles:[".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:0}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-label{opacity:1}}@media (max-width:599px){.mat-tab-label{min-width:72px}}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media (-ms-high-contrast:active){.mat-ink-bar{outline:solid 2px;height:0}}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-pagination-after,.mat-tab-header-rtl .mat-tab-header-pagination-before{padding-right:4px}.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-list{flex-grow:1;position:relative;transition:transform .5s cubic-bezier(.35,0,.25,1)}.mat-tab-labels{display:flex}[mat-align-tabs=center] .mat-tab-labels{justify-content:center}[mat-align-tabs=end] .mat-tab-labels{justify-content:flex-end}"],data:{}});function z(n){return l.Lb(2,[l.Hb(402653184,1,{_inkBar:0}),l.Hb(402653184,2,{_tabListContainer:0}),l.Hb(402653184,3,{_tabList:0}),l.Hb(402653184,4,{_nextPaginator:0}),l.Hb(402653184,5,{_previousPaginator:0}),(n()(),l.sb(5,0,[[5,0],["previousPaginator",1]],null,2,"div",[["aria-hidden","true"],["class","mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4 mat-ripple"],["mat-ripple",""]],[[2,"mat-tab-header-pagination-disabled",null],[2,"mat-ripple-unbounded",null]],[[null,"click"],[null,"mousedown"],[null,"touchend"]],function(n,t,e){var l=!0,a=n.component;return"click"===t&&(l=!1!==a._handlePaginatorClick("before")&&l),"mousedown"===t&&(l=!1!==a._handlePaginatorPress("before")&&l),"touchend"===t&&(l=!1!==a._stopInterval()&&l),l},null,null)),l.rb(6,212992,null,0,u.r,[l.k,l.B,c.a,[2,u.k],[2,m.a]],{disabled:[0,"disabled"]},null),(n()(),l.sb(7,0,null,null,0,"div",[["class","mat-tab-header-pagination-chevron"]],null,null,null,null,null)),(n()(),l.sb(8,0,[[2,0],["tabListContainer",1]],null,6,"div",[["class","mat-tab-label-container"]],null,[[null,"keydown"]],function(n,t,e){var l=!0;return"keydown"===t&&(l=!1!==n.component._handleKeydown(e)&&l),l},null,null)),(n()(),l.sb(9,0,[[3,0],["tabList",1]],null,5,"div",[["class","mat-tab-list"],["role","tablist"]],null,[[null,"cdkObserveContent"]],function(n,t,e){var l=!0;return"cdkObserveContent"===t&&(l=!1!==n.component._onContentChanges()&&l),l},null,null)),l.rb(10,1196032,null,0,i.a,[i.b,l.k,l.B],null,{event:"cdkObserveContent"}),(n()(),l.sb(11,0,null,null,1,"div",[["class","mat-tab-labels"]],null,null,null,null,null)),l.Bb(null,0),(n()(),l.sb(13,0,null,null,1,"mat-ink-bar",[["class","mat-ink-bar"]],null,null,null,null,null)),l.rb(14,16384,[[1,4]],0,a.b,[l.k,l.B,a.l],null,null),(n()(),l.sb(15,0,[[4,0],["nextPaginator",1]],null,2,"div",[["aria-hidden","true"],["class","mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4 mat-ripple"],["mat-ripple",""]],[[2,"mat-tab-header-pagination-disabled",null],[2,"mat-ripple-unbounded",null]],[[null,"mousedown"],[null,"click"],[null,"touchend"]],function(n,t,e){var l=!0,a=n.component;return"mousedown"===t&&(l=!1!==a._handlePaginatorPress("after")&&l),"click"===t&&(l=!1!==a._handlePaginatorClick("after")&&l),"touchend"===t&&(l=!1!==a._stopInterval()&&l),l},null,null)),l.rb(16,212992,null,0,u.r,[l.k,l.B,c.a,[2,u.k],[2,m.a]],{disabled:[0,"disabled"]},null),(n()(),l.sb(17,0,null,null,0,"div",[["class","mat-tab-header-pagination-chevron"]],null,null,null,null,null))],function(n,t){var e=t.component;n(t,6,0,e._disableScrollBefore||e.disableRipple),n(t,16,0,e._disableScrollAfter||e.disableRipple)},function(n,t){var e=t.component;n(t,5,0,e._disableScrollBefore,l.Cb(t,6).unbounded),n(t,15,0,e._disableScrollAfter,l.Cb(t,16).unbounded)})}var M=l.qb({encapsulation:2,styles:[],data:{}});function L(n){return l.Lb(0,[l.Bb(null,0),(n()(),l.jb(0,null,null,0))],null,null)}function B(n){return l.Lb(2,[l.Hb(402653184,1,{_implicitContent:0}),(n()(),l.jb(0,[[1,2]],null,0,null,L))],null,null)}},gMwT:function(n,t,e){"use strict";var l=e("CcnG"),a=e("oBZk"),o=e("ZZ/e"),i=e("gIcY"),r=e("Ip0R"),u=e("OFIl");e.d(t,"a",function(){return b});var s=l.qb({encapsulation:0,styles:[[""]],data:{}});function c(n){return l.Lb(0,[(n()(),l.sb(0,0,null,null,11,"ion-item",[],null,null,null,a.ab,a.t)),l.rb(1,49152,null,0,o.I,[l.h,l.k,l.B],null,null),(n()(),l.sb(2,0,null,0,2,"ion-label",[],null,null,null,a.bb,a.u)),l.rb(3,49152,null,0,o.O,[l.h,l.k,l.B],null,null),(n()(),l.Jb(4,0,["",""])),(n()(),l.sb(5,0,null,0,6,"ion-checkbox",[["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,t,e){var a=!0,o=n.component;return"ionBlur"===t&&(a=!1!==l.Cb(n,7)._handleBlurEvent(e.target)&&a),"ionChange"===t&&(a=!1!==l.Cb(n,7)._handleIonChange(e.target)&&a),"ngModelChange"===t&&(a=!1!==(n.context.$implicit.isChecked=e)&&a),"ionChange"===t&&(a=!1!==o.checkEvent()&&a),a},a.Q,a.j)),l.rb(6,49152,null,0,o.s,[l.h,l.k,l.B],null,null),l.rb(7,16384,null,0,o.c,[l.k],null,null),l.Gb(1024,null,i.e,function(n){return[n]},[o.c]),l.rb(9,671744,null,0,i.j,[[8,null],[8,null],[8,null],[6,i.e]],{model:[0,"model"]},{update:"ngModelChange"}),l.Gb(2048,null,i.f,null,[i.j]),l.rb(11,16384,null,0,i.g,[[4,i.f]],null,null)],function(n,t){n(t,9,0,t.context.$implicit.isChecked)},function(n,t){n(t,4,0,t.context.$implicit.machine.name),n(t,5,0,l.Cb(t,11).ngClassUntouched,l.Cb(t,11).ngClassTouched,l.Cb(t,11).ngClassPristine,l.Cb(t,11).ngClassDirty,l.Cb(t,11).ngClassValid,l.Cb(t,11).ngClassInvalid,l.Cb(t,11).ngClassPending)})}function d(n){return l.Lb(0,[(n()(),l.sb(0,0,null,null,6,"ion-header",[],null,null,null,a.X,a.q)),l.rb(1,49152,null,0,o.C,[l.h,l.k,l.B],null,null),(n()(),l.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.nb,a.G)),l.rb(3,49152,null,0,o.Db,[l.h,l.k,l.B],null,null),(n()(),l.sb(4,0,null,0,2,"ion-title",[],null,null,null,a.lb,a.E)),l.rb(5,49152,null,0,o.Bb,[l.h,l.k,l.B],null,null),(n()(),l.Jb(6,0,["",""])),(n()(),l.sb(7,0,null,null,20,"ion-content",[],null,null,null,a.S,a.l)),l.rb(8,49152,null,0,o.v,[l.h,l.k,l.B],null,null),(n()(),l.sb(9,0,null,0,14,"ion-list",[],null,null,null,a.db,a.v)),l.rb(10,49152,null,0,o.P,[l.h,l.k,l.B],null,null),(n()(),l.sb(11,0,null,0,12,"ion-item",[],null,null,null,a.ab,a.t)),l.rb(12,49152,null,0,o.I,[l.h,l.k,l.B],null,null),(n()(),l.sb(13,0,null,0,3,"ion-label",[],null,null,null,a.bb,a.u)),l.rb(14,49152,null,0,o.O,[l.h,l.k,l.B],null,null),(n()(),l.sb(15,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),l.Jb(-1,null,["Select All"])),(n()(),l.sb(17,0,null,0,6,"ion-checkbox",[["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"ionBlur"],[null,"ionChange"]],function(n,t,e){var a=!0,o=n.component;return"ionBlur"===t&&(a=!1!==l.Cb(n,19)._handleBlurEvent(e.target)&&a),"ionChange"===t&&(a=!1!==l.Cb(n,19)._handleIonChange(e.target)&&a),"ngModelChange"===t&&(a=!1!==(o.masterCheck=e)&&a),"click"===t&&(a=!1!==o.checkMaster()&&a),a},a.Q,a.j)),l.rb(18,49152,null,0,o.s,[l.h,l.k,l.B],{indeterminate:[0,"indeterminate"]},null),l.rb(19,16384,null,0,o.c,[l.k],null,null),l.Gb(1024,null,i.e,function(n){return[n]},[o.c]),l.rb(21,671744,null,0,i.j,[[8,null],[8,null],[8,null],[6,i.e]],{model:[0,"model"]},{update:"ngModelChange"}),l.Gb(2048,null,i.f,null,[i.j]),l.rb(23,16384,null,0,i.g,[[4,i.f]],null,null),(n()(),l.sb(24,0,null,0,3,"ion-list",[],null,null,null,a.db,a.v)),l.rb(25,49152,null,0,o.P,[l.h,l.k,l.B],null,null),(n()(),l.jb(16777216,null,0,1,null,c)),l.rb(27,278528,null,0,r.j,[l.R,l.O,l.u],{ngForOf:[0,"ngForOf"]},null),(n()(),l.sb(28,0,null,null,13,"ion-footer",[],null,null,null,a.V,a.o)),l.rb(29,49152,null,0,o.A,[l.h,l.k,l.B],null,null),(n()(),l.sb(30,0,null,0,11,"ion-toolbar",[["position","bottom"]],null,null,null,a.nb,a.G)),l.rb(31,49152,null,0,o.Db,[l.h,l.k,l.B],null,null),(n()(),l.sb(32,0,null,0,9,"ion-row",[],null,null,null,a.hb,a.A)),l.rb(33,49152,null,0,o.kb,[l.h,l.k,l.B],null,null),(n()(),l.sb(34,0,null,0,7,"ion-col",[["class","ion-text-center"]],null,null,null,a.R,a.k)),l.rb(35,49152,null,0,o.u,[l.h,l.k,l.B],null,null),(n()(),l.sb(36,0,null,0,2,"ion-button",[["color","danger"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.cancelModal()&&l),l},a.J,a.c)),l.rb(37,49152,null,0,o.l,[l.h,l.k,l.B],{color:[0,"color"]},null),(n()(),l.Jb(-1,0,["Cancel"])),(n()(),l.sb(39,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.closeModal()&&l),l},a.J,a.c)),l.rb(40,49152,null,0,o.l,[l.h,l.k,l.B],null,null),(n()(),l.Jb(-1,0,["Select"]))],function(n,t){var e=t.component;n(t,18,0,e.isIndeterminate),n(t,21,0,e.masterCheck),n(t,27,0,e.checkBoxList),n(t,37,0,"danger")},function(n,t){n(t,6,0,t.component.modalTitle),n(t,17,0,l.Cb(t,23).ngClassUntouched,l.Cb(t,23).ngClassTouched,l.Cb(t,23).ngClassPristine,l.Cb(t,23).ngClassDirty,l.Cb(t,23).ngClassValid,l.Cb(t,23).ngClassInvalid,l.Cb(t,23).ngClassPending)})}function m(n){return l.Lb(0,[(n()(),l.sb(0,0,null,null,1,"app-select-machine",[],null,null,null,d,s)),l.rb(1,114688,null,0,u.a,[o.Jb,o.Lb],null,null)],function(n,t){n(t,1,0)},null)}var b=l.ob("app-select-machine",u.a,m,{},{},[])},gQxg:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var l=e("MO+k"),a=(e("9jQl"),function(){function n(){}return n.prototype.ngOnInit=function(){this.createBarChart(this.data)},n.prototype.createBarChart=function(n){l.Chart.Tooltip.positioners.custom=function(n,t){return{x:t.x,y:n[0]._view.base-(n[0].height()+n[1].height())}};var t={scales:{xAxes:[{barPercentage:.9,gridLines:{offsetGridLines:!0},stacked:!0}],yAxes:[{ticks:{beginAtZero:!0},stacked:!0}]},plugins:{zoom:{pan:{enabled:!0,mode:"xy",rangeMin:{x:null,y:null},rangeMax:{x:null,y:null},onPan:function(n){console.log("I'm panning!!!")},onPanComplete:function(n){console.log("I was panned!!!")}},zoom:{enabled:!0,drag:!0,mode:"xy",rangeMin:{x:null,y:null},rangeMax:{x:null,y:null},speed:.1,onZoom:function(n){console.log("I'm zooming!!!")},onZoomComplete:function(n){console.log("I was zoomed!!!")}}}}},e={scales:{xAxes:[{barPercentage:.9,gridLines:{offsetGridLines:!0},stacked:!0}],yAxes:[{ticks:{beginAtZero:!0},stacked:!0}]},tooltips:{caretY:0,yAlign:"bottom",mode:"label",position:"nearest",callbacks:{afterTitle:function(){window.total=0},label:function(n,t){var e=t.datasets[n.datasetIndex].label,l=t.datasets[n.datasetIndex].data[n.index];return window.total+=l,e+": "+l.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},footer:function(){return"TOTAL: "+window.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}},plugins:{zoom:{pan:{enabled:!0,mode:"xy",rangeMin:{x:null,y:null},rangeMax:{x:null,y:null},onPan:function(n){console.log("I'm panning!!!")},onPanComplete:function(n){console.log("I was panned!!!")}},zoom:{enabled:!0,drag:!0,mode:"xy",rangeMin:{x:null,y:null},rangeMax:{x:null,y:null},speed:.1,onZoom:function(n){console.log("I'm zooming!!!")},onZoomComplete:function(n){console.log("I was zoomed!!!")}}}}},a=String(this.title),o=this.canvas.nativeElement;o.height=400,this.chart=new l.Chart(o,{type:"bar",data:{labels:JSON.parse(n.data).labels,datasets:JSON.parse(n.data).datasets},options:a.includes("impression")||a.includes("wip")||a.includes("output")?e:t})},n.prototype.myFunction=function(){console.log("Hello world!")},n.prototype.yHandler=function(){console.log("123 123 123")},n}())}}]);