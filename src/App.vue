<template>
  <div id="app">
    <section class="main-section">
      <div class="content"></div>
    </section>
    <VerticalMenu />
    <Popup />
  </div>
</template>

<script>
  import VerticalMenu from './components/menu/VerticalMenu.vue'
  import Popup from './components/popups/Popup.vue'

  export default {
    name: 'app',
    components: {
      VerticalMenu,
      Popup
    }
  }
</script>
