<template>
  <div id="loadShowIMG">
    <div class="w-100 d-flex align-items-center flex-row">
      <span class="w-100 transBg" v-for="(item, index) in artImg" :key="'AI__' + index">
        <img :src="item.imgUrl" alt="" width="100%" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artImg: [
        {
          imgUrl: require("@/assets/images/art/01.png"),
        },
        {
          imgUrl: require("@/assets/images/art/02.png"),
        },
        {
          imgUrl: require("@/assets/images/art/03.png"),
        },
        {
          imgUrl: require("@/assets/images/art/04.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.transBg {
  img {
    opacity: 0;
    animation-name: loadShow;
    animation-duration: 1.5s;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;
  }
}

@keyframes loadShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>