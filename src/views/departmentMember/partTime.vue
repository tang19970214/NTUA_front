<template>
  <div id="partTime">
    <div class="web d-none d-mb-block">
      <div class="w-100">
        <el-row>
          <el-col class="mb-150" :span="8" v-for="item in teacherList" :key="item.id">
            <div class="teacherCard">
              <div class="teacherCard__left">
                <el-image style="width: 180px; height: 230px" :src="item.pic" :alt="item.name" fit="cover"></el-image>
                <div class="teacherCard__left--title">
                  <p class="m-0">{{item.backInfo[0].summary}}</p>
                  <strong>{{item.name}} {{item.subName}}</strong>
                </div>
              </div>

              <div class="teacherCard__right">
                <div class="teacherCard__right--info" v-for="items in item.backInfo" :key="items.id">
                  <strong v-if="items.title == '授課' || items.title == '聯繫我'">{{items.title}}</strong>
                  <p class="m-0" v-if="items.title == '授課' || items.title == '聯繫我'">{{items.summary}}</p>
                </div>

                <div class="teacherCard__right--contact">
                  <div class="sendMail">
                    <a :href="'mailto:' + item.backInfo[3].summary" v-if="item.backInfo[3].summary">
                      <img src="@/assets/images/icon/baseline-mail.png" alt="email link" width="35px" />
                    </a>
                  </div>
                  <div class="goPublish cur-pointer" @click="goPublishInfo(item)">
                    <strong>研究發表</strong>
                    <img src="@/assets/images/icon/arrowRight.png" alt="前往研究發表" width="15px" />
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>

        <!-- <el-row>
          <el-col class="mb-150 d-flex justify-content-start" :span="8" v-for="(item, index) in teacherList" :key="'TL_' + index">
            <div class="creation">
              <div class="front">
                <img :src="item.pic" :alt="item.name" width="350px" height="452px" />
              </div>
              <div class="back">
                <div class="teacherList-introduce p-20 d-flex justify-content-center flex-column">
                  <div class="w-100" v-for="(items, index) in item.backInfo" :key="index">
                    <div class="w-100 d-flex flex-row teacherList-introduce_content">
                      <el-row class="w-100">
                        <el-col :span="7">
                          <strong>{{ items.title }}</strong>
                        </el-col>
                        <el-col :span="4">
                          <img src="@/assets/images/icon/dashLine.png" alt="" />
                        </el-col>
                        <el-col :span="13" v-if="items.title == 'MAIL'">
                          <a :href="'mailto:' + items.summary" v-if="items.summary">
                            <img src="@/assets/images/icon/email.png" alt="email link" />
                          </a>
                        </el-col>
                        <el-col :span="13" v-else>
                          <p class="m-0">{{ items.summary }}</p>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="teacherList__rightBar">
              <div class="py-20 px-10 d-flex flex-row align-items-center">
                <p class="m-0">{{ item.name }}</p>
                <p class="m-0">{{ item.subName }}</p>
              </div>
            </div>
          </el-col>
        </el-row> -->
      </div>
    </div>

    <div class="phone d-block d-mb-none pb-20">
      <div class="cardBlock py-20 px-40 d-flex align-items-center flex-row" v-for="fetch in teacherList_phone" :key="fetch.id">
        <div class="teacherCard d-flex align-items-center flex-row" v-for="(item, index1) in fetch" :key="index1">
          <el-image style="width: 200px; height: 257px" :src="item.pic" :alt="item.name" fit="cover" v-if="showInfo[item.key]"></el-image>
          <div class="teacherCard__information" v-else>
            <div class="p-15">
              <div class="d-flex align-items-center justify-content-start flex-column" v-for="(items, index2) in item.backInfo" :key="index2">
                <div class="w-100 d-flex flex-column" v-if="items.title !== 'MAIL'">
                  <strong>{{ items.title }}</strong>
                  <p class="m-0 pl-10 py-5">{{ items.summary }}</p>
                </div>
                <div class="w-100 d-flex flex-column" v-else>
                  <strong>MAIL</strong>
                  <a :href="'mailto:' + items.summary" v-if="items.summary">
                    <img class="pl-10 py-5" src="@/assets/images/icon/email.png" alt="email link" width="26px" />
                  </a>
                </div>
              </div>
              <div class="w-100">
                <a @click="goPublishInfo(item)">研究發表</a>
              </div>
            </div>
          </div>

          <div class="teacherCard__name">
            <div class="p-10 d-flex flex-row justify-content-between">
              <p class="m-0">{{ item.name }} {{ item.subName }}</p>
              <div class="d-flex align-items-center" @click="showTeacherInfo(item)">
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
      listQuery: {
        MemberTypeId: "SYS_MEMBER_CONCURRENT",
        page: 1,
        limit: 999,
        key: undefined,
      },
      teacherList: [],
      teacherList_phone: [],
      showInfo: {},
    };
  },
  methods: {
    goPublishInfo(data) {
      this.$router.push({
        name: "publishInfo",
        params: { author: data.id },
        query: { type: "兼任" },
      });
    },
    showTeacherInfo(data) {
      this.showInfo[data?.key] = !this.showInfo[data?.key];
    },
    async getList() {
      await this.$api.members(this.listQuery).then((res) => {
        const memberData = [];
        res.data.data.forEach((item, index) => {
          const resetData = {
            key: index + 1,
            id: item.id,
            pic: item.pic,
            name: item.name,
            subName: item.subName,
            backInfo: [
              {
                title: "職稱",
                summary: item.jobTitle,
              },
              {
                title: "授課",
                summary: item.teachClass,
              },
              {
                title: "聯繫我",
                summary: item.contactTel,
              },
              {
                title: "MAIL",
                summary: item.email,
              },
            ],
          };
          memberData.push(resetData);
        });
        this.teacherList = memberData;
        this.showInfo = memberData.reduce((a, b) => ((a[b.key] = true), a), {});
        const teacherListSplit = [];
        this.teacherList.forEach((item, index, arr) => {
          if (index % 5 === 0) {
            return teacherListSplit.push(arr.slice(index, index + 5));
          }
        });
        this.teacherList_phone = teacherListSplit;
        this.$store.commit("SETLOADING", false);
      });
    },
  },
  mounted() {
    this.$store.commit("SETLOADING", true);
    this.getList();
  },
};
</script>

