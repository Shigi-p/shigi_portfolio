(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,a,t){e.exports=t(21)},15:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(3),r=t.n(i),s=(t(15),t(4)),o=t(5),c=t(8),u=t(6),g=t(1),m=t(9),p=t(7),h=t.n(p),d=(t(20),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).state={page:0,maxPage:9,swipePageValid:!1},t.pages=t.pages.bind(Object(g.a)(t)),t.bookmark=t.bookmark.bind(Object(g.a)(t)),t.showBookmark=t.showBookmark.bind(Object(g.a)(t)),t.goNextpage=t.goNextpage.bind(Object(g.a)(t)),t.goPreviouspage=t.goPreviouspage.bind(Object(g.a)(t)),t.changePage=t.changePage.bind(Object(g.a)(t)),t.onSwipeMove=t.onSwipeMove.bind(Object(g.a)(t)),t.onSwipeEnd=t.onSwipeEnd.bind(Object(g.a)(t)),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"pages",value:function(e){var a=this;switch(e){case 0:return l.a.createElement("div",{className:"Page0"});case 1:return l.a.createElement("div",{className:"Page1 Padding"},l.a.createElement("h1",null,"This is my portfolio."));case 2:return l.a.createElement("div",{className:"Page2 Padding"},l.a.createElement("h1",null,"\u76ee\u6b21"),l.a.createElement("hr",null),l.a.createElement("ul",null,l.a.createElement("li",{onClick:function(){return a.setState({page:3})}},"Part1.\u9d2b\u539f\u4fca\u6a39\u306b\u3064\u3044\u3066"),l.a.createElement("li",{onClick:function(){return a.setState({page:3})}},"Part2.\u5927\u5b66\u3067\u306e\u66ae\u3089\u3057"),l.a.createElement("li",{onClick:function(){return a.setState({page:3})}},"Part3.\u3064\u304f\u3063\u305f\u3082\u306e"),l.a.createElement("li",{onClick:function(){return a.setState({page:3})}},"Part4.\u9023\u7d61\u5148")));case 3:return l.a.createElement("div",{className:"Page3 Padding"},l.a.createElement("h1",null,"Part1.\u9d2b\u539f\u4fca\u6a39\u306b\u3064\u3044\u3066"),l.a.createElement("hr",null),l.a.createElement("p",null,"\u3053\u3053\u306b\u753b\u50cf\u3092\u633f\u5165"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4f1a\u6d25\u5927\u5b66\u5b66\u90e83\u5e74"),l.a.createElement("li",null,"\u30d5\u30ed\u30f3\u30c8\u66f8\u304d\u307e\u3059")));case 4:return l.a.createElement("div",{className:"Page4 Padding"},l.a.createElement("h1",null,"Part2.\u5927\u5b66\u3067\u306e\u66ae\u3089\u3057"),l.a.createElement("hr",null),l.a.createElement("p",null,"\u751f\u304d\u308b\u3002"));case 5:return l.a.createElement("div",{className:"Page5 Padding"},l.a.createElement("h1",null,"Part3.\u3064\u304f\u3063\u305f\u3082\u306e"),l.a.createElement("hr",null),l.a.createElement("p",null,"\u3076\u306d\u3059\u3068"));case 6:return l.a.createElement("div",{className:"Page6 Padding"},l.a.createElement("h1",null,"Part4.\u9023\u7d61\u5148"),l.a.createElement("hr",null),l.a.createElement("p",null,"\u304e\u3063\u3068\u306f\u3076"));default:return l.a.createElement("div",{className:"Page99"})}}},{key:"bookmark",value:function(){return l.a.createElement("div",{className:"Bookmark",onClick:this.showBookmark()})}},{key:"showBookmark",value:function(){}},{key:"goNextpage",value:function(){this.setState({page:this.state.page+1})}},{key:"goPreviouspage",value:function(){this.setState({page:this.state.page-1})}},{key:"changePage",value:function(e){this.setState({page:parseInt(e,10)})}},{key:"onSwipeMove",value:function(e,a){parseInt(e.x,10)>200&&!this.state.swipePageValid?(console.log("Moved ".concat(e.x," pixels horizontally"),a),this.setState({page:this.state.page+1,swipePageValid:!0})):parseInt(e.x,10)<-200&&!this.state.swipePageValid&&(console.log("Moved ".concat(e.x," pixels horizontally"),a),this.setState({page:this.state.page-1,swipePageValid:!0}))}},{key:"onSwipeEnd",value:function(){this.setState({swipePageValid:!1})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"Book"},l.a.createElement(h.a,{onSwipeMove:this.onSwipeMove,onSwipeEnd:this.onSwipeEnd},this.bookmark(),l.a.createElement("div",{className:"RightPage"},this.pages(this.state.page),l.a.createElement("span",{className:"PreviouspageButton",onClick:function(){return e.goPreviouspage()}})),l.a.createElement("div",{className:"LeftPage"},l.a.createElement("span",{className:"NextpageButton",onClick:function(){return e.goNextpage()}}),this.pages(this.state.page+1)))),l.a.createElement("div",{className:"BottomMenubar"},this.state.page+1,l.a.createElement("input",{className:"InputRange",type:"range",value:this.state.page,min:"0",max:this.state.maxPage,step:"1",onChange:function(a){return e.changePage(a.target.value)}}),this.state.page))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.3075ed22.chunk.js.map