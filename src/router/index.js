import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import mainPage from '../pages/mainPage.vue'
import addStory from '../pages/addStory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  },
  {
    path: '/main',
    name: 'main',
    component: mainPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/addStory',
    name: 'addStory',
    component: addStory,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
