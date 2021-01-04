<template>
  <div id="footer">
    <!-- web -->
    <div class="d-none d-mb-block">
      <div class="w-100 h-100 d-flex align-items">
        <div class="block_left">
          <div class="block_left-contact d-flex align-items-center flex-column">
            <div class="w-100 block_left-border">
              <div
                class="w-100 d-flex align-items-center text-left flex-column mb-35"
                v-for="(item, index) in contactData"
                :key="'CD__' + index"
              >
                <div class="w-100">
                  <p class="m-0">{{ item.text }}</p>
                </div>
                <div
                  class="block_left-icon w-100 d-flex align-items-center flex-row mt-20"
                >
                  <span
                    class="mr-50"
                    v-for="(items, index) in item.icon"
                    :key="'IC_' + index"
                  >
                    <a :href="items.path" target="_blank">
                      <img :src="items.url" alt="" width="50px" />
                      <img :src="items.hoverUrl" alt="" width="50px" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block_right d-flex align-items-center flex-column">
          <div
            class="block_right-top d-flex align-items-center justify-content-center"
            @click="scrollToTop()"
          >
            <p class="m-0">TOP</p>
          </div>
          <div
            class="block_right-bottom d-flex align-items-center justify-content-center"
          >
            <img src="@/assets/images/logo/footer_logo.png" alt="" />
            <img src="@/assets/images/logo/footer_logo_hover.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- phone -->
    <div class="footerForPhone d-block d-mb-none">
      <div class="w-100 d-flex flex-column">
        <div class="footerForPhone-community w-100 py-20 d-flex">
          <div
            class="d-flex align-items-center mx-20"
            v-for="(item, index) in contactForPhone"
            :key="'CFP_' + index"
          >
            <a :href="item.path" target="_blank">
              <img :src="item.imgURL" alt="" />
            </a>
          </div>
        </div>
        <router-link to="/">
          <div
            class="footerForPhone-logo d-flex align-items-center justify-content-center flex-column"
          >
            <div class="px-60 pt-20 pb-40">
              <img
                src="../assets/images/logo/footer_logo.svg"
                alt=""
                width="100%"
              />
              <img
                class="mt-30"
                src="../assets/images/logo/footer_logo.png"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: "",
      contactData: [
        {
          text: "Follow us",
          icon: [
            {
              value: "facebook",
              path: "https://www.facebook.com/crafts.ntua.edu.tw",
              url: require("@/assets/images/icon/FB_icon.png"),
              hoverUrl: require("@/assets/images/icon/FB_icon_hover.png"),
            },
            {
              value: "instagram",
              path: "https://www.instagram.com/the_absence_of_authors/",
              url: require("@/assets/images/icon/IG_icon.png"),
              hoverUrl: require("@/assets/images/icon/IG_icon_hover.png"),
            },
            {
              value: "youtube",
              path: "https://www.youtube.com/channel/UC9vt9X8uPxWtIO7mWEAyyDw",
              url: require("@/assets/images/icon/YT_icon.png"),
              hoverUrl: require("@/assets/images/icon/YT_icon_hover.png"),
            },
          ],
        },
        {
          text: "Contact us",
          icon: [
            {
              value: "home",
              path: "https://www.ntua.edu.tw/",
              url: require("@/assets/images/icon/address_icon.png"),
              hoverUrl: require("@/assets/images/icon/address_icon_hover.png"),
            },
            {
              value: "mail",
              path: "mailto:cd@ntua.edu.tw",
              url: require("@/assets/images/icon/email_icon.png"),
              hoverUrl: require("@/assets/images/icon/email_icon_hover.png"),
            },
          ],
        },
      ],
      contactForPhone: [
        {
          value: "facebook",
          path: "https://www.facebook.com/crafts.ntua.edu.tw",
          imgURL: require("@/assets/images/icon/FB_icon.png"),
        },
        {
          value: "instagram",
          path: "https://www.instagram.com/the_absence_of_authors/",
          imgURL: require("@/assets/images/icon/IG_icon.png"),
        },
        {
          value: "youtube",
          path: "https://www.youtube.com/channel/UC9vt9X8uPxWtIO7mWEAyyDw",
          imgURL: require("@/assets/images/icon/YT_icon.png"),
        },
        {
          value: "home",
          path: "https://www.ntua.edu.tw/",
          imgURL: require("@/assets/images/icon/address_icon.png"),
        },
        {
          value: "mail",
          path: "mailto:cd@ntua.edu.tw",
          imgURL: require("@/assets/images/icon/email_icon.png"),
        },
        {
          value: "phone",
          path: "tel:+886-2-22722181",
          imgURL: require("@/assets/images/icon/phone_icon.png"),
        },
      ],
    };
  },
  methods: {
    scrollToTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 5);
    },
  },
};
</script>

<style lang="scss">
#footer {
  width: 100%;
  .block {
    &_left {
      width: 70%;
      background: #52505a;
      z-index: 90;
      &-contact {
        padding: 50px 120px;
      }
      &-border {
        border-bottom: 1px solid #d4cbcc;
      }
      &-icon {
        img:last-child {
          display: none;
        }
        span {
          &:hover {
            p {
              color: #d4cbcc;
            }
            img:first-child {
              display: none;
            }
            img:last-child {
              display: block;
            }
          }
        }
      }
      p {
        font-size: 18px;
        line-height: 21px;
        color: #d4cbcc;
      }
      // &:hover {
      // background: white;
      // color: #ceb87f;
      // padding-bottom: 11px;
      // p {
      //   color: #d4cbcc;
      // }
      // img:first-child {
      //   display: none;
      // }
      // img:last-child {
      //   display: block;
      // }
      // }
    }
    &_right {
      width: 30%;
      &-top {
        width: 100%;
        height: 30%;
        background: #ebecee;
        cursor: pointer;
        p {
          font-size: 36px;
          line-height: 42px;
          color: #ceb87f;
        }
        &:hover {
          background: #1a191e;
          color: #d4cbcc;
        }
      }
      &-bottom {
        width: 100%;
        height: 70%;
        background: #1a191e;
        transition: all 0.6s;
        cursor: pointer;
        &:hover {
          background: white;
          img:first-child {
            display: none;
          }
          img:last-child {
            display: block;
          }
        }
        img:last-child {
          display: none;
        }
      }
    }
  }

  .footerForPhone {
    &-community {
      background: #52505a;
      overflow-x: auto;
    }
    &-logo {
      background: #1a191e;
    }
  }
}
</style>