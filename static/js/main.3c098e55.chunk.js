(this["webpackJsonplanddox-react-code-challenge"]=this["webpackJsonplanddox-react-code-challenge"]||[]).push([[0],{20:function(e,a,t){e.exports=t(31)},25:function(e,a,t){},27:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),o=(t(25),t(19)),u=t(11),i=t(35),m=t(33),s=t(18),d=t(36),E=t(37),b=t(39),p=(t(26),t(38)),h=(t(27),t(34)),v=t(17),g=t(40);var f=function(e){var a=e.addMineralInterest,t=Object(n.useState)(""),r=Object(u.a)(t,2),c=r[0],o=r[1];return l.a.createElement(p.a,{onSubmit:function(e){e.preventDefault(),c&&(a(c),o(""))}},l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement(p.a.Control,{placeholder:"Name",type:"text",value:c,onChange:function(e){return o(e.target.value)}})),l.a.createElement(s.a,null,l.a.createElement(h.a,{className:"mb-3"},l.a.createElement(v.a,{placeholder:"Mineral Interest","aria-label":"Mineral Interest","aria-describedby":"basic-addon2"}),l.a.createElement(h.a.Append,null,l.a.createElement(h.a.Text,{id:"basic-addon2",type:"text",value:c,onChange:function(e){return o(e.target.value)}},"%")))),l.a.createElement(s.a,null),l.a.createElement(s.a,null,l.a.createElement(p.a.Control,{placeholder:"Lease",type:"text",value:c,onChange:function(e){return o(e.target.value)}}))),l.a.createElement(g.a,{type:"submit"},"Add Mineral Interest"))};var w=function(e){var a=e.mineralInterest;return e.index,l.a.createElement(p.a,{"data-testid":"mineral-interest"},l.a.createElement(m.a,null,l.a.createElement(s.a,null,a.owner),l.a.createElement(s.a,null,a.interest),l.a.createElement(s.a,null),l.a.createElement(s.a,null,a.lease)))},L=[{id:Object(b.a)(),owner:"Luke Skywalker",interest:.5,lease:"Tatooine Lease",npris:[{id:Object(b.a)(),owner:"Leia Organa",interest:.45},{id:Object(b.a)(),owner:"Han Solo",interest:.15}]},{id:Object(b.a)(),owner:"Leia Organa",interest:"5",lease:"Alderaan Lease",npris:[]}];var O=function(){var e=Object(n.useState)(L),a=Object(u.a)(e,2),t=a[0],r=a[1];return l.a.createElement(i.a,null,l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement(d.a,null,l.a.createElement(s.a,null,l.a.createElement("h1",null,l.a.createElement(E.a,{src:"public/lando.png",roundedCircle:!0}),"Landdox Calrissian Code Challenge"))))),l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement(p.a.Label,null,"Owner")),l.a.createElement(s.a,null,l.a.createElement(p.a.Label,null,"Mineral Interest")),l.a.createElement(s.a,null,l.a.createElement(p.a.Label,null,"NPRI")),l.a.createElement(s.a,null,l.a.createElement(p.a.Label,null,"Lease"))),l.a.createElement("hr",null),l.a.createElement(m.a,null,l.a.createElement(s.a,null,t.map((function(e,a){return l.a.createElement(w,{key:a,index:a,mineralInterest:e})})),l.a.createElement(f,{addMineralInterest:function(e){var a=[].concat(Object(o.a)(t),[{text:e}]);r(a)},value:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.3c098e55.chunk.js.map