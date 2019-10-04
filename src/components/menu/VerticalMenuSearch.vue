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
        <div class="search-select__arrow__icon" :class="{active: isActiveOptions}"></div>
      </div>
      <div class="search-select__active-option" @click="activeOptions">
        {{searchTypes[selectedTypeNum].name}}
      </div>
      <div class="search-select__options" :style="optionsStyle">
        <div class="search-select__options__option" v-for="(type, i) in searchTypes">
          <input type="radio" :id="`sso_${i}`" :value="i" v-model="selectedTypeNum">
          <label :for="`sso_${i}`" :class="{active: selectedTypeNum === i}" :key="`sso_${i}`" @click="activeOptions">{{type.name}}</label>
        </div>
      </div>
    </div>
    <div class="search-input-list">
      <SearchInput v-for="(input, i) in getSearchInputs" :inputData="input" :inputId="i" :key="i+input.label" />
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

export default {
  name: 'menu-search',
  components: {
    SearchInput,
  },
  data() {
    return {
      selectedTypeNum: 0,
      searchTypes: searchJson.searchList.types,
      searchValues: [],
      isActiveOptions: false,
      optionsStyle: {
        height: 0
      }
    }
  },
  computed: {
    getSearchInputs() {
      let inputs = this.searchTypes[this.selectedTypeNum].inputList
      return inputs
    },
  },
  methods: {
    resetForm() {
      this.$children.forEach(function(input) {
        input.inputValue = ''
      })
    },
    search() {
      console.log('ищем!');
      console.log(this.selectedTypeNum);
      this.getValues();
      this.$emit('activeSearch')

      var valStr,
        valArr = this.searchValues,
        findPS,
        findBS,
        searchCategoryMapping,
        searchCat;

      searchCategoryMapping = {
         "0": {
         "SearchCategory": "Contact",
         //"FieldNameArray": "10#9#Last Name10#First Name11#Middle Name17#VTB24 Card Number28#VTB24 Identity Document Name20#VTB24 Telebank Login2#Id14#Opportunity Id15#VTB24 Card Find"
         "FieldNameArray": "10#28#VTB24 Identity Document Name15#VTB24 Card Find9#Last Name10#First Name11#Middle Name10#Birth Date17#VTB24 Card Number"
         },
         "1": {
         "SearchCategory": "VTB24 Contact Additional",
         //"FieldNameArray": "5#18#VTB24 Account Find20#VTB24 Agreement Find22#VTB24 Application Find26#VTB24 Alternate Phone Find9#VTB24 INN"
         "FieldNameArray": "9#18#VTB24 Account Find20#VTB24 Agreement Find22#VTB24 Application Find26#VTB24 Alternate Phone Find9#VTB24 INN2#Id20#VTB24 Telebank Login14#Opportunity Id14#Jira SR Number"
         }
      };

      valStr = '10#' + valArr[0].length + '#';

      for (var i = 0; i < valArr.length - 1; i++) {
        valStr = valStr + (valArr[i] || '') + valArr[i + 1].length + '#';
      }
      valStr = valStr + valArr[valArr.length - 1];

      searchCat = searchCategoryMapping[this.selectedTypeNum].SearchCategory;
      if(this.selectedTypeNum == '1' && (valArr[5] || valArr[6] || valArr[7]))
        searchCat = 'Contact';
      if(this.selectedTypeNum == '1' && valArr[8])
        searchCat = 'VTB24 Claim Service Request';

      console.log(valStr);
      console.log(searchCategoryMapping[this.selectedTypeNum].SearchCategory);
      console.log(searchCategoryMapping[this.selectedTypeNum].FieldNameArray);

      findBS = SiebelApp.S_App.GetService("VTB FM Find");

      findPS = CCFMiscUtil_CreatePropSet();
      findPS.SetProperty("DestView", "VTB FM Contact List View");

      findPS.SetProperty("SearchCategory", searchCat);
      findPS.SetProperty("FieldNameArray", searchCategoryMapping[this.selectedTypeNum].FieldNameArray);
      findPS.SetProperty("FieldValArray", valStr);

      findBS.InvokeMethod("Find", findPS);

    },
    getValues(data) {
      this.$children.forEach((input, i) => {
        this.searchValues[i] = input.inputValue
      })
      // console.log(input)
      // this.searchValues[Object.keys(data)[0]] = data[Object.keys(data)[0]]
      // console.log(this.searchValues)
    },
    activeOptions() {
      this.isActiveOptions = !this.isActiveOptions
      if (this.isActiveOptions) {
        this.optionsStyle.height = this.searchTypes.length * 44 + 'px'
      } else {
        this.optionsStyle.height = 0
      }
    }
  }
}
</script>
