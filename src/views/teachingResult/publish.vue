<template>
  <div id="publish">
    <div class="web d-none d-mb-block">
      <el-row :gutter="20" class="w-100 d-flex align-items-center publishContent" v-for="(item, index) in publishData" :key="'AD__' + index">
        <el-col :span="4">
          <div class="blackTag d-flex align-items-center justify-content-center">
            <p class="m-0">
              {{ item.titleType }}
            </p>
          </div>
        </el-col>
        <el-col :span="15">
          <div>{{ item.contents }}</div>
        </el-col>
        <el-col :span="3" class="text-right">
          <div>{{ item.author }}</div>
        </el-col>
        <el-col :span="2" class="text-right">
          <span class="cur-pointer" @click="goPublishInfo(item)">
            <img src="@/assets/images/arrowRight_btn.png" alt="" />
          </span>
        </el-col>
      </el-row>

      <!-- <div class="w-100 mt-150">
        <Pagination :needPage="true" :pageNumber="5" />
      </div> -->
    </div>

    <div class="phone d-block d-mb-none">
      <div class="ml-20 bg-white py-10">
        <div class="publishCard pr-30" v-for="(item, index1) in publishData" :key="index1">
          <div class="publishCard__header w-100 d-flex align-items-center justify-content-between">
            <span class="p-10">{{ item.titleType }}</span>
            <div class="d-flex align-items-center">
              <p class="m-0 mr-10">{{ item.author }}</p>
              <img src="@/assets/images/arrowRight_btn.png" alt="" width="24px" @click="goPublishInfo(item)" />
            </div>
          </div>
          <div class="p-15 publishCard__content">
            <p class="m-0" @click="goPublishInfo(item)">{{ item.contents }}</p>
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
        TeachTypeId: "SYS_TEACH_RESEARCHPUBLIC",
        Years: "",
        page: 1,
        limit: 999,
        key: undefined,
      },
      publishData: [],
    };
  },
  methods: {
    goPublishInfo(data) {
      this.$router.push({
        name: "publishInfo",
        params: { author: data.title },
      });
    },
    async getList() {
      await this.$api.award(this.listQuery).then((res) => {
        this.publishData = res.data.data;
        this.$store.commit("SETLOADING", false);
      });
    },
  },
  mounted() {
    this.$store.commit("SETLOADING", true);
    this.getList();
  },
};
</script>

<style lang="scss">
#publish {
  .web {
    padding: 20px 250px;
    margin-left: 0;
    .publishContent {
      border-bottom: 1px solid #c4c4c4;
      padding: 25px 0px;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #77767b;

      .blackTag {
        width: 110px;
        height: 40px;
        background: #2d2d2d;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #ffffff;
      }
    }
  }

  .phone {
    .publishCard {
      &__header {
        span {
          background: #2d2d2d;
          color: white;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
        }
      }
      &__content {
        font-size: 14px;
        line-height: 16px;
        color: #77767b;
      }
    }
  }
}
</style>