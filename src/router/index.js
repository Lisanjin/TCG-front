import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/battle',
      name: 'battle',
      component: () => import('@/components/battle')
    }
  ]
})
