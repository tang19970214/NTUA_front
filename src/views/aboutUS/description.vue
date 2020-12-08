<template>
  <div id="description">
    <div class="title">
      <p class="m-0">系教育目錄與能力綱目</p>
    </div>

    <div class="catalog">
      <el-row
        class="catalog__bor"
        v-for="(item, index) in eduList"
        :key="'EL_' + index"
      >
        <el-col :span="4">
          <div class="">
            <img :src="item.imgURL" alt="" />
          </div>
        </el-col>
        <el-col :span="20">
          <div class="pl-50 catalog__content">
            <ul class="m-0">
              <li v-for="(items, index) in item.list" :key="'LS__' + index">
                {{ items.context }}
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="rules">
      <div class="w-100 d-flex justify-content-between">
        <div class="w-100 d-flex align-items-center flex-column">
          <div class="w-100 mb-45 ml-150">
            <p class="m-0 rules__title">課程規劃原則</p>
          </div>
          <div
            class="w-100 mb-60"
            v-for="(item, index) in ruleList"
            :key="'EL_' + index"
          >
            <img
              class="pos-absolute"
              :src="item.imgURL"
              alt="A"
              height="190px"
            />
            <div class="rules__Card">
              <div
                class="h-100 pl-120 pr-90 d-flex align-items-center justify-content-center"
              >
                {{ item.context }}
              </div>
            </div>
          </div>
        </div>

        <div class="w-100 d-flex align-items-center flex-column ml-100">
          <div class="w-100 mb-45">
            <p class="m-0 rules__title">Download</p>
          </div>
          <div class="w-100">
            <div class="downloadCard d-flex flex-column">
              <div
                class="px-80 py-15 downloadCard__download d-flex align-items-center"
              >
                <p class="m-0">五種學制地圖</p>
                <img src="@/assets/images/icon/pdf_icon.png" alt="" />
              </div>
              <div class="px-80 py-15 downloadCard__title">
                各年度課程科目學分表查詢
              </div>
              <div class="w-100 downloadCard__content">
                <div class="p-30">
                  <div
                    class="d-flex align-items-center justify-content-center my-30"
                    v-for="(item, index) in downloadList"
                    :key="'DL_' + index"
                  >
                    <div
                      class="downloadCard__content-blackTag d-flex align-items-center justify-content-center"
                    >
                      {{ item.tagName }}
                    </div>
                    <div
                      class="w-100 d-flex align-items-center justify-content-between downloadCard__content-list my-10"
                    >
                      <div class="w-100 text-right px-25">
                        {{ item.leftYear }}
                      </div>
                      <div class="w-100 text-left px-25">
                        {{ item.rightYear }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="triangle">
      <div
        class="w-100 d-flex align-items-center justify-content-between pb-80 mb-80"
      >
        <div
          class="w-100 d-flex align-items-center flex-column ml-25 mt-150"
          v-for="(item, index) in depIntroduce"
          :key="'DI_' + index"
        >
          <div class="w-100 text-left">
            <p class="triangle__title d-flex m-0">{{ item.titleName }}</p>
          </div>
          <div
            class="w-100 triangle__content d-flex flex-column"
            v-for="(items, index) in item.options"
            :key="'OP_' + index"
          >
            <p class="m-0">{{ items.context }}</p>
          </div>
        </div>

        <div class="w-100">
          <div
            class="w-100 d-flex align-items-center justify-content-center flex-column"
          >
            <div class="mt-20">
              <img
                src="@/assets/images/triangle/triangle-top.png"
                alt=""
                v-if="!triangleBlock.top"
              />
              <div class="pos-relative" v-else>
                <img
                  src="@/assets/images/triangle/triangle-top_hover.png"
                  alt=""
                />
                <div
                  class="pos-absolute t-0 mt-130"
                  style="margin-left: -18.4rem"
                >
                  <img
                    src="@/assets/images/triangle/triangle-topText_hover.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="mt-66">
              <img
                src="@/assets/images/triangle/triangle-middle.png"
                alt=""
                v-if="!triangleBlock.middle"
              />
              <div class="pos-relative" v-else>
                <img
                  src="@/assets/images/triangle/triangle-middle_hover.png"
                  alt=""
                />
                <div
                  class="pos-absolute t-0 mt-60"
                  style="margin-left: -19.6rem"
                >
                  <img
                    src="@/assets/images/triangle/triangle-middleText_hover.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="mt-44">
              <img
                src="@/assets/images/triangle/triangle-bottom.png"
                alt=""
                v-if="!triangleBlock.bottom"
              />
              <div class="pos-relative" v-else>
                <img
                  src="@/assets/images/triangle/triangle-bottom_hover.png"
                  alt=""
                />
                <div
                  class="pos-absolute t-0 mt-45"
                  style="margin-left: -57.3rem"
                >
                  <img
                    src="@/assets/images/triangle/triangle-bottomText_hover.png"
                    alt=""
                  />
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
      triangleBlock: {
        top: false,
        middle: false,
        bottom: false,
      },
      eduList: [
        {
          imgURL: require("@/assets/images/goal.png"),
          list: [
            {
              context:
                "彩塑現代設計教育理念，強調藝術與技術結合之教學精神，培養具備「工藝創作」知能的產品設計人才。",
            },
            {
              context:
                "延續工藝領域的實用傳統，強化創意與審美的精神內涵，培養具備「產品設計方法的工藝創作人才」。",
            },
            {
              context:
                "配合國家文化創意產業政策，重視「文化美學」涵養與「傳達溝通」技巧，培養具備「創意思考」能力，「行銷管理」思維與「協同合作」精神的工藝。",
            },
          ],
        },
        {
          imgURL: require("@/assets/images/goal.png"),
          list: [
            {
              context: "培養具備「工藝設計」理論研究與作品創作能力的專業人才。",
            },
            {
              context: "培養具備「產品設計與工藝創作」經營管理能力的專業人才。",
            },
            {
              context: "培養具備「藝術人文素養」及「科技知識」的工藝設計人才。",
            },
          ],
        },
      ],
      ruleList: [
        {
          imgURL: require("@/assets/images/icon/A.png"),
          context:
            "「三元教育目標」作為課程規劃的思考核心，亦即：產品設計、工藝創作和文化創意產業。",
        },
        {
          imgURL: require("@/assets/images/icon/A.png"),
          context:
            "以美學涵養為底蘊、以工藝媒材為基礎、以設計思維為主軸、以工作室教學為特色、以藝術行銷與管理為策略，形塑一個理論與實務並重的教學體系。",
        },
        {
          imgURL: require("@/assets/images/icon/A.png"),
          context:
            "規劃各式專業選修學程，落實分科教育，以建構學生「七項核心能力」為目標。",
        },
      ],
      downloadList: [
        {
          tagName: "日間學士",
          leftYear: "108",
          rightYear: "109",
        },
        {
          tagName: "進修學士",
          leftYear: "108",
          rightYear: "109",
        },
        {
          tagName: "二年在職",
          leftYear: "108",
          rightYear: "109",
        },
        {
          tagName: "日間碩士",
          leftYear: "108",
          rightYear: "109",
        },
        {
          tagName: "碩士在職",
          leftYear: "108",
          rightYear: "109",
        },
      ],
      depIntroduce: [
        {
          titleName: "系所發展",
          options: [
            {
              context: "「工不可沒•藝不可失」的工藝實踐基礎",
            },
            {
              context: "「工藝創作」與「量產設計」的有機融合",
            },
            {
              context: " 配合國家政策發展文化創意產業",
            },
            {
              context: " 強化國際工藝設計文化之交流",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    scrollTop(val) {
      // console.log(val);
      if (this.scrollTop > 2000) {
        this.triangleBlock.top = true;
      } else {
        this.triangleBlock.top = false;
      }
      if (this.scrollTop > 2300) {
        this.triangleBlock.middle = true;
      } else {
        this.triangleBlock.middle = false;
      }
      if (this.scrollTop > 2600) {
        this.triangleBlock.bottom = true;
      } else {
        this.triangleBlock.bottom = false;
      }

      // if (this.scrollTop = 2100) {
      //   console.log(document.getElementById("tri_top").style);
      //   document.getElementById("tri_top").style.animationPlayState = "running";
      // }
    },
  },
};
</script>

<style lang="scss">
#description {
  .title {
    padding: 30px 200px 0px 200px;
    font-size: 48px;
    line-height: 56px;
    color: #ceb87f;
  }
  .catalog {
    margin: 0px 200px;
    &__bor {
      padding: 60px 0px;
      border-bottom: 2px solid #c4c4c4;
      &:last-child {
        border-bottom: none;
      }
    }
    &__content {
      ul {
        list-style: square inside url("../../assets/images/icon/squareDot.png");
        li {
          margin-top: 25px;
          font-size: 24px;
          font-weight: bold;
          line-height: 160%;
          letter-spacing: 0.2em;
          color: #596164;
          &:first-child {
            margin-top: 0;
          }
        }
      }
    }
  }
  .rules {
    width: 100%;
    &__title {
      font-size: 24px;
      line-height: 28px;
      color: #ceb87f;
    }
    &__Card {
      height: 190px;
      margin-left: 80px;
      background: #c4c4c4;
      border-radius: 20px;
      font-size: 20px;
      line-height: 160%;
      letter-spacing: 0.15em;
      color: #596164;
    }

    .downloadCard {
      width: 560px;
      height: 690px;
      &__download {
        font-size: 24px;
        line-height: 160%;
        letter-spacing: 0.37em;
        color: #ceb87f;
        background: #2d2d2d;
        border-bottom: 1px solid #ffffff;
      }
      &__title {
        font-size: 24px;
        line-height: 160%;
        letter-spacing: 0.37em;
        background: #2d2d2d;
        color: #ceb87f;
      }
      &__content {
        position: relative;
        background: #c4c4c4;
        height: 553px;
        overflow-y: auto;
        &-blackTag {
          position: absolute;
          left: 0;
          margin-left: 1rem;
          margin-bottom: 6rem;
          width: 125px;
          height: 50px;
          background: #2d2d2d;
          font-size: 20px;
          line-height: 160%;
          letter-spacing: 0.3em;
          color: #ceb87f;
        }
        &-list {
          width: 480px;
          height: 80px;
          background: #ffffff;
        }
      }
    }
  }
  .triangle {
    &__title {
      width: 150px;
      font-size: 72px;
      line-height: 84px;
      color: #ceb87f;
    }
    &__content {
      margin-top: 10px;
      font-size: 24px;
      font-weight: bold;
      line-height: 160%;
      letter-spacing: 0.05em;
      color: #40172d;
    }
    &__block {
      img:last-child {
        // opacity: 0;
        // animation-name: scrollToShow;
        // animation-duration: 0.5s;
        // animation-fill-mode: forwards;
        // animation-play-state: paused;
      }
    }
  }
}

::-webkit-scrollbar-track-piece {
  //滾動條凹槽的顏色，還可以設定邊框屬性
  background-color: #f8f8f8;
}
::-webkit-scrollbar {
  //滾動條的寬度
  width: 9px;
  height: 9px;
}
::-webkit-scrollbar-thumb {
  //滾動條的設定
  background-color: #dddddd;
  background-clip: padding-box;
  // min-height: 28px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}

@keyframes scrollToShow {
  0% {
    display: none;
  }
  100% {
    display: block;
  }
}
</style>