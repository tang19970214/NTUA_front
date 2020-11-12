import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueFlicking from "@egjs/vue-flicking";
import "@/assets/all.scss"

Vue.use(ElementUI);
Vue.use(VueFlicking);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
