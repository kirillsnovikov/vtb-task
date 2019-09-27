<template>
  <div class="table-body__row__item__value table-icon">
    <!-- <div class="table-body__row__item__value__icon" v-if="icon"> -->
    <img :src="getIcon" alt="" v-if="getIcon">
    <!-- </div> -->
    <!-- <div class="table-body__row__item__value__text">{{data}}</div> -->
  </div>
</template>
<script>
export default {
  props: {
    data: [String],
    icons: Array
  },
  computed: {
    getIcon() {
      let res = null
      if (this.icons.length > 0) {
        res = (res = this.icons.find(el => el.Value === this.data)) ? res.Link : null
        if (!res) {
          res = (res = this.icons.find(el => el.Value === 'default')) ? res.Link : null
        }
      }
      return res
    }
  }
}
</script>