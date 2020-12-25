import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import api from "@/api/apis.js";
import "@/assets/all.scss"

Vue.use(ElementUI)
Vue.use(require('vue-moment'))
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')