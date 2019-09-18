<template>
  <div class="tooltip" v-if="data && isShow && data.isActive" :style="tooltipStyle">
    <div class="tooltip__header" v-if="data.title">
      <div class="tooltip__header__icon"></div>
      <div class="tooltip__header__title">{{data.title}}</div>
      <div class="tooltip__header__close-btn" @click="data.isActive = false"></div>
    </div>
    <div class="tooltip__body">
      <div class="tooltip__body__text" v-if="data.text">
        {{data.text}}
      </div>
      <div class="tooltip__body__list" v-if="data.list">
        <ul class="tooltip-list">
          <li class="tooltip-list__item" v-for="(item, i) in data.list">
            <div class="tooltip-list__item__value">{{item}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tooltip-arrow" :style="tooltipArrowStyle"></div>
  </div>
</template>
<script>
export default {
  name: 'tooltip',
  props: {
    data: Object,
    isShow: Boolean
  },
  data() {
    return {
      elCoordinates: null,
      parentCoordinates: null,
      tooltipStyle: {
        top: '-1000px',
        left: '-1000px'
      },
      tooltipArrowStyle: {
        top: '-1000px',
        left: '-1000px'
      }
      // tooltipArrowStyle: {}
    }
  },
  mounted() {
    this.configurateTip()
  },
  methods: {
    configurateTip() {
      setTimeout(() => {
        if (this.isShow) {
          this.elCoordinates = this.$el.getBoundingClientRect()
          this.parentCoordinates = this.$el.parentNode.getBoundingClientRect()
          console.log(this.parentCoordinates)
          if (this.parentCoordinates && this.$el.attributes.position.value === 'right') {
            this.tooltipStyle.top = (this.parentCoordinates.top + this.parentCoordinates.height / 2) - (this.elCoordinates.height / 2) + 'px'
            this.tooltipStyle.left = this.parentCoordinates.right + 30 + 'px'
            this.tooltipArrowStyle.top = (this.elCoordinates.height / 2) - 10 + 'px'
            this.tooltipArrowStyle.left = -20 + 'px'
          } else if (this.parentCoordinates && this.$el.attributes.position.value === 'right-top') {
            this.tooltipStyle.top = ((this.parentCoordinates.top === 0) ? 10 : 0) + this.parentCoordinates.top + 'px'
            this.tooltipStyle.left = this.parentCoordinates.right + 30 + 'px'
            this.tooltipArrowStyle.top = (this.elCoordinates.height / 2) - 10 + 'px'
            this.tooltipArrowStyle.left = -20 + 'px'
          }
        }
      }, 300)
    },
    hideTip(e) {
      console.log(e)
    },
  }
}
</script>