<template>
  <div id="record">
    <div class="web d-none d-mb-block">
      <el-row class="w-100">
        <el-col
          class="d-flex align-items-center justify-content-center my-30"
          style="height: 380px"
          :span="12"
          v-for="(item, index) in recordData"
          :key="'RD__' + index"
        >
          <div class="bookIMG">
            <img :src="item.coverPic" alt="" />
          </div>
          <div class="bookContent">
            <strong class="m-0 bookContent-title">{{ item.title }}</strong>
            <div class="bookContent-directions">
              <p
                class="m-0"
                v-for="(items, index) in item.summary.split('\n')"
                :key="'SMR__' + index"
              >
                {{ items }}
              </p>
            </div>
            <div class="d-flex align-items-center justify-content-end mt-18">
              <router-link
                class="bookContent-viewMore text-decoration-none"
                :to="{ name: 'recordInfo', params: { art: item.title } }"
              >
                VIEW MORE
              </router-link>
            </div>
          </div>
        </el-col>
      </el-row>

      <!-- <div class="w-100 mt-150">
        <Pagination :needPage="true" :pageNumber="5" />
      </div> -->
    </div>

    <div class="phone d-block d-mb-none">
      <div class="recordCard pt-20 pb-40 px-60">
        <div
          class="d-flex flex-column"
          v-for="(item, index1) in recordData"
          :key="index1"
        >
          <div class="px-40">
            <img :src="item.coverPic" alt="" width="100%" />
          </div>
          <div class="w-100 text-center">
            <div class="pt-40 pb-10 recordCard__content">
              <div class="w-100">
                <strong>{{ item.title }}</strong>
              </div>
              <div class="px-30 text-left mb-20">
                <p
                  class="m-0"
                  v-for="(items, index) in item.summary.split('\n')"
                  :key="'PSMR__' + index"
                >
                  {{ items }}
                </p>
              </div>
              <div class="w-100">
                <router-link
                  class="px-20 pt-10 text-decoration-none"
                  :to="{ name: 'recordInfo', params: { art: item.title } }"
                >
                  VIEW MORE
                </router-link>
              </div>
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
        TypeId: "SYS_ACTALBUM_EXHIBITION",
        Years: "",
        page: 1,
        limit: 20,
        key: undefined,
      },
      recordData: [],
    };
  },
  methods: {
    getList() {
      this.$api.record(this.listQuery).then((res) => {
        this.recordData = res.data.data;
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss">
#record {
  .web {
    padding: 30px;
    margin-left: 0;
    background: #2d2d2d;

    .bookIMG {
      transition: all 0.6s;
      &:hover {
        opacity: 0.6;
      }
    }

    .bookContent {
      position: relative;
      margin-left: -35px;
      border: 2px solid #596164;
      box-sizing: border-box;
      width: 475px;
      min-height: 250px;
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
        color: #ceb87f;
        padding: 10px;
        border-top: 1px solid #ceb87f;
      }
    }
  }
  .phone {
    .recordCard {
      background: #2d2d2d;
      &__content {
        border: 2px solid #596164;
        color: #ffffff;
        font-size: 14px;
        line-height: 160%;
        transform: translateY(-2rem);
        a {
          color: #ceb87f;
          border-top: 1px solid #ceb87f;
        }
      }
    }
  }
}
</style>