import{r as t,_ as n,a as e,b as a,c as r,i as s,d as c,S as o,s as u,e as i,f,t as l,q as h,g as p,h as d,j as v,k as m,l as y,H as g,m as b,n as R,o as j,p as x,u as k,v as w}from"./client.f5519b77.js";import{_ as D}from"./asyncToGenerator.5229e80b.js";function E(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,s=e(t);if(n){var c=e(this).constructor;r=Reflect.construct(s,arguments,c)}else r=s.apply(this,arguments);return a(this,r)}}function q(t){var n,e,a,r,s,c,o,u=t[0].title+"",D=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=i(),a=f("div"),r=f("h1"),s=l(u),c=i(),this.h()},l:function(t){h('[data-svelte="svelte-1qygh36"]',document.head).forEach(p),e=d(t),a=v(t,"DIV",{class:!0});var n=m(a);r=v(n,"H1",{});var o=m(r);s=y(o,u),o.forEach(p),c=d(n),n.forEach(p),this.h()},h:function(){o=new g(null),b(a,"class","content")},m:function(t,n){R(t,e,n),R(t,a,n),j(a,r),j(r,s),j(a,c),o.m(D,a)},p:function(t,e){var a=x(e,1)[0];1&a&&n!==(n=t[0].title)&&(document.title=n),1&a&&u!==(u=t[0].title+"")&&k(s,u),1&a&&D!==(D=t[0].html+"")&&o.p(D)},i:w,o:w,d:function(t){t&&p(e),t&&p(a)}}}function H(t){return S.apply(this,arguments)}function S(){return(S=D(t.mark((function n(e){return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.fetch("http://localhost:2368/ghost/api/v2/content/posts/?key=3a0d5f42eef6297bed693c32ff").then((function(t){return t.json()})).then((function(t){var n=e.path;return t.posts=t.posts.filter((function(t){return n.includes(t.slug)})),{pagedata:t.posts[0]}})));case 1:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function $(t,n,e){var a=n.pagedata;return t.$$set=function(t){"pagedata"in t&&e(0,a=t.pagedata)},[a]}var _=function(t){n(a,o);var e=E(a);function a(t){var n;return r(this,a),n=e.call(this),s(c(n),t,$,q,u,{pagedata:0}),n}return a}();export default _;export{H as preload};
