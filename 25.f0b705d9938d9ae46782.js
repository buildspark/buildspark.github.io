(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+8Qz":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("mrSG"),i=t("Do2H"),s=t("oztG"),o=t("ZZ/e"),c=t("/Ru3"),r=t("wd/R"),a=t("2mCB"),h=function(n){function l(l,t,e,u,i){var s=n.call(this,l,t)||this;return s.loadingCtrl=l,s.alertCtrl=t,s.navCtrl=e,s.service=u,s.route=i,s.checkBoxList=[],s.arrProcess=[],s.processReqModel=new c.i,s.wipReqModel=new c.m(1),s.currentDate=r().format("YYYY-MM-DD"),s}return u.d(l,n),l.prototype.ngOnInit=function(){var n=this;this.route.snapshot.data.special&&(this.processReqModel=this.route.snapshot.data.special,this.wipReqModel.accesstoken=this.processReqModel.accesstoken,this.wipReqModel.date=this.standardDateTime(this.currentDate),this.wipReqModel.dept=this.processReqModel.dept,this.service.presentLoading(),this.service.callWebService(s.a.k_GET_PROCESS,this.processReqModel,(function(l){n.arrProcess=JSON.parse(l.data),n.arrProcess.forEach((function(l){n.checkBoxList.push({process:l,isChecked:!1})})),n.service.dismissLoading()})))},l.prototype.checkMaster=function(){var n=this;setTimeout((function(){n.checkBoxList.forEach((function(l){l.isChecked=n.masterCheck}))}))},l.prototype.checkEvent=function(){var n=this.checkBoxList.length,l=0;this.checkBoxList.map((function(n){n.isChecked&&l++})),l>0&&l<n?(this.isIndeterminate=!0,this.masterCheck=!1):l==n?(this.masterCheck=!0,this.isIndeterminate=!1):(this.isIndeterminate=!1,this.masterCheck=!1)},l.prototype.standardDateTime=function(n){return r(n).format("YYYY-MM-DD")},l.prototype.onNextClicked=function(){return u.b(this,void 0,void 0,(function(){var n,l=this;return u.e(this,(function(t){return console.log("CHOSEN: ",this.checkBoxList),n=!1,this.wipReqModel.process=[],this.checkBoxList.forEach((function(t){t.isChecked&&(n=!0,l.wipReqModel.process.push(t.process.value))})),n?(this.service.setData("sel-proc",this.wipReqModel),this.navCtrl.navigateForward("/wip/sel-proc")):a.a.presentAlert("Alert","Please select at least one (1) process."),[2]}))}))},l}(a.a),b=function(){return function(){}}(),d=t("pMnS"),p=t("oBZk"),f=t("gIcY"),k=t("Ip0R"),g=t("ZYCi"),C=e.qb({encapsulation:0,styles:[[""]],data:{}});function m(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,11,"ion-item",[],null,null,null,p.Z,p.t)),e.rb(1,49152,null,0,o.H,[e.h,e.k,e.B],null,null),(n()(),e.sb(2,0,null,0,2,"ion-label",[],null,null,null,p.ab,p.u)),e.rb(3,49152,null,0,o.N,[e.h,e.k,e.B],null,null),(n()(),e.Kb(4,0,["",""])),(n()(),e.sb(5,0,null,0,6,"ion-checkbox",[["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var u=!0,i=n.component;return"ionBlur"===l&&(u=!1!==e.Cb(n,6)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Cb(n,6)._handleIonChange(t.target)&&u),"ngModelChange"===l&&(u=!1!==(n.context.$implicit.isChecked=t)&&u),"ionChange"===l&&(u=!1!==i.checkEvent()&&u),u}),p.P,p.j)),e.rb(6,16384,null,0,o.c,[e.k],null,null),e.Hb(1024,null,f.f,(function(n){return[n]}),[o.c]),e.rb(8,671744,null,0,f.k,[[8,null],[8,null],[8,null],[6,f.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,f.g,null,[f.k]),e.rb(10,16384,null,0,f.h,[[4,f.g]],null,null),e.rb(11,49152,null,0,o.r,[e.h,e.k,e.B],null,null)],(function(n,l){n(l,8,0,l.context.$implicit.isChecked)}),(function(n,l){n(l,4,0,l.context.$implicit.process.name),n(l,5,0,e.Cb(l,10).ngClassUntouched,e.Cb(l,10).ngClassTouched,e.Cb(l,10).ngClassPristine,e.Cb(l,10).ngClassDirty,e.Cb(l,10).ngClassValid,e.Cb(l,10).ngClassInvalid,e.Cb(l,10).ngClassPending)}))}function v(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,11,"ion-header",[],null,null,null,p.W,p.q)),e.rb(1,49152,null,0,o.B,[e.h,e.k,e.B],null,null),(n()(),e.sb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,p.lb,p.F)),e.rb(3,49152,null,0,o.Cb,[e.h,e.k,e.B],{color:[0,"color"]},null),(n()(),e.sb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,p.J,p.d)),e.rb(5,49152,null,0,o.l,[e.h,e.k,e.B],null,null),(n()(),e.sb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Cb(n,8).onClick(t)&&u),u}),p.H,p.b)),e.rb(7,49152,null,0,o.g,[e.h,e.k,e.B],null,null),e.rb(8,16384,null,0,o.h,[[2,o.ib],o.Jb],null,null),(n()(),e.sb(9,0,null,0,2,"ion-title",[],null,null,null,p.jb,p.D)),e.rb(10,49152,null,0,o.Ab,[e.h,e.k,e.B],null,null),(n()(),e.Kb(-1,0,[" Process "])),(n()(),e.sb(12,0,null,null,20,"ion-content",[],null,null,null,p.R,p.l)),e.rb(13,49152,null,0,o.u,[e.h,e.k,e.B],null,null),(n()(),e.sb(14,0,null,0,14,"ion-list",[],null,null,null,p.cb,p.v)),e.rb(15,49152,null,0,o.O,[e.h,e.k,e.B],null,null),(n()(),e.sb(16,0,null,0,12,"ion-item",[],null,null,null,p.Z,p.t)),e.rb(17,49152,null,0,o.H,[e.h,e.k,e.B],null,null),(n()(),e.sb(18,0,null,0,3,"ion-label",[],null,null,null,p.ab,p.u)),e.rb(19,49152,null,0,o.N,[e.h,e.k,e.B],null,null),(n()(),e.sb(20,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Select All Process"])),(n()(),e.sb(22,0,null,0,6,"ion-checkbox",[["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0,i=n.component;return"ionBlur"===l&&(u=!1!==e.Cb(n,23)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Cb(n,23)._handleIonChange(t.target)&&u),"ngModelChange"===l&&(u=!1!==(i.masterCheck=t)&&u),"click"===l&&(u=!1!==i.checkMaster()&&u),u}),p.P,p.j)),e.rb(23,16384,null,0,o.c,[e.k],null,null),e.Hb(1024,null,f.f,(function(n){return[n]}),[o.c]),e.rb(25,671744,null,0,f.k,[[8,null],[8,null],[8,null],[6,f.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,f.g,null,[f.k]),e.rb(27,16384,null,0,f.h,[[4,f.g]],null,null),e.rb(28,49152,null,0,o.r,[e.h,e.k,e.B],{indeterminate:[0,"indeterminate"]},null),(n()(),e.sb(29,0,null,0,3,"ion-list",[],null,null,null,p.cb,p.v)),e.rb(30,49152,null,0,o.O,[e.h,e.k,e.B],null,null),(n()(),e.jb(16777216,null,0,1,null,m)),e.rb(32,278528,null,0,k.k,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null),(n()(),e.sb(33,0,null,null,10,"ion-footer",[],null,null,null,p.U,p.o)),e.rb(34,49152,null,0,o.z,[e.h,e.k,e.B],null,null),(n()(),e.sb(35,0,null,0,8,"ion-toolbar",[["position","bottom"]],null,null,null,p.lb,p.F)),e.rb(36,49152,null,0,o.Cb,[e.h,e.k,e.B],null,null),(n()(),e.sb(37,0,null,0,6,"ion-row",[],null,null,null,p.hb,p.B)),e.rb(38,49152,null,0,o.jb,[e.h,e.k,e.B],null,null),(n()(),e.sb(39,0,null,0,4,"ion-col",[["class","ion-text-center"]],null,null,null,p.Q,p.k)),e.rb(40,49152,null,0,o.t,[e.h,e.k,e.B],null,null),(n()(),e.sb(41,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onNextClicked()&&e),e}),p.I,p.c)),e.rb(42,49152,null,0,o.k,[e.h,e.k,e.B],null,null),(n()(),e.Kb(-1,0,["Next"]))],(function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,25,0,t.masterCheck),n(l,28,0,t.isIndeterminate),n(l,32,0,t.checkBoxList)}),(function(n,l){n(l,22,0,e.Cb(l,27).ngClassUntouched,e.Cb(l,27).ngClassTouched,e.Cb(l,27).ngClassPristine,e.Cb(l,27).ngClassDirty,e.Cb(l,27).ngClassValid,e.Cb(l,27).ngClassInvalid,e.Cb(l,27).ngClassPending)}))}function B(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,1,"app-wip-process-selection",[],null,null,null,v,C)),e.rb(1,114688,null,0,h,[o.Gb,o.a,o.Jb,i.a,g.a],null,null)],(function(n,l){n(l,1,0)}),null)}var M=e.ob("app-wip-process-selection",h,B,{},{},[]);t.d(l,"WipProcessSelectionPageModuleNgFactory",(function(){return w}));var w=e.pb(b,[],(function(n){return e.zb([e.Ab(512,e.j,e.eb,[[8,[d.a,M]],[3,e.j],e.z]),e.Ab(4608,k.n,k.m,[e.w,[2,k.w]]),e.Ab(4608,f.p,f.p,[]),e.Ab(4608,o.b,o.b,[e.B,e.g]),e.Ab(4608,o.Ib,o.Ib,[o.b,e.j,e.s]),e.Ab(4608,o.Nb,o.Nb,[o.b,e.j,e.s]),e.Ab(1073742336,k.c,k.c,[]),e.Ab(1073742336,f.n,f.n,[]),e.Ab(1073742336,f.c,f.c,[]),e.Ab(1073742336,o.Eb,o.Eb,[]),e.Ab(1073742336,g.p,g.p,[[2,g.v],[2,g.n]]),e.Ab(1073742336,b,b,[]),e.Ab(1024,g.l,(function(){return[[{path:"",component:h}]]}),[])])}))},"/Ru3":function(n,l,t){"use strict";t.d(l,"f",(function(){return e})),t.d(l,"a",(function(){return u})),t.d(l,"l",(function(){return i})),t.d(l,"i",(function(){return s})),t.d(l,"m",(function(){return o})),t.d(l,"b",(function(){return c})),t.d(l,"c",(function(){return r})),t.d(l,"g",(function(){return a})),t.d(l,"k",(function(){return h})),t.d(l,"e",(function(){return b})),t.d(l,"d",(function(){return d})),t.d(l,"j",(function(){return p})),t.d(l,"h",(function(){return f}));var e=function(){return function(n,l){this.username=n,this.password=l}}(),u=function(){return function(n){this.accesstoken=n}}(),i=function(){return function(n,l,t,e){this.accesstoken=n,this.device=l,this.datefrom=t,this.dateto=e}}(),s=function(){return function(n,l){void 0===n&&(n=""),void 0===l&&(l=[]),this.accesstoken=n,this.dept=l}}(),o=function(){return function(n,l,t,e,u,i){this.type=n,this.accesstoken=l,this.date=t,this.dept=e,this.process=u,this.packaging=i}}(),c=function(){return function(n,l,t,e,u,i){this.accesstoken=n,this.date=l,this.dept=t,this.process=e,this.accumulated=u,this.packaging=i}}(),r=function(){return function(n,l,t,e,u,i,s){this.type=n,this.accesstoken=l,this.date=t,this.dept=e,this.process=u,this.accumulated=i,this.packaging=s}}(),a=function(){return function(n,l){void 0===n&&(n=""),this.accesstoken=n,this.process=l}}(),h=function(){return function(n,l){void 0===n&&(n=""),this.accesstoken=n,this.machineid=l}}(),b=function(){return function(n,l){void 0===n&&(n=""),this.accesstoken=n,this.transfileID=l}}(),d=function(){return function(n,l,t,e,u){void 0===n&&(n=""),this.accesstoken=n,this.machinedownid=l,this.machineid=t,this.remark=e,this.problemid=u}}(),p=function(){return function(n,l,t){void 0===n&&(n=""),this.accesstoken=n,this.processcode=l,this.machineid=t}}(),f=function(){return function(n,l){void 0===n&&(n=""),this.accesstoken=n,this.processcode=l}}()}}]);