<template>
  <div id="equipmentInfo">
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
  // modal
  .classCard {
    background: #fff;
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
  .closeBtn {
    background: #fff;
    border: 2px solid #ceb87f;
    border-radius: 50%;
    color: #ceb87f;
    font-size: 32px;
    transition: all 0.5s;
    &:hover {
      background: #ceb87f;
      border: 2px solid #ceb87f;
      color: #FFF;
    }
  }
}
</style>