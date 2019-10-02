import Vue from 'vue'
import App from './App.vue'
import VerticalMenu from './components/menu/VerticalMenu.vue'
import ViewTabPane from './components/tabs/ViewTabPane.vue'
import Popup from './components/popups/Popup.vue'
import PopupSubject from './components/popups/PopupSubject.vue'
import PopupSubjectFinish from './components/popups/PopupSubjectFinish.vue'
import VTable from './components/table/VTable'
import RadioButtonSearch from './components/control/RadioButtonSearch.vue'
import SRRegistration from './components/registration/SRRegistration.vue'

import './components/utils/filters'

import './assets/scss/main.scss'

Vue.config.productionTip = false

Vue.component('vertical-menu', VerticalMenu)
Vue.component('view-tab-pane', ViewTabPane)
Vue.component('popup', Popup)
Vue.component('popup-subject', PopupSubject)
Vue.component('popup-subject-finish', PopupSubjectFinish)
Vue.component('v-table', VTable)
Vue.component('radio-button-search', RadioButtonSearch)
Vue.component('sr-registration', SRRegistration)
// Vue.component('test-component', testComponent)
// Vue.component('vertical-menu', require('./components/menu/VerticalMenu.vue').default)

// export const eventBus = new Vue()
Vue.prototype.$eventHub = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
