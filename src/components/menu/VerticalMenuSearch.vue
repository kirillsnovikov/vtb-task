<template>
  <div>
    <div class="search-title">{{'поиск клиента' | capitalize}}</div>
    <div class="select-list" tabindex="1" v-model="selected">
      <input v-for="(item, i) in searchData.searchList.types" class="selectopt" :name="item.type" type="radio" :id="'type'+i" checked>
      <label v-for="(label, k) in searchData.searchList.types" :for="'type'+k" class="option">{{label.name | capitalize}}</label>
    </div>


    <input name="radiosel" type="radio" v-model="picked" :value="1" id="unique">
    <label for="unique">Select:</label>
    <input name="radiosel" type="radio" v-model="picked" :value="2" id="unique2">
    <label for="unique2">Select:</label>
    <input name="radiosel" type="radio" v-model="picked" :value="3" id="unique3">
    <label for="unique3">Select:</label>
    {{picked === 1}}{{picked === 2}}{{picked === 3}}
    <div v-for="(input, ind) in searchData.searchList.types[0].inputList">
      <SearchInput :inputData="input" />
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
        searchData: searchJson,
        selected: '',
        picked: ''
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