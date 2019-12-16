import Vue from 'vue'
import App from './App.vue'

// icon
import './assets/icon/icon-font/iconfont.css'

//路由
import router from './router'

import axios from 'axios'
import vueaxios from 'vue-axios'
Vue.config.productionTip = false

Vue.use(vueaxios, axios)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
