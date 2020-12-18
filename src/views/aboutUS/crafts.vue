<template>
  <div id="crafts">
    <div class="web d-none d-mb-block">
      <div class="d-flex justify-content-around studioGroup">
        <div
          class="m-item d-flex align-items-center flex-column"
          v-for="(item, index) in crafts"
          :key="index"
        >
          <img :src="item.imgURL" class="m-item-image w-100" />
          <div class="m-item-title d-flex justify-content-center">
            <div
              class="craftCard d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
            >
              <div class="mb-30">
                <p class="m-0">{{ item.name_ch }}</p>
                <p class="m-0">{{ item.name_en }}</p>
              </div>
              <div class="pt-10 craftCard-borTop">
                <a
                  class="text-decoration-none cur-pointer"
                  @click="showIntroduce(item)"
                >
                  VIEW MORE</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 mt-60">
        <!-- ceramics -->
        <div class="craftIntroduce" v-if="showCrafts == 'CERAMICS'">
          <div class="w-100">
            <p class="m-0 craftIntroduce-title">陶瓷工藝創作專業工坊</p>
            <p class="m-0 craftIntroduce-smallTxt">Ceramics Studio</p>
          </div>
          <div class="w-100 mt-70">
            <img src="@/assets/images/craft/ceramicsIntroduce.jpg" alt="" />
          </div>
          <div
            class="w-100 mt-70 d-flex align-items-center justify-content-start"
          >
            <div
              class="d-flex align-items-center justify-content-center flex-column pos-relative"
              style=""
            >
              <img src="@/assets/images/craft/ceramics.png" alt="" />
              <div
                class="craftIntroduce-Card d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
              >
                <div class="mb-30">
                  <p class="m-0">1樓陶瓷工藝創作專業工坊</p>
                </div>
                <div class="pt-10 craftIntroduce-borTop">
                  <router-link
                    class="text-decoration-none"
                    :to="{ name: 'equipment' }"
                  >
                    VIEW MORE
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- metalworking -->
        <div class="craftIntroduce" v-else-if="showCrafts == 'METALWORKING'">
          <div class="w-100">
            <p class="m-0 craftIntroduce-title">金屬工藝創作專業工坊</p>
            <p class="m-0 craftIntroduce-smallTxt">
              Jewelry and Metal Arts Studio
            </p>
          </div>
          <div class="w-100 mt-70">
            <img src="@/assets/images/craft/metalworkingIntroduce.jpg" alt="" />
          </div>
          <div
            class="w-100 mt-70 d-flex align-items-center justify-content-start"
          >
            <div
              class="d-flex align-items-center justify-content-center flex-column pos-relative"
              style=""
            >
              <img src="@/assets/images/craft/metalworking.png" alt="" />
              <div
                class="craftIntroduce-Card d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
              >
                <div class="mb-30">
                  <p class="m-0">工藝大樓2樓-金屬工藝創作專業工坊</p>
                </div>
                <div class="pt-10 craftIntroduce-borTop">
                  <router-link
                    class="text-decoration-none"
                    :to="{ name: 'equipment' }"
                  >
                    VIEW MORE
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- woodworking -->
        <div class="craftIntroduce" v-else-if="showCrafts == 'WOODWORKING'">
          <div class="w-100">
            <p class="m-0 craftIntroduce-title">木材工藝創作專業工坊</p>
            <p class="m-0 craftIntroduce-smallTxt">Woodworking Arts Studio</p>
          </div>
          <div class="w-100 mt-70">
            <img src="@/assets/images/craft/woodworkingIntroduce.jpg" alt="" />
          </div>
          <div
            class="w-100 mt-70 d-flex align-items-center justify-content-start"
          >
            <div
              class="d-flex align-items-center justify-content-center flex-column pos-relative"
              style=""
            >
              <img src="@/assets/images/craft/woodworking.png" alt="" />
              <div
                class="craftIntroduce-Card d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
              >
                <div class="mb-30">
                  <p class="m-0">工藝大樓1樓-木材工藝創作專業工坊教室</p>
                </div>
                <div class="pt-10 craftIntroduce-borTop">
                  <router-link
                    class="text-decoration-none"
                    :to="{ name: 'equipment' }"
                  >
                    VIEW MORE
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- product -->
        <div class="craftIntroduce" v-else-if="showCrafts == 'PRODUCT'">
          <div class="w-100">
            <p class="m-0 craftIntroduce-title">產品設計與複媒創作專業工坊</p>
            <p class="m-0 craftIntroduce-smallTxt">Product Design Studio</p>
          </div>
          <div class="w-100 mt-70">
            <img src="@/assets/images/craft/productIntroduce.jpg" alt="" />
          </div>
          <div
            class="w-100 mt-70 d-flex align-items-center justify-content-start"
          >
            <div
              class="d-flex align-items-center justify-content-center flex-column pos-relative"
              style=""
            >
              <img src="@/assets/images/craft/product.png" alt="" />
              <div
                class="craftIntroduce-Card d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
              >
                <div class="mb-30">
                  <p class="m-0">工藝大樓1樓-木材工藝創作專業工坊教室</p>
                </div>
                <div class="pt-10 craftIntroduce-borTop">
                  <router-link
                    class="text-decoration-none"
                    :to="{ name: 'equipment' }"
                  >
                    VIEW MORE
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="phone crafts d-block d-mb-none">
      <div class="pl-50 pt-70 pb-20">
        <div class="w-100">
          <div
            class="crafts__Card pl-30 d-flex align-items-center justify-content-start"
          >
            <div
              class="mx-15 d-flex flex-column align-items-center justify-content-center"
              v-for="(item, index1) in crafts"
              :key="index1"
            >
              <img :src="item.imgURL" alt="" width="110px" />
              <div
                class="crafts__Card-info d-flex align-items-center justify-content-center flex-column"
              >
                <div class="py-10">
                  <p class="m-0">{{ item.name_ch }}</p>
                </div>
                <a
                  class="text-decoration-none mt-10"
                  @click="showIntroduce(item)"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100">
        <div class="py-20 crafts__resetBG">
          <PhoneTitle
            :title="getCraftTitle($route.params.sort).title_ch"
            :filterDate="false"
          />
          <p class="m-0 crafts__EngTitle">{{ craftsTitle.title_en }}</p>
        </div>

        <div class="bg-white">
          <!-- CERAMICS -->
          <div class="pl-50 pt-20 pb-55" v-if="showCrafts == 'CERAMICS'">
            <div class="crafts__host pl-50 mb-10">
              <div class="w-100 d-flex align-items-start flex-row">
                <strong class="pl-20">主持人</strong>
                <span class="mx-10 pt-10"></span>
                <div class="d-flex align-items-center flex-column">
                  <p class="m-0">呂琪昌老師</p>
                  <p class="m-0">梁家豪老師</p>
                </div>
              </div>
            </div>

            <div class="w-100 overflow-x crafts__studio">
              <div class="w-100 d-flex flex-column">
                <div class="p-15 d-flex align-items-start flex-row">
                  <strong class="pl-20">大學部陶瓷工作室</strong>
                  <span class="mx-10 pt-10"></span>
                  <div class="d-flex align-items-center flex-column pr-20">
                    <p class="m-0">
                      成員採申請制，可容納33名。提供大二～大四有志專心
                      學陶做陶的一個專屬創作空間，每年舉辦工作室成員聯
                      展、陶藝家工作營、專題講座及參加工藝市集。
                    </p>
                  </div>
                </div>
                <div class="p-15 d-flex align-items-start flex-row">
                  <strong class="pl-20">碩士班陶瓷工作室</strong>
                  <span class="mx-10 pt-10"></span>
                  <div class="d-flex align-items-center flex-column pr-20">
                    <p class="m-0">
                      成員採申請制，可容納14名。提供陶瓷研究生專屬的獨
                      立研究與創作空間，每學期參加系上主辦的創作評圖，
                      工作室經常參與國際展覽、校際交流、移地教學及研討
                      會發表之學術性活動。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- METALWORKING -->
          <div
            class="pl-50 pt-20 pb-55"
            v-else-if="showCrafts == 'METALWORKING'"
          >
            <div class="crafts__host pl-50 mb-10">
              <div class="w-100 d-flex align-items-start flex-row">
                <strong class="pl-20">主持人</strong>
                <span class="mx-10 pt-10"></span>
                <div class="d-flex align-items-center flex-column">
                  <p class="m-0">趙丹綺老師</p>
                  <p class="m-0">王意婷老師</p>
                </div>
              </div>
            </div>

            <div class="w-100 overflow-x crafts__studio">
              <div class="w-100 d-flex flex-column">
                <div class="pt-15 pl-70 text-center">
                  <p class="m-0" style="white-space: nowrap">
                    金工工作室具備各式專業機具、設備及個人專用工作桌的創作空間。
                  </p>
                </div>
                <div class="p-15 d-flex align-items-start flex-row">
                  <strong class="pl-20">大學部金工工作室</strong>
                  <span class="mx-10 pt-10"></span>
                  <div class="d-flex align-items-center flex-column pr-20">
                    <p class="m-0">
                      成員採申請審查制，具有金工創作熱誠的大二～大四
                      學生皆可申請，可容納24名成員。每年舉辦工作室成
                      員聯展及不定期的工作營、專題講座及工藝市集。
                    </p>
                  </div>
                </div>
                <div class="p-15 d-flex align-items-start flex-row">
                  <strong class="pl-20">碩士班金工工作室</strong>
                  <span class="mx-10 pt-10"></span>
                  <div class="d-flex align-items-center flex-column pr-20">
                    <p class="m-0">
                      員採申請制，可容納13名成員。提供金工研究生專屬
                      的獨立研究與創作空間，每學期參加系上主辦的創作
                      評圖，不定期舉辦交流展、校外參訪、工作營及研討
                      會發表之學術性活動。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- WOODWORKING -->
          <div
            class="pl-50 pt-20 pb-55"
            v-else-if="showCrafts == 'WOODWORKING'"
          >
            <div class="crafts__host pl-50 mb-10">
              <div class="w-100 d-flex align-items-start flex-row">
                <strong class="pl-20">主持人</strong>
                <span class="mx-10 pt-10"></span>
                <div class="d-flex align-items-center flex-column">
                  <p class="m-0">李英嘉老師</p>
                </div>
              </div>
            </div>

            <div class="w-100 overflow-x crafts__studio">
              <div class="p-30">
                <p class="m-0 pr-30">
                  木藝工作室成員先備條件需修過木藝相關基礎課程，提出作品集申請，通過技術考核即可，硬體特色擁有相關的書籍，完備的公用工具，
                  個人專用座位，最重要的是可以盡情使用工廠設備，具有打破年級制度共同交流學習的軟體精神。在多門木藝相關課程共同學習中，除理性技術加深加廣再輔以感性思維建立，工作室成員皆能產出令人讚嘆的
                  作品，校內藝術市集提供學生作品於市場實驗的經驗，對外競賽都能
                  獲得相當高的獎項，訓練學生能想能做更能賣的能力。
                </p>
              </div>
            </div>
          </div>
          <!-- PRODUCT -->
          <div class="pl-50 pt-20 pb-55" v-else-if="showCrafts == 'PRODUCT'">
            <div class="crafts__host pl-50 mb-10">
              <div class="w-100 d-flex align-items-start flex-row">
                <strong class="pl-20">主持人</strong>
                <span class="mx-10 pt-10"></span>
                <div class="d-flex align-items-center flex-column">
                  <p class="m-0">劉立偉老師</p>
                  <p class="m-0">張恭領老師</p>
                </div>
              </div>
            </div>

            <div class="w-100 overflow-x crafts__studio">
              <div class="p-30">
                <p class="m-0 pr-30">
                  產品設計工作室專為培養工業設計與工藝產品設計人才為宗旨，秉持自主、
                  自律、合群之原則，亦是本工作室的基本學習態度。
                  編制成員由兩學制之
                  碩士、大四、大三、大二採取合班共享學習制度，並同時進行由上至下的
                  垂直管理與專業技能的傳承責任。
                  除了專業能力以菁英式的培訓之外，團
                  隊合作的群合精神之養成與產學實務經驗的累積，皆是本工作室重要的學
                  用理念與執行目標。
                  「智圓行方，開悟成物，匠中有心」乃室訓之中心思 想與奉行圭臬。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-100 crafts__studioClass d-flex align-items-center justify-content-center"
        >
          <!-- CERAMICS -->
          <div
            class="crafts__studioClass-classroom d-flex align-items-center justify-content-center flex-column"
            v-if="showCrafts == 'CERAMICS'"
          >
            <img
              src="@/assets/images/craft/ceramics.png"
              alt=""
              width="200px"
            />
            <div
              class="px-30 pt-40 pb-10 d-flex align-items-center justify-content-center flex-column"
            >
              <strong>1樓陶瓷工藝創作專業工坊</strong>
              <router-link
                class="mt-10 px-20 pt-8 text-decoration-none"
                :to="{ name: 'equipment' }"
              >
                VIEW MORE
              </router-link>
            </div>
          </div>
          <!-- METALWORKING -->
          <div
            class="crafts__studioClass-classroom d-flex align-items-center justify-content-center flex-column"
            v-if="showCrafts == 'METALWORKING'"
          >
            <img
              src="@/assets/images/craft/metalworking.png"
              alt=""
              width="200px"
            />
            <div
              class="px-30 pt-40 pb-10 d-flex align-items-center justify-content-center flex-column"
            >
              <strong>工藝大樓2樓-金屬工藝創作專業工坊</strong>
              <router-link
                class="mt-10 px-20 pt-8 text-decoration-none"
                :to="{ name: 'equipment' }"
              >
                VIEW MORE
              </router-link>
            </div>
          </div>
          <!-- WOODWORKING -->
          <div
            class="crafts__studioClass-classroom d-flex align-items-center justify-content-center flex-column"
            v-if="showCrafts == 'WOODWORKING'"
          >
            <img
              src="@/assets/images/craft/woodworking.png"
              alt=""
              width="200px"
            />
            <div
              class="px-30 pt-40 pb-10 d-flex align-items-center justify-content-center flex-column"
            >
              <strong>工藝大樓1樓-木材工藝創作專業工坊教室</strong>
              <router-link
                class="mt-10 px-20 pt-8 text-decoration-none"
                :to="{ name: 'equipment' }"
              >
                VIEW MORE
              </router-link>
            </div>
          </div>
          <!-- PRODUCT -->
          <div
            class="crafts__studioClass-classroom d-flex align-items-center justify-content-center flex-column"
            v-if="showCrafts == 'PRODUCT'"
          >
            <img src="@/assets/images/craft/product.png" alt="" width="200px" />
            <div
              class="px-30 pt-40 pb-10 d-flex align-items-center justify-content-center flex-column"
            >
              <strong>工藝大樓1樓-木材工藝創作專業工坊教室</strong>
              <router-link
                class="mt-10 px-20 pt-8 text-decoration-none"
                :to="{ name: 'equipment' }"
              >
                VIEW MORE
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      crafts: [
        {
          imgURL: require("@/assets/images/craft/craft_1.png"),
          name_ch: "陶瓷",
          name_en: "CERAMICS",
        },
        {
          imgURL: require("@/assets/images/craft/craft_2.png"),
          name_ch: "金工",
          name_en: "METALWORKING",
        },
        {
          imgURL: require("@/assets/images/craft/craft_3.png"),
          name_ch: "木工",
          name_en: "WOODWORKING",
        },
        {
          imgURL: require("@/assets/images/craft/craft_4.png"),
          name_ch: "產品",
          name_en: "PRODUCT",
        },
      ],
      showCrafts: this.$route.params.sort,
      craftsTitle: {
        title_ch: "",
        title_en: "",
      },
    };
  },
  methods: {
    showIntroduce(data) {
      this.showCrafts = data.name_en;
    },
  },
  computed: {
    getCraftTitle() {
      return (data) => {
        switch (data) {
          case "CERAMICS":
            this.craftsTitle.title_ch = "陶瓷工藝創作專業工坊";
            this.craftsTitle.title_en = "Ceramics Studio";
            break;
          case "METALWORKING":
            this.craftsTitle.title_ch = "金屬工藝創作專業工坊";
            this.craftsTitle.title_en = "Jewelry and Metal Arts Studio";
            break;
          case "WOODWORKING":
            this.craftsTitle.title_ch = "木材工藝創作專業工坊";
            this.craftsTitle.title_en = "Woodworking Arts Studio";
            break;
          case "PRODUCT":
            this.craftsTitle.title_ch = "產品設計與複媒創作專業工坊";
            this.craftsTitle.title_en = "Product Design Studio";
            break;
          default:
            break;
        }
        return this.craftsTitle;
      };
    },
  },
};
</script>

