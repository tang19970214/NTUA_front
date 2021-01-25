import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      goTop: true
    }
  },
  // 最新消息
  {
    path: '/latestNews',
    component: () => import('../views/latestNews.vue'),
    children: [{
        path: 'bulletin',
        name: 'bulletin',
        component: () => import('../views/latestNews/bulletin.vue'),
        meta: {
          mainPage: "latestNews",
          subName: "bulletin"
        }
      },
      {
        path: 'contest',
        name: 'contest',
        component: () => import('../views/latestNews/contest.vue'),
        meta: {
          mainPage: "latestNews",
          subName: "contest"
        }
      },
      {
        path: 'activity',
        name: 'activity',
        component: () => import('../views/latestNews/activity.vue'),
        meta: {
          mainPage: "latestNews",
          subName: "activity"
        }
      }
    ]
  },
  // 系所簡介及課程
  {
    path: '/aboutUS',
    component: () => import('../views/aboutUS.vue'),
    children: [{
        path: 'history',
        name: 'history',
        component: () => import('../views/aboutUS/history.vue'),
        meta: {
          mainPage: "aboutUS",
          subName: "history"
        }
      },
      {
        path: 'description',
        name: 'description',
        component: () => import('../views/aboutUS/description.vue'),
        meta: {
          mainPage: "aboutUS",
          subName: "description"
        }
      },
      {
        path: 'crafts/:sort',
        name: 'crafts',
        component: () => import('../views/aboutUS/crafts.vue'),
        meta: {
          mainPage: "aboutUS",
          subName: "crafts"
        }
      },
      {
        path: 'equipment',
        name: 'equipment',
        component: () => import('../views/aboutUS/equipment.vue'),
        meta: {
          mainPage: "aboutUS",
          subName: "equipment"
        }
      }
    ]
  },
  // 系所規定與申請表
  {
    path: '/provision',
    component: () => import('../views/provision.vue'),
    children: [{
        path: 'bachelor',
        name: 'bachelor',
        component: () => import('../views/provision/bachelor.vue'),
        meta: {
          mainPage: "provision",
          subName: "bachelor"
        }
      },
      {
        path: 'twoyears',
        name: 'twoyears',
        component: () => import('../views/provision/twoyears.vue'),
        meta: {
          mainPage: "provision",
          subName: "twoyears"
        }
      },
      {
        path: 'master',
        name: 'master',
        component: () => import('../views/provision/master.vue'),
        meta: {
          mainPage: "provision",
          subName: "master"
        }
      }
    ]
  },
  // 教學成果
  {
    path: '/teachingResult',
    component: () => import('../views/teachingResult.vue'),
    children: [{
        path: 'award',
        name: 'award',
        component: () => import('../views/teachingResult/award.vue'),
        meta: {
          mainPage: "teachingResult",
          subName: "award"
        }
      },
      {
        path: 'publish',
        name: 'publish',
        component: () => import('../views/teachingResult/publish.vue'),
        meta: {
          mainPage: "teachingResult",
          subName: "publish"
        }
      },
      {
        path: 'record',
        name: 'record',
        component: () => import('../views/teachingResult/record.vue'),
        meta: {
          mainPage: "teachingResult",
          subName: "record"
        }
      },
      {
        path: 'highlight',
        name: 'highlight',
        component: () => import('../views/teachingResult/highlight.vue'),
        meta: {
          mainPage: "teachingResult",
          subName: "highlight"
        }
      },
      {
        path: 'internshipResult',
        name: 'internshipResult',
        component: () => import('../views/teachingResult/internshipResult.vue'),
        meta: {
          mainPage: "teachingResult",
          subName: "internshipResult"
        }
      },
      {
        path: 'studioResult',
        name: 'studioResult',
        component: () => import('../views/teachingResult/studioResult.vue'),
        meta: {
          mainPage: "teachingResult",
          subName: "studioResult"
        }
      }
    ]
  },
  // 研討會、工作營
  {
    path: '/website',
    component: () => import('../views/website.vue'),
    children: [{
        path: 'seminar',
        name: 'seminar',
        component: () => import('../views/website/seminar.vue'),
        meta: {
          mainPage: "website",
          subName: "seminar"
        }
      },
      {
        path: 'workCamp',
        name: 'workCamp',
        component: () => import('../views/website/workCamp.vue'),
        meta: {
          mainPage: "website",
          subName: "workCamp"
        }
      }
    ]
  },
  // 系所成員
  {
    path: '/departmentMember',
    component: () => import('../views/departmentMember.vue'),
    children: [{
        path: 'fullTime',
        name: 'fullTime',
        component: () => import('../views/departmentMember/fullTime.vue'),
        meta: {
          mainPage: "departmentMember",
          subName: "fullTime"
        }
      },
      {
        path: 'partTime',
        name: 'partTime',
        component: () => import('../views/departmentMember/partTime.vue'),
        meta: {
          mainPage: "departmentMember",
          subName: "partTime"
        }
      },
      {
        path: 'administrative',
        name: 'administrative',
        component: () => import('../views/departmentMember/administrative.vue'),
        meta: {
          mainPage: "departmentMember",
          subName: "administrative"
        }
      }
    ]
  },
  // 系友專區
  {
    path: '/alumni',
    name: 'alumni',
    component: () => import('../views/alumni.vue'),
    meta: {
      mainPage: "alumni",
      subName: "alumni"
    }
  },
  // 相關連結
  {
    path: '/relatedLink',
    name: 'relatedLink',
    component: () => import('../views/relatedLink.vue'),
    meta: {
      mainPage: "relatedLink",
      subName: "relatedLink"
    }
  },

  {
    path: '/bulletinInfo/:id',
    name: 'bulletinInfo',
    component: () => import('../views/latestNews/bulletin/bulletinInfo.vue'),
    meta: {
      mainPage: "latestNews",
      subName: "bulletin"
    }
  },
  {
    path: '/contestInfo/:id',
    name: 'contestInfo',
    component: () => import('../views/latestNews/contest/contestInfo.vue'),
    meta: {
      mainPage: "latestNews",
      subName: "contest"
    }
  },
  {
    path: '/activityInfo/:id',
    name: 'activityInfo',
    component: () => import('../views/latestNews/activity/activityInfo.vue'),
    meta: {
      mainPage: "latestNews",
      subName: "activity"
    }
  },
  {
    path: '/bachelorInfo/:id',
    name: 'bachelorInfo',
    component: () => import('../views/provision/bachelor/bachelorInfo.vue'),
    meta: {
      mainPage: "provision",
      subName: "bachelor"
    }
  },
  {
    path: '/twoyearsInfo/:id',
    name: 'twoyearsInfo',
    component: () => import('../views/provision/twoyears/twoyearsInfo.vue'),
    meta: {
      mainPage: "provision",
      subName: "twoyears"
    }
  },
  {
    path: '/masterInfo/:id',
    name: 'masterInfo',
    component: () => import('../views/provision/master/masterInfo.vue'),
    meta: {
      mainPage: "provision",
      subName: "master"
    }
  },

  {
    path: '/equipmentInfo/:id',
    name: 'equipmentInfo',
    component: () => import('../views/aboutUS/equipment/equipmentInfo.vue'),
    meta: {
      mainPage: "aboutUS",
      subName: "equipment"
    }
  },
  {
    path: '/alumniInfo/:id',
    name: 'alumniInfo',
    component: () => import('../views/alumni/alumniInfo.vue'),
    meta: {
      mainPage: "alumni",
      subName: "alumni"
    }
  },
  {
    path: '/awardInfo/:id',
    name: 'awardInfo',
    component: () => import('../views/teachingResult/award/awardInfo.vue'),
    meta: {
      mainPage: "teachingResult",
      subName: "award"
    }
  },
  {
    path: '/publishInfo/:author',
    name: 'publishInfo',
    component: () => import('../views/teachingResult/publish/publishInfo.vue'),
    meta: {
      mainPage: "teachingResult",
      subName: "publish"
    }
  },
  {
    path: '/recordInfo/:id',
    name: 'recordInfo',
    component: () => import('../views/teachingResult/record/recordInfo.vue'),
    meta: {
      mainPage: "teachingResult",
      subName: "record"
    }
  },
  {
    path: '/highlightInfo/:id',
    name: 'highlightInfo',
    component: () => import('../views/teachingResult/highlight/highlightInfo.vue'),
    meta: {
      mainPage: "teachingResult",
      subName: "highlight"
    }
  },
  // {
  //   path: '/studioResultInfo/:craft',
  //   name: 'studioResultInfo',
  //   component: () => import('../views/teachingResult/studioResult/studioResultInfo.vue'),
  //   meta: {
  //     mainPage: "teachingResult",
  //     subName: "studioResult"
  //   }
  // },
  {
    path: '/internshipResultInfo/:id',
    name: 'internshipResultInfo',
    component: () => import('../views/teachingResult/internshipResult/internshipResultInfo.vue'),
    meta: {
      mainPage: "teachingResult",
      subName: "internshipResult"
    }
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.goTop || document.body.clientWidth <= 1280) {
      return {
        x: 0,
        y: 0
      }
    } else {
      return {
        x: 0,
        y: 450
      }
    }
  }
})

export default router