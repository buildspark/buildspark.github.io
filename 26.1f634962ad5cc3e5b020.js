(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{sXoI:function(l,n,e){"use strict";e.r(n);var a=e("CcnG"),t=function(){return function(){}}(),u=e("yWMr"),o=e("t68o"),i=e("zbXB"),r=e("NcP4"),s=e("xYTU"),d=e("gMwT"),b=e("pMnS"),c=e("Mr+X"),h=e("SMsm"),g=e("9zIK"),m=e("gQxg"),C=e("Do2H"),y=e("oBZk"),M=e("ZZ/e"),p=e("Rlre"),f=e("La40"),A=e("gIcY"),v=e("Ip0R"),k=e("mrSG"),R=e("oztG"),D=e("/Ru3"),q=e("wd/R"),B=e("OFIl"),Y=e("2mCB");e("AtBH");var T=function(l){function n(n,e,a,t,u,o){var i=l.call(this,n,e)||this;return i.loadingCtrl=n,i.alertCtrl=e,i.service=a,i.storage=t,i.modalController=u,i.router=o,i.strChartTitle="",i.arrDailyCharts=[],i.arrMonthlyCharts=[],i.arrYearlyCharts=[],i.customActionSheetOptions={header:"Machines",subHeader:"Select the machine(s) you want to view"},i.arrMachines=[],i.arrSelectedMachines=[],i.selectedTab=0,i.accessToken="",i.deviceReqModel=new D.a,i.dailyReqModel=new D.l,i.monthlyReqModel=new D.l,i.yearlyReqModel=new D.l,i.currentDate=q().format(R.a.c_DATE_FORMAT),i.minDate=R.a.c_MIN_DATE_2019,i.checkBoxList=[],i.strChartTitle=i.router.url.replace(/[^a-zA-Z0-9 ]/g,""),i.storage.get(R.a.c_ACCESS_TOKEN).then((function(l){i.accessToken=l,i.deviceReqModel.accesstoken=l,i.dailyReqModel.accesstoken=l,i.monthlyReqModel.accesstoken=l,i.yearlyReqModel.accesstoken=l,i.preprareDateAvailableData(i.currentDate),i.service.presentLoading(),i.service.callWebService(R.a.k_GET_DEVICE,i.deviceReqModel,(function(l){0==l.status_code?(i.arrMachines=JSON.parse(l.data),i.arrMachines.forEach((function(l){i.checkBoxList.push(l===i.arrMachines[0]?{machine:l,isChecked:!0}:{machine:l,isChecked:!1})})),i.arrSelectedMachines.push(i.arrMachines[0].value),i.dailyReqModel.device=i.arrSelectedMachines.join(","),i.monthlyReqModel.device=i.arrSelectedMachines.join(","),i.yearlyReqModel.device=i.arrSelectedMachines.join(","),i.callWSToReloadPagesData()):i.service.dismissLoading()}))})),i}return k.d(n,l),n.prototype.ionViewDidEnter=function(){},n.prototype.callWSToReloadPagesData=function(){var l=this,n=this.service.callWebService(R.a.k_DAILY_IMP,this.dailyReqModel,(function(n){n&&n.data&&""!=n.data&&"-"!=n.data&&(l.arrDailyCharts=JSON.parse(n.data))})),e=this.service.callWebService(R.a.k_MONTHLY_IMP,this.monthlyReqModel,(function(n){n&&n.data&&""!=n.data&&"-"!=n.data&&(l.arrMonthlyCharts=JSON.parse(n.data))})),a=this.service.callWebService(R.a.k_YEARLY_IMP,this.yearlyReqModel,(function(n){n&&n.data&&""!=n.data&&"-"!=n.data&&(l.arrYearlyCharts=JSON.parse(n.data))}));this.service.callWebServiceSimultaneously([n,e,a]).finally((function(){l.service.dismissLoading()}))},n.prototype.onFromDailyUsageSelected=function(l){Date.parse(this.dailyReqModel.datefrom)>Date.parse(this.dailyReqModel.dateto)&&(this.dailyReqModel.dateto=this.dailyReqModel.datefrom)},n.prototype.onToDailyUsageSelected=function(l){var n=Date.parse(this.dailyReqModel.datefrom);Date.parse(this.dailyReqModel.dateto)<n&&(this.dailyReqModel.datefrom=this.dailyReqModel.dateto)},n.prototype.onFromMonthlyUsageSelected=function(l){Date.parse(this.monthlyReqModel.datefrom)>Date.parse(this.monthlyReqModel.dateto)&&(this.monthlyReqModel.dateto=this.monthlyReqModel.datefrom)},n.prototype.onToMonthlyUsageSelected=function(l){var n=Date.parse(this.monthlyReqModel.datefrom);Date.parse(this.monthlyReqModel.dateto)<n&&(this.monthlyReqModel.datefrom=this.monthlyReqModel.dateto)},n.prototype.onFromYearlyUsageSelected=function(l){Date.parse(this.yearlyReqModel.datefrom)>Date.parse(this.yearlyReqModel.dateto)&&(this.yearlyReqModel.dateto=this.yearlyReqModel.datefrom)},n.prototype.onToYearlyUsageSelected=function(l){var n=Date.parse(this.yearlyReqModel.datefrom);Date.parse(this.yearlyReqModel.dateto)<n&&(this.yearlyReqModel.datefrom=this.yearlyReqModel.dateto)},n.prototype.selectMachine=function(){this.presentModal()},n.prototype.optionsFn=function(){console.log("optionsFnitem: ",this.arrSelectedMachines),this.dailyReqModel.device=this.arrSelectedMachines.join(","),this.monthlyReqModel.device=this.arrSelectedMachines.join(","),this.yearlyReqModel.device=this.arrSelectedMachines.join(","),this.callWSToReloadPagesData()},n.prototype.onTabChanged=function(l){console.log("tabChangeEvent => ",l),console.log("index => ",l.index)},n.prototype.onViewDailyDateClicked=function(){var l=this;this.dailyReqModel.datefrom=this.standardDateTime(this.dailyReqModel.datefrom),this.dailyReqModel.dateto=this.standardDateTime(this.dailyReqModel.dateto),this.service.presentLoading(),this.service.callWebService(R.a.k_DAILY_IMP,this.dailyReqModel,(function(n){n&&n.data&&""!=n.data&&"-"!=n.data&&(l.arrDailyCharts=JSON.parse(n.data)),l.service.dismissLoading()}))},n.prototype.onViewMonthlyDateClicked=function(){var l=this;this.monthlyReqModel.datefrom=this.standardDateTime(this.monthlyReqModel.datefrom),this.monthlyReqModel.dateto=this.standardDateTime(this.monthlyReqModel.dateto),this.service.presentLoading(),this.service.callWebService(R.a.k_MONTHLY_IMP,this.monthlyReqModel,(function(n){n&&n.data&&""!=n.data&&"-"!=n.data&&(l.arrMonthlyCharts=JSON.parse(n.data)),l.service.dismissLoading()}))},n.prototype.onViewYearlyDateClicked=function(){var l=this;this.yearlyReqModel.datefrom=this.standardDateTime(this.yearlyReqModel.datefrom),this.yearlyReqModel.dateto=this.standardDateTime(this.yearlyReqModel.dateto),this.service.presentLoading(),this.service.callWebService(R.a.k_YEARLY_IMP,this.yearlyReqModel,(function(n){n&&n.data&&""!=n.data&&"-"!=n.data&&(l.arrYearlyCharts=JSON.parse(n.data)),l.service.dismissLoading()}))},n.prototype.random_rgb=function(){var l=Math.round,n=Math.random;return"rgb("+l(255*n())+","+l(255*n())+","+l(255*n())+","+n().toFixed(1)+")"},n.prototype.standardDateTime=function(l){return q(l).format("YYYY-MM-DD")},n.prototype.preprareDateAvailableData=function(l){var n,e,a=l,t=new Date(a);this.dailyReqModel.datefrom=this.standardDateTime(q(a).add(-1,"days").format(R.a.c_DATE_FORMAT)),this.dailyReqModel.dateto=this.standardDateTime(q(a).add(-1,"days").format(R.a.c_DATE_FORMAT)),1==t.getDate()?n=q(t).add(-1,"months").format(R.a.c_DATE_FORMAT):(t.setDate(1),n=q(t).format(R.a.c_DATE_FORMAT)),this.monthlyReqModel.datefrom=this.standardDateTime(n),this.monthlyReqModel.dateto=this.standardDateTime(n),0==t.getMonth()?e=q(t).add(-1,"years").format(R.a.c_DATE_FORMAT):(t.setMonth(0),e=q(t).format(R.a.c_DATE_FORMAT)),this.yearlyReqModel.datefrom=this.standardDateTime(e),this.yearlyReqModel.dateto=this.standardDateTime(e)},n.prototype.presentModal=function(){return k.b(this,void 0,void 0,(function(){var l,n=this;return k.e(this,(function(e){switch(e.label){case 0:return[4,this.modalController.create({component:B.a,componentProps:{checkBoxList:this.checkBoxList,paramTitle:"Select Machine"}})];case 1:return(l=e.sent()).onDidDismiss().then((function(l){console.log("dataReturned: ",l),null!==l&&void 0!==l.data&&(n.arrSelectedMachines=[],l.data.forEach((function(l){l.isChecked&&n.arrSelectedMachines.push(l.machine.value)})),console.log("--- Modal SELECTED Data: ",n.arrSelectedMachines),n.optionsFn())})),[4,l.present()];case 2:return[2,e.sent()]}}))}))},n}(Y.a),S=e("iw74"),_=e("ZYCi"),F=a.qb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}p.text-center[_ngcontent-%COMP%]{text-align:center}.example-tab-icon[_ngcontent-%COMP%]{margin-right:8px}.center-ver[_ngcontent-%COMP%]{display:flex!important;align-content:center!important;align-items:center!important;float:right}"]],data:{}});function P(l){return a.Mb(0,[(l()(),a.sb(0,0,null,null,2,"mat-icon",[["class","example-tab-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,c.b,c.a)),a.rb(1,9158656,null,0,h.b,[a.k,h.d,[8,null],[2,h.a]],null,null),(l()(),a.Kb(-1,0,["query_builder"])),(l()(),a.Kb(-1,null,[" Daily "]))],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,a.Cb(n,1).inline,"primary"!==a.Cb(n,1).color&&"accent"!==a.Cb(n,1).color&&"warn"!==a.Cb(n,1).color)}))}function x(l){return a.Mb(0,[(l()(),a.sb(0,0,null,null,1,"chart-canvas",[],null,null,null,g.b,g.a)),a.rb(1,114688,null,0,m.a,[C.a],{data:[0,"data"],title:[1,"title"]},null)],(function(l,n){l(n,1,0,n.context.$implicit,n.component.strChartTitle)}),null)}function O(l){return a.Mb(0,[(l()(),a.sb(0,0,null,null,2,"mat-icon",[["class","example-tab-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,c.b,c.a)),a.rb(1,9158656,null,0,h.b,[a.k,h.d,[8,null],[2,h.a]],null,null),(l()(),a.Kb(-1,0,["calendar_today"])),(l()(),a.Kb(-1,null,[" Monthly "]))],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,a.Cb(n,1).inline,"primary"!==a.Cb(n,1).color&&"accent"!==a.Cb(n,1).color&&"warn"!==a.Cb(n,1).color)}))}function w(l){return a.Mb(0,[(l()(),a.sb(0,0,null,null,1,"chart-canvas",[],null,null,null,g.b,g.a)),a.rb(1,114688,null,0,m.a,[C.a],{data:[0,"data"],title:[1,"title"]},null)],(function(l,n){l(n,1,0,n.context.$implicit,n.component.strChartTitle)}),null)}function I(l){return a.Mb(0,[(l()(),a.sb(0,0,null,null,2,"mat-icon",[["class","example-tab-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,c.b,c.a)),a.rb(1,9158656,null,0,h.b,[a.k,h.d,[8,null],[2,h.a]],null,null),(l()(),a.Kb(-1,0,["trending_up"])),(l()(),a.Kb(-1,null,[" Yearly "]))],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,a.Cb(n,1).inline,"primary"!==a.Cb(n,1).color&&"accent"!==a.Cb(n,1).color&&"warn"!==a.Cb(n,1).color)}))}function E(l){return a.Mb(0,[(l()(),a.sb(0,0,null,null,1,"chart-canvas",[],null,null,null,g.b,g.a)),a.rb(1,114688,null,0,m.a,[C.a],{data:[0,"data"],title:[1,"title"]},null)],(function(l,n){l(n,1,0,n.context.$implicit,n.component.strChartTitle)}),null)}function L(l){return a.Mb(0,[a.Ib(402653184,1,{tabGroup:0}),a.Ib(402653184,2,{selectPop:0}),(l()(),a.sb(2,0,null,null,16,"ion-header",[],null,null,null,y.W,y.q)),a.rb(3,49152,null,0,M.B,[a.h,a.k,a.B],null,null),(l()(),a.sb(4,0,null,0,14,"ion-toolbar",[["color","primary"]],null,null,null,y.lb,y.F)),a.rb(5,49152,null,0,M.Cb,[a.h,a.k,a.B],{color:[0,"color"]},null),(l()(),a.sb(6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,y.J,y.d)),a.rb(7,49152,null,0,M.l,[a.h,a.k,a.B],null,null),(l()(),a.sb(8,0,null,0,1,"ion-menu-button",[],null,null,null,y.db,y.y)),a.rb(9,49152,null,0,M.R,[a.h,a.k,a.B],null,null),(l()(),a.sb(10,0,null,0,2,"ion-title",[],null,null,null,y.jb,y.D)),a.rb(11,49152,null,0,M.Ab,[a.h,a.k,a.B],null,null),(l()(),a.Kb(-1,0,[" Impression "])),(l()(),a.sb(13,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,y.J,y.d)),a.rb(14,49152,null,0,M.l,[a.h,a.k,a.B],null,null),(l()(),a.sb(15,0,null,0,3,"ion-fab-button",[["size","small"]],null,[[null,"click"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.selectMachine()&&a),a}),y.T,y.n)),a.rb(16,49152,null,0,M.x,[a.h,a.k,a.B],{size:[0,"size"]},null),(l()(),a.sb(17,0,null,0,1,"ion-icon",[["name","list-box"]],null,null,null,y.X,y.r)),a.rb(18,49152,null,0,M.C,[a.h,a.k,a.B],{name:[0,"name"]},null),(l()(),a.sb(19,0,null,null,133,"ion-content",[],null,null,null,y.R,y.l)),a.rb(20,49152,null,0,M.u,[a.h,a.k,a.B],null,null),(l()(),a.sb(21,0,null,0,131,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],[[null,"selectedTabChange"]],(function(l,n,e){var a=!0;return"selectedTabChange"===n&&(a=!1!==l.component.onTabChanged(e)&&a),a}),p.c,p.b)),a.rb(22,3325952,[[1,4],["tabGroup",4]],1,f.f,[a.k,a.h,[2,f.a]],{selectedIndex:[0,"selectedIndex"]},{selectedTabChange:"selectedTabChange"}),a.Ib(603979776,3,{_tabs:1}),(l()(),a.sb(24,16777216,null,null,42,"mat-tab",[],null,null,null,p.d,p.a)),a.rb(25,770048,[[3,4]],2,f.c,[a.R],null,null),a.Ib(335544320,4,{templateLabel:0}),a.Ib(335544320,5,{_explicitContent:0}),(l()(),a.jb(16777216,null,0,1,null,P)),a.rb(29,16384,[[4,4]],0,f.h,[a.O,a.R],null,null),(l()(),a.sb(30,0,null,0,34,"ion-grid",[],null,null,null,y.V,y.p)),a.rb(31,49152,null,0,M.A,[a.h,a.k,a.B],null,null),(l()(),a.sb(32,0,null,0,32,"ion-row",[],null,null,null,y.hb,y.B)),a.rb(33,49152,null,0,M.jb,[a.h,a.k,a.B],null,null),(l()(),a.sb(34,0,null,0,12,"ion-col",[],null,null,null,y.Q,y.k)),a.rb(35,49152,null,0,M.t,[a.h,a.k,a.B],null,null),(l()(),a.sb(36,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),a.Kb(-1,null,[" From "])),(l()(),a.sb(38,0,null,null,8,"ion-item",[],null,null,null,y.Z,y.t)),a.rb(39,49152,null,0,M.H,[a.h,a.k,a.B],null,null),(l()(),a.sb(40,0,null,0,6,"ion-datetime",[["displayFormat","DD MMM YYYY"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,u=l.component;return"ionBlur"===n&&(t=!1!==a.Cb(l,41)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==a.Cb(l,41)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(u.dailyReqModel.datefrom=e)&&t),"ionChange"===n&&(t=!1!==u.onFromDailyUsageSelected(e)&&t),t}),y.S,y.m)),a.rb(41,16384,null,0,M.Pb,[a.k],null,null),a.Hb(1024,null,A.f,(function(l){return[l]}),[M.Pb]),a.rb(43,671744,null,0,A.k,[[8,null],[8,null],[8,null],[6,A.f]],{model:[0,"model"]},{update:"ngModelChange"}),a.Hb(2048,null,A.g,null,[A.k]),a.rb(45,16384,null,0,A.h,[[4,A.g]],null,null),a.rb(46,49152,null,0,M.v,[a.h,a.k,a.B],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"]},null),(l()(),a.sb(47,0,null,0,12,"ion-col",[],null,null,null,y.Q,y.k)),a.rb(48,49152,null,0,M.t,[a.h,a.k,a.B],null,null),(l()(),a.sb(49,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),a.Kb(-1,null,[" To "])),(l()(),a.sb(51,0,null,null,8,"ion-item",[],null,null,null,y.Z,y.t)),a.rb(52,49152,null,0,M.H,[a.h,a.k,a.B],null,null),(l()(),a.sb(53,0,null,0,6,"ion-datetime",[["displayFormat","DD MMM YYYY"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,u=l.component;return"ionBlur"===n&&(t=!1!==a.Cb(l,54)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==a.Cb(l,54)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(u.dailyReqModel.dateto=e)&&t),"ionChange"===n&&(t=!1!==u.onToDailyUsageSelected(e)&&t),t}),y.S,y.m)),a.rb(54,16384,null,0,M.Pb,[a.k],null,null),a.Hb(1024,null,A.f,(function(l){return[l]}),[M.Pb]),a.rb(56,671744,null,0,A.k,[[8,null],[8,null],[8,null],[6,A.f]],{model:[0,"model"]},{update:"ngModelChange"}),a.Hb(2048,null,A.g,null,[A.k]),a.rb(58,16384,null,0,A.h,[[4,A.g]],null,null),a.rb(59,49152,null,0,M.v,[a.h,a.k,a.B],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"]},null),(l()(),a.sb(60,0,null,0,4,"ion-col",[["class","center-ver"],["size","auto"]],null,null,null,y.Q,y.k)),a.rb(61,49152,null,0,M.t,[a.h,a.k,a.B],{size:[0,"size"]},null),(l()(),a.sb(62,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.onViewDailyDateClicked()&&a),a}),y.I,y.c)),a.rb(63,49152,null,0,M.k,[a.h,a.k,a.B],null,null),(l()(),a.Kb(-1,0,["View data"])),(l()(),a.jb(16777216,null,0,1,null,x)),a.rb(66,278528,null,0,v.k,[a.R,a.O,a.u],{ngForOf:[0,"ngForOf"]},null),(l()(),a.sb(67,16777216,null,null,42,"mat-tab",[],null,null,null,p.d,p.a)),a.rb(68,770048,[[3,4]],2,f.c,[a.R],null,null),a.Ib(335544320,6,{templateLabel:0}),a.Ib(335544320,7,{_explicitContent:0}),(l()(),a.jb(16777216,null,0,1,null,O)),a.rb(72,16384,[[6,4]],0,f.h,[a.O,a.R],null,null),(l()(),a.sb(73,0,null,0,34,"ion-grid",[],null,null,null,y.V,y.p)),a.rb(74,49152,null,0,M.A,[a.h,a.k,a.B],null,null),(l()(),a.sb(75,0,null,0,32,"ion-row",[],null,null,null,y.hb,y.B)),a.rb(76,49152,null,0,M.jb,[a.h,a.k,a.B],null,null),(l()(),a.sb(77,0,null,0,12,"ion-col",[],null,null,null,y.Q,y.k)),a.rb(78,49152,null,0,M.t,[a.h,a.k,a.B],null,null),(l()(),a.sb(79,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),a.Kb(-1,null,[" From "])),(l()(),a.sb(81,0,null,null,8,"ion-item",[],null,null,null,y.Z,y.t)),a.rb(82,49152,null,0,M.H,[a.h,a.k,a.B],null,null),(l()(),a.sb(83,0,null,0,6,"ion-datetime",[["displayFormat","MMM YYYY"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,u=l.component;return"ionBlur"===n&&(t=!1!==a.Cb(l,84)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==a.Cb(l,84)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(u.monthlyReqModel.datefrom=e)&&t),"ionChange"===n&&(t=!1!==u.onFromMonthlyUsageSelected(e)&&t),t}),y.S,y.m)),a.rb(84,16384,null,0,M.Pb,[a.k],null,null),a.Hb(1024,null,A.f,(function(l){return[l]}),[M.Pb]),a.rb(86,671744,null,0,A.k,[[8,null],[8,null],[8,null],[6,A.f]],{model:[0,"model"]},{update:"ngModelChange"}),a.Hb(2048,null,A.g,null,[A.k]),a.rb(88,16384,null,0,A.h,[[4,A.g]],null,null),a.rb(89,49152,null,0,M.v,[a.h,a.k,a.B],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"]},null),(l()(),a.sb(90,0,null,0,12,"ion-col",[],null,null,null,y.Q,y.k)),a.rb(91,49152,null,0,M.t,[a.h,a.k,a.B],null,null),(l()(),a.sb(92,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),a.Kb(-1,null,[" To "])),(l()(),a.sb(94,0,null,null,8,"ion-item",[],null,null,null,y.Z,y.t)),a.rb(95,49152,null,0,M.H,[a.h,a.k,a.B],null,null),(l()(),a.sb(96,0,null,0,6,"ion-datetime",[["displayFormat","MMM YYYY"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,u=l.component;return"ionBlur"===n&&(t=!1!==a.Cb(l,97)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==a.Cb(l,97)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(u.monthlyReqModel.dateto=e)&&t),"ionChange"===n&&(t=!1!==u.onToMonthlyUsageSelected(e)&&t),t}),y.S,y.m)),a.rb(97,16384,null,0,M.Pb,[a.k],null,null),a.Hb(1024,null,A.f,(function(l){return[l]}),[M.Pb]),a.rb(99,671744,null,0,A.k,[[8,null],[8,null],[8,null],[6,A.f]],{model:[0,"model"]},{update:"ngModelChange"}),a.Hb(2048,null,A.g,null,[A.k]),a.rb(101,16384,null,0,A.h,[[4,A.g]],null,null),a.rb(102,49152,null,0,M.v,[a.h,a.k,a.B],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"]},null),(l()(),a.sb(103,0,null,0,4,"ion-col",[["class","center-ver"],["size","auto"]],null,null,null,y.Q,y.k)),a.rb(104,49152,null,0,M.t,[a.h,a.k,a.B],{size:[0,"size"]},null),(l()(),a.sb(105,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.onViewMonthlyDateClicked()&&a),a}),y.I,y.c)),a.rb(106,49152,null,0,M.k,[a.h,a.k,a.B],null,null),(l()(),a.Kb(-1,0,["View data"])),(l()(),a.jb(16777216,null,0,1,null,w)),a.rb(109,278528,null,0,v.k,[a.R,a.O,a.u],{ngForOf:[0,"ngForOf"]},null),(l()(),a.sb(110,16777216,null,null,42,"mat-tab",[],null,null,null,p.d,p.a)),a.rb(111,770048,[[3,4]],2,f.c,[a.R],null,null),a.Ib(335544320,8,{templateLabel:0}),a.Ib(335544320,9,{_explicitContent:0}),(l()(),a.jb(16777216,null,0,1,null,I)),a.rb(115,16384,[[8,4]],0,f.h,[a.O,a.R],null,null),(l()(),a.sb(116,0,null,0,34,"ion-grid",[],null,null,null,y.V,y.p)),a.rb(117,49152,null,0,M.A,[a.h,a.k,a.B],null,null),(l()(),a.sb(118,0,null,0,32,"ion-row",[],null,null,null,y.hb,y.B)),a.rb(119,49152,null,0,M.jb,[a.h,a.k,a.B],null,null),(l()(),a.sb(120,0,null,0,12,"ion-col",[],null,null,null,y.Q,y.k)),a.rb(121,49152,null,0,M.t,[a.h,a.k,a.B],null,null),(l()(),a.sb(122,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),a.Kb(-1,null,[" From "])),(l()(),a.sb(124,0,null,null,8,"ion-item",[],null,null,null,y.Z,y.t)),a.rb(125,49152,null,0,M.H,[a.h,a.k,a.B],null,null),(l()(),a.sb(126,0,null,0,6,"ion-datetime",[["displayFormat","YYYY"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,u=l.component;return"ionBlur"===n&&(t=!1!==a.Cb(l,127)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==a.Cb(l,127)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(u.yearlyReqModel.datefrom=e)&&t),"ionChange"===n&&(t=!1!==u.onFromYearlyUsageSelected(e)&&t),t}),y.S,y.m)),a.rb(127,16384,null,0,M.Pb,[a.k],null,null),a.Hb(1024,null,A.f,(function(l){return[l]}),[M.Pb]),a.rb(129,671744,null,0,A.k,[[8,null],[8,null],[8,null],[6,A.f]],{model:[0,"model"]},{update:"ngModelChange"}),a.Hb(2048,null,A.g,null,[A.k]),a.rb(131,16384,null,0,A.h,[[4,A.g]],null,null),a.rb(132,49152,null,0,M.v,[a.h,a.k,a.B],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"]},null),(l()(),a.sb(133,0,null,0,12,"ion-col",[],null,null,null,y.Q,y.k)),a.rb(134,49152,null,0,M.t,[a.h,a.k,a.B],null,null),(l()(),a.sb(135,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),a.Kb(-1,null,[" To "])),(l()(),a.sb(137,0,null,null,8,"ion-item",[],null,null,null,y.Z,y.t)),a.rb(138,49152,null,0,M.H,[a.h,a.k,a.B],null,null),(l()(),a.sb(139,0,null,0,6,"ion-datetime",[["displayFormat","YYYY"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,u=l.component;return"ionBlur"===n&&(t=!1!==a.Cb(l,140)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==a.Cb(l,140)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(u.yearlyReqModel.dateto=e)&&t),"ionChange"===n&&(t=!1!==u.onToYearlyUsageSelected(e)&&t),t}),y.S,y.m)),a.rb(140,16384,null,0,M.Pb,[a.k],null,null),a.Hb(1024,null,A.f,(function(l){return[l]}),[M.Pb]),a.rb(142,671744,null,0,A.k,[[8,null],[8,null],[8,null],[6,A.f]],{model:[0,"model"]},{update:"ngModelChange"}),a.Hb(2048,null,A.g,null,[A.k]),a.rb(144,16384,null,0,A.h,[[4,A.g]],null,null),a.rb(145,49152,null,0,M.v,[a.h,a.k,a.B],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"]},null),(l()(),a.sb(146,0,null,0,4,"ion-col",[["class","center-ver"],["size","auto"]],null,null,null,y.Q,y.k)),a.rb(147,49152,null,0,M.t,[a.h,a.k,a.B],{size:[0,"size"]},null),(l()(),a.sb(148,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.onViewYearlyDateClicked()&&a),a}),y.I,y.c)),a.rb(149,49152,null,0,M.k,[a.h,a.k,a.B],null,null),(l()(),a.Kb(-1,0,["View data"])),(l()(),a.jb(16777216,null,0,1,null,E)),a.rb(152,278528,null,0,v.k,[a.R,a.O,a.u],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,5,0,"primary"),l(n,16,0,"small"),l(n,18,0,"list-box"),l(n,22,0,e.selectedTab),l(n,25,0),l(n,43,0,e.dailyReqModel.datefrom),l(n,46,0,"DD MMM YYYY",a.ub(1,"",e.currentDate,""),a.ub(1,"",e.minDate,"")),l(n,56,0,e.dailyReqModel.dateto),l(n,59,0,"DD MMM YYYY",a.ub(1,"",e.currentDate,""),a.ub(1,"",e.minDate,"")),l(n,61,0,"auto"),l(n,66,0,e.arrDailyCharts),l(n,68,0),l(n,86,0,e.monthlyReqModel.datefrom),l(n,89,0,"MMM YYYY",a.ub(1,"",e.currentDate,""),a.ub(1,"",e.minDate,"")),l(n,99,0,e.monthlyReqModel.dateto),l(n,102,0,"MMM YYYY",a.ub(1,"",e.currentDate,""),a.ub(1,"",e.minDate,"")),l(n,104,0,"auto"),l(n,109,0,e.arrMonthlyCharts),l(n,111,0),l(n,129,0,e.yearlyReqModel.datefrom),l(n,132,0,"YYYY",a.ub(1,"",e.currentDate,""),a.ub(1,"",e.minDate,"")),l(n,142,0,e.yearlyReqModel.dateto),l(n,145,0,"YYYY",a.ub(1,"",e.currentDate,""),a.ub(1,"",e.minDate,"")),l(n,147,0,"auto"),l(n,152,0,e.arrYearlyCharts)}),(function(l,n){l(n,21,0,a.Cb(n,22).dynamicHeight,"below"===a.Cb(n,22).headerPosition),l(n,40,0,a.Cb(n,45).ngClassUntouched,a.Cb(n,45).ngClassTouched,a.Cb(n,45).ngClassPristine,a.Cb(n,45).ngClassDirty,a.Cb(n,45).ngClassValid,a.Cb(n,45).ngClassInvalid,a.Cb(n,45).ngClassPending),l(n,53,0,a.Cb(n,58).ngClassUntouched,a.Cb(n,58).ngClassTouched,a.Cb(n,58).ngClassPristine,a.Cb(n,58).ngClassDirty,a.Cb(n,58).ngClassValid,a.Cb(n,58).ngClassInvalid,a.Cb(n,58).ngClassPending),l(n,83,0,a.Cb(n,88).ngClassUntouched,a.Cb(n,88).ngClassTouched,a.Cb(n,88).ngClassPristine,a.Cb(n,88).ngClassDirty,a.Cb(n,88).ngClassValid,a.Cb(n,88).ngClassInvalid,a.Cb(n,88).ngClassPending),l(n,96,0,a.Cb(n,101).ngClassUntouched,a.Cb(n,101).ngClassTouched,a.Cb(n,101).ngClassPristine,a.Cb(n,101).ngClassDirty,a.Cb(n,101).ngClassValid,a.Cb(n,101).ngClassInvalid,a.Cb(n,101).ngClassPending),l(n,126,0,a.Cb(n,131).ngClassUntouched,a.Cb(n,131).ngClassTouched,a.Cb(n,131).ngClassPristine,a.Cb(n,131).ngClassDirty,a.Cb(n,131).ngClassValid,a.Cb(n,131).ngClassInvalid,a.Cb(n,131).ngClassPending),l(n,139,0,a.Cb(n,144).ngClassUntouched,a.Cb(n,144).ngClassTouched,a.Cb(n,144).ngClassPristine,a.Cb(n,144).ngClassDirty,a.Cb(n,144).ngClassValid,a.Cb(n,144).ngClassInvalid,a.Cb(n,144).ngClassPending)}))}function j(l){return a.Mb(0,[(l()(),a.sb(0,0,null,null,1,"impression",[],null,null,null,L,F)),a.rb(1,49152,null,0,T,[M.Gb,M.a,C.a,S.b,M.Ib,_.n],null,null)],null,null)}var H=a.ob("impression",T,j,{},{},[]),K=e("M2Lx"),V=e("t/Na"),N=e("lLAP"),U=e("dWZg"),z=e("OBdK"),W=e("9Bt9"),Z=e("qAlS"),Q=e("eDkP"),J=e("Fzqc"),G=e("4tE/"),X=e("Wf4p"),$=e("wmQ5"),ll=e("o3x0"),nl=e("jQLj"),el=e("mVsa"),al=e("uGex"),tl=e("v9Dh"),ul=e("ZYjt"),ol=e("4epT"),il=e("OkvK"),rl=e("Lwpp"),sl=e("y4qS"),dl=e("4c35"),bl=e("6Wmm"),cl=e("BgWK"),hl=e("UodH"),gl=e("u7R8"),ml=e("FVSy"),Cl=e("de3e"),yl=e("/dO6"),Ml=e("LC5p"),pl=e("YhbO"),fl=e("jlZm"),Al=e("r43C"),vl=e("/VYK"),kl=e("seP3"),Rl=e("b716"),Dl=e("0/Q6"),ql=e("Z+uX"),Bl=e("Blfk"),Yl=e("9It4"),Tl=e("Nsh5"),Sl=e("w+lc"),_l=e("kWGw"),Fl=e("vARd"),Pl=e("BHnd"),xl=e("8mMr"),Ol=e("J12g"),wl=e("PCNd"),Il=e("YSh2");e.d(n,"ImpressionPageModuleNgFactory",(function(){return El}));var El=a.pb(t,[],(function(l){return a.zb([a.Ab(512,a.j,a.eb,[[8,[u.a,o.a,i.b,i.a,r.a,s.a,s.b,d.a,b.a,H]],[3,a.j],a.z]),a.Ab(4608,v.n,v.m,[a.w,[2,v.w]]),a.Ab(4608,A.p,A.p,[]),a.Ab(4608,M.b,M.b,[a.B,a.g]),a.Ab(4608,M.Ib,M.Ib,[M.b,a.j,a.s]),a.Ab(4608,M.Nb,M.Nb,[M.b,a.j,a.s]),a.Ab(4608,K.c,K.c,[]),a.Ab(4608,V.h,V.n,[v.d,a.D,V.l]),a.Ab(4608,V.o,V.o,[V.h,V.m]),a.Ab(5120,V.a,(function(l){return[l]}),[V.o]),a.Ab(4608,V.k,V.k,[]),a.Ab(6144,V.i,null,[V.k]),a.Ab(4608,V.g,V.g,[V.i]),a.Ab(6144,V.b,null,[V.g]),a.Ab(4608,V.f,V.j,[V.b,a.s]),a.Ab(4608,V.c,V.c,[V.f]),a.Ab(135680,N.g,N.g,[a.B,U.a]),a.Ab(4608,z.e,z.e,[a.O]),a.Ab(4608,W.a,W.a,[v.d,a.B,Z.e,W.c]),a.Ab(4608,Q.a,Q.a,[Q.g,Q.c,a.j,Q.f,Q.d,a.s,a.B,v.d,J.b,[2,v.h]]),a.Ab(5120,Q.h,Q.i,[Q.a]),a.Ab(5120,G.a,G.b,[Q.a]),a.Ab(4608,X.d,X.d,[]),a.Ab(5120,$.b,$.a,[[3,$.b]]),a.Ab(5120,ll.b,ll.c,[Q.a]),a.Ab(135680,ll.d,ll.d,[Q.a,a.s,[2,v.h],[2,ll.a],ll.b,[3,ll.d],Q.c]),a.Ab(4608,nl.h,nl.h,[]),a.Ab(5120,nl.a,nl.b,[Q.a]),a.Ab(5120,el.a,el.c,[Q.a]),a.Ab(4608,X.c,X.t,[[2,X.h],U.a]),a.Ab(5120,al.a,al.b,[Q.a]),a.Ab(5120,tl.a,tl.b,[Q.a]),a.Ab(4608,ul.f,X.e,[[2,X.i],[2,X.l]]),a.Ab(5120,ol.b,ol.a,[[3,ol.b]]),a.Ab(5120,il.b,il.a,[[3,il.b]]),a.Ab(1073742336,v.c,v.c,[]),a.Ab(1073742336,A.n,A.n,[]),a.Ab(1073742336,A.c,A.c,[]),a.Ab(1073742336,M.Eb,M.Eb,[]),a.Ab(1073742336,U.b,U.b,[]),a.Ab(1073742336,K.d,K.d,[]),a.Ab(1073742336,N.a,N.a,[]),a.Ab(1073742336,V.e,V.e,[]),a.Ab(1073742336,V.d,V.d,[]),a.Ab(1073742336,J.a,J.a,[]),a.Ab(1073742336,rl.e,rl.e,[]),a.Ab(1073742336,sl.o,sl.o,[]),a.Ab(1073742336,z.c,z.c,[]),a.Ab(1073742336,W.b,W.b,[]),a.Ab(1073742336,X.l,X.l,[[2,X.f],[2,ul.g]]),a.Ab(1073742336,X.s,X.s,[]),a.Ab(1073742336,X.q,X.q,[]),a.Ab(1073742336,X.o,X.o,[]),a.Ab(1073742336,dl.g,dl.g,[]),a.Ab(1073742336,Z.c,Z.c,[]),a.Ab(1073742336,Q.e,Q.e,[]),a.Ab(1073742336,G.c,G.c,[]),a.Ab(1073742336,bl.a,bl.a,[]),a.Ab(1073742336,cl.c,cl.c,[]),a.Ab(1073742336,hl.c,hl.c,[]),a.Ab(1073742336,gl.a,gl.a,[]),a.Ab(1073742336,ml.a,ml.a,[]),a.Ab(1073742336,Cl.a,Cl.a,[]),a.Ab(1073742336,yl.b,yl.b,[]),a.Ab(1073742336,h.c,h.c,[]),a.Ab(1073742336,$.c,$.c,[]),a.Ab(1073742336,ll.g,ll.g,[]),a.Ab(1073742336,nl.i,nl.i,[]),a.Ab(1073742336,Ml.a,Ml.a,[]),a.Ab(1073742336,pl.c,pl.c,[]),a.Ab(1073742336,fl.a,fl.a,[]),a.Ab(1073742336,X.m,X.m,[]),a.Ab(1073742336,Al.a,Al.a,[]),a.Ab(1073742336,vl.b,vl.b,[]),a.Ab(1073742336,kl.a,kl.a,[]),a.Ab(1073742336,Rl.a,Rl.a,[]),a.Ab(1073742336,Dl.a,Dl.a,[]),a.Ab(1073742336,el.b,el.b,[]),a.Ab(1073742336,X.u,X.u,[]),a.Ab(1073742336,X.n,X.n,[]),a.Ab(1073742336,al.c,al.c,[]),a.Ab(1073742336,tl.c,tl.c,[]),a.Ab(1073742336,ol.c,ol.c,[]),a.Ab(1073742336,ql.a,ql.a,[]),a.Ab(1073742336,Bl.a,Bl.a,[]),a.Ab(1073742336,Yl.a,Yl.a,[]),a.Ab(1073742336,Tl.a,Tl.a,[]),a.Ab(1073742336,Sl.a,Sl.a,[]),a.Ab(1073742336,_l.a,_l.a,[]),a.Ab(1073742336,Fl.d,Fl.d,[]),a.Ab(1073742336,il.c,il.c,[]),a.Ab(1073742336,Pl.a,Pl.a,[]),a.Ab(1073742336,f.k,f.k,[]),a.Ab(1073742336,xl.a,xl.a,[]),a.Ab(1073742336,Ol.a,Ol.a,[]),a.Ab(1073742336,wl.a,wl.a,[]),a.Ab(1073742336,_.p,_.p,[[2,_.v],[2,_.n]]),a.Ab(1073742336,t,t,[]),a.Ab(256,V.l,"XSRF-TOKEN",[]),a.Ab(256,V.m,"X-XSRF-TOKEN",[]),a.Ab(256,yl.a,{separatorKeyCodes:[Il.f]},[]),a.Ab(256,X.g,X.j,[]),a.Ab(1024,_.l,(function(){return[[{path:"",component:T}]]}),[])])}))}}]);