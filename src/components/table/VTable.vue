<template>
  <div class="table" :class="{'scroll-x': isScroll}">
    <div class="table-header" :style="{width: tableWidth + 'px'}">
      <div class="table-header__item"
      v-for="(column, i) in TableColumns"
      :key="i"
      :style="{flex: '0 0 ' + column.Width + 'px', margin: '0 ' + (config.GridPadding/2) + 'px', padding: config.ColPadding + 'px'}">
      <div class="table-header__item__value" :class="column.Align">
        {{column.Display | capitalize}}
      </div>
    </div>
  </div>
  <div class="table-body vtb-collapse">
    <div class="table-body__row"
    v-for="(tableRow, k) in tableData"
    :key="k"
    :style="{width: tableWidth + 'px'}"
    :class="{ active: isActiveRow === k}">
      <div class="table-body__row__item"
      v-for="(column, i) in TableColumns"
      @click="tableClick(k, column)"
      :key="i"
      :style="{flex: '0 0 ' + column.Width + 'px', margin: '0 ' + (config.GridPadding/2) + 'px', padding: config.ColPadding + 'px'}">
      <component
      :is="column.Component"
      :data="tableRow[column.Name]"
      :icons="column.IconMap"
      :class="column.Align"
      @click="tableClick(i, TableColumns)"
      >
    </component>
  </div>
</div>
</div>
</div>
</template>

<script>
  import {TableConfig, ColumnData, ShowError, ShowLog} from '../../lib/Helper.js'
  // import {CompState, tblClass} from '../../lib/CompState.js'
  import VDefCell from './VDefCell.vue';
  import VIconCell from './VIconCell.vue';
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
      VIconCell
    },
    props: {
      tableData: Array,
      TableColumns: {
        required: true,
        validator: function(value) {
          var prefix = 'VTable props validation: columns';
          if(!Array.isArray(value)){
            ShowError(prefix, 'Not Array');
            return false;
          }
          var res = true;
          value.forEach((el, i) => {
            res = res && el instanceof ColumnData;
            if(!res)
              ShowError(prefix, 'Not ColumnData. Index: ' + i);
          });
          return res;
        }
      }
    },
    data: function () {
      return {
        config: TableConfig,
        maxTableWidth: 0,
        sumColumns: 0,
        tableWidth: 0,
        isScroll: false,
        isActiveRow: null,
      }
    },
    mounted() {
      this.configurateTable();
    },
    methods: {
      //Use in Siebel
      configurateTable() {
        this.maxTableWidth = this.$el.parentNode.clientWidth
        this.sumColumns = this.getSumColumnsWidth()

        this.setTableWidth()
        this.setColumnsWidth()
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
      getAlignClass(name) {
        return {
          'align-left': name && name === 'align-left',
          'align-right': name && name === 'align-right',
          'align-center': name && name === 'align-center',
        }
      },
      tableClick(rowId, columnData) {
        this.rowClick(rowId)

        this.isActiveRow = rowId

        this.cellClick(columnData)
      },
      //Use in Siebel
      rowClick(rowId) {
        let prefix = 'CLick on Row'
        if(this.isActiveRow == rowId)
          return;

        this.$emit('table-row-select', rowId)
      },
      //Use in Siebel
      cellClick(columnData) {
        let prefix = 'CLick on Cell'
        this.$emit('table-cell-click', columnData)
      }
    }
  }
</script>