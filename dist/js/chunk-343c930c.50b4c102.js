(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-343c930c"],{"0cda":function(t,e,s){"use strict";s("6d96")},"189f":function(t,e,s){"use strict";s("bedc")},"2c9f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contestInfo"}},[a("div",{staticClass:"d-block d-mb-none pt-70"},[a("div",{staticClass:"contestTitle w-100 d-flex align-items-center flex-row"},[a("router-link",{staticClass:"pl-20",attrs:{to:{name:"contest"}}},[a("img",{attrs:{src:s("c7fa"),alt:""}})]),a("PhoneTitle",{attrs:{title:"競賽資訊",filterDate:!1}})],1),a("div",{staticClass:"w-100 newsInfo"},[a("div",{staticClass:"px-20 pt-40 pb-90"},t._l(t.contestMsg,(function(e){return a("div",{key:e.id,staticClass:"w-100 newsInfo__card"},[a("div",{staticClass:"w-100 d-flex flex-row"},[a("div",{staticClass:"newsInfo__card-date"},[a("div",{staticClass:"p-15 d-flex flex-column align-items-center"},[a("p",{staticClass:"m-0"},[t._v(t._s(t._f("moment")(e.releaseDate,"YYYY")))]),a("span",{staticClass:"my-8"}),a("p",{staticClass:"m-0"},[t._v(t._s(t._f("moment")(e.releaseDate,"MM-DD")))])])]),a("div",{staticClass:"newsInfo__card-context d-flex align-items-center"},[a("div",{staticClass:"p-15"},[a("p",{staticClass:"m-0"},[t._v(" "+t._s(e.title)+" ")])])])]),a("div",{staticClass:"w-100 newsInfo__card-content"},[a("div",{staticClass:"p-15"},[a("div",{staticClass:"w-100 notice"},[a("p",{staticClass:"m-0"},[t._v(" "+t._s(e.summury)+" ")])]),a("div",{staticClass:"w-100 mt-10 context"},[a("vue-editor",{attrs:{disabled:!0},model:{value:e.contents,callback:function(s){t.$set(e,"contents",s)},expression:"item.contents"}})],1),e.attachedFile?a("div",{staticClass:"w-100"},t._l(e.attachedFile,(function(e,i){return a("div",{key:i,staticClass:"downloadCard py-25 mb-15"},[a("el-row",{staticClass:"d-flex align-items-center"},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"w-100 d-flex align-items-center justify-content-center"},[a("a",{attrs:{href:e.files,download:e.files,target:"_blank"}},[a("img",{attrs:{src:s("a26e"),alt:""}})])])]),a("el-col",{attrs:{span:16}},[a("div",{staticClass:"w-100 d-flex align-items-center justify-content-center flex-column"},[a("p",{staticClass:"m-0"},[t._v(" "+t._s(e.fileName)+" ")])])])],1)],1)})),0):t._e()])])])})),0)])])])},i=[],n=(s("4de4"),s("96cf"),s("1da1")),c=s("2fe4"),l={components:{PhoneTitle:c["a"]},data:function(){return{listQuery:{NewsTypeId:"SYS_NEWS_COMPETITION",page:1,limit:20,key:void 0},contestMsg:[]}},methods:{getList:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.news(t.listQuery).then((function(e){t.contestMsg=e.data.data.filter((function(e){return e.id===t.$route.params.id})),t.contestMsg[0].attachedFile=JSON.parse(t.contestMsg[0].attachedFile),t.$store.commit("SETLOADING",!1)}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$store.commit("SETLOADING",!0),this.getList()}},A=l,r=(s("0cda"),s("2877")),o=Object(r["a"])(A,a,i,!1,null,null,null);e["default"]=o.exports},"2fe4":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"phoneTitle"}},[s("div",{staticClass:"px-20 py-10 d-flex align-items-center justify-content-between"},[s("strong",{staticClass:"m-0"},[t._v(t._s(t.title))]),t.filterDate?s("select",[s("option",{attrs:{value:"2020"}},[t._v("2020")])]):t._e()])])},i=[],n={props:{title:{type:String,require:!0},filterDate:{type:Boolean,require:!0}}},c=n,l=(s("189f"),s("2877")),A=Object(l["a"])(c,a,i,!1,null,null,null);e["a"]=A.exports},"6d96":function(t,e,s){},a26e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI9SURBVHgB7ZZRTttAEIZndh3zmNwgPkL6QNU+1T0B9ASFExQL5YGnkCckhDE3ID1BywkID1UlUjXpDdIbmEdIdrYzjoNWVCSLcJSXjGTFu+PMfjs7++8ilHabpnsIcAkvMcT+9P5+//3R0ViaP09OoiAIou12u+8bQsFrzNo4CMPh7elpS5oFiNadQZZ1fEO8DmBmDQyC7LFlTBeIjgdp+m2YZY1lf64CoMjEjzILvASjsnfXEA1lWWDlAGwaMZbfN0mSW8RxwQUQ1cLwehFEZQAKMZq/czGP5+/LIKoEqD/nWwRRGYBrxpgrIurKw9noyXYViGBr67/CDKAiI2vv5u/v2u2Lp34ZeEK0a6yVHbNfOYC1Nl/kl+IEycbsgcoBtFJN3vsyu4hT3nDIRpz+P+bhoT9XzJUA8CB7zqCuK0YZKAyBFfJ4O0m6rnMlRfissUL+StPL9QHALFO/z86aawMQmxJ9hHUCuLZ2AK9dIGpGADdFg08+RPxsHTGRdtl/8ChI5XfLYntlgIy5KUF2alofyN5+e3jY0wBNHr0eIH5id66IvpdBP6D4PMx7CRQrHavd3/K4LYSG+AhGay+sMXX2Xc0+VCNL9JXBcp+43kIkUstpzwfn59fciBxXjlrfMUiT9zkgUczXsh3+puUT1xuAayBWSnVcleNMJDW+fEwmk4gh4hK0xemPfeP6FaFSX/i8b7gCW2YCpnIn1LqYrVGqh54zfxEAr2fLPu3jKgefviW2EaINwAZgA/APPNPunuJpDi4AAAAASUVORK5CYII="},bedc:function(t,e,s){},c7fa:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADASURBVHgBtZS9DcIwEIXfRZFoGYER+MkOUeiyAUyCE7EAE7BCqEA00CEhoTACY1AQH9CkiOMoPszXWSd9OuvuHdDBZa9GEBDYCtejGg8CLm+H1RaOkE0YMp/AGH7fmiiNYlVA2mlTyMyZi9DotE04S3IFR8i3sJYaQqDQXG0g4IXwQU3hrzDrZYA/0Pr9D+eKKYOA8Im7dVBErCZxLhJ3rpRUbCTKh7hfTHWVRvN171SRrVCLNe+mSb6AL0rh6XsDij6Fvl13CyIAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-343c930c.50b4c102.js.map