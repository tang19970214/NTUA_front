<template>
  <div id="crafts">
    <div class="web d-none d-mb-block">
      <div class="d-flex justify-content-around studioGroup">
        <div
          class="m-item d-flex align-items-center flex-column"
          v-for="(item, index) in crafts"
          :key="index"
        >
          <img :src="item.imgURL" class="m-item-image w-100" />
          <div class="m-item-title d-flex justify-content-center">
            <div
              class="craftCard d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
            >
              <div class="mb-30">
                <p class="m-0">{{ item.name_ch }}</p>
                <p class="m-0">{{ item.name_en }}</p>
              </div>
              <div class="pt-10 craftCard-borTop">
                <a
                  class="text-decoration-none cur-pointer"
                  @click="showIntroduce(item)"
                >
                  VIEW MORE</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 mt-60">
        <!-- ceramics -->
        <div class="craftIntroduce" v-if="showCrafts == 'CERAMICS'">
          <div class="w-100">
            <p class="m-0 craftIntroduce-title">陶瓷工藝創作專業工坊</p>
            <p class="m-0 craftIntroduce-smallTxt">Ceramics Studio</p>
          </div>
          <div class="w-100 mt-70">
            <img src="@/assets/images/craft/ceramicsIntroduce.jpg" alt="" />
          </div>
          <div
            class="w-100 mt-70 d-flex align-items-center justify-content-start"
          >
            <div
              class="d-flex align-items-center justify-content-center flex-column pos-relative"
              style=""
            >
              <img src="@/assets/images/craft/ceramics.png" alt="" />
              <div
                class="craftIntroduce-Card d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
              >
                <div class="mb-30">
                  <p class="m-0">1樓陶瓷工藝創作專業工坊</p>
                </div>
                <div class="pt-10 craftIntroduce-borTop">
                  <router-link
                    class="text-decoration-none"
                    :to="{ name: 'equipment' }"
                  >
                    VIEW MORE
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- metalworking -->
        <div class="craftIntroduce" v-else-if="showCrafts == 'METALWORKING'">
          <div class="w-100">
            <p class="m-0 craftIntroduce-title">金屬工藝創作專業工坊</p>
            <p class="m-0 craftIntroduce-smallTxt">
              Jewelry and Metal Arts Studio
            </p>
          </div>
          <div class="w-100 mt-70">
            <img src="@/assets/images/craft/metalworkingIntroduce.jpg" alt="" />
          </div>
          <div
            class="w-100 mt-70 d-flex align-items-center justify-content-start"
          >
            <div
              class="d-flex align-items-center justify-content-center flex-column pos-relative"
              style=""
            >
              <img src="@/assets/images/craft/metalworking.png" alt="" />
              <div
                class="craftIntroduce-Card d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
              >
                <div class="mb-30">
                  <p class="m-0">工藝大樓2樓-金屬工藝創作專業工坊</p>
                </div>
                <div class="pt-10 craftIntroduce-borTop">
                  <router-link
                    class="text-decoration-none"
                    :to="{ name: 'equipment' }"
                  >
                    VIEW MORE
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- woodworking -->
        <div class="craftIntroduce" v-else-if="showCrafts == 'WOODWORKING'">
          <div class="w-100">
            <p class="m-0 craftIntroduce-title">木材工藝創作專業工坊</p>
            <p class="m-0 craftIntroduce-smallTxt">Woodworking Arts Studio</p>
          </div>
          <div class="w-100 mt-70">
            <img src="@/assets/images/craft/woodworkingIntroduce.jpg" alt="" />
          </div>
          <div
            class="w-100 mt-70 d-flex align-items-center justify-content-start"
          >
            <div
              class="d-flex align-items-center justify-content-center flex-column pos-relative"
              style=""
            >
              <img src="@/assets/images/craft/woodworking.png" alt="" />
              <div
                class="craftIntroduce-Card d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
              >
                <div class="mb-30">
                  <p class="m-0">工藝大樓1樓-木材工藝創作專業工坊教室</p>
                </div>
                <div class="pt-10 craftIntroduce-borTop">
                  <router-link
                    class="text-decoration-none"
                    :to="{ name: 'equipment' }"
                  >
                    VIEW MORE
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- product -->
        <div class="craftIntroduce" v-else-if="showCrafts == 'PRODUCT'">
          <div class="w-100">
            <p class="m-0 craftIntroduce-title">產品設計與複媒創作專業工坊</p>
            <p class="m-0 craftIntroduce-smallTxt">Product Design Studio</p>
          </div>
          <div class="w-100 mt-70">
            <img src="@/assets/images/craft/productIntroduce.jpg" alt="" />
          </div>
          <div
            class="w-100 mt-70 d-flex align-items-center justify-content-start"
          >
            <div
              class="d-flex align-items-center justify-content-center flex-column pos-relative"
              style=""
            >
              <img src="@/assets/images/craft/product.png" alt="" />
              <div
                class="craftIntroduce-Card d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
              >
                <div class="mb-30">
                  <p class="m-0">工藝大樓1樓-木材工藝創作專業工坊教室</p>
                </div>
                <div class="pt-10 craftIntroduce-borTop">
                  <router-link
                    class="text-decoration-none"
                    :to="{ name: 'equipment' }"
                  >
                    VIEW MORE
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb-none">
      <div class="pl-50 pt-70 pb-20">
        <div class="crafts w-100">
          <div
            class="craftsCard w-100 pl-30 d-flex align-items-center justify-content-start"
          >
            <div
              class="d-flex flex-column align-items-center justify-content-center"
            >
              <img
                src="@/assets/images/craft/craft_1.png"
                alt=""
                width="110px"
              />
              <div
                class="craftsCard-info d-flex align-items-center justify-content-center flex-column"
              >
                <div class="py-10">
                  <p class="m-0">陶瓷</p>
                </div>
                <a
                  class="text-decoration-none mt-10"
                  @click="goCraft('CERAMICS')"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
            <div
              class="d-flex flex-column align-items-center justify-content-center ml-30"
            >
              <img
                src="@/assets/images/craft/craft_2.png"
                alt=""
                width="110px"
              />
              <div
                class="craftsCard-info d-flex align-items-center justify-content-center flex-column"
              >
                <div class="py-10">
                  <p class="m-0">金工</p>
                </div>
                <a
                  class="text-decoration-none mt-10"
                  @click="goCraft('METALWORKING')"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
            <div
              class="d-flex flex-column align-items-center justify-content-center ml-30"
            >
              <img
                src="@/assets/images/craft/craft_3.png"
                alt=""
                width="110px"
              />
              <div
                class="craftsCard-info d-flex align-items-center justify-content-center flex-column"
              >
                <div class="py-10">
                  <p class="m-0">木工</p>
                </div>
                <a
                  class="text-decoration-none mt-10"
                  @click="goCraft('WOODWORKING')"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
            <div
              class="d-flex flex-column align-items-center justify-content-center ml-30"
            >
              <img
                src="@/assets/images/craft/craft_4.png"
                alt=""
                width="110px"
              />
              <div
                class="craftsCard-info d-flex align-items-center justify-content-center flex-column"
              >
                <div class="py-10">
                  <p class="m-0">產品</p>
                </div>
                <a
                  class="text-decoration-none mt-10"
                  @click="goCraft('PRODUCT')"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100">
        <div class="py-20">
          <PhoneTitle
            :title="getCraftTitle($route.params.sort).title_ch"
            :filterDate="false"
          />
          <p class="m-0 craftEngTitle">{{ craftsTitle.title_en }}</p>
        </div>
        <div class="bg-white">
          <div class="pl-50">
            <div class="pl-50">
              <div class="w-100 d-flex align-items-start flex-row">
                <strong>主持人</strong>
                <span class="px-10"></span>
                <div class="d-flex align-items-center flex-column">
                  <p class="m-0">呂琪昌老師</p>
                  <p class="m-0">梁家豪老師</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneTitle from "@/components/PhoneTitle.vue";

