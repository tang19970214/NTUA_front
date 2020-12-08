import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/latestNews',
    component: () => import('../views/latestNews.vue'),
    children: [{
        path: 'bulletin',
        name: 'bulletin',
        component: () => import('../views/latestNews/bulletin.vue'),
        meta: {
          mainPage: "latestNews"
        }
      },
      {
        path: 'contest',
        name: 'contest',
        component: () => import('../views/latestNews/contest.vue'),
        meta: {
          mainPage: "latestNews"
        }
      },
      {
        path: 'activity',
        name: 'activity',
        component: () => import('../views/latestNews/activity.vue'),
        meta: {
          mainPage: "latestNews"
        }
      }
    ]
  },
  {
    path: '/teachingResult',
    component: () => import('../views/teachingResult.vue'),
    children: [{
        path: 'award',
        name: 'award',
        component: () => import('../views/teachingResult/award.vue'),
        meta: {
          mainPage: "teachingResult"
        }
      },
      {
        path: 'publish',
        name: 'publish',
        component: () => import('../views/teachingResult/publish.vue'),
        meta: {
          mainPage: "teachingResult"
        }
      },
      {
        path: 'record',
        name: 'record',
        component: () => import('../views/teachingResult/record.vue'),
        meta: {
          mainPage: "teachingResult"
        }
      },
      {
        path: 'highlight',
        name: 'highlight',
        component: () => import('../views/teachingResult/highlight.vue'),
        meta: {
          mainPage: "teachingResult"
        }
      },
      {
        path: 'internshipResult',
        name: 'internshipResult',
        component: () => import('../views/teachingResult/internshipResult.vue'),
        meta: {
          mainPage: "teachingResult"
        }
      },
      {
        path: 'studioResult',
        name: 'studioResult',
        component: () => import('../views/teachingResult/studioResult.vue'),
        meta: {
          mainPage: "teachingResult"
        }
      }
    ]
  },
  {
    path: '/aboutUS',
    component: () => import('../views/aboutUS.vue'),
    children: [{
        path: 'history',
        name: 'history',
        component: () => import('../views/aboutUS/history.vue'),
        meta: {
          mainPage: "aboutUS"
        }
      },
      {
        path: 'description',
        name: 'description',
        component: () => import('../views/aboutUS/description.vue'),
        meta: {
          mainPage: "aboutUS"
        }
      },
      {
        path: 'crafts/:sort',
        name: 'crafts',
        component: () => import('../views/aboutUS/crafts.vue'),
        meta: {
          mainPage: "aboutUS"
        }
      },
      {
        path: 'equipment',
        name: 'equipment',
        component: () => import('../views/aboutUS/equipment.vue'),
        meta: {
          mainPage: "aboutUS"
        }
      }
    ]
  },
  {
    path: '/website',
    component: () => import('../views/website.vue'),
    children: [{
        path: 'seminar',
        name: 'seminar',
        component: () => import('../views/website/seminar.vue'),
        meta: {
          mainPage: "website"
        }
      },
      {
        path: 'workCamp',
        name: 'workCamp',
        component: () => import('../views/website/workCamp.vue'),
        meta: {
          mainPage: "website"
        }
      }
    ]
  },
  {
    path: '/departmentMember',
    component: () => import('../views/departmentMember.vue'),
    children: [{
        path: 'fullTime',
        name: 'fullTime',
        component: () => import('../views/departmentMember/fullTime.vue'),
        meta: {
          mainPage: "departmentMember"
        }
      },
      {
        path: 'partTime',
        name: 'partTime',
        component: () => import('../views/departmentMember/partTime.vue'),
        meta: {
          mainPage: "departmentMember"
        }
      },
      {
        path: 'administrative',
        name: 'administrative',
        component: () => import('../views/departmentMember/administrative.vue'),
        meta: {
          mainPage: "departmentMember"
        }
      }
    ]
  },
  {
    path: '/alumni',
    name: 'alumni',
    component: () => import('../views/alumni.vue'),
    meta: {
      mainPage: "alumni"
    }
  },
  {
    path: '/relatedLink',
    name: 'relatedLink',
    component: () => import('../views/relatedLink.vue'),
    meta: {
      mainPage: "relatedLink"
    }
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router