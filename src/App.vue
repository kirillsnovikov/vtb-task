<template>
  <div id="app">
    <vertical-menu :dataSetJson="ds" ref="vm"></vertical-menu>
    <div id="_swecontent">
      <sr-registration :popupData="popupData"></sr-registration>
      <div class="spinner-vtb">
        <svg id="spinner-vtb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 200 200"/>
        <!-- <svg id="spinner-vtb" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#1851c7" />
              <stop offset="100%" stop-color="#00f0ff" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="42" stroke="url(#gradient)" stroke-width="16" fill="none" transform='rotate(90 50 50)' />
        </svg> -->
      </div>
      <view-tab-pane :tabs="ds.mainMenu.tasks.links"></view-tab-pane>
      <!-- <radio-button-search @on-change="ChangeSearch" :DataSet="searchValues" :active="defSearch"></radio-button-search> -->
      <div style="width: 1000px">
        <v-table :tableData="tableData" :TableColumns="TableColumns" @table-row-select="tableRowSelect" @table-cell-click="tableCellClick" ref="table"></v-table>
      </div>
      <CySelect />
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
import { calendar } from './lib/Calendar'
import { spinner } from './lib/spinnerVtb'
import { TableColumns, TableData } from './components/table_data'
import { searchDataSet, defSearch } from './components/radio_button_search_data'
import { ThematicJSON } from './components/sr_registration_data.js'
import SvgFilter from './components/utils/SvgFilter'
import CySelect from './components/utils/CySelect'
import { ShowLog } from './lib/Helper';

export default {
  name: 'app',
  components: {
    // Popup,
    SvgFilter,
    CySelect,
  },
  data() {
    return {
      ds: dataSet,
      tableData: TableData,
      TableColumns: TableColumns,
      searchValues: searchDataSet,
      defSearch: defSearch,
      popupData: ThematicJSON,
    }
  },
  created() {
    this.$eventHub.$on('on-start-thematic', (parent, child) => {})
  },
  beforeDestroy() {
    this.$eventHub.$off('on-start-thematic')
  },
  mounted() {
    spinner.getParticles()
  },
  methods: {
    sleep(delay) {
      var start = new Date().getTime();
      while (new Date().getTime() < start + delay);
      return true
    },
    tableRowSelect(rowId) {
      this.sleep(500);
      this.$refs.table.isActiveRow = rowId
    },
    tableCellClick(columnData) {},
    ChangeSearch(key) {},
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