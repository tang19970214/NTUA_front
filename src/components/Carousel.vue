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

    <div class="w-100 d-block d-mb-none pt-90">
      <el-carousel trigger="click" width="100%">
        <el-carousel-item
          v-for="(item, index) in bannerURL"
          :key="'URL__' + index"
        >
          <img :src="item.url" alt="" width="100%" height="100%" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
