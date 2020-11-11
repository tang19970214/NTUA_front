<template>
  <div id="history">
    <el-row class="transY--4">
      <el-col :span="8">
        <div class="">
          <img src="@/assets/images/history.png" alt="" width="100%" />
        </div>
      </el-col>
      <el-col :span="16">
        <div class="historyCard d-flex flex-column">
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
        @click="openPopconfirm(item)"
      >
        {{ item.name }}
      </div>
    </div>

    <!-- popconfirm (0/13/30) -->
    <div class="w-100" v-if="getEducationInfo.content">
      <div class="popconfirm" :style="'margin-left:' + eduLeftDistance + 'rem'">
        <div class="d-flex align-items-center justify-content-end pt-20 px-20">
          <i
            class="el-icon-close cur-pointer popconfirm-close"
            @click="closePopconfirm()"
          ></i>
        </div>
        <div
          class="popconfirm-content py-30 px-60"
          v-for="(item, index) in getEducationInfo.content"
          :key="'CT_' + index"
        >
          <p class="m-0 popconfirm-content_title">
            {{ item.context.length > 1 ? item.datetime : "" }}
          </p>
          <div
            class="w-100"
            v-for="(items, $index) in item.context"
            :key="'CTX_' + $index"
          >
            <p class="m-0 popconfirm-content_title">
              {{ item.context.length > 1 ? "" : item.datetime }}
            </p>
            <p
              class="m-0 popconfirm-content_main ml-90"
              :style="{ color: items.color }"
            >
              {{ items.text }}
            </p>
          </div>
        </div>
        <div class="popconfirm-footer px-15">{{ getEducationInfo.footer }}</div>
      </div>
    </div>

    <div class="w-100 education-system pb-150">
      <p class="m-0 mt-80">學制概況</p>
      <div class="w-100 d-flex align-items-center justify-content-center mt-50">
        <img src="@/assets/images/educationSystem.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      education: [
        {
          name: "專科時期",
          leftDistance: 0,
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
          },
        },
        {
          name: "學院時期",
          leftDistance: 13,
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
          },
        },
        {
          name: "大學時期",
          leftDistance: 30,
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
          },
        },
      ],
      getEducationInfo: [],
      eduLeftDistance: "",
    };
  },
  methods: {
    openPopconfirm(data) {
      this.getEducationInfo = data.options;
      this.eduLeftDistance = data.leftDistance;
    },
    closePopconfirm() {
      this.getEducationInfo = [];
    },
  },
};
</script>

<style lang="scss">
#history {
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

  .popconfirm {
    position: absolute;
    margin-top: -47rem;
    width: 450px;
    height: 640px;
    background: #edece8;
    border-radius: 40px;

    &-close {
      font-size: 30px;
      font-weight: bold;
    }

    &-content {
      &_title {
        font-size: 18px;
        line-height: 123%;
        letter-spacing: 0.25em;
        color: #596164;
      }
      &_main {
        font-size: 20px;
        font-weight: bold;
        line-height: 123%;
        letter-spacing: 0.25em;
        color: #596164;
      }
    }
    &-footer {
      font-size: 24px;
      font-weight: bold;
      line-height: 150%;
      letter-spacing: 0.25em;
      color: #a92323;
    }
  }
}
</style>