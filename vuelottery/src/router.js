import Vue from 'vue'
import Router from 'vue-router'
import shiyan from './views/shiyan.vue'
import Home from './views/z-home.vue'
import Cfoot from './components/C-foot.vue'
import touzhu from './views/j-touzhu.vue'
import alert from '@/components/alert.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Cfoot',
      component: Cfoot
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/touzhu',
      name: 'touzhu',
      component: touzhu
    },
    {
      path: '/alert',
      name: 'alert',
      component: alert
    },
  ]
})
