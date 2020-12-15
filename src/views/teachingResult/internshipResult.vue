<template>
  <div id="internshipResult">
    <div class="web d-none d-mb-block">
      <div class="newsCard__title d-flex align-items-center">
        <p class="m-0" style="min-width: 220px; max-width: 220px">公告日期</p>
        <p class="m-0">標題</p>
      </div>
      <div class="w-100">
        <div
          class="newsCard__table w-100 d-flex align-items-center flex-row"
          v-for="(item, index) in internshipResultMsg"
          :key="'BT__' + index"
        >
          <p class="m-0" style="min-width: 220px; max-width: 220px">
            {{ item.title }}
          </p>
          <p class="m-0">{{ item.context }}</p>
        </div>

        <div class="w-100 mt-90">
          <Pagination :needPage="true" :pageNumber="5" />
        </div>
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
              <el-col class="text-center" :span="10">{{ item.title }}</el-col>
              <el-col class="text-left" :span="14">{{ item.context }}</el-col>
            </el-row>
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
      internshipResultMsg: [
        {
          title: "2013-11-22",
          context: "2013年陸寶企業股份有限公司實習成果",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#internshipResult {
  .web {
    background: #2d2d2d;
    padding: 120px 220px 75px 60px;
    margin-left: 0;
    .newsCard {
      &__title {
        width: 100%;
        padding: 40px 30px;
        background: #c4c4c4;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.2em;
        color: #2d2d2d;
      }
      &__table {
        padding: 30px;
        border-bottom: 1px solid #000000;
        p {
          font-size: 20px;
          line-height: 25px;
          letter-spacing: 0.2em;
          color: #ffffff;
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
}
</style>