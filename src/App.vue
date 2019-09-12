<template>
  <div id="app">
    <vertical-menu :dataSetJson="ds"></vertical-menu>
    <div id="_swecontent">
      <sr-registration></sr-registration>
      <view-tab-pane :tabs="ds.mainMenu.tasks.links"></view-tab-pane>
      <!-- <radio-button-search @on-change="ChangeSearch" :DataSet="searchValues" :active="defSearch"></radio-button-search> -->
      <div style="width: 1000px">
        <v-table :tableData="tableData" :TableColumns="TableColumns" v-on:table-row-select="OnRowChange" v-on:table-cell-click="OnCellClick"></v-table>
      </div>
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
import { ShowLog } from './lib/Helper';

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
      sleep(delay) {
          var start = new Date().getTime();
          while (new Date().getTime() < start + delay);
      },
      ChangeSearch(key) {
        console.log(key)
      },
      OnRowChange(rowId){
          ShowLog('App.vue', 'OnRowChange', rowId)
          this.sleep(2000);
      },
      OnCellClick(columnData){
          ShowLog('App.vue', 'OnCellClick', columnData)
          this.sleep(2000);
      }
    },
  }
</script>

<style lang="scss">
#_swecontent {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 64px;
  box-sizing: border-box;
}
</style>
