<template>
  <div id="publishInfo">
    <div class="publishInfoBG pb-150">
      <div class="authorCard">
        <div class="p-100 d-flex align-items-start flex-row">
          <div
            class="d-flex align-items-center justify-content-center flex-column"
          >
            <img
              src="@/assets/images/teacher/fullTime/teacher4.jpg"
              alt="梁家豪"
              height="300px"
            />
            <div class="d-flex align-items-start flex-row mt-20">
              <div
                class="px-15 contactInfo d-flex align-items-center flex-column"
              >
                <img
                  class="mb-10"
                  src="@/assets/images/icon/mail-icon.png"
                  alt="電子郵件"
                />
                <p class="m-0">MAIL</p>
              </div>
              <div
                class="px-15 contactInfo d-flex align-items-center flex-column"
              >
                <img
                  class="mb-10"
                  src="@/assets/images/icon/連結-icon.png"
                  alt="個人網站"
                />
                <p class="m-0">個人網站</p>
              </div>
              <div
                class="px-15 contactInfo d-flex align-items-center flex-column"
              >
                <img
                  class="mb-10"
                  src="@/assets/images/icon/連結-icon.png"
                  alt="個人著作"
                />
                <p class="m-0">個人著作</p>
              </div>
              <div
                class="px-15 contactInfo d-flex align-items-center flex-column"
              >
                <img
                  class="mb-10"
                  src="@/assets/images/icon/連結-icon.png"
                  alt="個人研究"
                />
                <p class="m-0">個人研究</p>
              </div>
            </div>
          </div>
          <div class="profile d-flex flex-column justify-content-between ml-40">
            <div
              class="d-flex flex-row"
              v-for="(item, index) in teacherList.leftInfo"
              :key="'TLL__' + index"
            >
              <div class="profile__title profile__title-left text-right pl-20">
                {{ item.title }}
              </div>
              <img
                class="pt-12 px-10"
                src="@/assets/images/icon/dashLine.png"
                alt=""
                height="1px"
                width="60px"
              />
              <div class="profile__context profile__context-left">
                {{ item.context }}
              </div>
            </div>
          </div>
          <div class="profile d-flex flex-column justify-content-between ml-60">
            <div
              class="d-flex flex-row"
              v-for="(item, index) in teacherList.rightInfo"
              :key="'TLL__' + index"
            >
              <div class="profile__title profile__title-right text-right pl-20">
                {{ item.title }}
              </div>
              <img
                class="pt-12 px-10"
                src="@/assets/images/icon/dashLine.png"
                alt=""
                height="1px"
                width="60px"
              />
              <div class="profile__context profile__context-right">
                {{ item.context }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 text-left ml-60">
        <p class="Txt-title" @click="goPrev()">研究發表</p>
      </div>

      <div class="publishCard">
        <div
          class="p-60 publishCard__menu"
          v-for="item in menuList"
          :key="item.value"
        >
          <div class="w-100 d-flex align-items-center justify-content-between">
            <p class="m-0">{{ item.title }}</p>
            <div @click="openPublishInfo(item.value)">
              <img
                class="cur-pointer"
                src="@/assets/images/icon/arrowDown_icon.png"
                alt=""
                width="32px"
              />
              <!-- <img
              class="cur-pointer"
              src="@/assets/images/icon/arrowUp_icon.png"
              alt=""
              width="32px"
              v-else
            /> -->
            </div>
          </div>

          <div
            class="mt-40 publishCard__menu-content w-100 d-flex align-items-center flex-column"
            v-if="publishInfoOpen"
          >
            <div class="infoList w-100 d-flex align-items-start flex-row">
              <div class="infoList__leftBlock">
                <div
                  class="w-100 pb-15 text-left"
                  v-for="(items, index) in item.thesisList"
                  :key="'TL__' + index"
                >
                  <p
                    class="m-0 cur-pointer d-inline-flex"
                    :class="{
                      'infoList__leftBlock-active': items.code == chooseThesis,
                    }"
                    @click="openTheses(items.code)"
                  >
                    {{ items.title }}
                  </p>
                </div>
              </div>
              <div class="infoList__rightBlock" v-if="chooseThesis">
                <div class="p-20">
                  <div
                    class="py-20 infoList__rightBlock-text w-100 d-flex align-items-center flex-row"
                    v-for="(item, index) in infoList[chooseThesis]"
                    :key="'IL__' + index"
                  >
                    <span
                      class="d-flex align-items-center justify-content-center"
                    >
                      <img :src="item.downloadIMG" alt="" width="26px" />
                    </span>
                    <span
                      class="d-flex align-items-center justify-content-center"
                    >
                      <img :src="item.pathIMG" alt="" width="26px" />
                    </span>
                    <div class="w-100">
                      <p class="m-0">{{ item.context }}</p>
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
</template>

