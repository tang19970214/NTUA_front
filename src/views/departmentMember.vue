<template>
  <div class="departmentMember">
    <div class="web d-none d-mb-block">
      <p class="m-0 Txt-title">Department member</p>
      <div class="mt-70 newsCard">
        <div class="newsCard-sortText">
          <router-link class="mr-35 mb-15 d-flex align-items-center justify-content-end flex-row text-decoration-none" :class="{ active: $route.name == item.pathURL }" :to="{ name: item.pathURL }" v-for="(item, index) in departmentMemberSort" :key="'NS__' + index">
            <p class="m-0">{{ item.pathName }}</p>
            <i class="el-icon-minus"></i>
            <p class="m-0">0{{ index + 1 }}</p>
          </router-link>
        </div>

        <LoadShowIMG />

        <div class="w-100 newsCard-title">
          <div class="p-60">
            <div class="w-100 d-flex flex-row">
              <div class="w-100">
                <p class="m-0">{{ getPathName(departmentMemberSort) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="phone d-block d-mb-none pt-70">
      <PhoneTitle :title="getPathName(departmentMemberSort)" :filterDate="false" />
    </div>

    <div class="w-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LoadShowIMG from "@/components/LoadShowIMG.vue";
import PhoneTitle from "@/components/PhoneTitle.vue";

export default {
  components: {
    LoadShowIMG,
    PhoneTitle,
  },
  data() {
    return {
      departmentMemberSort: [
        {
          pathURL: "fullTime",
          pathName: "專任教師",
        },
        {
          pathURL: "partTime",
          pathName: "兼任教師",
        },
        {
          pathURL: "administrative",
          pathName: "行政人員",
        },
      ],
    };
  },
  computed: {
    getPathName() {
      return (data) => {
        let pName = "";
        data.forEach((item) => {
          if (this.$route.name == item.pathURL) {
            pName = item.pathName;
          }
        });
        return pName;
      };
    },
  },
};
</script>

<style lang="scss">
.departmentMember {
  .web {
    padding-top: 420px;
    margin-left: 120px;

    .Txt-title {
      font-size: 48px;
      line-height: 56px;
      color: #596164;
    }

    .newsCard {
      background-color: white;
      &-sortText {
        position: absolute;
        right: 0;
        z-index: 10;
        margin-top: 45px;
        a {
          font-weight: 400;
          font-size: 24px;
          line-height: 210%;
          letter-spacing: 0.25em;
          color: #52505a;
          cursor: pointer;
          &:hover {
            color: #563f05;
            font-weight: bold;
          }
        }
      }
      .active {
        color: #563f05;
        font-weight: bold;
      }
      &-title {
        p {
          width: 130px;
          font-size: 64px;
          line-height: 75px;
          color: #ceb87f;
        }
        &_chooseYear {
          select {
            width: 150px;
            height: 35px;
            border: 0;
            border-radius: 15px;
            background: #ceb87f;
            text-align-last: center;
            font-size: 18px;
            line-height: 21px;
            color: #52505a;
            cursor: pointer;
          }
        }
      }
      &-contentCard {
        background: #2d2d2d;
        padding: 130px 220px 50px 60px;
        &_title {
          width: 100%;
          padding: 40px 30px;
          background: #c4c4c4;
        }
      }
    }
  }

  .phone {
    background: white;
  }
}
</style>