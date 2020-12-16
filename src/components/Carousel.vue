<template>
  <div id="carousel">
    <div class="w-100 d-none d-mb-block">
      <el-carousel trigger="click" :height="getScreenH - 100 + 'px'">
        <el-carousel-item
          v-for="(item, index) in bannerURL"
          :key="'URL__' + index"
        >
          <img :src="item.url" alt="" width="100%" height="100%" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="w-100 d-block d-mb-none pt-60">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index1) in bannerURL" :key="index1">
          <img :src="item.url" alt="" width="100%" />
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
        spaceBetween: 10,
        loop: true,
      },
      bannerURL: [
        {
          url: require("../assets/images/banner/banner_1.png"),
        },
        {
          url: require("../assets/images/banner/banner_2.png"),
        },
        {
          url: require("../assets/images/banner/banner_3.png"),
        },
      ],
    };
  },
  computed: {
    getScreenH() {
      return screen.height;
    },
  },
};
</script>

<style lang="scss">
#carousel {
}
</style>