import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstLoad: true,
    loading: false,
    /* 從首頁進入最新消息頁，給ID判斷自動開啟modal */
    newsId: "",
  },
  mutations: {
    SETFIRSTLOAD(state, payload) {
      state.firstLoad = payload;
    },
    SETLOADING(state, payload) {
      state.loading = payload;
    },
    SETNEWSID(state, payload) {
      state.newsId = payload;
    }
  },
  actions: {},
  modules: {}
})