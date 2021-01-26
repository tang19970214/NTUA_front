<template>
  <div id="header">
    <!-- web -->
    <div class="d-none d-mb-block">
      <div class="headerBG" v-if="scrollLeftTop"></div>
      <!-- LOGO -->
      <a href="https://www.ntua.edu.tw/" target="_blank">
        <img class="pos-logo" src="../assets/NTUA_LOGO.svg" alt="NTUA_LOGO" />
      </a>
      <!-- MENU -->
      <div>
        <span class="pos-menu d-flex align-items-center justify-content-center cur-pointer" @click="openMenu()">
          <img src="../assets/images/icon/menuList.png" alt="導覽列" width="48px" />
        </span>

        <span class="pos-search d-flex align-items-center justify-content-center cur-pointer" @click="openSearch()">
          <img src="../assets/images/icon/search.png" alt="搜尋" width="25px" v-if="!clickSearch" />
        </span>
      </div>
      <!-- left bar -->
      <div class="leftBar">
        <router-link to="/">
          <img src="../assets/images/icon/leftBar.png" alt="" width="50px" height="580px" />
        </router-link>
        <div class="leftBar__transBlock"></div>
        <div class="d-flex align-items-center flex-column" style="width: 50px">
          <a class="mt-11" href="https://www.facebook.com/crafts.ntua.edu.tw" target="_blank">
            <img src="../assets/images/icon/FB_icon_1.png" alt="Facebook" />
          </a>
          <a class="mt-22" href="https://www.instagram.com/the_absence_of_authors/" target="_blank">
            <img src="../assets/images/icon/ig_icon_1.png" alt="Instagram" />
          </a>
          <a class="mt-22" href="https://www.youtube.com/channel/UC9vt9X8uPxWtIO7mWEAyyDw" target="_blank">
            <img src="../assets/images/icon/YT_icon_1.png" alt="Youtube" />
          </a>
        </div>
      </div>
      <!-- search -->
      <div class="searchBox d-flex align-items-center justify-content-center flex-column" v-if="clickSearch" @mouseleave="clickSearch = false">
        <el-input v-model="getKeyword" placeholder="請輸入些關鍵字" class="input-with-select" clearable></el-input>
        <span class="pos-absolute searchBox__btn">
          <img src="../assets/images/icon/search_black.png" alt="搜尋按鈕" width="25px" />
        </span>

        <div class="w-100 mt-10">
          <span class="referWord cur-pointer" v-for="(item, index) in referWord" :key="'RW__' + index" @click="selectKeyword(item)">{{ item.name }}</span>
        </div>
      </div>
      <!-- menu -->
      <div class="circleMenu d-flex align-items-center justify-content-between flex-row" v-if="clickOpen">
        <div style="width: 40%">
          <ul class="w-100 m-0 p-0 d-flex align-items-center justify-content-center flex-column list-none">
            <li :class="{ stayPage: item.mainPath == $route.meta.mainPage }" v-for="(item, index) in getMenu.leftMenu" :key="'GLM__' + index" @click="goNextPage(item)">
              <a :href="item.path" target="_blank" v-if="item.path">
                {{ item.name }}
              </a>
              <p class="m-0" v-else>
                {{ item.name }}
              </p>
            </li>
          </ul>
        </div>
        <div style="width: 60%">
          <ul class="w-100 m-0 p-0 d-flex align-items-center justify-content-center flex-column list-none">
            <li :class="{ stayPage: item.mainPath == $route.meta.mainPage }" v-for="(item, index) in getMenu.rightMenu" :key="'GRM__' + index" @click="goNextPage(item)">
              <a :href="item.path" target="_blank" v-if="item.path">
                {{ item.name }}
              </a>
              <p class="m-0" v-else>
                {{ item.name }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- phone -->
    <div class="d-block d-mb-none">
      <div class="phoneScreen">
        <div class="pr-10 py-5 d-flex align-items-center justify-content-center">
          <router-link to="/">
            <img src="../assets/images/logo/NTUA_LOGO.svg" alt="回到台藝大工藝系首頁" width="150px" />
          </router-link>
          <div class="pos-absolute t-0 r-0 mt-20 mr-20">
            <img src="../assets/images/icon/menuList-phone.png" alt="menu" width="35px" @click="openMenuModal" />
          </div>
        </div>
      </div>
    </div>

    <!-- phoneModal -->
    <div class="modal" v-if="menuModal">
      <div class="modal-content">
        <div class="menuList w-100 d-flex align-items-center justify-content-center flex-row">
          <ul class="w-100 m-0 p-0 d-flex align-items-start justify-content-start flex-column">
            <li class="px-10 d-flex" :class="{ stayPage: item.mainPath == $route.meta.mainPage }" v-for="item in menuList" :key="item.value" @click="goNextPage(item)">
              <p class="m-0 pb-10">{{ item.value }}</p>
              <a :href="item.path" target="_blank" v-if="item.path" style="writing-mode: vertical-lr">{{ item.text }}</a>
              <p class="m-0" v-else style="writing-mode: vertical-lr">
                {{ item.text }}
              </p>
            </li>
          </ul>

          <div class="w-100 overflow-x mt-60">
            <div class="px-30">
              <div class="menuList__submenu p-10 mx-10" :class="{
                  'menuList__submenu-active':
                    items.pathName == $route.meta.subName,
                }" v-for="items in subList[$route.meta.mainPage]" :key="items.value" @click="goNextPage_phone(items)">
                <a class="text-decoration-none" :href="items.path" target="_blank" v-if="items.path">
                  <span>{{ items.value }}</span>
                  <div class="w-100 d-flex align-items-center">
                    <label>{{ items.text }}</label>
                  </div>
                </a>
                <div v-else>
                  <span>{{ items.value }}</span>
                  <div class="w-100 d-flex align-items-center">
                    <label>{{ items.text }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: "",
      scrollLeftTop: false,
      clickSearch: false,
      clickOpen: false,
      getMenu: {
        leftMenu: [
          {
            mainPath: "departmentMember",
            pathName: "fullTime",
            name: "系所成員",
          },
          {
            mainPath: "alumni",
            pathName: "alumni",
            name: "系友專區",
          },
          {
            path: "https://giving.ntua.edu.tw/",
            mainPath: "",
            pathName: "",
            name: "捐款專區",
          },
          {
            mainPath: "relatedLink",
            pathName: "relatedLink",
            name: "相關連結",
          },
        ],
        rightMenu: [
          {
            mainPath: "latestNews",
            pathName: "bulletin",
            name: "最新消息",
          },
          {
            mainPath: "aboutUS",
            pathName: "history",
            name: "系所簡介及課程",
          },
          {
            mainPath: "provision",
            pathName: "bachelor",
            name: "系所規定與申請表",
          },
          {
            path: "https://aca.ntua.edu.tw/list.aspx?ca=217",
            mainPath: "",
            pathName: "",
            name: "招生資訊",
          },
          {
            mainPath: "teachingResult",
            pathName: "award",
            name: "教學成果",
          },
          {
            mainPath: "website",
            pathName: "workCamp",
            name: "研討會/工作營網站",
          },
        ],
      },
      getKeyword: "",
      referWord: [
        {
          name: "轉學考",
        },
        {
          name: "教學設備",
        },
        {
          name: "關鍵字關鍵",
        },
      ],
      menuModal: false,
      menuList: [
        {
          value: "01",
          text: "最新消息",
          mainPath: "latestNews",
          pathName: "bulletin",
        },
        {
          value: "02",
          text: "系所簡介及課程",
          mainPath: "aboutUS",
          pathName: "history",
        },
        {
          value: "03",
          text: "系所規定與申請表",
          mainPath: "provision",
          pathName: "bachelor",
        },
        {
          value: "04",
          text: "招生資訊",
          path: "https://aca.ntua.edu.tw/list.aspx?ca=217",
          mainPath: "",
          pathName: "",
        },
        {
          value: "05",
          text: "教學成果",
          mainPath: "teachingResult",
          pathName: "award",
        },
        {
          value: "06",
          text: "研討會/工作營網站",
          mainPath: "website",
          pathName: "workCamp",
        },
        {
          value: "07",
          text: "系所成員",
          mainPath: "departmentMember",
          pathName: "fullTime",
        },
        {
          value: "08",
          text: "系友專區",
          mainPath: "alumni",
          pathName: "alumni",
        },
        {
          value: "09",
          text: "捐款專區",
          path: "https://giving.ntua.edu.tw/",
          mainPath: "",
          pathName: "",
        },
        {
          value: "10",
          text: "相關連結",
          mainPath: "relatedLink",
          pathName: "relatedLink",
        },
      ],
      subList: {
        latestNews: [
          {
            value: "01",
            text: "系辦公告",
            mainPath: "latestNews",
            pathName: "bulletin",
          },
          {
            value: "02",
            text: "競賽資訊",
            mainPath: "latestNews",
            pathName: "contest",
          },
          {
            value: "03",
            text: "活動訊息",
            mainPath: "latestNews",
            pathName: "activity",
          },
        ],
        aboutUS: [
          {
            value: "01",
            text: "歷史沿革",
            mainPath: "aboutUS",
            pathName: "history",
          },
          {
            value: "02",
            text: "課程說明",
            mainPath: "aboutUS",
            pathName: "description",
          },
          {
            value: "03",
            text: "四大工坊",
            mainPath: "aboutUS",
            pathName: "crafts",
            params: {
              title: "sort",
              name: "CERAMICS",
            },
          },
          {
            value: "04",
            text: "教學設備與空間",
            mainPath: "aboutUS",
            pathName: "equipment",
          },
        ],
        provision: [
          {
            value: "01",
            text: "學士班",
            mainPath: "provision",
            pathName: "bachelor",
          },
          {
            value: "02",
            text: "二年制在職專班",
            mainPath: "provision",
            pathName: "twoyears",
          },
          {
            value: "03",
            text: "碩士班",
            mainPath: "provision",
            pathName: "master",
          },
        ],
        teachingResult: [
          {
            value: "01",
            text: "競賽得獎",
            mainPath: "teachingResult",
            pathName: "award",
          },
          {
            value: "02",
            text: "研究發表",
            mainPath: "teachingResult",
            pathName: "publish",
          },
          {
            value: "03",
            text: "展覽紀錄",
            mainPath: "teachingResult",
            pathName: "record",
          },
          {
            value: "04",
            text: "活動花絮",
            mainPath: "teachingResult",
            pathName: "highlight",
          },
          {
            value: "05",
            text: "實習成果",
            mainPath: "teachingResult",
            pathName: "internshipResult",
          },
          {
            value: "06",
            text: "工作室成果",
            mainPath: "teachingResult",
            pathName: "studioResult",
          },
        ],
        website: [
          {
            value: "01",
            text: "工作營",
            mainPath: "website",
            pathName: "workCamp",
          },
          {
            value: "02",
            text: "研討會",
            path: "https://crafts.ntua.edu.tw/CDC2009/main.php",
            mainPath: "website",
            pathName: "seminar",
          },
        ],
        departmentMember: [
          {
            value: "01",
            text: "專任教師",
            mainPath: "departmentMember",
            pathName: "fullTime",
          },
          {
            value: "02",
            text: "兼任教師",
            mainPath: "departmentMember",
            pathName: "partTime",
          },
          {
            value: "03",
            text: "行政助理",
            mainPath: "departmentMember",
            pathName: "administrative",
          },
        ],
      },
    };
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    openSearch() {
      this.clickSearch = !this.clickSearch;
    },
    openMenu() {
      this.clickOpen = !this.clickOpen;
    },
    selectKeyword(item) {
      this.getKeyword = item.name;
    },
    goNextPage(data) {
      this.$router.push({ name: data.pathName });
      this.clickOpen = false;
      this.menuModal = false;
    },
    goNextPage_phone(data) {
      if (!data.params) {
        this.$router.push({ name: data.pathName });
        this.menuModal = false;
      } else {
        this.$router.push({
          name: data.pathName,
          params: { [data.params.title]: data.params.name },
        });
        this.menuModal = false;
      }
    },
    openMenuModal() {
      this.menuModal = !this.menuModal;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    scrollTop(val) {
      if (this.scrollTop > 400) {
        this.scrollLeftTop = true;
      } else {
        this.scrollLeftTop = false;
      }
    },
  },
};
</script>

