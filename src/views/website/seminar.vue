<template>
  <div id="seminar">
    <div class="web d-none d-mb-block">
      <div class="workCard">
        <div class="workCard-title">
          <p class="m-0">「工不可沒‧藝不可失 」2019數位工藝工作營</p>
        </div>
        <div
          class="w-100 workCard-content pt-40 pb-60"
          v-for="(item, index) in seminarList"
          :key="'SL_' + index"
        >
          <div class="w-100">
            <p class="m-0">{{ item.title }}</p>
          </div>

          <el-row class="mt-30" style="color: white">
            <el-col :span="3">
              <div class="text-center">{{ item.author }}</div>
            </el-col>
            <el-col :span="21" v-if="item.author">
              <div
                class="pl-10 workCard-content_list"
                v-for="(items, index) in item.content"
                :key="'CT_' + index"
              >
                {{ items.context }}
              </div>
            </el-col>

            <el-col :span="21" :offset="3" v-else>
              <div
                class="pl-10 workCard-content_list"
                v-for="(items, index) in item.content"
                :key="'CT_' + index"
              >
                {{ items.context }}
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb-none">
      <div class="px-10 py-50">
        <PhoneTitle title="「工不可沒，藝不可失」" :filterDate="false" />
        <PhoneTitle title="2019數位工藝工作營" :filterDate="false" />
        <div class="px-20">
          <div class="w-100 mt-30">
            <div
              class="w-100 workList pt-40 pb-50"
              v-for="(item, index1) in seminarList"
              :key="index1"
            >
              <div class="w-100">
                <p class="m-0">
                  {{ item.title }}
                </p>
              </div>

              <el-row class="mt-30" style="color: white">
                <el-col :span="4">
                  <div class="text-center">{{ item.author }}</div>
                </el-col>
                <el-col :span="20" v-if="item.author">
                  <div
                    class="pl-10 workList__context"
                    v-for="(items, index) in item.content"
                    :key="'CT_' + index"
                  >
                    {{ items.context }}
                  </div>
                </el-col>

                <el-col :span="24" v-else>
                  <div
                    class="pl-10 workList__context"
                    v-for="(items, index) in item.content"
                    :key="'CT_' + index"
                  >
                    {{ items.context }}
                  </div>
                </el-col>
              </el-row>
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
      seminarList: [
        {
          title: "（一）講師介紹",
          author: "李明翰",
          content: [
            {
              context: "現任 淡江大學建築學系數位製造與運算實驗室研究助理",
            },
            {
              context: "學歷  2016 淡江大學建築碩士",
            },
            {
              context: "      2013 淡江大學建築學士",
            },
          ],
        },
        {
          title: "（二）工作營方向   數位與工藝傢俱製造",
          author: "",
          content: [
            {
              context:
                "過去客製化被視為少量且昂貴的，然而隨著近年來數位工具的發展，傳統設計流程已產生許多變化。以往統一規格、大量製造的生產導向已逐漸轉向大量客製化的設計流程；細究此轉變之原因，除了現代生活模式改變之外，資訊化時代下的設計輔助工具快速發展也是原因之一。",
            },
            {
              context:
                "藉由電腦輔助繪圖(CAD)、數位工具機(CAM)的協助，設計端與生產端的距離不再遙不可及，設計師的身分也由設計與繪圖的角色，轉變為可進行多樣化設計之生產者。本工作營之目標，旨於藉由數位工具之輔助，結合工藝設計之特長，嘗試將工藝美學推至更多樣的領域。",
            },
            {
              context:
                "工作營內容可粗略分為兩個階段：第一部分為參數化設計之操作，經由簡易的參數化模型設計出燈飾、椅凳等家具原型，再以數位機具製造基本模具，為下一階段與工藝結合作準備；第二階段則加入工藝技法的操作，透過學員本身所熟悉的工藝技法或加工方法，將其作品完成。期望透過這樣的嘗試，在學員既有工藝技法、美學基礎上，結合數位時代下的工具輔助，帶給學員新的思維與啟發。",
            },
          ],
        },
        {
          title: "（三）課程規劃",
          author: "",
          content: [
            {
              context:
                "初階 2019/10/7(一)與10/8(二)上午10:00-下午16:00   臺藝大工藝大樓",
            },
            {
              context:
                "進階 2019/10/14(一)與10/15(二)上午10:00-下午16:00 臺藝大工藝大樓",
            },
            {
              context:
                "預計學員人數15位，學員必須參與初階與進階課程後製作完成1件作品於10/18研討會展示。",
            },
            {
              context:
                "每位學員需繳交500元保證金（待課程結束與完成作品會退還）。",
            },
          ],
        },
        {
          title: "（四）報名須知",
          author: "",
          content: [
            {
              context:
                "1. 9/25-10/2開放線上報名 portal2.ntua.edu.tw/CAMS/page_02.asp",
            },
            {
              context:
                "2.此工作營提供免費午餐，不提供校內免費停車，請多利用大眾交通工具至本校。",
            },
            {
              context: "3. 主辦單位對於報名參加本活動學生保留錄取與否之權利。",
            },
            {
              context: "4. 此工作營提供免費午餐。",
            },
            {
              context: "5. 不提供校內免費停車，請多利用大眾交通工具至本校。",
            },
            {
              context: "6. 主辦單位對於報名參加本活動學生保留錄取與否之權利。",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#seminar {
  .web {
    padding-top: 0;
    margin-left: 0;
    .workCard {
      padding: 50px 200px 180px 40px;
      background: #2d2d2d;
      &-title {
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.2em;
        color: #ceb87f;
      }
      &-content {
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0.2em;
        color: #ffffff;
        border-bottom: 1px solid #000000;
        &_list {
          padding-bottom: 20px;
          &:last-child {
            padding-bottom: 0;
          }
        }
      }
    }
  }

  .phone {
    background: #2d2d2d;
    .workList {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.2em;
      color: #ffffff;
      border-bottom: 1px solid #000000;
      &:last-child {
        border-bottom: none;
      }
      &__context {
        padding-bottom: 10px;
        overflow-wrap: break-word;
        &:last-child {
          padding-bottom: 0px;
        }
      }
    }
  }
}
</style>