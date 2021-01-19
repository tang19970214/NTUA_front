<template>
  <div class="alumni">
    <div class="web d-none d-mb-block">
      <p class="m-0 Txt-title">Alumni</p>
      <div class="mt-70 newsCard">
        <div class="newsCard-sortText">
          <router-link
            class="mr-35 mb-15 d-flex align-items-center justify-content-end flex-row text-decoration-none"
            :class="{ active: $route.name == item.pathURL }"
            :to="{ name: item.pathURL }"
            v-for="(item, index) in alumniSort"
            :key="'NS__' + index"
          >
            <p class="m-0">{{ item.pathName }}</p>
            <i class="el-icon-minus"></i>
            <p class="m-0">0{{ index + 1 }}</p>
          </router-link>
        </div>

        <LoadShowIMG />

        <div class="w-100 newsCard-title">
          <div class="p-60">
            <div class="w-100 d-flex flex-row">
              <div class="w-100">
                <p class="m-0">系友專區</p>
              </div>
            </div>
          </div>
        </div>

        <div class="newsCard-contentCard">
          <div class="newsCard-contentCard_title d-flex align-items-center">
            <p class="m-0" style="min-width: 220px; max-width: 220px">
              公告日期
            </p>
            <p class="m-0">標題</p>
            <p class="m-0 ml-auto pr-10">附件下載</p>
          </div>
          <div class="w-100">
            <div
              class="alumniTable w-100 d-flex align-items-center flex-row"
              v-for="item in alumniData"
              :key="item.id"
              @click="viewInfo(item)"
            >
              <p class="m-0" style="min-width: 220px; max-width: 220px">
                {{ item.releaseDate | moment("YYYY-MM-DD") }}
              </p>
              <p class="m-0">
                {{ item.title }}
              </p>
              <span class="ml-auto" v-if="!!getFileObj(item.annexFile)[0]">
                <a
                  class="ml-auto"
                  :href="items.files"
                  :download="items.fileName"
                  target="_blank"
                  v-for="(items, index) in getFileObj(item.annexFile)"
                  :key="'AF__' + index"
                >
                  <el-tooltip
                    :content="items.fileName"
                    placement="bottom"
                    effect="light"
                  >
                    <img src="@/assets/images/icon/links.png" alt="" />
                  </el-tooltip>
                </a>
              </span>
            </div>

            <!-- <div class="w-100 mt-90">
              <Pagination :needPage="true" :pageNumber="5" />
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb-none pt-70">
      <div class="w-100 d-flex align-items-center flex-row">
        <div class="ml-20">
          <img
            src="@/assets/images/icon/arrowLeft.png"
            alt="返回上一頁"
            @click="goPrev"
          />
        </div>
        <PhoneTitle title="系友優秀表現" :filterDate="false" />
      </div>
      <div class="alumniCard pl-30 py-30">
        <div
          class="w-100 align-items-center justify-content-center flex-column"
        >
          <div class="w-100 alumniCard__title">
            <el-row class="py-20">
              <el-col class="text-center" :span="8">公告日期</el-col>
              <el-col class="text-left" :span="16">標題</el-col>
            </el-row>
          </div>
          <div
            class="w-100 alumniCard__content"
            v-for="(item, index1) in alumniData"
            :key="index1"
            @click="goInfo(item.id)"
          >
            <el-row class="py-20">
              <el-col class="text-center" :span="8">
                <div
                  class="w-100 d-flex align-items-center justify-content-center flex-column"
                >
                  <p class="m-0">
                    {{ item.releaseDate | moment("YYYY") }}
                  </p>
                  <p class="m-0">
                    {{ item.releaseDate | moment("MM-DD") }}
                  </p>
                </div>
              </el-col>
              <el-col class="text-left" :span="16">
                <p class="m-0 pr-10">
                  {{ item.title }}
                </p>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <div class="modal d-flex justify-content-center" v-if="showNewsInfo">
      <div class="modal__content">
        <div
          class="p-40 pos-relative d-flex align-items-start justify-content-center flex-column"
        >
          <div class="p-10 modal__content--tag">
            <span class="d-inline-flex">系友優秀表現</span>
          </div>
          <div
            class="w-100 d-flex flex-column justify-content-center modal__content--title mt-20"
          >
            <label>TITLE</label>
            <strong>{{ selectNews.title }}</strong>
          </div>
          <div
            class="w-100 d-flex flex-column justify-content-center modal__content--update mt-20"
          >
            <label>UPDATE</label>
            <p class="m-0">
              {{ selectNews.modifyDate | moment("YYYY-MM-DD") }}
            </p>
          </div>
          <div class="w-100 modal__content--card mt-20">
            <vue-editor
              v-model="selectNews.contents"
              :disabled="true"
            ></vue-editor>
          </div>
          <div class="w-100 mt-40" v-if="selectNews.annexFile">
            <strong class="font-s-24">附檔</strong>
            <p class="m-0 mt-10">
              （本網站建議使用Chrome瀏覽器以避免系統問題）
            </p>
            <div class="w-100 d-flex flex-row flex-wrap mt-20">
              <el-row class="w-100">
                <el-col :xl="4" :lg="6">
                  <div
                    class="modal__content--fileCard d-flex align-items-center justify-content-center mt-10"
                    @mouseenter="showfileInfo(selectNews.annexFile)"
                    @mouseleave="closefileInfo(selectNews.annexFile)"
                  >
                    <a
                      v-if="!fileInfo[selectNews.annexFile.id]"
                      :href="selectNews.annexFile.files"
                      :download="selectNews.annexFile.files"
                      target="_blank"
                    >
                      <img
                        src="@/assets/images/icon/pdf_icon.png"
                        :alt="selectNews.annexFile.fileName"
                        width="40px"
                      />
                    </a>
                    <div class="w-100 h-100 backCard" v-else>
                      <a
                        class="w-100 h-100 d-flex align-items-center justify-content-center text-decoration-none"
                        :href="selectNews.annexFile.files"
                        :download="selectNews.annexFile.files"
                        target="_blank"
                      >
                        <strong>{{ selectNews.annexFile.fileName }}</strong>
                      </a>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="pos-absolute t-0 r-0 mt-20 mr-20">
            <div
              class="closeModalBtn d-flex align-items-center justify-content-center cur-pointer"
              @click="showNewsInfo = false"
            >
              <i class="el-icon-close"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import LoadShowIMG from "@/components/LoadShowIMG.vue";
