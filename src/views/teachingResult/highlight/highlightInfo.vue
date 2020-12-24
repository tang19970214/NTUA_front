<template>
  <div id="highlightInfo">
    <div class="web d-none d-mb-block">
      <div class="w-100 bg-white pb-80">
        <div class="p-60 text-left">
          <p class="Txt-title" @click="goBackHighlight()">活動花絮</p>
        </div>
        <div class="w-100 highlightCard">
          <div class="px-150 py-30">
            <el-row>
              <el-col
                :xl="8"
                :lg="12"
                v-for="(item, index) in highlightList"
                :key="'RCL__' + index"
              >
                <div
                  class="highlightCard__info w-100 d-flex align-items-center justify-content-center flex-column"
                >
                  <img
                    :src="item.imgURL"
                    alt=""
                    @click="getTouchIMG(item.imgURL)"
                  />
                  <span class="mt-40 mb-10"></span>
                  <p class="m-0 text-center">{{ item.title }}</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

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
            <el-col
              class="pb-30"
              :span="12"
              v-for="(item, index1) in highlightList"
              :key="index1"
            >
              <div
                class="highlightInfo__content w-100 d-flex align-items-center justify-content-center flex-column"
              >
                <div class="px-15">
                  <img
                    :src="item.imgURL"
                    alt=""
                    width="100%"
                    @click="getTouchIMG(item.imgURL)"
                  />
                </div>
                <div
                  class="px-5 d-flex flex-column align-items-center justify-content-center"
                >
                  <span class="mt-15 mb-10"></span>
                  <p class="m-0">{{ item.title }}</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="modal" v-if="showIMG">
      <div class="modal__content">
        <div class="mx-20 d-flex align-items-center justify-content-center">
          <div class="classCardPhone">
            <div class="px-30 pt-10 pb-40">
              <div
                class="w-100 d-flex align-items-center justify-content-end mb-10"
              >
                <div
                  class="closeBtn d-flex align-items-center justify-content-center cur-pointer p-3"
                  @click="showIMG = false"
                >
                  <i class="el-icon-close"></i>
                </div>
              </div>

              <div
                class="w-100 d-flex align-items-end justify-content-center flex-column"
              >
                <div class="px-30">
                  <img :src="enlargeIMG" alt="" width="100%" />
                </div>
                <div class="w-100 classCardPhone__introduce">
                  <div class="px-30 py-10">
                    <div
                      class="w-100 classCardPhone__introduce-title text-left pb-5"
                    >
                      <strong>展覽空間</strong>
                    </div>
                    <div class="w-100 pr-60 classCardPhone__introduce-content">
                      <el-row class="pt-10">
                        <el-col :span="12">上傳時間</el-col>
                        <el-col :span="12">2019-05-24</el-col>
                      </el-row>
                      <el-row class="pt-10">
                        <el-col :span="12">上傳者</el-col>
                        <el-col :span="12">admin</el-col>
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
              <div
                class="w-100 d-flex align-items-center justify-content-end mb-10"
              >
                <div
                  class="closeBtn d-flex align-items-center justify-content-center cur-pointer p-3"
                  @click="showIMG_phone = false"
                >
                  <i class="el-icon-close"></i>
                </div>
              </div>

              <div
                class="w-100 d-flex align-items-end justify-content-center flex-column"
              >
                <div class="px-30">
                  <img :src="enlargeIMG" alt="" width="100%" />
                </div>
                <!-- <div
                  class="w-100 my-20 d-flex align-items-center justify-content-between"
                >
                  <img
                    src="@/assets/images/arrowLeft_btn.png"
                    alt=""
                    width="32px"
                  />
                  <img
                    src="@/assets/images/arrowRight_btn.png"
                    alt=""
                    width="32px"
                  />
                </div> -->
                <div class="w-100 classCardPhone__introduce">
                  <div class="px-30 py-10">
                    <div
                      class="w-100 classCardPhone__introduce-title text-left pb-5"
                    >
                      <strong>展覽空間</strong>
                    </div>
                    <div class="w-100 pr-60 classCardPhone__introduce-content">
                      <el-row class="pt-10">
                        <el-col :span="12">上傳時間</el-col>
                        <el-col :span="12">2019-05-24</el-col>
                      </el-row>
                      <el-row class="pt-10">
                        <el-col :span="12">上傳者</el-col>
                        <el-col :span="12">admin</el-col>
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
      highlightList: [
        {
          imgURL: require("@/assets/images/highlight/highlight1.png"),
          title: "2018中川衛教授金工鑲嵌演講",
        },
        {
          imgURL: require("@/assets/images/highlight/highlight2.png"),
          title: "2018（第七屆）工藝創作與文創設計學術研討會暨木藝工作營",
        },
        {
          imgURL: require("@/assets/images/highlight/highlight3.png"),
          title: "2017（第六屆）工藝創作與文創設計學術研討會暨產品工作營",
        },
        {
          imgURL: require("@/assets/images/highlight/highlight4.png"),
          title: "李英嘉老師示範木工圓鋸機操作方式",
        },
        {
          imgURL: require("@/assets/images/highlight/highlight5.png"),
          title: "2016（第五屆）工藝創作與文創設計學術研討會 暨金工工作營",
        },
        {
          imgURL: require("@/assets/images/highlight/highlight6.png"),
          title: "2015（第四屆）工藝創作與文創設計研討會 暨陶瓷柴燒工作營",
        },
      ],
      enlargeIMG: "",
      showIMG: false,
      showIMG_phone: false,
    };
  },
  methods: {
    goBackHighlight() {
      this.$router.push({ name: "highlight" });
    },
    getTouchIMG(url) {
      this.enlargeIMG = url;
      this.showIMG = true;
    },
    getTouchIMG_phone(url) {
      this.enlargeIMG = url;
      this.showIMG_phone = true;
    },
  },
};
</script>

<style lang="scss">
#highlightInfo {
  .web {
    padding-top: 420px;
    margin-left: 120px;
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
        max-height: 500px;
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
        min-height: 430px;
        span {
          border-top: 1px solid #ceb87f;
          width: 120px;
        }
        p {
          font-weight: bold;
          font-size: 14px;
          color: #ffffff;
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