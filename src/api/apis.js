import {
  Loading
} from "element-ui";
import req from "./https";

// 全域 api 掛載於 Vue.prototype
// 使用方式 this.$api
// api 命名原則 首字大寫爾後駝峰
const api = {
  // Login(params) {
  //   return req("post", "Check/Login", params);
  // },
};

export default api;