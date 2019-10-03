<template>
  <div class="table" :class="{'scroll-x': isScroll}">
    <div class="table-header" :style="{width: tableWidth + 'px'}">
      <div class="table-header__item" v-for="(column, i) in TableColumns" :key="i" :style="{flex: '0 0 ' + column.Width + 'px', margin: '0 ' + (config.GridPadding/2) + 'px', padding: config.ColPadding + 'px'}">
        <div class="table-header__item__value" :class="column.ColAlign">
          {{column.Display | capitalize}}
        </div>
      </div>
    </div>
    <div class="table-body vtb-collapse" v-if="isLoadedData">
      <div class="table-body__row">
        <div class="table-body__row__item" v-for="(column, i) in TableColumns" :style="{flex: '0 0 ' + column.Width + 'px', margin: '0 ' + (config.GridPadding/2) + 'px', padding: config.ColPadding + 'px'}">
          <div class="vtb-dot-loader">
            <div class="vtb-dot" v-for="i in 3"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="table-body vtb-collapse" v-else>
      <div class="table-body__row" v-for="(tableRow, k) in tableData" :key="k" :style="{width: tableWidth + 'px'}" :class="{ active: isActiveRow === k}">
        <div class="table-body__row__item" @click="tableClick(k, column)" v-for="(column, i) in TableColumns" :key="i" :class="column.HtmlClass" :style="{flex: '0 0 ' + column.Width + 'px', margin: '0 ' + (config.GridPadding/2) + 'px', padding: config.ColPadding + 'px'}">
          <component :is="column.Component" :data="tableRow[column.Name]" :icons="column.IconMap" :class="column.DataAlign || column.ColAlign">
          </component>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { TableConfig, ColumnData, ShowError, ShowLog } from '../../lib/Helper.js'
// import {CompState, tblClass} from '../../lib/CompState.js'
import VDefCell from './VDefCell.vue';
import VIconCell from './VIconCell.vue';
import VUrlCell from './VUrlCell.vue';
/*
Public method:
  configurateTable - Пересчет параметров таблицы

Event:
  table-row-select(rowId) - Изменение активной строки
  table-cell-click(columnData) - Клик по ячейке
*/
export default {
  components: {
    VDefCell,
    VIconCell,
    VUrlCell
  },
  props: {
    tableData: Array,
    TableColumns: {
      required: true,
      validator: function(value) {
        var prefix = 'VTable props validation: columns';
        if (!Array.isArray(value)) {
          ShowError(prefix, 'Not Array');
          return false;
        }
        var res = true;
        value.forEach((el, i) => {
          res = res && el instanceof ColumnData;
          if (!res)
            ShowError(prefix, 'Not ColumnData. Index: ' + i);
        });
        return res;
      }
    },
  },
  data: function() {
    return {
      config: TableConfig,
      maxTableWidth: 0,
      sumColumns: 0,
      tableWidth: 0,
      isScroll: false,
      isActiveRow: null,
      isLoadedData: false
    }
  },
  methods: {
    //Use in Siebel
    configurateTable() {
      this.isActiveRow = this.tableData.length > 0 ? 0 : null;
      this.maxTableWidth = this.$el.parentNode.clientWidth
      this.sumColumns = this.getSumColumnsWidth()

      this.setTableWidth()
      this.setColumnsWidth()
    },
    setLoadStatus(isLoad) {
      this.isLoadedData = isLoad
    },
    setActiveRow(index) {
      if (typeof index === 'number') {
        this.isActiveRow = index
      }
    },
    setTableWidth() {
      if (this.sumColumns > this.maxTableWidth) {
        this.tableWidth = this.sumColumns
        this.isScroll = true
      } else {
        this.tableWidth = this.maxTableWidth
      }
    },
    setColumnsWidth() {
      let lastColumn = this.TableColumns[this.TableColumns.length - 1]
      if (this.sumColumns < this.maxTableWidth) {
        lastColumn['Width'] = this.maxTableWidth - this.sumColumns + lastColumn.Width
      }
    },
    getSumColumnsWidth() {
      let result = 0;
      this.TableColumns.forEach(el => {
        result += parseInt(el.Width) + this.config.GridPadding
      })
      return result;
    },
    tableClick(rowId, columnData) {
      if (this.isActiveRow != rowId) {
        this.rowClick(rowId)
      }

      this.isActiveRow = rowId;
      this.cellClick(columnData)
    },
    //Use in Siebel
    rowClick(rowId) {
      this.$emit('table-row-select', rowId)
    },
    //Use in Siebel
    cellClick(columnData) {
      this.$emit('table-cell-click', columnData)
    }
  }
}
</script>