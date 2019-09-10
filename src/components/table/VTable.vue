<template>
  <div class="table" :class="{'scroll-x': isScroll}">
    <div class="table-header" :style="{width: tableWidth + 'px'}">
      <div class="table-header__item"
        v-for="(column, i) in TableColumns"
        :style="{flex: '0 0 ' + columnWidth[column.Name] + 'px', margin: '0 ' + (config.GridPadding/2) + 'px', padding: config.ColPadding + 'px'}">
        <div class="table-header__item__value" :class="columnAlign[column.Name]">
          {{column.Display | capitalize}}
        </div>
      </div>
    </div>
    <div class="table-body">
      <div class="table-body__row" v-for="tableRow in tableData" :style="{width: tableWidth + 'px'}">
        <div class="table-body__row__item"
          v-for="(column, i) in TableColumns"
          :style="{flex: '0 0 ' + columnWidth[column.Name] + 'px', margin: '0 ' + (config.GridPadding/2) + 'px', padding: config.ColPadding + 'px'}">
          <component
            :is="column.CompName"
            :data="tableRow.data[column.Name]"
            :icons="column.IconMap"
            :class="columnAlign[column.Name]"
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

  export default {
    components: {
      VDefCell,
      VIconCell
    },
    props: {
      tableData: Array,
      TableColumns: Array
    },
    data: function () {
      return {
        tableWidth: null,
        columnWidth: {},
        columnAlign: {},
        isScroll: false,
        config: TableConfig,
      }
    },
    mounted() {
      this.getTableWidth()
    },
    computed: {
    },
    methods: {
      getTableWidth() {
        let calculateWidth = this.calculateWidth()
        if (this.$el.clientWidth > calculateWidth) {
          this.tableWidth = this.$el.clientWidth
          this.TableColumns.forEach(el => {
            if (el.Width !== 100) {
              this.columnWidth[el.Name] = el.Width
            } else {
              this.columnWidth[el.Name] = null
            }
          })
          console.log(this.columnWidth)
        } else {
          this.tableWidth = calculateWidth
          this.isScroll = true
          this.TableColumns.forEach(el => {
            this.columnWidth[el.Name] = el.Width
          })
        }
      },
      calculateWidth() {
        let result = null
        this.TableColumns.forEach(el => {
          result += el.Width + this.config.GridPadding
          this.columnAlign[el.Name] = this.alignClass(el.Align)
        })
        return result
      },
      alignClass(name) {
        return {
          'align-left': name && name === 'align-left',
          'align-right': name && name === 'align-right',
          'align-center': name && name === 'align-center',
        }
      }
    }
  }
</script>