<template>
  <div id="app">
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
    Footer
  }
}
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Microsoft JhengHei';
    background-color: #EFEFEF;
  }
</style>