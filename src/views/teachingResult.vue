<template>
  <div id="teachingResult">
    <div class="web d-none d-mb-block">
      <p class="m-0 Txt-title">Latest news</p>
      <div class="mt-70 newsCard">
        <div class="newsCard-sortText">
          <router-link
            class="mr-35 mb-15 d-flex align-items-center justify-content-end flex-row text-decoration-none"
            :class="{ active: $route.name == item.pathURL }"
            :to="{ name: item.pathURL }"
            v-for="(item, index) in teachingSort"
            :key="'TS__' + index"
          >
            <p class="m-0">{{ item.pathName }}</p>
            <i class="el-icon-minus"></i>
            <p class="m-0">0{{ index + 1 }}</p>
          </router-link>
        </div>

        <LoadShowIMG />

        <div class="w-100 newsCard-title">
          <div class="p-60">
            <div class="w-100 d-flex flex-row">
              <div class="w-100">
                <p
                  class="m-0"
                  style="width: 200px"
                  v-if="getPathName(teachingSort) == '工作室成果'"
                >
                  {{ getPathName(teachingSort) }}
                </p>
                <p class="m-0" v-else>{{ getPathName(teachingSort) }}</p>
              </div>
              <!-- <div class="w-100">
                <div
                  class="w-100 d-flex justify-content-center newsCard-title_chooseYear"
                >
                  <select>
                    <option
                      :value="item"
                      v-for="item in getYearGrouop()"
                      :key="item"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>
              </div> -->
            </div>
          </div>
        </div>

        <div class="w-100">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb-none pt-70">
      <PhoneTitle :title="getPathName(teachingSort)" :filterDate="true" />
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
    PhoneTitle
  },
  data() {
    return {
      teachingSort: [
        {
          pathURL: "award",
          pathName: "競賽得獎",
        },
        {
          pathURL: "publish",
          pathName: "研究發表",
        },
        {
          pathURL: "record",
          pathName: "展覽紀錄",
        },
        {
          pathURL: "highlight",
          pathName: "活動花絮",
        },
        {
          pathURL: "internshipResult",
          pathName: "實習成果",
        },
        {
          pathURL: "studioResult",
          pathName: "工作室成果",
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
#teachingResult {
  .web {
    padding-top: 420px;
    margin-left: 120px;

    .Txt-title {
      font-size: 48px;
      line-height: 56px;
      color: #596164;
    }

    .newsCard {
      background-color: white;
      padding-bottom: 90px;
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
      &-title {
        p {
          width: 130px;
          font-size: 64px;
          line-height: 75px;
          color: #ceb87f;
        }
        &_chooseYear {
          select {
            width: 150px;
            height: 35px;
            border: 0;
            border-radius: 15px;
            background: #ceb87f;
            text-align-last: center;
            font-size: 18px;
            line-height: 21px;
            color: #52505a;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>