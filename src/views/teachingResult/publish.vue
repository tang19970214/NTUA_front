<template>
  <div id="publish">
    <el-row
      :gutter="20"
      class="w-100 d-flex align-items-center publishContent"
      v-for="(item, index) in publishData"
      :key="'AD__' + index"
    >
      <el-col :span="4">
        <div class="blackTag d-flex align-items-center justify-content-center">
          <p class="m-0">
            {{ item.kind }}
          </p>
        </div>
      </el-col>
      <el-col :span="16">
        <div>{{ item.content }}</div>
      </el-col>
      <el-col :span="2" class="text-right">
        <div>{{ item.author }}</div>
      </el-col>
      <el-col :span="2" class="text-right">
        <span class="cur-pointer" @click="goPublishInfo(item)">
          <img src="@/assets/images/arrowRight_btn.png" alt="" />
        </span>
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
      publishData: [
        {
          kind: "期刊論文",
          content:
            "C. L. Lin, 2020. The influence of color temperature and illuminance on the touch motivation and preference of craft, Journal of Ambient Intelligence and Humanized Computing, in press (SCI, IF=4.594).",
          author: "林志隆",
        },
        {
          kind: "研討會論文",
          content:
            "Chang, K. L. (2020, July). Parametric mechanism of computer aided craft design: taking wooden crib as an example. Proceedings of the 22th International Conference on Human-Computer Interaction (HCII2020). Copenhagen, Denmark.",
          author: "張恭領",
        },
        {
          kind: "其他",
          content: "梁家豪，泥舟土痕系列四，大毅讚幸福建案收藏，台中",
          author: "梁家豪",
        },
        {
          kind: "期刊論文",
          content:
            "張恭領（2020）。以參數化的形構邏輯探討接頭構件之設計。藝術學報，16（1），1-32。",
          author: "張恭領",
        },
        {
          kind: "研討會論文",
          content:
            "張恭領（2020年5月）。參數化介入工藝設計的意義。2020文化‧創意‧設計國際學術研討會。玄奘大學藝術設計學院，新竹市。",
          author: "張恭領",
        },
        {
          kind: "期刊論文",
          content:
            "C. L. Lin, S. J. Chen and R. Lin, 2020. Efficacy of Virtual Reality in Painting Art Exhibitions Appreciation, Applied Sciences, 10(9), 3012 (SCI, IF=2.217). ",
          author: "林志隆",
        },
      ],
    };
  },
  methods: {
    goPublishInfo(data) {
      this.$router.push({
        name: "publishInfo",
        params: { author: data.author },
      });
    },
  },
};
</script>

<style lang="scss">
#publish {
  padding: 45px 380px;

  .publishContent {
    border-bottom: 1px solid #c4c4c4;
    padding: 25px 0px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.005em;
    color: #77767b;

    .blackTag {
      width: 110px;
      height: 40px;
      background: #2d2d2d;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.005em;
      color: #ffffff;
    }
  }
}
</style>