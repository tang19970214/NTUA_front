<template>
  <div id="app">
    <div class="setVideo pos-relative text-center" v-if="firstLoad">
      <img
        src="./assets/images/initial_movie/loadVideo.gif"
        alt=""
        height="100%"
      />

      <div class="pos-absolute t-0 r-0 mt-30 mr-30">
        <span
          class="setVideo__ignore d-flex align-items-center justify-content-center cur-pointer"
          @click="ignoreVideo"
        >
          <img src="./assets/images/icon/ignore.svg" alt="跳過開場動畫" />
        </span>
      </div>
    </div>

    <div v-else>
      <div class="d-block d-mb-none">
        <el-backtop :bottom="100">
          <div
            class="goTopBtn d-flex align-items-center justify-content-center"
          >
            <img src="./assets/images/icon/top_icon.png" alt="回到頂端" />
          </div>
        </el-backtop>
      </div>
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  computed: {
    firstLoad() {
      return this.$store.state.firstLoad;
    },
  },
  methods: {
    ignoreVideo() {
      this.$store.commit("SETFIRSTLOAD", false);
    },
    closeVideo() {
      if (this.firstLoad) {
        window.setTimeout(() => {
          this.$store.commit("SETFIRSTLOAD", false);
        }, 10000);
      }
    },
  },
  mounted() {
    this.closeVideo();
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Microsoft JhengHei";
  background-color: #efefef;
  .setVideo {
    width: 100%;
    height: 100vh;
    &__ignore {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #52505a;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .goTopBtn {
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  }
}
</style>