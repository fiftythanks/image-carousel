(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var s={},i=[],a=0;a<n.length;a++){var c=n[a],A=r.base?c[0]+r.base:c[0],l=s[A]||0,u="".concat(A," ").concat(l);s[A]=l+1;var p=t(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var f=o(d,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var s=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<s.length;i++){var a=t(s[i]);e[a].references--}for(var c=r(n,o),A=0;A<s.length;A++){var l=t(s[A]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}s=c}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},208:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(354),o=t.n(r),s=t(314),i=t.n(s)()(o());i.push([n.id,"/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* My own style rules */\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n.frame {\n  position: relative;\n  height: 628px;\n  width: 1200px;\n  overflow-x: clip;\n}\n.slides {\n  display: flex;\n  position: absolute;\n  width: 4800px;\n  & > img {\n    flex: 0 0 1200px;\n  }\n}\n.left,\n.right {\n  background: none;\n  border: none;\n  padding: 0;\n  height: fit-content;\n  &:hover {\n    cursor: pointer;\n  }\n}\n.dots {\n  position: absolute;\n  bottom: 15px;\n  left: calc((1200 / 2 - 75 / 2) * 1px);\n  display: flex;\n  gap: 5px;\n  width: 75px;\n  height: 15px;\n  justify-content: center;\n  align-items: center;\n  & > button {\n    padding: 0;\n    flex: 0 0 15px;\n    width: 15px;\n    height: 15px;\n    background-color: #fff;\n    border: none;\n    border-radius: 15px;\n    &.current-slide {\n      border: 2px solid white;\n      background-color: black;\n    }\n    &:hover {\n      cursor: pointer;\n    }\n  }\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;AACA;;;;;;EAME,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA,uBAAuB;AACvB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb;IACE,gBAAgB;EAClB;AACF;AACA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB;IACE,eAAe;EACjB;AACF;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,qCAAqC;EACrC,aAAa;EACb,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB;IACE,UAAU;IACV,cAAc;IACd,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB;MACE,uBAAuB;MACvB,uBAAuB;IACzB;IACA;MACE,eAAe;IACjB;EACF;AACF",sourcesContent:["/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* My own style rules */\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n.frame {\n  position: relative;\n  height: 628px;\n  width: 1200px;\n  overflow-x: clip;\n}\n.slides {\n  display: flex;\n  position: absolute;\n  width: 4800px;\n  & > img {\n    flex: 0 0 1200px;\n  }\n}\n.left,\n.right {\n  background: none;\n  border: none;\n  padding: 0;\n  height: fit-content;\n  &:hover {\n    cursor: pointer;\n  }\n}\n.dots {\n  position: absolute;\n  bottom: 15px;\n  left: calc((1200 / 2 - 75 / 2) * 1px);\n  display: flex;\n  gap: 5px;\n  width: 75px;\n  height: 15px;\n  justify-content: center;\n  align-items: center;\n  & > button {\n    padding: 0;\n    flex: 0 0 15px;\n    width: 15px;\n    height: 15px;\n    background-color: #fff;\n    border: none;\n    border-radius: 15px;\n    &.current-slide {\n      border: 2px solid white;\n      background-color: black;\n    }\n    &:hover {\n      cursor: pointer;\n    }\n  }\n}\n"],sourceRoot:""}]);const a=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,s){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var A=0;A<n.length;A++){var l=[].concat(n[A]);r&&i[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),s="/*# ".concat(o," */");return[e].concat([s]).join("\n")}return[e].join("\n")}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={id:r,exports:{}};return n[r](s,s.exports,t),s.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),s=t(825),i=t.n(s),a=t(659),c=t.n(a),A=t(56),l=t.n(A),u=t(540),p=t.n(u),d=t(113),f=t.n(d),h=t(208),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(h.A,g),h.A&&h.A.locals&&h.A.locals;const C=document.querySelector(".slides"),x=Array.from(document.querySelector(".dots").children);let m,b,v;function E(){switch(C.style.left){case"0px":C.style.left="-1200px",x[0].classList.toggle("current-slide"),x[1].classList.toggle("current-slide"),v=!1,b=setInterval(E,5e3);break;case"-1200px":C.style.left="-2400px",x[1].classList.toggle("current-slide"),x[2].classList.toggle("current-slide"),v=!1;break;case"-2400px":C.style.left="-3600px",x[2].classList.toggle("current-slide"),x[3].classList.toggle("current-slide"),v=!0,clearInterval(b);break;case"-3600px":C.style.left="0px",x[3].classList.toggle("current-slide"),x[0].classList.toggle("current-slide"),v=!1}}m=setTimeout(E,5e3);const y=document.querySelector(".left"),B=document.querySelector(".right");y.addEventListener("click",(()=>{!function(){switch(C.style.left){case"-3600px":C.style.left="-2400px",x[3].classList.toggle("current-slide"),x[2].classList.toggle("current-slide"),v=!1;break;case"-2400px":C.style.left="-1200px",x[2].classList.toggle("current-slide"),x[1].classList.toggle("current-slide"),v=!1;break;case"-1200px":C.style.left="0px",x[1].classList.toggle("current-slide"),x[0].classList.toggle("current-slide"),v=!1;break;case"0px":C.style.left="-3600px",x[0].classList.toggle("current-slide"),x[3].classList.toggle("current-slide"),v=!0}}(),clearTimeout(m),clearInterval(b),v||(m=setTimeout(E(),5e3))})),B.addEventListener("click",(()=>{E(),clearTimeout(m),clearInterval(b),v||(m=setTimeout(E(),5e3))}))})();
//# sourceMappingURL=app.bundle.js.map