<style lang="scss">
#crafts {
  .web {
    margin-left: 0;
    padding-top: 140px;
    .studioGroup {
      width: 100%;
      background: #2d2d2d;

      .m-item-title {
        -webkit-box-ordinal-group: 2;
        order: 1;
      }

      .m-item-image {
        -webkit-box-ordinal-group: 3;
        order: 2;
      }

      > .m-item:nth-child(odd) {
        .m-item-title {
          -webkit-box-ordinal-group: 3;
          order: 2;
        }

        .m-item-image {
          -webkit-box-ordinal-group: 2;
          order: 1;
        }
      }

      .craftCard {
        width: 200px;
        height: 200px;
        border: 2px solid #596164;
        box-sizing: border-box;
        p {
          font-weight: bold;
          font-size: 18px;
          color: white;
        }
        a {
          font-size: 18px;
          line-height: 21px;
          color: #ceb87f;
        }
        &-borTop {
          border-top: 1px solid #ceb87f;
        }
      }
    }

    .craftIntroduce {
      background: #2d2d2d;
      padding: 50px 120px 240px 170px;
      color: white;
      &-title {
        font-weight: bold;
        font-size: 36px;
        line-height: 160%;
        color: #ceb87f;
        border-bottom: 1px solid #ceb87f;
      }
      &-smallTxt {
        font-size: 14px;
        line-height: 160%;
        text-align: right;
        letter-spacing: 0.02em;
        color: #ceb87f;
      }
      &-Card {
        border: 2px solid #596164;
        box-sizing: border-box;
        padding: 70px 20px 20px 20px;
        position: absolute;
        margin-top: 25rem;
        p {
          font-weight: bold;
          font-size: 18px;
          line-height: 160%;
          text-align: center;
          color: #ffffff;
        }
      }
      &-borTop {
        border-top: 1px solid #ceb87f;
        a {
          font-size: 18px;
          line-height: 21px;
          color: #ceb87f;
        }
      }
    }
  }

  .phone {
    background: white;
    .crafts {
      &__Card {
        overflow-x: auto;
        height: 190px;
        background: #2d2d2d;
        &-info {
          width: 75px;
          height: 75px;
          transform: translateY(-0.8rem);
          border: 1px solid #596164;
          box-sizing: border-box;
          div {
            border-bottom: 1px solid #ceb87f;
            p {
              font-weight: bold;
              font-size: 12px;
              line-height: 120%;
              text-align: center;
              letter-spacing: 0.015em;
              color: #ffffff;
            }
          }
          a {
            font-size: 10px;
            line-height: 12px;
            text-align: center;
            letter-spacing: 0.03em;
            color: #ceb87f;
          }
        }
      }
      &__resetBG {
        background: #efefef;
      }
      &__EngTitle {
        margin-left: 20px;
        margin-right: 35px;
        border-top: 1px solid #ceb87f;
        font-size: 12px;
        line-height: 160%;
        letter-spacing: 0.02em;
        color: #ceb87f;
      }
      &__host {
        strong {
          font-size: 14px;
          line-height: 160%;
          color: #596164;
          border-left: 4px solid #ceb87f;
        }
        span {
          width: 50px;
          border-bottom: 1px solid #8c8f90;
        }
        p {
          font-size: 14px;
          line-height: 160%;
          color: #596164;
        }
      }
      &__studio {
        background: #2d2d2d;
        strong {
          min-width: 120px;
          font-size: 14px;
          line-height: 160%;
          color: #ffffff;
          border-left: 4px solid #ceb87f;
        }
        span {
          min-width: 30px;
          max-width: 30px;
          border-bottom: 1px solid #8c8f90;
        }
        p {
          min-width: 340px;
          font-size: 14px;
          line-height: 160%;
          color: #ffffff;
        }
      }
      &__studioClass {
        background: #2d2d2d;
        &-classroom {
          transform: translateY(-2.5rem);
          div {
            border: 2px solid #596164;
            transform: translateY(-2rem);
            strong {
              font-size: 14px;
              line-height: 160%;
              color: #ffffff;
            }
            a {
              border-top: 1px solid #ceb87f;
              font-size: 14px;
              line-height: 16px;
              color: #ceb87f;
            }
          }
        }
      }
    }
  }
}
</style>