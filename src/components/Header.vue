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
          src="../assets/images/logo/logo_header.png"
          alt="menu"
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
    <div
      class="phoneScreen d-block d-mb-none"
    >
      <div class="px-30 py-20 d-flex align-items-center justify-content-between">
        <router-link to="/">
          <img src="../assets/NTUA_LOGO.svg" alt="NTUA_LOGO" width="225px" />
        </router-link>
        <img src="../assets/images/icon/menuList-phone.png" alt="menu" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickSearch: false,
      clickOpen: false,
      getMenu: {
        leftMenu: [
          {
            pathName: "fullTime",
            name: "系所成員",
          },
          {
            pathName: "alumni",
            name: "系友專區",
          },
          {
            name: "捐款專區",
          },
          {
            pathName: "relatedLink",
            name: "相關連結",
          },
        ],
        rightMenu: [
          {
            pathName: "bulletin",
            name: "最新消息",
          },
          {
            pathName: "history",
            name: "系所簡介及課程",
          },
          {
            pathName: "",
            name: "系所規定與申請表",
          },
          {
            pathName: "",
            name: "招生資訊",
          },
          {
            pathName: "award",
            name: "教學成果",
          },
          {
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
    };
  },
  methods: {
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
    },
  },
};
</script>

<style lang="scss">
#header {
  z-index: 99;
  .pos {
    &-logo {
      position: fixed;
      top: 0%;
      left: 2rem;
      z-index: 99;
    }
    &-menu {
      position: fixed;
      top: 0%;
      right: 0%;
      z-index: 99;
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
    z-index: 99;
    margin-top: 6rem;
    margin-right: 10rem;
    right: 0;
    width: 470px;
    height: 470px;
    border-radius: 50%;
    background-color: rgba(89, 86, 86, 0.5);
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
  }
  .leftBar {
    position: fixed;
    z-index: 99;
    margin-top: 7rem;
    left: 1rem;
  }

  // phone
  .phoneScreen {
    width: 100%;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 10px 10px;
  }
}
</style>