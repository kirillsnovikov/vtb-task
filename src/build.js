import Vue from 'vue'
import VerticalMenu from './components/menu/VerticalMenu.vue'
import General from './components/test/general.vue'
import ViewTabPane from './components/tabs/ViewTabPane.vue'
import PopupSubject from './components/popups/PopupSubject.vue'
import VTable from './components/table/VTable.vue'
import RadioButtonSearch from './components/control/RadioButtonSearch.vue'
import SrRegistration from './components/registration/SRRegistration.vue'
import CySelect from './components/utils/CySelect.vue'
import Popup from './components/popups/Popup.vue'
import './components/utils/filters'
import './assets/scss/main.scss'


const Components = {
  VerticalMenu,
  General,
  ViewTabPane,
  PopupSubject,
  VTable,
  RadioButtonSearch,
  SrRegistration,
  CySelect,
  Popup
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
})

Vue.prototype.$eventHub = new Vue();

export default Components;
export * from  './lib/Helper.js'
