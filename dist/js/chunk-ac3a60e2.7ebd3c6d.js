(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac3a60e2"],{"07f7":function(t,e,r){t.exports=r.p+"img/03.bfa962e9.png"},"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),i=r("17c2"),s=r("9112");for(var o in a){var c=n[o],l=c&&c.prototype;if(l&&l.forEach!==i)try{s(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),i=r("ae40"),s=a("forEach"),o=i("forEach");t.exports=s&&o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"189f":function(t,e,r){"use strict";r("bedc")},"21a4":function(t,e,r){"use strict";r("d4a4")},"2fe4":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"phoneTitle"}},[r("div",{staticClass:"px-20 py-10 d-flex align-items-center justify-content-between"},[r("strong",{staticClass:"m-0"},[t._v(t._s(t.title))]),t.filterDate?r("select",[r("option",{attrs:{value:"2020"}},[t._v("2020")])]):t._e()])])},a=[],i={props:{title:{type:String,require:!0},filterDate:{type:Boolean,require:!0}}},s=i,o=(r("189f"),r("2877")),c=Object(o["a"])(s,n,a,!1,null,null,null);e["a"]=c.exports},4160:function(t,e,r){"use strict";var n=r("23e7"),a=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"46ef":function(t,e,r){t.exports=r.p+"img/04.61d33232.png"},"65f0":function(t,e,r){var n=r("861d"),a=r("e8b5"),i=r("b622"),s=i("species");t.exports=function(t,e){var r;return a(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"87d2":function(t,e,r){"use strict";r("9814")},9814:function(t,e,r){},"9b4d":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"loadShowIMG"}},[r("div",{staticClass:"w-100 d-flex align-items-center flex-row"},t._l(t.artImg,(function(t,e){return r("span",{key:"AI__"+e,staticClass:"w-100 transBg"},[r("img",{attrs:{src:t.imgUrl,alt:"",width:"100%"}})])})),0)])},a=[],i={data:function(){return{artImg:[{imgUrl:r("abe8")},{imgUrl:r("ea79")},{imgUrl:r("07f7")},{imgUrl:r("46ef")}]}}},s=i,o=(r("87d2"),r("2877")),c=Object(o["a"])(s,n,a,!1,null,null,null);e["a"]=c.exports},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},abe8:function(t,e,r){t.exports=r.p+"img/01.d8e64826.png"},ae40:function(t,e,r){var n=r("83ab"),a=r("d039"),i=r("5135"),s=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(i(o,t))return o[t];e||(e={});var r=[][t],l=!!i(e,"ACCESSORS")&&e.ACCESSORS,u=i(e,0)?e[0]:c,f=i(e,1)?e[1]:void 0;return o[t]=!!r&&!a((function(){if(l&&!n)return!0;var t={length:-1};l?s(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,u,f)}))}},b727:function(t,e,r){var n=r("0366"),a=r("44ad"),i=r("7b0b"),s=r("50c4"),o=r("65f0"),c=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(p,m,v,A){for(var h,C,g=i(p),w=a(g),S=n(m,v,3),b=s(w.length),L=0,x=A||o,_=e?x(p,b):r?x(p,0):void 0;b>L;L++)if((d||L in w)&&(h=w[L],C=S(h,L,g),t))if(e)_[L]=C;else if(C)switch(t){case 3:return!0;case 5:return h;case 6:return L;case 2:c.call(_,h)}else if(u)return!1;return f?-1:l||u?u:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},bedc:function(t,e,r){},bf20:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"latestNews"}},[n("div",{staticClass:"web d-none d-mb-block"},[n("p",{staticClass:"m-0 Txt-title"},[t._v("Latest news")]),n("div",{staticClass:"mt-70 newsCard"},[n("div",{staticClass:"newsCard__sortText"},t._l(t.newsSort,(function(e,r){return n("router-link",{key:"NS__"+r,staticClass:"mr-35 mb-15 d-flex align-items-center justify-content-end flex-row text-decoration-none",class:{active:t.$route.name==e.pathURL},attrs:{to:{name:e.pathURL}}},[n("p",{staticClass:"m-0"},[t._v(t._s(e.pathName))]),n("i",{staticClass:"el-icon-minus"}),n("p",{staticClass:"m-0"},[t._v("0"+t._s(r+1))])])})),1),n("LoadShowIMG"),n("div",{staticClass:"w-100 newsCard__title"},[n("div",{staticClass:"p-60"},[n("div",{staticClass:"w-100 d-flex flex-row"},[n("div",{staticClass:"w-100"},[n("p",{staticClass:"m-0"},[t._v(t._s(t.getPathName(t.newsSort)))])])])])]),n("div",{staticClass:"newsCard__contentCard"},[t._m(0),n("div",{staticClass:"w-100"},[n("router-view")],1)])],1)]),n("div",{staticClass:"phone d-block d-mb-none pt-70"},[n("div",{staticClass:"w-100 d-flex align-items-center flex-row"},[n("div",{staticClass:"ml-20"},[n("img",{attrs:{src:r("c7fa"),alt:"返回上一頁"},on:{click:t.goPrev}})]),n("PhoneTitle",{attrs:{title:t.getPathName(t.newsSort),filterDate:!1}})],1),n("router-view")],1)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"newsCard__contentCard--title d-flex align-items-center"},[r("p",{staticClass:"m-0",staticStyle:{"min-width":"220px","max-width":"220px"}},[t._v(" 公告日期 ")]),r("p",{staticClass:"m-0"},[t._v("標題")])])}],i=(r("4160"),r("b0c0"),r("159b"),r("9b4d")),s=r("2fe4"),o={components:{LoadShowIMG:i["a"],PhoneTitle:s["a"]},data:function(){return{newsSort:[{pathURL:"bulletin",pathName:"系辦公告"},{pathURL:"contest",pathName:"競賽資訊"},{pathURL:"activity",pathName:"活動訊息"}]}},computed:{getPathName:function(){var t=this;return function(e){var r="";return e.forEach((function(e){t.$route.name==e.pathURL&&(r=e.pathName)})),r}},getYearGrouop:function(){return function(){for(var t=(new Date).getFullYear(),e=[],r=t-5;r<=t;r++)e.push(r);return e.reverse(),e}}},methods:{goPrev:function(){this.$router.go(-1)}}},c=o,l=(r("21a4"),r("2877")),u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},c7fa:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADASURBVHgBtZS9DcIwEIXfRZFoGYER+MkOUeiyAUyCE7EAE7BCqEA00CEhoTACY1AQH9CkiOMoPszXWSd9OuvuHdDBZa9GEBDYCtejGg8CLm+H1RaOkE0YMp/AGH7fmiiNYlVA2mlTyMyZi9DotE04S3IFR8i3sJYaQqDQXG0g4IXwQU3hrzDrZYA/0Pr9D+eKKYOA8Im7dVBErCZxLhJ3rpRUbCTKh7hfTHWVRvN171SRrVCLNe+mSb6AL0rh6XsDij6Fvl13CyIAAAAASUVORK5CYII="},d4a4:function(t,e,r){},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ea79:function(t,e,r){t.exports=r.p+"img/02.b80431f2.png"},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-ac3a60e2.7ebd3c6d.js.map