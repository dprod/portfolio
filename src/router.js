import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/components/views/Index.vue'
import History from '@/components/views/History.vue'
import Projects from '@/components/views/Projects.vue'
import Jussi from '@/components/views/Jussi.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },  
  {
    path: '/jussi',
    name: 'Jussi',
    component: Jussi,
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: '404',
  //   component: NotFound,
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log('—————————————————————')
//   console.log('router.beforeEach')
//   console.log(`from : ${from.path}`)
//   console.log(`to   : ${to.path}`)
//   next()
// })

// router.afterEach((to, from) => {
//   console.log('—————————————————————')
//   console.log('router.afterEach')
//   console.log(`from : ${from.path}`)
//   console.log(`to   : ${to.path}`)
// })

export default router