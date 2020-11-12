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
        component: () => import('../views/latestNews/bulletin.vue')
      },
      {
        path: 'contest',
        name: 'contest',
        component: () => import('../views/latestNews/contest.vue')
      },
      {
        path: 'activity',
        name: 'activity',
        component: () => import('../views/latestNews/activity.vue')
      }
    ]
  },
  {
    path: '/teachingResult',
    component: () => import('../views/teachingResult.vue'),
    children: [{
        path: 'award',
        name: 'award',
        component: () => import('../views/teachingResult/award.vue')
      },
      {
        path: 'publish',
        name: 'publish',
        component: () => import('../views/teachingResult/publish.vue')
      },
      {
        path: 'record',
        name: 'record',
        component: () => import('../views/teachingResult/record.vue')
      },
      {
        path: 'highlight',
        name: 'highlight',
        component: () => import('../views/teachingResult/highlight.vue')
      },
      {
        path: 'internshipResult',
        name: 'internshipResult',
        component: () => import('../views/teachingResult/internshipResult.vue')
      },
      {
        path: 'studioResult',
        name: 'studioResult',
        component: () => import('../views/teachingResult/studioResult.vue')
      }
    ]
  },
  {
    path: '/aboutUS',
    component: () => import('../views/aboutUS.vue'),
    children: [{
        path: 'history',
        name: 'history',
        component: () => import('../views/aboutUS/history.vue')
      },
      {
        path: 'description',
        name: 'description',
        component: () => import('../views/aboutUS/description.vue')
      },
      {
        path: 'crafts',
        name: 'crafts',
        component: () => import('../views/aboutUS/crafts.vue')
      },
      {
        path: 'equipment',
        name: 'equipment',
        component: () => import('../views/aboutUS/equipment.vue')
      }
    ]
  },
  {
    path: '/website',
    component: () => import('../views/website.vue'),
    children: [{
        path: 'seminar',
        name: 'seminar',
        component: () => import('../views/website/seminar.vue')
      },
      {
        path: 'workCamp',
        name: 'workCamp',
        component: () => import('../views/website/workCamp.vue')
      }
    ]
  },
  {
    path: '/departmentMember',
    component: () => import('../views/departmentMember.vue'),
    children: [{
        path: 'fullTime',
        name: 'fullTime',
        component: () => import('../views/departmentMember/fullTime.vue')
      },
      {
        path: 'partTime',
        name: 'partTime',
        component: () => import('../views/departmentMember/partTime.vue')
      },
      {
        path: 'administrative',
        name: 'administrative',
        component: () => import('../views/departmentMember/administrative.vue')
      }
    ]
  },
  {
    path: '/alumni',
    name: 'alumni',
    component: () => import('../views/alumni.vue'),
  },
  {
    path: '/relatedLink',
    name: 'relatedLink',
    component: () => import('../views/relatedLink.vue'),
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