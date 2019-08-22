<template>
  <div class="search-layout">
    <div class="search-header">
      <div class="search-header__hide-button"></div>
      <div class="search-header__title">{{'поиск клиента' | toupper}}</div>
      <div class="search-header__clear-button"></div>
    </div>
    <div class="search-select">
      <select v-model="selectedTypeNum">
        <option v-for="(type, i) in searchTypes" :value="i" :key="i">{{type.name | toupper}}</option>
      </select>
    </div>
    <div class="search-input-list">
      <SearchInput v-for="(input, i) in getSearchInputs" :inputData="input" :key="i"/>
    </div>
    <div class="search-button btn">{{'поиск' | toupper}}</div>
  </div>
</template>

<script>
  import searchJson from '@/components/search'
  import SearchInput from '@/components/menu/VerticalMenuSearchInput.vue'

  export default {
    name: 'menu-search',
    components: {
      SearchInput
    },
    data() {
      return {
        selectedTypeNum: 0,
        searchTypes: searchJson.searchList.types,
      }
    },
    computed: {
      getSearchInputs() {
        console.log(this.selectedTypeNum)
        let inputs = this.searchTypes[this.selectedTypeNum].inputList
        return inputs
      }
    }
  }
</script>