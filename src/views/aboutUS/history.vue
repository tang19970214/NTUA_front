<template>
  <div id="history">
    <div class="web d-none d-mb-block">
      <el-row class="transY--4">
        <el-col :span="8">
          <div class="">
            <img src="@/assets/images/history.png" alt="" width="100%" />
          </div>
        </el-col>
        <el-col :span="16">
          <div class="historyCard d-flex flex-column mt-50">
            <p class="m-0 historyCard-title">歷史沿革</p>
            <p class="m-0 historyCard-content">
              系前身為「國立臺灣藝術專科學校美術工藝科」，創立於民國46年，分「產品組」和「裝飾組」實施教學（民國73年正式分「工藝組」及「設計組」兩組，76年又增設「陶瓷組」），為國內最早成立之美術工藝系培育人才無數，為國內設計之發展奠定了深厚的根基。
            </p>
            <p class="m-0 historyCard-content">
              民國83年，本校改制為「國立臺灣藝術學院」，調整為「工藝學系」，分「工藝組」及「設計組」實施教學。民國89年，鑑於「工藝」與「設計」愈趨專業，乃分別成立本系（「工藝設計學系」）及「視覺傳達設計學系」。2001年8月本校改制為國立臺灣藝術學本系隸屬於設計學院。民國94年9月實施系所合一，成立「工藝設計學系碩士班」。
            </p>
          </div>
        </el-col>
      </el-row>

      <div class="w-100 d-flex align-items-center flex-row transY--8">
        <div
          class="education d-flex align-items-center justify-content-center cur-pointer"
          v-for="(item, index) in education"
          :key="'ED__' + index"
          @click="openPeriod(item)"
        >
          {{ item.name }}
        </div>
      </div>

      <div class="w-100 education-system pb-150">
        <p class="m-0 mt-80">學制概況</p>
        <div
          class="w-100 d-flex align-items-center justify-content-center mt-50"
        >
          <img src="@/assets/images/educationSystem.png" alt="" />
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb-none">
      <div class="w-100 bg-white">
        <div class="px-40 py-20 introduce">
          <p class="m-0">
            系前身為「國立臺灣藝術專科學校美術工藝科」，創立於民國46年，分「產品組」和「裝飾組」實施教學（民國73年正式分「工藝組」及「設計組」兩組，76年又增設「陶瓷組」），為國內最早成立之美術工藝系培育人才無數，為國內設計之發展奠定了深厚的根基。
          </p>
          <p class="m-0 pt-20">
            民國83年，本校改制為「國立臺灣藝術學院」，調整為「工藝學系」，分「工藝組」及「設計組」實施教學。民國89年，鑑於「工藝」與「設計」愈趨專業，乃分別成立本系（「工藝設計學系」）及「視覺傳達設計學系」。2001年8月本校改制為國立臺灣藝術學本系隸屬於設計學院。民國94年9月實施系所合一，成立「工藝設計學系碩士班」。
          </p>
        </div>

        <div
          class="px-30 py-10 d-flex align-items-center justify-content-between"
        >
          <div
            class="w-100 mx-5 educationCard text-center"
            v-for="(item, index1) in education"
            :key="'EDU__' + index1"
          >
            <div class="p-10" @click="openPeriod_phone(item)">
              <p class="m-0">{{ item.name }}</p>
            </div>
          </div>
        </div>

        <div class="mt-20">
          <PhoneTitle title="學制概況" :filterDate="false" />
          <div class="w-100 text-center pb-40">
            <div class="p-30">
              <img
                src="@/assets/images/education/education.svg"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <div class="modal" v-if="showPeriod">
      <div class="modal__content">
        <div class="w-100 d-flex align-items-center justify-content-center">
          <div class="pos-relative p-40">
            <div class="periodCard text-center">
              <div class="periodCard__title py-25">
                <strong>{{ getEducationInfo.name }}</strong>
              </div>
              <div class="periodCard__content">
                <div
                  class="p-70 d-flex align-items-center justify-content-center flex-column"
                >
                  <div
                    class="w-100 d-flex align-items-start justify-content-around flex-row"
                  >
                    <div
                      class="w-100 d-flex align-items-center justify-content-center flex-column"
                      v-for="(item, index) in getEducationInfo.options.content"
                      :key="'CT__' + index"
                    >
                      <div
                        class="periodCard__content-yearCard d-inline-flex p-10"
                      >
                        <p class="m-0">
                          {{ item.datetime }}
                        </p>
                      </div>
                      <div class="w-100 periodCard__content-introduce mt-20">
                        <p
                          class="m-0"
                          v-for="(items, $index) in item.context"
                          :key="'CTX__' + $index"
                        >
                          {{ items.text }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="w-100" v-if="getEducationInfo.options.footer">
                    <el-divider></el-divider>
                    <div class="px-80 py-20">
                      <div class="periodCard__content-footerCard p-30">
                        <strong>{{ getEducationInfo.options.footer }}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pos-absolute t-0 r-0">
              <div
                class="closeModalBtn d-flex align-items-center justify-content-center cur-pointer"
                @click="showPeriod = false"
              >
                <i class="el-icon-close"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" v-if="showPeriod_phone">
      <div class="modal__content">
        <div class="w-100 d-flex align-items-center justify-content-center">
          <div class="pos-relative w-100 d-flex justify-content-center">
            <div class="periodCardPhone text-center">
              <div class="periodCardPhone__content">
                <div
                  class="py-40 d-flex align-items-center justify-content-center flex-column"
                >
                  <div class="w-100 text-center">
                    <div class="px-50">
                      <div class="w-100 text-left mb-20">
                        <strong>{{ getEducationInfo.name }}</strong>
                      </div>
                      <img
                        :src="getEducationInfo.options.imgURL"
                        alt=""
                        width="100%"
                      />

                      <div
                        class="text-left periodCardPhone__footer mt-20"
                        v-if="getEducationInfo.options.footer"
                      >
                        <strong>{{ getEducationInfo.options.footer }}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pos-absolute t-0 r-0">
              <div
                class="periodCardPhone__close d-flex align-items-center justify-content-center cur-pointer mt-20 mr-20"
                @click="showPeriod_phone = false"
              >
                <img src="@/assets/images/icon/cancel.png" alt="" />
              </div>
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
      education: [
        {
          name: "專科時期",
          options: {
            content: [
              {
                datetime: "民國46年",
                context: [
                  {
                    color: "#596164",
                    text: "創立－五專",
                  },
                ],
              },
              {
                datetime: "民國50年",
                context: [
                  {
                    color: "#596164",
                    text: "改三專",
                  },
                ],
              },
              {
                datetime: "民國52年",
                context: [
                  {
                    color: "#596164",
                    text: "增設夜間部",
                  },
                ],
              },
              {
                datetime: "民國76年",
                context: [
                  {
                    color: "#596164",
                    text: "增設陶瓷組",
                  },
                  {
                    color: "#596164",
                    text: "（另有工藝、設計兩組）",
                  },
                ],
              },
            ],
            footer: "國內最早的大專美工、設計科系",
            imgURL: require("@/assets/images/education/education1.svg"),
          },
        },
        {
          name: "學院時期",
          options: {
            content: [
              {
                datetime: "民國83年",
                context: [
                  {
                    color: "#596164",
                    text: "改制學院",
                  },
                ],
              },
              {
                datetime: "民國89年",
                context: [
                  {
                    color: "#596164",
                    text: "設計組另獨為視覺傳達設計學系",
                  },
                ],
              },
            ],
            footer: "",
            imgURL: require("@/assets/images/education/education2.svg"),
          },
        },
        {
          name: "大學時期",
          options: {
            content: [
              {
                datetime: "民國90年8月",
                context: [
                  {
                    color: "#596164",
                    text: "改制大學",
                  },
                ],
              },
              {
                datetime: "民國94年",
                context: [
                  {
                    color: "#A92323",
                    text: "增設二年製在職專班",
                  },
                  {
                    color: "#596164",
                    text: "增設碩士班",
                  },
                ],
              },
              {
                datetime: "民國96年",
                context: [
                  {
                    color: "#A92323",
                    text: "增設碩士在職專班",
                  },
                ],
              },
            ],
            footer:
              "2020年文化創意產業的推動類似係、所在台灣如雨後春筍般大幅成長",
            imgURL: require("@/assets/images/education/education3.svg"),
          },
        },
      ],
      showPeriod: false,
      showPeriod_phone: false,
      getEducationInfo: [],
    };
  },
  methods: {
    openPeriod(data) {
      this.showPeriod = true;
      this.getEducationInfo = data;
    },
    openPeriod_phone(data) {
      console.log(data);
      this.showPeriod_phone = true;
      this.getEducationInfo = data;
    },
  },
};
</script>

