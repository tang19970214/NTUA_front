<template>
  <div id="award">
    <el-row
      :gutter="20"
      class="w-100 d-flex align-items-center awardContent"
      v-for="(item, index) in awardData"
      :key="'AD__' + index"
    >
      <el-col :span="4">
        <div>{{ item.datetime }}</div>
      </el-col>
      <el-col :span="16">
        <div>{{ item.content }}</div>
      </el-col>
      <el-col :span="4" class="text-right">
        <div>
          <span class="cur-pointer">
            <img src="@/assets/images/icon/links.png" alt="" />
          </span>
        </div>
      </el-col>
    </el-row>

    <div class="w-100 mt-70">
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
      awardData: [
        {
          datetime: "SEP.14.2020",
          content:
            "恭喜!本系校友南宇陽(106年日碩班畢業)獲得「2020 Taitung Craft Award 臺東工藝獎」 佳作殊榮",
        },
        {
          datetime: "SEP.11.2020",
          content:
            "賀!本系盧逸仙榮獲「第一屆皮革設計大賽」配飾類銀奨、廖于萱榮獲佳作！",
        },
        {
          datetime: "SEP.11.2020",
          content: "賀! 本系梁家豪老師獲頒「台灣陶瓷學會優秀青年會員獎」",
        },
        {
          datetime: "AUG.28.2020",
          content:
            "賀!本系校友與同學獲得「2020光寶創新獎」 國際設計大賽特別獎項	",
        },
        {
          datetime: "MAY.05.2020",
          content:
            "賀! 本系同學與校友獲得「2020新北市國際金屬工藝大賽」1金獎1銀獎與3佳作",
        },
        {
          datetime: "APR.23.2020",
          content: "賀! 本系同學入圍「金點新秀設計獎」多項獎項殊榮",
        },
        {
          datetime: "FEB.27.2020",
          content:
            "賀!本校工藝設計學系同學榮獲「晃-第四屆TJDMA國際珠寶金工設計競賽」金銀獎等獎項",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#award {
  padding: 45px 380px;

  .awardContent {
    border-bottom: 1px solid #c4c4c4;
    padding: 25px 0px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.005em;
    color: #77767b;
  }
}
</style>