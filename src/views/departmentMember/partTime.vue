<template>
  <div id="partTime">
    <div class="web d-none d-mb-block">
      <div class="w-100">
        <el-row>
          <el-col
            class="mb-150 d-flex justify-content-start"
            :span="8"
            v-for="(item, index) in teacherList"
            :key="'TL_' + index"
          >
            <div class="creation">
              <div class="front">
                <img :src="item.imageURL" alt="" width="350px" height="452px" />
              </div>
              <div class="back">
                <div
                  class="teacherList-introduce p-20 d-flex justify-content-center flex-column"
                >
                  <div
                    class="w-100"
                    v-for="(items, index) in item.info"
                    :key="index"
                  >
                    <div
                      class="w-100 d-flex flex-row teacherList-introduce_content"
                    >
                      <el-row class="w-100">
                        <el-col :span="7">
                          <strong>{{ items.title }}</strong>
                        </el-col>
                        <el-col :span="4">
                          <img src="@/assets/images/icon/dashLine.png" alt="" />
                        </el-col>
                        <el-col :span="13" v-if="items.title == 'MAIL'">
                          <img
                            class="cur-pointer"
                            src="@/assets/images/icon/email.png"
                            alt="email link"
                          />
                        </el-col>
                        <el-col :span="13" v-else>
                          <p class="m-0">{{ items.value }}</p>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="teacherList-rightBar">
              <div class="py-20 px-10">
                <p class="m-0">{{ item.name }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="phone d-block d-mb-none pb-20">
      <div
        class="cardBlock py-20 px-40 d-flex align-items-center flex-row"
        v-for="fetch in teacherList_phone"
        :key="fetch.id"
      >
        <div
          class="teacherCard d-flex align-items-center flex-row mr-40"
          v-for="(item, index1) in fetch"
          :key="index1"
        >
          <img
            :src="item.imageURL"
            alt=""
            width="200px"
            height="257px"
            v-if="showInfo[item.id]"
          />
          <div class="teacherCard__information" v-else>
            <div class="p-15">
              <div
                class="d-flex align-items-center justify-content-start flex-column"
                v-for="(items, index2) in item.info"
                :key="index2"
              >
                <div
                  class="w-100 d-flex flex-column"
                  v-if="items.title !== 'MAIL'"
                >
                  <strong>{{ items.title }}</strong>
                  <p class="m-0 pl-10 py-5">{{ items.value }}</p>
                </div>
                <div class="w-100 d-flex flex-column" v-else>
                  <strong>MAIL</strong>
                  <img
                    class="pl-10 py-5"
                    src="@/assets/images/icon/email.png"
                    alt=""
                    width="26px"
                  />
                </div>
                <!-- <div class="w-100 d-flex flex-column">
                <router-link
                  :to="{ name: 'publishInfo', params: { author: '劉家豪' } }"
                >
                  研究發表
                </router-link>
              </div> -->
              </div>
            </div>
          </div>
          <div class="teacherCard__name">
            <div class="p-10 d-flex flex-row justify-content-between">
              <div class="d-flex flex-column">
                <p class="m-0">{{ item.name }}</p>
                <p class="m-0">{{ item.jobTitle }}</p>
              </div>
              <div
                class="d-flex align-items-center"
                @click="showTeacherInfo(item)"
              >
                <img src="@/assets/images/icon/arrowRight.png" alt="" />
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
    let fetchData = [
      {
        id: 1,
        imageURL: require("@/assets/images/teacher/partTime/teacher1.jpg"),
        name: "王銘顯",
        info: [
          {
            title: "職稱",
            value: "教授",
          },
          {
            title: "授課",
            value: "人興思維與設計",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 2,
        imageURL: require("@/assets/images/teacher/partTime/teacher2.jpg"),
        name: "劉鎮洲",
        info: [
          {
            title: "職稱",
            value: "教授",
          },
          {
            title: "授課",
            value: "陶瓷創作與設計研究",
          },
          {
            title: "聯繫我",
            value: "ext.2121",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 3,
        imageURL: require("@/assets/images/teacher/partTime/teacher3.jpg"),
        name: "蕭銘芚",
        info: [
          {
            title: "職稱",
            value: "教授",
          },
          {
            title: "授課",
            value: "玻璃工藝",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 4,
        imageURL: require("@/assets/images/teacher/partTime/teacher4.jpg"),
        name: "江明進",
        info: [
          {
            title: "職稱",
            value: "副教授",
          },
          {
            title: "授課",
            value: "電腦輔助設計",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 5,
        imageURL: require("@/assets/images/teacher/partTime/teacher5.jpg"),
        name: "呂豪文",
        info: [
          {
            title: "職稱",
            value: "副教授",
          },
          {
            title: "授課",
            value: "素描、設計素描",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 6,
        imageURL: require("@/assets/images/teacher/partTime/teacher6.png"),
        name: "方柏欽",
        info: [
          {
            title: "職稱",
            value: "助理教授",
          },
          {
            title: "授課",
            value: "陶瓷雕塑",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 7,
        imageURL: require("@/assets/images/teacher/partTime/teacher7.png"),
        name: "張凱迪",
        info: [
          {
            title: "職稱",
            value: "助理教授",
          },
          {
            title: "授課",
            value: "西洋美術史",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 8,
        imageURL: require("@/assets/images/teacher/partTime/teacher8.jpg"),
        name: "林國信",
        info: [
          {
            title: "職稱",
            value: "助理教授",
          },
          {
            title: "授課",
            value: "金屬鍛造工藝",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 9,
        imageURL: require("@/assets/images/teacher/partTime/teacher9.png"),
        name: "陳俊良",
        info: [
          {
            title: "職稱",
            value: "副教授",
          },
          {
            title: "授課",
            value: "設計與消費行為研究",
          },
          {
            title: "聯繫我",
            value: "ext.2173",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 10,
        imageURL: require("@/assets/images/teacher/partTime/teacher10.png"),
        name: "黃照津",
        info: [
          {
            title: "職稱",
            value: "",
          },
          {
            title: "授課",
            value: "",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 11,
        imageURL: require("@/assets/images/teacher/partTime/teacher11.png"),
        name: "林錦鐘",
        info: [
          {
            title: "職稱",
            value: "助理教授",
          },
          {
            title: "授課",
            value: "陶玻材料學",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 12,
        imageURL: require("@/assets/images/teacher/partTime/teacher12.png"),
        name: "曹其涯",
        info: [
          {
            title: "職稱",
            value: "助理教授",
          },
          {
            title: "授課",
            value: "陶瓷產品設計",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 13,
        imageURL: require("@/assets/images/teacher/partTime/teacher13.jpg"),
        name: "葉明福",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "皮革工藝",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 14,
        imageURL: require("@/assets/images/teacher/partTime/teacher14.jpg"),
        name: "林妙芳",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "陶瓷工藝",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 15,
        imageURL: require("@/assets/images/teacher/partTime/teacher15.jpg"),
        name: "許益富",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "模形製作、模製陶瓷",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 16,
        imageURL: require("@/assets/images/teacher/partTime/teacher16.jpg"),
        name: "羅先福",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "兒童美術教學",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 17,
        imageURL: require("@/assets/images/teacher/partTime/teacher17.png"),
        name: "林貴生",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "木材工藝",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 18,
        imageURL: require("@/assets/images/teacher/partTime/teacher18.png"),
        name: "陳永興",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "漆器工藝",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 19,
        imageURL: require("@/assets/images/teacher/partTime/teacher19.png"),
        name: "游宗偉",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "產品攝影",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 20,
        imageURL: require("@/assets/images/teacher/partTime/teacher20.png"),
        name: "詹世良",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "圖學",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 21,
        imageURL: require("@/assets/images/teacher/partTime/teacher21.jpg"),
        name: "張守端",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "竹材工藝",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 22,
        imageURL: require("@/assets/images/teacher/partTime/teacher22.png"),
        name: "王志文",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "立體構成、立體造形",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 23,
        imageURL: require("@/assets/images/teacher/partTime/teacher23.png"),
        name: "游惠君",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "纖維工藝",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 24,
        imageURL: require("@/assets/images/teacher/partTime/teacher24.png"),
        name: "田琬郁",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 25,
        imageURL: require("@/assets/images/teacher/partTime/teacher25.png"),
        name: "吳竟銍",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "金屬工藝、工藝創作",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 26,
        imageURL: require("@/assets/images/teacher/partTime/teacher26.jpg"),
        name: "王幸玉",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "陶瓷裝飾技法",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 27,
        imageURL: require("@/assets/images/teacher/partTime/teacher27.png"),
        name: "陳逸",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "金屬工藝",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 28,
        imageURL: require("@/assets/images/teacher/partTime/teacher28.png"),
        name: "朱信泰",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "產品速繪計法",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 29,
        imageURL: require("@/assets/images/teacher/partTime/teacher29.jpg"),
        name: "樊俞均",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "玻璃工藝",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 30,
        imageURL: require("@/assets/images/teacher/partTime/teacher30.png"),
        name: "林麗娟",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "蠟雕與脫蠟鑄造",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 31,
        imageURL: require("@/assets/images/teacher/partTime/teacher31.jpg"),
        name: "吳宜紋",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "精緻木器工藝",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 32,
        imageURL: require("@/assets/images/teacher/partTime/teacher32.png"),
        name: "陳麗雪",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "纖維工藝",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 33,
        imageURL: require("@/assets/images/teacher/partTime/teacher33.png"),
        name: "陳人鳳",
        info: [
          {
            title: "職稱",
            value: "",
          },
          {
            title: "授課",
            value: "",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 34,
        imageURL: require("@/assets/images/teacher/partTime/teacher34.png"),
        name: "鄭洪",
        info: [
          {
            title: "職稱",
            value: "",
          },
          {
            title: "授課",
            value: "",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 35,
        imageURL: require("@/assets/images/teacher/partTime/teacher35.png"),
        name: "廖家翎",
        info: [
          {
            title: "職稱",
            value: "",
          },
          {
            title: "授課",
            value: "",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 36,
        imageURL: require("@/assets/images/teacher/partTime/teacher36.png"),
        name: "張賀榮",
        info: [
          {
            title: "職稱",
            value: "",
          },
          {
            title: "授課",
            value: "",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 37,
        imageURL: require("@/assets/images/teacher/partTime/teacher37.png"),
        name: "曾淑娟",
        info: [
          {
            title: "職稱",
            value: "",
          },
          {
            title: "授課",
            value: "",
          },
          {
            title: "聯繫我",
            value: "",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
    ];
    let teacherListSplit = [];
    fetchData.forEach((item, index, arr) => {
      if (index % 5 === 0) {
        return teacherListSplit.push(arr.slice(index, index + 5));
      }
    });
    return {
      teacherList: fetchData,
      teacherList_phone: teacherListSplit,
      showInfo: fetchData.reduce((a, b) => ((a[b.id] = true), a), {}),
    };
  },
  methods: {
    showTeacherInfo(data) {
      this.showInfo[data?.id] = !this.showInfo[data?.id];
    },
  },
};
</script>

<style lang="scss">
#partTime {
  .web {
    padding-top: 0;
    margin-left: 120px;
    padding-left: 80px;
    background: #ffffff;
    .creation:hover {
      transform: rotateY(180deg);
    }
    .creation {
      width: 350px;
      height: 452px;
      transition: all 0.6s;
      transform-style: preserve-3d;
    }
    .front,
    .back {
      position: absolute;
      top: 0;
      left: 0;
      backface-visibility: hidden;
    }
    .back {
      z-index: 999;
      transform: rotateY(-180deg);
    }

    .teacherList {
      height: 452px;
      margin-bottom: 200px;
      &-introduce {
        width: 310px;
        height: 410px;
        border: 1px solid #c4c4c4;

        &_content {
          strong {
            font-weight: bold;
            font-size: 24px;
            line-height: 210%;
            letter-spacing: 0.25em;
            color: #2d2d2d;
          }
          img {
            transform: translateY(10px);
          }
          p {
            font-size: 24px;
            line-height: 210%;
            letter-spacing: 0.25em;
            color: #2d2d2d;
            word-wrap: break-word;
          }
        }
      }

      &-name {
        writing-mode: vertical-lr;
        height: calc(100% - 40px);
        padding: 20px 15px;
        background: #c4c4c4;
        font-size: 36px;
        color: #2d2d2d;
        p {
          letter-spacing: 2em;
        }
      }

      &-rightBar {
        height: 452px;
        background: #c4c4c4;
        writing-mode: vertical-lr;
        background: #c4c4c4;
        font-size: 36px;
        color: #2d2d2d;
        cursor: pointer;
        p {
          letter-spacing: 0.6em;
        }
      }
    }
  }

  .phone {
    background: #efefef;
    .cardBlock {
      overflow-x: auto;
      .teacherCard {
        &__information {
          width: 200px;
          height: 257px;
          background: white;
          strong {
            font-weight: bold;
            font-size: 14px;
            line-height: 150%;
            letter-spacing: 0.25em;
            color: #2d2d2d;
          }
          p {
            border-left: 2px solid #c4c4c4;
            font-size: 14px;
            line-height: 150%;
            letter-spacing: 0.25em;
            color: #2d2d2d;
          }
        }
        &__name {
          height: 257px;
          background: #c4c4c4;
          writing-mode: vertical-lr;
          p {
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 0.8em;
            color: #2d2d2d;
          }
        }
      }
    }
  }
}
</style>