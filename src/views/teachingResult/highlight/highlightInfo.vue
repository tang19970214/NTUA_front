<template>
  <div id="highlightInfo">
    <!-- web -->
    <div class="web d-none d-mb-block">
      <div class="w-100 pb-10 goPrev d-flex align-items-center flex-row cur-pointer" @click="goBackHighlight()">
        <img src="@/assets/images/icon/arrowLeft.png" alt="回上一頁" />
        <strong class="font-s-24 pl-10">回上一頁</strong>
      </div>
      <div class="w-100 bg-white pb-80">
        <div class="p-60 text-left">
          <p class="Txt-title">活動花絮</p>
        </div>
        <div class="w-100 highlightCard">
          <div class="px-150 py-30">
            <el-row>
              <el-col :xl="8" :lg="12" v-for="(item, index) in highlightList" :key="'RCL__' + index">
                <div class="highlightCard__info w-100 d-flex align-items-center justify-content-center flex-column">
                  <!-- <img :src="item.pic" alt="" @click="getTouchIMG(index)" /> -->
                  <el-image :src="item.pic" fit="cover" style="width: 300px; height: 380px" @click="getTouchIMG(index)"></el-image>
                  <span class="mt-40 mb-10"></span>
                  <p class="m-0 text-center">{{ item.title }}</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="w-100 mt-30 text-center">
          <span class="goPrev cur-pointer" @click="goBackHighlight()">
            <img src="@/assets/images/icon/arrowLeft.png" alt="回上一頁" />
            <strong class="font-s-24 pl-10">回上一頁</strong>
          </span>
        </div>
      </div>
    </div>

    <!-- phone -->
    <div class="phone d-block d-mb-none pt-70">
      <div class="highlightInfoTitle w-100 d-flex align-items-center flex-row">
        <router-link class="pl-20" :to="{ name: 'highlight' }">
          <img src="@/assets/images/icon/arrowLeft.png" alt="" />
        </router-link>
        <PhoneTitle title="活動花絮" :filterDate="false" />
      </div>
      <div class="w-100 highlightInfo">
        <div class="p-30">
          <el-row>
            <el-col class="pb-30" :span="12" v-for="(item, index1) in highlightList" :key="index1">
              <div class="highlightInfo__content w-100 d-flex align-items-center justify-content-center flex-column">
                <div class="px-15">
                  <el-image :src="item.pic" fit="cover" style="width: 100%; height: 100px" @click="getTouchIMG(index1)"></el-image>
                </div>
                <div class="px-5 d-flex flex-column align-items-center justify-content-center">
                  <span class="mt-15 mb-10"></span>
                  <p class="m-0">{{ item.title }}</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <!-- modal -->
    <div class="modal" v-if="showIMG">
      <div class="modal__content">
        <div class="mx-20 d-flex align-items-center justify-content-center">
          <div class="classCardPhone">
            <div class="px-30 pt-10 pb-40">
              <div class="w-100 d-flex align-items-center justify-content-end mb-10">
                <div class="closeBtn d-flex align-items-center justify-content-center cur-pointer p-3" @click="showIMG = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>

              <div class="w-100 d-flex align-items-end justify-content-center flex-column">
                <div class="px-30">
                  <img :src="highlightList[selectNum].pic" alt="" width="100%" />
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between my-8">
                  <div class="w-100 text-right">
                    <img v-if="selectNum > 0" class="mr-20 cur-pointer" src="@/assets/images/arrowLeft_btn.png" alt="上一張" @click="prevPic" />
                  </div>
                  <div class="w-100 text-left">
                    <img v-if="selectNum < listCount" class="ml-20 cur-pointer" src="@/assets/images/arrowRight_btn.png" alt="下一張" @click="nextPic" />
                  </div>
                </div>
                <div class="w-100 classCardPhone__introduce">
                  <div class="px-30 py-10 d-flex align-items-center justify-content-center flex-column">
                    <div class="w-100 classCardPhone__introduce-title text-left pb-5">
                      <strong>{{ highlightList[selectNum].title }}</strong>
                    </div>
                    <div class="w-100 pr-60 classCardPhone__introduce-content text-center">
                      <el-row class="pt-10">
                        <el-col :span="12">上傳時間</el-col>
                        <el-col :span="12">
                          {{
                            highlightList[selectNum].createDate
                              | moment("YYYY-MM-DD")
                          }}
                        </el-col>
                      </el-row>
                      <el-row class="pt-10">
                        <el-col :span="12">上傳者</el-col>
                        <el-col :span="12">{{
                          highlightList[selectNum].createUserName
                        }}</el-col>
                      </el-row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" v-if="showIMG_phone">
      <div class="modal__content">
        <div class="mx-20 d-flex align-items-center justify-content-center">
          <div class="classCardPhone w-100">
            <div class="px-30 pt-10 pb-40">
              <div class="w-100 d-flex align-items-center justify-content-end mb-10">
                <div class="closeBtn d-flex align-items-center justify-content-center cur-pointer p-3" @click="showIMG_phone = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>

              <div class="w-100 d-flex align-items-end justify-content-center flex-column">
                <div class="px-30">
                  <img :src="highlightList[selectNum].pic" alt="" width="100%" />
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between my-8">
                  <div class="w-100 text-right">
                    <img v-if="selectNum > 0" class="mr-20 cur-pointer" src="@/assets/images/arrowLeft_btn.png" alt="上一張" @click="prevPic" />
                  </div>
                  <div class="w-100 text-left">
                    <img v-if="selectNum < listCount" class="ml-20 cur-pointer" src="@/assets/images/arrowRight_btn.png" alt="下一張" @click="nextPic" />
                  </div>
                </div>
                <div class="w-100 classCardPhone__introduce">
                  <div class="px-30 py-10">
                    <div class="w-100 classCardPhone__introduce-title text-left pb-5">
                      <strong>{{ highlightList[selectNum].title }}</strong>
                    </div>
                    <div class="w-100 pr-60 classCardPhone__introduce-content">
                      <el-row class="pt-10">
                        <el-col :span="12">上傳時間</el-col>
                        <el-col :span="12">
                          {{
                            highlightList[selectNum].createDate
                              | moment("YYYY-MM-DD")
                          }}
                        </el-col>
                      </el-row>
                      <el-row class="pt-10">
                        <el-col :span="12">上傳者</el-col>
                        <el-col :span="12">{{
                          highlightList[selectNum].createUserName
                        }}</el-col>
                      </el-row>
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
import PhoneTitle from "@/components/PhoneTitle.vue";

