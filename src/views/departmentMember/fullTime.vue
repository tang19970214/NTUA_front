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
                <img :src="item.pic" alt="" width="350px" height="452px" />
              </div>
              <div class="back">
                <div
                  class="teacherList__introduce p-20 d-flex justify-content-center flex-column"
                >
                  <div
                    class="w-100"
                    v-for="(items, index) in item.backInfo"
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
                          <a
                            :href="'mailto:' + items.summary"
                            v-if="items.summary"
                          >
                            <img
                              src="@/assets/images/icon/email.png"
                              alt="email link"
                            />
                          </a>
                        </el-col>
                        <el-col :span="13" v-else>
                          <p class="m-0">{{ items.summary }}</p>
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
                <p class="m-0">{{ item.subName }}</p>
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
          <img :src="item.pic" alt="" width="200px" v-if="showInfo[item.key]" />
          <div class="teacherCard__information" v-else>
            <div class="p-15">
              <div
                class="d-flex align-items-center justify-content-start flex-column"
                v-for="(items, index2) in item.backInfo"
                :key="index2"
              >
                <div
                  class="w-100 d-flex flex-column"
                  v-if="items.title !== 'MAIL'"
                >
                  <strong>{{ items.title }}</strong>
                  <p class="m-0 pl-10 py-5">{{ items.summary }}</p>
                </div>
                <div class="w-100 d-flex flex-column" v-else>
                  <strong>MAIL</strong>
                  <a :href="'mailto:' + items.summary" v-if="items.summary">
                    <img
                      class="pl-10 py-5"
                      src="@/assets/images/icon/email.png"
                      alt="email link"
                      width="26px"
                    />
                  </a>
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
                <p class="m-0">{{ item.subName }}</p>
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
    return {
      listQuery: {
        MemberTypeId: "SYS_MEMBER_FULLTIME",
        page: 1,
        limit: 20,
        key: undefined,
      },
      teacherList: [],
      teacherList_phone: [],
      showInfo: {},
    };
  },
  methods: {
    goPublishInfo(name) {
      this.$router.push({ name: "publishInfo", params: { author: name } });
    },
    showTeacherInfo(data) {
      this.showInfo[data?.key] = !this.showInfo[data?.key];
    },
    getList() {
      this.$api.members(this.listQuery).then((res) => {
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
          if (index % 3 === 0) {
            return teacherListSplit.push(arr.slice(index, index + 3));
          }
        });
        this.teacherList_phone = teacherListSplit;
      });
    },
  },
  mounted() {
    this.getList();
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
            font-size: 16px;
            line-height: 250%;
            letter-spacing: 0.1em;
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
        font-size: 28px;
        color: #2d2d2d;
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
            width: 100%;
            max-height: 40px;
            border-left: 2px solid #c4c4c4;
            color: #2d2d2d;
            overflow: hidden;
            -webkit-line-clamp: 2;
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
          }
        }
      }
    }
  }
}
</style>