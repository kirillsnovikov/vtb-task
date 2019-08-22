<template>
  <div id="app">
    <vertical-menu :dataSetJson="ds"></vertical-menu>
    <test-component></test-component>
    <Popup />
  </div>
</template>

<script>
  import Popup from './components/popups/Popup.vue'
  import dataSet from './components/menudata.json'

  export default {
    name: 'app',
    components: {
      Popup
    },
    data() {
      return {
        ds: dataSet
      }
    }
  }
</script>
