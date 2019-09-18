<template>
  <div class="search-layout">
    <div class="search-header">
      <div class="search-header__back-button" @click="$emit('activeSearch')">
        <div class="search-header__back-button__icon"></div>
      </div>
      <div class="search-header__title">{{'поиск клиента' | capitalize}}</div>
      <div class="search-header__clear-button circle-btn" @click="resetForm">
        <div class="search-header__clear-button__icon"></div>
      </div>
    </div>
    <div class="search-select">
      <div class="search-select__arrow">
        <div class="search-select__arrow__icon"></div>
      </div>
      <select v-model="selectedTypeNum">
        <option v-for="(type, i) in searchTypes" :value="i" :key="i">{{type.name | capitalize}}</option>
      </select>
    </div>
    <div class="search-input-list">
      <SearchInput v-for="(input, i) in getSearchInputs" :inputData="input" :inputId="i" :key="i" />
    </div>
    <div class="search-button">
      <div class="btn btn-fill" @click="search">
        {{'поиск' | toupper}}
      </div>
    </div>
  </div>
</template>
<script>
import searchJson from '@/components/search'
import SearchInput from '@/components/menu/VerticalMenuSearchInput.vue'
// import Tooltip from '@/components/tooltip/Tooltip.vue'
// import dataTooltip from '@/components/tooltip/dataTooltip'

export default {
  name: 'menu-search',
  components: {
    SearchInput,
    // Tooltip
  },
  data() {
    return {
      selectedTypeNum: 0,
      searchTypes: searchJson.searchList.types,
      searchValues: [],
      // searchTooltip: dataTooltip.searchTooltip,
    }
  },
  computed: {
    getSearchInputs() {
      // console.log(this.selectedTypeNum)
      let inputs = this.searchTypes[this.selectedTypeNum].inputList
      return inputs
    },
  },
  methods: {
    resetForm() {
      this.$children.forEach(function(input) {
        input.inputValue = ''
        //   console.log(input.inputValue)
        // if (input.inputValue) {
        // }
      })
      // console.log(this.$children)
    },
    search() {
      console.log('ищем!');
      this.getValues();
      console.log(this.searchValues);
      this.$emit('activeSearch')

      var valStr,
        valArr = this.searchValues,
        findPS,
        findBS;

      /*  if (!valArr || valArr.length < 1) {
          console.log('Заполните поля для поиска');
          return;
        }
*/
      valStr = '10#' + valArr[0].length + '#';

      for (var i = 0; i < valArr.length - 1; i++) {
        valStr = valStr + (valArr[i] || '') + valArr[i + 1].length + '#';
      }
      valStr = valStr + valArr[valArr.length - 1];

      console.log(valStr);

      findBS = SiebelApp.S_App.GetService("VTB FM Find");

      findPS = CCFMiscUtil_CreatePropSet();
      findPS.SetProperty("DestView", "VTB FM Contact List View");
      //findPS.SetProperty("SearchCategory", searchCategoryMapping[selectCat].SearchCategory);
      findPS.SetProperty("SearchCategory", 'Contact');
      //findPS.SetProperty("FieldNameArray", searchCategoryMapping[selectCat].FieldNameArray);//пример "10#9#Last Name10#First Name11#Middle Name10#Birth Date15#VTB24 Card Find28#VTB24 Identity Document Name20#VTB24 Telebank Login17#VTB24 Card Number2#Id14#Opportunity Id"
      findPS.SetProperty("FieldNameArray", "10#9#Last Name10#First Name11#Middle Name17#VTB24 Card Number28#VTB24 Identity Document Name20#VTB24 Telebank Login2#Id14#Opportunity Id15#VTB24 Card Find");
      findPS.SetProperty("FieldValArray", valStr); //пример "10#3#втб8#двадцать6#четыре0#0#0#0#0#0#0#"

      findBS.InvokeMethod("Find", findPS);

    },
    getValues(data) {
      this.$children.forEach((input, i) => {
        this.searchValues[i] = input.inputValue
      })
      // console.log(input)
      // this.searchValues[Object.keys(data)[0]] = data[Object.keys(data)[0]]
      // console.log(this.searchValues)
    }
  }
}
</script>