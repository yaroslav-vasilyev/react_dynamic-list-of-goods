(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,o){"use strict";o.r(n);var e=o(3),c=o.n(e),r=o(4),i=o(1),u=(o(9),o(0)),a=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)("li",{"data-cy":"good",style:{color:"".concat(t.color)},children:t.name},t.id)}))})};function s(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),o=n[0],e=n[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),Object(u.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){s().then((function(t){return e(t)}))},children:"Load all goods"}),Object(u.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){s().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).filter((function(t){return t.id<=5}))})).then((function(t){return e(t)}))},children:"Load 5 first goods"}),Object(u.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){s().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){return e(t)}))},children:"Load red goods"}),Object(u.jsx)(a,{goods:o})]})};c.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))},9:function(t,n,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.a2c1ab4d.chunk.js.map