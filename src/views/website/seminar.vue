<template>
  <div id="seminar">
    <div class="web d-none d-mb-block">
      <div class="tabGroup">
        <span class="tabGroup__tag p-8 mx-8" :class="{'tabGroup__tag--active': item.id == defaultId}" v-for="item in tabList" :key="item.id" @click="changeTab(item)">
          <a>{{item.label}}</a>
        </span>
      </div>

      <div class="workCard mt-16">
        <div class="w-100" v-if="defaultId !== 1">
          <vue-editor v-model="seminarList.contents" :disabled="true"></vue-editor>
        </div>
        <div class="w-100" v-else>
          <div class="newsTable w-100 d-flex align-items-center flex-row cur-pointer" v-for="item in newsList" :key="item.id" @click="viewInfo(item)">
            <p class="m-0" style="min-width: 220px; max-width: 220px">
              {{ item.releaseDate | moment("YYYY-MM-DD") }}
            </p>
            <p class="m-0">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb-none">
      <div class="w-100">
        <el-select class="w-100" placeholder="請選擇" no-data-text="暫無數據" v-model="defaultId" size="mini" @change="changeOption">
          <el-option v-for="item in tabList" :key="item.id" :label="item.label" :value="item.id">
          </el-option>
        </el-select>
      </div>

      <div class="darkBG px-10 py-30">
        <div class="w-100" v-if="defaultId !== 1">
          <vue-editor v-model="seminarList.contents" :disabled="true"></vue-editor>
        </div>
        <div class="w-100 newsInfo" v-else>
          <div class="w-100 newsInfo__card d-flex flex-row mb-15" v-for="item in newsList" :key="item.id" @click="goSeminarInfo(item.id)">
            <div class="newsInfo__card-date">
              <div class="p-15 d-flex flex-column align-items-center">
                <p class="m-0">{{ item.releaseDate | moment("YYYY") }}</p>
                <span class="my-8"></span>
                <p class="m-0">{{ item.releaseDate | moment("MM-DD") }}</p>
              </div>
            </div>
            <div class="newsInfo__card-context d-flex align-items-center">
              <div class="p-15">
                <p class="m-0">{{ item.title }}</p>
              </div>
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
              <span class="d-inline-flex">最新消息</span>
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
            <div class="w-100 mt-40" v-if="selectNews.attachedFile">
              <strong class="font-s-24">附檔</strong>
              <p class="m-0 mt-10">
                （本網站建議使用Chrome瀏覽器以避免系統問題）
              </p>
              <div class="w-100 d-flex flex-row flex-wrap mt-20">
                <el-row class="w-100">
                  <el-col :xl="4" :lg="6" v-for="item in selectNews.attachedFile" :key="item.id">
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
import PhoneTitle from "@/components/PhoneTitle.vue";

export default {
  components: {
    PhoneTitle,
  },
  data() {
    return {
      defaultId: "6755196327667736576",
      tabList: [
        {
          id: 1,
          label: "最新消息",
        },
        {
          id: "6755196327554490368",
          label: "與會方式",
        },
        {
          id: "6755196327659347968",
          label: "徵稿須知",
        },
        {
          id: "6755196327667736576",
          label: "活動主旨",
        },
        {
          id: "6755196327676125184",
          label: "活動議程",
        },
        {
          id: "6755196327680319488",
          label: "聯絡資訊",
        },
        {
          id: "6755196327688708096",
          label: "審稿規範",
        },
      ],
      listQuery: {
        NewsTypeId: "",
        page: 1,
        limit: 999,
        key: undefined,
      },
      seminarList: {},
      newsList: [],
      showNewsInfo: false,
      selectNews: {},
      fileInfo: {},
    };
  },
  methods: {
    async getList() {
      await this.$api.seminarWorks({ id: this.defaultId }).then((res) => {
        this.seminarList = res.data.result;
        this.$store.commit("SETLOADING", false);
      });
    },
    async getNews() {
      await this.$api.seminarNews(this.listQuery).then((res) => {
        this.newsList = res.data.data;
        this.$store.commit("SETLOADING", false);
      });
    },
    changeTab(item) {
      this.$store.commit("SETLOADING", true);
      this.defaultId = item.id;
      if (item.label == "最新消息") {
        this.getNews();
      } else {
        this.getList();
      }
    },
    changeOption(getVal) {
      this.$store.commit("SETLOADING", true);
      this.defaultId = getVal;
      const getItem = this.tabList.filter((res) => res.id == getVal);
      if (getItem[0].label == "最新消息") {
        this.getNews();
      } else {
        this.getList();
      }
    },
    viewInfo(item) {
      console.log(item);
      this.showNewsInfo = true;
      this.selectNews = item;
      this.selectNews.attachedFile = JSON.parse(item.attachedFile);
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
    goSeminarInfo(id) {
      this.$router.push({ name: "seminarInfo", params: { id: id } });
    },
  },
  mounted() {
    this.$store.commit("SETLOADING", true);
    this.getList();
    this.getNews();
  },
};
</script>

<style lang="scss">
#seminar {
  .web {
    padding-top: 0 !important;
    margin-left: 0 !important;
    .tabGroup {
      padding-left: 60px;
      &__tag {
        border: 2px solid #ceb87f;
        border-radius: 16px;
        color: #ceb87f;
        font-weight: bold;
        transition: all 0.6s;
        cursor: pointer;
        &:hover {
          background-color: #ceb87f;
          color: #fff;
        }
        &--active {
          background-color: #ceb87f;
          color: #fff;
        }
      }
    }
    .workCard {
      padding: 50px 200px 180px 40px;
      background: #2d2d2d;

      .ql-editor {
        min-height: 100px;
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

      .newsTable {
        padding: 30px;
        border-bottom: 1px solid #000000;
        transition: all 0.6s;
        p {
          font-size: 20px;
          line-height: 25px;
          letter-spacing: 0.2em;
          color: #ffffff;
        }
        &:hover {
          background: #4d4d4d;
        }
      }
    }
  }

  .phone {
    min-height: calc(100vh - 430px);
    .darkBG {
      background: #2d2d2d;

      .ql-editor {
        min-height: 100px;
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

      .newsInfo {
        background: #2d2d2d;
        &__card {
          background: #efefef;
          border-radius: 8px;
          &-date {
            min-width: 85px;
            white-space: nowrap;
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