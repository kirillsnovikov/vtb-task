<template>
  <div class="search-layout">
    <div class="search-header">
      <div class="search-header__hide-button"></div>
      <div class="search-header__title">{{'поиск клиента' | toupper}}</div>
      <div class="search-header__clear-button"></div>
    </div>
    <div class="search-select">
      <select v-model="selected">
        <option disabled value="">{{'Выберите один из вариантов' | toupper}}</option>
        <option selected>А</option>
        <option>Б</option>
        <option>В</option>
      </select>
    </div>
    <div class="search-input-list">
      <!-- <SearchInput v-for="(input, i) in searchInputs.searchList.types[0].inputList" :inputData="input" /> -->
    </div>
    <div class="search-button btn">{{'' | }}</div>
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
        searchTypes: searchJson.searchList.types,
        selectedTypeNum: null,
        searchInputs: {
          type: Array,
          default: []
        },
      }
    },
    computed: {
      getSearchInputs() {
        let inputs = this.searchTypes[this.selectedTypeNum]
      }
    },
    mounted() {
      // console.log(this.$el.getAttribute('format'))
      // console.log(this.searchData.searchList.types.main.inputList)
    },
    methods: {
    },
    filters: {
      capitalize(str) {
        if (!str) return ''
          str = str.toString()
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    }
  }
</script>