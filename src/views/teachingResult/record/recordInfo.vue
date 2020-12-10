<template>
  <div id="recordInfo">
    <div class="w-100 bg-white pb-80">
      <div class="p-60 text-left">
        <p class="Txt-title" @click="goBackRecord()">展覽紀錄</p>
      </div>
      <div class="w-100 recordCard">
        <div class="px-150 py-30">
          <el-row>
            <el-col
              :span="8"
              v-for="(item, index) in recordList"
              :key="'RCL__' + index"
            >
              <div
                class="recordCard__info w-100 d-flex align-items-center justify-content-start flex-column"
              >
                <img :src="item.imgURL" alt="" />
                <span class="mt-40 mb-10"></span>
                <p class="m-0 text-center">{{ item.title }}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recordList: [
        {
          imgURL: require("@/assets/images/book/record/record1-1.png"),
          title: "2019臺清師生聯展文宣",
        },
        {
          imgURL: require("@/assets/images/book/record/record1-2.png"),
          title: "2019臺清海報",
        },
        {
          imgURL: require("@/assets/images/book/record/record1-3.png"),
          title: "清華大學藝術學院副院長兼藝術與設計學系系主任蕭銘芚",
        },
        {
          imgURL: require("@/assets/images/book/record/record1-4.png"),
          title: "臺藝大設計學院許杏蓉院長致詞",
        },
        {
          imgURL: require("@/assets/images/book/record/record1-5.png"),
          title: "臺藝大設計學院許杏蓉院長致詞",
        },
        {
          imgURL: require("@/assets/images/book/record/record1-6.png"),
          title: "設計學院許院長頒發參展證明給清華大學蕭銘芚教授",
        },
      ],
    };
  },
  methods: {
    goBackRecord() {
      this.$router.push({ name: "record" });
    },
  },
};
</script>

<style lang="scss">
#recordInfo {
  padding-top: 420px;
  margin-left: 120px;
  .Txt-title {
    width: 130px;
    font-size: 64px;
    line-height: 75px;
    color: #ceb87f;
  }
  .recordCard {
    background: #2d2d2d;
    &__info {
      min-height: 500px;
      max-height: 500px;
      span {
        width: 120px;
        border: 1px solid #ceb87f;
      }
      p {
        max-width: 260px;
        font-weight: bold;
        font-size: 18px;
        line-height: 160%;
        letter-spacing: 0.005em;
        color: #ffffff;
      }
    }
  }
}
</style>