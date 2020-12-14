<template>
  <div id="equipmentInfo">
    <div class="web d-none d-mb-block">
      <div class="w-100 text-left">
        <p class="Txt-title" @click="goBackEquipment()">教學設備與空間</p>
      </div>
      <div class="mt-70 newsCard">
        <div class="px-150 pt-90">
          <strong class="newsCard__title">{{ $route.params.class }}</strong>
        </div>
        <div class="py-100 w-100 introduceCard mt-20">
          <div class="px-150 py-30">
            <el-row>
              <el-col
                class="mb-60"
                :span="8"
                v-for="(item, index) in classData[$route.params.class]"
                :key="'CD__' + index"
              >
                <div
                  class="w-100 d-flex align-items-center justify-content-center flex-column"
                >
                  <div class="px-60">
                    <div
                      class="introduceCard__classIMG w-100 d-flex justify-content-center"
                    >
                      <img
                        class="cur-pointer"
                        :src="item.imgURL"
                        alt=""
                        @click="showIMG = true"
                      />
                    </div>

                    <div
                      class="w-100 mt-40 d-flex justify-content-center d-inline-flex"
                    >
                      <div class="pt-10 introduceCard__viewBtn text-center">
                        <a class="text-decoration-none cur-pointer px-20">
                          展覽空間
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>

            <div class="w-100 d-flex align-items-center justify-content-center">
              <img src="@/assets/images/youtubeBlock.png" alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-100">
        <div class="py-80 px-60">
          <div class="w-100">
            <p class="m-0 font-s-28">相關空間</p>
          </div>
          <div
            class="anotherClass w-100 d-flex align-items-center justify-content-start flex-row mt-40"
          >
            <div
              class="mx-15 d-flex align-items-center justify-content-center flex-column"
              v-for="(item, index) in anotherClassList"
              :key="'ACL__' + index"
            >
              <img :src="item.imgURL" alt="" />
              <div class="mt-20">
                <strong>{{ item.title }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb none pt-70">
      <div
        class="equipmentInfo__Title w-100 d-flex align-items-center flex-row"
      >
        <router-link class="pl-20" :to="{ name: 'equipment' }">
          <img src="@/assets/images/icon/arrowLeft.png" alt="" />
        </router-link>
        <p class="m-0 pl-10">{{ $route.params.class }}</p>
      </div>

      <div class="equipmentInfo__card mt-5">
        <div class="p-20">
          <el-row>
            <el-col
              :span="12"
              v-for="(item, index1) in classData[$route.params.class]"
              :key="index1"
            >
              <div class="p-10">
                <div
                  class="equipmentInfo__card-information w-100 d-flex align-items-center justify-content-center flex-column"
                >
                  <img
                    :src="item.imgURL"
                    alt=""
                    width="100%"
                    @click="showIMG_phone = true"
                  />
                  <strong class="mt-15 pt-10 px-20">展覽空間</strong>
                </div>
              </div>
            </el-col>
          </el-row>

          <div class="w-10 mt-30">
            <img src="@/assets/images/youtubeBlock.png" alt="" width="100%" />
          </div>
        </div>
      </div>

      <div class="equipmentInfo__about bg-white">
        <div class="p-20">
          <div class="w-100 equipmentInfo__about-title">
            <p class="m-0">相關空間</p>
          </div>
          <div class="w-100 mt-20 d-flex flex-row overflow-x">
            <div
              class="equipmentInfo__about-content d-flex align-items-center justify-content-center flex-column mr-20"
              v-for="(item, index2) in anotherClassList"
              :key="index2"
            >
              <img :src="item.imgURL" alt="" width="200px" />
              <div class="mt-20 text-center">
                <strong>{{ item.title }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <div class="modal" v-if="showIMG">
      <div class="modal__content">
        <div class="w-100 d-flex align-items-center justify-content-center">
          <div class="pos-relative">
            <div class="classCard w-100">
              <div class="p-100">
                <div class="w-100 d-flex align-items-end flex-row">
                  <img
                    src="@/assets/images/equipment/equipment1.png"
                    alt=""
                    width="700px"
                  />
                  <div class="classCard__introduce d-inline-flex">
                    <div class="px-50 pt-60 pb-80">
                      <div
                        class="w-100 classCard__introduce-title text-left pb-5"
                      >
                        <strong>展覽空間</strong>
                      </div>
                      <div class="w-100 pr-60 classCard__introduce-content">
                        <el-row class="pt-10">
                          <el-col :span="12">上傳時間</el-col>
                          <el-col :span="12">2019-09-05</el-col>
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
            <div class="pos-absolute t-0 r-0 mt-20 mr-20">
              <div
                class="closeBtn d-flex align-items-center justify-content-center cur-pointer p-3"
                @click="showIMG = false"
              >
                <i class="el-icon-close"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" v-if="showIMG_phone">
      <div class="modal__content">
        <div class="w-100 d-flex align-items-center justify-content-center">
          <!-- <div class="pos-relative"> -->
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
                <img
                  src="@/assets/images/equipment/equipment1.png"
                  alt=""
                  width="100%"
                />
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
                        <el-col :span="12">2019-09-05</el-col>
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
          <!-- <div class="pos-absolute t-0 r-0 mt-20 mr-20">
              <div
                class="closeBtn d-flex align-items-center justify-content-center cur-pointer p-3"
                @click="showIMG = false"
              >
                <i class="el-icon-close"></i>
              </div>
            </div> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classData: {
        "工藝大樓B1-系所專屬展覽空間": [
          {
            imgURL: require("@/assets/images/equipment/class/class1-1.png"),
          },
          {
            imgURL: require("@/assets/images/equipment/class/class1-2.png"),
          },
          {
            imgURL: require("@/assets/images/equipment/class/class1-3.png"),
          },
          {
            imgURL: require("@/assets/images/equipment/class/class1-4.png"),
          },
          {
            imgURL: require("@/assets/images/equipment/class/class1-5.png"),
          },
        ],
        "工藝大樓1樓-木材工藝創作專業工作坊教室": [
          {
            imgURL: require("@/assets/images/equipment/equipment2.png"),
          },
        ],
        "1樓陶瓷工藝創作專業工坊": [
          {
            imgURL: require("@/assets/images/equipment/equipment3.png"),
          },
        ],
        "工藝大樓2樓-金屬工藝創作專業工坊": [
          {
            imgURL: require("@/assets/images/equipment/equipment4.png"),
          },
        ],
        工藝大樓3樓教室等空間: [
          {
            imgURL: require("@/assets/images/equipment/equipment5.png"),
          },
        ],
        "工藝大樓4樓-數位工程製造室": [
          {
            imgURL: require("@/assets/images/equipment/equipment6.png"),
          },
        ],
        "工藝大樓4樓-產品設計與複媒創作專業工坊": [
          {
            imgURL: require("@/assets/images/equipment/equipment7.png"),
          },
        ],
        "工藝大樓4樓-討論與閱讀室": [
          {
            imgURL: require("@/assets/images/equipment/equipment8.png"),
          },
        ],
        "工藝大樓3樓-教授研究室": [
          {
            imgURL: require("@/assets/images/equipment/equipment9.png"),
          },
        ],
      },
      anotherClassList: [
        {
          imgURL: require("@/assets/images/equipment/equipment1.png"),
          title: "工藝大樓B1-系所專屬展覽空間",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment2.png"),
          title: "工藝大樓1樓-木材工藝創作專業工坊教室",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment3.png"),
          title: "1樓陶瓷工藝創作專業工坊",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment4.png"),
          title: "工藝大樓2樓-金屬工藝創作專業工坊",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment5.png"),
          title: "工藝大樓3樓教室等空間",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment6.png"),
          title: "工藝大樓4樓-數位工程製造室",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment7.png"),
          title: "工藝大樓4樓-產品設計與複媒創作專業工坊",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment8.png"),
          title: "工藝大樓4樓-討論與閱讀室",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment9.png"),
          title: "工藝大樓3樓-教授研究室",
        },
      ],
      showIMG: false,
      showIMG_phone: false,
    };
  },
  methods: {
    goBackEquipment() {
      this.$router.push({ name: "equipment" });
    },
  },
};
</script>

