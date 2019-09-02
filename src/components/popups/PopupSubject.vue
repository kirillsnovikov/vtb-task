<template>
  <div v-if="isShow" class="popup-wrap">
    <div class="popup-main">
      <div class="popup-card">
        <div class="popup-card__close" @click="show"><i class="icon-cross"></i></div>
        <div class="popup-card__header">
          <div v-if="data.actionTitle" class="popup-card__header__title">{{data.actionTitle}}</div>
        </div>
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
              <div v-if="inputValue.length === 1" class="tag-danger">Введите хотя бы два символа</div>
              <div v-if="filteredList && filteredList.length === 0" class="tag-danger">По вашему запросу ничего не неайдено</div>
              <div v-for="i in filteredList" class="search-result__item tag">
                {{i.name}}
              </div>
            </div>
          </div>
          <div class="popup-card__subjects-body__items">
            <div class="items-scroll">
              <PopupSubjectItem v-for="(item, i) in data.subjects" :key="i" :subject="item"/>
            </div>
          </div>
        </div>
        <div class="popup-card__footer"></div>
      </div>
      <div class="popup-layout"></div>
    </div>
  </div>
</template>

<script>
  import popupData from '@/components/popup_subject'
  import PopupSubjectItem from './PopupSubjectItem.vue'

  export default {
    name: 'popup-subjects',
    data() {
      return {
        inputValue: '',
        searchResult: null,
        searchValues: [],
        isShow: false,
        data: popupData
      }
    },
    components: {
      PopupSubjectItem
    },
    mounted() {
      this.data.subjects.forEach(element => {
        this.searchValues = this.searchValues.concat(element.subjectSubtitles)
      });
      this.blurContent()
    },
    computed: {
      filteredList() {
        if (this.inputValue.length >= 2) {
          return this.searchValues.filter(subTitles => {
            return subTitles.name.toLowerCase().includes(this.inputValue.toLowerCase())
          }).slice(0, 5)
        }
      }
    },
    methods: {
      show() {
        this.isShow = !this.isShow
        this.blurContent()
      },
      blurContent() {
        if (this.isShow) {
          document.getElementById('_swecontent').classList.add('blur-content')
        } else {
          document.getElementById('_swecontent').classList.remove('blur-content')
        }
      }
    },
  }
</script>