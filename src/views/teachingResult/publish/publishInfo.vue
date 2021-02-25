<template>
  <div id="publishInfo">
    <div class="web d-none d-mb-block">
      <div class="w-100 pb-10 goPrev d-flex align-items-center flex-row cur-pointer" @click="goPrev()">
        <img src="@/assets/images/icon/arrowLeft.png" alt="回上一頁" />
        <strong class="font-s-24 pl-10">回上一頁</strong>
      </div>

      <div class="publishInfoBG pb-150">
        <!-- 成員資訊 -->
        <div class="authorCard">
          <div class="py-80 px-60 d-flex align-items-start flex-row">

            <div class="d-flex align-items-center justify-content-center flex-column">
              <img :src="teacherList.pic" :alt="teacherList.name" height="300px" />
              <div class="d-flex align-items-start flex-row mt-20">
                <div class="px-15 contactInfo d-flex align-items-center flex-column">
                  <a class="mb-10" :href="'mailto:'+teacherList.email" target="_blank">
                    <img src="@/assets/images/icon/mail-icon.png" alt="電子郵件" />
                  </a>
                  <p class="m-0">MAIL</p>
                </div>

                <div class="px-15 contactInfo d-flex align-items-center flex-column">
                  <a class="mb-10" :href="teacherList.webUrl" target="_blank">
                    <img src="@/assets/images/icon/連結-icon.png" alt="個人網站" />
                  </a>
                  <p class="m-0">個人網站</p>
                </div>

                <div class="px-15 contactInfo d-flex align-items-center flex-column">
                  <a class="mb-10" :href="teacherList.researchUrl" target="_blank">
                    <img src="@/assets/images/icon/連結-icon.png" alt="個人著作" />
                  </a>
                  <p class="m-0">個人著作</p>
                </div>

                <div class="px-15 contactInfo d-flex align-items-center flex-column">
                  <a class="mb-10" :href="teacherList.bookUrl" target="_blank">
                    <img src="@/assets/images/icon/連結-icon.png" alt="個人研究" />
                  </a>
                  <p class="m-0">個人研究</p>
                </div>
              </div>
            </div>

            <div class="profile d-flex flex-column justify-content-between ml-40">
              <div class="d-flex flex-row">
                <div class="profile__title profile__title-left text-right pl-20">
                  姓名
                </div>
                <img class="pt-12 px-10" src="@/assets/images/icon/dashLine.png" height="1px" style="min-width: 40px; max-width: 40px" />
                <div class="profile__context profile__context-left">
                  {{ teacherList.name }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="profile__title profile__title-left text-right pl-20">
                  Office_Hour
                </div>
                <img class="pt-12 px-10" src="@/assets/images/icon/dashLine.png" alt="" height="1px" style="min-width: 40px; max-width: 40px" />
                <div class="profile__context profile__context-left">
                  {{ teacherList.officeHour }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="profile__title profile__title-left text-right pl-20">
                  聯絡電話
                </div>
                <img class="pt-12 px-10" src="@/assets/images/icon/dashLine.png" alt="" height="1px" style="min-width: 40px; max-width: 40px" />
                <div class="profile__context profile__context-left">
                  {{ teacherList.contactTel }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="profile__title profile__title-left text-right pl-20">
                  傳真
                </div>
                <img class="pt-12 px-10" src="@/assets/images/icon/dashLine.png" alt="" height="1px" style="min-width: 40px; max-width: 40px;" />
                <div class="profile__context profile__context-left">
                  {{ teacherList.fax }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="profile__title profile__title-left text-right pl-20">
                  聯絡地址
                </div>
                <img class="pt-12 px-10" src="@/assets/images/icon/dashLine.png" alt="" height="1px" style="min-width: 40px; max-width: 40px" />
                <div class="profile__context profile__context-left">
                  {{ teacherList.addr }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="profile__title profile__title-left text-right pl-20">
                  服務單位_部門
                </div>
                <img class="pt-12 px-10" src="@/assets/images/icon/dashLine.png" alt="" height="1px" style="min-width: 40px; max-width: 40px" />
                <div class="profile__context profile__context-left">
                  工藝設計學系
                </div>
              </div>
            </div>

            <div class="profile d-flex flex-column justify-content-between ml-40">
              <div class="d-flex flex-row">
                <div class="profile__title profile__title-left text-right pl-20">
                  類別
                </div>
                <img class="pt-12 px-10" src="@/assets/images/icon/dashLine.png" alt="" height="1px" style="min-width: 40px; max-width: 40px" />
                <div class="profile__context profile__context-left">
                  {{ teacherList.memberTypeName }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="profile__title profile__title-left text-right pl-20">
                  職稱
                </div>
                <img class="pt-12 px-10" src="@/assets/images/icon/dashLine.png" alt="" height="1px" style="min-width: 40px; max-width: 40px" />
                <div class="profile__context profile__context-left">
                  {{ teacherList.jobTitle }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="profile__title profile__title-left text-right pl-20">
                  授課領域
                </div>
                <img class="pt-12 px-10" src="@/assets/images/icon/dashLine.png" alt="" height="1px" style="min-width: 40px; max-width: 40px" />
                <div class="profile__context profile__context-left">
                  {{ teacherList.teachClass }}
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="profile__title profile__title-left text-right pl-20">
                  研究專長
                </div>
                <img class="pt-12 px-10" src="@/assets/images/icon/dashLine.png" alt="" height="1px" style="min-width: 40px; max-width: 40px" />
                <div class="profile__context profile__context-left">
                  {{ teacherList.research }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-left pl-60">
          <p class="Txt-title">研究發表</p>
        </div>

        <!-- 研究發表 -->
        <div class="publishInfoCard" v-if="getInfo">
          <el-collapse v-model="activeNames">
            <el-collapse-item :title="key" :name="key" v-for="(item, key) in publishData" :key="item.id">
              <div class="publishInfoCard__content">
                <!-- 研究發表 -->
                <div v-if="key == '研究發表'">
                  <el-row>
                    <el-col class="publishInfoCard__content--leftBlock pb-50" :span="4">
                      <ul class="m-0">
                        <li class="py-5" v-for="(items, index__1) in item" :key="'PB1__' + index__1">
                          <p class="m-0 d-inline-flex" :class="{
                              activeColor: chooseMenuName == items.title,
                            }" @click="openPublishInfo(items, index__1)">
                            {{ items.title }}
                          </p>
                        </li>
                      </ul>
                    </el-col>
                    <el-col class="" :span="20">
                      <div class="mr-120 ml-30 publishInfoCard__content--rightBlock">
                        <div class="p-30">
                          <vue-editor v-model="item[chooseInfoKey].contents" :disabled="true" />
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <!-- 研究計畫 產學合作計畫 -->
                <div class="publishInfoCard__content--table" v-else-if="key == '研究計畫' || key == '產學合作計畫'">
                  <div class="px-50">
                    <div class="w-100 header">
                      <el-row class="py-40 d-flex align-items-center text-center">
                        <el-col :span="3">年度</el-col>
                        <el-col :span="5">計畫名稱</el-col>
                        <el-col :span="3">參與人</el-col>
                        <el-col :span="3">擔任之工作</el-col>
                        <el-col :span="3">計畫時間</el-col>
                        <el-col :span="3">補助/委託機構</el-col>
                        <el-col :span="2">附件檔案/參考連結</el-col>
                        <el-col :span="2">備註</el-col>
                      </el-row>
                    </div>
                    <div class="w-100 body">
                      <el-row class="py-40 d-flex align-items-center text-center" v-for="(items, index__2) in item" :key="'PB2__' + index__2">
                        <el-col :span="3">{{ items.year }}</el-col>
                        <el-col :span="5">{{ items.title }}</el-col>
                        <el-col :span="3">{{ items.joinMember }}</el-col>
                        <el-col :span="3">{{ items.jobTitle }}</el-col>
                        <el-col :span="3">
                          <div class="w-100 d-flex flex-column align-items-center justify-content-center">
                            <p class="m-0">
                              {{ items.startDate | moment("YYYY-MM-DD") }}
                            </p>

                            <p class="m-0">
                              {{ items.endDate | moment("YYYY-MM-DD") }}
                            </p>
                          </div>
                        </el-col>
                        <el-col :span="3">{{ items.mechanismName }}</el-col>
                        <el-col :span="2">{{ items.annexFile }}/{{ items.links }}</el-col>
                        <el-col :span="2">{{ items.remark }}</el-col>
                      </el-row>
                    </div>
                  </div>
                </div>
                <!-- 校內榮譽 校外榮譽 -->
                <div class="publishInfoCard__content--table" v-else-if="key == '校內榮譽' || key == '校外榮譽'">
                  <div class="px-50">
                    <div class="w-100 header">
                      <el-row class="py-40 d-flex align-items-center text-center">
                        <el-col :span="3">得獎年度</el-col>
                        <el-col class="px-80 text-left">獎項名稱</el-col>
                        <el-col class="text-left" :span="5">頒獎單位</el-col>
                      </el-row>
                    </div>
                    <div class="w-100 body">
                      <el-row class="py-40 d-flex align-items-center text-center" v-for="(items, index__2) in item" :key="'PB2__' + index__2">
                        <el-col :span="3">{{ items.year }}</el-col>
                        <el-col class="px-80 text-left">
                          {{ items.title }}
                        </el-col>
                        <el-col class="text-left" :span="5">
                          {{ items.mechanismName }}
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </div>
                <!--學歷  -->
                <div class="publishInfoCard__content--table" v-else-if="key == '學歷'">
                  <div class="px-50">
                    <div class="w-100 header">
                      <el-row class="py-40 d-flex align-items-center text-center">
                        <el-col :span="7">學校名稱</el-col>
                        <el-col :span="3">國別</el-col>
                        <!-- <el-col :span="4">擔任職務</el-col> -->
                        <el-col :span="8">系所</el-col>
                        <el-col :span="6">起迄年月</el-col>
                      </el-row>
                    </div>
                    <div class="w-100 body">
                      <el-row class="py-40 d-flex align-items-center text-center" v-for="(items, index__2) in item" :key="'PB2__' + index__2">
                        <el-col :span="7">{{ items.title }}</el-col>
                        <el-col :span="3"> {{ items.mechanismName }}</el-col>
                        <el-col :span="8">{{ items.jobTitle }}</el-col>
                        <!-- <el-col :span="5">{{ items.contents }}</el-col> -->
                        <el-col :span="6">
                          <div class="w-100 d-flex flex-column align-items-center justify-content-center">
                            <p class="m-0">
                              {{ items.startDate | moment("YYYY-MM-DD") }}
                            </p>
                            <p class="m-0">
                              {{ items.endDate | moment("YYYY-MM-DD") }}
                            </p>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </div>
                <!-- 經歷 -->
                <div class="publishInfoCard__content--table" v-else-if="key == '經歷'">
                  <div class="px-50">
                    <div class="w-100 header">
                      <el-row class="py-40 d-flex align-items-center text-center">
                        <el-col :span="6">服務機關</el-col>
                        <el-col :span="6">部門/系所</el-col>
                        <el-col :span="6">擔任職務</el-col>
                        <el-col :span="6">起迄年月</el-col>
                      </el-row>
                    </div>
                    <div class="w-100 body">
                      <el-row class="py-40 d-flex align-items-center text-center" v-for="(items, index__2) in item" :key="'PB2__' + index__2">
                        <el-col :span="6">{{ items.title }}</el-col>
                        <el-col :span="6"> {{ items.mechanismName }}</el-col>
                        <el-col :span="6">{{ items.jobTitle }}</el-col>
                        <el-col :span="6">
                          <div class="w-100 d-flex flex-column align-items-center justify-content-center">
                            <p class="m-0">
                              {{ items.startDate | moment("YYYY-MM-DD") }}
                            </p>
                            <p class="m-0">
                              {{ items.endDate | moment("YYYY-MM-DD") }}
                            </p>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="p-60 text-center publishInfoCard-noData" v-else>
          查無數據
        </div>

        <div class="w-100">
          <div class="pt-50 d-flex align-items-center justify-content-center">
            <div class="pb-10 goPrev d-flex d-inline-flex align-items-center flex-row cur-pointer" @click="goPrev()">
              <img src="@/assets/images/icon/arrowLeft.png" alt="回上一頁" />
              <strong class="font-s-24 pl-10">回上一頁</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb-none pt-70 pb-50">
      <div class="publishInfoTitle w-100 d-flex align-items-center flex-row">
        <a class="pl-20" @click="goPrev()">
          <img src="@/assets/images/icon/arrowLeft.png" alt="" />
        </a>
        <PhoneTitle title="研究發表" :filterDate="false" />
      </div>

      <!-- 成員資訊 -->
      <div class="ml-20 authorCard px-40 py-30 d-flex align-items-center justify-content-center flex-column">
        <div class="authorCard__author w-100 d-flex align-items-center justify-content-center flex-column">
          <img :src="teacherList.pic" :alt="teacherList.name" width="200px" />
          <div class="w-100 py-20">
            <div class="px-40 d-flex align-items-start justify-content-around">
              <div class="d-flex flex-column align-items-center">
                <img src="@/assets/images/icon/mail-icon.png" alt="" width="20px" />
                <p class="m-0">MAIL</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <img src="@/assets/images/icon/連結-icon.png" alt="" width="20px" />
                <p class="m-0">個人網站</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <img src="@/assets/images/icon/連結-icon.png" alt="" width="20px" />
                <p class="m-0">個人著作</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <img src="@/assets/images/icon/連結-icon.png" alt="" width="20px" />
                <p class="m-0">個人研究</p>
              </div>
            </div>
          </div>
        </div>

        <div class="authorCard__information w-100 pt-20 pb-40">
          <el-row class="py-5">
            <el-col :span="8">
              <div class="w-100 text-right authorCard__information-title">
                <strong>姓名</strong>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="px-10">
                <el-divider class="my-8"></el-divider>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="w-100 text-left authorCard__information-context">
                <p class="m-0">{{ teacherList.name }}</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="py-5">
            <el-col :span="8">
              <div class="w-100 text-right authorCard__information-title">
                <strong>Office_Hour</strong>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="px-10">
                <el-divider class="my-8"></el-divider>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="w-100 text-left authorCard__information-context">
                <p class="m-0">{{ teacherList.officeHour }}</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="py-5">
            <el-col :span="8">
              <div class="w-100 text-right authorCard__information-title">
                <strong>聯絡電話</strong>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="px-10">
                <el-divider class="my-8"></el-divider>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="w-100 text-left authorCard__information-context">
                <p class="m-0">{{ teacherList.contactTel }}</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="py-5">
            <el-col :span="8">
              <div class="w-100 text-right authorCard__information-title">
                <strong>傳真</strong>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="px-10">
                <el-divider class="my-8"></el-divider>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="w-100 text-left authorCard__information-context">
                <p class="m-0">{{ teacherList.fax }}</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="py-5">
            <el-col :span="8">
              <div class="w-100 text-right authorCard__information-title">
                <strong>聯絡地址</strong>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="px-10">
                <el-divider class="my-8"></el-divider>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="w-100 text-left authorCard__information-context">
                <p class="m-0">{{ teacherList.addr }}</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="py-5">
            <el-col :span="8">
              <div class="w-100 text-right authorCard__information-title">
                <strong>服務單位_部門</strong>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="px-10">
                <el-divider class="my-8"></el-divider>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="w-100 text-left authorCard__information-context">
                <p class="m-0">工藝設計學系</p>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="authorCard__information w-100 pt-20 pb-40">
          <el-row class="py-5">
            <el-col :span="8">
              <div class="w-100 text-right authorCard__information-title">
                <strong>類別</strong>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="px-10">
                <el-divider class="my-8"></el-divider>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="w-100 text-left authorCard__information-context">
                <p class="m-0">{{ teacherList.memberTypeName }}</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="py-5">
            <el-col :span="8">
              <div class="w-100 text-right authorCard__information-title">
                <strong>職稱</strong>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="px-10">
                <el-divider class="my-8"></el-divider>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="w-100 text-left authorCard__information-context">
                <p class="m-0">{{ teacherList.jobTitle }}</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="py-5">
            <el-col :span="8">
              <div class="w-100 text-right authorCard__information-title">
                <strong>授課領域</strong>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="px-10">
                <el-divider class="my-8"></el-divider>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="w-100 text-left authorCard__information-context">
                <p class="m-0">{{ teacherList.teachClass }}</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="py-5">
            <el-col :span="8">
              <div class="w-100 text-right authorCard__information-title">
                <strong>研究專長</strong>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="px-10">
                <el-divider class="my-8"></el-divider>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="w-100 text-left authorCard__information-context">
                <p class="m-0">{{ teacherList.research }}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

      <!-- 研究發表 -->
      <div class="ml-20 mt-50">
        <div class="publishInfoCard" v-if="getInfo">
          <el-collapse v-model="activeNames">
            <el-collapse-item :title="key" :name="key" v-for="(item, key) in publishData" :key="item.id">
              <div class="publishInfoCard__content">
                <!-- 研究發表 -->
                <div v-if="key == '研究發表'">
                  <el-row>
                    <el-col class="publishInfoCard__content--leftBlock pb-30" :span="24">
                      <ul class="m-0 p-0">
                        <li class="py-5" v-for="(items, index__1) in item" :key="'PB1__' + index__1">
                          <p class="m-0 d-inline-flex" :class="{
                              activeColor: chooseMenuName == items.title,
                            }" @click="openPublishInfo(items, index__1)">
                            {{ items.title }}
                          </p>
                        </li>
                      </ul>
                    </el-col>
                    <el-col class="" :span="24">
                      <div class="publishInfoCard__content--rightBlock pt-30">
                        <vue-editor v-model="item[chooseInfoKey].contents" :disabled="true" />
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <!-- 研究計畫 產學合作計畫 -->
                <div class="publishInfoCard__content--table" v-else-if="key == '研究計畫' || key == '產學合作計畫'">
                  <div class="w-100 header">
                    <el-row class="py-15 d-flex align-items-center text-center">
                      <el-col :span="6">年度</el-col>
                      <el-col class="text-left" :span="12">計畫名稱</el-col>
                      <el-col :span="6">參與人</el-col>
                    </el-row>
                  </div>
                  <div class="w-100 body">
                    <el-row class="py-15 d-flex align-items-center text-center" v-for="(items, index__2) in item" :key="'PB2__' + index__2">
                      <el-col :span="6">{{ items.year }}</el-col>
                      <el-col class="text-left" :span="12">{{
                        items.title
                      }}</el-col>
                      <el-col :span="6">{{ items.joinMember }}</el-col>
                    </el-row>
                  </div>
                </div>
                <!-- 校內榮譽 校外榮譽 -->
                <div class="publishInfoCard__content--table" v-else-if="key == '校內榮譽' || key == '校外榮譽'">
                  <div class="w-100 header">
                    <el-row class="py-15 d-flex align-items-center text-center">
                      <el-col :span="6">得獎年度</el-col>
                      <el-col class="text-left" :span="12">獎項名稱</el-col>
                      <el-col :span="6">頒獎單位</el-col>
                    </el-row>
                  </div>
                  <div class="w-100 body">
                    <el-row class="py-15 d-flex align-items-center text-center" v-for="(items, index__2) in item" :key="'PB2__' + index__2">
                      <el-col :span="6">{{ items.year }}</el-col>
                      <el-col class="text-left" :span="12">
                        {{ items.title }}
                      </el-col>
                      <el-col :span="6">
                        {{ items.mechanismName }}
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <!-- 學歷 -->
                <div class="publishInfoCard__content--table" v-else-if="key == '學歷'">
                  <div class="w-100 header">
                    <el-row class="py-15 d-flex align-items-center text-center">
                      <el-col :span="8">學校名稱</el-col>
                      <el-col :span="9">系所</el-col>
                      <el-col :span="7">起迄年月</el-col>
                    </el-row>
                  </div>
                  <div class="w-100 body">
                    <el-row class="py-15 d-flex align-items-center text-center" v-for="(items, index__2) in item" :key="'PB2__' + index__2">
                      <el-col :span="8">{{ items.title }}</el-col>
                      <el-col :span="9">{{ items.contents }}</el-col>
                      <el-col :span="7">
                        <div class="w-100 d-flex flex-column align-items-center justify-content-center">
                          <p class="m-0">
                            {{ items.startDate | moment("YYYY-MM-DD") }}
                          </p>
                          <p class="m-0">
                            {{ items.endDate | moment("YYYY-MM-DD") }}
                          </p>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <!-- 經歷 -->
                <div class="publishInfoCard__content--table" v-else-if="key == '經歷'">
                  <div class="w-100 header">
                    <el-row class="py-15 d-flex align-items-center text-center">
                      <el-col :span="6">服務機關</el-col>
                      <el-col :span="9">部門/系所</el-col>
                      <el-col :span="3">職務</el-col>
                      <el-col :span="6">起迄年月</el-col>
                    </el-row>
                  </div>
                  <div class="w-100 body">
                    <el-row class="py-15 d-flex align-items-center text-center" v-for="(items, index__2) in item" :key="'PB2__' + index__2">
                      <el-col :span="6">{{ items.title }}</el-col>
                      <el-col :span="9"> {{ items.mechanismName }}</el-col>
                      <el-col :span="3">{{ items.jobTitle }}</el-col>
                      <el-col :span="6">
                        <div class="w-100 d-flex flex-column align-items-center justify-content-center">
                          <p class="m-0">
                            {{ items.startDate | moment("YYYY-MM-DD") }}
                          </p>
                          <p class="m-0">
                            {{ items.endDate | moment("YYYY-MM-DD") }}
                          </p>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="p-40 text-center publishInfoCard-noData" v-else>
          查無數據
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
      memberListQuery: {
        MemberTypeId: "",
        page: 1,
        limit: 20,
        key: undefined,
      },
      publishListQuery: {
        MemberId: this.$route.params.author,
        DataTypeId: "",
        page: 1,
        limit: 20,
        key: undefined,
      },
      teacherList: [],
      publishData: [],
      getInfo: false,
      activeNames: "",
      chooseInfoKey: 0,
      chooseMenuName: "期刊論文",
    };
  },
  methods: {
    goPrev() {
      this.$router.go(-1);
    },
    openPublishInfo(item, key) {
      this.chooseInfoKey = key;
      this.chooseMenuName = item.title;
    },
    getMemberList() {
      this.$api.members(this.memberListQuery).then((res) => {
        this.teacherList = res.data.data.filter((data) => {
          return data.id === this.$route.params.author;
        })[0];
      });
    },
    async getPublishList() {
      await this.$api.memberDatas(this.publishListQuery).then((res) => {
        if (res.data.data.length > 0) {
          this.getInfo = true;
        } else {
          this.getInfo = false;
        }
        this.publishData = res.data.data;
        let obj = {};
        res.data.data.map((i) => {
          Object.keys(obj).includes(i.dataTypeName)
            ? (obj = obj)
            : (obj[i.dataTypeName] = []);
          obj[i.dataTypeName].push(i);
        });
        this.publishData = obj;
        this.$store.commit("SETLOADING", false);
      });
    },
  },
  mounted() {
    this.$store.commit("SETLOADING", true);
    this.getMemberList();
    this.getPublishList();
  },
};
</script>

<style lang="scss">
#publishInfo {
  .web {
    padding-top: 420px;
    margin-left: 120px;
    .goPrev {
      color: #ceb87f;
      transition: all 0.6s;
      &:hover {
        letter-spacing: 0.5rem;
      }
    }
    .publishInfoBG {
      background: #fff;
      .authorCard {
        background: #2d2d2d;
        .contactInfo {
          width: 30px;
          p {
            font-size: 12px;
            line-height: 14px;
            color: #8c8f90;
          }
        }
        .profile {
          border-left: 4px solid #ceb87f;
          height: 300px;
          &__title {
            font-weight: bold;
            font-size: 22px;
            line-height: 28px;
            letter-spacing: 0.1em;
            color: #ceb87f;
            &-left {
              min-width: 160px;
              max-width: 160px;
            }
            &-right {
              min-width: 110px;
              max-width: 110px;
            }
          }
          &__context {
            font-size: 18px;
            line-height: 160%;
            letter-spacing: 0.1em;
            color: #ffffff;
            &-left {
              min-width: 120px;
            }
          }
        }
      }
    }
    .Txt-title {
      width: 130px;
      font-size: 64px;
      line-height: 75px;
      color: #ceb87f;
    }
    .publishInfoCard {
      width: calc(100% - 150px);
      .el-collapse-item {
        &__header {
          background: #2d2d2d;
          color: #ffffff;
          font-size: 24px;
          padding: 50px;
        }
        &__content {
          padding-bottom: 0;
        }
      }
      &__content {
        background: #2d2d2d;
        &--leftBlock {
          color: #ffffff;
          font-size: 20px;
          padding-left: 50px;
          padding-right: 50px;
          ul {
            list-style-type: upper-alpha;
            li > p {
              &:hover {
                color: #ceb87f;
                font-weight: bold;
                cursor: pointer;
              }
            }
          }
          .activeColor {
            color: #ceb87f;
            font-weight: bold;
          }
        }
        &--rightBlock {
          background: #ffffff;
          color: #2d2d2d;
          font-size: 18px;
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
        &--table {
          .header {
            background: #c4c4c4;
            color: #2d2d2d;
            font-size: 18px;
            font-weight: bold;
          }
          .body {
            background: transparent;
            color: #ffffff;
            font-size: 20px;
            .el-row {
              border-bottom: 1px solid #000000;
              &:last-child {
                border-bottom: none;
              }
            }
          }
        }
      }

      &-noData {
        background: #2d2d2d;
        font-size: 28px;
        color: #ffffff;
        font-weight: bold;
      }
    }
    .publishCard {
      width: calc(100% - 150px);
      background: #2d2d2d;
      border: 1px solid #edece8;
      &__menu {
        border-bottom: 1px solid #edece8;
        p {
          font-size: 24px;
          line-height: 30px;
          letter-spacing: 0.2em;
          color: #ffffff;
        }
        &:last-child {
          border-bottom: none;
        }
        &-content {
          font-size: 24px;
          line-height: 30px;
          letter-spacing: 0.2em;
          color: #ffffff;
          .infoList {
            &__leftBlock {
              min-width: 280px;
              max-width: 280px;
              p:hover {
                color: #ceb87f;
              }
              &-active {
                color: #ceb87f;
              }
            }
            &__rightBlock {
              background: #ffffff;
              &-text {
                span {
                  min-width: 50px;
                  max-width: 50px;
                }
                p {
                  font-size: 18px;
                  line-height: 22px;
                  letter-spacing: 0.2em;
                  color: #2d2d2d;
                }
              }
            }
          }
        }
      }
    }
  }

  .phone {
    background: #ffffff;
    .publishInfoTitle {
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
    .authorCard {
      background: #2d2d2d;
      &__author {
        border-bottom: 2px solid #ceb87f;
        p {
          width: 30px;
          font-size: 12px;
          line-height: 14px;
          color: #8c8f90;
        }
      }
      &__information {
        border-bottom: 2px solid #ceb87f;
        line-height: 16px;
        &-title {
          font-size: 14px;
          color: #ceb87f;
        }
        &-line {
          border-top: 1px solid #8c8f90;
        }
        &-context {
          font-size: 12px;
          color: #ffffff;
        }
        &:last-child {
          border-bottom: none;
        }
      }
      &__list {
        background: #2d2d2d;
        border-bottom: 1px solid #edece8;
        &:last-child {
          border-bottom: none;
        }
      }
    }
    .publishInfoCard {
      background: #2d2d2d;
      &__title {
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.2em;
        color: #ffffff;
      }
      &__list {
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.2em;
        color: #ffffff;
        &-active {
          color: #ceb87f !important;
        }
      }
      &__info {
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.2em;
        color: #2d2d2d;
      }
      &__content {
        background: #2d2d2d;
        &--leftBlock {
          color: #ffffff;
          font-size: 20px;
          padding-left: 50px;
          padding-right: 50px;
          ul {
            list-style-type: upper-alpha;
            li > p {
              &:hover {
                color: #ceb87f;
                font-weight: bold;
                cursor: pointer;
              }
            }
          }
          .activeColor {
            color: #ceb87f;
            font-weight: bold;
          }
        }
        &--rightBlock {
          background: #ffffff;
          color: #2d2d2d;
          font-size: 18px;
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
        &--table {
          .header {
            background: #c4c4c4;
            color: #2d2d2d;
            font-size: 14px;
            font-weight: bold;
          }
          .body {
            background: transparent;
            color: #ffffff;
            font-size: 14px;
            .el-row {
              border-bottom: 1px solid #000000;
              &:last-child {
                border-bottom: none;
              }
            }
          }
        }
      }
      .el-collapse-item {
        &__header {
          background: #2d2d2d;
          color: #ffffff;
          font-size: 18px;
          padding: 15px;
        }
        &__content {
          padding-bottom: 0;
        }
      }
      &-noData {
        background: #2d2d2d;
        font-size: 24px;
        color: #ffffff;
        font-weight: bold;
      }
    }
  }
}
</style>