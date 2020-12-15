<template>
  <div id="activity">
    <div class="web d-none d-mb-block">
      <div
        class="activityTable w-100 d-flex align-items-center flex-row"
        v-for="(item, index) in activityMsg"
        :key="'AT__' + index"
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
            v-for="(item, index1) in activityMsg"
            :key="index1"
            @click="goActivityInfo(item)"
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
      activityMsg: [
        {
          year: "2020",
          date: "10-08",
          context:
            "轉知中華民國對外貿易發展協會主辦「跨世代設計美學與大師有約-台灣設計X精品美學」講座",
        },
        {
          year: "2020",
          date: "10-07",
          context:
            "轉知 文化部委託藝創工會執行「藝文工作者勞動及法律相關權益推廣研討會」，10月12、13日兩日於國立台北大學資訊大樓3樓國際會議廳舉行",
        },
        {
          year: "2020",
          date: "10-06",
          context:
            "轉知新北市政府教育局主辦，新北市立鶯歌高級工商職業學校承辦之「2020新北市全國精品金工競賽」",
        },
        {
          year: "2020",
          date: "10-05",
          context: "轉知 臺中市纖維工藝博物館辦理-第三屆纖維創作獎",
        },
        {
          year: "2020",
          date: "08-07",
          context: "【2020臺北設計獎徵件】即日起徵件至7月15日",
        },
      ],
    };
  },
  methods: {
    goActivityInfo() {
      this.$router.push({ name: "activityInfo" });
    },
  },
};
</script>

<style lang="scss">
#activity {
  .web {
    padding-top: 0;
    margin-left: 0;
    .activityTable {
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