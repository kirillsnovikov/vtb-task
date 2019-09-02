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
              :State="entry.isActive ? CompState.tblActive : CompState.tblInactive">
            </component>
            <!--<div >{{ entry[key.Name] }}</div>-->
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<!--on-sort (ColumnData). Событие сортировки по шапке ColumnData.Sort -> направление сортировки-->
<script>
import {TableConfig, ColumnData, ShowError, ShowLog} from '../../lib/Helper.js'
import {CompState, tblClass} from '../../lib/CompState.js';
//import VButton from './VButton.vue';
import VDefCell from './VDefCell.vue';
var columnConfig = TableConfig.column;
export default {
  name: 'VTable',
  components: {
 // 'v-button': VButton,
  'v-def-cell': VDefCell
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
:root {
  --white: #ffffff;
  --black: #000000;
  --watermelon: #fd4176;
  --tangerine: #ff9300;
  --electric-purple: #a237f3;
  --brown-grey: #999999;
  --dark-lime-green: #73c700;
  --azure: #00a5ff;
  --very-light-pink: #cccccc;
  --azure-two: #00a0df;
  --blue-blue: #1750c6;
  --royal: #0a2896;
  --blue-blue-two: #1851c7;
  --dull-orange: #d6ba42;
  --camel: #c69146;
  --dark-sky-blue: #3c97dd;
  --pale-grey: #f7f8fd;
  --pale-grey-two: #dce0e8;
  --pale-grey-three: #e2e4ec;
  --pumpkin-orange: #f78400;
  --mid-blue: #247899;
  --dark-lime-green-two: #6dd400;
  --light-blue-grey: #b8d7f0;
  --tomato: #e02020;
  --battleship-grey-two: #6d7278;
  --pale-grey-four: #e8ecf3;
  --cloudy-blue: #c0c5d2;
  --light-grey: #eeece4;
  --beige: #e8c2c0;
  --twilight-blue: #0d327d;
  --sapphire: #233da3;
  --twilight-blue-two: #0b2868;
  --cobalt: #1c3992;
  --beige-two: #f7dcd9;
  --greyish-brown: #573a37;
  --cloudy-blue-two: #bfc4d1;
  --black-two: #1a1a1a;
  --battleship-grey: #727887;
}

table {
  border-spacing: 0px;
  border: solid 0.8px var(--cloudy-blue);
  background-color: var(--pale-grey);
}

th{
  border-style: none none solid none;
  background-color: var(--white);
}
th::before{
  background-color: var(--black);
  filter: blur(3px);
  -webkit-filter: blur(3px);
}
th:first-child {
  border-bottom-left-radius: 6.4px;
  /*box-shadow: 0px 2px 2px black;*/
}
th:last-child {
  border-bottom-right-radius: 6.4px;
 /* box-shadow: 0px 2px 2px black;*/
}

td {
  border-style: none none solid none;
  border-color: var(--cloudy-blue);
  border-width:  0.8px ;
  }

tr td:first-child {
  border-bottom-left-radius: 6.4px;
  }
tr td:last-child {
  border-bottom-right-radius: 6.4px;
  }

tr {
  width: 200px;
}


th.active .arrow {
  opacity: 1;
}

/*tr:hover td{
  color:blue;
  background: rgba(255,255,255,1);
  background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(201,201,255,1) 50%, rgba(255,255,255,1) 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(50%, rgba(201,201,255,1)), color-stop(100%, rgba(255,255,255,1)));
  background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(201,201,255,1) 50%, rgba(255,255,255,1) 100%);
  background: -o-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(201,201,255,1) 50%, rgba(255,255,255,1) 100%);
  background: -ms-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(201,201,255,1) 50%, rgba(255,255,255,1) 100%);
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(201,201,255,1) 50%, rgba(255,255,255,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff', GradientType=0 );
}*/

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
