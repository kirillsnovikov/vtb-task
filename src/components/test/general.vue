<template>
  <div class="general" v-on:click="greet">
    ПРИВЕТ!! {{stroke}}
  </div>
</template>


<script>

    export default {
        name: 'general',
        props: {
          stroke: String,
          obj: Object
        },


        data() {
            return {

            }
        },
        methods: {
          greet: function (event) {
            // `this` внутри методов указывает на экземпляр Vue
            alert('Привет!!!, ' + this.name + '!')
            // `event` — нативное событие DOM
            if (event) {
              alert(event.target.tagName)
            }
          }
        }

    }
</script>
