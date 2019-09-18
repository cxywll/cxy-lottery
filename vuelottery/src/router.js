import Vue from 'vue'
import Router from 'vue-router'
import shiyan from './views/shiyan.vue'
import Home from './views/z-home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'shiyan',
      component: shiyan
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})
