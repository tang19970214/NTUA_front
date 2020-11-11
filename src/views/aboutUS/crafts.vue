<template>
  <div id="crafts">
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
                <a class="text-decoration-none" href=""> VIEW MORE</a>
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
                <a class="text-decoration-none" href=""> VIEW MORE</a>
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
                <a class="text-decoration-none" href=""> VIEW MORE</a>
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
                <a class="text-decoration-none" href=""> VIEW MORE</a>
              </div>
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
      showCrafts: "",
    };
  },
  methods: {
    showIntroduce(data) {
      this.showCrafts = data.name_en;
    },
  },
};
</script>

<style lang="scss">
#crafts {
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
</style>