<template>
  <div class="text-input" format="card">
    <input v-model="input" class="text-input__input" type="text">
    <div class="text-input__mask">{{maskValue}}</div>
    <!-- <label class="text-input__label">First Name</label> -->
    <!-- <span class="focus-border">{{input}}</span> -->
  </div>
</template>

<script>
  export default {
    name: 'text-input',
    data() {
      return {
        input: '',
        maskInput: '0000 0000 0000 0000',
        maskValue: '0000 0000 0000 0000'
      }
    },
    mounted() {
      // console.log(this.$el.getAttribute('format'))
    },
    watch: {
      input: function(newVal, oldVal) {
        this.input = this.cardFormat()
        // this.cardFormat()
        // console.log()
      }
    },
    methods: {
      cardFormat() {
        let cardCode = this.input.replace(/[^\d]/g, '').substring(0,16)
        let formatCardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : ''
        this.maskValue = this.maskInput.substr(formatCardCode.length)
        return formatCardCode

        // console.log(this.$el.children[0].value = this.maskValue)
        console.log(this.maskValue)
        // let substr = formatCardCode.length
        // console.log(formatCardCode + this.maskInput.substr(formatCardCode.length))
        // let str = "Слава - это жажда молодости";

        // let result = str.match( /это/g );

        // console.log( result );
        // console.log( result.index );
        // console.log( result.input );
        // console.log(cardCode.match(/.{1,4}/g).index)
      }
    }
  }
</script>