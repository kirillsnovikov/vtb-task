<template>
  <div id="app">
    <vertical-menu :dataSetJson="ds"></vertical-menu>
    <div id="_swecontent">
      <sr-registration></sr-registration>
      <view-tab-pane :tabs="ds.mainMenu.tasks.links"></view-tab-pane>
      <div style="width:300px;background-color:red;overflow-y:hidden">
        <v-table :rowData="tableData" :columns="columns"></v-table>
      </div>
      <radio-button-search @on-change="ChangeSearch" :DataSet="searchValues" :active="defSearch"></radio-button-search>
    </div>
    <!-- <test-component></test-component> -->
    <popup-subject></popup-subject>
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
        columns: TableColumns,
        searchValues: searchDataSet,
        defSearch: defSearch
      }
    },
    mounted() {
      // console.log(this.ds)
      document.getElementById('_swecontent').style.width = document.body.offsetWidth - 64 + 'px'
    },
    methods: {
      ChangeSearch(key) {
        console.log(key)
      }
    },
  }
</script>
