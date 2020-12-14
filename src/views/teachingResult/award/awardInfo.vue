<template>
  <div id="awardInfo">
    <div class="d-block d-mb-none pt-70">
      <div class="awardTitle w-100 d-flex align-items-center flex-row">
        <router-link class="pl-20" :to="{ name: 'award' }">
          <img src="@/assets/images/icon/arrowLeft.png" alt="" />
        </router-link>
        <PhoneTitle title="競賽得獎" :filterDate="false" />
      </div>
      <div class="w-100 newsInfo">
        <div class="px-20 pt-40 pb-90">
          <div class="w-100 newsInfo__card">
            <div class="w-100 d-flex flex-row">
              <div class="newsInfo__card-date">
                <div class="p-15 d-flex flex-column align-items-center">
                  <p class="m-0">2020</p>
                  <span class="my-8"></span>
                  <p class="m-0">SEP.14</p>
                </div>
              </div>
              <div class="newsInfo__card-context d-flex align-items-center">
                <div class="p-15">
                  <p class="m-0">
                    恭喜!本系校友南宇陽(106年日碩班畢業)獲得「2020 Taitung Craft
                    Award 臺東工藝獎」 佳作殊榮
                  </p>
                </div>
              </div>
            </div>
            <div class="w-100 newsInfo__card-content">
              <div class="p-15">
                <div class="w-100 notice">
                  <label>
                    有章藝術博物館展場檔期於109年10月16日
                    （五）開放第一階段申請，至11月6日止。
                  </label>
                </div>
                <div class="w-100 mt-10">
                  <p class="m-0">
                    一、本次開放2021年3月起至2021年6月止
                    各展場檔期申請。申請前請務必詳閱本館
                    「展覽場地使用管理要點」，並依本公告說 明辦理。
                  </p>
                  <p class="m-0">
                    二、為因應展場數量及檔期安排，除特殊狀
                    況外，一律採【線上系統】申請，受理類型 及相關原則如下：
                  </p>
                  <div class="mt-30">
                    <p class="m-0">【使用對象】</p>
                    <p class="m-0">國際展覽廳（教研1F）</p>
                    <p class="m-0">
                      僅提供各單位辦理之國際、專案展覽及教師展覽申請。
                    </p>
                    <p class="m-0">大漢藝廊（教研B1）</p>
                    <p class="m-0">提供本校各單位及學生展覽申請。</p>
                    <p class="m-0">大觀藝廊（教研B2-1）</p>
                    <p class="m-0">真善美藝廊（教研B2-2）</p>
                    <p class="m-0">學生藝廊（影音1F）</p>
                  </div>
                  <div class="mt-30">
                    <p class="m-0">【受理展覽類型優先順序】</p>
                    <p class="m-0">
                      1.
                      展覽申請以「各院系所主辦展覽」、「各系畢業展」及「各系所研究生畢業展」為優先。
                    </p>
                    <p class="m-0">
                      2.
                      各單位、系所主辦之重要國際/交流合作展覽請先登錄校內大期程。
                    </p>
                  </div>
                  <div class="mt-30">
                    <p class="m-0">三、檔期申請／審查期程</p>
                    <p class="m-0">
                      【受理／收件時間】自2020年10月16日起，至11月6日止。
                    </p>
                    <p class="m-0">
                      【檔期排定公告】暫訂於2020年11月中後旬，將會公告排定之確切檔期時間，若有剩餘檔期則再開放第二階段申請。
                    </p>
                  </div>
                  <div class="mt-30">
                    <p class="m-0">
                      四、因展場檔期有限，為盡量顧及展覽需求，各案經本館受理後，若有衝突之檔期，本館將依各檔期志願事先協調、審核。檔期尚未確立前，本館保有調度、取消檔期之權利，請各申請人（單位）配合。
                    </p>
                  </div>
                  <div class="mt-30">
                    <p class="m-0">
                      聯絡人：有章藝術博物館，分機2454，王小姐。
                    </p>
                  </div>
                </div>
                <div class="w-100 mt-10">
                  <div class="downloadCard py-25 mb-15">
                    <el-row class="d-flex align-items-center">
                      <el-col :span="6">
                        <div
                          class="w-100 d-flex align-items-center justify-content-center"
                        >
                          <img src="@/assets/images/icon/pdf_icon.png" alt="" />
                        </div>
                      </el-col>
                      <el-col :span="18">
                        <div
                          class="w-100 d-flex align-items-center justify-content-center flex-column"
                        >
                          <p class="m-0">線上申請</p>
                          <p class="m-0">系統審核流程說明</p>
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
        {
          file: true,
          option: [
            {
              context: "國立臺灣藝術大學",
            },
            {
              context: "藝術博物館展覽場地",
            },
            {
              context: "使用管理要點",
            },
          ],
        },
        {
          file: true,
          option: [
            {
              context: "藝術博物館各展場簡介",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#awardInfo {
  .awardTitle {
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
          color: #ceb87f;
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

@keyframes prevShowSlow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes titleMoveRight {
  0% {
    opacity: 0;
    margin-left: -30px;
  }
  100% {
    opacity: 1;
    margin-left: 0px;
  }
}
</style>