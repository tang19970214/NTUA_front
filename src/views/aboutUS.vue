<template>
  <div id="aboutUS">
    <div class="web d-none d-mb-block">
      <p class="Txt-title">ABOUT US</p>
      <p class="Txt-children">Crafts&Design Department</p>
      <div class="mt-70 newsCard">
        <div class="newsCard-sortText">
          <router-link
            class="mr-35 mb-15 d-flex align-items-center justify-content-end flex-row text-decoration-none"
            :class="{ active: $route.name == item.pathURL }"
            :to="{ name: item.pathURL, params: { sort: item.pathParams } }"
            v-for="(item, index) in aboutUS"
            :key="'TS__' + index"
          >
            <p class="m-0">{{ item.pathName }}</p>
            <i class="el-icon-minus"></i>
            <p class="m-0">0{{ index + 1 }}</p>
          </router-link>
        </div>

        <LoadShowIMG />

        <div class="w-100">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb-none pt-70">
      <PhoneTitle :title="getPathName(aboutUS)" :filterDate="false" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LoadShowIMG from "@/components/LoadShowIMG.vue";
import PhoneTitle from "@/components/PhoneTitle.vue";

export default {
  components: {
    LoadShowIMG,
    PhoneTitle,
  },
  data() {
    return {
      aboutUS: [
        {
          pathURL: "history",
          pathName: "歷史沿革",
        },
        {
          pathURL: "description",
          pathName: "課程說明",
        },
        {
          pathURL: "crafts",
          pathParams: "CERAMICS",
          pathName: "四大工坊",
        },
        {
          pathURL: "equipment",
          pathName: "教學設備與空間",
        },
      ],
    };
  },
  computed: {
    getPathName() {
      return (data) => {
        let pName = "";
        data.forEach((item) => {
          if (this.$route.name == item.pathURL) {
            pName = item.pathName;
          }
        });
        return pName;
      };
    },
    getYearGrouop() {
      return () => {
        const YY = new Date().getFullYear();
        let countYear = [];
        for (let i = YY - 5; i <= YY; i++) {
          countYear.push(i);
        }
        countYear.reverse();
        return countYear;
      };
    },
  },
};
</script>

<style lang="scss">
#aboutUS {
  .web {
    padding-top: 140px;
    margin-left: 120px;

    .Txt {
      &-title {
        margin: 0;
        font-size: 48px;
        line-height: 56px;
        color: #596164;
      }
      &-children {
        margin: 5px 0px 0px 180px;
        font-size: 24px;
        line-height: 28px;
        color: #c4c4c4;
      }
    }

    .newsCard {
      background-color: white;
      &-sortText {
        position: absolute;
        right: 0;
        z-index: 100;
        margin-top: 45px;
        a {
          font-weight: 400;
          font-size: 24px;
          line-height: 210%;
          letter-spacing: 0.25em;
          color: #52505a;
          cursor: pointer;
          &:hover {
            color: #563f05;
            font-weight: bold;
          }
        }
      }
      .active {
        color: #563f05;
        font-weight: bold;
      }
    }
  }
}
</style>