<style lang="scss">
#history {
  .web {
    margin-left: 0;
    padding-top: 0;
    .historyCard {
      height: 100%;
      padding: 0px 240px;

      &-title {
        font-size: 48px;
        line-height: 56px;
        color: #ceb87f;
      }
      &-content {
        margin-top: 50px;
        font-size: 24px;
        font-weight: bold;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: #596164;
      }
    }
    .education {
      width: 280px;
      height: 100px;
      background: #8c8f90;
      font-size: 24px;
      line-height: 210%;
      letter-spacing: 0.25em;
      color: #ffffff;
      transition: all 0.5s;
      &:hover {
        background: rgba(140, 143, 144, 0.8);
      }

      &-system {
        p {
          font-size: 48px;
          line-height: 56px;
          color: #ceb87f;
        }
      }
    }
  }

  .phone {
    .introduce {
      font-size: 14px;
      line-height: 160%;
      letter-spacing: 0.25em;
      color: #596164;
    }
    .educationCard {
      background: #8c8f90;
      border-radius: 8px;
      p {
        font-size: 14px;
        line-height: 210%;
        letter-spacing: 0.25em;
        color: #ffffff;
      }
    }
  }

  .periodCard {
    width: 1000px;
    background: #fff;
    border-radius: 8px;
    &__title {
      background: #596164;
      border-radius: 8px 8px 0px 0px;
      strong {
        font-weight: bold;
        font-size: 36px;
        line-height: 123%;
        letter-spacing: 0.25em;
        color: #ffffff;
      }
    }
    &__content {
      &-yearCard {
        background: #52505a;
        border-radius: 5px;
        p {
          font-size: 28px;
          line-height: 123%;
          letter-spacing: 0.25em;
          color: #ffffff;
        }
      }
      &-introduce {
        font-size: 20px;
        line-height: 123%;
        letter-spacing: 0.25em;
        color: #596164;
      }
      &-footerCard {
        background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        strong {
          font-size: 24px;
          line-height: 210%;
          letter-spacing: 0.25em;
          color: #a92323;
        }
      }
    }
  }

  .periodCardPhone {
    width: 100%;
    background: #52505a;
    border-radius: 40px;
    &__content {
      strong {
        color: #ceb87f;
        font-size: 18px;
      }
      &-yearCard {
        background: #52505a;
        border-radius: 5px;
        p {
          font-size: 28px;
          line-height: 123%;
          letter-spacing: 0.25em;
          color: #ffffff;
        }
      }
    }
    &__footer {
      strong {
        font-size: 14px;
        line-height: 210%;
        letter-spacing: 0.25em;
        color: #ceb87f;
      }
    }
  }
}
</style>