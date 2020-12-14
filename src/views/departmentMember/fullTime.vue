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
                  <div
                    class="w-100 text-left mt-20 teacherList__introduce-goPublishInfo"
                    @click="goPublishInfo(item.name)"
                  >
                    <p class="m-0">研究發表</p>
                  </div>
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
      <div class="cardBlock py-20 px-40 d-flex align-items-center flex-row">
        <div class="teacherCard d-flex align-items-center flex-row mr-40">
          <img
            src="@/assets/images/teacher/fullTime/teacher1.jpg"
            alt=""
            width="200px"
            v-if="!showInfo"
          />
          <div class="teacherCard__information" v-else>
            <div
              class="px-15 py-20 d-flex align-items-center justify-content-start flex-column"
            >
              <div class="w-100 d-flex flex-column">
                <strong>職稱</strong>
                <p class="m-0 pl-10 py-5">教授</p>
              </div>
              <div class="w-100 d-flex flex-column">
                <strong>授課</strong>
                <p class="m-0 pl-10 py-5">產品設計實務與管理</p>
              </div>
              <div class="w-100 d-flex flex-column">
                <strong>聯繫我</strong>
                <p class="m-0 pl-10 py-5">ext.2119&2110</p>
              </div>
              <div class="w-100 d-flex flex-column">
                <strong>職稱</strong>
                <img
                  class="pl-10 py-5"
                  src="@/assets/images/icon/email.png"
                  alt=""
                  width="26px"
                />
              </div>
            </div>
          </div>
          <div class="teacherCard__name" @click="showTeacherInfo">
            <div class="p-10 d-flex flex-row justify-content-between">
              <div class="d-flex flex-column">
                <p class="m-0">劉立偉</p>
                <p class="m-0">主任</p>
              </div>
              <div class="d-flex align-items-center">
                <img src="@/assets/images/icon/arrowRight.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="teacherCard d-flex align-items-center flex-row mr-40">
          <img
            src="@/assets/images/teacher/fullTime/teacher2.jpg"
            alt=""
            width="200px"
          />
          <div class="teacherCard__name">
            <div class="p-10 d-flex flex-row justify-content-between">
              <div class="d-flex flex-column">
                <p class="m-0">呂琪昌</p>
              </div>
              <div class="d-flex align-items-center">
                <img src="@/assets/images/icon/arrowRight.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="teacherCard d-flex align-items-center flex-row mr-40">
          <img
            src="@/assets/images/teacher/fullTime/teacher3.jpg"
            alt=""
            width="200px"
          />
          <div class="teacherCard__name">
            <div class="p-10 d-flex flex-row justify-content-between">
              <div class="d-flex flex-column">
                <p class="m-0">林志隆</p>
              </div>
              <div class="d-flex align-items-center">
                <img src="@/assets/images/icon/arrowRight.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cardBlock py-20 px-40 d-flex align-items-center flex-row">
        <div class="teacherCard d-flex align-items-center flex-row mr-40">
          <img
            src="@/assets/images/teacher/fullTime/teacher4.jpg"
            alt=""
            width="200px"
          />
          <div class="teacherCard__name">
            <div class="p-10 d-flex flex-row justify-content-between">
              <div class="d-flex flex-column">
                <p class="m-0">劉家豪</p>
              </div>
              <div class="d-flex align-items-center">
                <img src="@/assets/images/icon/arrowRight.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="teacherCard d-flex align-items-center flex-row mr-40">
          <img
            src="@/assets/images/teacher/fullTime/teacher5.jpg"
            alt=""
            width="200px"
          />
          <div class="teacherCard__name">
            <div class="p-10 d-flex flex-row justify-content-between">
              <div class="d-flex flex-column">
                <p class="m-0">張恭領</p>
              </div>
              <div class="d-flex align-items-center">
                <img src="@/assets/images/icon/arrowRight.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="teacherCard d-flex align-items-center flex-row mr-40">
          <img
            src="@/assets/images/teacher/fullTime/teacher6.jpg"
            alt=""
            width="200px"
          />
          <div class="teacherCard__name">
            <div class="p-10 d-flex flex-row justify-content-between">
              <div class="d-flex flex-column">
                <p class="m-0">王意婷</p>
                <p class="m-0">客座助理教授</p>
              </div>
              <div class="d-flex align-items-center">
                <img src="@/assets/images/icon/arrowRight.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cardBlock py-20 px-40 d-flex align-items-center flex-row">
        <div class="teacherCard d-flex align-items-center flex-row mr-40">
          <img
            src="@/assets/images/teacher/fullTime/teacher7.jpg"
            alt=""
            width="200px"
          />
          <div class="teacherCard__name">
            <div class="p-10 d-flex flex-row justify-content-between">
              <div class="d-flex flex-column">
                <p class="m-0">范成浩</p>
              </div>
              <div class="d-flex align-items-center">
                <img src="@/assets/images/icon/arrowRight.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="teacherCard d-flex align-items-center flex-row mr-40">
          <img
            src="@/assets/images/teacher/fullTime/teacher8.jpg"
            alt=""
            width="200px"
          />
          <div class="teacherCard__name">
            <div class="p-10 d-flex flex-row justify-content-between">
              <div class="d-flex flex-column">
                <p class="m-0">趙丹綺</p>
              </div>
              <div class="d-flex align-items-center">
                <img src="@/assets/images/icon/arrowRight.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="teacherCard d-flex align-items-center flex-row mr-40">
          <img
            src="@/assets/images/teacher/fullTime/teacher9.jpg"
            alt=""
            width="200px"
          />
          <div class="teacherCard__name">
            <div class="p-10 d-flex flex-row justify-content-between">
              <div class="d-flex flex-column">
                <p class="m-0">李英嘉</p>
              </div>
              <div class="d-flex align-items-center">
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
    return {
      teacherList: [
        {
          imageURL: require("@/assets/images/teacher/fullTime/teacher1.jpg"),
          name: "劉立偉",
          jobTitle: "主任",
          info: [
            {
              title: "職稱",
              value: "教授",
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
          imageURL: require("@/assets/images/teacher/fullTime/teacher2.jpg"),
          name: "呂琪昌",
          jobTitle: "",
        },
        {
          imageURL: require("@/assets/images/teacher/fullTime/teacher3.jpg"),
          name: "林志隆",
          jobTitle: "",
        },
        {
          imageURL: require("@/assets/images/teacher/fullTime/teacher4.jpg"),
          name: "劉家豪",
          jobTitle: "",
        },
        {
          imageURL: require("@/assets/images/teacher/fullTime/teacher5.jpg"),
          name: "張恭領",
          jobTitle: "",
        },
        {
          imageURL: require("@/assets/images/teacher/fullTime/teacher6.jpg"),
          name: "王意婷",
          jobTitle: "客座助理教授",
        },
        {
          imageURL: require("@/assets/images/teacher/fullTime/teacher7.jpg"),
          name: "范成浩",
          jobTitle: "",
        },
        {
          imageURL: require("@/assets/images/teacher/fullTime/teacher8.jpg"),
          name: "趙丹綺",
          jobTitle: "",
        },
        {
          imageURL: require("@/assets/images/teacher/fullTime/teacher9.jpg"),
          name: "李英嘉",
          jobTitle: "",
        },
      ],
      showInfo: false,
    };
  },
  methods: {
    goPublishInfo(name) {
      this.$router.push({ name: "publishInfo", params: { author: name } });
    },
    showTeacherInfo() {
      this.showInfo = !this.showInfo;
    },
  },
};
</script>

<style lang="scss">
#fullTime {
  .web {
    padding-left: 200px;
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
            border-left: 2px solid #C4C4C4;
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