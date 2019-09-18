import Vue from 'vue'
import Router from 'vue-router'
import Chead from './views/shiyan.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Chead',
      component: Chead
    },
  ]
})
