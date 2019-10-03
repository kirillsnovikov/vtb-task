<template>
  <div class="tooltip" v-if="data && isShow && data.isActive" :style="tooltipStyle">
    <div class="tooltip__header" v-if="data.title">
      <div class="tooltip__header__left">
        <div class="tooltip__header__left__icon">
          <!-- <icon-base :strokeColor="'currentColor'" :width="16" :height="24">
            <icon-idea></icon-idea>
          </icon-base> -->
        </div>
        <div class="tooltip__header__left__title" :style="titleStyle">{{data.title}}</div>
      </div>
    </div>
    <div class="tooltip__body">
      <div class="tooltip__body__text" v-if="data.text">
        {{data.text}}
      </div>
      <div class="tooltip__body__list" v-if="data.list">
        <ul class="tooltip-list">
          <li class="tooltip-list__items" v-for="(tooltips, i) in data.list">
            <div class="tooltip-list__items__item" v-for="(tooltip, i) in tooltips">
              <div class="tooltip-list__items__item__value">{{tooltip}}</div>
              <span v-if="(tooltips.length - 1) > i">+</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tooltip-arrow" :style="tooltipArrowStyle"></div>
    <div class="tooltip-close-btn" @click="data.isActive = false" :style="closeStyle">
      <icon-base :strokeColor="'currentColor'" :width="18" :height="18">
        <icon-close></icon-close>
      </icon-base>
    </div>
  </div>
</template>
<script>
import IconBase from '@/components/utils/IconBase.vue'
import IconClose from '@/components/utils/icons/IconClose.vue'
import IconIdea from '@/components/utils/icons/IconIdea.vue'
export default {
  name: 'tooltip',
  components: {
    IconBase,
    IconClose,
    IconIdea,
  },
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
        left: '-1000px',
        padding: 0,
      },
      tooltipArrowStyle: {
        top: '-1000px',
        left: '-1000px'
      },
      titleStyle: {
        'width': this.data.titleWidth,
        'margin-top': null
      },
      closeStyle: {
        top: '16px',
        right: '16px'
      }
    }
  },
  mounted() {
    if (this.data.name === 'startTooltip') {
      this.tooltipStyle.padding = '12px 25px 12px 20px'
      this.titleStyle['margin-top'] = '5px'
      this.closeStyle.top = '10px'
      this.closeStyle.right = '12px'
    } else if (this.data.name === 'searchTooltip') {
      this.tooltipStyle.padding = '20px 14px'
    }
    this.configurateTip()
  },
  methods: {
    configurateTip() {
      setTimeout(() => {
        if (this.isShow && this.data.isActive) {
          this.elCoordinates = this.$el.getBoundingClientRect()
          this.parentCoordinates = this.$el.parentNode.getBoundingClientRect()
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
      }, 1000)
    }
  }
}
</script>