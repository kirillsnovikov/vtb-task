<template>
  <div id="app">
    <vertical-menu :dataSetJson="ds"></vertical-menu>
    <div id="_swecontent">
      <view-tab-pane :dataSetJson="ds"></view-tab-pane>
    </div>
    <!-- <test-component></test-component> -->
    <popup-subject :data="popup"></popup-subject>
    <Popup />
    <SvgFilter />
  </div>
</template>

<script>
  import Popup from './components/popups/Popup.vue'
  import dataSet from './components/menudata.json'
  import popupData from '@/components/popup_subject'
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
        popup: popupData
      }
    }
  }
</script>
