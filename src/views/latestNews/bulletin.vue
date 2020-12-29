<template>
  <div id="bulletin">
    <div class="web d-none d-mb-block">
      <div
        class="bulletinTable w-100 d-flex align-items-center flex-row cur-pointer"
        v-for="(item, index) in bulletinMsg"
        :key="'BT__' + index"
        @click="viewInfo(item)"
      >
        <p class="m-0" style="min-width: 220px; max-width: 220px">
          {{ item.releaseDate | moment("YYYY-MM-DD") }}
        </p>
        <p class="m-0">{{ item.title }}</p>
      </div>
      <!-- <div class="w-100 mt-90">
        <Pagination :needPage="true" :pageNumber="5" />
      </div> -->
    </div>

    <div class="phone d-block d-mb-none">
      <div class="w-100 newsInfo">
        <div class="px-20 pt-40 pb-90">
          <div
            class="w-100 newsInfo__card d-flex flex-row mb-15"
            v-for="(item, index1) in bulletinMsg"
            :key="index1"
            @click="goBulletinInfo(item)"
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
              <span class="d-inline-flex">系辦公告</span>
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
        NewsTypeId: "SYS_NEWS_DEPARTMENT",
        page: 1,
        limit: 20,
        key: undefined,
      },
      bulletinMsg: [],
      selectNews: {},
      showNewsInfo: false,
    };
  },
  methods: {
    viewInfo(data) {
      this.showNewsInfo = true;
      this.selectNews = data;
    },
    goBulletinInfo(data) {
      this.$router.push({ name: "bulletinInfo" });
    },
    getList() {
      this.$api.news(this.listQuery).then((res) => {
        this.bulletinMsg = res.data.data;
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss">
#bulletin {
  .web {
    padding-top: 0px !important;
    margin-left: 0px !important;
    .bulletinTable {
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