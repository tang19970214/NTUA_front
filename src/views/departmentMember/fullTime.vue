<template>
  <div id="fullTime">
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
                  class="teacherList__introduce p-20 d-flex justify-content-center flex-column"
                >
                  <div
                    class="w-100"
                    v-for="(items, index) in item.info"
                    :key="index"
                  >
                    <div
                      class="w-100 d-flex flex-row teacherList__introduce-content"
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
                  <!-- <div
                    class="w-100 text-left mt-20 teacherList__introduce-goPublishInfo"
                    @click="goPublishInfo(item.name)"
                  >
                    <p class="m-0">研究發表</p>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="teacherList__rightBar">
              <div class="py-20 px-10">
                <p class="m-0">{{ item.name }}</p>
                <p class="m-0">{{ item.jobTitle }}</p>
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
        imageURL: require("@/assets/images/teacher/fullTime/teacher1.jpg"),
        name: "劉立偉",
        jobTitle: "主任",
        info: [
          {
            title: "職稱",
            value: "副教授",
          },
          {
            title: "授課",
            value: "產品設計實務與管理",
          },
          {
            title: "聯繫我",
            value: "ext.2119&2110",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 2,
        imageURL: require("@/assets/images/teacher/fullTime/teacher2.jpg"),
        name: "呂琪昌",
        jobTitle: "",
        info: [
          {
            title: "職稱",
            value: "教授",
          },
          {
            title: "授課",
            value: "陶瓷工藝、圖學",
          },
          {
            title: "聯繫我",
            value: "ext.2117",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 3,
        imageURL: require("@/assets/images/teacher/fullTime/teacher3.jpg"),
        name: "林志隆",
        jobTitle: "",
        info: [
          {
            title: "職稱",
            value: "副教授",
          },
          {
            title: "授課",
            value: "設計方法、研究方法",
          },
          {
            title: "聯繫我",
            value: "ext.2128",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 4,
        imageURL: require("@/assets/images/teacher/fullTime/teacher4.jpg"),
        name: "劉家豪",
        jobTitle: "",
        info: [
          {
            title: "職稱",
            value: "副教授",
          },
          {
            title: "授課",
            value: "陶瓷工作坊、創作與設計研究(日碩)",
          },
          {
            title: "聯繫我",
            value: "ext.2120",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 5,
        imageURL: require("@/assets/images/teacher/fullTime/teacher5.jpg"),
        name: "張恭領",
        jobTitle: "",
        info: [
          {
            title: "職稱",
            value: "副教授",
          },
          {
            title: "授課",
            value: "設計研究、3D模型設計",
          },
          {
            title: "聯繫我",
            value: "ext.2115",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 6,
        imageURL: require("@/assets/images/teacher/fullTime/teacher6.jpg"),
        name: "王意婷",
        jobTitle: "客座助理教授",
        info: [
          {
            title: "職稱",
            value: "助理教授",
          },
          {
            title: "授課",
            value: "金屬工藝、琺琅工藝",
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
        id: 7,
        imageURL: require("@/assets/images/teacher/fullTime/teacher7.jpg"),
        name: "范成浩",
        jobTitle: "",
        info: [
          {
            title: "職稱",
            value: "助理教授",
          },
          {
            title: "授課",
            value: "產品設計、近代設計史",
          },
          {
            title: "聯繫我",
            value: "ext.2116",
          },
          {
            title: "MAIL",
            value: "信箱",
          },
        ],
      },
      {
        id: 8,
        imageURL: require("@/assets/images/teacher/fullTime/teacher8.jpg"),
        name: "趙丹綺",
        jobTitle: "",
        info: [
          {
            title: "職稱",
            value: "副教授",
          },
          {
            title: "授課",
            value: "工藝創作、金屬鍛造工藝",
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
        id: 9,
        imageURL: require("@/assets/images/teacher/fullTime/teacher9.jpg"),
        name: "李英嘉",
        jobTitle: "",
        info: [
          {
            title: "職稱",
            value: "講師",
          },
          {
            title: "授課",
            value: "木材工藝、生活木藝",
          },
          {
            title: "聯繫我",
            value: "ext.2124",
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
      if (index % 3 === 0) {
        return teacherListSplit.push(arr.slice(index, index + 3));
      }
    });
    return {
      teacherList: fetchData,
      teacherList_phone: teacherListSplit,
      showInfo: fetchData.reduce((a, b) => ((a[b.id] = true), a), {}),
    };
  },

  methods: {
    goPublishInfo(name) {
      this.$router.push({ name: "publishInfo", params: { author: name } });
    },
    showTeacherInfo(data) {
      this.showInfo[data?.id] = !this.showInfo[data?.id];
    },
  },
};
</script>

<style lang="scss">
#fullTime {
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
      &__introduce {
        width: 310px;
        height: 410px;
        border: 1px solid #c4c4c4;
        &-content {
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
        &-goPublishInfo {
          color: #ceb87f;
          font-weight: bold;
          font-size: 24px;
          text-decoration: underline;
          transition: all 0.6s;
          cursor: pointer;
          &:hover {
            letter-spacing: 0.2rem;
          }
        }
      }

      &__rightBar {
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
    min-height: calc(100vh - 489px);
    .cardBlock {
      overflow-x: auto;
      .teacherCard {
        &__information {
          width: 200px;
          height: 257px;
          background: white;
          font-size: 14px;
          line-height: 150%;
          letter-spacing: 0.25em;
          strong {
            color: #2d2d2d;
          }
          p {
            border-left: 2px solid #c4c4c4;
            color: #2d2d2d;
          }
          a {
            font-weight: bold;
            color: #ceb87f;
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