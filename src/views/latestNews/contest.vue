<template>
  <div id="contest">
    <div class="web d-none d-mb-block">
      <div
        class="contestTable w-100 d-flex align-items-center flex-row"
        v-for="(item, index) in contestMsg"
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
            v-for="(item, index1) in contestMsg"
            :key="index1"
            @click="goContestInfo(item)"
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
      contestMsg: [
        {
          year: "2020",
          date: "07-24",
          context:
            "轉知 故宮博物院教育展資處辦理「2020故宮線上策展人計畫徵選活動」",
        },
        {
          year: "2020",
          date: "05-26",
          context:
            "轉知新竹市文化局來函辦理「2020新竹市金玻獎  文創設計工藝創作比賽」",
        },
        {
          year: "2020",
          date: "05-21",
          context:
            "轉知新北市政府教育局主辦，新北市立鶯歌高級工商職業學校承辦之「2020新北市全國精品金工競賽」",
        },
        {
          year: "2020",
          date: "05-19",
          context: "轉知 臺中市纖維工藝博物館辦理-第三屆纖維創作獎",
        },
        {
          year: "2020",
          date: "05-07",
          context: "轉知 桃園市立美術館辦理「桃源國際藝術獎」",
        },
      ],
    };
  },
  methods: {
    goContestInfo() {
      this.$router.push({ name: "contestInfo" });
    },
  },
};
</script>

<style lang="scss">
#contest {
  .web {
    padding-top: 0;
    margin-left: 0;
    .contestTable {
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
          white-space: nowrap;
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