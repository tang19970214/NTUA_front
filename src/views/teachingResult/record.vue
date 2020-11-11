<template>
  <div id="record">
    <el-row class="w-100">
      <el-col
        class="d-flex align-items-center justify-content-center my-30"
        style="height: 380px"
        :span="12"
        v-for="(item, index) in recordData"
        :key="'RD__' + index"
      >
        <div class="">
          <img :src="item.imageURL" alt="" />
        </div>
        <div class="bookContent">
          <strong class="m-0 bookContent-title">{{ item.title }}</strong>
          <div class="bookContent-directions">
            <p class="m-0">{{ item.datetime }}</p>
            <p class="m-0">{{ item.location }}</p>
          </div>
          <div class="d-flex align-items-center justify-content-end mt-18">
            <a class="bookContent-viewMore text-decoration-none" href=""
              >VIEW MORE</a
            >
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="w-100 mt-150">
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
      recordData: [
        {
          imageURL: require("@/assets/images/book/book1.png"),
          title: "2019臺藝清華師生聯展",
          datetime: "展期：108/5/14-5/24",
          location: "本校教研1樓國際展覽廳",
        },
        {
          imageURL: require("@/assets/images/book/book2.png"),
          title: "106學年度系展得獎作品",
          datetime: "年度主題：獨白 107/3/27-4/1",
          location: "教研B2大觀與真善美藝廊",
        },
        {
          imageURL: require("@/assets/images/book/book3.png"),
          title: "106級日間部創作組畢業成果校外展：喃喃",
          datetime: "展期：106/5/23~5/28",
          location: "地點：濕地Venue5F策展空間",
        },
        {
          imageURL: require("@/assets/images/book/book4.png"),
          title: "2017進學班創作組校外展-呦呦",
          datetime: "地點：淡水古蹟博物館-海關碼頭園區C棟",
          location: "展期：106/6/3-6/12 （6/5休館",
        },
        {
          imageURL: require("@/assets/images/book/book5.png"),
          title: "104級工藝在職畢業聯展",
          datetime: "日期：106/6/5-6/11",
          location: "地點：教研B1大漢藝廊",
        },
        {
          imageURL: require("@/assets/images/book/book6.png"),
          title: "105-2陶瓷工作室展",
          datetime: "展期：106/5/1-5/7",
          location: "地點：學生藝廊",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#record {
  padding: 30px;
  background: #2d2d2d;

  .bookContent {
    position: relative;
    margin-left: -35px;
    border: 2px solid #596164;
    box-sizing: border-box;
    width: 475px;
    height: 250px;
    padding: 65px 30px 20px 65px;
    &-title {
      font-weight: bold;
      font-size: 18px;
      line-height: 160%;
      letter-spacing: 0.1em;
      color: #ffffff;
    }
    &-directions {
      margin-top: 30px;
      font-size: 18px;
      line-height: 160%;
      letter-spacing: 0.08em;
      color: #ffffff;
    }
    &-viewMore {
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.005em;
      color: #ceb87f;
      padding: 10px;
      border-top: 1px solid #ceb87f;
    }
  }
}
</style>