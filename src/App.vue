<template>
  <div id="app">
    <section class="main-section">
      <div class="content"></div>
    </section>
    <vertical-menu :dataSetJson='ds'></vertical-menu>
    <Popup />
  </div>
</template>

<script>
  import Popup from './components/popups/Popup.vue'

  import dataSet from './components/menudata'

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