<style lang="scss">
#header {
  z-index: 9999;
  .headerBG {
    position: fixed;
    z-index: 98;
    width: 100%;
    height: 120px;
    background: rgba(96, 96, 97, 0.8);
  }
  .pos {
    &-logo {
      position: fixed;
      top: 0%;
      margin-top: 20px;
      left: 2rem;
      z-index: 99;
    }
    &-menu {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: #df281d;
      position: fixed;
      top: 25px;
      right: 95px;
      z-index: 99;
      transition: all 0.8s;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        z-index: 1;
        opacity: 0;
        background-color: rgba(255, 255, 255, 0.25);
        transition: all 0.3s;
        transform: scale(0.2, 0.2);
      }
      &:hover:before {
        opacity: 1;
        transform: scale(1, 1);
      }
    }
    &-search {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: #df281d;
      position: fixed;
      top: 25px;
      right: 200px;
      z-index: 99;
      transition: all 0.8s;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        z-index: 1;
        opacity: 0;
        background-color: rgba(255, 255, 255, 0.25);
        transition: all 0.3s;
        transform: scale(0.2, 0.2);
      }
      &:hover:before {
        opacity: 1;
        transform: scale(1, 1);
      }
    }
  }
  .searchBox {
    position: fixed;
    z-index: 99;
    margin-top: 2.3rem;
    margin-right: 13rem;
    right: 0;
    width: 300px;
    height: 120px;
    .el-input__inner {
      opacity: 0.7;
      border-radius: 20px;
    }
    .referWord {
      background: #c4c4c4;
      opacity: 0.5;
      color: #52505a;
      border-radius: 10px;
      padding: 2px 10px;
      margin-right: 25px;
      white-space: nowrap;
      line-height: 2rem;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        opacity: 1;
      }
    }
    &__btn {
      z-index: 100;
      top: 11px;
      right: 14px;
    }
  }
  .circleMenu {
    position: fixed;
    z-index: 999;
    margin-top: 6rem;
    margin-right: 10rem;
    right: 0;
    width: 470px;
    height: 470px;
    border-radius: 50%;
    background-color: rgba(89, 86, 86, 0.8);
    div > ul > li {
      margin-bottom: 18px;
      p,
      a {
        text-decoration: none;
        font-size: 24px;
        line-height: 28px;
        color: #ded9d5;
        cursor: pointer;
        &:hover {
          background: white;
          color: #ceb87f;
        }
      }
    }
    .stayPage {
      a,
      p {
        background: white;
        color: #ceb87f;
      }
    }
  }
  .leftBar {
    position: fixed;
    z-index: 99;
    margin-top: 8rem;
    left: 1rem;
    &__transBlock {
      position: absolute;
      top: 0;
      margin-top: 60px;
      width: 50px;
      height: 520px;
      background: transparent;
      z-index: 100;
    }
  }

  // phone
  .phoneScreen {
    position: fixed;
    z-index: 5000;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 10px 10px;
  }

  // modal
  .modal {
    position: fixed;
    z-index: 3000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);

    &-content {
      position: fixed;
      bottom: 15%;
      width: 100%;
      animation-name: slideIn;
      animation-duration: 0.5s;
      .menuList {
        writing-mode: vertical-lr;
        color: white;
        overflow-x: auto;
        ul > li {
          font-size: 24px;
          font-weight: bold;
          line-height: 28px;
          list-style-type: none;
          height: 18rem;
          p,
          a {
            color: #ded9d5;
            text-decoration: none;
            white-space: nowrap;
            writing-mode: horizontal-tb;
          }
        }
        .stayPage {
          a,
          p {
            color: #ceb87f;
          }
        }
        &__submenu {
          writing-mode: horizontal-tb;
          background: #ffffff;
          border-radius: 6px;
          width: 100px;
          height: 100px;
          span {
            height: 30px;
            font-weight: bold;
            font-size: 18px;
            letter-spacing: 0.25em;
            color: #ceb87f;
            border-bottom: 2px solid #ceb87f;
          }
          div {
            height: 70px;
            label {
              font-size: 20px;
              line-height: 160%;
              letter-spacing: 0.25em;
              color: #ceb87f;
            }
          }
          &-active {
            background: #596164;
          }
        }
      }
    }
  }

  @keyframes slideIn {
    from {
      bottom: 0;
      opacity: 0;
    }

    to {
      bottom: 30%;
      opacity: 1;
    }
  }
}
</style>