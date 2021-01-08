<template>
  <div id="studioResult">
    <!-- web -->
    <div class="web d-none d-mb-block">
      <div class="w-100 h-100 studioBG">
        <div class="d-flex justify-content-around studioGroup">
          <div
            class="m-item d-flex align-items-center flex-column"
            v-for="(item, index) in crafts"
            :key="index"
          >
            <img
              :src="item.imgURL"
              class="m-item-image w-100 cur-pointer"
              v-scroll-to="{ el: '#works', offset: -120, duration: 1500 }"
              @click="filterType(item.value)"
            />
            <div class="m-item-title d-flex justify-content-center">
              <div
                class="craftCard d-flex align-items-center justify-content-center flex-column text-center pt-40 pb-20"
              >
                <div class="mb-30">
                  <p class="m-0">{{ item.name_ch }}</p>
                  <p class="m-0">{{ item.name_en }}</p>
                </div>
                <div class="pt-10 craftCard-borTop">
                  <a
                    v-scroll-to="{ el: '#works', offset: -120, duration: 1500 }"
                    class="text-decoration-none cur-pointer"
                    @click="filterType(item.value)"
                    >VIEW MORE</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="works" class="w-100 studioCard mt-60">
        <div class="px-150 py-30" v-if="worksList.length > 0">
          <el-row>
            <el-col
              class="mb-40"
              :span="8"
              v-for="(item, index_1) in worksList"
              :key="item.id"
            >
              <div
                class="w-100 d-flex align-items-center justify-content-center flex-column"
              >
                <div
                  class="studioCard__workPic w-100 d-flex align-items-center justify-content-center"
                >
                  <el-image
                    :src="item.pics"
                    fit="cover"
                    style="width: 380px; height: 300px"
                    @click="getTouchIMG(index_1)"
                  ></el-image>
                </div>
                <div
                  class="studioCard__content w-100 d-flex align-items-center justify-content-center mt-40"
                >
                  <p class="m-0 d-inline-flex p-10">{{ item.title }}</p>
                </div>
              </div>
            </el-col>
          </el-row>
          <!-- <div
            class="w-100 py-50 d-flex align-items-center justify-content-center"
          >
            <Pagination :needPage="true" :pageNumber="5" />
          </div> -->
        </div>

        <div class="w-100 py-50 text-center" v-else>
          <label class="font-s-36">尚無作品</label>
        </div>
      </div>
    </div>

    <!-- phone -->
    <div class="phone d-block d-mb-none">
      <div class="pl-30 pt-70 pb-60 mb-80">
        <div class="craftsBG">
          <div class="px-25 studioBG__trans">
            <el-row>
              <el-col :span="12" v-for="(item, index1) in crafts" :key="index1">
                <div
                  class="w-100 d-flex align-items-center justify-content-center flex-column"
                >
                  <img
                    :src="item.imgURL"
                    alt=""
                    width="110px"
                    v-scroll-to="{
                      el: '#worksPhone',
                      offset: 500,
                      duration: 1000,
                    }"
                    @click="filterType(item.value)"
                  />
                  <div class="b-0 craftCard">
                    <div class="p-10">
                      <div class="p-10 craftCard__title text-center">
                        <p class="m-0">{{ item.name_ch }}</p>
                      </div>
                      <a
                        v-scroll-to="{
                          el: '#worksPhone',
                          offset: 500,
                          duration: 1000,
                        }"
                        class="text-decoration-none"
                        @click="filterType(item.value)"
                      >
                        VIEW MORE
                      </a>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>

        <div id="worksPhone" class="studioBG mt-50">
          <el-row v-if="worksList.length > 0">
            <el-col
              :span="12"
              v-for="(item, index_2) in worksList"
              :key="item.id"
            >
              <div class="p-10">
                <div
                  class="studioBG__info w-100 d-flex align-items-center justify-content-center flex-column"
                >
                  <el-image
                    :src="item.pics"
                    fit="cover"
                    style="width: 150px; height: 120px"
                    @click="getTouchIMG_phone(index_2)"
                  ></el-image>
                  <div class="w-100 text-center">
                    <strong class="mt-15 pt-10 px-10">{{ item.title }}</strong>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>

          <div class="w-100" v-else>
            <div class="py-50 text-center">
              <label class="font-s-28">尚無作品</label>
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
                  <img :src="worksList[selectNum].pics" alt="" width="700px" />
                  <div
                    class="d-flex align-items-center justify-content-center flex-column"
                  >
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <div class="w-100 text-right">
                        <img
                          v-if="selectNum > 0"
                          class="mr-20 cur-pointer"
                          src="@/assets/images/arrowLeft_btn.png"
                          alt="上一張"
                          @click="prevPic"
                        />
                      </div>
                      <div class="w-100 text-left">
                        <img
                          v-if="selectNum < listCount"
                          class="ml-20 cur-pointer"
                          src="@/assets/images/arrowRight_btn.png"
                          alt="下一張"
                          @click="nextPic"
                        />
                      </div>
                    </div>
                    <div class="classCard__introduce d-inline-flex">
                      <div class="px-50 pt-60 pb-80">
                        <div
                          class="w-100 classCard__introduce-title text-left pb-5"
                        >
                          <strong>{{ worksList[selectNum].title }}</strong>
                        </div>
                        <div class="w-100 pr-60 classCard__introduce-content">
                          <el-row class="pt-10">
                            <el-col :span="12">上傳時間</el-col>
                            <el-col :span="12">
                              {{
                                worksList[selectNum].createDate
                                  | moment("YYYY-MM-DD")
                              }}
                            </el-col>
                          </el-row>
                          <el-row class="pt-10">
                            <el-col :span="12">上傳者</el-col>
                            <el-col :span="12">
                              {{ worksList[selectNum].createUserName }}
                            </el-col>
                          </el-row>
                        </div>
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
                <img :src="worksList[selectNum].pics" alt="" width="100%" />
                <div
                  class="w-100 d-flex align-items-center justify-content-between my-8"
                >
                  <div class="w-100 text-right">
                    <img
                      v-if="selectNum > 0"
                      class="mr-20 cur-pointer"
                      src="@/assets/images/arrowLeft_btn.png"
                      alt="上一張"
                      @click="prevPic"
                    />
                  </div>
                  <div class="w-100 text-left">
                    <img
                      v-if="selectNum < listCount"
                      class="ml-20 cur-pointer"
                      src="@/assets/images/arrowRight_btn.png"
                      alt="下一張"
                      @click="nextPic"
                    />
                  </div>
                </div>
                <div class="w-100 classCardPhone__introduce">
                  <div class="px-30 py-10">
                    <div
                      class="w-100 classCardPhone__introduce-title text-left pb-5"
                    >
                      <strong>{{ worksList[selectNum].title }}</strong>
                    </div>
                    <div class="w-100 pr-60 classCardPhone__introduce-content">
                      <el-row class="pt-10">
                        <el-col :span="12">上傳時間</el-col>
                        <el-col :span="12">{{
                          worksList[selectNum].createDate | moment("YYYY-MM-DD")
                        }}</el-col>
                      </el-row>
                      <el-row class="pt-10">
                        <el-col :span="12">上傳者</el-col>
                        <el-col :span="12">
                          {{ worksList[selectNum].createUserName }}
                        </el-col>
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
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      listQuery: {
        teachTypeId: "SYS_TEACH_WORKSHOP",
        classTypeId: "",
        Years: "",
        page: 1,
        limit: 20,
        key: undefined,
      },
      crafts: [
        {
          imgURL: require("@/assets/images/craft/craft_1.png"),
          name_ch: "陶瓷",
          name_en: "CERAMICS",
          value: "SYS_CLASSTYPE_CERAMICS",
        },
        {
          imgURL: require("@/assets/images/craft/craft_2.png"),
          name_ch: "金工",
          name_en: "METAL",
          value: "SYS_CLASSTYPE_METAL",
        },
        {
          imgURL: require("@/assets/images/craft/craft_3.png"),
          name_ch: "木工",
          name_en: "WOOD",
          value: "SYS_CLASSTYPE_WOOD",
        },
        {
          imgURL: require("@/assets/images/craft/craft_4.png"),
          name_ch: "產品",
          name_en: "PRODUCTION",
          value: "SYS_CLASSTYPE_PRODUCTION",
        },
      ],
      worksList: [],
      listCount: "",
      selectNum: "",
      showIMG: false,
      showIMG_phone: false,
    };
  },
  methods: {
    getTouchIMG(num) {
      this.selectNum = num;
      this.showIMG = true;
    },
    getTouchIMG_phone(num) {
      this.selectNum = num;
      this.showIMG_phone = true;
    },
    filterType(type) {
      this.listQuery.classTypeId = type;
      this.getList();
    },
    prevPic() {
      this.selectNum--;
    },
    nextPic() {
      this.selectNum++;
    },
    getList() {
      this.$api.award(this.listQuery).then((res) => {
        this.worksList = res.data.data;
        this.listCount = res.data.count - 1;
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss">
#studioResult {
  .web {
    padding-top: 0 !important;
    margin-left: 0 !important;
    margin-top: 60px;
    .studioBG {
      height: 500px;
      background: #2d2d2d;
      .studioGroup {
        width: calc(100% - 120px);
        position: absolute;
        margin-top: -50px;

        .m-item-title {
          -webkit-box-ordinal-group: 2;
          order: 1;
        }

        .m-item-image {
          -webkit-box-ordinal-group: 3;
          order: 2;
        }

        > .m-item:nth-child(odd) {
          .m-item-title {
            -webkit-box-ordinal-group: 3;
            order: 2;
          }

          .m-item-image {
            -webkit-box-ordinal-group: 2;
            order: 1;
          }
        }

        .craftCard {
          width: 200px;
          height: 200px;
          border: 2px solid #596164;
          box-sizing: border-box;
          p {
            font-weight: bold;
            font-size: 18px;
            color: white;
          }
          a {
            font-size: 18px;
            line-height: 21px;
            color: #ceb87f;
          }
          &-borTop {
            border-top: 1px solid #ceb87f;
          }
        }
      }
      .craftCard {
        width: 200px;
        height: 200px;
        border: 2px solid #596164;
        box-sizing: border-box;
        p {
          font-weight: bold;
          font-size: 18px;
          color: white;
        }
        a {
          font-size: 18px;
          line-height: 21px;
          color: #ceb87f;
        }
        &-borTop {
          border-top: 1px solid #ceb87f;
        }
      }
    }
    .studioCard {
      background: #2d2d2d;
      &__workPic {
        img {
          transition: all 0.6s;
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
        }
      }
      &__content {
        p {
          border-top: 1px solid #ceb87f;
          font-weight: bold;
          font-size: 18px;
          line-height: 160%;
          color: #ffffff;
        }
      }
      label {
        color: #ceb87f;
        font-weight: bold;
      }
    }
  }

  .phone {
    background: white;
    .craftsBG {
      background: #2d2d2d;
      &__trans {
        transform: translateY(-2rem);
      }
      .craftCard {
        border: 1px solid #596164;
        transform: translateY(-1rem);
        &__title {
          font-weight: bold;
          font-size: 12px;
          line-height: 120%;
          letter-spacing: 0.015em;
          color: #ffffff;
          border-bottom: 1px solid #ceb87f;
        }
        a {
          font-size: 10px;
          line-height: 12px;
          color: #ceb87f;
        }
      }
    }
    .studioBG {
      background: #2d2d2d;
      &__info {
        strong {
          border-top: 1px solid #ceb87f;
          color: #ffffff;
          overflow: hidden;
          -webkit-line-clamp: 1;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
      label {
        color: #ceb87f;
        font-weight: bold;
        letter-spacing: 0.2em;
      }
    }
  }

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