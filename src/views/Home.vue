<template>
  <div id="HomePage">
    <!-- banner| OK -->
    <Carousel />
    <!-- web -->
    <div class="d-none d-mb-block">
      <!-- contest winning | ok -->
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
              <div
                class="w-100 h-100 text-center pos-relative"
                style="width: 500px"
                v-for="item in awardData"
                :key="item.id"
              >
                <div class="w-100 pos-relative">
                  <el-image
                    style="width: 100%; height: 300px"
                    :src="item.pics"
                    fit="cover"
                  ></el-image>
                  <span
                    class="introduceCard d-flex align-items-end justify-content-between"
                  >
                    <p class="m-0">{{ item.title }}</p>
                    <span class="mr-25 cur-pointer">
                      <router-link :to="{ name: 'award' }">
                        <img
                          class="d-flex align-items-center"
                          src="@/assets/images/icon/door.png"
                          alt=""
                        />
                      </router-link>
                    </span>
                  </span>
                </div>
                <div class="contest__content">
                  <div class="w-100 d-flex justify-content-end">
                    {{ item.releaseDate | moment("YYYY | MM.DD") }}
                  </div>
                  <div
                    class="text-left contest__content--editor"
                    style="max-width: 380px"
                  >
                    <vue-editor
                      v-model="item.contents"
                      :disabled="true"
                    ></vue-editor>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- students works | ok -->
      <div
        class="w-100"
        style="margin-bottom: 265px"
        v-if="worksList.length > 0"
      >
        <TitleText textAlign="center" textTitle="STUDENTS WORKS" />
        <div class="w-100 mt-60">
          <div class="w-100 d-flex align-items-center justify-content-center">
            <div
              class="w-100 d-flex align-items-center justify-content-center slash"
            ></div>
            <div class="pos-relative">
              <img
                class="zIndex-1"
                :src="worksList[getWorkNum].contents"
                width="600px"
                alt=""
              />
              <router-link
                class="viewBtn pos-absolute b-0 r-0 zIndex-2"
                :to="{ name: 'studioResult' }"
              >
                <img src="@/assets/images/view_btn.png" alt="" />
                <img src="@/assets/images/view_btn_hover.png" alt="" />
              </router-link>
            </div>
          </div>
          <div
            class="w-100 d-flex align-items-center justify-content-center mt-60"
          >
            <a
              class="cur-pointer d-flex align-items-center px-20"
              @click="works_prev()"
            >
              <img src="@/assets/images/arrowLeft_btn.png" alt="" />
            </a>

            <a
              class="cur-pointer d-flex align-items-center px-20"
              @click="works_next()"
            >
              <img src="@/assets/images/arrowRight_btn.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <!-- what's new | ok -->
      <div class="w-100">
        <TitleText textAlign="start" textTitle="WHAT'S NEW" />
        <div class="w-100 mt-60">
          <div class="px-120 d-flex flex-row">
            <div style="width: 330px">
              <div class="w-100 collapseCard">
                <div
                  class="h-100 d-flex align-items-center justify-content-between"
                >
                  <div>
                    <strong>VIEW MORE</strong>
                  </div>
                  <div @click="goNews()">
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
                  class="collapseCard__child mt-20"
                  v-for="item in newsData"
                  :key="item.id"
                >
                  <div
                    class="h-100 d-flex align-items-center justify-content-between"
                  >
                    <div>
                      <p class="m-0">
                        {{ item.releaseDate | moment("YYYY-MM-DD") }}
                      </p>
                    </div>
                    <div>
                      <p class="m-0">
                        {{ item.title }}
                      </p>
                    </div>
                    <div @click="goNews()">
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
      <!-- crafts | ok -->
      <div class="w-100" style="margin-top: 250px">
        <div class="introduceBg ml-120">
          <div class="d-flex align-items-center justify-content-around">
            <div
              class="d-flex align-items-center justify-content-center pos-relative"
              style="margin-top: -3rem"
              v-for="(item, index) in craftsList"
              :key="'CF__' + index"
            >
              <img :src="item.imgURL" alt="" />
              <div
                class="craftCard d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20"
              >
                <div class="mb-30">
                  <p class="m-0">{{ item.name_ch }}</p>
                  <p class="m-0">{{ item.name_en }}</p>
                </div>
                <div class="pt-10 craftCard__borTop">
                  <a
                    class="text-decoration-none cur-pointer"
                    @click="goCraft(item.name_en)"
                  >
                    VIEW MORE
                  </a>
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
          <div
            class="w-100 h-100"
            style="height: 700px"
            id="map"
            ref="map"
          ></div>

          <div class="w-100 local">
            <div class="w-100 localCard d-flex flex-column">
              <div
                class="localCard__info px-90 d-flex align-items-start flex-row pb-35"
                :class="{ 'pt-50': item.title !== '交通' }"
                v-for="(item, index) in accessList"
                :key="'AL_' + index"
              >
                <div class="localCard__info--title">
                  <p class="m-0" :class="{ 'pt-50': item.title == '交通' }">
                    {{ item.title }}
                  </p>
                </div>

                <div
                  class="localCard__info--map d-flex flex-column"
                  v-if="item.code == 'address'"
                >
                  <p class="m-0">{{ item.value }}</p>
                  <span class="mt-40">
                    <a
                      class="text-decoration-none py-6 px-25"
                      href="https://goo.gl/maps/67MWRHAoppzHiKP87"
                      target="_blank"
                    >
                      GOOGLE MAP
                    </a>
                  </span>
                </div>
                <div
                  class="w-100 d-flex flex-column localCard__info--traf"
                  v-else-if="item.code == 'traffic'"
                >
                  <el-collapse v-model="activeNames">
                    <el-collapse-item
                      :title="items.transportation"
                      :name="items.transportation"
                      v-for="(items, key) in item.list"
                      :key="'LST__' + key"
                    >
                      <div
                        class="w-100 content"
                        v-for="(cxt, index_1) in items.options"
                        :key="'OPT__' + index_1"
                      >
                        <p class="m-0">
                          {{ cxt.title }}
                        </p>
                        <ul class="m-0 p-0">
                          <li class="py-20" v-if="cxt.context">
                            {{ cxt.context }}
                          </li>
                        </ul>
                      </div>
                      <div class="w-100 content">
                        <p class="m-0 pb-20">
                          接駁公車資訊請至以下網站　詢：
                          <a href="http://eec.ntua.edu.tw/bus/" target="_blank"
                            >http://eec.ntua.edu.tw/bus/
                          </a>
                        </p>
                        <p class="m-0 pb-20">
                          更多交通資訊請參閱新北市市政府乘車資訊服務系統網站，網址：
                          <a href="http://e-bus.tpc.gov.tw/" target="_blank"
                            >http://e-bus.tpc.gov.tw/
                          </a>
                        </p>
                      </div>
                    </el-collapse-item>
                  </el-collapse>

                  <!-- <div
                  class="d-flex justify-content-between flex-column localCard__info--traffic"
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
                </div> -->
                </div>
                <div v-else>
                  <p class="m-0">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- phone -->
    <div class="phoneScreen d-block d-mb-none">
      <div class="px-30 pt-20 pb-40">
        <!-- contest winning | ok -->
        <div class="contest w-100 mb-30">
          <TitleText textTitle="CONTEST WINNING" />
          <div class="contest__limitWidth w-100 mt-10 d-flex align-items-start">
            <div
              class="contest__card d-flex flex-column"
              v-for="item in awardData"
              :key="item.id"
            >
              <router-link :to="{ name: 'award' }">
                <img :src="item.pics" alt="" width="100%" height="120px" />
              </router-link>
              <div
                class="contest__card--title w-100 d-flex align-items-center justify-content-between py-10"
              >
                <p class="m-0">{{ item.title }}</p>
                <p class="m-0">
                  {{ item.releaseDate | moment("YYYY | MM.DD") }}
                </p>
              </div>
              <div class="contest__card--content w-100">
                <vue-editor
                  v-model="item.contents"
                  :disabled="true"
                ></vue-editor>
              </div>
            </div>
          </div>
        </div>
        <!-- students works | ok -->
        <div class="students w-100 mb-50" v-if="worksList.length > 0">
          <TitleText textTitle="STUDENTS WORKS" />
          <div class="w-100 mt-15">
            <div class="w-100 d-flex align-items-center justify-content-center">
              <div
                class="w-100 d-flex align-items-center justify-content-center students__slash"
              >
                <img
                  src="../assets/images/icon/背景線.png"
                  alt=""
                  width="100%"
                />
              </div>
              <div class="pos-relative">
                <img
                  class="zIndex-1"
                  :src="worksList[getWorkNum].contents"
                  alt=""
                  width="160px"
                />
                <router-link
                  class="students__viewBtn"
                  :to="{ name: 'studioResult' }"
                >
                  <img src="@/assets/images/view_btn.png" alt="" width="60px" />
                  <img
                    src="@/assets/images/view_btn_hover.png"
                    alt=""
                    width="60px"
                  />
                </router-link>
              </div>
            </div>
            <div
              class="w-100 d-flex align-items-center justify-content-center mt-20"
            >
              <a
                class="cur-pointer d-flex align-items-center px-20"
                @click="works_prev()"
              >
                <img src="@/assets/images/arrowLeft_btn.png" alt="" />
              </a>

              <a
                class="cur-pointer d-flex align-items-center px-20"
                @click="works_next()"
              >
                <img src="@/assets/images/arrowRight_btn.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <!-- what's new | ok -->
        <div class="whatsnew w-100 mb-100">
          <div class="w-100 d-flex align-items-center justify-content-between">
            <TitleText textTitle="WHAT'S NEW" />
            <div
              class="whatsnew__viewBtn ml-auto d-flex align-items-center flex-row pb-10"
            >
              <p class="m-0 pr-20">VIEW MORE</p>
              <img
                src="@/assets/images/arrowRight_btn.png"
                alt=""
                width="24px"
                @click="goNews()"
              />
            </div>
          </div>
          <div class="w-100 mt-10">
            <div
              class="whatsnew__content w-100 d-flex align-items-center flex-column mt-30"
              v-for="(item, index) in newsData"
              :key="'WN_' + index"
            >
              <div class="whatsnew__content--title w-100">
                <p class="m-0">{{ item.releaseDate | moment("YYYY.MM.DD") }}</p>
              </div>
              <div
                class="whatsnew__content--context w-100 d-flex align-items-center justify-content-between mt-10 pb-10"
              >
                <div class="d-flex justify-content-start flex-column">
                  <p class="m-0">{{ item.title }}</p>
                </div>
                <div class="ml-auto">
                  <img
                    src="@/assets/images/arrowRight_btn.png"
                    alt=""
                    @click="goNews()"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- crafts | ok -->
        <div class="crafts w-100 mb-50">
          <div class="craftsCard">
            <div class="p-20 d-flex align-items-center justify-content-start">
              <div
                class="d-flex flex-column align-items-center justify-content-center"
              >
                <img
                  src="@/assets/images/craft/craft_1.png"
                  alt=""
                  width="110px"
                />
                <div
                  class="craftsCard__info d-flex align-items-center justify-content-center flex-column"
                >
                  <div class="py-10">
                    <p class="m-0">陶瓷</p>
                  </div>
                  <a
                    class="text-decoration-none mt-10"
                    @click="goCraft('SYS_CLASSTYPE_CERAMICS')"
                  >
                    VIEW MORE
                  </a>
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
                  class="craftsCard__info d-flex align-items-center justify-content-center flex-column"
                >
                  <div class="py-10">
                    <p class="m-0">金工</p>
                  </div>
                  <a
                    class="text-decoration-none mt-10"
                    @click="goCraft('METALWORKING')"
                  >
                    VIEW MORE
                  </a>
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
                  class="craftsCard__info d-flex align-items-center justify-content-center flex-column"
                >
                  <div class="py-10">
                    <p class="m-0">木工</p>
                  </div>
                  <a
                    class="text-decoration-none mt-10"
                    @click="goCraft('WOODWORKING')"
                  >
                    VIEW MORE
                  </a>
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
                  class="craftsCard__info d-flex align-items-center justify-content-center flex-column"
                >
                  <div class="py-10">
                    <p class="m-0">產品</p>
                  </div>
                  <a
                    class="text-decoration-none mt-10"
                    @click="goCraft('PRODUCT')"
                  >
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- access -->
        <div class="access w-100">
          <TitleText textTitle="ACCESS" />
          <div class="w-100 mt-20">
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
            <div class="access__infoCard d-flex align-items-center p-15">
              <div
                class="access__infoCard--title d-flex align-items-start justify-content-start"
              >
                地址
              </div>
              <div
                class="access__infoCard--content w-100 d-flex flex-column align-items-center text-center"
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
            <div class="access__infoCard d-flex align-items-center p-15">
              <div
                class="access__infoCard--title d-flex align-items-center justify-content-start"
              >
                電話
              </div>
              <div
                class="access__infoCard--content w-100 d-flex align-items-center"
              >
                <p class="m-0">02-2272-2181　　#2111</p>
              </div>
            </div>
            <div class="access__infoCard d-flex align-items-center p-15">
              <div
                class="access__infoCard--title d-flex align-items-center justify-content-start"
              >
                MAIL
              </div>
              <div
                class="access__infoCard--content w-100 d-flex align-items-center justify-content-end"
              >
                <p class="m-0">cd@ntua.edu.tw</p>
              </div>
            </div>
            <div class="access__infoCard d-flex align-items-center p-15">
              <div
                class="access__infoCard--title d-flex align-items-center justify-content-start"
              >
                交通
              </div>
              <div
                class="access__infoCard--content w-100 d-flex align-items-center justify-content-between"
              >
                <p class="m-0">捷運</p>
                <img src="@/assets/images/icon/arrowDown_icon.png" alt="" />
              </div>
            </div>
            <div class="access__infoCard d-flex align-items-center p-15">
              <div
                class="access__infoCard--title d-flex align-items-center justify-content-start"
              ></div>
              <div
                class="access__infoCard--content w-100 d-flex align-items-center justify-content-between"
              >
                <p class="m-0">公車</p>
                <img src="@/assets/images/icon/arrowDown_icon.png" alt="" />
              </div>
            </div>
            <div class="access__infoCard d-flex align-items-center p-15">
              <div
                class="access__infoCard--title d-flex align-items-center justify-content-start"
              ></div>
              <div
                class="access__infoCard--content w-100 d-flex align-items-center justify-content-between"
              >
                <p class="m-0">火車</p>
                <img src="@/assets/images/icon/arrowDown_icon.png" alt="" />
              </div>
            </div>
            <div class="access__infoCard d-flex align-items-center p-15">
              <div
                class="access__infoCard--title d-flex align-items-center justify-content-start"
              ></div>
              <div
                class="access__infoCard--content w-100 d-flex align-items-center justify-content-between"
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
      map: document.getElementById("map"),
      awardData: [],
      worksList: [],
      newsData: [],
      worksNum: "",
      getWorkNum: 0,
      craftsList: [
        {
          name_ch: "陶瓷",
          name_en: "CERAMICS",
          imgURL: require("@/assets/images/craft/craft_1.png"),
        },
        {
          name_ch: "金工",
          name_en: "METALWORKING",
          imgURL: require("@/assets/images/craft/craft_2.png"),
        },
        {
          name_ch: "木工",
          name_en: "WOODWORKING",
          imgURL: require("@/assets/images/craft/craft_3.png"),
        },
        {
          name_ch: "產品",
          name_en: "PRODUCTION",
          imgURL: require("@/assets/images/craft/craft_4.png"),
        },
      ],
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
                    "1.701公車（台北－>迴龍）－>板橋車站（文化路捷運3號出口）－>臺灣藝術大學",
                },
                {
                  context:
                    "2.702公車（板橋公車總站－>三峽）板橋公車總站－>臺灣藝術大學",
                },
                {
                  context:
                    "3.234公車（西門－>板橋）西門捷運站－>板橋公車站－>亞東技術學院－>臺灣藝術大學",
                },
                {
                  context:
                    "4.264公車（蘆洲－>板橋）板橋車站（文化路捷運3號出口）－>臺灣藝術大學",
                },
                {
                  context:
                    "5.793公車（木柵－>樹林）板橋車站（文化路捷運3號出口）－>臺灣藝術大學",
                },
                {
                  context:
                    "6.臺北客運F502（浮洲地區－>板橋公車站）板橋區公所（捷運府中站）－>臺灣藝術大學",
                },
                {
                  context: "7.接駁公車捷運府中站－>臺灣藝術大學",
                },
                {
                  remark: "*（尖峰時刻約20分鐘一班，詳情請看接駁公車時刻表）",
                },
              ],
            },
            {
              code: "train",
              transportation: "火車",
              options: [
                {
                  context:
                    "1.板橋新火車站下車－>國立台灣藝術大學板橋新火車站步行至文化路搭聯營264、701公車、臺北客運793，或至板橋公車總站搭702公車至國立台灣藝術大學",
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
                  title:
                    "自97年9月8日（星期一）起改由台北客運公司替本校服務，請搭乘同學注意並持續支持。",
                },
                {
                  title: "搭車位置",
                },
                {
                  context: "1.本校：影劇大樓前廣場",
                },
                {
                  context: "2.府中捷運站：三號出口，步行至警察局旁的候車亭",
                },
              ],
            },
          ],
        },
      ],
      activeNames: "",
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
    checkUserLoad() {
      if (window.sessionStorage.getItem("firstLoad")) {
        this.firstLoad = false;
      } else {
        this.firstLoad = true;
      }
    },
    initMap() {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: {
          //原始中心點
          lat: 25.00507,
          lng: 121.4483,
        }, // 中心點座標, // 中心點座標
        zoom: 20, // 1-20，數字愈大，地圖愈細：1是世界地圖，20就會到街道
        maxZoom: 20,
        minZoom: 17,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        // roadmap 顯示默認道路地圖視圖。
        // satellite 顯示 Google 地球衛星圖像。
        // hybrid 顯示正常和衛星視圖的混合。
        // terrain 顯示基於地形信息的物理地圖。
        mapTypeId: "roadmap",
        // 需要再前往修改，https://mapstyle.withgoogle.com/
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5",
              },
            ],
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#f5f5f5",
              },
            ],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#bdbdbd",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#e5e5e5",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#dadada",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
              {
                color: "#e5e5e5",
              },
            ],
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#c9c9c9",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
        ],
      });

      let marker = new google.maps.Marker({
        //原始中心點
        position: {
          lat: 25.00507,
          lng: 121.4483,
        },
        icon: require("@/assets/images/icon/mapIcon.svg"),
        map: this.map,
      });

      // dD.setMap(this.map);
    },
    openTrafficInfo(data) {
      console.log(data);
      this.getTraffic = data.code;
    },
    works_prev() {
      if (this.getWorkNum > 0) {
        this.getWorkNum = this.getWorkNum - 1;
        console.log(this.getWorkNum);
      }
    },
    works_next() {
      if (this.getWorkNum < this.worksNum - 1) {
        this.getWorkNum = this.getWorkNum + 1;
        console.log(this.worksNum);
      }
    },
    goNews() {
      this.$router.push({ name: "bulletin" });
    },
    goCraft(sortName) {
      let paramsVal;
      switch (sortName) {
        case "CERAMICS":
          paramsVal = "SYS_CLASSTYPE_CERAMICS";
          break;
        case "METALWORKING":
          paramsVal = "SYS_CLASSTYPE_METAL";
          break;
        case "WOODWORKING":
          paramsVal = "SYS_CLASSTYPE_WOOD";
          break;
        case "PRODUCTION":
          paramsVal = "SYS_CLASSTYPE_PROD";
          break;
        default:
          break;
      }
      this.$router.push({
        name: "crafts",
        params: { sort: "SYS_CLASSTYPE_CERAMICS" },
      });
    },
    getAward() {
      const vm = this;
      const listQuery = {
        teachTypeId: "SYS_TEACH_COMPETITION",
        page: 1,
        limit: 3,
        key: undefined,
      };
      vm.$api.award(listQuery).then((res) => {
        vm.awardData = res.data.data;
      });
    },
    getWorks() {
      const vm = this;
      const listQuery = {
        TeachTypeId: "SYS_TEACH_WORKSHOP",
        page: 1,
        limit: 20,
        key: undefined,
      };
      vm.$api.award(listQuery).then((res) => {
        console.log(res.data.data);
        vm.worksList = res.data.data;
        vm.worksNum = res.data.data.length;
      });
    },
    getNews() {
      const vm = this;
      const listQuery = {
        NewsTypeId: "SYS_NEWS_DEPARTMENT",
        Years: "",
        page: 1,
        limit: 5,
        key: undefined,
      };
      vm.$api.news(listQuery).then((res) => {
        vm.newsData = res.data.data;
      });
    },
  },
  mounted() {
    this.initMap();
    this.getAward();
    this.getWorks();
    this.getNews();
  },
};
</script>