<script>
export default {
  data() {
    return {
      teacherList: {
        leftInfo: [
          {
            title: "姓名",
            context: "梁家豪",
          },
          {
            title: "Office_Hour",
            context: "二、三、四",
          },
          {
            title: "聯絡電話",
            context: "ext.2120",
          },
          {
            title: "傳真",
            context: "(02)8965-3024",
          },
          {
            title: "聯絡地址",
            context: "22058新北市板橋區大觀路一段59號工藝設計系",
          },
          {
            title: "服務單位_部門",
            context: "工藝設計學系",
          },
        ],
        rightInfo: [
          {
            title: "類別",
            context: "專任教授",
          },
          {
            title: "職稱",
            context: "副教授",
          },
          {
            title: "授課領域",
            context:
              "陶瓷工作坊、創作與設計研究(日碩)、畢業專題(陶瓷組)、工藝創作研究(職碩)",
          },
          {
            title: "研究專長",
            context: "陶藝、工藝美學",
          },
        ],
      },
      menuList: [
        {
          value: 1,
          title: "研究發表",
          thesisList: [
            {
              code: "A",
              title: "A 期刊論文",
            },
            {
              code: "B",
              title: "B 專書中之輪文",
            },
            {
              code: "C",
              title: "C 主編之專書",
            },
            {
              code: "D",
              title: "D 學位論文",
            },
            {
              code: "E",
              title: "E 研討會論文",
            },
            {
              code: "F",
              title: "F 譯著",
            },
            {
              code: "G",
              title: "G 其他",
            },
            {
              code: "H",
              title: "H 展覽經驗",
            },
          ],
        },
      ],
      infoList: {
        A: [
          {
            downloadIMG: "",
            pathIMG: "",
            context:
              "1.梁家豪（2019）。磨課師課程的建構與翻轉：以陶藝工作坊課程為例。陶瓷季刊Vol.38, No.3, 23-28。",
          },
          {
            downloadIMG: "",
            pathIMG: require("@/assets/images/icon/url_icon.png"),
            context:
              "2.梁家豪(2016)。新世代的盛宴：破.境Stunning Edge 2016亞洲當代陶藝交流展。陶博館季刊55期。",
          },
          {
            downloadIMG: "",
            pathIMG: require("@/assets/images/icon/data_icon.png"),
            context:
              "3.梁家豪. (2016). 55所大學為2016亞洲當代陶藝展揭開曲幕. 陶藝雜誌, 91, 78-81.",
          },
          {
            downloadIMG: "",
            pathIMG: require("@/assets/images/icon/data_icon.png"),
            context:
              "4.梁家豪. (2016). 可被實踐的美好生活:芬蘭陶藝. 陶藝雜誌, 90, 102-105. (Ceramics Magazine)",
          },
          {
            downloadIMG: require("@/assets/images/icon/pdf_icon.png"),
            pathIMG: require("@/assets/images/icon/data_icon.png"),
            context:
              "5.梁家豪。(2016)。2015澳洲陶藝三年展紀實，台藝美學(7)，P7。",
          },
        ],
        B: [
          {
            downloadIMG: "",
            pathIMG: "",
            context:
              "1.梁家豪（2016）。永遠燦爛。In林秀娟（Ed.），冠冕上的珍珠：國際工藝競賽台灣新銳創作展。國立台灣工藝研究發展中心。ISBN：9789860478198",
          },
          {
            downloadIMG: "",
            pathIMG: "",
            context:
              "2.梁家豪. (2014).台灣當代首飾未來派, In 台灣當代首飾未來派（Ed.）, 國立臺灣工藝研究發展中心出版.ISBN：978-986-03-9118-3",
          },
          {
            downloadIMG: "",
            pathIMG: "",
            context:
              "3.梁家豪. (2013). 當代陶藝思潮與材質美學. In 鄭月秀 (Ed.), 創意‧生活‧設計美學: 全華圖書  ISBN:978-957-21-88002",
          },
          {
            downloadIMG: "",
            pathIMG: "",
            context:
              "4.梁家豪. (2013). 臺灣工藝產業. In 張國治 (Ed.), 台灣文化創意產業大賞: 福建美術出版社   ISBN:978-7-5393-2872-0",
          },
          {
            downloadIMG: "",
            pathIMG: "",
            context:
              "5.梁家豪. (2012). 從質材美學觀察當代陶藝姿態. In 蘇佩萱 (Ed.), 禪與藝: 禪與文化創意之教學研究,  北二區教師成長社群: 原泉出版社. ISBN:978-986-7713-11-7",
          },
          {
            downloadIMG: "",
            pathIMG: "",
            context:
              "6.梁家豪.(2012).國際陶藝競賽之趨勢與觀察,In 創意與夢想的應許之地-當代國際工藝競賽 (Ed.),   國立臺灣工藝研究發展中心出版.ISBN:978-986-03-3528-6",
          },
        ],
      },
      chooseThesis: "",
      publishInfoOpen: false,
      prevPage: "",
    };
  },
  methods: {
    goPrev() {
      // if (prevPage) {
      //   this.$router.push({ name: this.prevPage });
      // } else {
      //   this.$router.push({ name: "publish" });
      // }
      this.$router.go(-1);
    },
    openPublishInfo() {
      this.publishInfoOpen = !this.publishInfoOpen;
    },
    openTheses(code) {
      this.chooseThesis = code;
    },
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log(to, from, this);
  // this.prevPage = from.name;
  //   next();
  // },
};
</script>

<style lang="scss">
#publishInfo {
  padding-top: 420px;
  margin-left: 120px;
  .publishInfoBG {
    background: #fff;
    .authorCard {
      background: #2d2d2d;
      .contactInfo {
        width: 30px;
        p {
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.005em;
          color: #8c8f90;
        }
      }
      .profile {
        border-left: 4px solid #ceb87f;
        height: 300px;
        &__title {
          width: 180px;
          font-weight: bold;
          font-size: 24px;
          line-height: 28px;
          letter-spacing: 0.1em;
          color: #ceb87f;
          &-left {
            min-width: 180px;
            max-width: 180px;
          }
          &-right {
            min-width: 110px;
            max-width: 110px;
          }
        }
        &__context {
          font-size: 18px;
          line-height: 160%;
          letter-spacing: 0.1em;
          color: #ffffff;
          &-left {
            min-width: 430px;
            max-width: 430px;
          }
          &-right {
            min-width: 350px;
            max-width: 350px;
          }
        }
      }
    }
  }
  .Txt-title {
    width: 130px;
    font-size: 64px;
    line-height: 75px;
    color: #ceb87f;
  }
  .publishCard {
    width: calc(100% - 150px);
    background: #2d2d2d;
    border: 1px solid #edece8;
    &__menu {
      border-bottom: 1px solid #edece8;
      p {
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.2em;
        color: #ffffff;
      }
      &:last-child {
        border-bottom: none;
      }
      &-content {
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.2em;
        color: #ffffff;
        .infoList {
          &__leftBlock {
            min-width: 280px;
            max-width: 280px;
            p:hover {
              color: #ceb87f;
            }
            &-active {
              color: #ceb87f;
            }
          }
          &__rightBlock {
            background: #ffffff;
            &-text {
              span {
                min-width: 50px;
                max-width: 50px;
              }
              p {
                font-size: 18px;
                line-height: 22px;
                letter-spacing: 0.2em;
                color: #2d2d2d;
              }
            }
          }
        }
      }
    }
  }
}
</style>