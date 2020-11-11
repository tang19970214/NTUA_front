<template>
  <div id="administrative">
    <div class="w-100">
      <el-row>
        <el-col
          class="mb-150 d-flex justify-content-start"
          :span="8"
          v-for="(item, index) in teacherList"
          :key="'TL_' + index"
        >
          <div class="creation">
            <div class="front">
              <img :src="item.imageURL" alt="" width="350px" height="452px" />
            </div>
            <div class="back">
              <div
                class="teacherList-introduce p-20 d-flex justify-content-center flex-column"
              >
                <div
                  class="w-100"
                  v-for="(items, index) in item.info"
                  :key="index"
                >
                  <div
                    class="w-100 d-flex flex-row teacherList-introduce_content"
                  >
                    <el-row class="w-100">
                      <el-col :span="7">
                        <strong>{{ items.title }}</strong>
                      </el-col>
                      <el-col :span="4">
                        <img src="@/assets/images/icon/dashLine.png" alt="" />
                      </el-col>
                      <el-col :span="13" v-if="items.title == 'MAIL'">
                        <img
                          class="cur-pointer"
                          src="@/assets/images/icon/email.png"
                          alt="email link"
                        />
                      </el-col>
                      <el-col :span="13" v-else>
                        <p class="m-0">{{ items.value }}</p>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="teacherList-rightBar">
            <div class="py-20 px-10">
              <p class="m-0">{{ item.name }}</p>
              <p class="m-0">{{ item.jobTitle }}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teacherList: [
        {
          imageURL: require("@/assets/images/teacher/administrative/teacher1.jpg"),
          name: "曾煥荻",
          jobTitle: "",
          info: [
            {
              title: "職稱",
              value: "教授",
            },
            {
              title: "授課",
              value: "產品設計實務與管理",
            },
            {
              title: "聯繫我",
              value: "ext.2119&2110",
            },
            {
              title: "MAIL",
              value: "信箱",
            },
          ],
        },
        {
          imageURL: require("@/assets/images/teacher/administrative/teacher2.jpg"),
          name: "陳瑩娟",
          jobTitle: "",
        },
        {
          imageURL: require("@/assets/images/teacher/administrative/teacher3.jpg"),
          name: "呂沛錞",
          jobTitle: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#administrative {
  padding-left: 200px;
  .creation:hover {
    transform: rotateY(180deg);
  }
  .creation {
    width: 350px;
    height: 452px;
    transition: all 0.6s;
    transform-style: preserve-3d;
  }
  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
  }
  .back {
    z-index: 999;
    transform: rotateY(-180deg);
  }

  .teacherList {
    height: 452px;
    margin-bottom: 200px;
    &-introduce {
      width: 310px;
      height: 410px;
      border: 1px solid #c4c4c4;

      &_content {
        strong {
          font-weight: bold;
          font-size: 24px;
          line-height: 210%;
          letter-spacing: 0.25em;
          color: #2d2d2d;
        }
        img {
          transform: translateY(10px);
        }
        p {
          font-size: 24px;
          line-height: 210%;
          letter-spacing: 0.25em;
          color: #2d2d2d;
          word-wrap: break-word;
        }
      }
    }

    &-name {
      writing-mode: vertical-lr;
      height: calc(100% - 40px);
      padding: 20px 15px;
      background: #c4c4c4;
      font-size: 36px;
      color: #2d2d2d;
      p {
        letter-spacing: 2em;
      }
    }

    &-rightBar {
      height: 452px;
      background: #c4c4c4;
      writing-mode: vertical-lr;
      background: #c4c4c4;
      font-size: 36px;
      color: #2d2d2d;
      cursor: pointer;
      p {
        letter-spacing: 0.6em;
      }
    }
  }
}
</style>