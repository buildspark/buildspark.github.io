(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"7h28":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),a=function(){return function(){}}(),t=u("yWMr"),i=u("t68o"),o=u("zbXB"),r=u("NcP4"),b=u("xYTU"),s=u("pMnS"),c=u("oBZk"),d=u("ZZ/e"),g=u("Mr+X"),h=u("SMsm"),m=u("MO+k"),C=function(){function l(){}return l.prototype.ngOnInit=function(){console.log("CONSOLE: ",this.data),this.createBarChart(this.data)},l.prototype.createBarChart=function(l){var n=this.canvas.nativeElement;n.height=400,this.chart=new m.Chart(n,{type:"bar",data:{labels:JSON.parse(l.data).labels,datasets:JSON.parse(l.data).datasets},options:{scales:{xAxes:[{barPercentage:.9,gridLines:{offsetGridLines:!0},stacked:!0}],yAxes:[{ticks:{beginAtZero:!0},stacked:!0}]}}})},l.prototype.testChart=function(){var l=this.canvas.nativeElement;l.height=400,this.chart=new m.Chart(l,{type:"bar",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})},l}(),p=e.qb({encapsulation:0,styles:[[""]],data:{}});function f(l){return e.Lb(0,[e.Hb(402653184,1,{canvas:0}),(l()(),e.sb(1,0,null,null,13,"div",[],null,null,null,null,null)),(l()(),e.sb(2,0,null,null,12,"ion-card",[["class","welcome-card"]],null,null,null,c.M,c.d)),e.rb(3,49152,null,0,d.l,[e.h,e.k,e.B],null,null),(l()(),e.sb(4,0,null,0,7,"ion-card-header",[],null,null,null,c.J,c.f)),e.rb(5,49152,null,0,d.n,[e.h,e.k,e.B],null,null),(l()(),e.sb(6,0,null,0,2,"ion-card-subtitle",[],null,null,null,c.K,c.g)),e.rb(7,49152,null,0,d.o,[e.h,e.k,e.B],null,null),(l()(),e.Jb(-1,0,["Percentage of Usage Based On"])),(l()(),e.sb(9,0,null,0,2,"ion-card-title",[],null,null,null,c.L,c.h)),e.rb(10,49152,null,0,d.p,[e.h,e.k,e.B],null,null),(l()(),e.Jb(11,0,["",""])),(l()(),e.sb(12,0,null,0,2,"ion-card-content",[],null,null,null,c.I,c.e)),e.rb(13,49152,null,0,d.m,[e.h,e.k,e.B],null,null),(l()(),e.sb(14,0,[[1,0],["canvas",1]],0,0,"canvas",[],null,null,null,null,null))],null,function(l,n){l(n,11,0,n.component.data.device)})}var M=u("Ip0R"),y=u("gIcY"),A=u("Rlre"),D=u("La40"),v=u("Do2H"),Y=u("oztG"),k=u("/Ru3"),B=u("wd/R");u("AtBH");var x=function(){function l(l,n,u){var e=this;this.service=l,this.storage=n,this.loadingController=u,this.customActionSheetOptions={header:"Machines",subHeader:"Select the machine(s) you want to view"},this.arrMachines=[],this.arrSelectedMachines=[],this.selectedTab=0,this.deviceReqModel=new k.a(""),this.dailyReqModel=new k.c,this.monthlyReqModel=new k.c,this.yearlyReqModel=new k.c,this.currentDate=B().format("YYYY-MM-DD"),this.minDate=Y.a.c_MIN_DATE,this.fromDailyDate=B().format("YYYY-MM-DD"),this.toDailyDate=B().format("YYYY-MM-DD"),this.fromMonthlyDate=B().format("YYYY-MM-DD"),this.toMonthlyDate=B().format("YYYY-MM-DD"),this.fromYearlyDate=B().format("YYYY-MM-DD"),this.toYearlyDate=B().format("YYYY-MM-DD"),this.storage.get("accesstoken").then(function(l){e.accessToken=l,e.deviceReqModel.accesstoken=l,e.dailyReqModel.accesstoken=l,e.dailyReqModel.datefrom=e.standardDateTime(e.fromDailyDate),e.dailyReqModel.dateto=e.toDailyDate,e.monthlyReqModel.accesstoken=l,e.yearlyReqModel.accesstoken=l,e.service.getWebService(Y.a.k_GET_DEVICE,e.deviceReqModel,function(l){e.arrMachines=JSON.parse(l.data),e.arrSelectedMachines=Array.prototype.map.call(e.arrMachines,function(l){return l.value}),e.dailyReqModel.device=e.arrSelectedMachines.join(","),e.filter(Y.a.k_DAILY_USAGE,e.dailyReqModel)})})}return l.prototype.ionViewDidEnter=function(){},l.prototype.createHrzBarChart5=function(l){var n=this.hrzBarChart5.nativeElement;n.height=400,this.hrzBars5=new m.Chart(n,{type:"bar",data:{labels:l.labels,datasets:l.datasets},options:{scales:{xAxes:[{barPercentage:.9,gridLines:{offsetGridLines:!0},stacked:!0}],yAxes:[{ticks:{beginAtZero:!0},stacked:!0}]}}})},l.prototype.onFromDailyUsageSelected=function(l){Date.parse(this.fromDailyDate)>Date.parse(this.toDailyDate)&&(this.toDailyDate=this.fromDailyDate),this.dailyReqModel.datefrom=this.fromDailyDate,this.dailyReqModel.dateto=this.toDailyDate,this.filter(Y.a.k_DAILY_USAGE,this.dailyReqModel)},l.prototype.onToDailyUsageSelected=function(l){var n=Date.parse(this.fromDailyDate);Date.parse(this.toDailyDate)<n&&(this.fromDailyDate=this.toDailyDate),this.dailyReqModel.datefrom=this.fromDailyDate,this.dailyReqModel.dateto=this.toDailyDate,this.filter(Y.a.k_DAILY_USAGE,this.dailyReqModel)},l.prototype.filter=function(l,n){var u=this;this.service.callWebService(l,n,function(l){u.arrCharts=JSON.parse(l.data)})},l.prototype.selectMachine=function(){this.selectPop.open()},l.prototype.optionsFn=function(l){console.log("item: ",this.arrSelectedMachines),this.dailyReqModel.device=this.arrSelectedMachines.join(","),this.filter(Y.a.k_DAILY_USAGE,this.dailyReqModel)},l.prototype.random_rgb=function(){var l=Math.round,n=Math.random;return"rgb("+l(255*n())+","+l(255*n())+","+l(255*n())+","+n().toFixed(1)+")"},l.prototype.standardDateTime=function(l){return B(l).format("YYYY-MM-DD")},l}(),R=u("iw74"),_=e.qb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}p.text-center[_ngcontent-%COMP%]{text-align:center}.example-tab-icon[_ngcontent-%COMP%]{margin-right:8px}"]],data:{}});function j(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"ion-select-option",[],null,null,null,c.eb,c.A)),e.rb(1,49152,null,0,d.nb,[e.h,e.k,e.B],{value:[0,"value"]},null),(l()(),e.Jb(2,0,[""," "]))],function(l,n){l(n,1,0,e.ub(1,"",n.context.$implicit.value,""))},function(l,n){l(n,2,0,n.context.$implicit.name)})}function S(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"mat-icon",[["class","example-tab-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,g.b,g.a)),e.rb(1,9158656,null,0,h.b,[e.k,h.d,[8,null],[2,h.a]],null,null),(l()(),e.Jb(-1,0,["query_builder"])),(l()(),e.Jb(-1,null,[" Daily "]))],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,e.Cb(n,1).inline,"primary"!==e.Cb(n,1).color&&"accent"!==e.Cb(n,1).color&&"warn"!==e.Cb(n,1).color)})}function w(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"chart-canvas",[],null,null,null,f,p)),e.rb(1,114688,null,0,C,[],{data:[0,"data"]},null)],function(l,n){l(n,1,0,n.context.$implicit)},null)}function F(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,w)),e.rb(2,278528,null,0,M.j,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.arrCharts)},null)}function O(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"mat-icon",[["class","example-tab-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,g.b,g.a)),e.rb(1,9158656,null,0,h.b,[e.k,h.d,[8,null],[2,h.a]],null,null),(l()(),e.Jb(-1,0,["calendar_today"])),(l()(),e.Jb(-1,null,[" Monthly "]))],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,e.Cb(n,1).inline,"primary"!==e.Cb(n,1).color&&"accent"!==e.Cb(n,1).color&&"warn"!==e.Cb(n,1).color)})}function P(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"mat-icon",[["class","example-tab-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,g.b,g.a)),e.rb(1,9158656,null,0,h.b,[e.k,h.d,[8,null],[2,h.a]],null,null),(l()(),e.Jb(-1,0,["trending_up"])),(l()(),e.Jb(-1,null,[" Yearly "]))],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,e.Cb(n,1).inline,"primary"!==e.Cb(n,1).color&&"accent"!==e.Cb(n,1).color&&"warn"!==e.Cb(n,1).color)})}function G(l){return e.Lb(0,[e.Hb(402653184,1,{hrzBarChart5:0}),e.Hb(402653184,2,{selectPop:0}),(l()(),e.sb(2,0,null,null,16,"ion-header",[],null,null,null,c.S,c.n)),e.rb(3,49152,null,0,d.A,[e.h,e.k,e.B],null,null),(l()(),e.sb(4,0,null,0,14,"ion-toolbar",[["color","primary"]],null,null,null,c.jb,c.E)),e.rb(5,49152,null,0,d.Bb,[e.h,e.k,e.B],{color:[0,"color"]},null),(l()(),e.sb(6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.H,c.c)),e.rb(7,49152,null,0,d.k,[e.h,e.k,e.B],null,null),(l()(),e.sb(8,0,null,0,1,"ion-menu-button",[],null,null,null,c.ab,c.w)),e.rb(9,49152,null,0,d.Q,[e.h,e.k,e.B],null,null),(l()(),e.sb(10,0,null,0,2,"ion-title",[],null,null,null,c.ib,c.D)),e.rb(11,49152,null,0,d.zb,[e.h,e.k,e.B],null,null),(l()(),e.Jb(-1,0,[" Usage "])),(l()(),e.sb(13,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,c.H,c.c)),e.rb(14,49152,null,0,d.k,[e.h,e.k,e.B],null,null),(l()(),e.sb(15,0,null,0,3,"ion-fab-button",[["size","small"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.selectMachine()&&e),e},c.Q,c.l)),e.rb(16,49152,null,0,d.w,[e.h,e.k,e.B],{size:[0,"size"]},null),(l()(),e.sb(17,0,null,0,1,"ion-icon",[["name","list-box"]],null,null,null,c.T,c.o)),e.rb(18,49152,null,0,d.B,[e.h,e.k,e.B],{name:[0,"name"]},null),(l()(),e.sb(19,0,null,null,8,"ion-select",[["cancelText","Cancel"],["multiple","true"],["okText","Select"]],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var a=!0,t=l.component;return"ionBlur"===n&&(a=!1!==e.Cb(l,20)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Cb(l,20)._handleChangeEvent(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.arrSelectedMachines=u)&&a),"ionChange"===n&&(a=!1!==t.optionsFn(u)&&a),a},c.fb,c.z)),e.rb(20,16384,null,0,d.Mb,[e.k],null,null),e.Gb(1024,null,y.e,function(l){return[l]},[d.Mb]),e.rb(22,671744,null,0,y.j,[[8,null],[8,null],[8,null],[6,y.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,y.f,null,[y.j]),e.rb(24,16384,null,0,y.g,[[4,y.f]],null,null),e.rb(25,49152,[[2,4],["popSelect",4]],0,d.mb,[e.h,e.k,e.B],{cancelText:[0,"cancelText"],interfaceOptions:[1,"interfaceOptions"],multiple:[2,"multiple"],okText:[3,"okText"]},null),(l()(),e.jb(16777216,null,0,1,null,j)),e.rb(27,278528,null,0,M.j,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.sb(28,0,null,null,116,"ion-content",[],null,null,null,c.O,c.j)),e.rb(29,49152,null,0,d.t,[e.h,e.k,e.B],null,null),(l()(),e.sb(30,0,null,0,114,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,A.c,A.b)),e.rb(31,3325952,null,1,D.f,[e.k,e.h,[2,D.a]],{selectedIndex:[0,"selectedIndex"]},null),e.Hb(603979776,3,{_tabs:1}),(l()(),e.sb(33,16777216,null,null,37,"mat-tab",[],null,null,null,A.d,A.a)),e.rb(34,770048,[[3,4]],2,D.c,[e.R],null,null),e.Hb(335544320,4,{templateLabel:0}),e.Hb(335544320,5,{_explicitContent:0}),(l()(),e.jb(16777216,null,0,1,null,S)),e.rb(38,16384,[[4,4]],0,D.h,[e.O,e.R],null,null),(l()(),e.sb(39,0,null,0,29,"ion-grid",[],null,null,null,c.R,c.m)),e.rb(40,49152,null,0,d.z,[e.h,e.k,e.B],null,null),(l()(),e.sb(41,0,null,0,27,"ion-row",[],null,null,null,c.db,c.y)),e.rb(42,49152,null,0,d.ib,[e.h,e.k,e.B],null,null),(l()(),e.sb(43,0,null,0,12,"ion-col",[],null,null,null,c.N,c.i)),e.rb(44,49152,null,0,d.s,[e.h,e.k,e.B],null,null),(l()(),e.sb(45,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" From "])),(l()(),e.sb(47,0,null,null,8,"ion-item",[],null,null,null,c.W,c.r)),e.rb(48,49152,null,0,d.G,[e.h,e.k,e.B],null,null),(l()(),e.sb(49,0,null,0,6,"ion-datetime",[["displayFormat","DD MMM YYYY"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var a=!0,t=l.component;return"ionBlur"===n&&(a=!1!==e.Cb(l,50)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Cb(l,50)._handleChangeEvent(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.fromDailyDate=u)&&a),"ionChange"===n&&(a=!1!==t.onFromDailyUsageSelected(u)&&a),a},c.P,c.k)),e.rb(50,16384,null,0,d.Mb,[e.k],null,null),e.Gb(1024,null,y.e,function(l){return[l]},[d.Mb]),e.rb(52,671744,null,0,y.j,[[8,null],[8,null],[8,null],[6,y.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,y.f,null,[y.j]),e.rb(54,16384,null,0,y.g,[[4,y.f]],null,null),e.rb(55,49152,null,0,d.u,[e.h,e.k,e.B],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"]},null),(l()(),e.sb(56,0,null,0,12,"ion-col",[],null,null,null,c.N,c.i)),e.rb(57,49152,null,0,d.s,[e.h,e.k,e.B],null,null),(l()(),e.sb(58,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" To "])),(l()(),e.sb(60,0,null,null,8,"ion-item",[],null,null,null,c.W,c.r)),e.rb(61,49152,null,0,d.G,[e.h,e.k,e.B],null,null),(l()(),e.sb(62,0,null,0,6,"ion-datetime",[["displayFormat","DD MMM YYYY"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var a=!0,t=l.component;return"ionBlur"===n&&(a=!1!==e.Cb(l,63)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Cb(l,63)._handleChangeEvent(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.toDailyDate=u)&&a),"ionChange"===n&&(a=!1!==t.onToDailyUsageSelected(u)&&a),a},c.P,c.k)),e.rb(63,16384,null,0,d.Mb,[e.k],null,null),e.Gb(1024,null,y.e,function(l){return[l]},[d.Mb]),e.rb(65,671744,null,0,y.j,[[8,null],[8,null],[8,null],[6,y.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,y.f,null,[y.j]),e.rb(67,16384,null,0,y.g,[[4,y.f]],null,null),e.rb(68,49152,null,0,d.u,[e.h,e.k,e.B],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"]},null),(l()(),e.jb(16777216,null,0,1,null,F)),e.rb(70,16384,null,0,M.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(71,16777216,null,null,36,"mat-tab",[],null,null,null,A.d,A.a)),e.rb(72,770048,[[3,4]],2,D.c,[e.R],null,null),e.Hb(335544320,6,{templateLabel:0}),e.Hb(335544320,7,{_explicitContent:0}),(l()(),e.jb(16777216,null,0,1,null,O)),e.rb(76,16384,[[6,4]],0,D.h,[e.O,e.R],null,null),(l()(),e.sb(77,0,null,0,29,"ion-grid",[],null,null,null,c.R,c.m)),e.rb(78,49152,null,0,d.z,[e.h,e.k,e.B],null,null),(l()(),e.sb(79,0,null,0,27,"ion-row",[],null,null,null,c.db,c.y)),e.rb(80,49152,null,0,d.ib,[e.h,e.k,e.B],null,null),(l()(),e.sb(81,0,null,0,12,"ion-col",[],null,null,null,c.N,c.i)),e.rb(82,49152,null,0,d.s,[e.h,e.k,e.B],null,null),(l()(),e.sb(83,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" From "])),(l()(),e.sb(85,0,null,null,8,"ion-item",[],null,null,null,c.W,c.r)),e.rb(86,49152,null,0,d.G,[e.h,e.k,e.B],null,null),(l()(),e.sb(87,0,null,0,6,"ion-datetime",[["displayFormat","MMM YYYY"],["min","2019-01-01"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var a=!0,t=l.component;return"ionBlur"===n&&(a=!1!==e.Cb(l,88)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Cb(l,88)._handleChangeEvent(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.fromMonthlyDate=u)&&a),a},c.P,c.k)),e.rb(88,16384,null,0,d.Mb,[e.k],null,null),e.Gb(1024,null,y.e,function(l){return[l]},[d.Mb]),e.rb(90,671744,null,0,y.j,[[8,null],[8,null],[8,null],[6,y.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,y.f,null,[y.j]),e.rb(92,16384,null,0,y.g,[[4,y.f]],null,null),e.rb(93,49152,null,0,d.u,[e.h,e.k,e.B],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"],value:[3,"value"]},null),(l()(),e.sb(94,0,null,0,12,"ion-col",[],null,null,null,c.N,c.i)),e.rb(95,49152,null,0,d.s,[e.h,e.k,e.B],null,null),(l()(),e.sb(96,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" To "])),(l()(),e.sb(98,0,null,null,8,"ion-item",[],null,null,null,c.W,c.r)),e.rb(99,49152,null,0,d.G,[e.h,e.k,e.B],null,null),(l()(),e.sb(100,0,null,0,6,"ion-datetime",[["displayFormat","MMM YYYY"],["min","2019-01-01"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var a=!0,t=l.component;return"ionBlur"===n&&(a=!1!==e.Cb(l,101)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Cb(l,101)._handleChangeEvent(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.toMonthlyDate=u)&&a),a},c.P,c.k)),e.rb(101,16384,null,0,d.Mb,[e.k],null,null),e.Gb(1024,null,y.e,function(l){return[l]},[d.Mb]),e.rb(103,671744,null,0,y.j,[[8,null],[8,null],[8,null],[6,y.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,y.f,null,[y.j]),e.rb(105,16384,null,0,y.g,[[4,y.f]],null,null),e.rb(106,49152,null,0,d.u,[e.h,e.k,e.B],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"],value:[3,"value"]},null),(l()(),e.Jb(-1,0,[" Content 2 "])),(l()(),e.sb(108,16777216,null,null,36,"mat-tab",[],null,null,null,A.d,A.a)),e.rb(109,770048,[[3,4]],2,D.c,[e.R],null,null),e.Hb(335544320,8,{templateLabel:0}),e.Hb(335544320,9,{_explicitContent:0}),(l()(),e.jb(16777216,null,0,1,null,P)),e.rb(113,16384,[[8,4]],0,D.h,[e.O,e.R],null,null),(l()(),e.sb(114,0,null,0,29,"ion-grid",[],null,null,null,c.R,c.m)),e.rb(115,49152,null,0,d.z,[e.h,e.k,e.B],null,null),(l()(),e.sb(116,0,null,0,27,"ion-row",[],null,null,null,c.db,c.y)),e.rb(117,49152,null,0,d.ib,[e.h,e.k,e.B],null,null),(l()(),e.sb(118,0,null,0,12,"ion-col",[],null,null,null,c.N,c.i)),e.rb(119,49152,null,0,d.s,[e.h,e.k,e.B],null,null),(l()(),e.sb(120,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" From "])),(l()(),e.sb(122,0,null,null,8,"ion-item",[],null,null,null,c.W,c.r)),e.rb(123,49152,null,0,d.G,[e.h,e.k,e.B],null,null),(l()(),e.sb(124,0,null,0,6,"ion-datetime",[["displayFormat","YYYY"],["min","2019-01-01"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var a=!0,t=l.component;return"ionBlur"===n&&(a=!1!==e.Cb(l,125)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Cb(l,125)._handleChangeEvent(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.fromYearlyDate=u)&&a),a},c.P,c.k)),e.rb(125,16384,null,0,d.Mb,[e.k],null,null),e.Gb(1024,null,y.e,function(l){return[l]},[d.Mb]),e.rb(127,671744,null,0,y.j,[[8,null],[8,null],[8,null],[6,y.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,y.f,null,[y.j]),e.rb(129,16384,null,0,y.g,[[4,y.f]],null,null),e.rb(130,49152,null,0,d.u,[e.h,e.k,e.B],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"],value:[3,"value"]},null),(l()(),e.sb(131,0,null,0,12,"ion-col",[],null,null,null,c.N,c.i)),e.rb(132,49152,null,0,d.s,[e.h,e.k,e.B],null,null),(l()(),e.sb(133,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" To "])),(l()(),e.sb(135,0,null,null,8,"ion-item",[],null,null,null,c.W,c.r)),e.rb(136,49152,null,0,d.G,[e.h,e.k,e.B],null,null),(l()(),e.sb(137,0,null,0,6,"ion-datetime",[["displayFormat","YYYY"],["min","2019-01-01"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var a=!0,t=l.component;return"ionBlur"===n&&(a=!1!==e.Cb(l,138)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Cb(l,138)._handleChangeEvent(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.toYearlyDate=u)&&a),a},c.P,c.k)),e.rb(138,16384,null,0,d.Mb,[e.k],null,null),e.Gb(1024,null,y.e,function(l){return[l]},[d.Mb]),e.rb(140,671744,null,0,y.j,[[8,null],[8,null],[8,null],[6,y.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,y.f,null,[y.j]),e.rb(142,16384,null,0,y.g,[[4,y.f]],null,null),e.rb(143,49152,null,0,d.u,[e.h,e.k,e.B],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"],value:[3,"value"]},null),(l()(),e.Jb(-1,0,[" Content 3 "]))],function(l,n){var u=n.component;l(n,5,0,"primary"),l(n,16,0,"small"),l(n,18,0,"list-box"),l(n,22,0,u.arrSelectedMachines),l(n,25,0,"Cancel",u.customActionSheetOptions,"true","Select"),l(n,27,0,u.arrMachines),l(n,31,0,u.selectedTab),l(n,34,0),l(n,52,0,u.fromDailyDate),l(n,55,0,"DD MMM YYYY",e.ub(1,"",u.currentDate,""),e.ub(1,"",u.minDate,"")),l(n,65,0,u.toDailyDate),l(n,68,0,"DD MMM YYYY",e.ub(1,"",u.currentDate,""),e.ub(1,"",u.minDate,"")),l(n,70,0,null!==u.deviceData),l(n,72,0),l(n,90,0,u.fromMonthlyDate),l(n,93,0,"MMM YYYY",e.ub(1,"",u.currentDate,""),"2019-01-01",e.ub(1,"",u.currentDate,"")),l(n,103,0,u.toMonthlyDate),l(n,106,0,"MMM YYYY",e.ub(1,"",u.currentDate,""),"2019-01-01",e.ub(1,"",u.currentDate,"")),l(n,109,0),l(n,127,0,u.fromYearlyDate),l(n,130,0,"YYYY",e.ub(1,"",u.currentDate,""),"2019-01-01",e.ub(1,"",u.currentDate,"")),l(n,140,0,u.toYearlyDate),l(n,143,0,"YYYY",e.ub(1,"",u.currentDate,""),"2019-01-01",e.ub(1,"",u.currentDate,""))},function(l,n){l(n,19,0,!0,e.Cb(n,24).ngClassUntouched,e.Cb(n,24).ngClassTouched,e.Cb(n,24).ngClassPristine,e.Cb(n,24).ngClassDirty,e.Cb(n,24).ngClassValid,e.Cb(n,24).ngClassInvalid,e.Cb(n,24).ngClassPending),l(n,30,0,e.Cb(n,31).dynamicHeight,"below"===e.Cb(n,31).headerPosition),l(n,49,0,e.Cb(n,54).ngClassUntouched,e.Cb(n,54).ngClassTouched,e.Cb(n,54).ngClassPristine,e.Cb(n,54).ngClassDirty,e.Cb(n,54).ngClassValid,e.Cb(n,54).ngClassInvalid,e.Cb(n,54).ngClassPending),l(n,62,0,e.Cb(n,67).ngClassUntouched,e.Cb(n,67).ngClassTouched,e.Cb(n,67).ngClassPristine,e.Cb(n,67).ngClassDirty,e.Cb(n,67).ngClassValid,e.Cb(n,67).ngClassInvalid,e.Cb(n,67).ngClassPending),l(n,87,0,e.Cb(n,92).ngClassUntouched,e.Cb(n,92).ngClassTouched,e.Cb(n,92).ngClassPristine,e.Cb(n,92).ngClassDirty,e.Cb(n,92).ngClassValid,e.Cb(n,92).ngClassInvalid,e.Cb(n,92).ngClassPending),l(n,100,0,e.Cb(n,105).ngClassUntouched,e.Cb(n,105).ngClassTouched,e.Cb(n,105).ngClassPristine,e.Cb(n,105).ngClassDirty,e.Cb(n,105).ngClassValid,e.Cb(n,105).ngClassInvalid,e.Cb(n,105).ngClassPending),l(n,124,0,e.Cb(n,129).ngClassUntouched,e.Cb(n,129).ngClassTouched,e.Cb(n,129).ngClassPristine,e.Cb(n,129).ngClassDirty,e.Cb(n,129).ngClassValid,e.Cb(n,129).ngClassInvalid,e.Cb(n,129).ngClassPending),l(n,137,0,e.Cb(n,142).ngClassUntouched,e.Cb(n,142).ngClassTouched,e.Cb(n,142).ngClassPristine,e.Cb(n,142).ngClassDirty,e.Cb(n,142).ngClassValid,e.Cb(n,142).ngClassInvalid,e.Cb(n,142).ngClassPending)})}function E(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"app-usage",[],null,null,null,G,_)),e.rb(1,49152,null,0,x,[v.a,R.b,d.Fb],null,null)],null,null)}var T=e.ob("app-usage",x,E,{},{},[]),q=u("M2Lx"),L=u("t/Na"),J=u("lLAP"),I=u("dWZg"),H=u("OBdK"),U=u("9Bt9"),N=u("qAlS"),z=u("eDkP"),W=u("Fzqc"),V=u("4tE/"),Z=u("Wf4p"),K=u("wmQ5"),X=u("o3x0"),Q=u("jQLj"),$=u("mVsa"),ll=u("uGex"),nl=u("v9Dh"),ul=u("ZYjt"),el=u("4epT"),al=u("OkvK"),tl=u("Lwpp"),il=u("y4qS"),ol=u("4c35"),rl=u("6Wmm"),bl=u("BgWK"),sl=u("UodH"),cl=u("u7R8"),dl=u("FVSy"),gl=u("de3e"),hl=u("/dO6"),ml=u("LC5p"),Cl=u("YhbO"),pl=u("jlZm"),fl=u("r43C"),Ml=u("/VYK"),yl=u("seP3"),Al=u("b716"),Dl=u("0/Q6"),vl=u("Z+uX"),Yl=u("Blfk"),kl=u("9It4"),Bl=u("Nsh5"),xl=u("w+lc"),Rl=u("kWGw"),_l=u("vARd"),jl=u("BHnd"),Sl=u("8mMr"),wl=u("J12g"),Fl=u("ZYCi"),Ol=u("YSh2");u.d(n,"UsagePageModuleNgFactory",function(){return Pl});var Pl=e.pb(a,[],function(l){return e.zb([e.Ab(512,e.j,e.eb,[[8,[t.a,i.a,o.b,o.a,r.a,b.a,b.b,s.a,T]],[3,e.j],e.z]),e.Ab(4608,M.m,M.l,[e.w,[2,M.v]]),e.Ab(4608,y.n,y.n,[]),e.Ab(4608,d.b,d.b,[e.B,e.g]),e.Ab(4608,d.Hb,d.Hb,[d.b,e.j,e.s]),e.Ab(4608,d.Kb,d.Kb,[d.b,e.j,e.s]),e.Ab(4608,q.c,q.c,[]),e.Ab(4608,L.h,L.n,[M.d,e.D,L.l]),e.Ab(4608,L.o,L.o,[L.h,L.m]),e.Ab(5120,L.a,function(l){return[l]},[L.o]),e.Ab(4608,L.k,L.k,[]),e.Ab(6144,L.i,null,[L.k]),e.Ab(4608,L.g,L.g,[L.i]),e.Ab(6144,L.b,null,[L.g]),e.Ab(4608,L.f,L.j,[L.b,e.s]),e.Ab(4608,L.c,L.c,[L.f]),e.Ab(135680,J.g,J.g,[e.B,I.a]),e.Ab(4608,H.e,H.e,[e.O]),e.Ab(4608,U.a,U.a,[M.d,e.B,N.e,U.c]),e.Ab(4608,z.a,z.a,[z.g,z.c,e.j,z.f,z.d,e.s,e.B,M.d,W.b,[2,M.g]]),e.Ab(5120,z.h,z.i,[z.a]),e.Ab(5120,V.a,V.b,[z.a]),e.Ab(4608,Z.d,Z.d,[]),e.Ab(5120,K.b,K.a,[[3,K.b]]),e.Ab(5120,X.b,X.c,[z.a]),e.Ab(135680,X.d,X.d,[z.a,e.s,[2,M.g],[2,X.a],X.b,[3,X.d],z.c]),e.Ab(4608,Q.h,Q.h,[]),e.Ab(5120,Q.a,Q.b,[z.a]),e.Ab(5120,$.a,$.c,[z.a]),e.Ab(4608,Z.c,Z.t,[[2,Z.h],I.a]),e.Ab(5120,ll.a,ll.b,[z.a]),e.Ab(5120,nl.a,nl.b,[z.a]),e.Ab(4608,ul.f,Z.e,[[2,Z.i],[2,Z.l]]),e.Ab(5120,el.b,el.a,[[3,el.b]]),e.Ab(5120,al.b,al.a,[[3,al.b]]),e.Ab(1073742336,M.c,M.c,[]),e.Ab(1073742336,y.l,y.l,[]),e.Ab(1073742336,y.c,y.c,[]),e.Ab(1073742336,d.Db,d.Db,[]),e.Ab(1073742336,I.b,I.b,[]),e.Ab(1073742336,q.d,q.d,[]),e.Ab(1073742336,J.a,J.a,[]),e.Ab(1073742336,L.e,L.e,[]),e.Ab(1073742336,L.d,L.d,[]),e.Ab(1073742336,W.a,W.a,[]),e.Ab(1073742336,tl.e,tl.e,[]),e.Ab(1073742336,il.o,il.o,[]),e.Ab(1073742336,H.c,H.c,[]),e.Ab(1073742336,U.b,U.b,[]),e.Ab(1073742336,Z.l,Z.l,[[2,Z.f],[2,ul.g]]),e.Ab(1073742336,Z.s,Z.s,[]),e.Ab(1073742336,Z.q,Z.q,[]),e.Ab(1073742336,Z.o,Z.o,[]),e.Ab(1073742336,ol.g,ol.g,[]),e.Ab(1073742336,N.c,N.c,[]),e.Ab(1073742336,z.e,z.e,[]),e.Ab(1073742336,V.c,V.c,[]),e.Ab(1073742336,rl.a,rl.a,[]),e.Ab(1073742336,bl.c,bl.c,[]),e.Ab(1073742336,sl.c,sl.c,[]),e.Ab(1073742336,cl.a,cl.a,[]),e.Ab(1073742336,dl.a,dl.a,[]),e.Ab(1073742336,gl.a,gl.a,[]),e.Ab(1073742336,hl.b,hl.b,[]),e.Ab(1073742336,h.c,h.c,[]),e.Ab(1073742336,K.c,K.c,[]),e.Ab(1073742336,X.g,X.g,[]),e.Ab(1073742336,Q.i,Q.i,[]),e.Ab(1073742336,ml.a,ml.a,[]),e.Ab(1073742336,Cl.c,Cl.c,[]),e.Ab(1073742336,pl.a,pl.a,[]),e.Ab(1073742336,Z.m,Z.m,[]),e.Ab(1073742336,fl.a,fl.a,[]),e.Ab(1073742336,Ml.b,Ml.b,[]),e.Ab(1073742336,yl.a,yl.a,[]),e.Ab(1073742336,Al.a,Al.a,[]),e.Ab(1073742336,Dl.a,Dl.a,[]),e.Ab(1073742336,$.b,$.b,[]),e.Ab(1073742336,Z.u,Z.u,[]),e.Ab(1073742336,Z.n,Z.n,[]),e.Ab(1073742336,ll.c,ll.c,[]),e.Ab(1073742336,nl.c,nl.c,[]),e.Ab(1073742336,el.c,el.c,[]),e.Ab(1073742336,vl.a,vl.a,[]),e.Ab(1073742336,Yl.a,Yl.a,[]),e.Ab(1073742336,kl.a,kl.a,[]),e.Ab(1073742336,Bl.a,Bl.a,[]),e.Ab(1073742336,xl.a,xl.a,[]),e.Ab(1073742336,Rl.a,Rl.a,[]),e.Ab(1073742336,_l.d,_l.d,[]),e.Ab(1073742336,al.c,al.c,[]),e.Ab(1073742336,jl.a,jl.a,[]),e.Ab(1073742336,D.k,D.k,[]),e.Ab(1073742336,Sl.a,Sl.a,[]),e.Ab(1073742336,wl.a,wl.a,[]),e.Ab(1073742336,Fl.o,Fl.o,[[2,Fl.u],[2,Fl.m]]),e.Ab(1073742336,a,a,[]),e.Ab(256,L.l,"XSRF-TOKEN",[]),e.Ab(256,L.m,"X-XSRF-TOKEN",[]),e.Ab(256,hl.a,{separatorKeyCodes:[Ol.f]},[]),e.Ab(256,Z.g,Z.j,[]),e.Ab(1024,Fl.k,function(){return[[{path:"",component:x}]]},[])])})}}]);