import PhoneTitle from "@/components/PhoneTitle.vue";

export default {
  components: {
    Pagination,
    LoadShowIMG,
    PhoneTitle,
  },
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 20,
        key: undefined,
      },
      alumniData: [],
      showNewsInfo: false,
      selectNews: {},
      fileInfo: {},
      alumniSort: [
        {
          pathURL: "alumni",
          pathName: "系友專區",
        },
      ],
    };
  },
  computed: {
    getPathName() {
      return (data) => {
        let pName = "";
        data.forEach((item) => {
          if (this.$route.name == item.pathURL) {
            pName = item.pathName;
          }
        });
        return pName;
      };
    },
    getFileObj() {
      return (file) => {
        let obj = file ? JSON.parse(file) : "";
        return [obj];
      };
    },
  },
  methods: {
    goPrev() {
      this.$router.go(-1);
    },
    viewInfo(data) {
      this.showNewsInfo = true;
      const newVal = {
        id: data.id,
        title: data.title,
        modifyDate: data.modifyDate,
        contents: data.contents,
        annexFile: data.annexFile ? JSON.parse(data.annexFile) : "",
      };
      this.selectNews = newVal;
    },
    showfileInfo(data) {
      this.fileInfo = [this.selectNews].reduce(
        (a, b) => ((a[b.id] = true), a),
        {}
      );
      this.fileInfo[data?.id] = !this.fileInfo[data?.id];
    },
    closefileInfo(data) {
      this.fileInfo = [this.selectNews].reduce(
        (a, b) => ((a[b.id] = false), a),
        {}
      );
    },
    goInfo(id) {
      this.$router.push({ name: "alumniInfo", params: { id: id } });
    },
    async getList() {
      await this.$api.alumni(this.listQuery).then((res) => {
        this.alumniData = res.data.data;
        // this.activityInfo[0].attachedFile = JSON.parse(
        //   this.activityInfo[0].attachedFile
        // );
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
.alumni {
  .web {
    padding-top: 420px;
    margin-left: 120px;

    .Txt-title {
      font-size: 48px;
      line-height: 56px;
      color: #596164;
    }

    .newsCard {
      background-color: white;
      padding-bottom: 90px;
      &-sortText {
        position: absolute;
        right: 0;
        z-index: 10;
        margin-top: 45px;
        a {
          font-weight: 400;
          font-size: 24px;
          line-height: 210%;
          letter-spacing: 0.25em;
          color: #52505a;
          cursor: pointer;
          &:hover {
            color: #563f05;
            font-weight: bold;
          }
        }
      }
      .active {
        color: #563f05;
        font-weight: bold;
      }
      &-title {
        p {
          font-size: 64px;
          line-height: 75px;
          color: #ceb87f;
        }
        &_chooseYear {
          select {
            width: 150px;
            height: 35px;
            border: 0;
            border-radius: 15px;
            background: #ceb87f;
            text-align-last: center;
            font-size: 18px;
            line-height: 21px;
            color: #52505a;
            cursor: pointer;
          }
        }
      }
      &-contentCard {
        background: #2d2d2d;
        padding: 130px 220px 50px 60px;
        &_title {
          width: 100%;
          padding: 40px 30px;
          background: #c4c4c4;
        }
        .alumniTable {
          padding: 30px;
          border-bottom: 1px solid #000000;
          transition: all 0.6s;
          cursor: pointer;
          p {
            font-size: 20px;
            line-height: 25px;
            letter-spacing: 0.2em;
            color: #ffffff;
            overflow-wrap: anywhere;
          }
          a {
            font-size: 20px;
            line-height: 25px;
            letter-spacing: 0.2em;
            color: #ffffff;
            max-width: 150px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &:hover {
            background: #596164;
          }
        }
      }
    }
  }

  .phone {
    .alumniCard {
      min-height: calc(100vh - 530px);
      background: #2d2d2d;
      &__title {
        background: #c4c4c4;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.2em;
        color: #2d2d2d;
      }
      &__content {
        border-bottom: 1px solid #000000;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.2em;
        color: #ffffff;
      }
    }
  }

  .modal {
    &__content {
      width: 50%;
      overflow-y: auto;
      background: #c4c4c4;
      border-radius: 8px;
      &--tag {
        background: #2d2d2d;
        font-size: 18px;
        letter-spacing: 0.2em;
        color: #ffffff;
      }
      &--title {
        font-size: 14px;
        letter-spacing: 0.2em;
        color: #2d2d2d;
      }
      &--update {
        font-size: 14px;
        letter-spacing: 0.2em;
        label {
          color: #2d2d2d;
        }
        p {
          color: #ffffff;
        }
      }
      &--summary {
        font-weight: bold;
        font-size: 14px;
        letter-spacing: 0.2em;
        color: #f29126;
      }
      &--card {
        background: #ffffff;
        max-height: 350px;
        overflow-y: auto;
        .ql-editor {
          min-height: 50px;
        }
        .ql-toolbar {
          display: none !important;
        }
        .ql-container {
          border: none !important;
          ol {
            padding-left: 0;
          }
        }
      }
      &--fileCard {
        border: 1px solid #ffffff;
        width: 140px;
        height: 100px;
        background: transparent;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
        .backCard {
          background: #ffffff;
          strong {
            font-size: 12px;
            letter-spacing: 0.2em;
            color: #000000;
          }
        }
      }
    }
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
}
</style>