import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import icon from '../icon/iconfont.css'
import 'lib-flexible/flexible.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Animate from 'animate.css'

Vue.use(ElementUI);
Vue.use(Animate);
Vue.use(VueAxios,Axios)
Vue.use(router)

Vue.config.productionTip = false

new Vue({
  // icon,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
