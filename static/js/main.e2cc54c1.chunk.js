(this.webpackJsonpapi_react=this.webpackJsonpapi_react||[]).push([[0],{14:function(e,t,a){e.exports=a(29)},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(9),s=a.n(l),r=(a(19),a(20),a(21),a(3)),i=a(10),o=a(12),m=a(11),u=a(4),h=a(13),d=(a(22),function e(t,a,n,c){Object(r.a)(this,e),this.last=t,this.buy=a,this.sell=n,this.symbol=c}),b=a(1),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={currencies:[],index:-1,data:[d]},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){this.setState((function(t){return{index:e}}))}},{key:"componentWillMount",value:function(){var e=this;fetch("https://blockchain.info/ticker").then((function(e){return e.json()})).then((function(t){e.setState({currencies:Object.keys(t)}),e.setState({data:Object.values(t)}),console.log(e.state)}))}},{key:"render",value:function(){var e=this,t=this.state.index;return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.Grid,{fluid:!0},c.a.createElement(b.Row,{center:"xs"},c.a.createElement(b.Col,{lg:6,md:8,sm:10,xs:12},this.state.currencies.map((function(t,a){return c.a.createElement("button",{className:"currencies",key:"".concat(t),onClick:function(){e.handleClick(a)}},t)}))))),c.a.createElement(b.Grid,{fluid:!0,className:"mt-4"},c.a.createElement(b.Row,{center:"xs"},c.a.createElement(b.Col,{lg:6,md:8,sm:10,xs:12},t>-1&&c.a.createElement("p",{className:"mt-3 mb-0"},"1BTC(\u20bf) =",c.a.createElement("b",{className:"price ml-1"},this.state.data[t].last,"(",this.state.data[t].symbol,")"))))),t>-1&&c.a.createElement(b.Grid,{fluid:!0},c.a.createElement(b.Row,{center:"xs"},c.a.createElement(b.Col,{lg:6,md:8,sm:10,xs:12},c.a.createElement("span",null,"Last: ",c.a.createElement("b",null,this.state.data[t].last)),c.a.createElement("span",{className:"ml-2"},"Buy: ",c.a.createElement("b",null,this.state.data[t].buy)),c.a.createElement("span",{className:"ml-2"},"Sell: ",c.a.createElement("b",null,this.state.data[t].sell)),c.a.createElement("span",{className:"ml-2"},"Symbol: ",c.a.createElement("b",null,this.state.data[t].symbol))))))}}]),t}(n.Component);var f=function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"mt-5 mb-0"}," Bitcoin prices ")," ",c.a.createElement("h6",{className:"mt-0"}," Select one currency ")," ",c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.e2cc54c1.chunk.js.map