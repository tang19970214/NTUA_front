<template>
  <div id="contest">
    <div
      class="contestTable w-100 d-flex align-items-center flex-row"
      v-for="(item, index) in contestMsg"
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
      contestMsg: [
        {
          title: "2020-07-24",
          content:
            "轉知 故宮博物院教育展資處辦理「2020故宮線上策展人計畫徵選活動」",
        },
        {
          title: "2020-05-26",
          content:
            "轉知新竹市文化局來函辦理「2020新竹市金玻獎  文創設計工藝創作比賽」",
        },
        {
          title: "2020-05-21",
          content:
            "轉知新北市政府教育局主辦，新北市立鶯歌高級工商職業學校承辦之「2020新北市全國精品金工競賽」",
        },
        {
          title: "2020-05-19",
          content: "轉知 臺中市纖維工藝博物館辦理-第三屆纖維創作獎",
        },
        {
          title: "2020-05-07",
          content: "轉知 桃園市立美術館辦理「桃源國際藝術獎」",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#contest {
  .contestTable {
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