<template>
  <div id="bulletin">
    <div
      class="bulletinTable w-100 d-flex align-items-center flex-row"
      v-for="(item, index) in bulletinMsg"
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
</template>

<script>
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      bulletinMsg: [
        {
          title: "2020-10-13",
          content: "109學年度第2學期有章藝術博物館教研場地申請",
        },
        {
          title: "2020-07-31",
          content: "轉知秘書室宣傳 辦理校友證使用線上辦理",
        },
        {
          title: "2020-07-16",
          content:
            "公告7/27(一)9:00-17:00電力檢修 工藝大樓與陶瓷教室不開放使用",
        },
        {
          title: "2020-06-22",
          content:
            "轉知 109年度深耕計畫【獎助教職員生參加國際教學展演競賽】開放申請，系上申請8月13日(四) 下午5時前截止。",
        },
        {
          title: "2020-06-19",
          content: "公告 108-2 碩班評圖抵免通過名單",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#bulletin {
  .bulletinTable {
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