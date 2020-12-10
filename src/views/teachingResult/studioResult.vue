<template>
  <div id="studioResult">
    <div class="w-100 h-100 studioBG">
      <div class="d-flex justify-content-around studioGroup">
        <div
          class="m-item d-flex align-items-center flex-column"
          v-for="(item, index) in crafts"
          :key="index"
        >
          <img :src="item.imgURL" class="m-item-image w-100" />
          <div class="m-item-title d-flex justify-content-center">
            <div
              class="craftCard d-flex align-items-center justify-content-center flex-column text-center pt-40 pb-20"
            >
              <div class="mb-30">
                <p class="m-0">{{ item.name_ch }}</p>
                <p class="m-0">{{ item.name_en }}</p>
              </div>
              <div class="pt-10 craftCard-borTop">
                <router-link
                  class="text-decoration-none"
                  :to="{ name: 'crafts', params: { sort: item.name_en } }"
                  >VIEW MORE</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 studioCard mt-60">
      <div class="px-150 py-20">
        <el-row>
          <el-col
            class="mb-40"
            :span="8"
            v-for="(item, index1) in worksList"
            :key="index1"
          >
            <div
              class="w-100 d-flex align-items-center justify-content-center flex-column"
            >
              <div
                class="w-100 d-flex align-items-center justify-content-center"
              >
                <img :src="item.imgURL" alt="" />
              </div>
              <div
                class="studioCard__content w-100 d-flex align-items-center justify-content-center mt-40"
              >
                <p class="m-0 d-inline-flex p-10">{{ item.title }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <div
          class="w-100 py-50 d-flex align-items-center justify-content-center"
        >
          <Pagination :needPage="true" :pageNumber="5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      crafts: [
        {
          imgURL: require("@/assets/images/craft/craft_1.png"),
          name_ch: "陶瓷",
          name_en: "CERAMICS",
        },
        {
          imgURL: require("@/assets/images/craft/craft_2.png"),
          name_ch: "金工",
          name_en: "METALWORKING",
        },
        {
          imgURL: require("@/assets/images/craft/craft_3.png"),
          name_ch: "木工",
          name_en: "WOODWORKING",
        },
        {
          imgURL: require("@/assets/images/craft/craft_4.png"),
          name_ch: "產品",
          name_en: "PRODUCT",
        },
      ],
      worksList: [
        {
          imgURL: require("@/assets/images/studio/studio1.png"),
          title: "陶瓷作品20",
        },
        {
          imgURL: require("@/assets/images/studio/studio2.png"),
          title: "陶瓷作品21",
        },
        {
          imgURL: require("@/assets/images/studio/studio3.png"),
          title: "陶瓷作品22",
        },
        {
          imgURL: require("@/assets/images/studio/studio4.png"),
          title: "陶瓷作品23",
        },
        {
          imgURL: require("@/assets/images/studio/studio5.png"),
          title: "陶瓷作品24",
        },
        {
          imgURL: require("@/assets/images/studio/studio6.png"),
          title: "陶瓷作品25",
        },
        {
          imgURL: require("@/assets/images/studio/studio7.png"),
          title: "陶瓷作品26",
        },
        {
          imgURL: require("@/assets/images/studio/studio8.png"),
          title: "陶瓷作品27",
        },
        {
          imgURL: require("@/assets/images/studio/studio9.png"),
          title: "陶瓷作品28",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#studioResult {
  margin-top: 60px;
  .studioBG {
    height: 500px;
    background: #2d2d2d;
    .studioGroup {
      width: calc(100% - 120px);
      position: absolute;
      margin-top: -50px;

      .m-item-title {
        -webkit-box-ordinal-group: 2;
        order: 1;
      }

      .m-item-image {
        -webkit-box-ordinal-group: 3;
        order: 2;
      }

      > .m-item:nth-child(odd) {
        .m-item-title {
          -webkit-box-ordinal-group: 3;
          order: 2;
        }

        .m-item-image {
          -webkit-box-ordinal-group: 2;
          order: 1;
        }
      }

      .craftCard {
        width: 200px;
        height: 200px;
        border: 2px solid #596164;
        box-sizing: border-box;
        p {
          font-weight: bold;
          font-size: 18px;
          letter-spacing: 0.005em;
          color: white;
        }
        a {
          font-size: 18px;
          line-height: 21px;
          letter-spacing: 0.005em;
          color: #ceb87f;
        }
        &-borTop {
          border-top: 1px solid #ceb87f;
        }
      }
    }
    .craftCard {
      width: 200px;
      height: 200px;
      border: 2px solid #596164;
      box-sizing: border-box;
      p {
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 0.005em;
        color: white;
      }
      a {
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.005em;
        color: #ceb87f;
      }
      &-borTop {
        border-top: 1px solid #ceb87f;
      }
    }
  }
  .studioCard {
    background: #2d2d2d;
    &__content {
      p {
        border-top: 1px solid #ceb87f;
        font-weight: bold;
        font-size: 18px;
        line-height: 160%;
        letter-spacing: 0.005em;
        color: #ffffff;
      }
    }
  }
}
</style>