(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bda3eb6c"],{"08b2":function(t,e,n){},"09fc":function(t,e,n){t.exports=n.p+"img/studio5.bfcb9519.png"},"118c":function(t,e,n){t.exports=n.p+"img/studio4.e1b4f2c3.png"},1581:function(t,e,n){t.exports=n.p+"img/studio2.7d306b52.png"},1799:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"Pagination"}},[i("div",{staticClass:"w-100 d-flex align-items-center justify-content-center"},[i("a",{staticClass:"cur-pointer d-flex align-items-center",on:{click:function(e){return t.works_prev()}}},[i("img",{attrs:{src:n("f60d"),alt:""}})]),t.needPage?i("div",{staticClass:"d-flex align-items-center justify-content-center"},t._l(t.pageNumber,(function(e){return i("span",{key:e,staticClass:"circle_border cur-pointer",class:{circle_border_active:t.defaultPage==e},on:{click:function(n){return t.choosePage(e)}}},[t._v(" "+t._s(t.countPage(e))+" ")])})),0):t._e(),i("a",{staticClass:"cur-pointer d-flex align-items-center",on:{click:function(e){return t.works_next()}}},[i("img",{attrs:{src:n("ea53"),alt:""}})])])])},s=[],a=(n("a9e3"),{props:{needPage:{type:Boolean,require:!1},pageNumber:{type:Number,require:!1}},data:function(){return{defaultPage:1}},computed:{countPage:function(){return function(t){return t<10?"0"+t:t}}},methods:{choosePage:function(t){this.defaultPage=t},works_prev:function(){this.defaultPage>1&&(this.defaultPage=this.defaultPage-1)},works_next:function(){this.defaultPage<this.pageNumber&&(this.defaultPage=this.defaultPage+1)}}}),c=a,r=(n("5eaf"),n("2877")),o=Object(r["a"])(c,i,s,!1,null,null,null);e["a"]=o.exports},"2aa4":function(t,e,n){},"3b05":function(t,e,n){"use strict";n("08b2")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),s=n("5899"),a="["+s+"]",c=RegExp("^"+a+a+"*"),r=RegExp(a+a+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"5eaf":function(t,e,n){"use strict";n("2aa4")},"669a":function(t,e,n){t.exports=n.p+"img/studio7.8bd8cec5.png"},"6e7e":function(t,e,n){t.exports=n.p+"img/studio1.b4c3182d.png"},7156:function(t,e,n){var i=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var a,c;return s&&"function"==typeof(a=e.constructor)&&a!==n&&i(c=a.prototype)&&c!==n.prototype&&s(t,c),t}},"811c":function(t,e,n){t.exports=n.p+"img/craft_3.2139ce18.png"},8216:function(t,e,n){t.exports=n.p+"img/craft_2.60531b62.png"},"87ff":function(t,e,n){t.exports=n.p+"img/studio3.849f451d.png"},a9e3:function(t,e,n){"use strict";var i=n("83ab"),s=n("da84"),a=n("94ca"),c=n("6eeb"),r=n("5135"),o=n("c6b6"),l=n("7156"),f=n("c04e"),u=n("d039"),A=n("7c73"),p=n("241c").f,d=n("06cf").f,g=n("9bf2").f,m=n("58a8").trim,C="Number",x=s[C],v=x.prototype,b=o(A(v))==C,R=function(t){var e,n,i,s,a,c,r,o,l=f(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+l}for(a=l.slice(2),c=a.length,r=0;r<c;r++)if(o=a.charCodeAt(r),o<48||o>s)return NaN;return parseInt(a,i)}return+l};if(a(C,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var w,Q=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof Q&&(b?u((function(){v.valueOf.call(n)})):o(n)!=C)?l(new x(R(e)),n,Q):R(e)},E=i?p(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),h=0;E.length>h;h++)r(x,w=E[h])&&!r(Q,w)&&g(Q,w,d(x,w));Q.prototype=v,v.constructor=Q,c(s,C,Q)}},b0c9:function(t,e,n){t.exports=n.p+"img/studio9.321bf8f9.png"},c4a2:function(t,e,n){t.exports=n.p+"img/craft_1.c4625e1d.png"},db9b:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"studioResult"}},[n("div",{staticClass:"web d-none d-mb-block"},[n("div",{staticClass:"w-100 h-100 studioBG"},[n("div",{staticClass:"d-flex justify-content-around studioGroup"},t._l(t.crafts,(function(e,i){return n("div",{key:i,staticClass:"m-item d-flex align-items-center flex-column"},[n("img",{staticClass:"m-item-image w-100",attrs:{src:e.imgURL}}),n("div",{staticClass:"m-item-title d-flex justify-content-center"},[n("div",{staticClass:"craftCard d-flex align-items-center justify-content-center flex-column text-center pt-40 pb-20"},[n("div",{staticClass:"mb-30"},[n("p",{staticClass:"m-0"},[t._v(t._s(e.name_ch))]),n("p",{staticClass:"m-0"},[t._v(t._s(e.name_en))])]),n("div",{staticClass:"pt-10 craftCard-borTop"},[n("router-link",{staticClass:"text-decoration-none",attrs:{to:{name:"crafts",params:{sort:e.name_en}}}},[t._v("VIEW MORE")])],1)])])])})),0)]),n("div",{staticClass:"w-100 studioCard mt-60"},[n("div",{staticClass:"px-150 py-20"},[n("el-row",t._l(t.worksList,(function(e,i){return n("el-col",{key:i,staticClass:"mb-40",attrs:{span:8}},[n("div",{staticClass:"w-100 d-flex align-items-center justify-content-center flex-column"},[n("div",{staticClass:"w-100 d-flex align-items-center justify-content-center"},[n("img",{attrs:{src:e.imgURL,alt:""}})]),n("div",{staticClass:"studioCard__content w-100 d-flex align-items-center justify-content-center mt-40"},[n("p",{staticClass:"m-0 d-inline-flex p-10"},[t._v(t._s(e.title))])])])])})),1),n("div",{staticClass:"w-100 py-50 d-flex align-items-center justify-content-center"},[n("Pagination",{attrs:{needPage:!0,pageNumber:5}})],1)],1)])]),n("div",{staticClass:"phone d-block d-mb-none"},[n("div",{staticClass:"pl-30 pt-70 pb-80 mb-100"},[n("div",{staticClass:"studioBG"},[n("div",{staticClass:"px-25 studioBG__trans"},[n("el-row",t._l(t.crafts,(function(e,i){return n("el-col",{key:i,attrs:{span:12}},[n("div",{staticClass:"w-100 d-flex align-items-center justify-content-center flex-column"},[n("img",{attrs:{src:e.imgURL,alt:"",width:"110px"}}),n("div",{staticClass:"b-0 craftCard"},[n("div",{staticClass:"p-10"},[n("div",{staticClass:"p-10 craftCard__title text-center"},[n("p",{staticClass:"m-0"},[t._v(t._s(e.name_ch))])]),n("router-link",{staticClass:"text-decoration-none",attrs:{to:{name:"studioResultInfo",params:{craft:e.name_en}}}},[t._v(" VIEW MORE ")])],1)])])])})),1)],1)])])])])},s=[],a=n("1799"),c={components:{Pagination:a["a"]},data:function(){return{crafts:[{imgURL:n("c4a2"),name_ch:"陶瓷",name_en:"CERAMICS"},{imgURL:n("8216"),name_ch:"金工",name_en:"METALWORKING"},{imgURL:n("811c"),name_ch:"木工",name_en:"WOODWORKING"},{imgURL:n("e17f"),name_ch:"產品",name_en:"PRODUCT"}],worksList:[{imgURL:n("6e7e"),title:"陶瓷作品20"},{imgURL:n("1581"),title:"陶瓷作品21"},{imgURL:n("87ff"),title:"陶瓷作品22"},{imgURL:n("118c"),title:"陶瓷作品23"},{imgURL:n("09fc"),title:"陶瓷作品24"},{imgURL:n("e71c"),title:"陶瓷作品25"},{imgURL:n("669a"),title:"陶瓷作品26"},{imgURL:n("fec9"),title:"陶瓷作品27"},{imgURL:n("b0c9"),title:"陶瓷作品28"}]}}},r=c,o=(n("3b05"),n("2877")),l=Object(o["a"])(r,i,s,!1,null,null,null);e["default"]=l.exports},e17f:function(t,e,n){t.exports=n.p+"img/craft_4.32bc1e63.png"},e71c:function(t,e,n){t.exports=n.p+"img/studio6.50646657.png"},ea53:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMrSURBVHgBtVdNVtswEJ5RgAIreoPcoAFeF101rNp0A5yA9ATQC2CZCzQ3aDgBZRXopmbVRR8kPQG+AWz6mtJG0xlZTp1fK04y7/lZsiV9n0aaPwRPaV/oLbPeO1CoXnO3QghlINiyPxEekSDmVseQuVHd0uftQ/3osy7mDWi3dBmQjhmw3gf0W7jZJQxf1XScM24CMO8YNs0xEerM54gALnsKo9WfEKe7lLF/16GikCq84D5/qvYBkPT2m7NwJgKya0K64GZF+kwiVF1o+KrVzgejGf3IfYp/E+6N0wZOAP/KzTI/HZ54mKfGqUT+rzWWBE6cQHSOXXXiu+tpctc6bTptjJAYIHB3Fdyn4Du1szosUDIkOvgL99KNqXRA+zoMwKlq0eAiok0B56di1s1J+t0SsKonvjQsoiJYgsiOke+TJYMYfBPzTgmwnQf2xbZb9MJ5keC1xaKkvUaJFpTYMNt2XTpd93NW4eM7al+fBj5jxZzljSU8Emwl7tX9i4rs/ntLV/n4muKwfEi4yxeJV7Wu3fl27ptLKCAvazoiAx/sGp4kxJvKW7AVOW9niDpQUHbfhQ0Gf+9LotfDyI5Fdt+A1vRgpbtSmIAlUdNNXxKrTzZyipSRnQ9Ja+dtODYupP+LyLRAlK6rYIliTH64x7vr4EFuJLvH5/P6fTFHsQhpE1G4WzvTY8eJ6W/QgyQyCsidx1pyF5YNLiK5g2vGTIB+SMuUelUoCv4lPPYFF5HERd6cxnUUAkW2A2ofCoh1RMY0fMEtgSRrYtPHG7TnsUn389yD25au83JlH3CXc0jYB8FTAsjMzy2jTJicRcQH+IBbyQQ+wbZmqEglASITJpchSa44GPgsgWyYfMbJqM2IlyAu3bN3JQ18fUfkwmSSsWzQR1iwtK+CT+Ayruxx9QlkMpaYz6d+m0yYH5i1KeBO9fFwxpWXlk/M573AB+uL/LR8AgnvMqs/f7SqmlhfTA0WbN8andm4wZHhxEVyBwnf2dLsz9pTuVQqVRU7NMqUZnlVlVdxOlRm5QsHGerR+ROqRuHidISILc/hAMFUmcwLGCrPJahhgfL8H0zSBJZahsN+AAAAAElFTkSuQmCC"},f60d:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM0SURBVHgBvVdNVtswEJ6RAwVW9Aa5QQO8LrpqWNGsgBOQngC6b2uH1z3coOEElFVgVbPqog+SngDfADZ9TdNG0xlZTp0fR8ZJ+N7zs2RL+kYjzR9CTrTPg3W90t9TqF5zt0IIZSBYNz8RHpAg4lZHk75WXe/Lxn7wkGdddA1ot4IyIB0yYX1AmG/hZpew8aoWRI5xGcS8Y1jTh0QYpD6HBHDRVxgu/YQo2aWM/bsCFYVU4QV3+VN1QIAUbOwcNx4lgOyakM65WZE+C9FQXTjNq1YzH3TA7Af2U/SbcHuSNjCD/Cs3y/x0eOK+S41TBfm/1kQhMHMC0Rl21VHeXU/Dbetj02pjTIghAW4v/buEfLN2XIc5IiVEB3/hdrIxlQxoXzV8sKqaN7lAtCnk/FT0ij5KvhsBjOqJLw1DVAQLgOwY+T4ZYRD9b2LeiQBs5755se0WvXC5hOC1xaKkvUyxFpTYMNt2XTpd+9MFOS5+DqAAxJzljR4eCLcS92r/hXl2L+RyXPw0v7feV+GRsJcvFK9qXLv17dzXF67JCXk8Ht69rH0KoQDEm8pbuEtkvZ0m6kBecsK3W7WgCQXR72NY8gg4vlQUoDE9KHVLnacgFyz1TOQUlJGdD0lr800DXeRFkLVuwqtcC2hNzpA9C/D2yr+XG8nu8XmW379pBQEmvgJVfWPHP4MZYEx/le4lkVFA9jyW47swCXzmQeJAxPyK+oAEkjvYZsQC0A9paa9fnTZpVIibyw9HUBCSuMib07iOQqDQdEDtuiamheDxJ0UckREgzprY9PEazXms0Z3rHqQhd4JfURFztDmHhH0QPiWExPHfSJQKk9MgmijsC1KBT7iNGSpScYBIhclFIM4VhwOfESAdJp9xMmoy4gXApnt8iWmQrg8ckQ2TccaySicwZ7Qv/c9gM66t2nEw4E0aqYwl4vOp38QTZidmbQq5VX00mnG50vLMfD4X+XB94U7LM4TIXWYN5o9XVZn1xdRAk44BdnCoOXGR3EHCd7o0+7PcK3ueV1Xs0ChVmrmqqlzF6UiZ5QYHGerTWQ/VaeHidEwQU57DHoKusjAvYKQ8l6CGBcrzf3tt/5u9bgFBAAAAAElFTkSuQmCC"},fec9:function(t,e,n){t.exports=n.p+"img/studio8.e7b347c8.png"}}]);
//# sourceMappingURL=chunk-bda3eb6c.1aea4b04.js.map