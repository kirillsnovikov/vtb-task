<template>
  <div @resize="OnResize">
    <table>
      <thead>
        <tr>
          <th v-for="(column, index) in columns"
          :key="index"
          @click="sortBy(column)"
          :style="{width:parseInt(column.Width) + 'px'}"
          :class="{ active: selectColumn == column.Name }">{{ column.Display }}<span
          class="arrow"
          :class="column.Sort"></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, rowIndex) in rowData" :key="rowIndex" :class="[tblClass.row, !!entry.isActive ? 'ui-state-highlight' : '']" >
        <td v-for="(key, colIndex) in columns" :key="colIndex" @click="entry.isActive = !entry.isActive" :class="{active: !!entry.isActive}">
          <div @click="CellClick">
            <component
            :is="key.CompName"
            :Text="entry[key.Name]"
            :Data="key"
            :State="entry.isActive ? CompState.tblActive : CompState.tblInactive">
          </component>
          <div >{{ entry[key.Name] }}</div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>
</template>

<!-- on-sort (ColumnData). Событие сортировки по шапке ColumnData.Sort -> направление сортировки -->
<script>
  import {TableConfig, ColumnData, ShowError, ShowLog} from '../../lib/Helper.js'
  import {CompState, tblClass} from '../../lib/CompState.js';
  import VDefCell from './VDefCell.vue';
  import VIconCell from './VIconCell.vue';
  var columnConfig = TableConfig.column;
  export default {
    name: 'VTable',
    components: {
     'v-def-cell': VDefCell,
     'v-icon-cell': VIconCell
   },
   data: function () {
    return {
      selectColumn: '',
      CompState: CompState,
      tblClass: tblClass,
      isActive: false,
      ControlState:"11"
    }
  },
  mounted () {
    this.CalcColumnWidth();
  },
  props: {
    tableWidth:{
      default: TableConfig.TableWidth
    },
    rowData: Array,
    columns: {
      required: true,
      validator:function(value){
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
  methods: {
    OnResize:function(){
      debugger;
    },
    CalcColumnWidth: function(){
      var el, parNode, parentWidth, totalWidth = 0, lastIndex,
      col = this.columns;
      if(!(el = this.$el) || !(parNode = el.parentNode))
        return;

      parentWidth = parNode.clientWidth;
      col.forEach((el, i) => {
        totalWidth += parseInt(el.Width);
      });
      if(parentWidth > totalWidth && (lastIndex = col.length - 1) > 0){
        col[lastIndex].Width = parseInt(col[lastIndex].Width) + parentWidth - totalWidth;
      }
    },
    CellClick: function(){
      ShowLog("VTable", "CellClick");
    },
    rowClick: function(){
      ShowLog("VTable", "rowClick");
    },
    sortBy: function (col) {
      var sortEn = columnConfig.sortName;
      this.selectColumn = col.Name;
      this.columns.forEach(function (item) {
        if(item.Name != col.Name)
          item.Sort = columnConfig.sortDefault;
      });
      if(col.Sort == sortEn.none){
        col.Sort = sortEn.asc;
      }
      else if(col.Sort == sortEn.asc){
        col.Sort = sortEn.desc
      }
      else{
        col.Sort = sortEn.none;
      }

      this.$emit('on-sort', col);
    }
  }
}
</script>