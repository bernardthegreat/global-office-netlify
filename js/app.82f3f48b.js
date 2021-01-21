(function(e){function o(o){for(var s,n,c=o[0],f=o[1],i=o[2],l=0,u=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in f)Object.prototype.hasOwnProperty.call(f,s)&&(e[s]=f[s]);b&&b(o);while(u.length)u.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,o=0;o<a.length;o++){for(var t=a[o],s=!0,n=1;n<t.length;n++){var c=t[n];0!==r[c]&&(s=!1)}s&&(a.splice(o--,1),e=f(f.s=t[0]))}return e}var s={},n={1:0},r={1:0},a=[];function c(e){return f.p+"js/"+({}[e]||e)+"."+{2:"efcfc794",3:"42e46bbe",4:"74771008"}[e]+".js"}function f(o){if(s[o])return s[o].exports;var t=s[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var o=[],t={2:1,3:1};n[e]?o.push(n[e]):0!==n[e]&&t[e]&&o.push(n[e]=new Promise((function(o,t){for(var s="css/"+({}[e]||e)+"."+{2:"374f094b",3:"9ab108cb",4:"31d6cfe0"}[e]+".css",r=f.p+s,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var i=a[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===s||l===r))return o()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){i=u[c],l=i.getAttribute("data-href");if(l===s||l===r)return o()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=o,b.onerror=function(o){var s=o&&o.target&&o.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=s,delete n[e],b.parentNode.removeChild(b),t(a)},b.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){n[e]=0})));var s=r[e];if(0!==s)if(s)o.push(s[2]);else{var a=new Promise((function(o,t){s=r[e]=[o,t]}));o.push(s[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,f.nc&&l.setAttribute("nonce",f.nc),l.src=c(e);var u=new Error;i=function(o){l.onerror=l.onload=null,clearTimeout(b);var t=r[e];if(0!==t){if(t){var s=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",u.name="ChunkLoadError",u.type=s,u.request=n,t[1](u)}r[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(o)},f.m=e,f.c=s,f.d=function(e,o,t){f.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,o){if(1&o&&(e=f(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var s in e)f.d(t,s,function(o){return e[o]}.bind(null,s));return t},f.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(o,"a",o),o},f.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},f.p="",f.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=o,i=i.slice();for(var u=0;u<i.length;u++)o(i[u]);var b=l;a.push([0,0]),t()})({0:function(e,o,t){e.exports=t("2f39")},"0047":function(e,o,t){},"034f":function(e,o,t){"use strict";t("ed82")},"2f39":function(e,o,t){"use strict";t.r(o);t("e6cf"),t("5319"),t("7d6e"),t("e54f"),t("985d"),t("0047");var s=t("2b0e"),n=t("1f91"),r=t("42d2"),a=t("b05d");s["a"].use(a["a"],{config:{},lang:n["a"],iconSet:r["a"]});var c=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},f=[],i={name:"App"},l=i,u=(t("034f"),t("2877")),b=Object(u["a"])(l,c,f,!1,null,null,null),d=b.exports,j=t("2f62"),m=(t("4e82"),t("c1df")),h=t.n(m);const p={apiUrl:"http://global-office.ca",hourlyBookings:[],testHourlyBookings:[{book_from:"15:00",book_to:"16:30"},{book_from:"16:30",book_to:"19:00"},{book_from:"04:00",book_to:"15:00"},{book_from:"03:00",book_to:"04:00"}],hourlyBookingsAvailable:[],hourlyBookingsTaken:[]},g={setAvailableBookings(e,o){const t=o.bookings;t.sort(((e,t)=>{const s=`${o.date} ${e.book_from}`,n=`${o.date} ${t.book_from}`;return s<n?-1:s>n?1:void 0}));const s=[];var n=h()(o.date).format("YYYY-MM-DD")+" 0:00",r=h()(o.date).format("YYYY-MM-DD")+" 0:00";t.forEach(((e,a)=>{const c=h()(o.date).format("YYYY-MM-DD")+" "+e.book_to,f=h()(o.date).format("YYYY-MM-DD")+" "+e.book_from;if(h()(f).isBefore(r)&&(r=f),h()(c).isAfter(n)&&(n=c),a===t.length-1)1===t.length&&s.push({book_from:"0:00",book_to:h()(f).format("H:mm")}),s.push({book_from:h()(n).format("H:mm"),book_to:"0:00"});else{const e=t[a+1],r=`${o.date} ${e.book_from}`;0===a&&s.push({book_from:"0:00",book_to:h()(f).format("H:mm")});var i=h()(c).isBefore(n)?n:c;h()(i).isBefore(r)&&s.push({book_from:h()(i).format("H:mm"),book_to:h()(r).format("H:mm")})}})),e.hourlyBookingsAvailable=s,e.hourlyBookingsTaken=o.bookings}},k={async getHourlyBookings(e,o){const t=this.state.booking.testHourlyBookings,s={bookings:t,date:o};t.length,e.commit("setAvailableBookings",s),console.log(o)}},v={hourlyBookingsAvailable(e){return e.hourlyBookingsAvailable},hourlyBookingsTaken(e){return e.hourlyBookingsTaken}};var y={namespace:!0,state:p,mutations:g,actions:k,getters:v};s["a"].use(j["a"]);var w=function(){const e=new j["a"].Store({modules:{booking:y},strict:!1});return e},_=t("8c4f");const z=[{path:"/",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"8b24"))}]},{path:"*",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"e51e"))}];var B=z;s["a"].use(_["a"]);var O=function(){const e=new _["a"]({scrollBehavior:()=>({x:0,y:0}),routes:B,mode:"hash",base:""});return e},x=async function(){const e="function"===typeof w?await w({Vue:s["a"]}):w,o="function"===typeof O?await O({Vue:s["a"],store:e}):O;e.$router=o;const t={router:o,store:e,render:e=>e(d),el:"#q-app"};return{app:t,store:e,router:o}},P=t("bc3a"),Y=t.n(P);s["a"].prototype.$axios=Y.a;const A="";async function E(){const{app:e,store:o,router:t}=await x();let n=!1;const r=e=>{n=!0;const o=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=o},a=window.location.href.replace(window.location.origin,""),c=[void 0];for(let i=0;!1===n&&i<c.length;i++)if("function"===typeof c[i])try{await c[i]({app:e,router:t,store:o,Vue:s["a"],ssrContext:null,redirect:r,urlPath:a,publicPath:A})}catch(f){return f&&f.url?void(window.location.href=f.url):void console.error("[Quasar] boot error:",f)}!0!==n&&new s["a"](e)}E()},4678:function(e,o,t){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var o=r(e);return t(o)}function r(e){if(!t.o(s,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},ed82:function(e,o,t){}});