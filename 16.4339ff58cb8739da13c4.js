(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{L6id:function(r,a,e){"use strict";e.r(a);var t=e("CcnG"),l=function(){return function(){}}(),o=e("yWMr"),n=e("t68o"),i=e("zbXB"),b=e("NcP4"),s=e("xYTU"),h=e("pMnS"),c=e("oBZk"),d=e("ZZ/e"),u=e("MO+k");e("AtBH");var C=function(){function r(r){this.http=r}return r.prototype.ionViewDidEnter=function(){this.generateColorArray(10),this.createHrzBarChart5(),this.createHrzBarChart6();var r=JSON.stringify({name:"Skip",age:2,favoriteFood:"Steak"});console.log(r),console.log(JSON.parse(r))},r.prototype.generateColorArrayPie=function(r){this.colorArray=[];for(var a=0;a<r;a++)this.colorArray.push("#"+Math.floor(16777215*Math.random()).toString(16))},r.prototype.createPieChart=function(){this.bars0=new u.Chart(this.pieChart0.nativeElement,{type:"pie",data:{labels:["Plate Change time","Roller Cleaning time","Blanket Cleaning time","Imp. cyl. Cleaning time","Ink well Cleaning time","Paper Preset time","Ink Preset time","Preparation(Change)","Change New Job","Change Colour"],datasets:[{label:"Time(minutes)",data:[1905,65,766,315,0,171,105,0,0,4046],backgroundColor:this.colorArray,borderColor:this.colorArray,borderWidth:1}]},options:{}}),this.bars1=new u.Chart(this.pieChart1.nativeElement,{type:"pie",data:{labels:["Plate Change time","Roller Cleaning time","Blanket Cleaning time","Imp. cyl. Cleaning time","Ink well Cleaning time","Paper Preset time","Ink Preset time","Preparation(Change)","Change New Job","Change Colour"],datasets:[{label:"Time(minutes)",data:[1823,127,850,602,20,143,123,0,0,4465],backgroundColor:this.colorArray,borderColor:this.colorArray,borderWidth:1}]},options:{}}),this.bars2=new u.Chart(this.pieChart2.nativeElement,{type:"pie",data:{labels:["Plate Change time","Roller Cleaning time","Blanket Cleaning time","Imp. cyl. Cleaning time","Ink well Cleaning time","Paper Preset time","Ink Preset time","Preparation(Change)","Change New Job","Change Colour"],datasets:[{label:"Time(minutes)",data:[2207,30,911,193,14,129,131,0,0,5660],backgroundColor:this.colorArray,borderColor:this.colorArray,borderWidth:1}]},options:{}}),this.bars3=new u.Chart(this.pieChart3.nativeElement,{type:"pie",data:{labels:["Plate Change time","Roller Cleaning time","Blanket Cleaning time","Imp. cyl. Cleaning time","Ink well Cleaning time","Paper Preset time","Ink Preset time","Preparation(Change)","Change New Job","Change Colour"],datasets:[{label:"Time(minutes)",data:[918,32,680,333,0,199,192,0,0,6842],backgroundColor:this.colorArray,borderColor:this.colorArray,borderWidth:1}]},options:{}}),this.bars4=new u.Chart(this.pieChart4.nativeElement,{type:"pie",data:{labels:["Plate Change time","Roller Cleaning time","Blanket Cleaning time","Imp. cyl. Cleaning time","Ink well Cleaning time","Paper Preset time","Ink Preset time","Preparation(Change)","Change New Job","Change Colour"],datasets:[{label:"Time(minutes)",data:[1508,0,942,219,0,187,164,0,0,4385],backgroundColor:this.colorArray,borderColor:this.colorArray,borderWidth:1}]},options:{}})},r.prototype.createDnChart=function(){this.dn=new u.Chart(this.dnChart.nativeElement,{type:"doughnut",circumference:Math.PI,data:{labels:["S1","S2","S3","S4","S5","S6","S7","S8"],datasets:[{label:"Viewers in millions",data:[2.5,3.8,5,6.9,6.9,7.5,10,17],backgroundColor:this.colorArray,borderColor:this.colorArray,borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})},r.prototype.fetchData=function(){var r=this;this.http.get("http://www.mocky.io/v2/5d28754a2c000066003eda63?mocky-delay=3000ms").subscribe(function(a){console.log(a),r.apiData=a,r.createHrzBarChart6()})},r.prototype.generateColorArray=function(r){this.colorArray=[];for(var a=0;a<r;a++)this.colorArray.push("#"+Math.floor(16777215*Math.random()).toString(16))},r.prototype.createBarChart=function(){this.bars0=new u.Chart(this.barChart.nativeElement,{type:"bar",data:{labels:["S1","S2","S3","S4","S5","S6","S7","S8"],datasets:[{label:"Viewers in millions",data:[2.5,3.8,5,6.9,6.9,7.5,10,17],backgroundColor:"rgb(38, 194, 129)",borderColor:"rgb(38, 194, 129)",borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})},r.prototype.createHrzBarChart=function(){this.hrzBars=new u.Chart(this.hrzBarChart.nativeElement,{type:"horizontalBar",data:{labels:["S1","S2","S3","S4","S5","S6","S7","S8"],datasets:[{label:"Viewers in millions",data:[2.5,3.8,5,6.9,6.9,7.5,10,17],backgroundColor:"rgb(38, 194, 129)",borderColor:"rgb(38, 194, 129)",borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})},r.prototype.createHrzBarChart2=function(){var r=this.hrzBarChart2.nativeElement;r.height=400,this.hrzBars2=new u.Chart(r,{type:"horizontalBar",data:{labels:["S1","S2","S3","S4","S5","S6","S7","S8"],datasets:[{label:"Viewers in millions",data:[2.5,3.8,5,6.9,6.9,7.5,10,17],backgroundColor:"rgb(38, 194, 129)",borderColor:"rgb(38, 194, 129)",borderWidth:1}]},options:{scales:{xAxes:[{barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{ticks:{beginAtZero:!0}}]}}})},r.prototype.createHrzBarChart3=function(){var r=this.hrzBarChart3.nativeElement;r.height=400,this.hrzBars3=new u.Chart(r,{type:"horizontalBar",data:{labels:["S1","S2","S3","S4","S5","S6","S7","S8"],datasets:[{label:"Viewers in millions",data:[2.5,3.8,5,6.9,6.9,7.5,10,17],backgroundColor:this.colorArray,borderColor:this.colorArray,borderWidth:1}]},options:{scales:{xAxes:[{barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{ticks:{beginAtZero:!0}}]}}})},r.prototype.createHrzBarChart4=function(){var r=this.hrzBarChart4.nativeElement;r.height=400,this.hrzBars4=new u.Chart(r,{type:"horizontalBar",data:{labels:["S1","S2","S3","S4","S5","S6","S7","S8"],datasets:[{label:"Online viewers in millions",data:[2.5,3.8,5,6.9,6.9,7.5,10,17],backgroundColor:"rgb(245, 229, 27)",borderColor:"rgb(245, 229, 27)",borderWidth:1},{label:"Offline viewers in millions",data:[1.5,2.8,3,3.9,4.9,5.5,7,12],backgroundColor:"rgb(63, 195, 128)",borderColor:"rgb(63, 195, 128)",borderWidth:1}]},options:{scales:{xAxes:[{barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{ticks:{beginAtZero:!0}}]}}})},r.prototype.createHrzBarChart5=function(){var r=this.hrzBarChart5.nativeElement;r.height=400,this.hrzBars5=new u.Chart(r,{type:"bar",data:{labels:["GL371","GL372","GL373","LA371","LA372"],datasets:[{label:"Plate Change time",data:[1905,1823,2207,918,1508],backgroundColor:this.colorArray[0],borderColor:this.colorArray[0],borderWidth:1},{label:"Roller Cleaning time",data:[65,127,30,32,0],backgroundColor:this.colorArray[1],borderColor:this.colorArray[1],borderWidth:1},{label:"Blanket Cleaning time",data:[766,850,911,680,942],backgroundColor:this.colorArray[2],borderColor:this.colorArray[2],borderWidth:1},{label:"Imp. cyl. Cleaning time",data:[315,602,193,333,219],backgroundColor:this.colorArray[3],borderColor:this.colorArray[3],borderWidth:1},{label:"Ink well Cleaning time",data:[0,20,14,0,0],backgroundColor:this.colorArray[4],borderColor:this.colorArray[4],borderWidth:1},{label:"Paper Preset time",data:[171,143,129,199,187],backgroundColor:this.colorArray[5],borderColor:this.colorArray[5],borderWidth:1},{label:"Ink Preset time",data:[105,123,131,192,164],backgroundColor:this.colorArray[6],borderColor:this.colorArray[6],borderWidth:1},{label:"Preparation(Change)",data:[0,0,0,0,0],backgroundColor:this.colorArray[7],borderColor:this.colorArray[7],borderWidth:1},{label:"Change New Job",data:[0,0,0,0,0],backgroundColor:this.colorArray[8],borderColor:this.colorArray[8],borderWidth:1},{label:"Change Colour",data:[4046,4465,5660,6842,4385],backgroundColor:this.colorArray[9],borderColor:this.colorArray[9],borderWidth:1}]},options:{plugins:{stacked100:{enable:!0}}}})},r.prototype.createHrzBarChart6=function(){var r=this.hrzBarChart6.nativeElement;r.height=400,this.hrzBars6=new u.Chart(r,{type:"bar",data:{labels:this.apiData&&this.apiData.labels,datasets:[{label:"Online viewers in millions",data:this.apiData&&this.apiData.values,backgroundColor:"rgb(245, 229, 27)",borderColor:"rgb(245, 229, 27)",borderWidth:1}]},options:{scales:{xAxes:[{barPercentage:.9,gridLines:{offsetGridLines:!0},stacked:!0}],yAxes:[{ticks:{beginAtZero:!0},stacked:!0}]}}})},r.prototype.onClick=function(){},r.prototype.random_rgb=function(){var r=Math.round,a=Math.random;return"rgb("+r(255*a())+","+r(255*a())+","+r(255*a())+","+a().toFixed(1)+")"},r}(),g=e("t/Na"),p=t.qb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}p.text-center[_ngcontent-%COMP%]{text-align:center}.example-tab-icon[_ngcontent-%COMP%]{margin-right:8px}"]],data:{}});function z(r){return t.Jb(0,[t.Fb(402653184,1,{pieChart0:0}),t.Fb(402653184,2,{pieChart1:0}),t.Fb(402653184,3,{pieChart2:0}),t.Fb(402653184,4,{pieChart3:0}),t.Fb(402653184,5,{pieChart4:0}),t.Fb(402653184,6,{dnChart:0}),t.Fb(402653184,7,{barChart:0}),t.Fb(402653184,8,{hrzBarChart:0}),t.Fb(402653184,9,{hrzBarChart2:0}),t.Fb(402653184,10,{hrzBarChart3:0}),t.Fb(402653184,11,{hrzBarChart4:0}),t.Fb(402653184,12,{hrzBarChart5:0}),t.Fb(402653184,13,{hrzBarChart6:0}),t.Fb(402653184,14,{hrzBarChartTest:0}),(r()(),t.sb(14,0,null,null,10,"ion-header",[],null,null,null,c.C,c.i)),t.rb(15,49152,null,0,d.y,[t.h,t.k,t.B],null,null),(r()(),t.sb(16,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,c.N,c.t)),t.rb(17,49152,null,0,d.zb,[t.h,t.k,t.B],{color:[0,"color"]},null),(r()(),t.sb(18,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.v,c.b)),t.rb(19,49152,null,0,d.i,[t.h,t.k,t.B],null,null),(r()(),t.sb(20,0,null,0,1,"ion-menu-button",[],null,null,null,c.I,c.p)),t.rb(21,49152,null,0,d.O,[t.h,t.k,t.B],null,null),(r()(),t.sb(22,0,null,0,2,"ion-title",[],null,null,null,c.M,c.s)),t.rb(23,49152,null,0,d.xb,[t.h,t.k,t.B],null,null),(r()(),t.Hb(-1,0,[" Changing Time "])),(r()(),t.sb(25,0,null,null,19,"ion-content",[],null,null,null,c.B,c.h)),t.rb(26,49152,null,0,d.r,[t.h,t.k,t.B],null,null),(r()(),t.sb(27,0,null,0,4,"ion-list-header",[["color","light"]],null,null,null,c.G,c.n)),t.rb(28,49152,null,0,d.M,[t.h,t.k,t.B],{color:[0,"color"]},null),(r()(),t.sb(29,0,null,0,2,"ion-label",[],null,null,null,c.F,c.l)),t.rb(30,49152,null,0,d.K,[t.h,t.k,t.B],null,null),(r()(),t.Hb(-1,0,["Data for September 2019"])),(r()(),t.sb(32,0,null,0,12,"ion-card",[["class","welcome-card"]],null,null,null,c.A,c.c)),t.rb(33,49152,null,0,d.j,[t.h,t.k,t.B],null,null),(r()(),t.sb(34,0,null,0,7,"ion-card-header",[],null,null,null,c.x,c.e)),t.rb(35,49152,null,0,d.l,[t.h,t.k,t.B],null,null),(r()(),t.sb(36,0,null,0,2,"ion-card-subtitle",[],null,null,null,c.y,c.f)),t.rb(37,49152,null,0,d.m,[t.h,t.k,t.B],null,null),(r()(),t.Hb(-1,0,["Percentage of Changing Time Based On"])),(r()(),t.sb(39,0,null,0,2,"ion-card-title",[],null,null,null,c.z,c.g)),t.rb(40,49152,null,0,d.n,[t.h,t.k,t.B],null,null),(r()(),t.Hb(-1,0,["Device Name"])),(r()(),t.sb(42,0,null,0,2,"ion-card-content",[],null,null,null,c.w,c.d)),t.rb(43,49152,null,0,d.k,[t.h,t.k,t.B],null,null),(r()(),t.sb(44,0,[[12,0],["hrzBarChart5",1]],0,0,"canvas",[],null,null,null,null,null))],function(r,a){r(a,17,0,"primary"),r(a,28,0,"light")},null)}function m(r){return t.Jb(0,[(r()(),t.sb(0,0,null,null,1,"app-home",[],null,null,null,z,p)),t.rb(1,49152,null,0,C,[g.c],null,null)],null,null)}var y=t.ob("app-home",C,m,{},{},[]),k=e("Ip0R"),B=e("gIcY"),A=e("M2Lx"),S=e("lLAP"),f=e("dWZg"),w=e("OBdK"),P=e("9Bt9"),v=e("qAlS"),W=e("eDkP"),x=e("Fzqc"),I=e("4tE/"),F=e("Wf4p"),L=e("wmQ5"),M=e("o3x0"),H=e("jQLj"),O=e("mVsa"),E=e("uGex"),Z=e("v9Dh"),D=e("ZYjt"),N=e("4epT"),G=e("OkvK"),J=e("Lwpp"),j=e("y4qS"),T=e("4c35"),R=e("6Wmm"),V=e("BgWK"),Y=e("UodH"),q=e("u7R8"),K=e("FVSy"),_=e("de3e"),Q=e("/dO6"),U=e("SMsm"),X=e("LC5p"),$=e("YhbO"),rr=e("jlZm"),ar=e("r43C"),er=e("/VYK"),tr=e("seP3"),lr=e("b716"),or=e("0/Q6"),nr=e("Z+uX"),ir=e("Blfk"),br=e("9It4"),sr=e("Nsh5"),hr=e("w+lc"),cr=e("kWGw"),dr=e("vARd"),ur=e("BHnd"),Cr=e("La40"),gr=e("8mMr"),pr=e("J12g"),zr=e("ZYCi"),mr=e("YSh2");e.d(a,"HomePageModuleNgFactory",function(){return yr});var yr=t.pb(l,[],function(r){return t.yb([t.zb(512,t.j,t.eb,[[8,[o.a,n.a,i.b,i.a,b.a,s.a,s.b,h.a,y]],[3,t.j],t.z]),t.zb(4608,k.m,k.l,[t.w,[2,k.v]]),t.zb(4608,B.g,B.g,[]),t.zb(4608,d.a,d.a,[t.B,t.g]),t.zb(4608,d.Db,d.Db,[d.a,t.j,t.s]),t.zb(4608,d.Gb,d.Gb,[d.a,t.j,t.s]),t.zb(4608,A.c,A.c,[]),t.zb(135680,S.g,S.g,[t.B,f.a]),t.zb(4608,w.e,w.e,[t.O]),t.zb(4608,P.a,P.a,[k.d,t.B,v.e,P.c]),t.zb(4608,W.a,W.a,[W.g,W.c,t.j,W.f,W.d,t.s,t.B,k.d,x.b,[2,k.g]]),t.zb(5120,W.h,W.i,[W.a]),t.zb(5120,I.a,I.b,[W.a]),t.zb(4608,F.d,F.d,[]),t.zb(5120,L.b,L.a,[[3,L.b]]),t.zb(5120,M.b,M.c,[W.a]),t.zb(135680,M.d,M.d,[W.a,t.s,[2,k.g],[2,M.a],M.b,[3,M.d],W.c]),t.zb(4608,H.h,H.h,[]),t.zb(5120,H.a,H.b,[W.a]),t.zb(5120,O.a,O.c,[W.a]),t.zb(4608,F.c,F.t,[[2,F.h],f.a]),t.zb(5120,E.a,E.b,[W.a]),t.zb(5120,Z.a,Z.b,[W.a]),t.zb(4608,D.f,F.e,[[2,F.i],[2,F.l]]),t.zb(5120,N.b,N.a,[[3,N.b]]),t.zb(5120,G.b,G.a,[[3,G.b]]),t.zb(1073742336,k.c,k.c,[]),t.zb(1073742336,B.f,B.f,[]),t.zb(1073742336,B.b,B.b,[]),t.zb(1073742336,d.Bb,d.Bb,[]),t.zb(1073742336,f.b,f.b,[]),t.zb(1073742336,A.d,A.d,[]),t.zb(1073742336,S.a,S.a,[]),t.zb(1073742336,x.a,x.a,[]),t.zb(1073742336,J.e,J.e,[]),t.zb(1073742336,j.o,j.o,[]),t.zb(1073742336,w.c,w.c,[]),t.zb(1073742336,P.b,P.b,[]),t.zb(1073742336,F.l,F.l,[[2,F.f],[2,D.g]]),t.zb(1073742336,F.s,F.s,[]),t.zb(1073742336,F.q,F.q,[]),t.zb(1073742336,F.o,F.o,[]),t.zb(1073742336,T.g,T.g,[]),t.zb(1073742336,v.c,v.c,[]),t.zb(1073742336,W.e,W.e,[]),t.zb(1073742336,I.c,I.c,[]),t.zb(1073742336,R.a,R.a,[]),t.zb(1073742336,V.c,V.c,[]),t.zb(1073742336,Y.c,Y.c,[]),t.zb(1073742336,q.a,q.a,[]),t.zb(1073742336,K.a,K.a,[]),t.zb(1073742336,_.a,_.a,[]),t.zb(1073742336,Q.b,Q.b,[]),t.zb(1073742336,U.c,U.c,[]),t.zb(1073742336,L.c,L.c,[]),t.zb(1073742336,M.g,M.g,[]),t.zb(1073742336,H.i,H.i,[]),t.zb(1073742336,X.a,X.a,[]),t.zb(1073742336,$.c,$.c,[]),t.zb(1073742336,rr.a,rr.a,[]),t.zb(1073742336,F.m,F.m,[]),t.zb(1073742336,ar.a,ar.a,[]),t.zb(1073742336,er.b,er.b,[]),t.zb(1073742336,tr.a,tr.a,[]),t.zb(1073742336,lr.a,lr.a,[]),t.zb(1073742336,or.a,or.a,[]),t.zb(1073742336,O.b,O.b,[]),t.zb(1073742336,F.u,F.u,[]),t.zb(1073742336,F.n,F.n,[]),t.zb(1073742336,E.c,E.c,[]),t.zb(1073742336,Z.c,Z.c,[]),t.zb(1073742336,N.c,N.c,[]),t.zb(1073742336,nr.a,nr.a,[]),t.zb(1073742336,ir.a,ir.a,[]),t.zb(1073742336,br.a,br.a,[]),t.zb(1073742336,sr.a,sr.a,[]),t.zb(1073742336,hr.a,hr.a,[]),t.zb(1073742336,cr.a,cr.a,[]),t.zb(1073742336,dr.d,dr.d,[]),t.zb(1073742336,G.c,G.c,[]),t.zb(1073742336,ur.a,ur.a,[]),t.zb(1073742336,Cr.k,Cr.k,[]),t.zb(1073742336,gr.a,gr.a,[]),t.zb(1073742336,pr.a,pr.a,[]),t.zb(1073742336,zr.o,zr.o,[[2,zr.u],[2,zr.m]]),t.zb(1073742336,l,l,[]),t.zb(256,Q.a,{separatorKeyCodes:[mr.f]},[]),t.zb(256,F.g,F.j,[]),t.zb(1024,zr.k,function(){return[[{path:"",component:C}]]},[])])})}}]);