export default {
  components: {
    PhoneTitle,
  },
  data() {
    return {
      listQuery: {
        AlbumId: this.$route.params.id,
        page: 1,
        limit: 20,
        key: undefined,
      },
      highlightList: [],
      listCount: "",
      selectNum: "",
      showIMG: false,
      showIMG_phone: false,
    };
  },
  methods: {
    goBackHighlight() {
      this.$router.push({ name: "highlight" });
    },
    getTouchIMG(num) {
      this.selectNum = num;
      this.showIMG = true;
    },
    getTouchIMG_phone(num) {
      this.selectNum = num;
      this.showIMG_phone = true;
    },
    prevPic() {
      this.selectNum--;
    },
    nextPic() {
      this.selectNum++;
    },
    async getList() {
      await this.$api.departmentAlbemPics(this.listQuery).then((res) => {
        this.highlightList = res.data.data;
        this.listCount = res.data.count - 1;
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
#highlightInfo {
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
    .Txt-title {
      width: 130px;
      font-size: 64px;
      line-height: 75px;
      color: #ceb87f;
    }
    .highlightCard {
      background: #2d2d2d;
      &__info {
        min-height: 500px;
        // max-height: 500px;
        margin-bottom: 40px;
        img {
          transition: all 0.6s;
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
        }
        span {
          width: 120px;
          border: 1px solid #ceb87f;
        }
        p {
          max-width: 260px;
          font-weight: bold;
          font-size: 18px;
          line-height: 160%;
          color: #ffffff;
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
    }
  }

  .phone {
    .highlightInfoTitle {
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
    .highlightInfo {
      background: #2d2d2d;
      &__content {
        span {
          border-top: 1px solid #ceb87f;
          width: 120px;
        }
        p {
          font-weight: bold;
          font-size: 14px;
          color: #ffffff;
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
    }
  }

  .classCardPhone {
    background: #fff;
    border-radius: 8px;
    &__introduce {
      background: #2d2d2d;
      &-title {
        max-width: 260px;
        border-bottom: 1px solid #ceb87f;
        color: #ceb87f;
        font-size: 18px;
        line-height: 21px;
      }
      &-content {
        .el-col {
          &:first-child {
            color: #ceb87f;
            font-size: 14px;
            line-height: 16px;
          }
          &:last-child {
            color: #fff;
            font-size: 14px;
            line-height: 16px;
          }
        }
      }
    }
  }

  .closeBtn {
    width: 30px;
    height: 30px;
    background: #fff;
    border: 2px solid #ceb87f;
    border-radius: 50%;
    color: #ceb87f;
    font-size: 32px;
    transition: all 0.5s;
    &:hover {
      background: #ceb87f;
      border: 2px solid #ceb87f;
      color: #fff;
    }
  }
}
</style>