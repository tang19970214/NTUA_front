<template>
  <div id="workCamp">
    <div class="web d-none d-mb-block">
      <div class="workCard">
        <!-- <vue-editor v-model="workCampList.contents" :disabled="true"></vue-editor> -->
        <div v-html="workCampList.contents"></div>
      </div>
    </div>

    <div class="phone d-block d-mb-none">
      <div class="px-10 py-30">
        <div class="px-20">
          <!-- <vue-editor v-model="workCampList.contents" :disabled="true"></vue-editor> -->
          <div v-html="workCampList.contents"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workCampList: {},
    };
  },
  methods: {
    getList() {
      this.$api.seminarWorks({ id: "6755196327114088448" }).then((res) => {
        this.workCampList = res.data.result;
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss">
#workCamp {
  .web {
    padding-top: 0 !important;
    margin-left: 0 !important;
    .workCard {
      padding: 50px 200px 120px 40px;
      background: #2d2d2d;

      .ql-editor {
        min-height: 100px;
      }

      .ql-toolbar {
        display: none !important;
      }

      .ql-container {
        border: none !important;
        ol {
          padding-left: 0;
        }
      }
    }
  }

  .phone {
    background: #2d2d2d;

    .ql-editor {
      min-height: 100px;
    }

    .ql-toolbar {
      display: none !important;
    }

    .ql-container {
      border: none !important;
      ol {
        padding-left: 0;
      }
    }
  }
}
</style>