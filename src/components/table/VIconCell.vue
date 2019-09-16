<template>
  <div class="table-body__row__item__value">
    <div class="table-body__row__item__value__icon" v-if="icon">
      <img :src="icon" alt="">
    </div>
    <!-- <div class="table-body__row__item__value__text">{{data}}</div> -->
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
      var iconArr = this.icons;
      if (iconArr.length > 0) {
        iconArr = this.icons.find(el => el.Value === this.data);
      }

      if(iconArr){
        this.icon = iconArr.Link;
      }
    }
  }
</script>