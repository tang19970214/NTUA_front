<template>
  <div id="phoneTitle">
    <div class="px-20 py-10 d-flex align-items-center justify-content-between">
      <strong class="m-0">{{ title }}</strong>
      <select v-if="filterDate">
        <option value="2020">2020</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    filterDate: {
      type: Boolean,
      require: true,
    },
  },
};
</script>

<style lang="scss">
#phoneTitle {
  strong {
    font-size: 24px;
    line-height: 28px;
    color: #ceb87f;
  }
}
</style>