<style lang="scss">
#equipmentInfo {
  .web {
    padding-top: 420px;
    margin-left: 120px;
    .Txt-title {
      margin: 0;
      font-size: 48px;
      line-height: 56px;
      color: #596164;
    }
    .newsCard {
      background-color: white;
      &__title {
        font-weight: bold;
        font-size: 30px;
        line-height: 35px;
        letter-spacing: 0.2em;
        color: #ceb87f;
      }
      .introduceCard {
        background: #2d2d2d;
        &__classIMG {
          img:hover {
            transition: all 0.4s;
            opacity: 0.6;
          }
        }
        &__viewBtn {
          border-top: 1px solid #ceb87f;
          font-weight: bold;
          font-size: 18px;
          line-height: 160%;
          letter-spacing: 0.005em;
          color: #ffffff;
        }
      }
    }
    .anotherClass {
      overflow-x: auto;
      strong {
        font-weight: bold;
        font-size: 18px;
        line-height: 160%;
        letter-spacing: 0.005em;
        color: #2d2d2d;
      }
    }
  }

  .phone {
    .equipmentInfo {
      &__Title {
        a {
          animation-name: prevShowSlow;
          animation-duration: 2s;
          animation-fill-mode: forwards;
        }
        p {
          font-size: 22px;
          line-height: 28px;
          color: #ceb87f;
          animation-name: titleMoveRight;
          animation-duration: 1.2s;
          animation-fill-mode: forwards;
        }
      }
      &__card {
        background: #2d2d2d;
        &-information {
          strong {
            border-top: 1px solid #ceb87f;
            color: #ffffff;
          }
        }
      }
      &__about {
        &-title {
          font-size: 28px;
          line-height: 33px;
          letter-spacing: 0.005em;
          color: #ceb87f;
        }
        &-content {
          div {
            max-width: 150px;
          }
        }
      }
    }
  }

  // modal
  .classCard {
    background: #fff;
    border-radius: 8px;
    &__introduce {
      background: #2d2d2d;
      &-title {
        border-bottom: 1px solid #ceb87f;
        color: #ceb87f;
        font-size: 18px;
      }
      &-content {
        .el-col {
          &:first-child {
            color: #ceb87f;
            font-weight: bold;
            font-size: 16px;
          }
          &:last-child {
            color: #fff;
            font-size: 14px;
          }
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
        letter-spacing: 0.005em;
      }
      &-content {
        .el-col {
          &:first-child {
            color: #ceb87f;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.005em;
          }
          &:last-child {
            color: #fff;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.005em;
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

@keyframes prevShowSlow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes titleMoveRight {
  0% {
    opacity: 0;
    margin-left: -30px;
  }
  100% {
    opacity: 1;
    margin-left: 0px;
  }
}
</style>