(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01dacfa6"],{1799:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Pagination"}},[a("div",{staticClass:"w-100 d-flex align-items-center justify-content-center"},[a("a",{staticClass:"cur-pointer d-flex align-items-center",on:{click:function(e){return t.works_prev()}}},[a("img",{attrs:{src:n("f60d"),alt:""}})]),t.needPage?a("div",{staticClass:"d-flex align-items-center justify-content-center"},t._l(t.pageNumber,(function(e){return a("span",{key:e,staticClass:"circle_border cur-pointer",class:{circle_border_active:t.defaultPage==e},on:{click:function(n){return t.choosePage(e)}}},[t._v(" "+t._s(t.countPage(e))+" ")])})),0):t._e(),a("a",{staticClass:"cur-pointer d-flex align-items-center",on:{click:function(e){return t.works_next()}}},[a("img",{attrs:{src:n("ea53"),alt:""}})])])])},i=[],r=(n("a9e3"),{props:{needPage:{type:Boolean,require:!1},pageNumber:{type:Number,require:!1}},data:function(){return{defaultPage:1}},computed:{countPage:function(){return function(t){return t<10?"0"+t:t}}},methods:{choosePage:function(t){this.defaultPage=t},works_prev:function(){this.defaultPage>1&&(this.defaultPage=this.defaultPage-1)},works_next:function(){this.defaultPage<this.pageNumber&&(this.defaultPage=this.defaultPage+1)}}}),s=r,c=(n("5eaf"),n("2877")),o=Object(c["a"])(s,a,i,!1,null,null,null);e["a"]=o.exports},"2aa4":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),i=n("5899"),r="["+i+"]",s=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),o=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"5eaf":function(t,e,n){"use strict";n("2aa4")},7156:function(t,e,n){var a=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var r,s;return i&&"function"==typeof(r=e.constructor)&&r!==n&&a(s=r.prototype)&&s!==n.prototype&&i(t,s),t}},8191:function(t,e,n){"use strict";n("f252")},a9e3:function(t,e,n){"use strict";var a=n("83ab"),i=n("da84"),r=n("94ca"),s=n("6eeb"),c=n("5135"),o=n("c6b6"),u=n("7156"),A=n("c04e"),l=n("d039"),f=n("7c73"),p=n("241c").f,g=n("06cf").f,d=n("9bf2").f,h=n("58a8").trim,m="Number",C=i[m],Q=C.prototype,I=o(f(Q))==m,v=function(t){var e,n,a,i,r,s,c,o,u=A(t,!1);if("string"==typeof u&&u.length>2)if(u=h(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+u}for(r=u.slice(2),s=r.length,c=0;c<s;c++)if(o=r.charCodeAt(c),o<48||o>i)return NaN;return parseInt(r,a)}return+u};if(r(m,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var E,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(I?l((function(){Q.valueOf.call(n)})):o(n)!=m)?u(new C(v(e)),n,x):v(e)},N=a?p(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;N.length>b;b++)c(C,E=N[b])&&!c(x,E)&&d(x,E,g(C,E));x.prototype=Q,Q.constructor=x,s(i,m,x)}},c9d6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"publish"}},[t._l(t.publishData,(function(e,i){return a("el-row",{key:"AD__"+i,staticClass:"w-100 d-flex align-items-center publishContent",attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"blackTag d-flex align-items-center justify-content-center"},[a("p",{staticClass:"m-0"},[t._v(" "+t._s(e.kind)+" ")])])]),a("el-col",{attrs:{span:16}},[a("div",[t._v(t._s(e.content))])]),a("el-col",{staticClass:"text-right",attrs:{span:2}},[a("div",[t._v(t._s(e.author))])]),a("el-col",{staticClass:"text-right",attrs:{span:2}},[a("span",{staticClass:"cur-pointer",on:{click:function(n){return t.goPublishInfo(e)}}},[a("img",{attrs:{src:n("ea53"),alt:""}})])])],1)})),a("div",{staticClass:"w-100 mt-150"},[a("Pagination",{attrs:{needPage:!0,pageNumber:5}})],1)],2)},i=[],r=n("1799"),s={components:{Pagination:r["a"]},data:function(){return{publishData:[{kind:"期刊論文",content:"C. L. Lin, 2020. The influence of color temperature and illuminance on the touch motivation and preference of craft, Journal of Ambient Intelligence and Humanized Computing, in press (SCI, IF=4.594).",author:"林志隆"},{kind:"研討會論文",content:"Chang, K. L. (2020, July). Parametric mechanism of computer aided craft design: taking wooden crib as an example. Proceedings of the 22th International Conference on Human-Computer Interaction (HCII2020). Copenhagen, Denmark.",author:"張恭領"},{kind:"其他",content:"梁家豪，泥舟土痕系列四，大毅讚幸福建案收藏，台中",author:"梁家豪"},{kind:"期刊論文",content:"張恭領（2020）。以參數化的形構邏輯探討接頭構件之設計。藝術學報，16（1），1-32。",author:"張恭領"},{kind:"研討會論文",content:"張恭領（2020年5月）。參數化介入工藝設計的意義。2020文化‧創意‧設計國際學術研討會。玄奘大學藝術設計學院，新竹市。",author:"張恭領"},{kind:"期刊論文",content:"C. L. Lin, S. J. Chen and R. Lin, 2020. Efficacy of Virtual Reality in Painting Art Exhibitions Appreciation, Applied Sciences, 10(9), 3012 (SCI, IF=2.217). ",author:"林志隆"}]}},methods:{goPublishInfo:function(t){this.$router.push({name:"publishInfo",params:{author:t.author}})}}},c=s,o=(n("8191"),n("2877")),u=Object(o["a"])(c,a,i,!1,null,null,null);e["default"]=u.exports},ea53:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMrSURBVHgBtVdNVtswEJ5RgAIreoPcoAFeF101rNp0A5yA9ATQC2CZCzQ3aDgBZRXopmbVRR8kPQG+AWz6mtJG0xlZTp1fK04y7/lZsiV9n0aaPwRPaV/oLbPeO1CoXnO3QghlINiyPxEekSDmVseQuVHd0uftQ/3osy7mDWi3dBmQjhmw3gf0W7jZJQxf1XScM24CMO8YNs0xEerM54gALnsKo9WfEKe7lLF/16GikCq84D5/qvYBkPT2m7NwJgKya0K64GZF+kwiVF1o+KrVzgejGf3IfYp/E+6N0wZOAP/KzTI/HZ54mKfGqUT+rzWWBE6cQHSOXXXiu+tpctc6bTptjJAYIHB3Fdyn4Du1szosUDIkOvgL99KNqXRA+zoMwKlq0eAiok0B56di1s1J+t0SsKonvjQsoiJYgsiOke+TJYMYfBPzTgmwnQf2xbZb9MJ5keC1xaKkvUaJFpTYMNt2XTpd93NW4eM7al+fBj5jxZzljSU8Emwl7tX9i4rs/ntLV/n4muKwfEi4yxeJV7Wu3fl27ptLKCAvazoiAx/sGp4kxJvKW7AVOW9niDpQUHbfhQ0Gf+9LotfDyI5Fdt+A1vRgpbtSmIAlUdNNXxKrTzZyipSRnQ9Ja+dtODYupP+LyLRAlK6rYIliTH64x7vr4EFuJLvH5/P6fTFHsQhpE1G4WzvTY8eJ6W/QgyQyCsidx1pyF5YNLiK5g2vGTIB+SMuUelUoCv4lPPYFF5HERd6cxnUUAkW2A2ofCoh1RMY0fMEtgSRrYtPHG7TnsUn389yD25au83JlH3CXc0jYB8FTAsjMzy2jTJicRcQH+IBbyQQ+wbZmqEglASITJpchSa44GPgsgWyYfMbJqM2IlyAu3bN3JQ18fUfkwmSSsWzQR1iwtK+CT+Ayruxx9QlkMpaYz6d+m0yYH5i1KeBO9fFwxpWXlk/M573AB+uL/LR8AgnvMqs/f7SqmlhfTA0WbN8andm4wZHhxEVyBwnf2dLsz9pTuVQqVRU7NMqUZnlVlVdxOlRm5QsHGerR+ROqRuHidISILc/hAMFUmcwLGCrPJahhgfL8H0zSBJZahsN+AAAAAElFTkSuQmCC"},f252:function(t,e,n){},f60d:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM0SURBVHgBvVdNVtswEJ6RAwVW9Aa5QQO8LrpqWNGsgBOQngC6b2uH1z3coOEElFVgVbPqog+SngDfADZ9TdNG0xlZTp0fR8ZJ+N7zs2RL+kYjzR9CTrTPg3W90t9TqF5zt0IIZSBYNz8RHpAg4lZHk75WXe/Lxn7wkGdddA1ot4IyIB0yYX1AmG/hZpew8aoWRI5xGcS8Y1jTh0QYpD6HBHDRVxgu/YQo2aWM/bsCFYVU4QV3+VN1QIAUbOwcNx4lgOyakM65WZE+C9FQXTjNq1YzH3TA7Af2U/SbcHuSNjCD/Cs3y/x0eOK+S41TBfm/1kQhMHMC0Rl21VHeXU/Dbetj02pjTIghAW4v/buEfLN2XIc5IiVEB3/hdrIxlQxoXzV8sKqaN7lAtCnk/FT0ij5KvhsBjOqJLw1DVAQLgOwY+T4ZYRD9b2LeiQBs5755se0WvXC5hOC1xaKkvUyxFpTYMNt2XTpd+9MFOS5+DqAAxJzljR4eCLcS92r/hXl2L+RyXPw0v7feV+GRsJcvFK9qXLv17dzXF67JCXk8Ht69rH0KoQDEm8pbuEtkvZ0m6kBecsK3W7WgCQXR72NY8gg4vlQUoDE9KHVLnacgFyz1TOQUlJGdD0lr800DXeRFkLVuwqtcC2hNzpA9C/D2yr+XG8nu8XmW379pBQEmvgJVfWPHP4MZYEx/le4lkVFA9jyW47swCXzmQeJAxPyK+oAEkjvYZsQC0A9paa9fnTZpVIibyw9HUBCSuMib07iOQqDQdEDtuiamheDxJ0UckREgzprY9PEazXms0Z3rHqQhd4JfURFztDmHhH0QPiWExPHfSJQKk9MgmijsC1KBT7iNGSpScYBIhclFIM4VhwOfESAdJp9xMmoy4gXApnt8iWmQrg8ckQ2TccaySicwZ7Qv/c9gM66t2nEw4E0aqYwl4vOp38QTZidmbQq5VX00mnG50vLMfD4X+XB94U7LM4TIXWYN5o9XVZn1xdRAk44BdnCoOXGR3EHCd7o0+7PcK3ueV1Xs0ChVmrmqqlzF6UiZ5QYHGerTWQ/VaeHidEwQU57DHoKusjAvYKQ8l6CGBcrzf3tt/5u9bgFBAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=chunk-01dacfa6.9c9fe2bf.js.map