<template>
  <div id="HomePage">
    <!-- banner -->
    <Carousel />
    <div class="d-none d-mb-block">
      <!-- contest winning -->
      <div class="w-100 mt-90" style="margin-bottom: 250px">
        <TitleText textAlign="center" textTitle="CONTEST WINNING" />
        <div
          class="w-100 d-flex align-items-center justify-content-center flex-column mt-30"
        >
          <div
            class="w-100 d-flex align-items-center justify-content-around flex-row"
          >
            <div
              class="w-100 d-flex align-items-center justify-content-around mx-35"
            >
              <!------------------------------>
              <div
                class="w-100 h-100 text-center pos-relative"
                style="width: 500px"
                v-for="item in 3"
                :key="item"
              >
                <div class="w-100">
                  <img
                    src="@/assets/images/CONTEST-WINNING/Digiwood.jpg"
                    width="100%"
                    alt=""
                  />
                  <span
                    class="introduceCard d-flex align-items-end justify-content-between"
                  >
                    <p class="m-0">DIGIWOOD{{ item }}</p>
                    <span class="mr-25 cur-pointer">
                      <img
                        class="d-flex align-items-center"
                        src="@/assets/images/icon/door.png"
                        alt=""
                      />
                    </span>
                  </span>
                </div>
                <div class="w-100 d-flex justify-content-end">2020 | 07.28</div>
                <div class="text-left" style="max-width: 380px">
                  目前市場上主流的機殼，多以塑膠、金屬、玻璃為主，且設計常與家居環境衝突
                </div>
              </div>
              <!------------------------------>
            </div>
          </div>
          <div
            class="w-100 mt-30 d-flex align-items-center justify-content-center"
          >
            <Pagination :needPage="true" :pageNumber="5" />
          </div>
        </div>
      </div>
      <!-- students works -->
      <div class="w-100" style="margin-bottom: 265px">
        <TitleText textAlign="center" textTitle="STUDENTS WORKS" />
        <div class="w-100 mt-60">
          <div class="w-100 d-flex align-items-center justify-content-center">
            <div
              class="w-100 d-flex align-items-center justify-content-center slash"
            ></div>
            <img
              src="@/assets/images/STUDENTS-WORKS/1597628561678@2x.jpg"
              style="z-index: 1"
              width="600px"
              alt=""
            />
            <a
              class="cur-pointer viewBtn pos-absolute"
              style="margin: 20rem 0 0 35rem; z-index: 2"
            >
              <img src="@/assets/images/view_btn.png" alt="" />
              <img src="@/assets/images/view_btn_hover.png" alt="" />
            </a>
          </div>
          <div
            class="w-100 d-flex align-items-center justify-content-center mt-60"
          >
            <Pagination />
          </div>
        </div>
      </div>
      <!-- what's new -->
      <div class="w-100">
        <TitleText textAlign="start" textTitle="WHAT'S NEW" />
        <div class="w-100 mt-60">
          <div class="px-120 d-flex flex-row">
            <div style="width: 330px">
              <div class="w-100 collapseCard">
                <div
                  class="h-100 d-flex align-items-center justify-content-between"
                >
                  <div>VIEW MORE</div>
                  <div>
                    <img
                      class="cur-pointer"
                      src="@/assets/images/arrowRight_btn.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-100">
              <div class="mt-50" style="margin-left: 20%">
                <div
                  class="collapseCard-child mt-20"
                  v-for="item in 3"
                  :key="item"
                >
                  <div
                    class="h-100 d-flex align-items-center justify-content-between"
                  >
                    <div>MAY.09.2020-{{ item }}</div>
                    <div>
                      2020新一代設計展 展覽時間2020年5月22日(五)-5月25日(一)
                    </div>
                    <div>
                      <img
                        class="cur-pointer"
                        src="@/assets/images/arrowRight_btn.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- crafts -->
      <div class="w-100" style="margin-top: 250px">
        <div class="introduce-bg ml-120">
          <div class="d-flex align-items-center justify-content-around">
            <div
              class="d-flex align-items-center justify-content-center pos-relative"
              style="margin-top: -3rem"
              v-for="item in 4"
              :key="item"
            >
              <img src="@/assets/images/craft/craft_1.png" alt="" />
              <div
                class="craftCard d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
              >
                <div class="mb-30">
                  <p class="m-0">陶瓷</p>
                  <p class="m-0">CERAMICS</p>
                </div>
                <div class="pt-10 craftCard-borTop">
                  <a class="text-decoration-none" href=""> VIEW MORE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- access -->
      <div class="w-100 pt-120 mb-80">
        <TitleText textAlign="center" textTitle="ACCESS" />
        <div
          class="mt-120 px-120 d-flex align-items-center justify-content-center"
        >
          <div class="w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.82818192357!2d121.44544191544658!3d25.005953645568127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346802ac9d6c823d%3A0x83607782804de78!2zMjIw5paw5YyX5biC5p2_5qmL5Y2A5aSn6KeA6Lev5LiA5q61NTnomZ8!5e0!3m2!1szh-TW!2stw!4v1604289041271!5m2!1szh-TW!2stw"
              width="100%"
              height="700"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>

          <div class="w-100 localCard d-flex flex-column">
            <div
              class="localCard-info px-90 d-flex justify-content-between pt-50 pb-35"
              v-for="(item, index) in accessList"
              :key="'AL_' + index"
            >
              <div>
                <p class="m-0">{{ item.title }}</p>
              </div>

              <div
                class="localCard-info_map d-flex flex-column"
                v-if="item.code == 'address'"
              >
                <p class="m-0">{{ item.value }}</p>
                <button class="mt-40">
                  <a
                    class="text-decoration-none"
                    href="https://goo.gl/maps/67MWRHAoppzHiKP87"
                    target="_blank"
                    >GOOGLE MAP</a
                  >
                </button>
              </div>
              <div
                class="d-flex flex-column"
                v-else-if="item.code == 'traffic'"
              >
                <div
                  class="d-flex justify-content-between flex-column localCard-info_traffic"
                  style="width: 480px"
                  v-for="(items, index) in item.list"
                  :key="'TF_' + index"
                >
                  <div class="w-100 d-flex flex-row justify-content-between">
                    <p class="m-0">{{ items.transportation }}</p>
                    <img
                      class="cur-pointer"
                      src="@/assets/images/icon/arrowDown_icon.png"
                      alt=""
                      width="30px"
                      @click="openTrafficInfo(items)"
                    />
                  </div>
                  <div class="w-100" v-if="items.code == getTraffic">
                    <div
                      class="mt-30"
                      v-for="(traffic, index) in items.options"
                      :key="'OP_' + index"
                    >
                      {{ traffic.context }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <p class="m-0">{{ item.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- phone -->
    <div class="phoneScreen d-block d-mb-none">
      <div class="px-30 pt-20 pb-40">
        <!-- contest winning -->
        <div class="contest w-100 mb-30">
          <TitleText textTitle="CONTEST WINNING" />
          <div class="contest-limitWidth w-100 mt-10 d-flex align-items-start">
            <div
              class="contest-card d-flex flex-column"
              v-for="(item, index) in phone_contestList"
              :key="'CT_' + index"
            >
              <img :src="item.imgURL" alt="" width="100%" />
              <div
                class="contest-card_title w-100 d-flex align-items-center justify-content-between py-10"
              >
                <p class="m-0">{{ item.title }}</p>
                <p class="m-0">{{ item.date }}</p>
              </div>
              <div class="contest-card_content w-100">
                <p class="m-0">{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- students works -->
        <div class="students w-100 mb-50">
          <TitleText textTitle="STUDENTS WORKS" />
          <div class="w-100 mt-15">
            <div class="w-100 d-flex align-items-center justify-content-center">
              <div
                class="w-100 d-flex align-items-center justify-content-center students-slash"
              >
                <img
                  src="../assets/images/icon/背景線.png"
                  alt=""
                  width="100%"
                />
              </div>
              <img
                src="@/assets/images/STUDENTS-WORKS/1597628561678@2x_phone.png"
                alt=""
                style="z-index: 1"
              />
              <a class="cur-pointer students-viewBtn pos-absolute">
                <img src="@/assets/images/view_btn.png" alt="" width="60px" />
                <img
                  src="@/assets/images/view_btn_hover.png"
                  alt=""
                  width="60px"
                />
              </a>
            </div>
            <div
              class="w-100 d-flex align-items-center justify-content-center mt-20"
            >
              <Pagination />
            </div>
          </div>
        </div>
        <!-- what's new -->
        <div class="whatsnew w-100 mb-100">
          <div class="w-100 d-flex align-items-center justify-content-between">
            <TitleText textTitle="WHAT'S NEW" />
            <div
              class="whatsnew-viewBtn ml-auto d-flex align-items-center flex-row pb-10"
            >
              <p class="m-0 pr-20">VIEW MORE</p>
              <img
                src="@/assets/images/arrowRight_btn.png"
                alt=""
                width="24px"
              />
            </div>
          </div>
          <div class="w-100 mt-10">
            <div
              class="whatsnew-content w-100 d-flex align-items-center flex-column mt-30"
              v-for="(item, index) in phone_whatsnewList"
              :key="'WN_' + index"
            >
              <div class="whatsnew-content_title w-100">
                <p class="m-0">{{ item.date }}</p>
              </div>
              <div
                class="whatsnew-content_context w-100 d-flex align-items-center justify-content-between mt-15 pb-10"
              >
                <div class="d-flex justify-content-start flex-column">
                  <p class="m-0">{{ item.newsName }}</p>
                  <p class="m-0" v-if="item.newsDateTime">
                    {{ item.newsDateTime }}
                  </p>
                </div>
                <div class="ml-auto">
                  <img src="@/assets/images/arrowRight_btn.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- crafts -->
        <div class="crafts w-100 mb-50">
          <div class="craftsCard w-100 pl-30 d-flex align-items-center justify-content-start">
            <div
              class="d-flex flex-column align-items-center justify-content-center"
            >
              <img
                src="@/assets/images/craft/craft_1.png"
                alt=""
                width="110px"
              />
              <div
                class="craftsCard-info d-flex align-items-center justify-content-center flex-column"
              >
                <div class="py-10">
                  <p class="m-0">陶瓷</p>
                </div>
                <a class="text-decoration-none mt-10">VIEW MORE</a>
              </div>
            </div>
            <div
              class="d-flex flex-column align-items-center justify-content-center ml-30"
            >
              <img
                src="@/assets/images/craft/craft_2.png"
                alt=""
                width="110px"
              />
              <div
                class="craftsCard-info d-flex align-items-center justify-content-center flex-column"
              >
                <div class="py-10">
                  <p class="m-0">金工</p>
                </div>
                <a class="text-decoration-none mt-10">VIEW MORE</a>
              </div>
            </div>
            <div
              class="d-flex flex-column align-items-center justify-content-center ml-30"
            >
              <img
                src="@/assets/images/craft/craft_3.png"
                alt=""
                width="110px"
              />
              <div
                class="craftsCard-info d-flex align-items-center justify-content-center flex-column"
              >
                <div class="py-10">
                  <p class="m-0">木工</p>
                </div>
                <a class="text-decoration-none mt-10">VIEW MORE</a>
              </div>
            </div>
            <div
              class="d-flex flex-column align-items-center justify-content-center ml-30"
            >
              <img
                src="@/assets/images/craft/craft_4.png"
                alt=""
                width="110px"
              />
              <div
                class="craftsCard-info d-flex align-items-center justify-content-center flex-column"
              >
                <div class="py-10">
                  <p class="m-0">產品</p>
                </div>
                <a class="text-decoration-none mt-10">VIEW MORE</a>
              </div>
            </div>
          </div>
        </div>
        <!-- access -->
        <div class="access w-100">
          <TitleText textTitle="ACCESS" />
          <div class="w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.82818192357!2d121.44544191544658!3d25.005953645568127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346802ac9d6c823d%3A0x83607782804de78!2zMjIw5paw5YyX5biC5p2_5qmL5Y2A5aSn6KeA6Lev5LiA5q61NTnomZ8!5e0!3m2!1szh-TW!2stw!4v1604289041271!5m2!1szh-TW!2stw"
              width="100%"
              height="450"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>

          <div class="w-100">
            <div class="access-infoCard d-flex align-items-center p-15">
              <div
                class="access-infoCard_title d-flex align-items-start justify-content-start"
              >
                地址
              </div>
              <div
                class="access-infoCard_content w-100 d-flex flex-column align-items-center text-center"
              >
                <p class="m-0">新北市22058板橋區大觀路一段59號</p>
                <button class="mt-10 ml-10 mr-auto px-15 py-5">
                  <a
                    class="text-decoration-none"
                    href="https://goo.gl/maps/67MWRHAoppzHiKP87"
                    target="_blank"
                    >GOOGLE MAP</a
                  >
                </button>
              </div>
            </div>
            <div class="access-infoCard d-flex align-items-center p-15">
              <div
                class="access-infoCard_title d-flex align-items-center justify-content-start"
              >
                電話
              </div>
              <div
                class="access-infoCard_content w-100 d-flex align-items-center"
              >
                <p class="m-0">02-2272-2181　　#2111</p>
              </div>
            </div>
            <div class="access-infoCard d-flex align-items-center p-15">
              <div
                class="access-infoCard_title d-flex align-items-center justify-content-start"
              >
                MAIL
              </div>
              <div
                class="access-infoCard_content w-100 d-flex align-items-center justify-content-end"
              >
                <p class="m-0">cd@ntua.edu.tw</p>
              </div>
            </div>
            <div class="access-infoCard d-flex align-items-center p-15">
              <div
                class="access-infoCard_title d-flex align-items-center justify-content-start"
              >
                交通
              </div>
              <div
                class="access-infoCard_content w-100 d-flex align-items-center justify-content-between"
              >
                <p class="m-0">捷運</p>
                <img src="@/assets/images/icon/arrowDown_icon.png" alt="" />
              </div>
            </div>
            <div class="access-infoCard d-flex align-items-center p-15">
              <div
                class="access-infoCard_title d-flex align-items-center justify-content-start"
              ></div>
              <div
                class="access-infoCard_content w-100 d-flex align-items-center justify-content-between"
              >
                <p class="m-0">公車</p>
                <img src="@/assets/images/icon/arrowDown_icon.png" alt="" />
              </div>
            </div>
            <div class="access-infoCard d-flex align-items-center p-15">
              <div
                class="access-infoCard_title d-flex align-items-center justify-content-start"
              ></div>
              <div
                class="access-infoCard_content w-100 d-flex align-items-center justify-content-between"
              >
                <p class="m-0">火車</p>
                <img src="@/assets/images/icon/arrowDown_icon.png" alt="" />
              </div>
            </div>
            <div class="access-infoCard d-flex align-items-center p-15">
              <div
                class="access-infoCard_title d-flex align-items-center justify-content-start"
              ></div>
              <div
                class="access-infoCard_content w-100 d-flex align-items-center justify-content-between"
              >
                <p class="m-0">接駁車</p>
                <img src="@/assets/images/icon/arrowDown_icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import TitleText from "@/components/titleText.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Carousel,
    TitleText,
    Pagination,
  },
  data() {
    return {
      accessList: [
        {
          code: "address",
          title: "地址",
          value: "新北市22058板橋區大觀路一段59號",
        },
        {
          code: "phone",
          title: "電話",
          value: "02-2272-2181   #2111",
        },
        {
          code: "mail",
          title: "MAIL",
          value: "cd@ntua.edu.tw",
        },
        {
          code: "traffic",
          title: "交通",
          value: "",
          list: [
            {
              code: "MRT",
              transportation: "捷運",
              options: [
                {
                  context:
                    "1.捷運板橋站（文化路捷運3號出口）臺灣藝術大學 搭乘701、264、793公車至國立臺灣藝術大學",
                },
                {
                  context: "2.浮洲火車站下車－>國立臺灣藝術大學",
                },
              ],
            },
            {
              code: "bus",
              transportation: "公車",
              options: [
                {
                  context:
                    "1.捷運板橋站（文化路捷運3號出口）臺灣藝術大學 搭乘701、264、793公車至國立臺灣藝術大學",
                },
                {
                  context: "2.浮洲火車站下車－>國立臺灣藝術大學",
                },
              ],
            },
            {
              code: "train",
              transportation: "火車",
              options: [
                {
                  context:
                    "1.捷運板橋站（文化路捷運3號出口）臺灣藝術大學 搭乘701、264、793公車至國立臺灣藝術大學",
                },
                {
                  context: "2.浮洲火車站下車－>國立臺灣藝術大學",
                },
              ],
            },
            {
              code: "shuttleBus",
              transportation: "接駁車",
              options: [
                {
                  context:
                    "1.捷運板橋站（文化路捷運3號出口）臺灣藝術大學 搭乘701、264、793公車至國立臺灣藝術大學",
                },
                {
                  context: "2.浮洲火車站下車－>國立臺灣藝術大學",
                },
              ],
            },
          ],
        },
      ],
      getTraffic: "",
      phone_contestList: [
        {
          imgURL: require("@/assets/images/CONTEST-WINNING/Waves.jpg"),
          title: "波瀾",
          date: "2020｜07.28",
          content: "分散與重組的「光、影、色」變化",
        },
        {
          imgURL: require("@/assets/images/CONTEST-WINNING/Digiwood.jpg"),
          title: "DIGIWOOD",
          date: "2020｜07.28",
          content:
            "目前市場上主流的機殼，多以塑膠、金屬、 玻璃為主，且設計常與家居環境衝突",
        },
        {
          imgURL: require("@/assets/images/CONTEST-WINNING/Light.jpg"),
          title: "光的晃影",
          date: "2020｜07.28",
          content: "觀察交通號誌、光與影，以及光線的反射",
        },
        {
          imgURL: require("@/assets/images/CONTEST-WINNING/Tea.jpg"),
          title: "日影茶器",
          date: "2020｜07.28",
          content: "制定出具有智慧及詩意的節氣",
        },
      ],
      phone_whatsnewList: [
        {
          date: "MAY.09.2020",
          newsName: "2020新一代設計展 展覽時間",
          newsDateTime: "2020年5月22日(五)-5月25日(一)",
        },
        {
          date: "JUL.11.2020",
          newsName: "轉知秘書室宣傳 辦理校友證使用線上辦理",
        },
        {
          date: "JUL.11.2020",
          newsName: "轉知秘書室宣傳 辦理校友證使用線上辦理",
        },
      ],
      phone_crafts: [
        {
          imgURL: require("@/assets/images/craft/craft_1.png"),
          name_ch: "陶瓷",
          name_en: "CERAMICS",
        },
        {
          imgURL: require("@/assets/images/craft/craft_2.png"),
          name_ch: "金工",
          name_en: "METALWORKING",
        },
        {
          imgURL: require("@/assets/images/craft/craft_3.png"),
          name_ch: "木工",
          name_en: "WOODWORKING",
        },
        {
          imgURL: require("@/assets/images/craft/craft_4.png"),
          name_ch: "產品",
          name_en: "PRODUCT",
        },
      ],
    };
  },
  methods: {
    openTrafficInfo(data) {
      console.log(data);
      this.getTraffic = data.code;
    },
  },
};
</script>

<style lang="scss">
#HomePage {
  .introduceCard {
    width: 320px;
    height: 45px;
    background: rgba(255, 255, 255, 0.7);
    display: inline-block;
    position: absolute;
    bottom: 4.2rem;
    left: 0;
    p {
      font-size: 36px;
      line-height: 42px;
      color: #52505a;
    }
    span:hover {
      padding: 5px;
      background: white;
      border: 2px solid #ceb87f;
      border-radius: 50%;
    }
  }
  .viewBtn {
    img:last-child {
      display: none;
    }
    &:hover {
      img:first-child {
        display: none;
      }
      img:last-child {
        display: block;
      }
    }
  }
  .slash {
    position: absolute;
    background: url("../assets/images/icon/背景線.png");
    background-repeat: no-repeat;
    height: 130px;
    z-index: 0;
  }
  .collapseCard {
    height: 65px;
    border-bottom: 1px solid #c4c4c4;
    &-child {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #c4c4c4;
    }
  }
  .introduce-bg {
    background: #2d2d2d;
    min-height: 500px;
  }
  .craftCard {
    position: absolute;
    margin-top: 27rem;
    width: 200px;
    height: 200px;
    border: 2px solid #596164;
    box-sizing: border-box;
    p {
      font-weight: bold;
      font-size: 18px;
      letter-spacing: 0.005em;
      color: white;
    }
    a {
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.005em;
      color: #ceb87f;
    }
    &-borTop {
      border-top: 1px solid #ceb87f;
    }
  }
  .localCard {
    background: #2d2d2d;
    height: 700px;
    overflow-y: auto;
    &-info {
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0.2em;
      color: white;
      border-bottom: 1px solid #d4cbcc;
      &_map {
        button {
          width: 235px;
          height: 45px;
          font-size: 18px;
          line-height: 180%;
          letter-spacing: 0.25em;
          color: #2d2d2d;
          a {
            font-size: 18px;
            line-height: 180%;
            letter-spacing: 0.25em;
            color: #2d2d2d;
          }
        }
      }
      &_traffic {
        &:first-child {
          padding-top: 0px;
        }
        &:last-child {
          border-bottom: none;
        }
        padding: 50px 0px;
        border-bottom: 1px solid #d4cbcc;
      }
    }
  }

  // phone
  .phoneScreen {
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 20px 20px 0px 0px;
    .contest {
      &-limitWidth {
        overflow-x: auto;
      }
      &-card {
        min-width: 155px;
        max-width: 155px;
        margin-right: 15px;
        &:last-child {
          margin-right: 0;
        }
        &_title {
          p {
            &:first-child {
              font-size: 14px;
              line-height: 16px;
              color: #ceb87f;
            }
            &:last-child {
              font-size: 12px;
              line-height: 14px;
              color: #d4cbcc;
            }
          }
        }
        &_content {
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.05em;
          color: #8c8f90;
        }
      }
    }
    .students {
      &-slash {
        position: absolute;
        background-repeat: no-repeat;
        height: 65px;
        z-index: 0;
      }
      &-viewBtn {
        z-index: 2;
        margin-left: 9rem;
        margin-top: 6rem;
        img:last-child {
          display: none;
        }
        &:hover {
          img:first-child {
            display: none;
          }
          img:last-child {
            display: block;
            padding-bottom: 4px;
          }
        }
      }
    }
    .whatsnew {
      &-viewBtn {
        border-bottom: 1px solid #d4cbcc;
        p {
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.005em;
          color: #596164;
        }
      }
      &-content {
        &_title {
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.005em;
          color: #d4cbcc;
        }
        &_context {
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.005em;
          color: #596164;
          border-bottom: 1px solid #d4cbcc;
        }
      }
    }
    .crafts {
      .craftsCard {
        overflow-x: auto;
        height: 190px;
        background: #2d2d2d;
        &-info {
          width: 75px;
          height: 75px;
          border: 1px solid #596164;
          box-sizing: border-box;
          div {
            border-bottom: 1px solid #ceb87f;
            p {
              font-weight: bold;
              font-size: 12px;
              line-height: 120%;
              text-align: center;
              letter-spacing: 0.015em;
              color: #ffffff;
            }
          }
          a {
            font-size: 10px;
            line-height: 12px;
            text-align: center;
            letter-spacing: 0.03em;
            color: #ceb87f;
          }
        }
      }
    }

    .access {
      &-infoCard {
        background: #2d2d2d;
        border-bottom: 1px solid #d4cbcc;
        &_title {
          min-width: 70px;
          max-width: 70px;
          font-size: 14px;
          line-height: 17px;
          text-align: center;
          letter-spacing: 0.2em;
          color: #ffffff;
        }
        &_content {
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.2em;
          color: #ffffff;
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 260px;
          }
          button {
            a {
              font-size: 14px;
              line-height: 180%;
              letter-spacing: 0.25em;
              color: #2d2d2d;
            }
          }
        }
      }
    }
  }
}
</style>