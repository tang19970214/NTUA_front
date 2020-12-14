<template>
  <div id="bulletin">
    <div class="web d-none d-mb-block">
      <div
        class="bulletinTable w-100 d-flex align-items-center flex-row"
        v-for="(item, index) in bulletinMsg"
        :key="'BT__' + index"
      >
        <p class="m-0" style="min-width: 220px; max-width: 220px">
          {{ item.year }}-{{ item.date }}
        </p>
        <p class="m-0">{{ item.context }}</p>
      </div>
      <div class="w-100 mt-90">
        <Pagination :needPage="true" :pageNumber="5" />
      </div>
    </div>

    <div class="phone d-block d-mb-none">
      <div class="w-100 newsInfo">
        <div class="px-20 pt-40 pb-90">
          <div
            class="w-100 newsInfo__card d-flex flex-row mb-15"
            v-for="(item, index1) in bulletinMsg"
            :key="index1"
            @click="goBulletinInfo(item)"
          >
            <div class="newsInfo__card-date">
              <div class="p-15 d-flex flex-column align-items-center">
                <p class="m-0">{{ item.year }}</p>
                <span class="my-8"></span>
                <p class="m-0">{{ item.date }}</p>
              </div>
            </div>
            <div class="newsInfo__card-context d-flex align-items-center">
              <div class="p-15">
                <p class="m-0">{{ item.context }}</p>
              </div>
            </div>
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
      bulletinMsg: [
        {
          year: "2020",
          date: "10-13",
          context: "109學年度第2學期有章藝術博物館教研場地申請",
        },
        {
          year: "2020",
          date: "07-31",
          context: "轉知秘書室宣傳 辦理校友證使用線上辦理",
        },
        {
          year: "2020",
          date: "07-16",
          context:
            "公告7/27(一)9:00-17:00電力檢修 工藝大樓與陶瓷教室不開放使用",
        },
        {
          year: "2020",
          date: "06-22",
          context:
            "轉知 109年度深耕計畫【獎助教職員生參加國際教學展演競賽】開放申請，系上申請8月13日(四) 下午5時前截止。",
        },
        {
          year: "2020",
          date: "06-19",
          context: "公告 108-2 碩班評圖抵免通過名單",
        },
        {
          year: "2020",
          date: "05-28",
          context:
            "轉知 109年 教育部鼓勵學生參加藝術與設計類國際競賽計畫申請案",
        },
      ],
    };
  },
  methods: {
    goBulletinInfo(data) {
      this.$router.push({ name: "bulletinInfo" });
    },
  },
};
</script>

<style lang="scss">
#bulletin {
  .web {
    padding-top: 0px !important;
    margin-left: 0px !important;
    .bulletinTable {
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

  .phone {
    .newsInfo {
      background: #2d2d2d;
      &__card {
        background: #efefef;
        border-radius: 8px;
        &-date {
          min-width: 85px;
          div {
            background: #ceb87f;
            border-radius: 8px;
            p {
              font-size: 14px;
              line-height: 17px;
              letter-spacing: 0.235em;
              color: #ffffff;
            }
            span {
              width: 20px;
              height: 3px;
              background: #ffffff;
            }
          }
        }
        &-context {
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.2em;
          color: #596164;
        }
      }
    }
  }
}
</style>