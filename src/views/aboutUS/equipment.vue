<template>
  <div id="equipment">
    <div class="web d-none d-mb-block">
      <div class="d-flex justify-content-around studioGroup mb-60">
        <div class="p-50">
          <el-row>
            <el-col :span="6" class="p-20" v-for="(item, index) in equipment" :key="index">
              <div class="d-flex align-items-center flex-column">
                <el-image :src="item.coverPic" style="width: 280px; height: 280px" fit="cover" class="w-100"></el-image>
                <div class="w-100 d-flex justify-content-center">
                  <div class="px-20">
                    <div class="craftCard d-flex align-items-center justify-content-center flex-column text-center pt-45 pb-20 px-16">
                      <div class="mb-30">
                        <p class="m-0">{{ item.title }}</p>
                      </div>
                      <div class="pt-10 craftCard-borTop">
                        <a class="text-decoration-none cur-pointer" @click="showIntroduce(item)">
                          VIEW MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb-none">
      <div class="equipmentCard w-100">
        <div class="py-30 d-flex justify-content-center flex-column">
          <div class="d-flex align-items-center justify-content-center flex-column" v-for="(item, index1) in equipment" :key="index1">
            <img :src="item.coverPic" alt="" width="200px" />
            <div class="equipmentCard__information px-30 pt-40 pb-10 d-flex align-items-center justify-content-center flex-column">
              <strong>{{ item.title }}</strong>
              <a class="text-decoration-none cur-pointer px-20 pt-8 mt-15" @click="showIntroduce(item)">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 20,
        key: undefined,
      },
      equipment: [],
    };
  },
  methods: {
    showIntroduce(data) {
      console.log(data);
      this.$router.push({
        name: "equipmentInfo",
        params: { id: data.id },
      });
    },
    async getList() {
      await this.$api.classrooms(this.listQuery).then((res) => {
        this.equipment = res.data.data;
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
#equipment {
  .web {
    margin-left: 0 !important;
    padding-top: 140px !important;
    .studioGroup {
      width: 100%;
      background: #2d2d2d;
      .craftCard {
        width: 17vw;
        border: 2px solid #596164;
        box-sizing: border-box;
        transform: translateY(-2rem);
        p {
          font-weight: bold;
          font-size: 16px;
          color: white;
          overflow: hidden;
          -webkit-line-clamp: 1;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        a {
          font-size: 18px;
          line-height: 21px;
          color: #ceb87f;
        }
        &-borTop {
          border-top: 1px solid #ceb87f;
        }
      }
    }
  }

  .phone {
    .equipmentCard {
      background: #2d2d2d;
      &__information {
        transform: translateY(-1.8rem);
        border: 2px solid #596164;
        font-size: 14px;
        line-height: 16px;
        strong {
          color: #ffffff;
        }
        a {
          color: #ceb87f;
          border-top: 1px solid #ceb87f;
        }
      }
    }
  }
}
</style>