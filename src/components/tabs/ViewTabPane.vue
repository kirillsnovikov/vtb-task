<template>
  <div class="tabs-pane">
    <div class="tabs-pane__item" v-for="(tab, i) in tabs" @click="clickOnTab(tab)" :class="{active: tab.active}" :key="`${tab.captionName}_${i}`">
      <div class="tabs-pane__item__value">
        {{tab.captionName | capitalize}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'view-tab-pane',
    props: {
      tabs: [Array, Object]
    },
    methods: {
      clickOnTab(tab) {
        this.$eventHub.$emit('click-on-tab', tab)
      }
    }
  }
</script>
