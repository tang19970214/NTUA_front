<template>
  <div id="Pagination">
    <div class="w-100 d-flex align-items-center justify-content-center">
      <a class="cur-pointer d-flex align-items-center" @click="works_prev()">
        <img src="@/assets/images/arrowLeft_btn.png" alt="" />
      </a>

      <div
        class="d-flex align-items-center justify-content-center"
        v-if="needPage"
      >
        <span
          class="circle_border cur-pointer"
          :class="{ circle_border_active: defaultPage == item }"
          v-for="item in pageNumber"
          :key="item"
          @click="choosePage(item)"
        >
          {{ countPage(item) }}
        </span>
      </div>

      <a class="cur-pointer d-flex align-items-center" @click="works_next()">
        <img src="@/assets/images/arrowRight_btn.png" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    needPage: {
      type: Boolean,
      require: false,
    },
    pageNumber: {
      type: Number,
      require: false,
    },
  },
  data() {
    return {
      defaultPage: 1,
    };
  },
  computed: {
    countPage() {
      return (item) => {
        if (item < 10) {
          return "0" + item;
        } else {
          return item;
        }
      };
    },
  },
  methods: {
    choosePage(number) {
      this.defaultPage = number;
    },
    works_prev() {
      if (this.defaultPage > 1) {
        this.defaultPage = this.defaultPage - 1;
      }
    },
    works_next() {
      if (this.defaultPage < this.pageNumber) {
        this.defaultPage = this.defaultPage + 1;
      }
    },
  },
};
</script>

<style lang="scss">
#Pagination {
  a:first-child {
    margin-right: 15px;
  }
  a:last-child {
    margin-left: 15px;
  }
  .circle_border {
    margin-left: 15px;
    margin-right: 15px;
    color: #AEAEAE;
    &:hover {
      color: #ceb87f;
    }
    &_active {
      border: 3px solid #ceb87f;
      box-sizing: border-box;
      border-radius: 50%;
      padding: 2px 3px;
    }
  }
}
</style>