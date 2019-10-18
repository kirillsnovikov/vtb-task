<template>
  <div v-if="isShow" class="popup-wrap">
    <div class="popup-main">
      <div class="popup-card">
        <div class="popup-card__close" @click="hide">
          <icon-base :strokeColor="'currentColor'" :width="20" :height="20">
            <icon-close></icon-close>
          </icon-base>
        </div>
        <div class="popup-card__header subject-popup-header">
          <div v-if="popupData.actionTitle" class="popup-card__header__title">{{popupData.actionTitle}}</div>
        </div>
        <div class="popup-card__subjects-body">
          <div class="popup-card__subjects-body__search">
            <div class="custom-input subjects-input">
              <input v-model="inputValue" type="text" class="subjects-input__input" :class="errorClass">
              <label class="subjects-input__label" :class="{focus: inputValue}">{{'Впишите первые буквы тематики' | toupper}}</label>
              <div class="subjects-input__right">
                <div class="subjects-input__right__clear" v-if="inputValue" @click="inputValue = ''">
                  <icon-base :strokeColor="'currentColor'" :width="18" :height="18">
                    <icon-close></icon-close>
                  </icon-base>
                </div>
                <div class="search-btn">
                  <icon-base :width="20" :height="20">
                    <icon-search></icon-search>
                  </icon-base>
                </div>
              </div>
            </div>
            <div class="search-result">
              <div class="search-result__empty" v-if="inputValue.length === 1">
                <div class="tag-danger">Недостаточное количество букв. Введите хотя бы две буквы</div>
              </div>
              <div class="search-result__empty" v-if="filteredList && Object.keys(filteredList).length == 0">
                <div class="tag-danger">По вашему запросу ничего не найдено</div>
              </div>
              <div v-for="(parent, child) in filteredList" class="search-result__item tag" :key="parent+child" @click="clickBySearchValue(parent, child)">
                <div v-if="child">{{child}}</div>
              </div>
            </div>
          </div>
          <div class="popup-card__subjects-body__items">
            <div class="items-scroll">
              <PopupSubjectItem v-for="(item, i) in popupSubjects" :key="i" :subject="item" />
            </div>
          </div>
        </div>
        <div class="popup-card__footer"></div>
      </div>
      <div class="popup-layout">
        <div class="popup-layout__dark"></div>
      </div>
    </div>
  </div>
</template>
<script>
import PopupSubjectItem from './PopupSubjectItem.vue'
import IconBase from '@/components/utils/IconBase.vue'
import IconClose from '@/components/utils/icons/IconClose.vue'
import IconSearch from '@/components/utils/icons/IconSearch.vue'

export default {
  name: 'popup-subjects',
  components: {
    PopupSubjectItem,
    IconBase,
    IconClose,
    IconSearch
  },
  props: {
    popupData: Object
  },
  data() {
    return {
      inputValue: '',
      isShow: false,
    }
  },
  created() {
    this.$eventHub.$on('popup-subject', () => {
      this.show()
    })
  },
  beforeDestroy() {
    this.$eventHub.$off('popup-subject')
  },
  computed: {
    filteredList() {
      if (this.inputValue.length >= 2) {
        let childs = []
        let res = {}
        childs = Object.keys(this.searchValues).filter(subTitles => {
          return subTitles.toLowerCase().includes(this.inputValue.toLowerCase())
        }).slice(0, 5)
        childs.forEach(child => {
          res[child] = this.searchValues[child]
        })
        return res
      }
    },
    popupSubjects() {
      return (this.popupData.subjects) ? this.popupData.subjects : new Array()
    },
    searchValues() {
      let searchValues = new Object()
      this.popupSubjects.forEach(element => {
        if (element.subjectSubtitles) {
          element.subjectSubtitles.forEach(subtitle => {
            if (subtitle.name != '') {
              searchValues[subtitle.name] = element.subjectTitle
            }
          })
        }
      })
      return searchValues
    },
    errorClass() {
      return {
        error: this.inputValue.length === 1 || (this.filteredList && Object.keys(this.filteredList).length == 0)
      }
    }
  },
  methods: {
    show() {
      this.isShow = true
      // this.blurContent()
    },
    hide() {
      this.isShow = false
      // this.blurContent()
    },
    blurContent() {
      // if (this.isShow) {
      //   document.getElementById('_swecontent').classList.add('blur')
      // } else {
      //   document.getElementById('_swecontent').classList.remove('blur')
      // }
    },
    clickBySearchValue(parent, child) {
      this.$eventHub.$emit('on-start-thematic', parent, child)
    }
  },
}
</script>