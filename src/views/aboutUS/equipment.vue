<template>
  <div id="equipment">
    <div class="d-flex justify-content-around studioGroup mb-60">
      <div
        class="m-item d-flex align-items-center flex-column"
        v-for="(item, index) in equipment"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      equipment: [
        {
          imgURL: require("@/assets/images/equipment/equipment1.png"),
          title: "工藝大樓B1-系所專屬展覽空間"
        },
        {
          imgURL: require("@/assets/images/equipment/equipment2.png"),
          title: "工藝大樓1樓-木材工藝創作專業工作坊教室"
        },
        {
          imgURL: require("@/assets/images/equipment/equipment3.png"),
          title: "1樓陶瓷工藝創作專業工坊"
        },
        {
          imgURL: require("@/assets/images/equipment/equipment4.png"),
          title: "工藝大樓2樓-金屬工藝創作專業工坊"
        },
        {
          imgURL: require("@/assets/images/equipment/equipment5.png"),
          title: "工藝大樓3樓教室等空間"
        },
        {
          imgURL: require("@/assets/images/equipment/equipment6.png"),
          title: "工藝大樓4樓-數位工程製造室"
        },
        {
          imgURL: require("@/assets/images/equipment/equipment7.png"),
          title: "工藝大樓4樓-產品設計與複媒創作專業工坊"
        },
        {
          imgURL: require("@/assets/images/equipment/equipment8.png"),
          title: "工藝大樓4樓-討論與閱讀室"
        },
        {
          imgURL: require("@/assets/images/equipment/equipment9.png"),
          title: "工藝大樓3樓-教授研究室"
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#equipment {
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
}
</style>