<style lang="scss">
#partTime {
  .web {
    padding-top: 0;
    margin-left: 120px;
    padding-left: 20px;
    background: #ffffff;

    .teacherCard {
      width: 100%;
      height: 300px;
      padding: 0 40px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;

      &__left {
        width: 180px;
        height: 100%;
        display: flex;
        flex-direction: column;

        &--title {
          width: 100%;
          padding: 16px;
          box-sizing: border-box;

          p {
            font-weight: 500;
            font-size: 18px;
            color: #b0b0b0;
          }

          strong {
            font-size: 24px;
            color: #ad9d72;
          }
        }
      }

      &__right {
        position: relative;
        width: calc(100% - 180px);
        height: 100%;
        background: #c4c4c4;

        &--info {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;

          strong {
            font-size: 20px;
            color: #2d2d2d;
          }

          p {
            color: #2d2d2d;
          }
        }

        &--contact {
          position: absolute;
          bottom: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          background: #52505a;

          .sendMail {
            padding: 8px;
            background: #77767b;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .goPublish {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            strong {
              padding-right: 16px;
              font-size: 20px;
              color: #ffffff;
            }
          }
        }
      }
    }

    // .creation:hover {
    //   transform: rotateY(180deg);
    // }
    // .creation {
    //   width: 350px;
    //   height: 452px;
    //   transition: all 0.6s;
    //   transform-style: preserve-3d;
    // }
    // .front,
    // .back {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   backface-visibility: hidden;
    //   img {
    //     object-fit: cover;
    //   }
    // }
    // .back {
    //   z-index: 999;
    //   transform: rotateY(-180deg);
    // }

    // .teacherList {
    //   height: 452px;
    //   margin-bottom: 200px;
    //   &-introduce {
    //     width: 310px;
    //     height: 410px;
    //     border: 1px solid #c4c4c4;

    //     &_content {
    //       strong {
    //         font-weight: bold;
    //         font-size: 24px;
    //         line-height: 210%;
    //         letter-spacing: 0.25em;
    //         color: #2d2d2d;
    //       }
    //       img {
    //         transform: translateY(10px);
    //       }
    //       p {
    //         font-size: 16px;
    //         line-height: 250%;
    //         letter-spacing: 0.1em;
    //         color: #2d2d2d;
    //         word-wrap: break-word;
    //         overflow: hidden;
    //         -webkit-line-clamp: 4;
    //         text-overflow: ellipsis;
    //         display: -webkit-box;
    //         -webkit-box-orient: vertical;
    //       }
    //     }
    //   }

    //   &__rightBar {
    //     height: 452px;
    //     background: #c4c4c4;
    //     writing-mode: vertical-lr;
    //     background: #c4c4c4;
    //     font-size: 28px;
    //     color: #2d2d2d;
    //     p {
    //       letter-spacing: 0.6em;
    //       &:first-child {
    //         min-height: 150px;
    //       }
    //       &:last-child {
    //         overflow: hidden;
    //         white-space: nowrap;
    //         text-overflow: ellipsis;
    //       }
    //     }
    //   }
    // }
  }

  .phone {
    background: #efefef;
    .cardBlock {
      overflow-x: auto;
      .teacherCard {
        min-width: 290px;
        max-width: 290px;
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
            width: 100%;
            max-height: 40px;
            border-left: 2px solid #c4c4c4;
            color: #2d2d2d;
            overflow: hidden;
            -webkit-line-clamp: 1;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
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
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>