<template>
  <div id="equipmentInfo">
    <div class="web d-none d-mb-block">
      <div class="w-100 text-left">
        <p class="Txt-title">教學設備與空間</p>
      </div>
      <div class="mt-70 newsCard">
        <div class="px-150 pt-90 d-flex align-items-center">
          <router-link
            class="pr-20 d-flex align-items-center"
            :to="{ name: 'equipment' }"
          >
            <img src="@/assets/images/icon/arrowLeft.png" alt="" width="30px" />
          </router-link>
          <strong class="newsCard__title">{{ albumTitle }}</strong>
        </div>
        <div class="py-100 w-100 introduceCard mt-20">
          <div class="px-150 py-30">
            <el-row>
              <el-col
                class="mb-60"
                :span="8"
                v-for="(item, index) in classData"
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
                        :src="item.links"
                        alt=""
                        @click="getTouchIMG(item)"
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
              <img
                class="cur-pointer"
                :src="item.coverPic"
                alt=""
                @click="showIntroduce(item)"
                v-if="item.id !== $route.params.id"
              />
              <img :src="item.coverPic" alt="" v-else />
              <div class="mt-20">
                <strong>{{ item.title }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb-none pt-70">
      <div
        class="equipmentInfo__Title w-100 d-flex align-items-center flex-row"
      >
        <router-link class="pl-20" :to="{ name: 'equipment' }">
          <img src="@/assets/images/icon/arrowLeft.png" alt="" />
        </router-link>
        <p class="m-0 pl-10">{{ albumTitle }}</p>
      </div>

      <div class="equipmentInfo__card mt-5">
        <div class="p-20">
          <el-row>
            <el-col :span="12" v-for="item in classData" :key="item.id">
              <div class="p-10">
                <div
                  class="equipmentInfo__card-information w-100 d-flex align-items-center justify-content-center flex-column"
                >
                  <img
                    :src="item.links"
                    alt=""
                    width="100%"
                    @click="getTouchIMG_phone(item)"
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
              <img
                :src="item.coverPic"
                alt=""
                width="200px"
                @click="showIntroduce(item)"
              />
              <div class="mt-10 text-center">
                <strong class="font-s-14">{{ item.title }}</strong>
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
                  <img :src="enlargeIMG" alt="" width="700px" />
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
                          <el-col :span="12">{{
                            enContent.createDate | moment("YYYY-MM-DD")
                          }}</el-col>
                        </el-row>
                        <el-row class="pt-10">
                          <el-col :span="12">上傳者</el-col>
                          <el-col :span="12">
                            {{ enContent.createUserName }}
                          </el-col>
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
                <img :src="enlargeIMG" alt="" width="100%" />
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
                        <el-col :span="12">{{
                          enContent.createDate | moment("YYYY-MM-DD")
                        }}</el-col>
                      </el-row>
                      <el-row class="pt-10">
                        <el-col :span="12">上傳者</el-col>
                        <el-col :span="12">
                          {{ enContent.createUserName }}
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
export default {
  data() {
    return {
      listQuery: {
        RoomId: this.$route.params.id,
        page: 1,
        limit: 20,
        key: undefined,
      },
      classListQuery: {
        page: 1,
        limit: 20,
        key: undefined,
      },
      albumTitle: "",
      classData: [],
      anotherClassList: [],
      enlargeIMG: "",
      enContent: {},
      showIMG: false,
      showIMG_phone: false,
    };
  },
  methods: {
    getTouchIMG(item) {
      this.enlargeIMG = item.links;
      this.enContent = {
        createUserName: item.createUserName,
        createDate: item.createDate,
      };
      this.showIMG = true;
    },
    getTouchIMG_phone(item) {
      this.enlargeIMG = item.links;
      this.enContent = {
        createUserName: item.createUserName,
        createDate: item.createDate,
      };
      this.showIMG_phone = true;
    },
    showIntroduce(data) {
      this.$router.push({
        name: "equipmentInfo",
        params: { id: data.id },
      });
    },
    getAlbumTitle() {
      this.$api.getclassrooms({ id: this.$route.params.id }).then((res) => {
        this.albumTitle = res.data.result.title;
      });
    },
    getList() {
      this.$api.classroomPics(this.listQuery).then((res) => {
        this.classData = res.data.data;
      });
    },
    getMenu() {
      this.$api.classrooms(this.classListQuery).then((res) => {
        this.anotherClassList = res.data.data;
      });
    },
  },
  mounted() {
    this.getAlbumTitle();
    this.getList();
    this.getMenu();
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
        color: #2d2d2d;
      }
      img:hover {
        transition: all 0.4s;
        opacity: 0.8;
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