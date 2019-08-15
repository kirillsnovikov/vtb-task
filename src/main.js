import Vue from 'vue'
import App from './App.vue'
import VerticalMenu from './components/menu/VerticalMenu.vue'
import './components/utils/filters'

import './assets/scss/main.scss'

Vue.config.productionTip = false

Vue.component('vertical-menu', VerticalMenu)
// Vue.component('vertical-menu', require('./components/menu/VerticalMenu.vue').default)

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
