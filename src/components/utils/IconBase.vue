<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 20 20" :aria-labelledby="iconName" role="presentation">
    <!-- <title lang="en">{{iconName}}</title> -->
    <g :fill="iconColor" :stroke="strokeColor">
      <slot />
    </g>
  </svg>
</template>
<script>
export default {
  name: 'icon-base',
  props: {
    iconName: {
      type: String,
      default: 'icon'
    },
    width: {
      type: [Number, String],
      default: 20
    },
    height: {
      type: [Number, String],
      default: 20
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    strokeColor: {
      type: String,
      default: ''
    }
  }
}
</script>