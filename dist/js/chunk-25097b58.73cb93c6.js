(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25097b58"],{"189f":function(t,e,n){"use strict";n("bedc")},"2d20":function(t,e,n){t.exports=n.p+"img/art1.990f9ac8.png"},"2fe4":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"phoneTitle"}},[n("div",{staticClass:"px-20 py-10 d-flex align-items-center justify-content-between"},[n("strong",{staticClass:"m-0"},[t._v(t._s(t.title))]),t.filterDate?n("select",[n("option",{attrs:{value:"2020"}},[t._v("2020")])]):t._e()])])},a=[],s={props:{title:{type:String,require:!0},filterDate:{type:Boolean,require:!0}}},r=s,l=(n("189f"),n("2877")),c=Object(l["a"])(r,i,a,!1,null,null,null);e["a"]=c.exports},"71ea":function(t,e,n){t.exports=n.p+"img/art3.4328d1e3.png"},8332:function(t,e,n){},"87d2":function(t,e,n){"use strict";n("9814")},9056:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relatedLink"},[n("div",{staticClass:"web d-none d-mb-block"},[n("p",{staticClass:"m-0 Txt-title"},[t._v("Related links")]),n("div",{staticClass:"mt-70 newsCard"},[n("div",{staticClass:"newsCard-sortText"},t._l(t.relatedLinkSort,(function(e,i){return n("router-link",{key:"NS__"+i,staticClass:"mr-35 mb-15 d-flex align-items-center justify-content-end flex-row text-decoration-none",class:{active:t.$route.name==e.pathURL},attrs:{to:{name:e.pathURL}}},[n("p",{staticClass:"m-0"},[t._v(t._s(e.pathName))]),n("i",{staticClass:"el-icon-minus"}),n("p",{staticClass:"m-0"},[t._v("0"+t._s(i+1))])])})),1),n("LoadShowIMG"),n("div",{staticClass:"w-100 newsCard-title"},[n("div",{staticClass:"p-60"},[n("div",{staticClass:"w-100 d-flex flex-row"},[n("div",{staticClass:"w-100"},[n("p",{staticClass:"m-0"},[t._v(t._s(t.getPathName(t.relatedLinkSort)))])])])])]),n("div",{staticClass:"newsCard-contentCard"},[n("div",{staticClass:"w-100"},t._l(t.linksList,(function(e){return n("div",{key:e.id,staticClass:"relatedLinkTable w-100 d-flex align-items-center justify-content-between flex-row"},t._l(e,(function(e,i){return n("p",{key:i,staticClass:"m-0"},[t._v(" "+t._s(e.title)+" ")])})),0)})),0)])],1)]),n("div",{staticClass:"phone d-block d-mb-none pt-70"},[n("PhoneTitle",{attrs:{title:"相關連結",filterDate:!1}}),n("div",{staticClass:"p-30 relatedCard"},t._l(t.linksList_phone,(function(e){return n("div",{key:e.id,staticClass:"w-100 relatedCard__content mb-30"},[n("p",{staticClass:"m-0 pb-20"},[t._v(" "+t._s(e.title)+" ")])])})),0)],1)])},a=[],s=(n("4160"),n("fb6a"),n("b0c0"),n("159b"),n("96cf"),n("1da1")),r=n("9b4d"),l=n("2fe4"),c={components:{LoadShowIMG:r["a"],PhoneTitle:l["a"]},data:function(){return{relatedLinkSort:[{pathURL:"relatedLink",pathName:"相關連結"}],listQuery:{page:1,limit:20,key:void 0},linksList:[],linksList_phone:[]}},computed:{getPathName:function(){var t=this;return function(e){var n="";return e.forEach((function(e){t.$route.name==e.pathURL&&(n=e.pathName)})),n}},getYearGrouop:function(){return function(){for(var t=(new Date).getFullYear(),e=[],n=t-5;n<=t;n++)e.push(n);return e.reverse(),e}}},methods:{getList:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.relatedlink(t.listQuery).then((function(e){var n=[];e.data.data.forEach((function(t,e,i){if(e%2===0)return n.push(i.slice(e,e+2))})),t.linksList=n,t.linksList_phone=e.data.data,t.$store.commit("SETLOADING",!1)}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$store.commit("SETLOADING",!0),this.getList()}},o=c,u=(n("ba45"),n("2877")),d=Object(u["a"])(o,i,a,!1,null,null,null);e["default"]=d.exports},9814:function(t,e,n){},"9b4d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"loadShowIMG"}},[n("div",{staticClass:"w-100 d-flex align-items-center flex-row"},t._l(t.artImg,(function(t,e){return n("span",{key:"AI__"+e,staticClass:"w-100 transBg"},[n("img",{attrs:{src:t.imgUrl,alt:"",width:"100%"}})])})),0)])},a=[],s={data:function(){return{artImg:[{imgUrl:n("2d20")},{imgUrl:n("d41d")},{imgUrl:n("71ea")}]}}},r=s,l=(n("87d2"),n("2877")),c=Object(l["a"])(r,i,a,!1,null,null,null);e["a"]=c.exports},ba45:function(t,e,n){"use strict";n("8332")},bedc:function(t,e,n){},d41d:function(t,e,n){t.exports=n.p+"img/art2.b8f9745d.png"}}]);
//# sourceMappingURL=chunk-25097b58.73cb93c6.js.map