export default {
  components: {
    PhoneTitle,
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
      showCrafts: this.$route.params.sort,
      craftsTitle: {
        title_ch: "",
        title_en: "",
      },
    };
  },
  methods: {
    showIntroduce(data) {
      // this.$router.push({ name: "crafts", params: { sort: data.name_en } });
      // console.log(data);
      // console.log(this.$route.params.sort);
      // this.$route.params.sort = data.name_en;
      this.showCrafts = data.name_en;
    },
  },
  computed: {
    getCraftTitle() {
      return (data) => {
        console.log(data);
        if (data == "CERAMICS") {
          this.craftsTitle.title_ch = "陶瓷工藝創作專業工坊";
          this.craftsTitle.title_en = "Ceramics Studio";
          return this.craftsTitle;
        } else if (data == "METALWORKING") {
          this.craftsTitle.title_ch = "金屬工藝創作專業工坊";
          this.craftsTitle.title_en = "Jewelry and Metal Arts Studio";
          return this.craftsTitle;
        } else if (data == "WOODWORKING") {
          this.craftsTitle.title_ch = "木材工藝創作專業工坊";
          this.craftsTitle.title_en = "Woodworking Arts Studio";
          return this.craftsTitle;
        } else if (data == "PRODUCT") {
          this.craftsTitle.title_ch = "產品設計與複媒創作專業工坊";
          this.craftsTitle.title_en = "Product Design Studio";
          return this.craftsTitle;
        }
      };
    },
  },
};
</script>

