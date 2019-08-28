<template>
  <div class="tabs-pane">
    <div class="tabs-pane__item" v-for="tab in tabs">
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
      dataSetJson: Object
    },
    data() {
      return {
        tabs: this.dataSetJson.mainMenu.tasks.links
      }
    },
    mounted() {
      // console.log(this.tabs)
    }
  }
</script>