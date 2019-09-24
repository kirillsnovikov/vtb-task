<template>
  <div class="sr-registration">
    <div class="tabs-registration">
      <div class="tabs-registration__item" v-for="(tab, i) in tabs" :key="i" @click="OnStartThematic(tab.parent, tab.name)">
        <div class="tabs-registration__item__value">
          {{tab.name | capitalize}}
        </div>
      </div>
    </div>
    <div class="btn-fill" @click="showPopup">{{'выбрать тематику' | toupper}}</div>
    <popup-subject :popup-data="popupData"></popup-subject>
  </div>
</template>
<script>
const dataRegistration = {
  tabs: [
    { parent: "Быстрое обслуживание", name: 'Заказ справок' },
    { parent: "Быстрое обслуживание", name: 'Печать графика платежей' },
    { parent: "Быстрое обслуживание", name: 'Печать выписок' },
  ]
}
export default {
  name: 'sr-registration',
  props: {
    popupData: Object
  },
  data() {
    return {
      tabs: dataRegistration.tabs,
    }
  },
  methods: {
    showPopup() {
      this.$children[0].show();
    },
    OnStartThematic(parent, child) {
      this.$eventHub.$emit('on-start-thematic', parent, child)
    },
  }
}
</script>