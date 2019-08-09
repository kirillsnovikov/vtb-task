<template>
  <div class="menu-item-wrap" v-on:click="popup" @click="isActive = !isActive">
    <div class="menu-item" :class="{ active: isActive }">
      <div class="menu-item__icon person-icon"></div>
      <transition name="widen-item">
        <span v-if="widenItem" class="menu-item__name">{{person.firstname}}</span>
      </transition>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '@/main'

  export default {
    components: {
    },
    props: {
      person: Object,
      widenItem: Boolean,
    },
    data() {
      return {
        popupData: {
          actionTitle: 'Выход из системы?',
          main: 'какой-то текст',
          actions: {
            apply: {
              actionName: 'Нет, останусь',
              method: 'SiebelApp.S_App.LogOff'
            },
            reject: {
              actionName: 'Да',
              method: 'SiebelApp.S_App.LogOff'
            }
          },
        },
        isActive: false
      }
    },
    methods: {
      popup() {
        eventBus.$emit('showPopup', this.popupData)
      }
    }
  }
</script>