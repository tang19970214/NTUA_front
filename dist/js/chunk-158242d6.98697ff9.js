(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-158242d6"],{"159b":function(t,e,a){var r=a("da84"),n=a("fdbc"),i=a("17c2"),s=a("9112");for(var c in n){var o=r[c],l=o&&o.prototype;if(l&&l.forEach!==i)try{s(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,n=a("a640"),i=a("ae40"),s=n("forEach"),c=i("forEach");t.exports=s&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"189f":function(t,e,a){"use strict";a("bedc")},"1a9d":function(t,e,a){},"2d20":function(t,e,a){t.exports=a.p+"img/art1.990f9ac8.png"},"2fe4":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"phoneTitle"}},[a("div",{staticClass:"px-20 py-10 d-flex align-items-center justify-content-between"},[a("p",{staticClass:"m-0"},[t._v(t._s(t.title))]),t.filterDate?a("select",[a("option",{attrs:{value:"2020"}},[t._v("2020")])]):t._e()])])},n=[],i={props:{title:{type:String,require:!0},filterDate:{type:Boolean,require:!0}}},s=i,c=(a("189f"),a("2877")),o=Object(c["a"])(s,r,n,!1,null,null,null);e["a"]=o.exports},4160:function(t,e,a){"use strict";var r=a("23e7"),n=a("17c2");r({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"474a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"teachingResult"}},[a("div",{staticClass:"web d-none d-mb-block"},[a("p",{staticClass:"m-0 Txt-title"},[t._v("Latest news")]),a("div",{staticClass:"mt-70 newsCard"},[a("div",{staticClass:"newsCard-sortText"},t._l(t.teachingSort,(function(e,r){return a("router-link",{key:"TS__"+r,staticClass:"mr-35 mb-15 d-flex align-items-center justify-content-end flex-row text-decoration-none",class:{active:t.$route.name==e.pathURL},attrs:{to:{name:e.pathURL}}},[a("p",{staticClass:"m-0"},[t._v(t._s(e.pathName))]),a("i",{staticClass:"el-icon-minus"}),a("p",{staticClass:"m-0"},[t._v("0"+t._s(r+1))])])})),1),a("LoadShowIMG"),a("div",{staticClass:"w-100 newsCard-title"},[a("div",{staticClass:"p-60"},[a("div",{staticClass:"w-100 d-flex flex-row"},[a("div",{staticClass:"w-100"},["工作室成果"==t.getPathName(t.teachingSort)?a("p",{staticClass:"m-0",staticStyle:{width:"200px"}},[t._v(" "+t._s(t.getPathName(t.teachingSort))+" ")]):a("p",{staticClass:"m-0"},[t._v(t._s(t.getPathName(t.teachingSort)))])])])])]),a("div",{staticClass:"w-100"},[a("router-view")],1)],1)]),a("div",{staticClass:"phone d-block d-mb-none pt-70"},[a("PhoneTitle",{attrs:{title:t.getPathName(t.teachingSort),filterDate:!0}}),a("router-view")],1)])},n=[],i=(a("4160"),a("b0c0"),a("159b"),a("9b4d")),s=a("2fe4"),c={components:{LoadShowIMG:i["a"],PhoneTitle:s["a"]},data:function(){return{teachingSort:[{pathURL:"award",pathName:"競賽得獎"},{pathURL:"publish",pathName:"研究發表"},{pathURL:"record",pathName:"展覽紀錄"},{pathURL:"highlight",pathName:"活動花絮"},{pathURL:"internshipResult",pathName:"實習成果"},{pathURL:"studioResult",pathName:"工作室成果"}]}},computed:{getPathName:function(){var t=this;return function(e){var a="";return e.forEach((function(e){t.$route.name==e.pathURL&&(a=e.pathName)})),a}},getYearGrouop:function(){return function(){for(var t=(new Date).getFullYear(),e=[],a=t-5;a<=t;a++)e.push(a);return e.reverse(),e}}}},o=c,l=(a("87f5"),a("2877")),u=Object(l["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports},"65f0":function(t,e,a){var r=a("861d"),n=a("e8b5"),i=a("b622"),s=i("species");t.exports=function(t,e){var a;return n(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?r(a)&&(a=a[s],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},"71ea":function(t,e,a){t.exports=a.p+"img/art3.4328d1e3.png"},"87d2":function(t,e,a){"use strict";a("9814")},"87f5":function(t,e,a){"use strict";a("1a9d")},9814:function(t,e,a){},"9b4d":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"loadShowIMG"}},[a("div",{staticClass:"w-100 d-flex align-items-center flex-row"},t._l(t.artImg,(function(t,e){return a("span",{key:"AI__"+e,staticClass:"w-100 transBg"},[a("img",{attrs:{src:t.imgUrl,alt:"",width:"100%"}})])})),0)])},n=[],i={data:function(){return{artImg:[{imgUrl:a("2d20")},{imgUrl:a("d41d")},{imgUrl:a("71ea")}]}}},s=i,c=(a("87d2"),a("2877")),o=Object(c["a"])(s,r,n,!1,null,null,null);e["a"]=o.exports},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,a){var r=a("83ab"),n=a("d039"),i=a("5135"),s=Object.defineProperty,c={},o=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var a=[][t],l=!!i(e,"ACCESSORS")&&e.ACCESSORS,u=i(e,0)?e[0]:o,f=i(e,1)?e[1]:void 0;return c[t]=!!a&&!n((function(){if(l&&!r)return!0;var t={length:-1};l?s(t,1,{enumerable:!0,get:o}):t[1]=1,a.call(t,u,f)}))}},b727:function(t,e,a){var r=a("0366"),n=a("44ad"),i=a("7b0b"),s=a("50c4"),c=a("65f0"),o=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(p,h,v,m){for(var g,L,S=i(p),b=n(S),w=r(h,v,3),C=s(b.length),x=0,y=m||c,_=e?y(p,C):a?y(p,0):void 0;C>x;x++)if((d||x in b)&&(g=b[x],L=w(g,x,S),t))if(e)_[x]=L;else if(L)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:o.call(_,g)}else if(u)return!1;return f?-1:l||u?u:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},bedc:function(t,e,a){},d41d:function(t,e,a){t.exports=a.p+"img/art2.b8f9745d.png"},e8b5:function(t,e,a){var r=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-158242d6.98697ff9.js.map