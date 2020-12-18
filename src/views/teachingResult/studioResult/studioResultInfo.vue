<template>
  <div id="studioResultInfo">
    <div class="d-block d-mb-none pt-70">
      <div
        class="studioResultInfoTitle w-100 d-flex align-items-center flex-row"
      >
        <router-link class="pl-20" :to="{ name: 'studioResult' }">
          <img src="@/assets/images/icon/arrowLeft.png" alt="" />
        </router-link>
        <PhoneTitle
          :title="'教學成果-' + getMethod($route.params.craft)"
          :filterDate="false"
        />
      </div>
      <div class="studioResultInfoCard p-30">
        <el-row>
          <el-col :span="12" v-for="(item, index) in worksList" :key="index">
            <div
              class="px-10 pb-40 d-flex align-items-center justify-content-center flex-column"
            >
              <img
                :src="item.imgURL"
                alt=""
                width="100%"
                @click="getTouchIMG(item.imgURL)"
              />
              <div class="studioResultInfoCard__title mt-15">
                <p class="m-0 pt-10 px-20">陶瓷作品{{ index + 1 }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- modal -->
    <div class="modal" v-if="showIMG">
      <div class="modal__content">
        <div class="mx-20 d-flex align-items-center justify-content-center">
          <div class="worksInfo w-100">
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
                <img
                  :src="enlargeIMG"
                  alt=""
                  width="100%"
                />
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
                <div class="w-100 worksInfo__introduce">
                  <div class="px-30 py-10">
                    <div
                      class="w-100 worksInfo__introduce-title text-left pb-5"
                    >
                      <strong>陶瓷作品</strong>
                    </div>
                    <div class="w-100 pr-60 worksInfo__introduce-content">
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
      worksList: [
        {
          imgURL: require("@/assets/images/studio/studio1.png"),
        },
        {
          imgURL: require("@/assets/images/studio/studio2.png"),
        },
        {
          imgURL: require("@/assets/images/studio/studio3.png"),
        },
        {
          imgURL: require("@/assets/images/studio/studio4.png"),
        },
        {
          imgURL: require("@/assets/images/studio/studio5.png"),
        },
        {
          imgURL: require("@/assets/images/studio/studio6.png"),
        },
        {
          imgURL: require("@/assets/images/studio/studio7.png"),
        },
        {
          imgURL: require("@/assets/images/studio/studio8.png"),
        },
        {
          imgURL: require("@/assets/images/studio/studio9.png"),
        },
      ],
      enlargeIMG: "",
      showIMG: false,
    };
  },
  computed: {
    getMethod() {
      return (data) => {
        let craftName;
        switch (data) {
          case "CERAMICS":
            craftName = "陶瓷";
            break;
          case "METALWORKING":
            craftName = "金工";
            break;
          case "WOODWORKING":
            craftName = "木工";
            break;
          case "PRODUCT":
            craftName = "產品";
            break;
          default:
            break;
        }
        return craftName;
      };
    },
  },
  methods: {
    getTouchIMG(url) {
      this.enlargeIMG = url;
      this.showIMG = true;
    },
  },
};
</script>

<style lang="scss">
#studioResultInfo {
  .studioResultInfoTitle {
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
  .studioResultInfoCard {
    background: #2d2d2d;
    &__title {
      border-top: 1px solid #ceb87f;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      color: #ffffff;
    }
  }

  .worksInfo {
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