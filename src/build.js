import Vue from 'vue'
import VerticalMenu from './components/menu/VerticalMenu.vue'
import General from './components/test/general.vue'
import './components/utils/filters'
import './assets/scss/main.scss'


const Components = {
  VerticalMenu,
  General
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
})

export default Components;
