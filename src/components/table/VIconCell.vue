<template>
  <div class="table-body__row__item__value">
    <div class="table-body__row__item__value__icon" v-if="icon">
      <img :src="icon" alt="">
    </div>
    <div class="table-body__row__item__value__text">{{data}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      data: [Number, Boolean, String],
      icons: Array
    },
    data() {
      return {
        icon: null
      }
    },
    mounted() {
      if (this.icons.length > 0) {
        this.icon = this.icons.find(el => {
          return el.Value === this.data
        }).Link
      }
    }
  }
</script>