<template>
  <div class="tabs-pane-sm">
    <div v-for="(tab, i) in tabs">
      <div class="tabs-pane-sm__item" v-if="!tab.hide" @click="clickOnTab(i)" :class="{'active': tab.active, 'readonly': tab.readOnly}" :key="`${tab.captionName}_${i}`">
        <div class="tabs-pane-sm__item__value">
          {{tab.captionName | capitalize}}
        </div>
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
    clickOnTab(i) {
      let tab = this.tabs[i]
      if (tab.readOnly) {
        return
      }
      tab.active = true
      this.$eventHub.$emit('click-on-tab', tab)
    }
  }
}
</script>