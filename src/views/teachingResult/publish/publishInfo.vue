<template>
  <div id="publishInfo">
    <div class="web d-none d-mb-block">
      <div
        class="w-100 pb-10 goPrev d-flex align-items-center flex-row cur-pointer"
        @click="goPrev()"
      >
        <img src="@/assets/images/icon/arrowLeft.png" alt="回上一頁" />
        <strong class="font-s-24 pl-10">回上一頁</strong>
      </div>

      <div class="publishInfoBG pb-150">
        <div class="authorCard">
          <div class="p-100 d-flex align-items-start flex-row">
            <div
              class="d-flex align-items-center justify-content-center flex-column"
            >
              <img
                :src="teacherList.pic"
                :alt="teacherList.name"
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
            <div
              class="profile d-flex flex-column justify-content-between ml-40"
            >
              <div class="d-flex flex-row">
                <div
                  class="profile__title profile__title-left text-right pl-20"
                >
                  姓名
                </div>
                <img
                  class="pt-12 px-10"
                  src="@/assets/images/icon/dashLine.png"
                  alt=""
                  height="1px"
                  width="60px"
                />
                <div class="profile__context profile__context-left">
                  {{ teacherList.name }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div
                  class="profile__title profile__title-left text-right pl-20"
                >
                  Office_Hour
                </div>
                <img
                  class="pt-12 px-10"
                  src="@/assets/images/icon/dashLine.png"
                  alt=""
                  height="1px"
                  width="60px"
                />
                <div class="profile__context profile__context-left">
                  {{ teacherList.officeHour }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div
                  class="profile__title profile__title-left text-right pl-20"
                >
                  聯絡電話
                </div>
                <img
                  class="pt-12 px-10"
                  src="@/assets/images/icon/dashLine.png"
                  alt=""
                  height="1px"
                  width="60px"
                />
                <div class="profile__context profile__context-left">
                  {{ teacherList.contactTel }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div
                  class="profile__title profile__title-left text-right pl-20"
                >
                  傳真
                </div>
                <img
                  class="pt-12 px-10"
                  src="@/assets/images/icon/dashLine.png"
                  alt=""
                  height="1px"
                  width="60px"
                />
                <div class="profile__context profile__context-left">
                  {{ teacherList.fax }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div
                  class="profile__title profile__title-left text-right pl-20"
                >
                  聯絡地址
                </div>
                <img
                  class="pt-12 px-10"
                  src="@/assets/images/icon/dashLine.png"
                  alt=""
                  height="1px"
                  width="60px"
                />
                <div class="profile__context profile__context-left">
                  {{ teacherList.addr }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div
                  class="profile__title profile__title-left text-right pl-20"
                >
                  服務單位_部門
                </div>
                <img
                  class="pt-12 px-10"
                  src="@/assets/images/icon/dashLine.png"
                  alt=""
                  height="1px"
                  width="60px"
                />
                <div class="profile__context profile__context-left">
                  工藝設計學系
                </div>
              </div>
            </div>

            <div
              class="profile d-flex flex-column justify-content-between ml-40"
            >
              <div class="d-flex flex-row">
                <div
                  class="profile__title profile__title-left text-right pl-20"
                >
                  類別
                </div>
                <img
                  class="pt-12 px-10"
                  src="@/assets/images/icon/dashLine.png"
                  alt=""
                  height="1px"
                  width="60px"
                />
                <div class="profile__context profile__context-left">
                  {{ teacherList.memberTypeName }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div
                  class="profile__title profile__title-left text-right pl-20"
                >
                  職稱
                </div>
                <img
                  class="pt-12 px-10"
                  src="@/assets/images/icon/dashLine.png"
                  alt=""
                  height="1px"
                  width="60px"
                />
                <div class="profile__context profile__context-left">
                  {{ teacherList.jobTitle }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div
                  class="profile__title profile__title-left text-right pl-20"
                >
                  授課領域
                </div>
                <img
                  class="pt-12 px-10"
                  src="@/assets/images/icon/dashLine.png"
                  alt=""
                  height="1px"
                  width="60px"
                />
                <div class="profile__context profile__context-left">
                  {{ teacherList.teachClass }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div
                  class="profile__title profile__title-left text-right pl-20"
                >
                  研究專長
                </div>
                <img
                  class="pt-12 px-10"
                  src="@/assets/images/icon/dashLine.png"
                  alt=""
                  height="1px"
                  width="60px"
                />
                <div class="profile__context profile__context-left">
                  {{ teacherList.research }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-left pl-60" v-if="$route.params.author == '梁家豪'">
          <p class="Txt-title">研究發表</p>
        </div>

        <div class="publishCard" v-if="$route.params.author == '梁家豪'">
          <div
            class="p-60 publishCard__menu"
            v-for="item in menuList"
            :key="item.value"
          >
            <div
              class="w-100 d-flex align-items-center justify-content-between"
            >
              <p class="m-0">{{ item.title }}</p>
              <div @click="openPublishInfo(item.value)">
                <img
                  class="cur-pointer"
                  src="@/assets/images/icon/arrowDown_icon.png"
                  alt=""
                  width="32px"
                />
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
                        'infoList__leftBlock-active':
                          items.code == chooseThesis,
                      }"
                      @click="openTheses(items.code)"
                    >
                      {{ items.title }}
                    </p>
                  </div>
                </div>
                <div
                  class="infoList__rightBlock"
                  v-if="chooseThesis && !!item.thesisList"
                >
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
        <div class="w-100">
          <div class="pt-50 d-flex align-items-center justify-content-center">
            <div
              class="pb-10 goPrev d-flex d-inline-flex align-items-center flex-row cur-pointer"
              @click="goPrev()"
            >
              <img src="@/assets/images/icon/arrowLeft.png" alt="回上一頁" />
              <strong class="font-s-24 pl-10">回上一頁</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="phone d-block d-mb-none pt-70 pb-50">
      <div class="publishInfoTitle w-100 d-flex align-items-center flex-row">
        <a class="pl-20" @click="goPrev()">
          <img src="@/assets/images/icon/arrowLeft.png" alt="" />
        </a>
        <PhoneTitle title="研究發表" :filterDate="false" />
      </div>

      <div
        class="ml-20 authorCard px-40 py-30 d-flex align-items-center justify-content-center flex-column"
      >
        <div
          class="authorCard__author w-100 d-flex align-items-center justify-content-center flex-column"
        >
          <img
            src="@/assets/images/teacher/fullTime/teacher4.jpg"
            alt=""
            width="200px"
          />
          <div class="w-100 py-20">
            <div class="px-40 d-flex align-items-start justify-content-around">
              <div class="d-flex flex-column align-items-center">
                <img
                  src="@/assets/images/icon/mail-icon.png"
                  alt=""
                  width="20px"
                />
                <p class="m-0">MAIL</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <img
                  src="@/assets/images/icon/連結-icon.png"
                  alt=""
                  width="20px"
                />
                <p class="m-0">個人網站</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <img
                  src="@/assets/images/icon/連結-icon.png"
                  alt=""
                  width="20px"
                />
                <p class="m-0">個人著作</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <img
                  src="@/assets/images/icon/連結-icon.png"
                  alt=""
                  width="20px"
                />
                <p class="m-0">個人研究</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="authorCard__information w-100 pt-20 pb-40"
          v-for="(item, index1) in teacherList"
          :key="index1"
        >
          <el-row class="py-5" v-for="(items, index2) in item" :key="index2">
            <el-col :span="8">
              <div class="w-100 text-right authorCard__information-title">
                <strong>{{ items.title }}</strong>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="px-10">
                <el-divider class="my-8"></el-divider>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="w-100 text-left authorCard__information-context">
                <p class="m-0">{{ items.context }}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="ml-20 mt-50">
        <div
          class="publishInfoCard py-10 px-10"
          v-for="item in menuList"
          :key="item.value"
        >
          <div
            class="publishInfoCard__title w-100 d-flex align-items-center justify-content-between"
          >
            <p class="m-0">{{ item.title }}</p>
            <div @click="openPublishInfo(item.value)">
              <img
                class="cur-pointer"
                src="@/assets/images/icon/arrowDown_icon.png"
                alt=""
                width="32px"
              />
            </div>
          </div>

          <div class="mt-20 w-100" v-if="publishInfoOpen">
            <div
              class="publishInfoCard__list w-100 pb-15 text-left"
              v-for="(items, index) in item.thesisList"
              :key="'TL__' + index"
            >
              <p
                class="m-0 cur-pointer d-inline-flex"
                :class="{
                  'publishInfoCard__list-active': items.code == chooseThesis,
                }"
                @click="openTheses(items.code)"
              >
                {{ items.title }}
              </p>
            </div>
          </div>

          <div class="bg-white" v-if="chooseThesis && !!item.thesisList">
            <div class="p-10">
              <el-row
                class="py-20 publishInfoCard__info"
                v-for="(item, index) in infoList[chooseThesis]"
                :key="'IL__' + index"
              >
                <div v-if="!item.downloadIMG && !item.pathIMG">
                  <el-col :span="24">
                    <div class="w-100">
                      <p class="m-0">{{ item.context }}</p>
                    </div>
                  </el-col>
                </div>

                <div v-else>
                  <el-col class="text-center" :span="3">
                    <img :src="item.downloadIMG" alt="" width="26px" />
                  </el-col>
                  <el-col class="text-center" :span="3">
                    <img :src="item.pathIMG" alt="" width="26px" />
                  </el-col>
                  <el-col :span="18">
                    <div class="w-100">
                      <p class="m-0">{{ item.context }}</p>
                    </div>
                  </el-col>
                </div>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import PhoneTitle from "@/components/PhoneTitle.vue";

export default {
  components: {
    PhoneTitle,
  },
  data() {
    return {
      memberListQuery: {
        MemberTypeId: "",
        page: 1,
        limit: 20,
        key: undefined,
      },
      publishListQuery: {
        TeachTypeId: "SYS_TEACH_RESEARCHPUBLIC",
        Years: "",
        page: 1,
        limit: 20,
        key: undefined,
      },
      teacherList: [],
      publishData: [],
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
      this.$router.go(-1);
    },
    openPublishInfo() {
      this.publishInfoOpen = !this.publishInfoOpen;
      if (!this.publishInfoOpen) {
        this.chooseThesis = false;
      }
    },
    openTheses(code) {
      this.chooseThesis = code;
    },
    getMemberList() {
      this.$api.members(this.memberListQuery).then((res) => {
        this.teacherList = res.data.data.filter((data) => {
          return data.name === this.$route.params.author;
        })[0];
      });
    },
    getPublishList() {
      this.$api.award(this.publishListQuery).then((res) => {
        this.publishData = res.data.data.filter((data) => {
          return data.author === this.$route.params.author;
        })[0];
      });
    },
  },
  mounted() {
    this.getMemberList();
    this.getPublishList();
  },
};
</script>

<style lang="scss">
#publishInfo {
  .web {
    padding-top: 420px;
    margin-left: 120px;
    .goPrev {
      color: #ceb87f;
      transition: all 0.6s;
      &:hover {
        letter-spacing: 0.5rem;
      }
    }
    .publishInfoBG {
      background: #fff;
      .authorCard {
        background: #2d2d2d;
        .contactInfo {
          width: 30px;
          p {
            font-size: 12px;
            line-height: 14px;
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
              min-width: 360px;
              max-width: 360px;
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

  .phone {
    background: #ffffff;
    .publishInfoTitle {
      a {
        animation-name: prevShowSlow;
        animation-duration: 2s;
        animation-fill-mode: forwards;
      }
      p {
        animation-name: titleMoveRight;
        animation-duration: 1.2s;
        animation-fill-mode: forwards;
      }
    }
    .authorCard {
      background: #2d2d2d;
      &__author {
        border-bottom: 2px solid #ceb87f;
        p {
          width: 30px;
          font-size: 12px;
          line-height: 14px;
          color: #8c8f90;
        }
      }
      &__information {
        border-bottom: 2px solid #ceb87f;
        line-height: 16px;
        &-title {
          font-size: 14px;
          color: #ceb87f;
        }
        &-line {
          border-top: 1px solid #8c8f90;
        }
        &-context {
          font-size: 12px;
          color: #ffffff;
        }
        &:last-child {
          border-bottom: none;
        }
      }
      &__list {
        background: #2d2d2d;
        border-bottom: 1px solid #edece8;
        &:last-child {
          border-bottom: none;
        }
      }
    }
    .publishInfoCard {
      background: #2d2d2d;
      border-bottom: 1px solid #edece8;
      &:last-child {
        border-bottom: none;
      }
      &__title {
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.2em;
        color: #ffffff;
      }
      &__list {
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.2em;
        color: #ffffff;
        &-active {
          color: #ceb87f !important;
        }
      }
      &__info {
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.2em;
        color: #2d2d2d;
      }
    }
  }
}
</style>