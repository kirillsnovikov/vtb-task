import Vue from 'vue'
import App from './App.vue'

import './assets/scss/main.scss'

Vue.config.productionTip = false

Vue.Component('vertical-menu', require('./components/menu/VerticalMenu.vue'))

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
