<template>
  <div class="vm-bottom__person">
    <div class="menu-item-wrap" v-on:click="popup">
      <div class="menu-item" :class="{ active: isActive }">
        <div class="menu-item__icon">
          <div class="person-icon"></div>
        </div>
        <transition name="widen-item">
          <span v-if="widenItem && person" class="menu-item__name">{{person.displayname}}</span>
        </transition>
      </div>
    </div>
    <popup></popup>
  </div>
</template>
<script>
const popup = {
  actionTitle: 'Выход из системы',
  main: 'Хотите выйти из аккаунта?',
  actions: {
    apply: {
      actionName: 'нет, останусь'
    },
    reject: {
      actionName: 'да'
    }
  }
}

export default {
  props: {
    person: Object,
    widenItem: Boolean,
  },
  data() {
    return {
      isActive: false,
      popupData: popup
    }
  },
  created() {
    this.$eventHub.$on('active-person', active => {
      this.isActive = active
    })
  },
  methods: {
    popup() {
      this.$eventHub.$emit('person-popup', this.popupData)
    }
  }
}
</script>