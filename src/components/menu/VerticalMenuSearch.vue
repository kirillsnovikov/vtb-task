<template>
  <div>
    <div class="text-input" format="text">
      <input v-model="input" class="text-input__input" type="text">
      <label class="text-input__label" :class="{ onfocus: input }">{{label | toupper}}</label>
      <span class="text-input__clear" @click="input = ''"><i class="icon-cross"></i></span>
    </div>
  </div>
</template>

<script>
  import searchJson from '@/components/search'
  export default {
    name: 'text-input',
    data() {
      return {
        input: '',
        inputEl: null,
        // maskInput: '0000 0000 0000 0000',
        // maskValue: '0000 0000 0000 0000',
        label: 'фамилия'
      }
    },
    mounted() {
      // console.log(this.$el.getAttribute('format'))
      this.inputEl = this.$el.firstChild.firstChild
      console.log(this.inputEl )
    },
    watch: {
      input: function(newVal) {
        this.input = this.cardFormat(newVal)
      }
    },
    methods: {
      cardFormat(newVal) {
        if (newVal.search( /[^\d]/gi ) >= 0) {
          this.inputEl.classList.remove('onerror')
          this.inputEl.classList.add('onerror')
          setTimeout(() => {
            this.inputEl.classList.remove('onerror')
          }, 300)
        }
        let cardCode = newVal.replace(/[^\d]/g, '').substring(0,16)
        let formatCardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : ''
        // this.maskValue = formatCardCode + this.maskInput.substr(formatCardCode.length)
        return formatCardCode

        // console.log(this.$el.children[0].value = this.maskValue)
      }
    },
    filters: {
      toupper(str) {
        if (!str) return ''
          str = str.toString()
        return str.toUpperCase()
      }
    }
  }
</script>