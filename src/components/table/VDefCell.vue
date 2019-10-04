<template>
  <div class="table-body__row__item__value" v-if="data" :class="cellClass">
    {{data}}
  </div>
</template>

<script>
  export default {
    props: {
      data: [String]
    },
    computed: {
      cellClass() {
        // console.log(this.data)
        return {

        }
      }
    }
  }
</script>