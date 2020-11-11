<template>
  <div id="studioResult">
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
              <a class="text-decoration-none" href=""> VIEW MORE</a>
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
    };
  },
};
</script>

<style lang="scss">
#studioResult {
  margin-top: 60px;
  background: #2d2d2d;
  height: 500px;

  .studioGroup {
    width: calc(100% - 120px);
    position: absolute;
    margin-top: -60px;

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
</style>