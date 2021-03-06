import {
  Loading
} from "element-ui";
import req from "./https";

// 全域 api 掛載於 Vue.prototype
// 使用方式 this.$api
// api 命名原則 首字大寫爾後駝峰
const api = {
  /* Banner */
  banner() {
    return req("get", "banners/loadClient");
  },
  /* 最新消息 */
  news(params) {
    return req("get", "newss/loadClient", params);
  },
  /* 教學設備與空間 */
  classrooms(params) {
    return req("get", "classrooms/load", params);
  },
  getclassrooms(params) {
    return req("get", "classrooms/get", params);
  },
  classroomPics(params) {
    return req("get", "classroomPics/loadByRoomId", params);
  },
  /* 四大工坊 */
  crafts(params) {
    return req("get", "workshopDatas/load", params);
  },
  /* 系所規定與申請表 */
  departmentRule(params) {
    return req("get", "departmentRules/loadClient", params);
  },
  /* 競賽得獎、研究發表 */
  award(params) {
    return req("get", "departmentteachs/load", params);
  },
  memberDatas(params) {
    return req("get", "departmentMemberDatas/load", params);
  },
  /* 展覽紀錄、活動花絮 */
  record(params) {
    return req("get", "departmentActivityAlbums/load", params);
  },
  departmentAlbemPics(params) {
    return req("get", "departmentAlbemPics/loadByAlbumId", params);
  },
  /* 研討會&工作營 */
  seminarNews(params) {
    return req("get", "seminarNewss/loadClient", params);
  },
  seminarWorks(params) {
    return req("get", "seminarWorks/get", params);
  },
  /* 系所成員 */
  members(params) {
    return req("get", "departmentMembers/load", params);
  },
  /* 系友專區 */
  alumni(params) {
    return req("get", "departmentAlumnis/loadClient", params);
  },
  /* 相關連結 */
  relatedlink(params) {
    return req("get", "relatedLinks/load", params);
  },
  /* 學分表 */
  singleFile(params) {
    return req("get", "singleFiles/load", params);
  },
};

export default api;