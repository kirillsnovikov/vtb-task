<template>
  <div class="tooltip-sm" :style="tooltipStyle">
    <div class="tooltip-sm__body">{{data.text}}</div>
    <div class="tooltip-sm-arrow" :style=""></div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object,
    isShow: Boolean
  },
  data() {
    return {
      elCoordinates: null,
      parentCoordinates: null,
      isActive: this.isShow,
      tooltipStyle: {
        top: '-1000px'
      }
    }
  },
  mounted() {
    this.configurateTip()
  },
  methods: {
    configurateTip() {
      if (this.isShow) {
        this.elCoordinates = this.$el.getBoundingClientRect()
        this.parentCoordinates = this.$el.parentNode.getBoundingClientRect()
        console.log(this.elCoordinates.height)
        if (this.parentCoordinates.top <= (10 + this.elCoordinates.height)) {
          this.tooltipStyle.top = window.pageYOffset + this.parentCoordinates.top + 10 + this.parentCoordinates.height + 'px'
        } else {
          this.tooltipStyle.top = window.pageYOffset + this.parentCoordinates.top - 10 - this.elCoordinates.height + 'px'
        }

        // if (this.parentCoordinates.) {}
        // console.log(this.$el.getBoundingClientRect(), this.parentCoordinates)
      }
    }
  },
  // computed: {
  //   tooltipStyle() {}
  // }
}
</script>