<template>
  <div id="app">
    <vertical-menu :dataSetJson="ds" ref="vm"></vertical-menu>
    <div id="_swecontent">
      <sr-registration></sr-registration>
      <view-tab-pane :tabs="ds.mainMenu.tasks.links"></view-tab-pane>
      <!-- <radio-button-search @on-change="ChangeSearch" :DataSet="searchValues" :active="defSearch"></radio-button-search> -->
      <div style="width: 1000px">
        <v-table :tableData="tableData" :TableColumns="TableColumns" @table-row-select="tableRowSelect" @table-cell-click="tableCellClick" ref="table"></v-table>
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
import { calendar } from './lib/Calendar'
import { TableColumns, TableData } from './components/table_data'
import { searchDataSet, defSearch } from './components/radio_button_search_data'
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
      defSearch: defSearch,
    }
  },
  mounted() {
    // // calendar.currentDate = '1999-11-20T00:00:00.000Z'
    // console.log(calendar.$currentDay, calendar.$currentMonth, calendar.$currentYear)
    // console.log(calendar.currentMonthDays)
    // calendar.increaseMonth()
    // console.log(calendar.$currentDay, calendar.$currentMonth, calendar.$currentYear)
    // console.log(calendar.currentMonthDays)
    // calendar.increaseMonth()
    // console.log(calendar.$currentDay, calendar.$currentMonth, calendar.$currentYear)
    // console.log(calendar.currentMonthDays)
    // calendar.increaseMonth()
    // console.log(calendar.$currentDay, calendar.$currentMonth, calendar.$currentYear)
    // console.log(calendar.currentMonthDays)
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
      console.log(this.$refs.table.isActiveRow)
    },
    tableCellClick(columnData) {
      console.log('table-cell-click')
      console.log(columnData.control)
    },
    ChangeSearch(key) {
      console.log(key)
    },
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