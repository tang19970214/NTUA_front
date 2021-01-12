<template>
  <div id="crafts">
    <div class="web d-none d-mb-block">
      <div class="d-flex justify-content-around studioGroup">
        <div
          class="m-item d-flex align-items-center flex-column"
          v-for="(item, index) in crafts"
          :key="index"
        >
          <img
            :src="item.imgURL"
            v-scroll-to="{ el: '#crafts', offset: 580, duration: 1500 }"
            class="m-item-image w-100 cur-pointer"
            @click="showIntroduce(item)"
          />
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
                  v-scroll-to="{ el: '#crafts', offset: 580, duration: 1500 }"
                  class="text-decoration-none cur-pointer"
                  @click="showIntroduce(item)"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="crafts" class="w-100 mt-60">
        <div class="craftIntroduce">
          <div class="w-100">
            <p class="m-0 craftIntroduce-title">
              {{ craftsTitle.title_ch }}
            </p>
            <p class="m-0 craftIntroduce-smallTxt">
              {{ craftsTitle.title_en }}
            </p>
          </div>

          <div class="w-100 mt-70 bg-white craftIntroduce__card">
            <el-row>
              <el-col :span="6">
                <div
                  class="w-100 d-flex align-items-center justify-content-center mt-40"
                  v-for="item in craftsContent"
                  :key="item.id"
                >
                  <div
                    class="craftIntroduce__card-leftBlock d-flex align-items-start justify-content-center"
                    v-if="item.roomTypeId == 'SYS_CLASSDATA_MEMBER'"
                  >
                    <strong class="pl-15">{{ item.title }}</strong>
                    <span class="mx-10 mt-13"></span>
                    <div class="d-flex flex-column">
                      <p
                        class="m-0"
                        v-for="(items, index) in item.summary.split('\n')"
                        :key="'SMR__' + index"
                      >
                        {{ items }}
                      </p>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col class="my-10" :span="18">
                <div
                  class="craftIntroduce__card-rightBlock w-100 d-flex align-items-center justify-content-start"
                  v-for="item in craftsContent"
                  :key="item.id"
                >
                  <div
                    class="p-30 d-flex align-items-start flex-row"
                    v-if="item.roomTypeId == 'SYS_CLASSDATA_CONTENT'"
                  >
                    <strong class="pl-15" v-if="item.title">
                      {{ item.title }}
                    </strong>
                    <span class="mx-10 mt-13" v-if="item.title"></span>
                    <p class="m-0">{{ item.summary }}</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>

          <div
            class="w-100 mt-70 d-flex align-items-center justify-content-start"
          >
            <div
              class="d-flex align-items-center justify-content-center flex-column pos-relative pr-30"
              v-for="item in craftsData"
              :key="item.id"
            >
              <img :src="item.coverPic" :alt="item.title" />
              <div
                class="craftIntroduce-Card d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
              >
                <div class="mb-30">
                  <p class="m-0">{{ item.title }}</p>
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

    <div class="phone crafts d-block d-mb-none">
      <div class="pl-20 py-20">
        <div class="w-100">
          <div
            class="crafts__Card pl-30 d-flex align-items-center justify-content-start"
          >
            <div
              class="mx-15 d-flex flex-column align-items-center justify-content-center"
              v-for="(item, index1) in crafts"
              :key="index1"
            >
              <img :src="item.imgURL" alt="" width="110px" />
              <div
                class="crafts__Card-info d-flex align-items-center justify-content-center flex-column"
              >
                <div class="py-10">
                  <p class="m-0">{{ item.name_ch }}</p>
                </div>
                <a
                  class="text-decoration-none mt-10"
                  @click="showIntroduce(item)"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100">
        <div class="py-20 crafts__resetBG">
          <PhoneTitle :title="craftsTitle.title_ch" :filterDate="false" />
          <p class="m-0 crafts__EngTitle">{{ craftsTitle.title_en }}</p>
        </div>

        <div class="bg-white">
          <div class="pl-20 pt-20 pb-40">
            <div
              class="crafts__host pl-15 mb-10"
              v-for="item in craftsContent"
              :key="item.id"
            >
              <div
                class="w-100 d-flex align-items-start flex-row"
                v-if="item.roomTypeId == 'SYS_CLASSDATA_MEMBER'"
              >
                <strong class="pl-20">{{ item.title }}</strong>
                <span class="mx-10 pt-10"></span>
                <div class="d-flex align-items-center flex-column">
                  <p
                    class="m-0"
                    v-for="(items, index) in item.summary.split('\n')"
                    :key="'SMR__' + index"
                  >
                    {{ items }}
                  </p>
                </div>
              </div>
            </div>

            <div class="w-100 overflow-x crafts__studio">
              <div class="w-100" v-for="item in craftsContent" :key="item.id">
                <div
                  class="p-15 d-flex align-items-start flex-row"
                  v-if="item.roomTypeId == 'SYS_CLASSDATA_CONTENT'"
                >
                  <strong class="pl-20" v-if="item.title">
                    {{ item.title }}
                  </strong>
                  <span class="mx-10 pt-10" v-if="item.title"></span>
                  <div class="d-flex align-items-center flex-column pr-20">
                    <p
                      class="m-0"
                      :style="
                        !item.title && craftsContent.length > 2
                          ? 'white-space: nowrap'
                          : ''
                      "
                    >
                      {{ item.summary }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-100 crafts__studioClass d-flex align-items-center justify-content-start overflow-x"
        >
          <div
            class="crafts__studioClass-classroom d-flex align-items-center justify-content-center flex-column px-20 pt-20"
            v-for="item in craftsData"
            :key="item.id"
          >
            <img :src="item.coverPic" :alt="item.title" width="200px" />
            <div
              class="px-30 pt-40 pb-10 d-flex align-items-center justify-content-center flex-column"
            >
              <strong>{{ item.title }}</strong>
              <router-link
                class="mt-10 px-20 pt-8 text-decoration-none"
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
</template>

<script>
import PhoneTitle from "@/components/PhoneTitle.vue";

export default {
  components: {
    PhoneTitle,
  },
  data() {
    let getCraftId = this.$route.params.sort.split("_")[2];
    return {
      listQuery: {
        RoomTypeId: "",
        DataTypeId: this.$route.params.sort,
        page: 1,
        limit: 20,
        key: undefined,
      },
      craftsListQuery: {
        RoomTypeId:
          getCraftId == "PRODUCTION"
            ? "SYS_CLASSROOM_PROD"
            : "SYS_CLASSROOM_" + getCraftId,
        page: 1,
        limit: 20,
        key: undefined,
      },
      crafts: [
        {
          imgURL: require("@/assets/images/craft/craft_1.png"),
          name_ch: "陶瓷",
          name_en: "CERAMICS",
        },
        {
          imgURL: require("@/assets/images/craft/craft_2.png"),
          name_ch: "金工",
          name_en: "METAL",
        },
        {
          imgURL: require("@/assets/images/craft/craft_3.png"),
          name_ch: "木工",
          name_en: "WOOD",
        },
        {
          imgURL: require("@/assets/images/craft/craft_4.png"),
          name_ch: "產品",
          name_en: "PRODUCTION",
        },
      ],
      craftsContent: [],
      craftsData: [],
      showCrafts: this.$route.params.sort,
      craftsTitle: {
        title_ch: "陶瓷工藝創作專業工坊",
        title_en: "Ceramics Studio",
      },
    };
  },
  methods: {
    showIntroduce(data) {
      if (data.name_en == "CERAMICS") {
        this.craftsTitle = {
          title_ch: "陶瓷工藝創作專業工坊",
          title_en: "Ceramics Studio",
        };
      } else if (data.name_en == "METAL") {
        this.craftsTitle = {
          title_ch: "金屬工藝創作專業工坊",
          title_en: "Jewelry and Metal Arts Studio",
        };
      } else if (data.name_en == "WOOD") {
        this.craftsTitle = {
          title_ch: "木材工藝創作專業工坊",
          title_en: "Woodworking Arts Studio",
        };
      } else if (data.name_en == "PRODUCTION") {
        this.craftsTitle = {
          title_ch: "產品設計與複媒創作專業工坊",
          title_en: "Product Design Studio",
        };
      }

      this.listQuery.DataTypeId = "SYS_CLASSTYPE_" + data.name_en;
      this.getList();
      if (data.name_en == "PRODUCTION") {
        this.craftsListQuery.RoomTypeId = "SYS_CLASSROOM_PROD";
      } else {
        this.craftsListQuery.RoomTypeId = "SYS_CLASSROOM_" + data.name_en;
      }
      this.getCrafts();
    },
    async getList() {
      await this.$api.crafts(this.listQuery).then((res) => {
        this.craftsContent = res.data.data;
        this.$store.commit("SETLOADING", false);
      });
    },
    getCrafts() {
      this.$api.classrooms(this.craftsListQuery).then((res) => {
        this.craftsData = res.data.data;
      });
    },
  },
  mounted() {
    this.$store.commit("SETLOADING", true);
    this.getList();
    this.getCrafts();
  },
};
</script>

<style lang="scss">
#crafts {
  .web {
    margin-left: 0;
    padding-top: 140px;
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

    .craftIntroduce {
      background: #2d2d2d;
      padding: 50px 120px 240px 170px;
      color: white;
      &-title {
        font-weight: bold;
        font-size: 36px;
        line-height: 160%;
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
          color: #ffffff;
        }
      }
      &-borTop {
        border-top: 1px solid #ceb87f;
        a {
          font-size: 18px;
          line-height: 21px;
          color: #ceb87f;
        }
      }
      &__card {
        &-leftBlock {
          width: calc(100% - 120px);
          font-size: 18px;
          line-height: 160%;
          color: #596164;
          strong {
            border-left: 4px solid #ceb87f;
          }
          span {
            min-width: 50px;
            max-width: 50px;
            height: 1px;
            background: #8c8f90;
          }
        }
        &-rightBlock {
          background: #2d2d2d;
          font-size: 18px;
          line-height: 160%;
          color: #ffffff;
          strong {
            min-width: 150px;
            border-left: 4px solid #ceb87f;
          }
          span {
            min-width: 50px;
            max-width: 50px;
            height: 1px;
            background: #8c8f90;
          }
        }
      }
    }
  }

  .phone {
    background: white;
    .crafts {
      &__Card {
        overflow-x: auto;
        height: 190px;
        background: #2d2d2d;
        &-info {
          width: 75px;
          height: 75px;
          transform: translateY(-0.8rem);
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
      &__resetBG {
        background: #efefef;
      }
      &__EngTitle {
        margin-left: 20px;
        margin-right: 35px;
        border-top: 1px solid #ceb87f;
        font-size: 12px;
        line-height: 160%;
        letter-spacing: 0.02em;
        color: #ceb87f;
      }
      &__host {
        strong {
          font-size: 14px;
          line-height: 160%;
          color: #596164;
          border-left: 4px solid #ceb87f;
        }
        span {
          width: 50px;
          border-bottom: 1px solid #8c8f90;
        }
        p {
          font-size: 14px;
          line-height: 160%;
          color: #596164;
        }
      }
      &__studio {
        background: #2d2d2d;
        strong {
          min-width: 120px;
          font-size: 14px;
          line-height: 160%;
          color: #ffffff;
          border-left: 4px solid #ceb87f;
        }
        span {
          min-width: 30px;
          max-width: 30px;
          border-bottom: 1px solid #8c8f90;
        }
        p {
          min-width: 340px;
          font-size: 14px;
          line-height: 160%;
          color: #ffffff;
        }
      }
      &__studioClass {
        background: #2d2d2d;
        &-classroom {
          // transform: translateY(-2.5rem);
          div {
            border: 2px solid #596164;
            transform: translateY(-2rem);
            strong {
              font-size: 14px;
              line-height: 160%;
              color: #ffffff;
            }
            a {
              border-top: 1px solid #ceb87f;
              font-size: 14px;
              line-height: 16px;
              color: #ceb87f;
            }
          }
        }
      }
    }
  }
}
</style>