import Vue from 'vue'
import App from './App.vue'
import lzUI from '../packages/index'

import './assets/fonts/font.scss'
Vue.config.productionTip = false
Vue.use(lzUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
