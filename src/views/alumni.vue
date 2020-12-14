<template>
  <div class="alumni">
    <p class="m-0 Txt-title">Alumni</p>
    <div class="mt-70 newsCard">
      <div class="newsCard-sortText">
        <router-link
          class="mr-35 mb-15 d-flex align-items-center justify-content-end flex-row text-decoration-none"
          :class="{ active: $route.name == item.pathURL }"
          :to="{ name: item.pathURL }"
          v-for="(item, index) in alumniSort"
          :key="'NS__' + index"
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
              <p class="m-0">系友</p>
              <p class="m-0">優秀表現</p>
            </div>
            <div class="w-100">
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
            </div>
          </div>
        </div>
      </div>

      <div class="newsCard-contentCard">
        <div class="newsCard-contentCard_title d-flex align-items-center">
          <p class="m-0" style="min-width: 220px; max-width: 220px">公告日期</p>
          <p class="m-0">標題</p>
          <p class="m-0 ml-auto pr-10">得獎學生</p>
        </div>
        <div class="w-100">
          <div
            class="alumniTable w-100 d-flex align-items-center flex-row"
            v-for="(item, index) in 6"
            :key="'BT__' + index"
          >
            <p class="m-0" style="min-width: 220px; max-width: 220px">
              2013-11-22
            </p>
            <p class="m-0">203年陸寶企業股份有限公司實習成果</p>
            <p class="m-0 ml-auto">陳怡君</p>
          </div>

          <div class="w-100 mt-90">
            <Pagination :needPage="true" :pageNumber="5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import LoadShowIMG from "@/components/LoadShowIMG.vue";

export default {
  components: {
    Pagination,
    LoadShowIMG
  },
  data() {
    return {
      alumniSort: [
        {
          pathURL: "alumni",
          pathName: "系友專區",
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
.alumni {
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
        color: #52505A;
        cursor: pointer;
        &:hover {
          color: #563F05;
          font-weight: bold;
        }
      }
    }
    .active {
      color: #563F05;
      font-weight: bold;
    }
    &-title {
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
          letter-spacing: 0.005em;
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
      .alumniTable {
        padding: 30px;
        border-bottom: 1px solid #000000;
        p {
          font-size: 20px;
          line-height: 25px;
          letter-spacing: 0.2em;
          color: #ffffff;
        }
      }
    }
  }
}
</style>