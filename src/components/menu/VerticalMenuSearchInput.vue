<template>
  <div class="text-input">
    <input v-model="input" class="text-input__input" type="text">
    <label class="text-input__label" :class="{ onfocus: input }">{{ inputData.label | toupper}}</label>
    <span class="text-input__clear" @click="input = ''"><i class="icon-cross"></i></span>
  </div>
</template>

<script>
  const regExps = {
    // text: new RegExp('\[\\d\\|\\s]', 'gi'),
    text: new RegExp('\[\\d\]', 'gi'),
    number: new RegExp('\[\^\\d\]', 'gi')
  }
  export default {
    name: 'text-input',
    props: {
      inputData: Object
    },
    data() {
      return {
        input: '',
        inputEl: null,
        // maskInput: '0000 0000 0000 0000',
        regular: null
      }
    },
    mounted() {
      this.inputEl = this.$el.firstChild
      this.regular = new RegExp(regExps[this.inputData.type])
    },
    watch: {
      input: function(newVal) {
        this.input = this.validate(newVal)
        console.log(this.input)
      }
    },
    methods: {
      validate(newVal) {
        if (newVal.search(this.regular) >= 0) {
          this.inputEl.classList.add('onerror')
          setTimeout(() => {
            this.inputEl.classList.remove('onerror')
          }, 300)
        }
        let resultString = newVal.replace(this.regular, '').substring(0,this.inputData.length)
        return resultString
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