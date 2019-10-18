<template>
  <div class="tooltip-sm" :style="tooltipStyle">
    <div class="tooltip-sm__body">{{data.text}}</div>
    <div class="tooltip-sm-arrow" :style="tooltipArrowStyle"></div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object,
    isActive: Boolean
  },
  data() {
    return {
      elCoordinates: null,
      parentCoordinates: null,
    }
  },
  computed: {
    tooltipStyle() {
      let style = {}
      console.log(this.elCoordinates)
      if (this.isActive) {
        this.parentCoordinates = this.$el.parentNode.getBoundingClientRect()
        this.elCoordinates = this.$el.getBoundingClientRect()
      console.log(this.elCoordinates)
        // console.log(this.elCoordinates)
        style.left = this.parentCoordinates.left - 10 + 'px'
        if (this.parentCoordinates.top <= (10 + this.elCoordinates.height)) {
          // console.log(this.parentCoordinates)
          style.top = this.parentCoordinates.top + 10 + this.parentCoordinates.height + 'px'
        } else {
          // console.log(this.$el.offsetHeight)
          style.top = this.parentCoordinates.top - 10 - this.elCoordinates.height + 'px'
        }
      } else {
        style.top = '-1000px',
        this.elCoordinates = null,
        this.parentCoordinates = null
      }
      return style
    },
    tooltipArrowStyle() {
      let style = {}
      if (this.isActive) {
        style.left = this.parentCoordinates.left + (this.parentCoordinates.width / 2) - 10 + 'px'
        if (this.parentCoordinates.top <= (10 + this.elCoordinates.height)) {
          style.transform = 'rotateX(180deg)'
          style.top = this.parentCoordinates.bottom - 10 + 'px'
        } else {
          style.top = this.parentCoordinates.top - 10 + 'px'
        }
      }
      return style
    }
  }
}
</script>