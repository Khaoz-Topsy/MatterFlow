(this["webpackJsonpmatter-flow-web"]=this["webpackJsonpmatter-flow-web"]||[]).push([[0],{10:function(e,t,a){e.exports=a(25)},23:function(e,t){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=a(4),i=a(7),s=a(9),u=a(8),m=function(e,t){var a=3*t+t;return console.log(e.substring(a,a+3)),e.substring(a,a+3)},d=function(){for(var e=999*Math.random(),t=Math.floor(e).toString(),a=3-t.length,n="",r=0;r<a;r++)n+="0";return n+=t},g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"sidebar-toggle",style:{width:"50px"},src:"assets/img/menu.webp",onClick:function(){var e,t;null===(e=document.querySelector(".sidebar"))||void 0===e||e.classList.toggle("open"),null===(t=document.querySelector(".sidebar-toggle"))||void 0===t||t.classList.toggle("open")},alt:"menu"}),r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"sidebar-header"},r.a.createElement("p",null,"Current Seed",r.a.createElement("br",null),r.a.createElement("span",{style:{fontWeight:"bold"}},e.guid)),r.a.createElement("hr",null),r.a.createElement("small",null,"This key is unique to you, it changes the way the website is loaded for you. This page is most likely unique to you")))))},E=a(15),h=function(e,t){try{return E(e)()*t}catch(a){return 0}},v=function(e,t,a){var n=Math.round(t/a*e);console.log("randomHelper",{index:n});var r=0;return n<=e&&(r=n),r},p=function e(){Object(o.a)(this,e)};p.Logo=0,p.Main=1,p.MainImage=2;var f=function(){return r.a.createElement("section",{id:"logo"},r.a.createElement("img",{src:"assets/img/logo.png",alt:"logo"}),r.a.createElement("h2",null,"Your flow is what matters"))},b=function(e){var t=m(e.guid,p.Logo),a=h(t,1e3);console.log("Logo",{rando:a});switch(v(1,a,1e3)){case 0:default:return r.a.createElement(f,null)}},y=function(e){var t=m(e.guid,p.MainImage),a=h(t,1e3);console.log("Main1",{rando:a});var n=v(3,a,1e3);return r.a.createElement("section",{id:"main",style:{backgroundImage:"url(/assets/img/screen".concat(n,".jpg)")}},r.a.createElement("div",{className:"mainGrid"},r.a.createElement("div",{className:"item1"},r.a.createElement("p",null,"Procedurally generated Space Stations"),r.a.createElement("p",null,"Procedurally generated Space Ships"),r.a.createElement("p",null,"Procedurally generated Weapons"),r.a.createElement("p",null,"Procedurally generated Chairs!"),r.a.createElement("p",null,"Procedurally generated Space Stations")),r.a.createElement("div",{className:"item2"}),r.a.createElement("div",{className:"item3"})))},w=function(e){var t=m(e.guid,p.MainImage),a=h(t,1e3);console.log("Main2",{rando:a});var n=v(3,a,1e3);return r.a.createElement("section",{id:"main",style:{backgroundImage:"url(/assets/img/screen".concat(n,".jpg)")}},r.a.createElement("div",{className:"mainGrid"},r.a.createElement("div",{className:"item1"},r.a.createElement("p",null,"Procedurally generated Space Stations")),r.a.createElement("div",{className:"item2"}),r.a.createElement("div",{className:"item3"})))},N=function(e){var t=m(e.guid,p.Main),a=h(t,1e3);console.log("Main",{rando:a});switch(v(2,a,1e3)){case 0:default:return r.a.createElement(y,e);case 1:return r.a.createElement(w,e)}},S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={guid:"".concat(d(),"-").concat(d(),"-").concat(d(),"-").concat(d())},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{guid:this.state.guid}),r.a.createElement("div",{className:"content"},r.a.createElement(b,{guid:this.state.guid}),r.a.createElement(N,{guid:this.state.guid}),r.a.createElement("section",{id:"footer"},r.a.createElement("div",{className:"container"}),r.a.createElement("div",{id:"copyright"},r.a.createElement("ul",null,r.a.createElement("li",null,"\xa9 Matter Flow"),r.a.createElement("li",null,"Created by: Avgust Stupin"),r.a.createElement("li",null,"Web Design: ",r.a.createElement("a",{href:"https://kurtlourens.com"},"Kurt Lourens")))))))}}]),a}(r.a.PureComponent);a(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("matterFlow")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.6b2b1cb6.chunk.js.map