<template>
  <div id="activity">
    <div
      class="activityTable w-100 d-flex align-items-center flex-row"
      v-for="(item, index) in activityMsg"
      :key="'AT__' + index"
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
      activityMsg: [
        {
          title: "2020-10-08",
          content:
            "轉知中華民國對外貿易發展協會主辦「跨世代設計美學與大師有約-台灣設計X精品美學」講座",
        },
        {
          title: "2020-10-07",
          content:
            "轉知 文化部委託藝創工會執行「藝文工作者勞動及法律相關權益推廣研討會」，10月12、13日兩日於國立台北大學資訊大樓3樓國際會議廳舉行",
        },
        {
          title: "2020-10-06",
          content:
            "轉知新北市政府教育局主辦，新北市立鶯歌高級工商職業學校承辦之「2020新北市全國精品金工競賽」",
        },
        {
          title: "2020-10-05",
          content: "轉知 臺中市纖維工藝博物館辦理-第三屆纖維創作獎",
        },
        {
          title: "2020-08-07",
          content: "【2020臺北設計獎徵件】即日起徵件至7月15日",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#activity {
  .activityTable {
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