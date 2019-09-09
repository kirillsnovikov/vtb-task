<template>
  <div class="table">
    <div class="table-header" :style="{width: tableWidth}">
      <div class="table-header__item" v-for="(column, i) in TableColumns" :style="{flex: getColumnWidth(column.Width)}">
        <div class="table-header__item__value">
          {{column.Display | capitalize}}
        </div>
      </div>
    </div>
    <div class="table-body">
      <div class="table-body__row" v-for="tableRow in tableData" :style="{width: tableWidth}">
        <div class="table-body__row__item" v-for="(item, i) in tableRow.data">
          <div class="table-body__row__item__value">
            {{item}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {TableConfig, ColumnData, ShowError, ShowLog} from '../../lib/Helper.js'
  import {CompState, tblClass} from '../../lib/CompState.js'

  export default {
    props: {
      tableData: Array,
      TableColumns: Array
    },
    data: function () {
      return {
        selectColumn: '',
        CompState: CompState,
        tblClass: tblClass,
        isActive: false,
        ControlState:"11",
        tableWidth: null,
        isScroll: false,
        // columnWidth: null,
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
        console.log(this.$el.clientWidth, calculateWidth)
        if (this.$el.clientWidth > calculateWidth) {
          this.tableWidth = this.$el.clientWidth + 'px'
        } else {
          this.tableWidth = calculateWidth + 'px'
        }
        console.log(this.tableWidth)
      },
      calculateWidth() {
        let result = null
        this.TableColumns.forEach(el => {
          result += +el.Width.replace(/\D+/g, '')
        })
        return result
      },
      getColumnWidth(width) {
        console.log('ss')
        if(this.isScroll) {
          console.log('blablabl')
        }
        // console.log(el)
      }
      // CalcColumnWidth() {
      //   var el, parNode, parentWidth, totalWidth = 0, lastIndex,
      //   col = this.columns;
      //   if(!(el = this.$el) || !(parNode = el.parentNode))
      //     return;

      //   parentWidth = parNode.clientWidth;
      //   col.forEach((el, i) => {
      //     totalWidth += parseInt(el.Width);
      //   });
      //   if(parentWidth > totalWidth && (lastIndex = col.length - 1) > 0){
      //     col[lastIndex].Width = parseInt(col[lastIndex].Width) + parentWidth - totalWidth;
      //   }
      // },
    }
  }
</script>