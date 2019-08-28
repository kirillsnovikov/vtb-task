<template>
  <div class="search-layout">
    <div class="search-header">
      <div class="search-header__back-button" @click="$emit('activeSearch')">
        <i class="icon-arrow-back"></i>
      </div>
      <div class="search-header__title">{{'поиск клиента' | capitalize}}</div>
      <div class="circle-btn" @click="resetForm">
        <i class="icon-delete"></i>
      </div>
    </div>
    <div class="search-select">
      <select v-model="selectedTypeNum">
        <option v-for="(type, i) in searchTypes" :value="i" :key="i">{{type.name | capitalize}}</option>
      </select>
    </div>
    <div class="search-input-list">
      <SearchInput v-for="(input, i) in getSearchInputs" :inputData="input" :key="i"/>
    </div>
    <div class="search-button">
      <div class="btn btn-fill">
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
      }
    }
  }
</script>