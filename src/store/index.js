import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstLoad: true,
    loading: false
  },
  mutations: {
    SETFIRSTLOAD(state, payload) {
      state.firstLoad = payload;
    },
    SETLOADING(state, payload) {
      state.loading = payload;
    }
  },
  actions: {},
  modules: {}
})