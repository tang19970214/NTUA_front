import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstLoad: true
  },
  mutations: {
    SETFIRSTLOAD(state, payload) {
      state.firstLoad = payload;
    }
  },
  actions: {},
  modules: {}
})