(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{u6Vq:function(l,n,b){"use strict";b.r(n);var a=b("CcnG"),e=function(){return function(){}}(),t=b("yWMr"),r=b("t68o"),u=b("zbXB"),o=b("NcP4"),c=b("xYTU"),A=b("pMnS"),i=b("oBZk"),s=b("ZZ/e"),h=b("mrSG"),d=b("MO+k"),g=b("Do2H"),p=b("oztG"),f=b("/Ru3");b("AtBH");var m=function(){function l(l,n,b){var a=this;this.service=l,this.storage=n,this.alertController=b,this.storage.get("accesstoken").then(function(l){a.service.callWebService(p.a.k_DAILY_USAGE,new f.c(l,"GL373","2019-09-01","2019-09-30"),function(l){var n=JSON.parse(l.data);a.deviceData=JSON.parse(n[0].data),console.log("\n\n\nDATA: ",a.deviceData,"\n\n\n")})})}return l.prototype.ionViewDidEnter=function(){this.generateColorArray(10),this.createHrzBarChart5(this.deviceData)},l.prototype.generateColorArray=function(l){this.colorArray=[];for(var n=0;n<l;n++)this.colorArray.push("#"+Math.floor(16777215*Math.random()).toString(16))},l.prototype.createHrzBarChart5=function(l){var n=this.hrzBarChart5.nativeElement;n.height=400,this.hrzBars5=new d.Chart(n,{type:"bar",data:{labels:l.labels,datasets:l.datasets},options:{scales:{xAxes:[{barPercentage:.9,gridLines:{offsetGridLines:!0},stacked:!0}],yAxes:[{ticks:{beginAtZero:!0},stacked:!0}]}}})},l.prototype.onClick=function(){},l.prototype.random_rgb=function(){var l=Math.round,n=Math.random;return"rgb("+l(255*n())+","+l(255*n())+","+l(255*n())+","+n().toFixed(1)+")"},l.prototype.presentAlert=function(l){return h.b(this,void 0,void 0,function(){var n,b;return h.e(this,function(a){switch(a.label){case 0:return[4,this.alertController.create({header:"Error",subHeader:"",message:l,buttons:["OK"]})];case 1:return[4,(n=a.sent()).present()];case 2:return a.sent(),[4,n.onDidDismiss()];case 3:return b=a.sent(),console.log(b),[2]}})})},l}(),k=b("iw74"),B=a.qb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}p.text-center[_ngcontent-%COMP%]{text-align:center}.example-tab-icon[_ngcontent-%COMP%]{margin-right:8px}"]],data:{}});function v(l){return a.Lb(0,[a.Hb(402653184,1,{hrzBarChart5:0}),(l()(),a.sb(1,0,null,null,10,"ion-header",[],null,null,null,i.V,i.p)),a.rb(2,49152,null,0,s.B,[a.h,a.k,a.B],null,null),(l()(),a.sb(3,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,i.lb,i.F)),a.rb(4,49152,null,0,s.Cb,[a.h,a.k,a.B],{color:[0,"color"]},null),(l()(),a.sb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.I,i.c)),a.rb(6,49152,null,0,s.l,[a.h,a.k,a.B],null,null),(l()(),a.sb(7,0,null,0,1,"ion-menu-button",[],null,null,null,i.cb,i.x)),a.rb(8,49152,null,0,s.R,[a.h,a.k,a.B],null,null),(l()(),a.sb(9,0,null,0,2,"ion-title",[],null,null,null,i.kb,i.E)),a.rb(10,49152,null,0,s.Ab,[a.h,a.k,a.B],null,null),(l()(),a.Jb(-1,0,[" Changing Time "])),(l()(),a.sb(12,0,null,null,19,"ion-content",[],null,null,null,i.Q,i.k)),a.rb(13,49152,null,0,s.u,[a.h,a.k,a.B],null,null),(l()(),a.sb(14,0,null,0,4,"ion-list-header",[["color","light"]],null,null,null,i.ab,i.v)),a.rb(15,49152,null,0,s.P,[a.h,a.k,a.B],{color:[0,"color"]},null),(l()(),a.sb(16,0,null,0,2,"ion-label",[],null,null,null,i.Z,i.t)),a.rb(17,49152,null,0,s.N,[a.h,a.k,a.B],null,null),(l()(),a.Jb(-1,0,["Data for September 2019"])),(l()(),a.sb(19,0,null,0,12,"ion-card",[["class","welcome-card"]],null,null,null,i.N,i.d)),a.rb(20,49152,null,0,s.m,[a.h,a.k,a.B],null,null),(l()(),a.sb(21,0,null,0,7,"ion-card-header",[],null,null,null,i.K,i.f)),a.rb(22,49152,null,0,s.o,[a.h,a.k,a.B],null,null),(l()(),a.sb(23,0,null,0,2,"ion-card-subtitle",[],null,null,null,i.L,i.g)),a.rb(24,49152,null,0,s.p,[a.h,a.k,a.B],null,null),(l()(),a.Jb(-1,0,["Percentage of Changing Time Based On"])),(l()(),a.sb(26,0,null,0,2,"ion-card-title",[],null,null,null,i.M,i.h)),a.rb(27,49152,null,0,s.q,[a.h,a.k,a.B],null,null),(l()(),a.Jb(-1,0,["Device Name"])),(l()(),a.sb(29,0,null,0,2,"ion-card-content",[],null,null,null,i.J,i.e)),a.rb(30,49152,null,0,s.n,[a.h,a.k,a.B],null,null),(l()(),a.sb(31,0,[[1,0],["hrzBarChart5",1]],0,0,"canvas",[],null,null,null,null,null))],function(l,n){l(n,4,0,"primary"),l(n,15,0,"light")},null)}function C(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,1,"app-machine",[],null,null,null,v,B)),a.rb(1,49152,null,0,m,[g.a,k.b,s.a],null,null)],null,null)}var y=a.ob("app-machine",m,C,{},{},[]),w=b("Ip0R"),M=b("gIcY"),O=b("M2Lx"),S=b("t/Na"),x=b("lLAP"),D=b("dWZg"),L=b("OBdK"),P=b("9Bt9"),j=b("qAlS"),z=b("eDkP"),N=b("Fzqc"),E=b("4tE/"),J=b("Wf4p"),Z=b("wmQ5"),K=b("o3x0"),q=b("jQLj"),G=b("mVsa"),H=b("uGex"),Y=b("v9Dh"),F=b("ZYjt"),I=b("4epT"),R=b("OkvK"),T=b("Lwpp"),W=b("y4qS"),_=b("4c35"),V=b("6Wmm"),X=b("BgWK"),Q=b("UodH"),U=b("u7R8"),$=b("FVSy"),ll=b("de3e"),nl=b("/dO6"),bl=b("SMsm"),al=b("LC5p"),el=b("YhbO"),tl=b("jlZm"),rl=b("r43C"),ul=b("/VYK"),ol=b("seP3"),cl=b("b716"),Al=b("0/Q6"),il=b("Z+uX"),sl=b("Blfk"),hl=b("9It4"),dl=b("Nsh5"),gl=b("w+lc"),pl=b("kWGw"),fl=b("vARd"),ml=b("BHnd"),kl=b("La40"),Bl=b("8mMr"),vl=b("J12g"),Cl=b("ZYCi"),yl=b("YSh2");b.d(n,"MachinePageModuleNgFactory",function(){return wl});var wl=a.pb(e,[],function(l){return a.zb([a.Ab(512,a.j,a.eb,[[8,[t.a,r.a,u.b,u.a,o.a,c.a,c.b,A.a,y]],[3,a.j],a.z]),a.Ab(4608,w.m,w.l,[a.w,[2,w.v]]),a.Ab(4608,M.n,M.n,[]),a.Ab(4608,s.b,s.b,[a.B,a.g]),a.Ab(4608,s.Ib,s.Ib,[s.b,a.j,a.s]),a.Ab(4608,s.Mb,s.Mb,[s.b,a.j,a.s]),a.Ab(4608,O.c,O.c,[]),a.Ab(4608,S.h,S.n,[w.d,a.D,S.l]),a.Ab(4608,S.o,S.o,[S.h,S.m]),a.Ab(5120,S.a,function(l){return[l]},[S.o]),a.Ab(4608,S.k,S.k,[]),a.Ab(6144,S.i,null,[S.k]),a.Ab(4608,S.g,S.g,[S.i]),a.Ab(6144,S.b,null,[S.g]),a.Ab(4608,S.f,S.j,[S.b,a.s]),a.Ab(4608,S.c,S.c,[S.f]),a.Ab(135680,x.g,x.g,[a.B,D.a]),a.Ab(4608,L.e,L.e,[a.O]),a.Ab(4608,P.a,P.a,[w.d,a.B,j.e,P.c]),a.Ab(4608,z.a,z.a,[z.g,z.c,a.j,z.f,z.d,a.s,a.B,w.d,N.b,[2,w.g]]),a.Ab(5120,z.h,z.i,[z.a]),a.Ab(5120,E.a,E.b,[z.a]),a.Ab(4608,J.d,J.d,[]),a.Ab(5120,Z.b,Z.a,[[3,Z.b]]),a.Ab(5120,K.b,K.c,[z.a]),a.Ab(135680,K.d,K.d,[z.a,a.s,[2,w.g],[2,K.a],K.b,[3,K.d],z.c]),a.Ab(4608,q.h,q.h,[]),a.Ab(5120,q.a,q.b,[z.a]),a.Ab(5120,G.a,G.c,[z.a]),a.Ab(4608,J.c,J.t,[[2,J.h],D.a]),a.Ab(5120,H.a,H.b,[z.a]),a.Ab(5120,Y.a,Y.b,[z.a]),a.Ab(4608,F.f,J.e,[[2,J.i],[2,J.l]]),a.Ab(5120,I.b,I.a,[[3,I.b]]),a.Ab(5120,R.b,R.a,[[3,R.b]]),a.Ab(1073742336,w.c,w.c,[]),a.Ab(1073742336,M.l,M.l,[]),a.Ab(1073742336,M.c,M.c,[]),a.Ab(1073742336,s.Eb,s.Eb,[]),a.Ab(1073742336,D.b,D.b,[]),a.Ab(1073742336,O.d,O.d,[]),a.Ab(1073742336,x.a,x.a,[]),a.Ab(1073742336,S.e,S.e,[]),a.Ab(1073742336,S.d,S.d,[]),a.Ab(1073742336,N.a,N.a,[]),a.Ab(1073742336,T.e,T.e,[]),a.Ab(1073742336,W.o,W.o,[]),a.Ab(1073742336,L.c,L.c,[]),a.Ab(1073742336,P.b,P.b,[]),a.Ab(1073742336,J.l,J.l,[[2,J.f],[2,F.g]]),a.Ab(1073742336,J.s,J.s,[]),a.Ab(1073742336,J.q,J.q,[]),a.Ab(1073742336,J.o,J.o,[]),a.Ab(1073742336,_.g,_.g,[]),a.Ab(1073742336,j.c,j.c,[]),a.Ab(1073742336,z.e,z.e,[]),a.Ab(1073742336,E.c,E.c,[]),a.Ab(1073742336,V.a,V.a,[]),a.Ab(1073742336,X.c,X.c,[]),a.Ab(1073742336,Q.c,Q.c,[]),a.Ab(1073742336,U.a,U.a,[]),a.Ab(1073742336,$.a,$.a,[]),a.Ab(1073742336,ll.a,ll.a,[]),a.Ab(1073742336,nl.b,nl.b,[]),a.Ab(1073742336,bl.c,bl.c,[]),a.Ab(1073742336,Z.c,Z.c,[]),a.Ab(1073742336,K.g,K.g,[]),a.Ab(1073742336,q.i,q.i,[]),a.Ab(1073742336,al.a,al.a,[]),a.Ab(1073742336,el.c,el.c,[]),a.Ab(1073742336,tl.a,tl.a,[]),a.Ab(1073742336,J.m,J.m,[]),a.Ab(1073742336,rl.a,rl.a,[]),a.Ab(1073742336,ul.b,ul.b,[]),a.Ab(1073742336,ol.a,ol.a,[]),a.Ab(1073742336,cl.a,cl.a,[]),a.Ab(1073742336,Al.a,Al.a,[]),a.Ab(1073742336,G.b,G.b,[]),a.Ab(1073742336,J.u,J.u,[]),a.Ab(1073742336,J.n,J.n,[]),a.Ab(1073742336,H.c,H.c,[]),a.Ab(1073742336,Y.c,Y.c,[]),a.Ab(1073742336,I.c,I.c,[]),a.Ab(1073742336,il.a,il.a,[]),a.Ab(1073742336,sl.a,sl.a,[]),a.Ab(1073742336,hl.a,hl.a,[]),a.Ab(1073742336,dl.a,dl.a,[]),a.Ab(1073742336,gl.a,gl.a,[]),a.Ab(1073742336,pl.a,pl.a,[]),a.Ab(1073742336,fl.d,fl.d,[]),a.Ab(1073742336,R.c,R.c,[]),a.Ab(1073742336,ml.a,ml.a,[]),a.Ab(1073742336,kl.k,kl.k,[]),a.Ab(1073742336,Bl.a,Bl.a,[]),a.Ab(1073742336,vl.a,vl.a,[]),a.Ab(1073742336,Cl.o,Cl.o,[[2,Cl.u],[2,Cl.m]]),a.Ab(1073742336,e,e,[]),a.Ab(256,S.l,"XSRF-TOKEN",[]),a.Ab(256,S.m,"X-XSRF-TOKEN",[]),a.Ab(256,nl.a,{separatorKeyCodes:[yl.f]},[]),a.Ab(256,J.g,J.j,[]),a.Ab(1024,Cl.k,function(){return[[{path:"",component:m}]]},[])])})}}]);