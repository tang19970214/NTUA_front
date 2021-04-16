<template>
  <div id="carousel">
    <div class="w-100 d-none d-mb-block">
      <el-carousel :interval="5000" arrow="always" height="100vh">
        <el-carousel-item v-for="item in bannerURL" :key="item.id">
          <a :href="item.links" target="_blank">
            <img :src="item.pic" alt="" width="100%" height="100%" />
          </a>
          <div class="workInfo">
            <strong class="font-s-18">{{item.workInfo}}</strong>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="w-100 d-block d-mb-none pt-60">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in bannerURL" :key="item.id">
          <a :href="item.links" target="_blank">
            <img :src="item.pic" alt="" width="100%" height="250px" />
          </a>
          <div class="swiper__workInfo">
            <strong class="font-s-14">{{item.workInfo}}</strong>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 5,
        loop: true,
      },
      bannerURL: [],
    };
  },
  computed: {
    getScreenH() {
      return screen.height;
    },
  },
  methods: {
    getBanner() {
      this.$api.banner().then((res) => {
        this.bannerURL = res.data.data;
      });
    },
  },
  mounted() {
    this.getBanner();
  },
};
</script>

<style lang="scss">
#carousel {
  position: relative;
  width: 100%;
  .workInfo {
    position: absolute;
    right: 20%;
    bottom: 10px;
    color: #4f4f4f;
  }

  .swiper {
    position: relative;
    &__workInfo {
      position: absolute;
      right: 8px;
      bottom: 8px;
      color: #4f4f4f;
    }
  }
}
</style>