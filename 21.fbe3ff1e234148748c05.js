(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"/Ru3":function(n,l,u){"use strict";u.d(l,"c",function(){return e}),u.d(l,"a",function(){return t}),u.d(l,"e",function(){return i}),u.d(l,"d",function(){return a}),u.d(l,"f",function(){return o}),u.d(l,"b",function(){return c});var e=function(){return function(n,l){this.username=n,this.password=l}}(),t=function(){return function(n){this.accesstoken=n}}(),i=function(){return function(n,l,u,e){this.accesstoken=n,this.device=l,this.datefrom=u,this.dateto=e}}(),a=function(){return function(n,l){this.accesstoken=n,this.dept=l}}(),o=function(){return function(n,l,u,e,t){this.type=n,this.accesstoken=l,this.date=u,this.dept=e,this.process=t}}(),c=function(){return function(n,l,u,e,t,i){this.type=n,this.accesstoken=l,this.date=u,this.dept=e,this.process=t,this.email=i}}()},PRTS:function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=u("mrSG"),i=u("ZZ/e"),a=u("Do2H"),o=u("/Ru3"),c=u("wd/R"),s=function(){function n(n,l,u,e,t){this.navCtrl=n,this.service=l,this.storage=u,this.route=e,this.router=t,this.checkBoxList=[],this.arrMachine=[],this.wipReqModel=new o.f(2),this.currentDate=c().format("YYYY-MM-DD")}return n.prototype.ngOnInit=function(){var n=this;this.route.snapshot.data.special&&(console.log("special-----------------------: ",this.route.snapshot.data.special),this.wipReqModel=this.route.snapshot.data.special),[{name:"Auto Gluing Machine (1)",value:"Auto Gluing Machine (1)"},{name:"Auto Gluing Machine (2)",value:"Auto Gluing Machine (2)"},{name:"Auto Gluing Machine (3)",value:"Auto Gluing Machine (3)"},{name:"Auto Gluing Machine (4)",value:"Auto Gluing Machine (4)"},{name:"CD74",value:"CD74"},{name:"Die Cut AI (1)",value:"Die Cut AI (1)"},{name:"Die Cut AI (2)",value:"Die Cut AI (2)"},{name:"Die Cut AS (3)",value:"Die Cut AS (3)"},{name:"Die Cut AS (4)",value:"Die Cut AS (4)"},{name:"Die Cut C (5)",value:"Die Cut C (5)"},{name:"Die Cut C (6)",value:"Die Cut C (6)"},{name:"GL371",value:"GL371"},{name:"GL372",value:"GL372"},{name:"GL373",value:"GL373"},{name:"GL374",value:"GL374"},{name:"LA371",value:"LA371"},{name:"LA372",value:"LA372"},{name:"LS29",value:"LS29"},{name:"LS529",value:"LS529"},{name:"Manual Die Cut (1)",value:"Manual Die Cut (1)"},{name:"Manual Die Cut (10)",value:"Manual Die Cut (10)"},{name:"Manual Die Cut (11)",value:"Manual Die Cut (11)"},{name:"Manual Die Cut (12)",value:"Manual Die Cut (12)"},{name:"Manual Die Cut (13)",value:"Manual Die Cut (13)"},{name:"Manual Die Cut (14)",value:"Manual Die Cut (14)"},{name:"Manual Die Cut (15)",value:"Manual Die Cut (15)"},{name:"Manual Die Cut (16)",value:"Manual Die Cut (16)"},{name:"Manual Die Cut (2)",value:"Manual Die Cut (2)"},{name:"Manual Die Cut (3)",value:"Manual Die Cut (3)"},{name:"Manual Die Cut (4)",value:"Manual Die Cut (4)"},{name:"Manual Die Cut (5)",value:"Manual Die Cut (5)"},{name:"Manual Die Cut (6)",value:"Manual Die Cut (6)"},{name:"Manual Die Cut (7)",value:"Manual Die Cut (7)"},{name:"Manual Die Cut (8)",value:"Manual Die Cut (8)"},{name:"Manual Die Cut (9)",value:"Manual Die Cut (9)"},{name:"SM452(4)",value:"SM452(4)"},{name:"SM552",value:"SM552"}].forEach(function(l){n.checkBoxList.push({machine:l,isChecked:!1})})},n.prototype.checkMaster=function(){var n=this;setTimeout(function(){n.checkBoxList.forEach(function(l){l.isChecked=n.masterCheck})})},n.prototype.checkEvent=function(){var n=this.checkBoxList.length,l=0;this.checkBoxList.map(function(n){n.isChecked&&l++}),l>0&&l<n?(this.isIndeterminate=!0,this.masterCheck=!1):l==n?(this.masterCheck=!0,this.isIndeterminate=!1):(this.isIndeterminate=!1,this.masterCheck=!1)},n.prototype.onNextClicked=function(){return t.b(this,void 0,void 0,function(){var n;return t.e(this,function(l){return console.log("CHOSEN: ",this.checkBoxList),n=!1,this.checkBoxList.forEach(function(l){l.isChecked&&(n=!0)}),n?(this.service.setData("sel-mach",this.wipReqModel),this.navCtrl.navigateForward("/output/sel-mach")):this.service.presentAlert("Alert","Please select at least one (1) machine."),[2]})})},n}(),r=function(){return function(){}}(),h=u("pMnS"),b=u("oBZk"),C=u("gIcY"),d=u("Ip0R"),m=u("iw74"),g=u("ZYCi"),v=e.qb({encapsulation:0,styles:[[""]],data:{}});function k(n){return e.Lb(0,[(n()(),e.sb(0,0,null,null,11,"ion-item",[],null,null,null,b.ab,b.t)),e.rb(1,49152,null,0,i.I,[e.h,e.k,e.B],null,null),(n()(),e.sb(2,0,null,0,2,"ion-label",[],null,null,null,b.bb,b.u)),e.rb(3,49152,null,0,i.O,[e.h,e.k,e.B],null,null),(n()(),e.Jb(4,0,["",""])),(n()(),e.sb(5,0,null,0,6,"ion-checkbox",[["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,u){var t=!0,i=n.component;return"ionBlur"===l&&(t=!1!==e.Cb(n,6)._handleBlurEvent(u.target)&&t),"ionChange"===l&&(t=!1!==e.Cb(n,6)._handleIonChange(u.target)&&t),"ngModelChange"===l&&(t=!1!==(n.context.$implicit.isChecked=u)&&t),"ionChange"===l&&(t=!1!==i.checkEvent()&&t),t},b.Q,b.j)),e.rb(6,16384,null,0,i.c,[e.k],null,null),e.Gb(1024,null,C.e,function(n){return[n]},[i.c]),e.rb(8,671744,null,0,C.j,[[8,null],[8,null],[8,null],[6,C.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,C.f,null,[C.j]),e.rb(10,16384,null,0,C.g,[[4,C.f]],null,null),e.rb(11,49152,null,0,i.s,[e.h,e.k,e.B],null,null)],function(n,l){n(l,8,0,l.context.$implicit.isChecked)},function(n,l){n(l,4,0,l.context.$implicit.machine.name),n(l,5,0,e.Cb(l,10).ngClassUntouched,e.Cb(l,10).ngClassTouched,e.Cb(l,10).ngClassPristine,e.Cb(l,10).ngClassDirty,e.Cb(l,10).ngClassValid,e.Cb(l,10).ngClassInvalid,e.Cb(l,10).ngClassPending)})}function f(n){return e.Lb(0,[(n()(),e.sb(0,0,null,null,11,"ion-header",[],null,null,null,b.X,b.q)),e.rb(1,49152,null,0,i.C,[e.h,e.k,e.B],null,null),(n()(),e.sb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,b.nb,b.G)),e.rb(3,49152,null,0,i.Db,[e.h,e.k,e.B],{color:[0,"color"]},null),(n()(),e.sb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.K,b.d)),e.rb(5,49152,null,0,i.m,[e.h,e.k,e.B],null,null),(n()(),e.sb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==e.Cb(n,8).onClick(u)&&t),t},b.I,b.b)),e.rb(7,49152,null,0,i.h,[e.h,e.k,e.B],null,null),e.rb(8,16384,null,0,i.i,[[2,i.jb],i.Kb],null,null),(n()(),e.sb(9,0,null,0,2,"ion-title",[],null,null,null,b.lb,b.E)),e.rb(10,49152,null,0,i.Bb,[e.h,e.k,e.B],null,null),(n()(),e.Jb(-1,0,[" Machine (HARDCODED) "])),(n()(),e.sb(12,0,null,null,20,"ion-content",[],null,null,null,b.S,b.l)),e.rb(13,49152,null,0,i.v,[e.h,e.k,e.B],null,null),(n()(),e.sb(14,0,null,0,14,"ion-list",[],null,null,null,b.db,b.v)),e.rb(15,49152,null,0,i.P,[e.h,e.k,e.B],null,null),(n()(),e.sb(16,0,null,0,12,"ion-item",[],null,null,null,b.ab,b.t)),e.rb(17,49152,null,0,i.I,[e.h,e.k,e.B],null,null),(n()(),e.sb(18,0,null,0,3,"ion-label",[],null,null,null,b.bb,b.u)),e.rb(19,49152,null,0,i.O,[e.h,e.k,e.B],null,null),(n()(),e.sb(20,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Select All Machine (HARDCODED)"])),(n()(),e.sb(22,0,null,0,6,"ion-checkbox",[["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0,i=n.component;return"ionBlur"===l&&(t=!1!==e.Cb(n,23)._handleBlurEvent(u.target)&&t),"ionChange"===l&&(t=!1!==e.Cb(n,23)._handleIonChange(u.target)&&t),"ngModelChange"===l&&(t=!1!==(i.masterCheck=u)&&t),"click"===l&&(t=!1!==i.checkMaster()&&t),t},b.Q,b.j)),e.rb(23,16384,null,0,i.c,[e.k],null,null),e.Gb(1024,null,C.e,function(n){return[n]},[i.c]),e.rb(25,671744,null,0,C.j,[[8,null],[8,null],[8,null],[6,C.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,C.f,null,[C.j]),e.rb(27,16384,null,0,C.g,[[4,C.f]],null,null),e.rb(28,49152,null,0,i.s,[e.h,e.k,e.B],{indeterminate:[0,"indeterminate"]},null),(n()(),e.sb(29,0,null,0,3,"ion-list",[],null,null,null,b.db,b.v)),e.rb(30,49152,null,0,i.P,[e.h,e.k,e.B],null,null),(n()(),e.jb(16777216,null,0,1,null,k)),e.rb(32,278528,null,0,d.j,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null),(n()(),e.sb(33,0,null,null,10,"ion-footer",[],null,null,null,b.V,b.o)),e.rb(34,49152,null,0,i.A,[e.h,e.k,e.B],null,null),(n()(),e.sb(35,0,null,0,8,"ion-toolbar",[["position","bottom"]],null,null,null,b.nb,b.G)),e.rb(36,49152,null,0,i.Db,[e.h,e.k,e.B],null,null),(n()(),e.sb(37,0,null,0,6,"ion-row",[],null,null,null,b.hb,b.A)),e.rb(38,49152,null,0,i.kb,[e.h,e.k,e.B],null,null),(n()(),e.sb(39,0,null,0,4,"ion-col",[["class","ion-text-center"]],null,null,null,b.R,b.k)),e.rb(40,49152,null,0,i.u,[e.h,e.k,e.B],null,null),(n()(),e.sb(41,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.onNextClicked()&&e),e},b.J,b.c)),e.rb(42,49152,null,0,i.l,[e.h,e.k,e.B],null,null),(n()(),e.Jb(-1,0,["Next"]))],function(n,l){var u=l.component;n(l,3,0,"primary"),n(l,25,0,u.masterCheck),n(l,28,0,u.isIndeterminate),n(l,32,0,u.checkBoxList)},function(n,l){n(l,22,0,e.Cb(l,27).ngClassUntouched,e.Cb(l,27).ngClassTouched,e.Cb(l,27).ngClassPristine,e.Cb(l,27).ngClassDirty,e.Cb(l,27).ngClassValid,e.Cb(l,27).ngClassInvalid,e.Cb(l,27).ngClassPending)})}function p(n){return e.Lb(0,[(n()(),e.sb(0,0,null,null,1,"app-output-machine-selection",[],null,null,null,f,v)),e.rb(1,114688,null,0,s,[i.Kb,a.a,m.b,g.a,g.n],null,null)],function(n,l){n(l,1,0)},null)}var M=e.ob("app-output-machine-selection",s,p,{},{},[]);u.d(l,"OutputMachineSelectionPageModuleNgFactory",function(){return D});var D=e.pb(r,[],function(n){return e.zb([e.Ab(512,e.j,e.eb,[[8,[h.a,M]],[3,e.j],e.z]),e.Ab(4608,d.m,d.l,[e.w,[2,d.w]]),e.Ab(4608,C.o,C.o,[]),e.Ab(4608,i.b,i.b,[e.B,e.g]),e.Ab(4608,i.Jb,i.Jb,[i.b,e.j,e.s]),e.Ab(4608,i.Ob,i.Ob,[i.b,e.j,e.s]),e.Ab(1073742336,d.c,d.c,[]),e.Ab(1073742336,C.m,C.m,[]),e.Ab(1073742336,C.c,C.c,[]),e.Ab(1073742336,i.Fb,i.Fb,[]),e.Ab(1073742336,g.p,g.p,[[2,g.v],[2,g.n]]),e.Ab(1073742336,r,r,[]),e.Ab(1024,g.l,function(){return[[{path:"",component:s}]]},[])])})}}]);