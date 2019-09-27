<template>
  <div class="sr-registration">
    <div class="tabs-registration" v-if="!isStartThematic">
      <div class="tabs-registration__item" v-for="(tab, i) in tabs" :key="i" @click="OnStartThematic(tab.parent, tab.name)">
        <div class="tabs-registration__item__value">
          {{tab.name | capitalize}}
        </div>
      </div>
    </div>
    <div class="btn-registration" @click="OnFinishThematic" v-else>
      <div class="btn-fill">
        <span class="icon"></span>
        <span class="text">{{'завершить тематику' | toupper}}</span>
      </div>
    </div>
    <div class="btn-sr" @click="selectThematic">
      <span class="text" v-if="!isStartThematic">{{'выбрать тематику' | toupper}}</span>
      <span class="text" v-else>{{'новая тематика' | toupper}}</span>
    </div>
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
      isStartThematic: false
    }
  },
  methods: {
    selectThematic() {
      this.$eventHub.$emit('popup-subject')
    },
    setCurrentThematic(parent, child) {
      if (parent, child) {
        this.isStartThematic = true
      }
    },
    setFinishThematic() {
      this.isStartThematic = false
    },
    OnStartThematic(parent, child) {
      this.$eventHub.$emit('on-start-thematic', parent, child)
    },
    OnFinishThematic(parent, child) {
      this.$eventHub.$emit('on-finish-thematic', parent, child)
    },
  }
}
</script>