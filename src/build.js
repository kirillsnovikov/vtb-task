import Vue from 'vue'
import VerticalMenu from './components/menu/VerticalMenu.vue'
import General from './components/test/general.vue'
import ViewTabPane from './components/tabs/ViewTabPane.vue'
import PopupSubject from './components/popups/PopupSubject.vue'
import VTable from './components/table/VTable.vue'
import RadioButtonSearch from './components/control/RadioButtonSearch.vue'
import SrRegistration from './components/registration/SrRegistration.vue'
import './components/utils/filters'
import './assets/scss/main.scss'


const Components = {
  VerticalMenu,
  General,
  ViewTabPane,
  PopupSubject,
  VTable,
  RadioButtonSearch,
  SrRegistration
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
})

export default Components;
export * from  './lib/Helper.js'
