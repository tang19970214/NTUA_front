(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52ac0179"],{"13d5":function(t,e,s){"use strict";var i=s("23e7"),n=s("d58f").left,a=s("a640"),l=s("ae40"),c=a("reduce"),o=l("reduce",{1:0});i({target:"Array",proto:!0,forced:!c||!o},{reduce:function(t){return n(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"189f":function(t,e,s){"use strict";s("bedc")},"2fe4":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"phoneTitle"}},[s("div",{staticClass:"px-20 py-10 d-flex align-items-center justify-content-between"},[s("strong",{staticClass:"m-0"},[t._v(t._s(t.title))]),t.filterDate?s("select",[s("option",{attrs:{value:"2020"}},[t._v("2020")])]):t._e()])])},n=[],a={props:{title:{type:String,require:!0},filterDate:{type:Boolean,require:!0}}},l=a,c=(s("189f"),s("2877")),o=Object(c["a"])(l,i,n,!1,null,null,null);e["a"]=o.exports},"67ef":function(t,e,s){"use strict";s("c405")},a26e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI9SURBVHgB7ZZRTttAEIZndh3zmNwgPkL6QNU+1T0B9ASFExQL5YGnkCckhDE3ID1BywkID1UlUjXpDdIbmEdIdrYzjoNWVCSLcJSXjGTFu+PMfjs7++8ilHabpnsIcAkvMcT+9P5+//3R0ViaP09OoiAIou12u+8bQsFrzNo4CMPh7elpS5oFiNadQZZ1fEO8DmBmDQyC7LFlTBeIjgdp+m2YZY1lf64CoMjEjzILvASjsnfXEA1lWWDlAGwaMZbfN0mSW8RxwQUQ1cLwehFEZQAKMZq/czGP5+/LIKoEqD/nWwRRGYBrxpgrIurKw9noyXYViGBr67/CDKAiI2vv5u/v2u2Lp34ZeEK0a6yVHbNfOYC1Nl/kl+IEycbsgcoBtFJN3vsyu4hT3nDIRpz+P+bhoT9XzJUA8CB7zqCuK0YZKAyBFfJ4O0m6rnMlRfissUL+StPL9QHALFO/z86aawMQmxJ9hHUCuLZ2AK9dIGpGADdFg08+RPxsHTGRdtl/8ChI5XfLYntlgIy5KUF2alofyN5+e3jY0wBNHr0eIH5id66IvpdBP6D4PMx7CRQrHavd3/K4LYSG+AhGay+sMXX2Xc0+VCNL9JXBcp+43kIkUstpzwfn59fciBxXjlrfMUiT9zkgUczXsh3+puUT1xuAayBWSnVcleNMJDW+fEwmk4gh4hK0xemPfeP6FaFSX/i8b7gCW2YCpnIn1LqYrVGqh54zfxEAr2fLPu3jKgefviW2EaINwAZgA/APPNPunuJpDi4AAAAASUVORK5CYII="},a640:function(t,e,s){"use strict";var i=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&i((function(){s.call(null,e||function(){throw 1},1)}))}},bedc:function(t,e,s){},c405:function(t,e,s){},d58f:function(t,e,s){var i=s("1c0b"),n=s("7b0b"),a=s("44ad"),l=s("50c4"),c=function(t){return function(e,s,c,o){i(s);var r=n(e),d=a(r),f=l(r.length),u=t?f-1:0,m=t?-1:1;if(c<2)while(1){if(u in d){o=d[u],u+=m;break}if(u+=m,t?u<0:f<=u)throw TypeError("Reduce of empty array with no initial value")}for(;t?u>=0:f>u;u+=m)u in d&&(o=s(o,d[u],u,r));return o}};t.exports={left:c(!1),right:c(!0)}},eaeba:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"seminar"}},[i("div",{staticClass:"web d-none d-mb-block"},[i("div",{staticClass:"tabGroup"},t._l(t.tabList,(function(e){return i("span",{key:e.id,staticClass:"tabGroup__tag p-8 mx-8",class:{"tabGroup__tag--active":e.id==t.defaultId},on:{click:function(s){return t.changeTab(e)}}},[i("a",[t._v(t._s(e.label))])])})),0),i("div",{staticClass:"workCard mt-16"},[1!==t.defaultId?i("div",{staticClass:"w-100"},[i("div",{domProps:{innerHTML:t._s(t.seminarList.contents)}})]):i("div",{staticClass:"w-100"},t._l(t.newsList,(function(e){return i("div",{key:e.id,staticClass:"newsTable w-100 d-flex align-items-center flex-row cur-pointer",on:{click:function(s){return t.viewInfo(e)}}},[i("p",{staticClass:"m-0",staticStyle:{"min-width":"220px","max-width":"220px"}},[t._v(" "+t._s(t._f("moment")(e.releaseDate,"YYYY-MM-DD"))+" ")]),i("p",{staticClass:"m-0"},[t._v(t._s(e.title))])])})),0)])]),i("div",{staticClass:"phone d-block d-mb-none"},[i("div",{staticClass:"w-100"},[i("el-select",{staticClass:"w-100",attrs:{placeholder:"請選擇","no-data-text":"暫無數據",size:"mini"},on:{change:t.changeOption},model:{value:t.defaultId,callback:function(e){t.defaultId=e},expression:"defaultId"}},t._l(t.tabList,(function(t){return i("el-option",{key:t.id,attrs:{label:t.label,value:t.id}})})),1)],1),i("div",{staticClass:"darkBG px-10 py-30"},[1!==t.defaultId?i("div",{staticClass:"w-100"},[i("div",{staticClass:"w-100 ckInfo",domProps:{innerHTML:t._s(t.seminarList.contents)}})]):i("div",{staticClass:"w-100 newsInfo"},t._l(t.newsList,(function(e){return i("div",{key:e.id,staticClass:"w-100 newsInfo__card d-flex flex-row mb-15",on:{click:function(s){return t.goSeminarInfo(e.id)}}},[i("div",{staticClass:"newsInfo__card-date"},[i("div",{staticClass:"p-15 d-flex flex-column align-items-center"},[i("p",{staticClass:"m-0"},[t._v(t._s(t._f("moment")(e.releaseDate,"YYYY")))]),i("span",{staticClass:"my-8"}),i("p",{staticClass:"m-0"},[t._v(t._s(t._f("moment")(e.releaseDate,"MM-DD")))])])]),i("div",{staticClass:"newsInfo__card-context d-flex align-items-center"},[i("div",{staticClass:"p-15"},[i("p",{staticClass:"m-0"},[t._v(t._s(e.title))])])])])})),0)])]),t.showNewsInfo?i("div",{staticClass:"modal d-flex justify-content-center"},[i("div",{staticClass:"modal__content"},[i("div",{staticClass:"p-40"},[i("div",{staticClass:"w-100 pos-relative d-flex align-items-start justify-content-center flex-column"},[t._m(0),i("div",{staticClass:"w-100 d-flex flex-column justify-content-center modal__content--title mt-20"},[i("label",[t._v("TITLE")]),i("strong",[t._v(t._s(t.selectNews.title))])]),i("div",{staticClass:"w-100 d-flex flex-column justify-content-center modal__content--update mt-20"},[i("label",[t._v("UPDATE")]),i("p",{staticClass:"m-0"},[t._v(" "+t._s(t._f("moment")(t.selectNews.releaseDate,"YYYY-MM-DD"))+" ")])]),i("div",{staticClass:"w-100 modal__content--summary mt-30"},[i("p",{staticClass:"m-0"},[t._v(t._s(t.selectNews.summury))])]),i("div",{staticClass:"w-100 modal__content--card mt-20"},[i("vue-editor",{attrs:{disabled:!0},model:{value:t.selectNews.contents,callback:function(e){t.$set(t.selectNews,"contents",e)},expression:"selectNews.contents"}})],1),t.selectNews.attachedFile?i("div",{staticClass:"w-100 mt-40"},[i("strong",{staticClass:"font-s-24"},[t._v("附檔")]),i("p",{staticClass:"m-0 mt-10"},[t._v(" （本網站建議使用Chrome瀏覽器以避免系統問題） ")]),i("div",{staticClass:"w-100 d-flex flex-row flex-wrap mt-20"},[i("el-row",{staticClass:"w-100"},t._l(t.selectNews.attachedFile,(function(e){return i("el-col",{key:e.id,attrs:{xl:4,lg:6}},[i("div",{staticClass:"modal__content--fileCard d-flex align-items-center justify-content-center mt-10",on:{mouseenter:function(s){return t.showfileInfo(e)},mouseleave:function(s){return t.closefileInfo(e)}}},[t.fileInfo[e.id]?i("div",{staticClass:"w-100 h-100 backCard"},[i("a",{staticClass:"w-100 h-100 d-flex align-items-center justify-content-center text-decoration-none",attrs:{href:e.files,download:e.files,target:"_blank"}},[i("strong",[t._v(t._s(e.fileName))])])]):i("a",{attrs:{href:e.files,download:e.files,target:"_blank"}},[i("img",{attrs:{src:s("a26e"),alt:e.fileName,width:"40px"}})])])])})),1)],1)]):t._e(),i("div",{staticClass:"pos-absolute t-0 r-0"},[i("div",{staticClass:"modal__close d-flex align-items-center justify-content-center cur-pointer",on:{click:function(e){t.showNewsInfo=!1}}},[i("i",{staticClass:"el-icon-close"})])])])])])]):t._e()])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-10 modal__content--tag"},[s("span",{staticClass:"d-inline-flex"},[t._v("最新消息")])])}],a=(s("4de4"),s("13d5"),s("96cf"),s("1da1")),l=s("2fe4"),c={components:{PhoneTitle:l["a"]},data:function(){return{setConfig:{readOnly:!0,uiColor:"#2d2d2d",extraPlugins:"button,panelbutton,colorbutton",dialog_backgroundCoverOpacity:0},defaultId:"6755196327667736576",tabList:[{id:1,label:"最新消息"},{id:"6755196327554490368",label:"與會方式"},{id:"6755196327659347968",label:"徵稿須知"},{id:"6755196327667736576",label:"活動主旨"},{id:"6755196327676125184",label:"活動議程"},{id:"6755196327680319488",label:"聯絡資訊"},{id:"6755196327688708096",label:"審稿規範"}],listQuery:{NewsTypeId:"",page:1,limit:999,key:void 0},seminarList:{},newsList:[],showNewsInfo:!1,selectNews:{},fileInfo:{}}},methods:{getList:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.seminarWorks({id:t.defaultId}).then((function(e){t.seminarList=e.data.result,t.$store.commit("SETLOADING",!1)}));case 2:case"end":return e.stop()}}),e)})))()},getNews:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.seminarNews(t.listQuery).then((function(e){t.newsList=e.data.data,t.$store.commit("SETLOADING",!1)}));case 2:case"end":return e.stop()}}),e)})))()},changeTab:function(t){this.$store.commit("SETLOADING",!0),this.defaultId=t.id,"最新消息"==t.label?this.getNews():this.getList()},changeOption:function(t){this.$store.commit("SETLOADING",!0),this.defaultId=t;var e=this.tabList.filter((function(e){return e.id==t}));"最新消息"==e[0].label?this.getNews():this.getList()},viewInfo:function(t){console.log(t),this.showNewsInfo=!0,this.selectNews=t,this.selectNews.attachedFile=JSON.parse(t.attachedFile)},showfileInfo:function(t){this.fileInfo=[this.selectNews].reduce((function(t,e){return t[e.id]=!0,t}),{}),this.fileInfo[null===t||void 0===t?void 0:t.id]=!this.fileInfo[null===t||void 0===t?void 0:t.id]},closefileInfo:function(t){this.fileInfo=[this.selectNews].reduce((function(t,e){return t[e.id]=!1,t}),{})},goSeminarInfo:function(t){this.$router.push({name:"seminarInfo",params:{id:t}})}},mounted:function(){this.$store.commit("SETLOADING",!0),this.getList(),this.getNews()}},o=c,r=(s("67ef"),s("2877")),d=Object(r["a"])(o,i,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-52ac0179.c027edea.js.map