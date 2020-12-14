<template>
  <div id="equipment">
    <div class="web d-none d-mb-block">
      <div class="d-flex justify-content-around studioGroup mb-60">
        <div class="p-50 pos-relative">
          <el-row>
            <el-col
              :span="6"
              class="p-20 mb-120"
              v-for="(item, index) in equipment"
              :key="index"
            >
              <div class="m-item d-flex align-items-center flex-column">
                <div class="pos-relative">
                  <img
                    :src="item.imgURL"
                    class="m-item-image w-100"
                    width="100%"
                  />
                  <div
                    class="w-100 m-item-title d-flex justify-content-center pos-absolute b-0"
                    style="margin-bottom: -7.5rem"
                  >
                    <div class="px-20">
                      <div
                        class="craftCard d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
                      >
                        <div class="mb-30">
                          <p class="m-0">{{ item.title }}</p>
                        </div>
                        <div class="pt-10 craftCard-borTop">
                          <a
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
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb-none">
      <div class="equipmentCard w-100">
        <div class="py-30 d-flex justify-content-center flex-column">
          <div
            class="d-flex align-items-center justify-content-center flex-column"
            v-for="(item, index1) in equipment"
            :key="index1"
          >
            <img :src="item.imgURL" alt="" width="200px" />
            <div
              class="equipmentCard__information px-30 pt-40 pb-10 d-flex align-items-center justify-content-center flex-column"
            >
              <strong>{{ item.title }}</strong>
              <a
                class="text-decoration-none cur-pointer px-20 pt-8 mt-15"
                @click="showIntroduce(item)"
              >
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      equipment: [
        {
          imgURL: require("@/assets/images/equipment/equipment1.png"),
          title: "工藝大樓B1-系所專屬展覽空間",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment2.png"),
          title: "工藝大樓1樓-木材工藝創作專業工作坊教室",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment3.png"),
          title: "1樓陶瓷工藝創作專業工坊",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment4.png"),
          title: "工藝大樓2樓-金屬工藝創作專業工坊",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment5.png"),
          title: "工藝大樓3樓教室等空間",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment6.png"),
          title: "工藝大樓4樓-數位工程製造室",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment7.png"),
          title: "工藝大樓4樓-產品設計與複媒創作專業工坊",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment8.png"),
          title: "工藝大樓4樓-討論與閱讀室",
        },
        {
          imgURL: require("@/assets/images/equipment/equipment9.png"),
          title: "工藝大樓3樓-教授研究室",
        },
      ],
    };
  },
  methods: {
    showIntroduce(data) {
      console.log(data);
      this.$router.push({
        name: "equipmentInfo",
        params: { class: data.title },
      });
    },
  },
};
</script>

<style lang="scss">
#equipment {
  .web {
    // margin-top: 140px;
    .studioGroup {
      width: 100%;
      background: #2d2d2d;
      .m-item-title {
        order: 2;
      }
      .m-item-image {
        order: 1;
      }
      > .m-item:nth-child(odd) {
        .m-item-title {
          order: 2;
        }
        .m-item-image {
          order: 1;
        }
      }
      .craftCard {
        width: 17vw;
        border: 2px solid #596164;
        box-sizing: border-box;
        p {
          font-weight: bold;
          font-size: 16px;
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
  }
  .phone {
    .equipmentCard {
      background: #2d2d2d;
      &__information {
        transform: translateY(-1.8rem);
        border: 2px solid #596164;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.005em;
        strong {
          color: #ffffff;
        }
        a {
          color: #ceb87f;
          border-top: 1px solid #CEB87F;
        }
      }
    }
  }
}
</style>