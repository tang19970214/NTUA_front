<template>
  <div class="loading" v-if="$store.state.loading">
    <div class="loading__BG"></div>
    <div class="loading__Icon">
      <div class="loading__Icon--circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="scss">
.loading {
  &__BG {
    z-index: 9999;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #eeeeee, $alpha: 0.8);
    opacity: 0.8;
  }
  &__Icon {
    z-index: 10000;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    &--circle {
      //   border: 10px solid #df281d;
      //   border-right: 10px solid transparent;
      //   height: 150px;
      //   width: 150px;
      //   border-radius: 50%;
      //   animation: loading 1s infinite linear;
      //   @keyframes loading {
      //     from {
      //       transform: rotate(0deg);
      //     }
      //     to {
      //       transform: rotate(360deg);
      //     }
      //   }

      width: 20px;
      height: 20px;
      border-radius: 100%; /* 圆角 */
      box-shadow: 0 -70px 0 6px rgba($color: #333, $alpha: 1) /* 上 */,
        70px 0px 0 -1px rgba($color: #333, $alpha: 0.4) /* 右 */,
        0 70px 0 1px rgba($color: #333, $alpha: 0.6) /* 下 */,
        -70px 0 0 2px rgba($color: #333, $alpha: 0.8) /* 左 */,
        -50px -50px 0 4px rgba($color: #333, $alpha: 0.9) /* 左上 */,
        50px -50px 0 -2px rgba($color: #333, $alpha: 0.3) /* 右上 */,
        50px 50px 0 0.5px rgba($color: #333, $alpha: 0.5) /* 右下 */,
        -50px 50px 0 2px rgba($color: #333, $alpha: 0.7) /* 左下 */;
      animation: spin 1s steps(8) infinite;
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>