<template>
  <div id="app">
    <VerticalMenu />
  </div>
</template>

<script>
import VerticalMenu from './components/menu/VerticalMenu.vue'

export default {
  name: 'app',
  components: {
    VerticalMenu
  }
}
</script>

<style lang="scss">
body {
  background-image: linear-gradient(to right, #0a2896, #1750c6 97%, #1851c7);
  font-family: 'Arial', 'sans-serif';
  font-weight: bold;
}
#app {
}
</style>
