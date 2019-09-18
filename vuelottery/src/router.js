import Vue from 'vue'
import Router from 'vue-router'
import shiyan from './views/shiyan.vue'
import Home from './views/z-home.vue'
import Cfoot from './components/C-foot.vue'

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
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})
