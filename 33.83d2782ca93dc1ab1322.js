(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"4c6p":function(l,e,n){"use strict";n.r(e);var t=n("CcnG"),a=function(){return function(){}}(),o=n("yWMr"),i=n("t68o"),r=n("zbXB"),u=n("NcP4"),s=n("xYTU"),b=n("gMwT"),c=n("pMnS"),d=n("Mr+X"),h=n("SMsm"),p=n("9zIK"),m=n("gQxg"),A=n("oBZk"),g=n("ZZ/e"),y=n("Rlre"),M=n("La40"),f=n("gIcY"),R=n("Ip0R"),C=n("mrSG"),k=n("Do2H"),q=n("oztG"),w=n("/Ru3"),D=n("wd/R"),v=n("VNr4"),T=n("OFIl");n("AtBH");var Y=function(){function l(l,e,n,t,a,o){var i=this;this.service=l,this.storage=e,this.loadingController=n,this.modalController=t,this.router=a,this.route=o,this.strChartTitle="",this.arrDailyCharts=[],this.arrMonthlyCharts=[],this.arrYearlyCharts=[],this.customActionSheetOptions={header:"Machines",subHeader:"Select the machine(s) you want to view"},this.arrDept=[],this.selectedTab=0,this.accessToken="",this.deptReqModel=new w.a,this.wipReqModel=new w.g(1),this.monthlyReqModel=new w.f,this.yearlyReqModel=new w.f,this.emailReqModel=new w.c(1),this.currentDate=D().format("YYYY-MM-DD"),this.yesterdayDate=D().add(-1,"days").format("YYYY-MM-DD"),this.minDate=q.a.c_MIN_DATE_2020,this.checkBoxList=[],this.strChartTitle=this.router.url.replace(/[^a-zA-Z0-9 ]/g,""),this.storage.get("accesstoken").then(function(l){i.accessToken=l,i.deptReqModel.accesstoken=l,i.emailReqModel.accesstoken=l}),this.route.snapshot.data.special&&(this.wipReqModel=this.route.snapshot.data.special,console.log("GET DATA FROM PROCESS: ",JSON.stringify([this.wipReqModel])),this.emailReqModel.date=this.wipReqModel.date,this.emailReqModel.dept=this.wipReqModel.dept,this.emailReqModel.process=this.wipReqModel.process,this.callWSToReloadPagesData())}return l.prototype.ngOnInit=function(){},l.prototype.ionViewDidEnter=function(){},l.prototype.callWSToReloadPagesData=function(){var l=this.filter(q.a.k_HOURLY_WIP_OUTPUT,this.wipReqModel);return Object(v.a)([l])},l.prototype.onWipHourlySelected=function(l){},l.prototype.onFromMonthlyUsageSelected=function(l){Date.parse(this.monthlyReqModel.datefrom)>Date.parse(this.monthlyReqModel.dateto)&&(this.monthlyReqModel.dateto=this.monthlyReqModel.datefrom)},l.prototype.onToMonthlyUsageSelected=function(l){var e=Date.parse(this.monthlyReqModel.datefrom);Date.parse(this.monthlyReqModel.dateto)<e&&(this.monthlyReqModel.datefrom=this.monthlyReqModel.dateto)},l.prototype.onFromYearlyUsageSelected=function(l){Date.parse(this.yearlyReqModel.datefrom)>Date.parse(this.yearlyReqModel.dateto)&&(this.yearlyReqModel.dateto=this.yearlyReqModel.datefrom)},l.prototype.onToYearlyUsageSelected=function(l){var e=Date.parse(this.yearlyReqModel.datefrom);Date.parse(this.yearlyReqModel.dateto)<e&&(this.yearlyReqModel.datefrom=this.yearlyReqModel.dateto)},l.prototype.filter=function(l,e,n){var t=this;this.service.callWebService(l,e,function(e){switch(l){case q.a.k_HOURLY_WIP_OUTPUT:t.arrDailyCharts=JSON.parse(e.data);break;case q.a.k_MONTHLY_IMP:t.arrMonthlyCharts=JSON.parse(e.data);break;case q.a.k_YEARLY_IMP:t.arrYearlyCharts=JSON.parse(e.data)}})},l.prototype.selectMachine=function(){this.presentModal()},l.prototype.optionsFn=function(){this.monthlyReqModel.device=this.wipReqModel.dept.join(","),this.yearlyReqModel.device=this.wipReqModel.dept.join(","),this.callWSToReloadPagesData()},l.prototype.onTabChanged=function(l){console.log("tabChangeEvent => ",l),console.log("index => ",l.index)},l.prototype.onViewWIPDateClicked=function(){this.wipReqModel.date=this.standardDateTime(this.wipReqModel.date),this.filter(q.a.k_HOURLY_WIP_OUTPUT,this.wipReqModel)},l.prototype.onViewMonthlyDateClicked=function(){this.monthlyReqModel.datefrom=this.standardDateTime(this.monthlyReqModel.datefrom),this.monthlyReqModel.dateto=this.standardDateTime(this.monthlyReqModel.dateto),this.filter(q.a.k_MONTHLY_IMP,this.monthlyReqModel)},l.prototype.onViewYearlyDateClicked=function(){this.yearlyReqModel.datefrom=this.standardDateTime(this.yearlyReqModel.datefrom),this.yearlyReqModel.dateto=this.standardDateTime(this.yearlyReqModel.dateto),this.filter(q.a.k_YEARLY_IMP,this.yearlyReqModel)},l.prototype.random_rgb=function(){var l=Math.round,e=Math.random;return"rgb("+l(255*e())+","+l(255*e())+","+l(255*e())+","+e().toFixed(1)+")"},l.prototype.standardDateTime=function(l){return D(l).format("YYYY-MM-DD")},l.prototype.presentModal=function(){return C.b(this,void 0,void 0,function(){var l,e=this;return C.e(this,function(n){switch(n.label){case 0:return[4,this.modalController.create({component:T.a,componentProps:{checkBoxList:this.checkBoxList,paramTitle:"Select Department"}})];case 1:return(l=n.sent()).onDidDismiss().then(function(l){null!==l&&void 0!==l.data&&(e.wipReqModel.dept=[],l.data.forEach(function(l){l.isChecked&&e.wipReqModel.dept.push(l.machine.value)}),console.log("--- Modal SELECTED Data: ",e.wipReqModel.dept),e.optionsFn())}),[4,l.present()];case 2:return[2,n.sent()]}})})},l.prototype.onClicked=function(){console.log("BACK")},l.prototype.exportEmail=function(){var l=this;this.service.presentAlert("Export Email","Please insert the email you want to export to.",[{name:"email",type:"email",placeholder:"Recipient email here"}],function(e){console.log("hi, ai am here: ",e.data.values.email),l.emailReqModel.email=e.data.values.email,l.emailReqModel.date=l.wipReqModel.date,l.service.callWebService(q.a.k_POST_EMAIL,l.emailReqModel,function(e){console.log("ressssss email done: ",e),l.service.presentAlert("Export Email","Done exporting csv file to "+l.emailReqModel.email)})})},l}(),O=n("iw74"),B=n("ZYCi"),P=t.qb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}p.text-center[_ngcontent-%COMP%]{text-align:center}.example-tab-icon[_ngcontent-%COMP%]{margin-right:8px}.vertical-align-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:-webkit-box!important;display:flex!important;align-content:center!important;-webkit-box-align:center!important;align-items:center!important}"]],data:{}});function _(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,2,"mat-icon",[["class","example-tab-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,d.b,d.a)),t.rb(1,9158656,null,0,h.b,[t.k,h.d,[8,null],[2,h.a]],null,null),(l()(),t.Jb(-1,0,["query_builder"])),(l()(),t.Jb(-1,null,[" Hourly "]))],function(l,e){l(e,1,0)},function(l,e){l(e,0,0,t.Cb(e,1).inline,"primary"!==t.Cb(e,1).color&&"accent"!==t.Cb(e,1).color&&"warn"!==t.Cb(e,1).color)})}function x(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"chart-canvas",[],null,null,null,p.b,p.a)),t.rb(1,114688,null,0,m.a,[],{data:[0,"data"],title:[1,"title"]},null)],function(l,e){l(e,1,0,e.context.$implicit,e.component.strChartTitle)},null)}function S(l){return t.Lb(0,[t.Hb(402653184,1,{tabGroup:0}),t.Hb(402653184,2,{selectPop:0}),(l()(),t.sb(2,0,null,null,17,"ion-header",[],null,null,null,A.X,A.q)),t.rb(3,49152,null,0,g.C,[t.h,t.k,t.B],null,null),(l()(),t.sb(4,0,null,0,15,"ion-toolbar",[["color","primary"]],null,null,null,A.nb,A.G)),t.rb(5,49152,null,0,g.Db,[t.h,t.k,t.B],{color:[0,"color"]},null),(l()(),t.sb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,A.K,A.d)),t.rb(7,49152,null,0,g.m,[t.h,t.k,t.B],null,null),(l()(),t.sb(8,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,e,n){var a=!0;return"click"===e&&(a=!1!==t.Cb(l,10).onClick(n)&&a),a},A.I,A.b)),t.rb(9,49152,null,0,g.h,[t.h,t.k,t.B],null,null),t.rb(10,16384,null,0,g.i,[[2,g.jb],g.Kb],null,null),(l()(),t.sb(11,0,null,0,2,"ion-title",[],null,null,null,A.lb,A.E)),t.rb(12,49152,null,0,g.Bb,[t.h,t.k,t.B],null,null),(l()(),t.Jb(-1,0,[" WIP "])),(l()(),t.sb(14,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,A.K,A.d)),t.rb(15,49152,null,0,g.m,[t.h,t.k,t.B],null,null),(l()(),t.sb(16,0,null,0,3,"ion-fab-button",[["size","small"]],null,[[null,"click"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==l.component.exportEmail()&&t),t},A.U,A.n)),t.rb(17,49152,null,0,g.y,[t.h,t.k,t.B],{size:[0,"size"]},null),(l()(),t.sb(18,0,null,0,1,"ion-icon",[["name","share"]],null,null,null,A.Y,A.r)),t.rb(19,49152,null,0,g.D,[t.h,t.k,t.B],{name:[0,"name"]},null),(l()(),t.sb(20,0,null,null,34,"ion-content",[],null,null,null,A.S,A.l)),t.rb(21,49152,null,0,g.v,[t.h,t.k,t.B],null,null),(l()(),t.sb(22,0,null,0,32,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],[[null,"selectedTabChange"]],function(l,e,n){var t=!0;return"selectedTabChange"===e&&(t=!1!==l.component.onTabChanged(n)&&t),t},y.c,y.b)),t.rb(23,3325952,[[1,4],["tabGroup",4]],1,M.f,[t.k,t.h,[2,M.a]],{selectedIndex:[0,"selectedIndex"]},{selectedTabChange:"selectedTabChange"}),t.Hb(603979776,3,{_tabs:1}),(l()(),t.sb(25,16777216,null,null,29,"mat-tab",[],null,null,null,y.d,y.a)),t.rb(26,770048,[[3,4]],2,M.c,[t.R],null,null),t.Hb(335544320,4,{templateLabel:0}),t.Hb(335544320,5,{_explicitContent:0}),(l()(),t.jb(16777216,null,0,1,null,_)),t.rb(30,16384,[[4,4]],0,M.h,[t.O,t.R],null,null),(l()(),t.sb(31,0,null,0,21,"ion-grid",[],null,null,null,A.W,A.p)),t.rb(32,49152,null,0,g.B,[t.h,t.k,t.B],null,null),(l()(),t.sb(33,0,null,0,19,"ion-row",[],null,null,null,A.hb,A.A)),t.rb(34,49152,null,0,g.kb,[t.h,t.k,t.B],null,null),(l()(),t.sb(35,0,null,0,12,"ion-col",[],null,null,null,A.R,A.k)),t.rb(36,49152,null,0,g.u,[t.h,t.k,t.B],null,null),(l()(),t.sb(37,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" On this day "])),(l()(),t.sb(39,0,null,null,8,"ion-item",[],null,null,null,A.ab,A.t)),t.rb(40,49152,null,0,g.I,[t.h,t.k,t.B],null,null),(l()(),t.sb(41,0,null,0,6,"ion-datetime",[["displayFormat","DD MMM YYYY"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,e,n){var a=!0,o=l.component;return"ionBlur"===e&&(a=!1!==t.Cb(l,42)._handleBlurEvent(n.target)&&a),"ionChange"===e&&(a=!1!==t.Cb(l,42)._handleChangeEvent(n.target)&&a),"ngModelChange"===e&&(a=!1!==(o.wipReqModel.date=n)&&a),"ionChange"===e&&(a=!1!==o.onWipHourlySelected(n)&&a),a},A.T,A.m)),t.rb(42,16384,null,0,g.Qb,[t.k],null,null),t.Gb(1024,null,f.e,function(l){return[l]},[g.Qb]),t.rb(44,671744,null,0,f.j,[[8,null],[8,null],[8,null],[6,f.e]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,f.f,null,[f.j]),t.rb(46,16384,null,0,f.g,[[4,f.f]],null,null),t.rb(47,49152,null,0,g.w,[t.h,t.k,t.B],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"]},null),(l()(),t.sb(48,0,null,0,4,"ion-col",[["class","center-ver"],["size","auto"]],null,null,null,A.R,A.k)),t.rb(49,49152,null,0,g.u,[t.h,t.k,t.B],{size:[0,"size"]},null),(l()(),t.sb(50,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==l.component.onViewWIPDateClicked()&&t),t},A.J,A.c)),t.rb(51,49152,null,0,g.l,[t.h,t.k,t.B],null,null),(l()(),t.Jb(-1,0,["View date"])),(l()(),t.jb(16777216,null,0,1,null,x)),t.rb(54,278528,null,0,R.j,[t.R,t.O,t.u],{ngForOf:[0,"ngForOf"]},null)],function(l,e){var n=e.component;l(e,5,0,"primary"),l(e,17,0,"small"),l(e,19,0,"share"),l(e,23,0,n.selectedTab),l(e,26,0),l(e,44,0,n.wipReqModel.date),l(e,47,0,"DD MMM YYYY",t.ub(1,"",n.currentDate,""),t.ub(1,"",n.minDate,"")),l(e,49,0,"auto"),l(e,54,0,n.arrDailyCharts)},function(l,e){l(e,22,0,t.Cb(e,23).dynamicHeight,"below"===t.Cb(e,23).headerPosition),l(e,41,0,t.Cb(e,46).ngClassUntouched,t.Cb(e,46).ngClassTouched,t.Cb(e,46).ngClassPristine,t.Cb(e,46).ngClassDirty,t.Cb(e,46).ngClassValid,t.Cb(e,46).ngClassInvalid,t.Cb(e,46).ngClassPending)})}function E(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"app-wip",[],null,null,null,S,P)),t.rb(1,114688,null,0,Y,[k.a,O.b,g.Hb,g.Jb,B.n,B.a],null,null)],function(l,e){l(e,1,0)},null)}var I=t.ob("app-wip",Y,E,{},{},[]),L=n("M2Lx"),W=n("t/Na"),j=n("lLAP"),H=n("dWZg"),F=n("OBdK"),U=n("9Bt9"),J=n("qAlS"),N=n("eDkP"),z=n("Fzqc"),K=n("4tE/"),G=n("Wf4p"),V=n("wmQ5"),Z=n("o3x0"),X=n("jQLj"),Q=n("mVsa"),$=n("uGex"),ll=n("v9Dh"),el=n("ZYjt"),nl=n("4epT"),tl=n("OkvK"),al=n("Lwpp"),ol=n("y4qS"),il=n("4c35"),rl=n("6Wmm"),ul=n("BgWK"),sl=n("UodH"),bl=n("u7R8"),cl=n("FVSy"),dl=n("de3e"),hl=n("/dO6"),pl=n("LC5p"),ml=n("YhbO"),Al=n("jlZm"),gl=n("r43C"),yl=n("/VYK"),Ml=n("seP3"),fl=n("b716"),Rl=n("0/Q6"),Cl=n("Z+uX"),kl=n("Blfk"),ql=n("9It4"),wl=n("Nsh5"),Dl=n("w+lc"),vl=n("kWGw"),Tl=n("vARd"),Yl=n("BHnd"),Ol=n("8mMr"),Bl=n("J12g"),Pl=n("PCNd"),_l=n("YSh2");n.d(e,"WipPageModuleNgFactory",function(){return xl});var xl=t.pb(a,[],function(l){return t.zb([t.Ab(512,t.j,t.eb,[[8,[o.a,i.a,r.b,r.a,u.a,s.a,s.b,b.a,c.a,I]],[3,t.j],t.z]),t.Ab(4608,R.m,R.l,[t.w,[2,R.w]]),t.Ab(4608,f.o,f.o,[]),t.Ab(4608,g.b,g.b,[t.B,t.g]),t.Ab(4608,g.Jb,g.Jb,[g.b,t.j,t.s]),t.Ab(4608,g.Ob,g.Ob,[g.b,t.j,t.s]),t.Ab(4608,L.c,L.c,[]),t.Ab(4608,W.h,W.n,[R.d,t.D,W.l]),t.Ab(4608,W.o,W.o,[W.h,W.m]),t.Ab(5120,W.a,function(l){return[l]},[W.o]),t.Ab(4608,W.k,W.k,[]),t.Ab(6144,W.i,null,[W.k]),t.Ab(4608,W.g,W.g,[W.i]),t.Ab(6144,W.b,null,[W.g]),t.Ab(4608,W.f,W.j,[W.b,t.s]),t.Ab(4608,W.c,W.c,[W.f]),t.Ab(135680,j.g,j.g,[t.B,H.a]),t.Ab(4608,F.e,F.e,[t.O]),t.Ab(4608,U.a,U.a,[R.d,t.B,J.e,U.c]),t.Ab(4608,N.a,N.a,[N.g,N.c,t.j,N.f,N.d,t.s,t.B,R.d,z.b,[2,R.g]]),t.Ab(5120,N.h,N.i,[N.a]),t.Ab(5120,K.a,K.b,[N.a]),t.Ab(4608,G.d,G.d,[]),t.Ab(5120,V.b,V.a,[[3,V.b]]),t.Ab(5120,Z.b,Z.c,[N.a]),t.Ab(135680,Z.d,Z.d,[N.a,t.s,[2,R.g],[2,Z.a],Z.b,[3,Z.d],N.c]),t.Ab(4608,X.h,X.h,[]),t.Ab(5120,X.a,X.b,[N.a]),t.Ab(5120,Q.a,Q.c,[N.a]),t.Ab(4608,G.c,G.t,[[2,G.h],H.a]),t.Ab(5120,$.a,$.b,[N.a]),t.Ab(5120,ll.a,ll.b,[N.a]),t.Ab(4608,el.f,G.e,[[2,G.i],[2,G.l]]),t.Ab(5120,nl.b,nl.a,[[3,nl.b]]),t.Ab(5120,tl.b,tl.a,[[3,tl.b]]),t.Ab(1073742336,R.c,R.c,[]),t.Ab(1073742336,f.m,f.m,[]),t.Ab(1073742336,f.c,f.c,[]),t.Ab(1073742336,g.Fb,g.Fb,[]),t.Ab(1073742336,H.b,H.b,[]),t.Ab(1073742336,L.d,L.d,[]),t.Ab(1073742336,j.a,j.a,[]),t.Ab(1073742336,W.e,W.e,[]),t.Ab(1073742336,W.d,W.d,[]),t.Ab(1073742336,z.a,z.a,[]),t.Ab(1073742336,al.e,al.e,[]),t.Ab(1073742336,ol.o,ol.o,[]),t.Ab(1073742336,F.c,F.c,[]),t.Ab(1073742336,U.b,U.b,[]),t.Ab(1073742336,G.l,G.l,[[2,G.f],[2,el.g]]),t.Ab(1073742336,G.s,G.s,[]),t.Ab(1073742336,G.q,G.q,[]),t.Ab(1073742336,G.o,G.o,[]),t.Ab(1073742336,il.g,il.g,[]),t.Ab(1073742336,J.c,J.c,[]),t.Ab(1073742336,N.e,N.e,[]),t.Ab(1073742336,K.c,K.c,[]),t.Ab(1073742336,rl.a,rl.a,[]),t.Ab(1073742336,ul.c,ul.c,[]),t.Ab(1073742336,sl.c,sl.c,[]),t.Ab(1073742336,bl.a,bl.a,[]),t.Ab(1073742336,cl.a,cl.a,[]),t.Ab(1073742336,dl.a,dl.a,[]),t.Ab(1073742336,hl.b,hl.b,[]),t.Ab(1073742336,h.c,h.c,[]),t.Ab(1073742336,V.c,V.c,[]),t.Ab(1073742336,Z.g,Z.g,[]),t.Ab(1073742336,X.i,X.i,[]),t.Ab(1073742336,pl.a,pl.a,[]),t.Ab(1073742336,ml.c,ml.c,[]),t.Ab(1073742336,Al.a,Al.a,[]),t.Ab(1073742336,G.m,G.m,[]),t.Ab(1073742336,gl.a,gl.a,[]),t.Ab(1073742336,yl.b,yl.b,[]),t.Ab(1073742336,Ml.a,Ml.a,[]),t.Ab(1073742336,fl.a,fl.a,[]),t.Ab(1073742336,Rl.a,Rl.a,[]),t.Ab(1073742336,Q.b,Q.b,[]),t.Ab(1073742336,G.u,G.u,[]),t.Ab(1073742336,G.n,G.n,[]),t.Ab(1073742336,$.c,$.c,[]),t.Ab(1073742336,ll.c,ll.c,[]),t.Ab(1073742336,nl.c,nl.c,[]),t.Ab(1073742336,Cl.a,Cl.a,[]),t.Ab(1073742336,kl.a,kl.a,[]),t.Ab(1073742336,ql.a,ql.a,[]),t.Ab(1073742336,wl.a,wl.a,[]),t.Ab(1073742336,Dl.a,Dl.a,[]),t.Ab(1073742336,vl.a,vl.a,[]),t.Ab(1073742336,Tl.d,Tl.d,[]),t.Ab(1073742336,tl.c,tl.c,[]),t.Ab(1073742336,Yl.a,Yl.a,[]),t.Ab(1073742336,M.k,M.k,[]),t.Ab(1073742336,Ol.a,Ol.a,[]),t.Ab(1073742336,Bl.a,Bl.a,[]),t.Ab(1073742336,Pl.a,Pl.a,[]),t.Ab(1073742336,B.p,B.p,[[2,B.v],[2,B.n]]),t.Ab(1073742336,a,a,[]),t.Ab(256,W.l,"XSRF-TOKEN",[]),t.Ab(256,W.m,"X-XSRF-TOKEN",[]),t.Ab(256,hl.a,{separatorKeyCodes:[_l.f]},[]),t.Ab(256,G.g,G.j,[]),t.Ab(1024,B.l,function(){return[[{path:"",component:Y}]]},[])])})}}]);