<style lang="scss">
#crafts {
  .web {
    margin-top: 140px;
    .studioGroup {
      width: 100%;
      background: #2d2d2d;

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

    .craftIntroduce {
      background: #2d2d2d;
      padding: 50px 120px 240px 170px;
      color: white;
      &-title {
        font-weight: bold;
        font-size: 36px;
        line-height: 160%;
        letter-spacing: 0.005em;
        color: #ceb87f;
        border-bottom: 1px solid #ceb87f;
      }
      &-smallTxt {
        font-size: 14px;
        line-height: 160%;
        text-align: right;
        letter-spacing: 0.02em;
        color: #ceb87f;
      }
      &-Card {
        border: 2px solid #596164;
        box-sizing: border-box;
        padding: 70px 20px 20px 20px;
        position: absolute;
        margin-top: 25rem;
        p {
          font-weight: bold;
          font-size: 18px;
          line-height: 160%;
          text-align: center;
          letter-spacing: 0.005em;
          color: #ffffff;
        }
      }
      &-borTop {
        border-top: 1px solid #ceb87f;
        a {
          font-size: 18px;
          line-height: 21px;
          letter-spacing: 0.005em;
          color: #ceb87f;
        }
      }
    }
  }

  .phone {
    background: white;
    .crafts {
      .craftsCard {
        overflow-x: auto;
        height: 190px;
        background: #2d2d2d;
        &-info {
          width: 75px;
          height: 75px;
          border: 1px solid #596164;
          box-sizing: border-box;
          div {
            border-bottom: 1px solid #ceb87f;
            p {
              font-weight: bold;
              font-size: 12px;
              line-height: 120%;
              text-align: center;
              letter-spacing: 0.015em;
              color: #ffffff;
            }
          }
          a {
            font-size: 10px;
            line-height: 12px;
            text-align: center;
            letter-spacing: 0.03em;
            color: #ceb87f;
          }
        }
      }
    }
    .craftEngTitle {
      margin-left: 20px;
      margin-right: 35px;
      border-top: 1px solid #ceb87f;
      font-size: 12px;
      line-height: 160%;
      letter-spacing: 0.02em;
      color: #ceb87f;
    }
  }
}
</style>