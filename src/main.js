import "babel-polyfill"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import locale from "element-ui/lib/locale/lang/zh-TW";
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Vue2Editor from "vue2-editor";

var VueScrollTo = require('vue-scrollto');

import api from "@/api/apis.js";
import "@/assets/all.scss"

Vue.use(ElementUI, {
  locale
})
Vue.use(require('vue-moment'))
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.use(Vue2Editor)
Vue.use(VueScrollTo)
Vue.config.productionTip = false
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')