<style lang="scss">
#HomePage {
  // web
  .contest {
    &__content {
      color: #52505a;
      &--editor {
        .ql-editor {
          min-height: 50px;
          p {
            overflow: hidden;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }
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
    }
  }
  .introduceCard {
    width: 320px;
    height: 45px;
    background: rgba(255, 255, 255, 0.7);
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 0;
    bottom: 0.25rem;
    p {
      width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 28px;
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
    margin-bottom: -6rem;
    margin-right: -6rem;
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
    color: #77767b;
    border-bottom: 1px solid #c4c4c4;
    &__child {
      width: 100%;
      color: #77767b;
      height: 60px;
      border-bottom: 1px solid #c4c4c4;
    }
  }
  .introduceBg {
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
      color: white;
    }
    a {
      font-size: 18px;
      line-height: 21px;
      color: #ceb87f;
    }
    &__borTop {
      border-top: 1px solid #ceb87f;
    }
  }
  .local {
    ::-webkit-scrollbar {
      width: 0px;
    }
    .localCard {
      background: #2d2d2d;
      height: 700px;
      overflow-y: auto;
      &__info {
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.2em;
        color: white;
        border-bottom: 1px solid #d4cbcc;
        &--title {
          min-width: 8vw;
        }
        &--map {
          // button {
          //   width: 235px;
          //   height: 45px;
          //   font-size: 18px;
          //   line-height: 180%;
          //   letter-spacing: 0.25em;
          //   color: #2d2d2d;
          a {
            background: #ffffff;
            font-size: 18px;
            line-height: 180%;
            letter-spacing: 0.25em;
            color: #2d2d2d;
          }
          // }
        }
        &--traf {
          .el-collapse {
            border-top: none;
            &-item {
              &__header {
                background: #2d2d2d;
                color: #ffffff;
                font-size: 24px;
                padding-top: 40px;
                padding-bottom: 40px;
              }
              &__content {
                padding-bottom: 0;
              }
            }
          }
          .content {
            background: #2d2d2d;
            font-size: 24px;
            letter-spacing: 0.2em;
            color: #ffffff;
            a {
              color: #ffffff;
              &:hover {
                color: #ceb87f;
              }
            }
          }
        }
        &--traffic {
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
  }
  //

  // phone
  .phoneScreen {
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 20px 20px 0px 0px;
    .contest {
      &__limitWidth {
        overflow-x: auto;
      }
      &__card {
        min-width: 155px;
        max-width: 155px;
        margin-right: 15px;
        &:last-child {
          margin-right: 0;
        }
        &--title {
          p {
            &:first-child {
              max-width: 85px;
              font-size: 14px;
              line-height: 16px;
              color: #ceb87f;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            &:last-child {
              font-size: 12px;
              line-height: 14px;
              color: #d4cbcc;
            }
          }
        }
        &--content {
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.05em;
          color: #8c8f90;
          .ql-editor {
            min-height: 50px;
            padding: 0;
            p {
              overflow: hidden;
              -webkit-line-clamp: 2;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
            }
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
      }
    }
    .students {
      &__slash {
        position: absolute;
        background-repeat: no-repeat;
        height: 65px;
        z-index: 0;
      }
      &__viewBtn {
        z-index: 2;
        position: absolute;
        bottom: 0;
        right: 0;
        margin-right: -1.8rem;
        margin-bottom: -1.5rem;
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
      &__viewBtn {
        border-bottom: 1px solid #d4cbcc;
        p {
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #596164;
        }
      }
      &__content {
        &--title {
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          color: #d4cbcc;
        }
        &--context {
          font-size: 14px;
          line-height: 16px;
          color: #596164;
          border-bottom: 1px solid #d4cbcc;
        }
      }
    }
    .crafts {
      .craftsCard {
        overflow-x: auto;
        width: calc(100% + 30px);
        // height: 190px;
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
      &__infoCard {
        background: #2d2d2d;
        border-bottom: 1px solid #d4cbcc;
        &--title {
          min-width: 60px;
          max-width: 60px;
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.2em;
          color: #ffffff;
        }
        &--content {
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.2em;
          color: #ffffff;
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 220px;
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