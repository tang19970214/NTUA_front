<template>
  <div class="relatedLink">
    <p class="m-0 Txt-title">Related links</p>
    <div class="mt-70 newsCard">
      <div class="newsCard-sortText">
        <router-link
          class="mr-35 mb-15 d-flex align-items-center justify-content-end flex-row text-decoration-none"
          :class="{ active: $route.name == item.pathURL }"
          :to="{ name: item.pathURL }"
          v-for="(item, index) in relatedLinkSort"
          :key="'NS__' + index"
        >
          <p class="m-0">{{ item.pathName }}</p>
          <i class="el-icon-minus"></i>
          <p class="m-0">0{{ index + 1 }}</p>
        </router-link>
      </div>

      <LoadShowIMG />

      <div class="w-100 newsCard-title">
        <div class="p-60">
          <div class="w-100 d-flex flex-row">
            <div class="w-100">
              <p class="m-0">{{ getPathName(relatedLinkSort) }}</p>
            </div>
            <div class="w-100">
              <div
                class="w-100 d-flex justify-content-end newsCard-title_chooseYear"
              >
                <select>
                  <option
                    :value="item"
                    v-for="item in getYearGrouop()"
                    :key="item"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="newsCard-contentCard">
        <div class="w-100">
          <div
            class="relatedLinkTable w-100 d-flex align-items-center justify-content-between flex-row"
            v-for="(item, index) in linksList"
            :key="'BT__' + index"
          >
            <p class="m-0">{{ item.leftContent }}</p>
            <p class="m-0">{{ item.rightContent }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadShowIMG from "@/components/LoadShowIMG.vue";

export default {
  components: {
    LoadShowIMG
  },
  data() {
    return {
      relatedLinkSort: [
        {
          pathURL: "relatedLink",
          pathName: "相關連結",
        },
      ],
      linksList: [
        {
          leftContent: "國立臺灣師範大學 設計研究所",
          rightContent: "國立台北藝術大學",
        },
        {
          leftContent: "國立臺南藝術大學 視覺藝術學院",
          rightContent: "國立台灣科技大學 工商業設計系暨設計研究所",
        },
        {
          leftContent: "國立台北科技大學 工業設計系暨創新設計研究所",
          rightContent: "國立雲林科技大學 設計學院系所",
        },
        {
          leftContent: "國立台中技術學院 商業設計系所",
          rightContent: "國立台北教育大學 造型設計學系",
        },
        {
          leftContent: "國立成功大學 工業設計系",
          rightContent: "國立高雄師範大學 藝術學院",
        },
        {
          leftContent: "國立新竹教育大學 藝術與設計學系",
          rightContent: "明道大學 設計學院",
        },
        {
          leftContent: "東海大學 工業設計系",
          rightContent: "銘傳大學 商業設計學系",
        },
        {
          leftContent: "實踐大學 工業產品設計系",
          rightContent: "大同大學 工業設計學系/ 研究所",
        },
        {
          leftContent: "大葉大學 設計暨藝術學院",
          rightContent: "朝陽科技大學 設計學院",
        },
        {
          leftContent: "崑山科技大學 視覺傳達系",
          rightContent: "樹德科技大學 設計學院",
        },
        {
          leftContent: "嶺東科技大學 流行設計學系/研究所",
          rightContent: "環球技術學院 商品設計系",
        },
        {
          leftContent: "台南科技大學 設計學院",
          rightContent: "亞東技術學院 工商業設計系",
        },
        {
          leftContent: "東方技術學院 美術工藝科傳播設計系",
          rightContent: "親民技術學院 生活產品設計系",
        },
        {
          leftContent: "華梵大學 藝術設計學院",
          rightContent: "建國科技大學 商業設計系",
        },
        {
          leftContent: "華梵大學 藝術設計學院",
          rightContent: "建國科技大學 商業設計系",
        },
        {
          leftContent: "樹德科技大學 生活產品設計系",
          rightContent: "樹德科技大學應用設計研究所",
        },
        {
          leftContent: "高鳳技術學院 流行工藝設計系",
          rightContent: "國立台灣工藝研究所",
        },
        {
          leftContent: "新北市立鶯歌陶瓷博物館",
          rightContent: "臺灣陶藝競賽網",
        },
        {
          leftContent: "全球華人藝術網",
          rightContent: "當代藝術基金會",
        },
        {
          leftContent: "Arttime 藝術網",
          rightContent: "台灣設計- 波酷網",
        },
      ],
    };
  },
  computed: {
    getPathName() {
      return (data) => {
        let pName = "";
        data.forEach((item) => {
          if (this.$route.name == item.pathURL) {
            pName = item.pathName;
          }
        });
        return pName;
      };
    },
    getYearGrouop() {
      return () => {
        const YY = new Date().getFullYear();
        let countYear = [];
        for (let i = YY - 5; i <= YY; i++) {
          countYear.push(i);
        }
        countYear.reverse();
        return countYear;
      };
    },
  },
};
</script>

<style lang="scss">
.relatedLink {
  padding-top: 420px;
  margin-left: 120px;

  .Txt-title {
    font-size: 48px;
    line-height: 56px;
    color: #596164;
  }

  .newsCard {
    background-color: white;
    padding-bottom: 90px;
    &-sortText {
      position: absolute;
      right: 0;
      z-index: 100;
      margin-top: 45px;
      a {
        font-weight: 400;
        font-size: 24px;
        line-height: 210%;
        letter-spacing: 0.25em;
        color: #52505A;
        cursor: pointer;
        &:hover {
          color: #563F05;
          font-weight: bold;
        }
      }
    }
    .active {
      color: #563F05;
      font-weight: bold;
    }
    &-title {
      p {
        width: 130px;
        font-size: 64px;
        line-height: 75px;
        color: #ceb87f;
      }
      &_chooseYear {
        select {
          width: 150px;
          height: 35px;
          border: 0;
          border-radius: 15px;
          background: #ceb87f;
          text-align-last: center;
          font-size: 18px;
          line-height: 21px;
          letter-spacing: 0.005em;
          color: #52505a;
          cursor: pointer;
        }
      }
    }
    &-contentCard {
      background: #2d2d2d;
      padding: 60px 240px 170px 90px;
      .relatedLinkTable {
        padding: 30px;
        border-bottom: 1px solid #000000;
        p {
          font-size: 20px;
          line-height: 25px;
          letter-spacing: 0.2em;
          color: #ffffff;
        }
      }
    }
  }
}
</style>