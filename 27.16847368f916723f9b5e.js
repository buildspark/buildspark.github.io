(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"U/4Z":function(l,n,u){"use strict";u.r(n);var r=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),t=u("oBZk"),i=u("ZZ/e"),b=u("MO+k"),a=function(){function l(){}return l.prototype.ionViewDidEnter=function(){this.createAreaChart(),this.createSimpleLineChart(),this.createGroupLineChart(),this.createHrzLineChart3()},l.prototype.createAreaChart=function(){this.lines=new b.Chart(this.lineChart.nativeElement,{type:"line",data:{labels:["S1","S2","S3","S4","S5","S6","S7","S8"],datasets:[{label:"Viewers in millions",data:[2.5,3.8,5,6.9,6.9,7.5,10,17],backgroundColor:"rgb(38, 194, 129)",borderColor:"rgb(38, 194, 129)",borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})},l.prototype.createSimpleLineChart=function(){this.hrzLines=new b.Chart(this.hrzLineChart.nativeElement,{type:"line",data:{labels:["S1","S2","S3","S4","S5","S6","S7","S8"],datasets:[{label:"Viewers in millions",data:[2.5,3.8,5,6.9,6.9,7.5,10,17],backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"rgb(38, 194, 129)",borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})},l.prototype.createGroupLineChart=function(){this.hrzLines2=new b.Chart(this.hrzLineChart2.nativeElement,{type:"line",data:{labels:["S1","S2","S3","S4","S5","S6","S7","S8"],datasets:[{label:"Online viewers in millions",data:[2.5,3.8,5,6.9,6.9,7.5,10,17],backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"rgb(38, 194, 129)",borderWidth:1},{label:"Offline viewers in millions",data:[1.5,2.8,3,4.9,4.9,5.5,7,12],backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"rgb(242, 38, 19)",borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})},l.prototype.createHrzLineChart3=function(){var l=this.hrzLineChart3.nativeElement;l.height=400,this.hrzLines3=new b.Chart(l,{type:"line",data:{labels:["S1","S2","S3","S4","S5","S6","S7","S8"],datasets:[{label:"Online viewers in millions",data:[2.5,3.8,5,6.9,6.9,7.5,10,17],backgroundColor:"rgb(242, 38, 19)",borderColor:"rgb(242, 38, 19)",borderWidth:1},{label:"Offline viewers in millions",data:[1.5,2.8,3,4.9,4.9,5.5,7,12],backgroundColor:"rgb(38, 194, 129)",borderColor:"rgb(38, 194, 129)",borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0},stacked:!0}]}}})},l}(),s=r.qb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}"]],data:{}});function h(l){return r.Lb(0,[r.Hb(402653184,1,{lineChart:0}),r.Hb(402653184,2,{hrzLineChart:0}),r.Hb(402653184,3,{hrzLineChart2:0}),r.Hb(402653184,4,{hrzLineChart3:0}),(l()(),r.sb(4,0,null,null,10,"ion-header",[],null,null,null,t.X,t.q)),r.rb(5,49152,null,0,i.C,[r.h,r.k,r.B],null,null),(l()(),r.sb(6,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,t.nb,t.G)),r.rb(7,49152,null,0,i.Db,[r.h,r.k,r.B],{color:[0,"color"]},null),(l()(),r.sb(8,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,t.K,t.d)),r.rb(9,49152,null,0,i.m,[r.h,r.k,r.B],null,null),(l()(),r.sb(10,0,null,0,1,"ion-menu-button",[],null,null,null,t.eb,t.y)),r.rb(11,49152,null,0,i.S,[r.h,r.k,r.B],null,null),(l()(),r.sb(12,0,null,0,2,"ion-title",[],null,null,null,t.lb,t.E)),r.rb(13,49152,null,0,i.Bb,[r.h,r.k,r.B],null,null),(l()(),r.Jb(-1,0,[" Line Charts with Chart.js "])),(l()(),r.sb(15,0,null,null,65,"ion-content",[],null,null,null,t.S,t.l)),r.rb(16,49152,null,0,i.v,[r.h,r.k,r.B],null,null),(l()(),r.sb(17,0,null,0,2,"ion-list-header",[["color","light"]],null,null,null,t.cb,t.w)),r.rb(18,49152,null,0,i.Q,[r.h,r.k,r.B],{color:[0,"color"]},null),(l()(),r.Jb(-1,0,["Simple Area Chart"])),(l()(),r.sb(20,0,null,0,12,"ion-card",[["class","welcome-card"]],null,null,null,t.P,t.e)),r.rb(21,49152,null,0,i.n,[r.h,r.k,r.B],null,null),(l()(),r.sb(22,0,null,0,7,"ion-card-header",[],null,null,null,t.M,t.g)),r.rb(23,49152,null,0,i.p,[r.h,r.k,r.B],null,null),(l()(),r.sb(24,0,null,0,2,"ion-card-subtitle",[],null,null,null,t.N,t.h)),r.rb(25,49152,null,0,i.q,[r.h,r.k,r.B],null,null),(l()(),r.Jb(-1,0,["Number of Viewers per season for"])),(l()(),r.sb(27,0,null,0,2,"ion-card-title",[],null,null,null,t.O,t.i)),r.rb(28,49152,null,0,i.r,[r.h,r.k,r.B],null,null),(l()(),r.Jb(-1,0,["Game of Thrones"])),(l()(),r.sb(30,0,null,0,2,"ion-card-content",[],null,null,null,t.L,t.f)),r.rb(31,49152,null,0,i.o,[r.h,r.k,r.B],null,null),(l()(),r.sb(32,0,[[1,0],["lineChart",1]],0,0,"canvas",[],null,null,null,null,null)),(l()(),r.sb(33,0,null,0,2,"ion-list-header",[["color","light"]],null,null,null,t.cb,t.w)),r.rb(34,49152,null,0,i.Q,[r.h,r.k,r.B],{color:[0,"color"]},null),(l()(),r.Jb(-1,0,["Simple Line Chart"])),(l()(),r.sb(36,0,null,0,12,"ion-card",[["class","welcome-card"]],null,null,null,t.P,t.e)),r.rb(37,49152,null,0,i.n,[r.h,r.k,r.B],null,null),(l()(),r.sb(38,0,null,0,7,"ion-card-header",[],null,null,null,t.M,t.g)),r.rb(39,49152,null,0,i.p,[r.h,r.k,r.B],null,null),(l()(),r.sb(40,0,null,0,2,"ion-card-subtitle",[],null,null,null,t.N,t.h)),r.rb(41,49152,null,0,i.q,[r.h,r.k,r.B],null,null),(l()(),r.Jb(-1,0,["Number of Viewers per season for"])),(l()(),r.sb(43,0,null,0,2,"ion-card-title",[],null,null,null,t.O,t.i)),r.rb(44,49152,null,0,i.r,[r.h,r.k,r.B],null,null),(l()(),r.Jb(-1,0,["Game of Thrones"])),(l()(),r.sb(46,0,null,0,2,"ion-card-content",[],null,null,null,t.L,t.f)),r.rb(47,49152,null,0,i.o,[r.h,r.k,r.B],null,null),(l()(),r.sb(48,0,[[2,0],["hrzLineChart",1]],0,0,"canvas",[],null,null,null,null,null)),(l()(),r.sb(49,0,null,0,2,"ion-list-header",[["color","light"]],null,null,null,t.cb,t.w)),r.rb(50,49152,null,0,i.Q,[r.h,r.k,r.B],{color:[0,"color"]},null),(l()(),r.Jb(-1,0,["Grouped Line Chart"])),(l()(),r.sb(52,0,null,0,12,"ion-card",[["class","welcome-card"]],null,null,null,t.P,t.e)),r.rb(53,49152,null,0,i.n,[r.h,r.k,r.B],null,null),(l()(),r.sb(54,0,null,0,7,"ion-card-header",[],null,null,null,t.M,t.g)),r.rb(55,49152,null,0,i.p,[r.h,r.k,r.B],null,null),(l()(),r.sb(56,0,null,0,2,"ion-card-subtitle",[],null,null,null,t.N,t.h)),r.rb(57,49152,null,0,i.q,[r.h,r.k,r.B],null,null),(l()(),r.Jb(-1,0,["Number of Viewers per season for"])),(l()(),r.sb(59,0,null,0,2,"ion-card-title",[],null,null,null,t.O,t.i)),r.rb(60,49152,null,0,i.r,[r.h,r.k,r.B],null,null),(l()(),r.Jb(-1,0,["Game of Thrones"])),(l()(),r.sb(62,0,null,0,2,"ion-card-content",[],null,null,null,t.L,t.f)),r.rb(63,49152,null,0,i.o,[r.h,r.k,r.B],null,null),(l()(),r.sb(64,0,[[3,0],["hrzLineChart2",1]],0,0,"canvas",[],null,null,null,null,null)),(l()(),r.sb(65,0,null,0,2,"ion-list-header",[["color","light"]],null,null,null,t.cb,t.w)),r.rb(66,49152,null,0,i.Q,[r.h,r.k,r.B],{color:[0,"color"]},null),(l()(),r.Jb(-1,0,["Grouped Area Chart with custom height"])),(l()(),r.sb(68,0,null,0,12,"ion-card",[["class","welcome-card"]],null,null,null,t.P,t.e)),r.rb(69,49152,null,0,i.n,[r.h,r.k,r.B],null,null),(l()(),r.sb(70,0,null,0,7,"ion-card-header",[],null,null,null,t.M,t.g)),r.rb(71,49152,null,0,i.p,[r.h,r.k,r.B],null,null),(l()(),r.sb(72,0,null,0,2,"ion-card-subtitle",[],null,null,null,t.N,t.h)),r.rb(73,49152,null,0,i.q,[r.h,r.k,r.B],null,null),(l()(),r.Jb(-1,0,["Number of Viewers per season for"])),(l()(),r.sb(75,0,null,0,2,"ion-card-title",[],null,null,null,t.O,t.i)),r.rb(76,49152,null,0,i.r,[r.h,r.k,r.B],null,null),(l()(),r.Jb(-1,0,["Game of Thrones"])),(l()(),r.sb(78,0,null,0,2,"ion-card-content",[],null,null,null,t.L,t.f)),r.rb(79,49152,null,0,i.o,[r.h,r.k,r.B],null,null),(l()(),r.sb(80,0,[[4,0],["hrzLineChart3",1]],0,0,"canvas",[],null,null,null,null,null))],function(l,n){l(n,7,0,"primary"),l(n,18,0,"light"),l(n,34,0,"light"),l(n,50,0,"light"),l(n,66,0,"light")},null)}function c(l){return r.Lb(0,[(l()(),r.sb(0,0,null,null,1,"app-line",[],null,null,null,h,s)),r.rb(1,49152,null,0,a,[],null,null)],null,null)}var d=r.ob("app-line",a,c,{},{},[]),p=u("Ip0R"),C=u("gIcY"),k=u("ZYCi");u.d(n,"LinePageModuleNgFactory",function(){return g});var g=r.pb(e,[],function(l){return r.zb([r.Ab(512,r.j,r.eb,[[8,[o.a,d]],[3,r.j],r.z]),r.Ab(4608,p.m,p.l,[r.w,[2,p.w]]),r.Ab(4608,C.o,C.o,[]),r.Ab(4608,i.b,i.b,[r.B,r.g]),r.Ab(4608,i.Jb,i.Jb,[i.b,r.j,r.s]),r.Ab(4608,i.Ob,i.Ob,[i.b,r.j,r.s]),r.Ab(1073742336,p.c,p.c,[]),r.Ab(1073742336,C.m,C.m,[]),r.Ab(1073742336,C.c,C.c,[]),r.Ab(1073742336,i.Fb,i.Fb,[]),r.Ab(1073742336,k.p,k.p,[[2,k.v],[2,k.n]]),r.Ab(1073742336,e,e,[]),r.Ab(1024,k.l,function(){return[[{path:"",component:a}]]},[])])})}}]);