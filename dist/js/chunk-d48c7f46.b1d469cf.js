(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d48c7f46"],{"189f":function(t,e,s){"use strict";s("bedc")},"2fe4":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"phoneTitle"}},[s("div",{staticClass:"px-20 py-10 d-flex align-items-center justify-content-between"},[s("strong",{staticClass:"m-0"},[t._v(t._s(t.title))]),t.filterDate?s("select",[s("option",{attrs:{value:"2020"}},[t._v("2020")])]):t._e()])])},i=[],n={props:{title:{type:String,require:!0},filterDate:{type:Boolean,require:!0}}},r=n,l=(s("189f"),s("2877")),c=Object(l["a"])(r,a,i,!1,null,null,null);e["a"]=c.exports},"4de4":function(t,e,s){"use strict";var a=s("23e7"),i=s("b727").filter,n=s("1dde"),r=s("ae40"),l=n("filter"),c=r("filter");a({target:"Array",proto:!0,forced:!l||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"75dd":function(t,e,s){"use strict";s("a29f")},a26e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI9SURBVHgB7ZZRTttAEIZndh3zmNwgPkL6QNU+1T0B9ASFExQL5YGnkCckhDE3ID1BywkID1UlUjXpDdIbmEdIdrYzjoNWVCSLcJSXjGTFu+PMfjs7++8ilHabpnsIcAkvMcT+9P5+//3R0ViaP09OoiAIou12u+8bQsFrzNo4CMPh7elpS5oFiNadQZZ1fEO8DmBmDQyC7LFlTBeIjgdp+m2YZY1lf64CoMjEjzILvASjsnfXEA1lWWDlAGwaMZbfN0mSW8RxwQUQ1cLwehFEZQAKMZq/czGP5+/LIKoEqD/nWwRRGYBrxpgrIurKw9noyXYViGBr67/CDKAiI2vv5u/v2u2Lp34ZeEK0a6yVHbNfOYC1Nl/kl+IEycbsgcoBtFJN3vsyu4hT3nDIRpz+P+bhoT9XzJUA8CB7zqCuK0YZKAyBFfJ4O0m6rnMlRfissUL+StPL9QHALFO/z86aawMQmxJ9hHUCuLZ2AK9dIGpGADdFg08+RPxsHTGRdtl/8ChI5XfLYntlgIy5KUF2alofyN5+e3jY0wBNHr0eIH5id66IvpdBP6D4PMx7CRQrHavd3/K4LYSG+AhGay+sMXX2Xc0+VCNL9JXBcp+43kIkUstpzwfn59fciBxXjlrfMUiT9zkgUczXsh3+puUT1xuAayBWSnVcleNMJDW+fEwmk4gh4hK0xemPfeP6FaFSX/i8b7gCW2YCpnIn1LqYrVGqh54zfxEAr2fLPu3jKgefviW2EaINwAZgA/APPNPunuJpDi4AAAAASUVORK5CYII="},a29f:function(t,e,s){},bedc:function(t,e,s){},c7fa:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADASURBVHgBtZS9DcIwEIXfRZFoGYER+MkOUeiyAUyCE7EAE7BCqEA00CEhoTACY1AQH9CkiOMoPszXWSd9OuvuHdDBZa9GEBDYCtejGg8CLm+H1RaOkE0YMp/AGH7fmiiNYlVA2mlTyMyZi9DotE04S3IFR8i3sJYaQqDQXG0g4IXwQU3hrzDrZYA/0Pr9D+eKKYOA8Im7dVBErCZxLhJ3rpRUbCTKh7hfTHWVRvN171SRrVCLNe+mSb6AL0rh6XsDij6Fvl13CyIAAAAASUVORK5CYII="},d336:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"awardInfo"}},[a("div",{staticClass:"d-block d-mb-none pt-70"},[a("div",{staticClass:"awardTitle w-100 d-flex align-items-center flex-row"},[a("router-link",{staticClass:"pl-20",attrs:{to:{name:"award"}}},[a("img",{attrs:{src:s("c7fa"),alt:""}})]),a("PhoneTitle",{attrs:{title:"競賽得獎",filterDate:!1}})],1),a("div",{staticClass:"w-100 newsInfo"},[a("div",{staticClass:"px-20 pt-40 pb-90"},t._l(t.awardInfoData,(function(e){return a("div",{key:e.id,staticClass:"w-100 newsInfo__card"},[a("div",{staticClass:"w-100 d-flex flex-row"},[a("div",{staticClass:"newsInfo__card-date"},[a("div",{staticClass:"p-15 d-flex flex-column align-items-center"},[a("p",{staticClass:"m-0"},[t._v(t._s(t._f("moment")(e.releaseDate,"YYYY")))]),a("span",{staticClass:"my-8"}),a("p",{staticClass:"m-0"},[t._v(t._s(t._f("moment")(e.releaseDate,"MM-DD")))])])]),a("div",{staticClass:"newsInfo__card-context d-flex align-items-center"},[a("div",{staticClass:"p-15"},[a("p",{staticClass:"m-0"},[t._v(" "+t._s(e.title)+" ")])])])]),a("div",{staticClass:"w-100 newsInfo__card-content"},[a("div",{staticClass:"p-15"},[a("div",{staticClass:"w-100 mt-10 context"},[a("vue-editor",{model:{value:e.contents,callback:function(s){t.$set(e,"contents",s)},expression:"item.contents"}})],1),a("div",{staticClass:"w-100 mt-10"},t._l(e.annexFile,(function(e,i){return a("div",{key:i,staticClass:"downloadCard py-25 mb-15"},[a("el-row",{staticClass:"d-flex align-items-center"},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"w-100 d-flex align-items-center justify-content-center"},[a("a",{attrs:{href:e.files,download:e.files,target:"_blank"}},[a("img",{attrs:{src:s("a26e"),alt:""}})])])]),a("el-col",{attrs:{span:16}},[a("div",{staticClass:"w-100 d-flex align-items-center justify-content-center flex-column"},[a("p",{staticClass:"m-0"},[t._v(" "+t._s(e.fileName)+" ")])])])],1)],1)})),0),e.pics?a("div",{staticClass:"w-100 mt-10"},[a("el-row",t._l(JSON.parse(e.pics),(function(e){return a("el-col",{key:e.id,staticClass:"p-4",attrs:{span:12}},[a("el-image",{staticStyle:{width:"100%",height:"200px"},attrs:{fit:"cover",src:e.files}}),a("div",{staticClass:"p-4"},[a("strong",[t._v(t._s(e.fileName))])])],1)})),1)],1):t._e()])])])})),0)])])])},i=[],n=(s("4de4"),s("96cf"),s("1da1")),r=s("2fe4"),l={components:{PhoneTitle:r["a"]},data:function(){return{listQuery:{TeachTypeId:"SYS_TEACH_COMPETITION",Years:"",page:1,limit:999,key:void 0},awardInfoData:[],downloadList:[{file:!0,option:[{context:"線上申請"},{context:"系統審核流程說明"}]},{file:!0,option:[{context:"國立臺灣藝術大學"},{context:"藝術博物館展覽場地"},{context:"使用管理要點"}]},{file:!0,option:[{context:"藝術博物館各展場簡介"}]}]}},methods:{getList:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.award(t.listQuery).then((function(e){t.awardInfoData=e.data.data.filter((function(e){return e.id===t.$route.params.id})),t.$store.commit("SETLOADING",!1)}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$store.commit("SETLOADING",!0),this.getList()}},c=l,o=(s("75dd"),s("2877")),A=Object(o["a"])(c,a,i,!1,null,null,null);e["default"]=A.exports}}]);
//# sourceMappingURL=chunk-d48c7f46.b1d469cf.js.map