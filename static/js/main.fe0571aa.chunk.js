(this["webpackJsonpalindanielferenczi.github.io"]=this["webpackJsonpalindanielferenczi.github.io"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i),o=(a(86),a(28)),c=a(53),m=a.n(c),s=a(64),u=a(49),p=a(138),d=a(140),h=a(141),E=a(39),g=a(151),b=a(136),f=a(153),v=a(14),y=a(68),x=a.n(y),w=a(69),C=a.n(w),j=Object(b.a)((function(e){return Object(f.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(u.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})})}));var k=function(){var e=j();return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(h.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(x.a,null)),r.a.createElement(E.a,{className:e.title,variant:"h6",noWrap:!0},"Alin-Daniel Ferenczi"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(C.a,null)),r.a.createElement(g.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})))))},O=a(145),A=a(143),S=a(142),I=a(154),N=a(75);var T={lightTheme:Object(N.a)({palette:{type:"light",background:{default:"#fff"},primary:{main:"#000"},secondary:{main:"#0000FF"}}}),darkTheme:Object(N.a)({palette:{type:"dark",background:{default:"#000"},primary:{main:"#fff"},secondary:{main:"#9932CC"}}})},L=r.a.createContext((function(e){})),P=function(e){var t=localStorage.getItem("appTheme")||"lightTheme",a=Object(n.useState)(t),i=Object(o.a)(a,2),l=i[0],c=i[1],m=function(e){return T[e]}(l);return r.a.createElement(L.Provider,{value:function(e){localStorage.setItem("appTheme",e),c(e)}},r.a.createElement(S.a,{theme:Object(I.a)(m)},r.a.createElement(A.a,null),e.children))},R=a(144),G=Object(b.a)((function(e){return Object(f.a)({stickToBottom:{flexGrow:1,width:"100%",position:"fixed",bottom:"2em",height:"3em"},button:{height:"3em"}})})),B=function(){var e=G(),t=Object(n.useContext)(L),a=Object(n.useState)("lightTheme"!==localStorage.getItem("appTheme")),i=Object(o.a)(a,2),l=i[0],c=i[1],m=r.a.useState("recents"),s=Object(o.a)(m,2);s[0],s[1];return r.a.createElement("div",{className:e.stickToBottom},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0},r.a.createElement(O.a,{variant:"contained",color:"primary",className:e.button,onClick:function(){t(l?"lightTheme":"darkTheme"),c(!l)}},"Set ",l?"Light":"Dark"," Theme"))))},W=a(70),z=a(71),D=a(77),F=a(76),Y=(a(92),function(e){Object(D.a)(a,e);var t=Object(F.a)(a);function a(){return Object(W.a)(this,a),t.apply(this,arguments)}return Object(z.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"logo-container"},r.a.createElement("img",{src:"/logo.png",className:"App-logo",alt:"logo"}))}}]),a}(n.Component)),U=a(152),M=a(147),H=a(155),J=a(148),K=a(149),V=a(146),$=a(150),_=Object(b.a)((function(e){return Object(f.a)({root:{position:"absolute",zIndex:1},button:{position:"fixed",height:"3em",padding:"6px 16px",bottom:"2em",right:0}})})),Q=function(e){var t=_();return r.a.createElement("div",{className:t.root},r.a.createElement(O.a,{variant:"contained",color:"primary",className:t.button},"Open Chatbot"),r.a.createElement($.a,{open:!e.isAuthenticated},r.a.createElement(V.a,{id:"simple-dialog-title"},"Sign in"),r.a.createElement("div",null,r.a.createElement(M.a,null,r.a.createElement(H.a,{button:!0,onClick:function(){return e.signIn()}},r.a.createElement(J.a,null,r.a.createElement(U.a,{style:{backgroundColor:"#eee"}},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",height:"30",alt:"G"}))),r.a.createElement(K.a,{primary:"Sign in with Google"}))))))},X=a(34),q=a.n(X),Z=a(73),ee=a(25),te=a(107),ae=a(78),ne=Object(b.a)((function(e){return Object(f.a)({root:{flexGrow:1},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}})}));function re(){var e=ne();return r.a.createElement("div",{className:e.root},r.a.createElement(te.a,{className:e.paper},r.a.createElement(R.a,{container:!0,spacing:2},r.a.createElement(R.a,{item:!0},r.a.createElement(ae.a,{className:e.image},r.a.createElement("img",{className:e.img,alt:"complex",src:"/logo.png"}))),r.a.createElement(R.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(R.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle1"},"Standard license"),r.a.createElement(E.a,{variant:"body2",gutterBottom:!0},"Full resolution 1920x1080 \u2022 JPEG"),r.a.createElement(E.a,{variant:"body2",color:"textSecondary"},"ID: 1030114")),r.a.createElement(R.a,{item:!0},r.a.createElement(E.a,{variant:"body2",style:{cursor:"pointer"}},"Remove"))),r.a.createElement(R.a,{item:!0},r.a.createElement(E.a,{variant:"subtitle1"},"$19.00"))))))}var ie=a(38);var le=function(){return r.a.createElement(R.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",style:{minHeight:"100vh",width:"100%"}},r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement(R.a,{container:!0,spacing:1},r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement("div",{style:{display:"flex",maxWidth:900}},r.a.createElement(ie.a,{style:{fill:"#123456"},width:400,height:300,chartType:"ColumnChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["City","2010 Population","2000 Population"],["New York City, NY",8175e3,8008e3],["Los Angeles, CA",3792e3,3694e3],["Chicago, IL",2695e3,2896e3],["Houston, TX",2099e3,1953e3],["Philadelphia, PA",1526e3,1517e3]],options:{title:"Population of Largest U.S. Cities",chartArea:{width:"30%"},hAxis:{title:"Total Population",minValue:0},vAxis:{title:"City"}},legendToggle:!0}),r.a.createElement(ie.a,{width:400,height:"300px",chartType:"AreaChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["Year","Sales","Expenses"],["2013",1e3,400],["2014",1170,460],["2015",660,1120],["2016",1030,540]],options:{title:"Company Performance",hAxis:{title:"Year",titleTextStyle:{color:"#333"}},vAxis:{minValue:0},chartArea:{width:"50%",height:"70%"}}})),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(ie.a,{width:400,height:"300px",chartType:"BubbleChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["ID","Life Expectancy","Fertility Rate","Region","Population"],["CAN",80.66,1.67,"North America",33739900],["DEU",79.84,1.36,"Europe",81902307],["DNK",78.6,1.84,"Europe",5523095],["EGY",72.73,2.78,"Middle East",79716203],["GBR",80.05,2,"Europe",61801570],["IRN",72.49,1.7,"Middle East",73137148],["IRQ",68.09,4.77,"Middle East",31090763],["ISR",81.55,2.96,"Middle East",7485600],["RUS",68.6,1.54,"Europe",14185e4],["USA",78.09,2.05,"North America",307007e3]],options:{title:"Correlation between life expectancy, fertility rate and population of some world countries (2010)",hAxis:{title:"Life Expectancy"},vAxis:{title:"Fertility Rate"},bubble:{textStyle:{fontSize:11}}}}),r.a.createElement(ie.a,{width:400,height:300,chartType:"LineChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[[{type:"number",label:"x"},{type:"number",label:"values"},{id:"i0",type:"number",role:"interval"},{id:"i1",type:"number",role:"interval"},{id:"i2",type:"number",role:"interval"},{id:"i2",type:"number",role:"interval"},{id:"i2",type:"number",role:"interval"},{id:"i2",type:"number",role:"interval"}],[1,100,90,110,85,96,104,120],[2,120,95,130,90,113,124,140],[3,130,105,140,100,117,133,139],[4,90,85,95,85,88,92,95],[5,70,74,63,67,69,70,72],[6,30,39,22,21,28,34,40],[7,80,77,83,70,77,85,90],[8,100,90,110,85,95,102,110]],options:{intervals:{style:"sticks"},legend:"none"}}))))),r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement(R.a,{container:!0,spacing:3},r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement(R.a,{container:!0,spacing:3},r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement(re,null)),r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement(re,null))),r.a.createElement(R.a,{container:!0,spacing:3},r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement(re,null)),r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement(re,null)),r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement(re,null))),r.a.createElement(R.a,{container:!0,spacing:3},r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement(re,null)),r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement(re,null))),r.a.createElement(R.a,{item:!0,xs:!0}),r.a.createElement(R.a,{container:!0,spacing:1},r.a.createElement(R.a,{item:!0},r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:function(){alert("Previous page not available")}},"Prev")),r.a.createElement(R.a,{item:!0},r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:function(){alert("Next page not available")}},"Next")))))))};q.a.initializeApp({apiKey:"AIzaSyAWSbmLVn4fcW2bCkebr5SE3kOTSb0CtKI",authDomain:"personalwebsite-51279.firebaseapp.com",databaseURL:"https://personalwebsite-51279.firebaseio.com",projectId:"personalwebsite-51279",storageBucket:"personalwebsite-51279.appspot.com",messagingSenderId:"837623330342",appId:"1:837623330342:web:85063ba181ccc447a058e7",measurementId:"G-CLY61BPE6B"}),q.a.analytics();var oe=Object(b.a)((function(e){return Object(f.a)({root:{flexGrow:1,width:"100%"}})})),ce=function(){var e=Object(s.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new q.a.auth.GoogleAuthProvider,e.prev=1,e.next=4,q.a.auth().signInWithPopup(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();var me=function(){var e=oe(),t=Object(n.useState)({isAuthenticated:!1,user:{},messages:[]}),a=Object(o.a)(t,2),i=a[0],l=a[1];return Object(n.useEffect)((function(){q.a.auth().onAuthStateChanged((function(e){l(e?{isAuthenticated:!0,user:e,messages:[]}:{isAuthenticated:!1,user:{},messages:[]})}))})),r.a.createElement("div",{className:e.root},r.a.createElement(k,null),r.a.createElement(Z.a,null,r.a.createElement("div",null,r.a.createElement(ee.c,null,r.a.createElement(ee.a,{path:"/dashboard"},r.a.createElement(le,null)),r.a.createElement(ee.a,{path:"/"},r.a.createElement(Y,null))))),r.a.createElement(B,null),r.a.createElement(Q,{isAuthenticated:i.isAuthenticated,signIn:ce}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(P,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){e.exports=a(105)},86:function(e,t,a){},92:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.fe0571aa.chunk.js.map