<template>
  <div id="activityInfo">
    <div class="d-block d-mb-none pt-70">
      <div class="activityTitle w-100 d-flex align-items-center flex-row">
        <router-link class="pl-20" :to="{ name: 'activity' }">
          <img src="@/assets/images/icon/arrowLeft.png" alt="" />
        </router-link>
        <PhoneTitle title="活動訊息" :filterDate="false" />
      </div>
      <div class="w-100 newsInfo">
        <div class="px-20 pt-40 pb-90">
          <div class="w-100 newsInfo__card">
            <div class="w-100 d-flex flex-row">
              <div class="newsInfo__card-date">
                <div class="p-15 d-flex flex-column align-items-center">
                  <p class="m-0">2020</p>
                  <span class="my-8"></span>
                  <p class="m-0">10-08</p>
                </div>
              </div>
              <div class="newsInfo__card-context d-flex align-items-center">
                <div class="p-15">
                  <p class="m-0">
                    轉知中華民國對外貿易發展協會主辦「跨世代設計美學與大師有約–台灣
                    設計X精品美學」講座
                  </p>
                </div>
              </div>
            </div>
            <div class="w-100 newsInfo__card-content">
              <div class="p-15">
                <div class="w-100 notice d-flex align-items-center flex-column">
                  <div class="w-100">
                    <p class="m-0">
                      邀請實踐大學設計學院官政能榮譽講座教授、
                      台灣設計研究院張基義院長與設計系學生及品
                      牌廠商近距離交流，追溯由設計師的美感創想
                      ，轉變為產品的過程及要點，將經驗傳承給設
                      計新血、以及所有希望將台灣設計帶往國際市
                      場的優秀人才，鼓勵師生參與。 活動內容如下：
                    </p>
                  </div>
                  <div class="w-100 mt-10">
                    <el-row class="w-100 mb-5">
                      <el-col :span="4">主題｜</el-col>
                      <el-col :span="20">台灣X設計</el-col>
                    </el-row>
                    <el-row class="w-100 mb-5">
                      <el-col :span="4">講師｜</el-col>
                      <el-col :span="20">
                        實踐大學設計學院 榮譽講座教授 －官政能 教授
                      </el-col>
                    </el-row>
                    <el-row class="w-100 mt-20 mb-5">
                      <el-col :span="4">主題｜</el-col>
                      <el-col :span="20">台灣X設計 講師</el-col>
                    </el-row>
                    <el-row class="w-100 mb-5">
                      <el-col :span="4">講師｜</el-col>
                      <el-col :span="20">台灣設計研究院 — 張基義 院長</el-col>
                    </el-row>
                    <el-row class="w-100 mb-5">
                      <el-col :span="7">報名連結｜</el-col>
                      <el-col :span="17">
                        https://www.surveycake. com/s/eanpV
                      </el-col>
                    </el-row>
                    <el-row class="w-100 mb-5">
                      <el-col :span="7">活動時間｜</el-col>
                      <el-col :span="17">
                        2020 年 10月18日(日) 13:00 - 16:00
                      </el-col>
                    </el-row>
                    <el-row class="w-100 mb-5">
                      <el-col :span="7">報到地點｜</el-col>
                      <el-col :span="17">
                        南港台灣精品館<br />（南港展覽館一館三樓）
                      </el-col>
                    </el-row>
                  </div>

                  <div class="w-100">
                    <p class="m-0">
                      *可搭乘捷運板南線、文湖線至南港展覽館站
                      下車，板南線請由1號出口、文湖線由2號出口出站。
                    </p>
                  </div>

                  <div class="w-100 mt-10">
                    <el-row class="w-100 mb-5">
                      <el-col :span="7">報名費用｜</el-col>
                      <el-col :span="17">免費 </el-col>
                    </el-row>
                    <el-row class="w-100 mb-5">
                      <el-col :span="4">備註｜</el-col>
                      <el-col :span="20">限額120人，額滿為止。</el-col>
                    </el-row>
                  </div>

                  <div class="w-100">
                    <p class="m-0">
                      除有與大師對談之機會，活動當天至台灣精品
                      館參觀互動亦可獲得精美好禮，
                      另將提供參與學生學習時數證明，敬邀貴校師 生報名參加。
                    </p>
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
#activityInfo {
  .activityTitle {
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
      }
    }
  }
}
</style>