<template>
  <div id="award">
    <div class="web d-none d-mb-block">
      <el-row :gutter="20" class="w-100 d-flex align-items-center awardContent" v-for="(item, index) in awardData" :key="'AD__' + index">
        <el-col :span="5">
          <div>
            <b>{{ item.releaseDate | moment("YYYY-MM-DD") }}</b>
          </div>
        </el-col>
        <el-col :span="16">
          <div>{{ item.title }}</div>
        </el-col>
        <el-col :span="3" class="text-right">
          <span class="cur-pointer" @click="viewInfo(item)">
            <img src="@/assets/images/icon/links.png" alt="" />
          </span>
        </el-col>
      </el-row>

      <!-- <div class="w-100 mt-70">
        <Pagination :needPage="true" :pageNumber="5" />
      </div> -->
    </div>

    <div class="phone d-block d-mb-none">
      <div class="pt-40 pb-80 px-20">
        <div class="w-100 awardCard d-flex flex-row mb-15" v-for="(item, index1) in awardData" :key="index1" @click="goAwardInfo(item.id)">
          <div class="awardCard-date">
            <div class="px-10 py-15 d-flex flex-column align-items-center">
              <p class="m-0">{{ item.releaseDate | moment("YYYY") }}</p>
              <span class="my-8"></span>
              <p class="m-0">{{ item.releaseDate | moment("MM-DD") }}</p>
            </div>
          </div>
          <div class="awardCard-context d-flex align-items-center">
            <div class="p-15">
              <p class="m-0">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <div class="modal d-flex justify-content-center" v-if="showNewsInfo">
      <div class="modal__content">
        <div class="p-40">
          <div class="w-100 pos-relative d-flex align-items-start justify-content-center flex-column">
            <div class="p-10 modal__content--tag">
              <span class="d-inline-flex">競賽得獎</span>
            </div>
            <div class="w-100 d-flex flex-column justify-content-center modal__content--title mt-20">
              <label>TITLE</label>
              <strong>{{ selectNews.title }}</strong>
            </div>
            <div class="w-100 d-flex flex-column justify-content-center modal__content--update mt-20">
              <label>UPDATE</label>
              <p class="m-0">
                {{ selectNews.releaseDate | moment("YYYY-MM-DD") }}
              </p>
            </div>
            <div class="w-100 modal__content--summary mt-30">
              <p class="m-0">{{ selectNews.summury }}</p>
            </div>
            <div class="w-100 modal__content--card mt-20">
              <vue-editor v-model="selectNews.contents" :disabled="true"></vue-editor>
            </div>
            <div class="w-100 mt-40" v-if="!!selectNews.pics">
              <el-row>
                <el-col class="p-8" :span="12" v-for="item in JSON.parse(selectNews.pics)" :key="item.id">
                  <el-image style="width: 100%; height: 300px" fit="cover" :src="item.files" :alt="item.fileName"></el-image>
                  <div class="p-4">
                    <strong class="font-s-18">{{item.fileName}}</strong>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="w-100 mt-40" v-if="selectNews.annexFile">
              <strong class="font-s-24">附檔</strong>
              <p class="m-0 mt-10">
                （本網站建議使用Chrome瀏覽器以避免系統問題）
              </p>
              <div class="w-100 d-flex flex-row flex-wrap mt-20">
                <el-row class="w-100">
                  <el-col :xl="4" :lg="6" v-for="item in selectNews.annexFile" :key="item.id">
                    <div class="modal__content--fileCard d-flex align-items-center justify-content-center mt-10" @mouseenter="showfileInfo(item)" @mouseleave="closefileInfo(item)">
                      <a v-if="!fileInfo[item.id]" :href="item.files" :download="item.files" target="_blank">
                        <img src="@/assets/images/icon/pdf_icon.png" :alt="item.fileName" width="40px" />
                      </a>
                      <div class="w-100 h-100 backCard" v-else>
                        <a class="w-100 h-100 d-flex align-items-center justify-content-center text-decoration-none" :href="item.files" :download="item.files" target="_blank">
                          <strong>{{ item.fileName }}</strong>
                        </a>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="pos-absolute t-0 r-0">
              <div class="modal__close d-flex align-items-center justify-content-center cur-pointer" @click="showNewsInfo = false">
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
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      listQuery: {
        TeachTypeId: "SYS_TEACH_COMPETITION",
        Years: "",
        page: 1,
        limit: 999,
        key: undefined,
      },
      awardData: [],
      selectNews: {},
      showNewsInfo: false,
      fileInfo: {},
    };
  },
  methods: {
    viewInfo(data) {
      this.showNewsInfo = true;
      this.selectNews = data;
      this.selectNews.annexFile = JSON.parse(data.annexFile);
    },
    goAwardInfo(id) {
      this.$router.push({ name: "awardInfo", params: { id: id } });
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
    async getList() {
      await this.$api.award(this.listQuery).then((res) => {
        this.awardData = res.data.data;
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
#award {
  .web {
    padding-top: 0 !important;
    margin-left: 0 !important;
    padding: 20px 250px;
    .awardContent {
      border-bottom: 1px solid #c4c4c4;
      padding: 25px 0px;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #77767b;
    }
  }

  .phone {
    background: #2d2d2d;
    .awardCard {
      background: #efefef;
      border-radius: 8px;
      &-date {
        min-width: 85px;
        div {
          background: #ceb87f;
          border-radius: 8px;
          p {
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.235em;
            color: #ffffff;
          }
          span {
            width: 20px;
            height: 3px;
            background: #ffffff;
          }
        }
      }
      &-context {
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.2em;
        color: #596164;
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
    &__close {
      width: 40px;
      height: 40px;
      background: transparent;
      border: 2px solid #231815;
      border-radius: 50%;
      transition: all 0.6s;
      &:hover {
        background: #ffffff;
        border: 2px solid #596164;
      }
      i {
        font-size: 28px;
        font-weight: bold;
        &:hover {
          color: #596164;
        }
      }
    }
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
}
</style>