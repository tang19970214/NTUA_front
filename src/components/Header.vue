<template>
  <div id="header">
    <!-- web -->
    <div class="d-none d-mb-block">
      <!-- LOGO -->
      <router-link to="/">
        <img class="pos-logo" src="../assets/NTUA_LOGO.svg" alt="NTUA_LOGO" />
      </router-link>
      <!-- MENU -->
      <div>
        <img
          class="pos-menu"
          src="../assets/images/logo/logo_header_1.png"
          alt="menu"
        />
        <img
          v-show="!scrollLeftTop"
          class="pos-menuText"
          src="../assets/images/logo/logo_header_2.png"
          alt="Crafts & Design Department"
        />
        <img
          class="pos-search"
          src="../assets/images/icon/search.png"
          alt="search_btn"
          @click="openSearch()"
        />
        <img
          class="pos-menuList"
          src="../assets/images/icon/menuList.png"
          alt="menuList_btn"
          @click="openMenu()"
        />
      </div>
      <!-- left bar -->
      <div class="leftBar">
        <img src="../assets/images/icon/leftBar.png" alt="" />
        <div class="d-flex align-items-center flex-column" style="width: 60px">
          <span class="cur-pointer">
            <img
              class="mt-11"
              src="../assets/images/icon/FB_icon_1.png"
              alt="Facebook"
            />
          </span>
          <span class="cur-pointer">
            <img
              class="mt-22"
              src="../assets/images/icon/ig_icon_1.png"
              alt="Instagram"
            />
          </span>
          <span class="cur-pointer">
            <img
              class="mt-22"
              src="../assets/images/icon/YT_icon_1.png"
              alt="Youtube"
            />
          </span>
        </div>
      </div>
      <!-- search -->
      <div
        class="searchBox d-flex align-items-center justify-content-center flex-column"
        v-if="clickSearch"
        @mouseleave="hiddenSearch()"
      >
        <el-input v-model="getKeyword" class="input-with-select" clearable>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <div class="w-100 mt-10">
          <span
            class="referWord cur-pointer"
            v-for="(item, index) in referWord"
            :key="'RW__' + index"
            @click="selectKeyword(item)"
            >{{ item.name }}</span
          >
        </div>
      </div>
      <!-- menu -->
      <div
        class="circleMenu d-flex align-items-center justify-content-between flex-row"
        v-if="clickOpen"
      >
        <div style="width: 40%">
          <ul
            class="w-100 m-0 p-0 d-flex align-items-center justify-content-center flex-column list-none"
          >
            <li
              :class="{ stayPage: item.mainPath == $route.meta.mainPage }"
              v-for="(item, index) in getMenu.leftMenu"
              :key="'GLM__' + index"
              @click="goNextPage(item)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div style="width: 60%">
          <ul
            class="w-100 m-0 p-0 d-flex align-items-center justify-content-center flex-column list-none"
          >
            <li
              :class="{ stayPage: item.mainPath == $route.meta.mainPage }"
              v-for="(item, index) in getMenu.rightMenu"
              :key="'GRM__' + index"
              @click="goNextPage(item)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- phone -->
    <div class="d-block d-mb-none">
      <div class="phoneScreen">
        <div
          class="pr-10 py-5 d-flex align-items-center justify-content-center"
        >
          <router-link to="/">
            <img
              src="../assets/images/logo/NTUA_LOGO.svg"
              alt="回到台藝大工藝系首頁"
              width="150px"
            />
          </router-link>
          <div class="pos-absolute t-0 r-0 mt-20 mr-20">
            <img
              src="../assets/images/icon/menuList-phone.png"
              alt="menu"
              width="35px"
              @click="openMenuModal"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- phoneModal -->
    <div class="modal" v-if="menuModal">
      <div class="modal-content">
        <div
          class="menuList w-100 d-flex align-items-center justify-content-center flex-row"
        >
          <ul
            class="w-100 m-0 p-0 d-flex align-items-start justify-content-start flex-column"
          >
            <li
              class="px-10 d-flex"
              :class="{ stayPage: item.mainPath == $route.meta.mainPage }"
              v-for="item in menuList"
              :key="item.value"
              @click="goNextPage(item)"
            >
              <p class="m-0 pb-10">{{ item.value }}</p>
              {{ item.text }}
            </li>
          </ul>

          <div class="w-100 overflow-x mt-60">
            <div class="px-30">
              <div
                class="menuList__submenu p-10 mx-10"
                :class="{
                  'menuList__submenu-active': items.pathName == $route.name,
                }"
                v-for="items in subList[$route.meta.mainPage]"
                :key="items.value"
                @click="goNextPage_phone(items)"
              >
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
            mainPath: "",
            pathName: "",
            name: "系所規定與申請表",
          },
          {
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
          mainPath: "",
          pathName: "",
        },
        {
          value: "04",
          text: "招生資訊",
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
              name: "SYS_CLASSTYPE_CERAMICS",
            },
          },
          {
            value: "04",
            text: "教學設備與空間",
            mainPath: "aboutUS",
            pathName: "equipment",
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
    hiddenSearch(data) {
      this.clickSearch = false;
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
      if (this.scrollTop > 200) {
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
  .pos {
    &-logo {
      position: fixed;
      top: 0%;
      left: 2rem;
      z-index: 99;
    }
    &-menu {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 99;
    }
    &-menuText {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 99;
      margin-top: 200px;
      margin-right: 50px;
    }
    &-search {
      position: fixed;
      top: 3rem;
      right: 14rem;
      z-index: 99;
      cursor: pointer;
    }
    &-menuList {
      position: fixed;
      top: 2.5rem;
      right: 6rem;
      z-index: 99;
      cursor: pointer;
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
    .el-input-group__append {
      background: white;
      border: 0;
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
      font-size: 24px;
      line-height: 28px;
      color: #ded9d5;
      margin-bottom: 18px;
      cursor: pointer;
      &:hover {
        background: white;
        color: #ceb87f;
      }
    }
    .stayPage {
      background: white;
      color: #ceb87f;
    }
  }
  .leftBar {
    position: fixed;
    z-index: 99;
    margin-top: 7rem;
    left: 1rem;
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
        ul {
          font-size: 24px;
          font-weight: bold;
          line-height: 28px;
          color: #ded9d5;
          list-style-type: none;
          height: 18rem;
          li > p {
            white-space: nowrap;
            writing-mode: horizontal-tb;
          }
        }
        .stayPage {
          color: #ceb87f;
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