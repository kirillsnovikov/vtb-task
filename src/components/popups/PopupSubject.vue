<template>
  <div class="popup-card__subjects-body">
    <div class="popup-card__subjects-body__search">
      <div class="custom-input subjects-input">
        <input v-model="inputValue" type="text" class="subjects-input__input">
        <label class="subjects-input__label" :class="{focus: inputValue}">{{'Впишите первые буквы тематики' | toupper}}</label>
        <div class="subjects-input__right">
          <div class="subjects-input__right__clear" @click="inputValue = ''"><i class="icon-cross"></i></div>
          <div class="btn btn-fill"><i class="icon-search"></i></div>
        </div>
      </div>
      <div class="search-result">
        <div v-for="i in filteredList" class="search-result__item tag">
          {{i.name}}
        </div>
      </div>
    </div>
    <div class="popup-card__subjects-body__items">
      <div class="items-scroll">
        <PopupSubjectItem v-for="(item, i) in data" :key="i" :subject="item"/>
      </div>
    </div>
  </div>
</template>

<script>
  import PopupSubjectItem from './PopupSubjectItem.vue'
  export default {
    name: 'popup-subjects',
    props: {
      data: Array
    },
    data() {
      return {
        inputValue: '',
        searchResult: null,
        searchValues: [],
      }
    },
    components: {
      PopupSubjectItem
    },
    watch: {
      // inputValue() {
      //   console.log(this.filteredList.length = 3)
      // }
    },
    mounted() {
      this.data.forEach(element => {
        this.searchValues = this.searchValues.concat(element.subjectSubtitles)
      });
    },
    computed: {
      filteredList() {
        if (this.inputValue) {
          return this.searchValues.filter(subTitles => {
            return subTitles.name.toLowerCase().includes(this.inputValue.toLowerCase())
          }).slice(0, 5)
        }
      }
    }
  }
</script>