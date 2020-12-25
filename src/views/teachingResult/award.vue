<template>
  <div id="award">
    <div class="web d-none d-mb-block">
      <el-row
        :gutter="20"
        class="w-100 d-flex align-items-center awardContent"
        v-for="(item, index) in awardData"
        :key="'AD__' + index"
      >
        <el-col :span="4">
          <div>
            <b>{{ item.releaseDate | moment("YYYY-MM-DD") }}</b>
          </div>
        </el-col>
        <el-col :span="16">
          <div>{{ item.title }}</div>
        </el-col>
        <el-col :span="4" class="text-right">
          <span class="cur-pointer" @click="goPublish()">
            <img src="@/assets/images/icon/links.png" alt="" />
          </span>
        </el-col>
      </el-row>

      <!-- <div class="w-100 mt-70">
        <Pagination :needPage="true" :pageNumber="5" />
      </div> -->
    </div>

    <div class="phone d-block d-mb-none">
      <div class="pt-40 pb-80 px-20">
        <div
          class="w-100 awardCard d-flex flex-row mb-15"
          v-for="(item, index1) in awardData"
          :key="index1"
          @click="goAwardInfo(item)"
        >
          <div class="awardCard-date">
            <div class="p-15 d-flex flex-column align-items-center">
              <p class="m-0">{{ item.releaseDate | moment("YYYY") }}</p>
              <span class="my-8"></span>
              <p class="m-0">{{ item.releaseDate | moment("MM-DD") }}</p>
            </div>
          </div>
          <div class="awardCard-context d-flex align-items-center">
            <div class="p-15">
              <p class="m-0">{{ item.title }}</p>
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
        TeachTypeId: "SYS_TEACH_COMPETITION",
        Years: "",
        page: 1,
        limit: 20,
        key: undefined,
      },
      awardData: [],
    };
  },
  methods: {
    goPublish() {
      this.$router.push({ name: "publish" });
    },
    goAwardInfo(data) {
      this.$router.push({ name: "awardInfo" });
    },
    getList() {
      this.$api.award(this.listQuery).then((res) => {
        this.awardData = res.data.data;
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss">
#award {
  .web {
    padding: 45px 380px;
    padding-top: 0;
    margin-left: 0px;
    .awardContent {
      border-bottom: 1px solid #c4c4c4;
      padding: 25px 0px;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #77767b;
    }
  }

  .phone {
    background: #2d2d2d;
    .awardCard {
      background: #efefef;
      border-radius: 8px;
      &-date {
        min-width: 85px;
        div {
          background: #ceb87f;
          border-radius: 8px;
          p {
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.235em;
            color: #ffffff;
          }
          span {
            width: 20px;
            height: 3px;
            background: #ffffff;
          }
        }
      }
      &-context {
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.2em;
        color: #596164;
      }
    }
  }
}
</style>