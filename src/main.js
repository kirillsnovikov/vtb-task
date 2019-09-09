import Vue from 'vue'
import App from './App.vue'
import VerticalMenu from './components/menu/VerticalMenu.vue'
import ViewTabPane from './components/tabs/ViewTabPane.vue'
import PopupSubject from './components/popups/PopupSubject.vue'
// import testComponent from './components/testComponent.vue'
import VTable from './components/table/VTable'
import RadioButtonSearch from './components/control/RadioButtonSearch.vue'
import SrRegistration from './components/registration/SrRegistration.vue'

import './components/utils/filters'

import './assets/scss/main.scss'

Vue.config.productionTip = false

Vue.component('vertical-menu', VerticalMenu)
Vue.component('view-tab-pane', ViewTabPane)
Vue.component('popup-subject', PopupSubject)
Vue.component('v-table', VTable)
Vue.component('radio-button-search', RadioButtonSearch)
Vue.component('sr-registration', SrRegistration)
// Vue.component('test-component', testComponent)
// Vue.component('vertical-menu', require('./components/menu/VerticalMenu.vue').default)

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
