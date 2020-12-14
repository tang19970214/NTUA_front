<template>
  <div id="app">
    <div class="d-block d-mb-none">
      <el-backtop :bottom="100">
        <div class="goTopBtn d-flex align-items-center justify-content-center">
          <img src="./assets/images/icon/top_icon.png" alt="回到頂端" />
        </div>
      </el-backtop>
    </div>
    <Header />
    <router-view />
    <Footer />
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
  .goTopBtn {
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  }
}
</style>