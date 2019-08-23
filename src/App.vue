<template>
  <div id="app">
    <vertical-menu :dataSetJson="ds"></vertical-menu>
    <test-component></test-component>
    <Popup />
    <SvgFilter />
  </div>
</template>

<script>
  import Popup from './components/popups/Popup.vue'
  import dataSet from './components/menudata.json'
  import SvgFilter from './components/utils/SvgFilter'

  export default {
    name: 'app',
    components: {
      Popup,
      SvgFilter
    },
    data() {
      return {
        ds: dataSet,
      }
    }
  }
</script>
