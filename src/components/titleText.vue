<template>
  <div id="titleText">
    <div class="forWeb w-100 d-none d-mb-block">
      <div
        class="w-100 d-flex align-items-center"
        :class="'justify-content-' + textAlign"
      >
        <p class="m-0">{{ textTitle }}</p>
      </div>
    </div>

    <div class="forPhone w-100 d-block d-mb-none">
      <div class="w-100 d-flex align-items-center justify-content-start">
        <div class="d-flex flex-column">
          <p class="m-0">{{ textTitle }}</p>
          <div class="forPhone-line mt-10"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textAlign: {
      type: String,
      require: true,
    },
    textTitle: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss">
#titleText {
  .forWeb {
    padding: 0px 120px;
    div {
      p {
        font-weight: bold;
        font-size: 50px;
        line-height: 59px;
        color: #ceb87f;
      }
    }
  }
  .forPhone {
    div {
      p {
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #ceb87f;
      }
    }
    &-line {
      width: 80px;
      border-bottom: 2px solid #ceb87f;
    }
  }
}
</style>