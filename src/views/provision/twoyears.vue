<template>
  <div id="twoyears">
    <div class="web d-none d-mb-block">
      <div
        class="twoyearsTable w-100 d-flex align-items-center flex-row cur-pointer"
        v-for="(item, index) in twoyearsMsg"
        :key="'BT__' + index"
        @click="viewInfo(item)"
      >
        <p class="m-0" style="min-width: 220px; max-width: 220px">
          {{ item.releaseDate | moment("YYYY-MM-DD") }}
        </p>
        <p class="m-0">{{ item.title }}</p>
      </div>
    </div>

    <div class="phone d-block d-mb-none">
      <div class="w-100 newsInfo">
        <div class="px-20 pt-40 pb-90">
          <div
            class="w-100 newsInfo__card d-flex flex-row mb-15"
            v-for="(item, index1) in twoyearsMsg"
            :key="index1"
            @click="goTwoyearsInfo(item)"
          >
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
          <div
            class="w-100 pos-relative d-flex align-items-start justify-content-center flex-column"
          >
            <div class="p-10 modal__content--tag">
              <span class="d-inline-flex">二年制在職專班</span>
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
                {{ selectNews.releaseDate | moment("YYYY-MM-DD") }}
              </p>
            </div>
            <div class="w-100 modal__content--summary mt-30">
              <p class="m-0">{{ selectNews.summury }}</p>
            </div>
            <div class="w-100 modal__content--card mt-20">
              <vue-editor
                v-model="selectNews.contents"
                :disabled="true"
              ></vue-editor>
            </div>
            <div
              class="w-100 mt-40 modal__content--link"
              v-if="selectNews.linkUrl"
            >
              <strong class="font-s-24">連結</strong>
              <a :href="selectNews.linkUrl" target="_blank">
                <p class="m-0 mt-10 font-s-18">{{ selectNews.linkName }}</p>
              </a>
            </div>
            <div class="w-100 mt-40" v-if="selectNews.attachedFile">
              <strong class="font-s-24">附檔</strong>
              <p class="m-0 mt-10">
                （本網站建議使用Chrome瀏覽器以避免系統問題）
              </p>
              <div class="w-100 d-flex flex-row flex-wrap mt-20">
                <el-row class="w-100">
                  <el-col
                    :xl="4"
                    :lg="6"
                    v-for="item in selectNews.attachedFile"
                    :key="item.id"
                  >
                    <div
                      class="modal__content--fileCard d-flex align-items-center justify-content-center mt-10"
                      @mouseenter="showfileInfo(item)"
                      @mouseleave="closefileInfo(item)"
                    >
                      <a
                        v-if="!fileInfo[item.id]"
                        :href="item.files"
                        :download="item.files"
                        target="_blank"
                      >
                        <img
                          src="@/assets/images/icon/pdf_icon.png"
                          :alt="item.fileName"
                          width="40px"
                        />
                      </a>
                      <div class="w-100 h-100 backCard" v-else>
                        <a
                          class="w-100 h-100 d-flex align-items-center justify-content-center text-decoration-none"
                          :href="item.files"
                          :download="item.files"
                          target="_blank"
                        >
                          <strong>{{ item.fileName }}</strong>
                        </a>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="pos-absolute t-0 r-0">
              <div
                class="modal__close d-flex align-items-center justify-content-center cur-pointer"
                @click="showNewsInfo = false"
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
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      listQuery: {
        TypeId: "SYS_DEPARTMENTRULE_FULLTIME",
        page: 1,
        limit: 20,
        key: undefined,
      },
      twoyearsMsg: [],
      selectNews: {},
      showNewsInfo: false,
      fileInfo: {},
    };
  },
  methods: {
    viewInfo(data) {
      this.showNewsInfo = true;
      this.selectNews = data;
      this.selectNews.attachedFile = JSON.parse(data.attachedFile);
    },
    goTwoyearsInfo(data) {
      this.$router.push({ name: "twoyearsInfo", params: { id: data.id } });
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
      await this.$api.departmentRule(this.listQuery).then((res) => {
        this.twoyearsMsg = res.data.data;
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
#twoyears {
  .web {
    padding-top: 0px !important;
    margin-left: 0px !important;
    .twoyearsTable {
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

  .phone {
    .newsInfo {
      background: #2d2d2d;
      min-height: calc(100vh - 430px);
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
      &--link {
        a {
          font-weight: bold;
          letter-spacing: 0.5em;
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