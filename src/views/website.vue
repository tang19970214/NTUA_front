<template>
  <div class="website">
    <div class="web d-none d-mb-block">
      <p class="m-0 Txt-title">Seminar/Work Camp website</p>
      <div class="mt-70 newsCard">
        <div class="newsCard__sortText">
          <!-- <router-link
            class="mr-35 mb-15 d-flex align-items-center justify-content-end flex-row text-decoration-none"
            :class="{ active: $route.name == item.pathURL }"
            :to="{ name: item.pathURL }"
            v-for="(item, index) in websiteSort"
            :key="'NS__' + index"
          > -->
            <div
              class="mr-35 mb-15"
              v-for="(item, index) in websiteSort"
              :key="'NS__' + index"
            >
              <a
                class="d-flex align-items-center justify-content-end flex-row text-decoration-none"
                :href="item.path"
                target="_blank"
                v-if="item.path"
              >
                <p class="m-0">{{ item.pathName }}</p>
                <i class="el-icon-minus"></i>
                <p class="m-0">0{{ index + 1 }}</p>
              </a>
              <router-link
                class="d-flex align-items-center justify-content-end flex-row text-decoration-none"
                :class="{ active: $route.name == item.pathURL }"
                :to="{ name: item.pathURL }"
                v-else
              >
                <p class="m-0">{{ item.pathName }}</p>
                <i class="el-icon-minus"></i>
                <p class="m-0">0{{ index + 1 }}</p>
              </router-link>
            </div>
          <!-- </router-link> -->
        </div>

        <LoadShowIMG />

        <div class="w-100 newsCard__title">
          <div class="p-60">
            <div class="w-100 d-flex flex-row">
              <div class="w-100">
                <p class="m-0">{{ getPathName(websiteSort) }}</p>
              </div>
              <!-- <div class="w-100">
                <div
                  class="w-100 d-flex justify-content-end newsCard-title_chooseYear"
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
      <PhoneTitle :title="getPathName(websiteSort)" :filterDate="true" />
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
      websiteSort: [
        {
          pathURL: "workCamp",
          pathName: "工作營",
        },
        {
          path: "https://crafts.ntua.edu.tw/CDC2009/main.php",
          pathURL: "seminar",
          pathName: "研討會",
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
.website {
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
      margin-bottom: 90px;
      &__sortText {
        position: absolute;
        right: 0;
        z-index: 10;
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
      &__title {
        p {
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
      &-contentCard {
        background: #2d2d2d;
        padding: 130px 220px 50px 60px;
        &_title {
          width: 100%;
          padding: 40px 30px;
          background: #c4c4c4;
        }
      }
    }
  }
}
</style>