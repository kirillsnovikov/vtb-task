<template>
  <div id="app">
    <vertical-menu :dataSetJson="ds" ref="vm"></vertical-menu>
    <div id="_swecontent">
      <sr-registration :popupData="popupData"></sr-registration>
      <!-- <div class="spinners"> -->
      <div class="spinner-vtb"></div>
      <!-- <div class="spinner-vtb"></div> -->
      <!-- <div class="spinner-vtb"></div> -->
      <!-- <div class="spinner-vtb"></div> -->
      <!-- </div> -->
      <!-- <icon-base></icon-base> -->
      <div>
        <svg class="icon" viewBox="0 0 20 20" v-for="icon in icons">
          <use :xlink:href="`#${icon}`"></use>
        </svg>
      </div>
      <view-tab-pane :tabs="ds.mainMenu.tasks.links"></view-tab-pane>
      <!-- <radio-button-search @on-change="ChangeSearch" :DataSet="searchValues" :active="defSearch"></radio-button-search> -->
      <div style="width: 1000px">
        <v-table :tableData="tableData" :TableColumns="TableColumns" @table-row-select="tableRowSelect" @table-cell-click="tableCellClick" ref="table"></v-table>
      </div>
      <CySelect />
    </div>
    <SvgIcons />
    <!-- <test-component></test-component> -->
    <!-- <popup-subject></popup-subject> -->
    <!-- <Popup /> -->
    <!-- <SvgFilter /> -->
  </div>
</template>
<script>
import SvgIcons from '@/components/utils/SvgIcons.vue'
// import Popup from './components/popups/Popup.vue'
import dataSet from './components/menudata.json'
// import popupData from '@/components/popup_subject'
import { calendar } from './lib/Calendar'
import { spinner } from './lib/spinnerVtb'
import { TableColumns, TableData } from './components/table_data'
import { searchDataSet, defSearch } from './components/radio_button_search_data'
import { ThematicJSON } from './components/sr_registration_data.js'
// import SvgFilter from './components/utils/SvgFilter'
import CySelect from './components/utils/CySelect'
import { ShowLog } from './lib/Helper';

const icons = ["1", "active", "arroa-up", "arrow-down", "arrow-left", "avatar-1", "block", "chf", "close_icon", "close_icon_2", "close-icon", "delete-all-icon", "eur", "gbr", "hamburger-butt", "idea-icon", "rub", "search-icon", "usd", "VTB_Logo_2018", "vtb-logo-3"]

export default {
  name: 'app',
  components: {
    // Popup,
    // SvgFilter,
    CySelect,
    SvgIcons
  },
  data() {
    return {
      ds: dataSet,
      tableData: TableData,
      TableColumns: TableColumns,
      searchValues: searchDataSet,
      defSearch: defSearch,
      popupData: ThematicJSON,
      icons: icons,
    }
  },
  created() {
    this.$eventHub.$on('on-start-thematic', (parent, child) => {})
  },
  beforeDestroy() {
    this.$eventHub.$off('on-start-thematic')
  },
  mounted() {
    spinner.create()
    // spinner.getParticles()
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
#app {
  height: 100vh;
  background-image: linear-gradient(90deg, #0a2896, #1750c6 97%, #1851c7);
}

#_swecontent {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 64px;
  box-sizing: border-box;
}

.icon {
  // height: 0;
  width: 20px;
}
</style>