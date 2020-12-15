<template>
  <div id="recordInfo">
    <div class="web d-none d-mb-block">
      <div class="w-100 bg-white pb-80">
        <div class="p-60 text-left">
          <p class="Txt-title" @click="goBackRecord()">展覽紀錄</p>
        </div>
        <div class="w-100 recordCard">
          <div class="px-150 py-30">
            <el-row>
              <el-col
                :span="8"
                v-for="(item, index) in recordList"
                :key="'RCL__' + index"
              >
                <div
                  class="recordCard__info w-100 d-flex align-items-center justify-content-start flex-column"
                >
                  <img :src="item.imgURL" alt="" />
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
      <div class="recordInfoTitle w-100 d-flex align-items-center flex-row">
        <router-link class="pl-20" :to="{ name: 'record' }">
          <img src="@/assets/images/icon/arrowLeft.png" alt="" />
        </router-link>
        <PhoneTitle title="展覽紀錄" :filterDate="false" />
      </div>
      <div class="w-100 recordInfo">
        <div class="p-30">
          <el-row>
            <el-col
              class="pb-30"
              :span="12"
              v-for="(item, index1) in recordList"
              :key="index1"
            >
              <div
                class="recordInfo__content w-100 d-flex align-items-center justify-content-start flex-column"
              >
                <div class="px-15">
                  <img
                    :src="item.imgURL"
                    alt=""
                    width="100%"
                    @click="showIMG_phone = true"
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

    <!-- modal -->
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
                  <img
                    src="@/assets/images/book/book1.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div
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
      recordList: [
        {
          imgURL: require("@/assets/images/book/record/record1-1.png"),
          title: "2019臺清師生聯展文宣",
        },
        {
          imgURL: require("@/assets/images/book/record/record1-2.png"),
          title: "2019臺清海報",
        },
        {
          imgURL: require("@/assets/images/book/record/record1-3.png"),
          title: "清華大學藝術學院副院長兼藝術與設計學系系主任蕭銘芚",
        },
        {
          imgURL: require("@/assets/images/book/record/record1-4.png"),
          title: "臺藝大設計學院許杏蓉院長致詞",
        },
        {
          imgURL: require("@/assets/images/book/record/record1-5.png"),
          title: "臺藝大設計學院許杏蓉院長致詞",
        },
        {
          imgURL: require("@/assets/images/book/record/record1-6.png"),
          title: "設計學院許院長頒發參展證明給清華大學蕭銘芚教授",
        },
      ],
      showIMG_phone: false,
    };
  },
  methods: {
    goBackRecord() {
      this.$router.push({ name: "record" });
    },
  },
};
</script>

<style lang="scss">
#recordInfo {
  .web {
    padding-top: 420px;
    margin-left: 120px;
    .Txt-title {
      width: 130px;
      font-size: 64px;
      line-height: 75px;
      color: #ceb87f;
    }
    .recordCard {
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
    .recordInfoTitle {
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
    .recordInfo {
      background: #2d2d2d;
      &__content {
        min-height: 190px;
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