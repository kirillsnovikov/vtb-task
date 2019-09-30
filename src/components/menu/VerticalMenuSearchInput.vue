<template>
  <div class="custom-input search-input">
    <input v-model="inputValue" class="search-input__input" type="text">
    <label class="search-input__label" :class="{ focus: inputValue }">{{ inputData.label | toupper }}</label>
    <span class="search-input__clear" v-if="inputValue" @click="inputValue = ''">
      <div class="search-input__clear__icon">
        <icon-base :strokeColor="'currentColor'" :width="18" :height="18">
          <icon-close></icon-close>
        </icon-base>
      </div>
    </span>
  </div>
</template>
<script>
import IconBase from '@/components/utils/IconBase.vue'
import IconClose from '@/components/utils/icons/IconClose.vue'
const regExps = {
  text: new RegExp(/[^\d]/, 'gi'),
  number: new RegExp(/[\d]/, 'gi'),
  id: new RegExp(/[\d\w-]/, 'gi'),
  date: new RegExp(/[\d\.]/, 'gi'),
}
export default {
  name: 'search-input',
  components: {
    IconBase,
    IconClose,
  },
  props: {
    inputData: Object,
    inputId: Number
  },
  data() {
    return {
      inputValue: '',
      oldValue: '',
      inputEl: null,
      // maskInput: '0000 0000 0000 0000',
      regular: null,
    }
  },
  mounted() {
    this.inputEl = this.$el.firstChild
    this.regular = new RegExp(regExps[this.inputData.type])
    if (localStorage['inputValue' + this.inputId]) {
      this.inputValue = localStorage['inputValue' + this.inputId]
    }
  },
  watch: {
    inputValue: function(newVal) {
      this.inputValue = this.validate(newVal)
      this.oldValue = this.inputValue;
      localStorage['inputValue' + this.inputId] = this.inputValue
    }
  },
  methods: {
    validate(newVal) {
      if (newVal.replace(this.regular, '') != '') {
        this.inputEl.classList.add('error')
        setTimeout(() => {
          this.inputEl.classList.remove('error')
        }, 300)
        return this.oldValue;
      }

      return newVal.substring(0, this.inputData.length)
    },
    // cardFormat(newVal) {
    //   if (newVal.search( /[^\d|\s]/gi ) >= 0) {
    //     this.inputEl.classList.add('onerror')
    //     setTimeout(() => {
    //       this.inputEl.classList.remove('onerror')
    //     }, 300)
    //   }
    //   let cardCode = newVal.replace(this.regular, '').substring(0,16)
    //   let formatCardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : ''
    //   // this.maskValue = formatCardCode + this.maskInput.substr(formatCardCode.length)
    //   return formatCardCode
    //   // console.log(this.$el.children[0].value = this.maskValue)
    // }
  }
}
</script>