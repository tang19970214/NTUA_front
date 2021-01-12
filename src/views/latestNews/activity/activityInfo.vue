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
          <div
            class="w-100 newsInfo__card"
            v-for="item in activityInfo"
            :key="item.id"
          >
            <div class="w-100 d-flex flex-row">
              <div class="newsInfo__card-date">
                <div class="p-15 d-flex flex-column align-items-center">
                  <p class="m-0">{{ item.releaseDate | moment("YYYY") }}</p>
                  <span class="my-8"></span>
                  <p class="m-0">{{ item.releaseDate | moment("MM-DD") }}</p>
                </div>
              </div>
              <div class="newsInfo__card-context d-flex align-items-center">
                <div class="p-15">
                  <p class="m-0">
                    {{ item.title }}
                  </p>
                </div>
              </div>
            </div>
            <div class="w-100 newsInfo__card-content">
              <div class="p-15">
                <!-- summary -->
                <div class="w-100 notice">
                  <p class="m-0">
                    {{ item.summury }}
                  </p>
                </div>
                <!-- contents -->
                <div class="w-100 mt-10 context">
                  <vue-editor v-model="item.contents"></vue-editor>
                </div>
                <!-- file -->
                <div class="w-100" v-if="item.attachedFile">
                  <div
                    class="downloadCard py-25 mb-15"
                    v-for="(items, index1) in item.attachedFile"
                    :key="index1"
                  >
                    <el-row class="d-flex align-items-center">
                      <el-col :span="8">
                        <div
                          class="w-100 d-flex align-items-center justify-content-center"
                        >
                          <a
                            :href="items.files"
                            :download="items.files"
                            target="_blank"
                          >
                            <img
                              src="@/assets/images/icon/pdf_icon.png"
                              alt=""
                            />
                          </a>
                        </div>
                      </el-col>
                      <el-col :span="16">
                        <div
                          class="w-100 d-flex align-items-center justify-content-center flex-column"
                        >
                          <p class="m-0">
                            {{ items.fileName }}
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
      listQuery: {
        NewsTypeId: "SYS_NEWS_ACTIVITY",
        page: 1,
        limit: 20,
        key: undefined,
      },
      activityInfo: [],
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
  methods: {
    async getList() {
      await this.$api.news(this.listQuery).then((res) => {
        this.activityInfo = res.data.data.filter(
          (arr) => arr.id === this.$route.params.id
        );
        this.activityInfo[0].attachedFile = JSON.parse(
          this.activityInfo[0].attachedFile
        );
        this.$store.commit("SETLOADING", false);
      });
    },
  },
  mounted() {
    this.$store.commit("SETLOADING", true);
    this.getList();
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
        .context {
          .ql-editor {
            min-height: 100px;
          }
          .ql-toolbar {
            display: none !important;
          }
          .ql-container {
            border: none !important;
            ol {
              padding-left: 0;
            }
          }
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