<template>
  <div class="relatedLink">
    <div class="web d-none d-mb-block">
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
              <!-- <div class="w-100">
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
              </div> -->
            </div>
          </div>
        </div>

        <div class="newsCard-contentCard">
          <div class="w-100">
            <div
              class="relatedLinkTable w-100 d-flex align-items-center justify-content-between flex-row"
              v-for="item in linksList"
              :key="item.id"
            >
              <p class="m-0" v-for="(items, index) in item" :key="index">
                {{ items.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb-none pt-70">
      <PhoneTitle title="相關連結" :filterDate="false" />
      <div class="p-30 relatedCard">
        <div
          class="w-100 relatedCard__content mb-30"
          v-for="item in linksList_phone"
          :key="item.id"
        >
          <p class="m-0 pb-20">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadShowIMG from "@/components/LoadShowIMG.vue";
import PhoneTitle from "@/components/PhoneTitle.vue";

export default {
  components: {
    LoadShowIMG,
    PhoneTitle,
  },
  data() {
    return {
      relatedLinkSort: [
        {
          pathURL: "relatedLink",
          pathName: "相關連結",
        },
      ],
      listQuery: {
        page: 1,
        limit: 20,
        key: undefined,
      },
      linksList: [],
      linksList_phone: [],
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
  methods: {
    getList() {
      this.$api.relatedlink(this.listQuery).then((res) => {
        const linksListSplit = [];
        res.data.data.forEach((item, index, arr) => {
          if (index % 2 === 0) {
            return linksListSplit.push(arr.slice(index, index + 2));
          }
        });
        this.linksList = linksListSplit;
        this.linksList_phone = res.data.data;
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss">
.relatedLink {
  .web {
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
          color: #52505a;
          cursor: pointer;
          &:hover {
            color: #563f05;
            font-weight: bold;
          }
        }
      }
      .active {
        color: #563f05;
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

  .phone {
    .relatedCard {
      background: #2d2d2d;
      &__content {
        p {
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.2em;
          color: #ffffff;
          border-bottom: 1px solid #000000;
        }
      }
    }
  }
}
</style>