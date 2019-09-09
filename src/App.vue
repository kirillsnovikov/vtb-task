<template>
  <div id="app">
    <vertical-menu :dataSetJson="ds"></vertical-menu>
    <div id="_swecontent">
      <sr-registration></sr-registration>
      <view-tab-pane :tabs="ds.mainMenu.tasks.links"></view-tab-pane>
      <!-- <radio-button-search @on-change="ChangeSearch" :DataSet="searchValues" :active="defSearch"></radio-button-search> -->
      <v-table :tableData="tableData" :TableColumns="TableColumns"></v-table>
    </div>
    <!-- <test-component></test-component> -->
    <!-- <popup-subject></popup-subject> -->
    <!-- <Popup /> -->
    <SvgFilter />
  </div>
</template>

<script>
  // import Popup from './components/popups/Popup.vue'
  import dataSet from './components/menudata.json'
  // import popupData from '@/components/popup_subject'
  import {TableColumns, TableData} from './components/table_data'
  import {searchDataSet, defSearch} from './components/radio_button_search_data'
  import SvgFilter from './components/utils/SvgFilter'

  export default {
    name: 'app',
    components: {
      // Popup,
      SvgFilter
    },
    data() {
      return {
        ds: dataSet,
        // popup: popupData,
        tableData: TableData,
        TableColumns: TableColumns,
        searchValues: searchDataSet,
        defSearch: defSearch
      }
    },
    mounted() {
      // console.log(this.ds)
      // document.getElementById('_swecontent').style.width = document.body.offsetWidth - 64 + 'px'
      // console.log(document.getElementById('_swecontent').clientWidth)
    },
    methods: {
      ChangeSearch(key) {
        console.log(key)
      }
    },
  }
</script>
