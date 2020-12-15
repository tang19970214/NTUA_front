<template>
  <div id="contestInfo">
    <div class="d-block d-mb-none pt-70">
      <div class="contestTitle w-100 d-flex align-items-center flex-row">
        <router-link class="pl-20" :to="{ name: 'contest' }">
          <img src="@/assets/images/icon/arrowLeft.png" alt="" />
        </router-link>
        <PhoneTitle title="競賽資訊" :filterDate="false" />
      </div>
      <div class="w-100 newsInfo">
        <div class="px-20 pt-40 pb-90">
          <div class="w-100 newsInfo__card">
            <div class="w-100 d-flex flex-row">
              <div class="newsInfo__card-date">
                <div class="p-15 d-flex flex-column align-items-center">
                  <p class="m-0">2020</p>
                  <span class="my-8"></span>
                  <p class="m-0">10-13</p>
                </div>
              </div>
              <div class="newsInfo__card-context d-flex align-items-center">
                <div class="p-15">
                  <p class="m-0">
                    轉知
                    故宮博物院教育展資處辦理「2020故宮線上策展人計畫徵選活動」
                  </p>
                </div>
              </div>
            </div>
            <div class="w-100 newsInfo__card-content">
              <div class="p-15">
                <div class="w-100 notice">
                  <p class="m-0">
                    有章藝術博物館展場檔期於109年10月16日
                    （五）開放第一階段申請，至11月6日止。
                  </p>
                </div>
                <div class="w-100 mt-100">
                  <div
                    class="downloadCard py-25 mb-15"
                    v-for="(item, index1) in downloadList"
                    :key="index1"
                  >
                    <el-row class="d-flex align-items-center">
                      <el-col :span="6">
                        <div
                          class="w-100 d-flex align-items-center justify-content-center"
                        >
                          <img
                            src="@/assets/images/icon/pdf_icon.png"
                            alt=""
                            v-if="item.file"
                          />
                        </div>
                      </el-col>
                      <el-col :span="18">
                        <div
                          class="w-100 d-flex align-items-center justify-content-center flex-column"
                        >
                          <p
                            class="m-0"
                            v-for="(items, index2) in item.option"
                            :key="index2"
                          >
                            {{ items.context }}
                          </p>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
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
    return {
      downloadList: [
        {
          file: true,
          option: [
            {
              context: "線上申請",
            },
            {
              context: "系統審核流程說明",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#contestInfo {
  .contestTitle {
    a {
      animation-name: prevShowSlow;
      animation-duration: 2s;
      animation-fill-mode: forwards;
    }
    p {
      animation-name: titleMoveRight;
      animation-duration: 1.2s;
      animation-fill-mode: forwards;
    }
  }
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
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.2em;
        color: #596164;
      }
      &-content {
        .notice {
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.2em;
          color: #596164;
        }
        p {
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.2em;
          color: #596164;
        }
        .downloadCard {
          background: white;
          p {
            font-weight: bold;
            font-size: 12px;
            line-height: 15px;
            letter-spacing: 0.2em;
            color: #596164;
            padding-top: 5px;
            padding-bottom: 5px;
          }
        }
      }
    }
  }
}
</style>