<template>
  <div class="text-input">
    <input v-model="inputValue" class="text-input__input" type="text">
    <label class="text-input__label" :class="{ focus: inputValue }">{{ inputData.label | toupper }}</label>
    <span class="text-input__clear" @click="inputValue = ''"><i class="icon-cross"></i></span>
  </div>
</template>

<script>
  const regExps = {
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
        inputValue: '',
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
      inputValue: function(newVal) {
        this.inputValue = this.validate(newVal)
        console.log(this.inputValue)
      }
    },
    methods: {
      validate(newVal) {
        if (newVal.search(this.regular) >= 0) {
          this.inputEl.classList.add('error')
          setTimeout(() => {
            this.inputEl.classList.remove('error')
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
    }
  }
</script>