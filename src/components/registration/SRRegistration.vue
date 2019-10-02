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
    <popup-subject-finish></popup-subject-finish>
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
const popup = {
  actionTitle: 'Тематика завершена',
  main: 'Выберите новую тематику, другой раздел или завершите работу с клиентом',
}
export default {
  name: 'sr-registration',
  props: {
    popupData: Object
  },
  data() {
    return {
      tabs: dataRegistration.tabs,
      dataPopupFinish: popup,
      isStartThematic: false
    }
  },
  methods: {
    selectThematic() {
      this.$eventHub.$emit('popup-subject')
    },
    setCurrentThematic(parent, child) {
      if (parent && child) {
        this.isStartThematic = true
      } else {
        this.isStartThematic = false
      }
    },
    setFinishThematicComplete() {
      this.$eventHub.$emit('popup-finish-thematic', this.dataPopupFinish)
    },
    OnStartThematic(parent, child) {
      this.$eventHub.$emit('on-start-thematic', parent, child)
    },
    OnFinishThematic(parent, child) {
      this.$eventHub.$emit('on-finish-thematic', parent, child)
      // this.setFinishThematicComplete()
    },
  }
}
</script>