<template>
  <div id="internshipResult">
    <div class="web d-none d-mb-block">
      <div class="newsCard__title d-flex align-items-center">
        <p class="m-0" style="min-width: 220px; max-width: 220px">公告日期</p>
        <p class="m-0">標題</p>
      </div>
      <div class="w-100">
        <div
          class="newsCard__table d-flex align-items-center flex-row cur-pointer"
          v-for="(item, index) in internshipResultMsg"
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
    </div>

    <div class="phone d-block d-mb-none">
      <div class="resultCard p-30">
        <div
          class="w-100 align-items-center justify-content-center flex-column"
        >
          <div class="w-100 resultCard__title">
            <el-row class="py-20">
              <el-col class="text-center" :span="10">公告日期</el-col>
              <el-col class="text-left" :span="14">標題</el-col>
            </el-row>
          </div>
          <div
            class="w-100 resultCard__content"
            v-for="(item, index1) in internshipResultMsg"
            :key="index1"
          >
            <el-row class="py-20">
              <el-col class="text-center" :span="10">{{
                item.releaseDate | moment("YYYY-MM-DD")
              }}</el-col>
              <el-col class="text-left" :span="14">{{ item.title }}</el-col>
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
            <span class="d-inline-flex">實習成果</span>
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

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      listQuery: {
        TeachTypeId: "SYS_TEACH_4C",
        Years: "",
        page: 1,
        limit: 20,
        key: undefined,
      },
      internshipResultMsg: [],
      showNewsInfo: false,
      selectNews: {},
    };
  },
  methods: {
    viewInfo(data) {
      this.showNewsInfo = true;
      this.selectNews = data;
    },
    getList() {
      this.$api.award(this.listQuery).then((res) => {
        this.internshipResultMsg = res.data.data;
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss">
#internshipResult {
  .web {
    background: #2d2d2d;
    padding: 120px 220px 120px 60px;
    margin-left: 0;
    .newsCard {
      &__title {
        padding: 40px 30px;
        background: #c4c4c4;
        font-size: 22px;
        font-weight: bold;
        line-height: 22px;
        letter-spacing: 0.2em;
        color: #2d2d2d;
      }
      &__table {
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
    .resultCard {
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
      max-height: 70%;
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
    }
  }
}
</style>