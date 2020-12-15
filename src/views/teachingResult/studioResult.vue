<template>
  <div id="studioResult">
    <div class="web d-none d-mb-block">
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

    <div class="phone d-block d-mb-none">
      <div class="pl-30 pt-70 pb-80 mb-100">
        <div class="studioBG">
          <div class="px-25 studioBG__trans">
            <el-row>
              <el-col :span="12" v-for="(item, index1) in crafts" :key="index1">
                <div
                  class="w-100 d-flex align-items-center justify-content-center flex-column"
                >
                  <img :src="item.imgURL" alt="" width="110px" />
                  <div class="b-0 craftCard">
                    <div class="p-10">
                      <div class="p-10 craftCard__title text-center">
                        <p class="m-0">{{ item.name_ch }}</p>
                      </div>
                      <router-link
                        class="text-decoration-none"
                        :to="{
                          name: 'studioResultInfo',
                          params: { craft: item.name_en },
                        }"
                      >
                        VIEW MORE
                      </router-link>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
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
  .web {
    padding-top: 0;
    margin-left: 0;
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
            color: white;
          }
          a {
            font-size: 18px;
            line-height: 21px;
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
          color: white;
        }
        a {
          font-size: 18px;
          line-height: 21px;
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
          color: #ffffff;
        }
      }
    }
  }

  .phone {
    background: white;
    .studioBG {
      background: #2d2d2d;
      &__trans {
        transform: translateY(-2rem);
      }
      .craftCard {
        border: 1px solid #596164;
        transform: translateY(-1rem);
        &__title {
          font-weight: bold;
          font-size: 12px;
          line-height: 120%;
          letter-spacing: 0.015em;
          color: #ffffff;
          border-bottom: 1px solid #ceb87f;
        }
        a {
          font-size: 10px;
          line-height: 12px;
          color: #ceb87f;
        }
      }
    }
  }
}
</style>