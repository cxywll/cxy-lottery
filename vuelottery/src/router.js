import Vue from 'vue'
import Router from 'vue-router'
import shiyan from './views/shiyan.vue'
import Stype from './views/S-type.vue'
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
    // 彩票类型选择
    {
      path:'/Stype',
      name: 'Stype',
      component: Stype
    }
  ]
})
