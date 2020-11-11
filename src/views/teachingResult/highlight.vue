<template>
  <div id="hightlight">
    <el-row class="w-100">
      <el-col
        class="d-flex align-items-center justify-content-center my-30"
        style="height: 380px"
        :span="12"
        v-for="(item, index) in highlightData"
        :key="'RD__' + index"
      >
        <div class="">
          <img :src="item.imageURL" alt="" />
        </div>
        <div class="bookContent">
          <strong class="m-0 bookContent-title">{{ item.title }}</strong>
          <div class="bookContent-directions">
            <p class="m-0">{{ item.content1 }}</p>
            <p class="m-0">{{ item.content2 }}</p>
            <p class="m-0">{{ item.content3 }}</p>
            <p class="m-0">{{ item.content4 }}</p>
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
      highlightData: [
        {
          imageURL: require("@/assets/images/highlight/highlight1.png"),
          title: "2018中川衛教授金工鑲嵌演講",
          content1: "日期：107年12月14日（五） 下午14：00-16：00",
          content2: "地點：本校教研大樓603教室",
        },
        {
          imageURL: require("@/assets/images/highlight/highlight2.png"),
          title: "2018（第七屆）工藝創作與文創設計學術研討會暨木藝工作營",
          content1:
            "木藝工作營107年10月7＆14日（星期日） 研討會 107年10月19日（星期五）",
        },
        {
          imageURL: require("@/assets/images/highlight/highlight3.png"),
          title: "2017（第六屆）工藝創作與文創設計學術研討會暨產品工作營",
          content1: "產品工作營：106年 10 月 19日（週四）",
          content2: "研討會:106年 10 月20日（週五）",
        },
        {
          imageURL: require("@/assets/images/highlight/highlight4.png"),
          title: "李英嘉老師示範木工圓鋸機操作方式",
        },
        {
          imageURL: require("@/assets/images/highlight/highlight5.png"),
          title: "2016（第五屆）工藝創作與文創設計學術研討會 暨金工工作營",
          content1: "研討會日期：105年 10 月14 日（五）",
          content2: "研討會地點：本校10樓國際會議廳",
          content3: "工作營日期：105年10月17～21日（一～五）",
          content4: "工作營地點：本校工藝大樓2樓金工教室",
        },
        {
          imageURL: require("@/assets/images/highlight/highlight6.png"),
          title: "2015（第四屆）工藝創作與文創設計研討會 暨陶瓷柴燒工作營",
          content1: "研討會：104/10/13（二）本校教研10樓國際 會議廳",
          content2: "柴燒工作營：104/10/6-8（二-四）新北市立鶯歌陶瓷博物館",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#hightlight {
  padding: 30px;
  background: #2d2d2d;

  .bookContent {
    position: relative;
    margin-left: -35px;
    margin-top: 45px;
    border: 2px solid #596164;
    box-sizing: border-box;
    width: 475px;
    min-height: 250px;
    // max-height: 400px;
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