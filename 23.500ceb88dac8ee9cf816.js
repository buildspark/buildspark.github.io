(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/Ru3":function(n,l,t){"use strict";t.d(l,"f",(function(){return u})),t.d(l,"a",(function(){return e})),t.d(l,"l",(function(){return i})),t.d(l,"i",(function(){return o})),t.d(l,"m",(function(){return s})),t.d(l,"b",(function(){return r})),t.d(l,"c",(function(){return c})),t.d(l,"g",(function(){return a})),t.d(l,"k",(function(){return h})),t.d(l,"e",(function(){return b})),t.d(l,"d",(function(){return d})),t.d(l,"j",(function(){return p})),t.d(l,"h",(function(){return f}));var u=function(){return function(n,l){this.username=n,this.password=l}}(),e=function(){return function(n){this.accesstoken=n}}(),i=function(){return function(n,l,t,u){this.accesstoken=n,this.device=l,this.datefrom=t,this.dateto=u}}(),o=function(){return function(n,l){void 0===n&&(n=""),void 0===l&&(l=[]),this.accesstoken=n,this.dept=l}}(),s=function(){return function(n,l,t,u,e,i){this.type=n,this.accesstoken=l,this.date=t,this.dept=u,this.process=e,this.packaging=i}}(),r=function(){return function(n,l,t,u,e,i){this.accesstoken=n,this.date=l,this.dept=t,this.process=u,this.accumulated=e,this.packaging=i}}(),c=function(){return function(n,l,t,u,e,i,o){this.type=n,this.accesstoken=l,this.date=t,this.dept=u,this.process=e,this.accumulated=i,this.packaging=o}}(),a=function(){return function(n,l){void 0===n&&(n=""),this.accesstoken=n,this.process=l}}(),h=function(){return function(n,l){void 0===n&&(n=""),this.accesstoken=n,this.machineid=l}}(),b=function(){return function(n,l){void 0===n&&(n=""),this.accesstoken=n,this.transfileID=l}}(),d=function(){return function(n,l,t,u,e){void 0===n&&(n=""),this.accesstoken=n,this.machinedownid=l,this.machineid=t,this.remark=u,this.problemid=e}}(),p=function(){return function(n,l,t){void 0===n&&(n=""),this.accesstoken=n,this.processcode=l,this.machineid=t}}(),f=function(){return function(n,l){void 0===n&&(n=""),this.accesstoken=n,this.processcode=l}}()},"7ZRq":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=t("mrSG"),i=t("/Ru3"),o=t("oztG"),s=t("wd/R"),r=t("ZZ/e"),c=t("Do2H"),a=t("2mCB"),h=function(n){function l(l,t,u,e,o,r,c){var a=n.call(this,l,t)||this;return a.loadingCtrl=l,a.alertCtrl=t,a.navCtrl=u,a.service=e,a.storage=o,a.route=r,a.router=c,a.checkBoxList=[],a.arrProcess=[],a.processReqModel=new i.i,a.wipReqModel=new i.m(2),a.currentDate=s().format("YYYY-MM-DD"),a}return e.d(l,n),l.prototype.ngOnInit=function(){var n=this;this.route.snapshot.data.special&&(this.processReqModel=this.route.snapshot.data.special,this.wipReqModel.accesstoken=this.processReqModel.accesstoken,this.wipReqModel.date=this.standardDateTime(this.currentDate),this.wipReqModel.dept=this.processReqModel.dept,this.service.presentLoading(),this.service.callWebService(o.a.k_GET_PROCESS,this.processReqModel,(function(l){n.arrProcess=JSON.parse(l.data),n.arrProcess.forEach((function(l){n.checkBoxList.push({process:l,isChecked:!1})})),n.service.dismissLoading()})))},l.prototype.checkMaster=function(){var n=this;setTimeout((function(){n.checkBoxList.forEach((function(l){l.isChecked=n.masterCheck}))}))},l.prototype.checkEvent=function(){var n=this.checkBoxList.length,l=0;this.checkBoxList.map((function(n){n.isChecked&&l++})),l>0&&l<n?(this.isIndeterminate=!0,this.masterCheck=!1):l==n?(this.masterCheck=!0,this.isIndeterminate=!1):(this.isIndeterminate=!1,this.masterCheck=!1)},l.prototype.standardDateTime=function(n){return s(n).format("YYYY-MM-DD")},l.prototype.onNextClicked=function(){return e.b(this,void 0,void 0,(function(){var n,l=this;return e.e(this,(function(t){return console.log("CHOSEN: ",this.checkBoxList),n=!1,this.wipReqModel.process=[],this.checkBoxList.forEach((function(t){t.isChecked&&(n=!0,l.wipReqModel.process.push(t.process.value))})),n?(this.service.setData("sel-proc",this.wipReqModel),this.navCtrl.navigateForward("/output/machine-selection/sel-proc")):a.a.presentAlert("Alert","Please select at least one (1) process."),[2]}))}))},l}(a.a),b=function(){return function(){}}(),d=t("pMnS"),p=t("oBZk"),f=t("gIcY"),k=t("Ip0R"),g=t("iw74"),C=t("ZYCi"),m=u.qb({encapsulation:0,styles:[[""]],data:{}});function v(n){return u.Mb(0,[(n()(),u.sb(0,0,null,null,11,"ion-item",[],null,null,null,p.Z,p.t)),u.rb(1,49152,null,0,r.H,[u.h,u.k,u.B],null,null),(n()(),u.sb(2,0,null,0,2,"ion-label",[],null,null,null,p.ab,p.u)),u.rb(3,49152,null,0,r.N,[u.h,u.k,u.B],null,null),(n()(),u.Kb(4,0,["",""])),(n()(),u.sb(5,0,null,0,6,"ion-checkbox",[["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var e=!0,i=n.component;return"ionBlur"===l&&(e=!1!==u.Cb(n,6)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==u.Cb(n,6)._handleIonChange(t.target)&&e),"ngModelChange"===l&&(e=!1!==(n.context.$implicit.isChecked=t)&&e),"ionChange"===l&&(e=!1!==i.checkEvent()&&e),e}),p.P,p.j)),u.rb(6,16384,null,0,r.c,[u.k],null,null),u.Hb(1024,null,f.f,(function(n){return[n]}),[r.c]),u.rb(8,671744,null,0,f.k,[[8,null],[8,null],[8,null],[6,f.f]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,f.g,null,[f.k]),u.rb(10,16384,null,0,f.h,[[4,f.g]],null,null),u.rb(11,49152,null,0,r.r,[u.h,u.k,u.B],null,null)],(function(n,l){n(l,8,0,l.context.$implicit.isChecked)}),(function(n,l){n(l,4,0,l.context.$implicit.process.name),n(l,5,0,u.Cb(l,10).ngClassUntouched,u.Cb(l,10).ngClassTouched,u.Cb(l,10).ngClassPristine,u.Cb(l,10).ngClassDirty,u.Cb(l,10).ngClassValid,u.Cb(l,10).ngClassInvalid,u.Cb(l,10).ngClassPending)}))}function B(n){return u.Mb(0,[(n()(),u.sb(0,0,null,null,11,"ion-header",[],null,null,null,p.W,p.q)),u.rb(1,49152,null,0,r.B,[u.h,u.k,u.B],null,null),(n()(),u.sb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,p.lb,p.F)),u.rb(3,49152,null,0,r.Cb,[u.h,u.k,u.B],{color:[0,"color"]},null),(n()(),u.sb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,p.J,p.d)),u.rb(5,49152,null,0,r.l,[u.h,u.k,u.B],null,null),(n()(),u.sb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Cb(n,8).onClick(t)&&e),e}),p.H,p.b)),u.rb(7,49152,null,0,r.g,[u.h,u.k,u.B],null,null),u.rb(8,16384,null,0,r.h,[[2,r.ib],r.Jb],null,null),(n()(),u.sb(9,0,null,0,2,"ion-title",[],null,null,null,p.jb,p.D)),u.rb(10,49152,null,0,r.Ab,[u.h,u.k,u.B],null,null),(n()(),u.Kb(-1,0,[" Process "])),(n()(),u.sb(12,0,null,null,20,"ion-content",[],null,null,null,p.R,p.l)),u.rb(13,49152,null,0,r.u,[u.h,u.k,u.B],null,null),(n()(),u.sb(14,0,null,0,14,"ion-list",[],null,null,null,p.cb,p.v)),u.rb(15,49152,null,0,r.O,[u.h,u.k,u.B],null,null),(n()(),u.sb(16,0,null,0,12,"ion-item",[],null,null,null,p.Z,p.t)),u.rb(17,49152,null,0,r.H,[u.h,u.k,u.B],null,null),(n()(),u.sb(18,0,null,0,3,"ion-label",[],null,null,null,p.ab,p.u)),u.rb(19,49152,null,0,r.N,[u.h,u.k,u.B],null,null),(n()(),u.sb(20,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),u.Kb(-1,null,["Select All Process"])),(n()(),u.sb(22,0,null,0,6,"ion-checkbox",[["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var e=!0,i=n.component;return"ionBlur"===l&&(e=!1!==u.Cb(n,23)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==u.Cb(n,23)._handleIonChange(t.target)&&e),"ngModelChange"===l&&(e=!1!==(i.masterCheck=t)&&e),"click"===l&&(e=!1!==i.checkMaster()&&e),e}),p.P,p.j)),u.rb(23,16384,null,0,r.c,[u.k],null,null),u.Hb(1024,null,f.f,(function(n){return[n]}),[r.c]),u.rb(25,671744,null,0,f.k,[[8,null],[8,null],[8,null],[6,f.f]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,f.g,null,[f.k]),u.rb(27,16384,null,0,f.h,[[4,f.g]],null,null),u.rb(28,49152,null,0,r.r,[u.h,u.k,u.B],{indeterminate:[0,"indeterminate"]},null),(n()(),u.sb(29,0,null,0,3,"ion-list",[],null,null,null,p.cb,p.v)),u.rb(30,49152,null,0,r.O,[u.h,u.k,u.B],null,null),(n()(),u.jb(16777216,null,0,1,null,v)),u.rb(32,278528,null,0,k.k,[u.R,u.O,u.u],{ngForOf:[0,"ngForOf"]},null),(n()(),u.sb(33,0,null,null,10,"ion-footer",[],null,null,null,p.U,p.o)),u.rb(34,49152,null,0,r.z,[u.h,u.k,u.B],null,null),(n()(),u.sb(35,0,null,0,8,"ion-toolbar",[["position","bottom"]],null,null,null,p.lb,p.F)),u.rb(36,49152,null,0,r.Cb,[u.h,u.k,u.B],null,null),(n()(),u.sb(37,0,null,0,6,"ion-row",[],null,null,null,p.hb,p.B)),u.rb(38,49152,null,0,r.jb,[u.h,u.k,u.B],null,null),(n()(),u.sb(39,0,null,0,4,"ion-col",[["class","ion-text-center"]],null,null,null,p.Q,p.k)),u.rb(40,49152,null,0,r.t,[u.h,u.k,u.B],null,null),(n()(),u.sb(41,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.onNextClicked()&&u),u}),p.I,p.c)),u.rb(42,49152,null,0,r.k,[u.h,u.k,u.B],null,null),(n()(),u.Kb(-1,0,["Next"]))],(function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,25,0,t.masterCheck),n(l,28,0,t.isIndeterminate),n(l,32,0,t.checkBoxList)}),(function(n,l){n(l,22,0,u.Cb(l,27).ngClassUntouched,u.Cb(l,27).ngClassTouched,u.Cb(l,27).ngClassPristine,u.Cb(l,27).ngClassDirty,u.Cb(l,27).ngClassValid,u.Cb(l,27).ngClassInvalid,u.Cb(l,27).ngClassPending)}))}function M(n){return u.Mb(0,[(n()(),u.sb(0,0,null,null,1,"app-output-process-selection",[],null,null,null,B,m)),u.rb(1,114688,null,0,h,[r.Gb,r.a,r.Jb,c.a,g.b,C.a,C.n],null,null)],(function(n,l){n(l,1,0)}),null)}var w=u.ob("app-output-process-selection",h,M,{},{},[]);t.d(l,"OutputProcessSelectionPageModuleNgFactory",(function(){return R}));var R=u.pb(b,[],(function(n){return u.zb([u.Ab(512,u.j,u.eb,[[8,[d.a,w]],[3,u.j],u.z]),u.Ab(4608,k.n,k.m,[u.w,[2,k.w]]),u.Ab(4608,f.p,f.p,[]),u.Ab(4608,r.b,r.b,[u.B,u.g]),u.Ab(4608,r.Ib,r.Ib,[r.b,u.j,u.s]),u.Ab(4608,r.Nb,r.Nb,[r.b,u.j,u.s]),u.Ab(1073742336,k.c,k.c,[]),u.Ab(1073742336,f.n,f.n,[]),u.Ab(1073742336,f.c,f.c,[]),u.Ab(1073742336,r.Eb,r.Eb,[]),u.Ab(1073742336,C.p,C.p,[[2,C.v],[2,C.n]]),u.Ab(1073742336,b,b,[]),u.Ab(1024,C.l,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);