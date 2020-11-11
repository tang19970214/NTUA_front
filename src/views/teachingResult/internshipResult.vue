<template>
  <div id="internshipResult">
    <!-- <div class="newsCard-contentCard"> -->
    <div class="newsCard-contentCard_title d-flex align-items-center">
      <p class="m-0" style="min-width: 220px; max-width: 220px">公告日期</p>
      <p class="m-0">標題</p>
    </div>
    <div class="w-100">
      <div
        class="internshipResultTable w-100 d-flex align-items-center flex-row"
        v-for="(item, index) in internshipResultMsg"
        :key="'BT__' + index"
      >
        <p class="m-0" style="min-width: 220px; max-width: 220px">
          {{ item.title }}
        </p>
        <p class="m-0">{{ item.content }}</p>
      </div>

      <div class="w-100 mt-90">
        <Pagination :needPage="true" :pageNumber="5" />
      </div>
    </div>
    <!-- </div> -->
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
          content: "2013年陸寶企業股份有限公司實習成果",
        }
      ],
    };
  },
};
</script>

<style lang="scss">
#internshipResult {
  background: #2d2d2d;
  padding: 120px 220px 75px 60px;
  .newsCard-contentCard_title {
    width: 100%;
    padding: 40px 30px;
    background: #c4c4c4;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.2em;
    color: #2d2d2d;
  }
  .internshipResultTable {
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
</style>