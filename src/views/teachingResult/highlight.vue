<template>
  <div id="hightlight">
    <div class="web d-none d-mb-block">
      <el-row class="w-100">
        <el-col class="d-flex align-items-center justify-content-center" style="height: 380px" :span="12" v-for="(item, index) in highlightData" :key="'RD__' + index">
          <div class="p-20 d-flex align-items-center">
            <div>
              <!-- <img :src="item.coverPic" alt="" /> -->
              <el-image style="width: 250px; height: 380px" :src="item.coverPic" fit="cover"></el-image>
            </div>
            <div class="bookContent">
              <strong class="m-0 bookContent-title">{{ item.title }}</strong>
              <div class="bookContent-directions">
                <p class="m-0" v-for="(items, index) in item.summary.split('\n')" :key="'SMR__' + index">
                  {{ items }}
                </p>
              </div>
              <div class="d-flex align-items-center justify-content-end mt-18">
                <router-link class="bookContent-viewMore text-decoration-none" :to="{ name: 'highlightInfo', params: { id: item.id } }">
                  VIEW MORE
                </router-link>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <!-- <div class="w-100 mt-150">
        <Pagination :needPage="true" :pageNumber="5" />
      </div> -->
    </div>

    <div class="phone d-block d-mb-none">
      <div class="highlightCard pt-20 pb-40 px-60">
        <div class="d-flex flex-column" v-for="(item, index1) in highlightData" :key="index1">
          <div class="px-40">
            <img :src="item.coverPic" alt="" width="100%" />
          </div>
          <div class="w-100 text-center">
            <div class="pt-40 pb-10 highlightCard__content">
              <div class="px-10 mb-5">
                <strong>{{ item.title }}</strong>
              </div>
              <div class="px-35 text-left mb-20">
                <p class="m-0" v-for="(items, index) in item.summary.split('\n')" :key="'PSMR__' + index">
                  {{ items }}
                </p>
              </div>
              <div class="w-100">
                <router-link class="px-20 pt-10 text-decoration-none" :to="{ name: 'highlightInfo', params: { id: item.id } }">
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
        TypeId: "SYS_ACTALBUM_ACTIVITY",
        Years: "",
        page: 1,
        limit: 999,
        key: undefined,
      },
      highlightData: [],
    };
  },
  methods: {
    async getList() {
      await this.$api.record(this.listQuery).then((res) => {
        this.highlightData = res.data.data;
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
#hightlight {
  .web {
    padding: 0 30px 80px 30px;
    margin-left: 0 !important;
    background: #2d2d2d;
    .bookContent {
      // position: relative;
      // margin-left: -35px;
      transform: translateX(-2rem);
      // margin-top: 30px;
      border: 2px solid #596164;
      box-sizing: border-box;
      // width: 475px;
      min-height: 250px;
      padding: 50px 30px 20px 50px;
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
    .highlightCard {
      background: #2d2d2d;
      &__content {
        transform: translateY(-2rem);
        border: 2px solid #596164;
        font-size: 14px;
        color: #ffffff;
        p {
          line-height: 1.3rem;
        }
        a {
          border-top: 1px solid #ceb87f;
          color: #ceb87f;
        }
      }
    }
  }
}
</style>