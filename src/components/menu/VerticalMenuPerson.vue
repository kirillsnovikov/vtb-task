<template>
  <div class="vm-bottom__person">
    <div class="menu-item-wrap" v-on:click="show">
      <div class="menu-item" :class="{ active: isActive }">
        <div class="menu-item__icon">
          <div class="person-icon"></div>
        </div>
        <transition name="widen-item">
          <span v-if="widenItem && person" class="menu-item__name">{{person.displayname}}</span>
        </transition>
      </div>
    </div>

    <div v-if="isActive" class="popup-wrap">
      <div class="popup-main">
        <div class="popup-card">
          <div class="popup-card__close" @click="show"><i class="icon-cross"></i></div>
          <div class="popup-card__header close-popup-header">
            <div class="popup-card__header__title">Выход из системы</div>
          </div>
          <div class="popup-card__body">
            <div class="popup-card__body__text">Хотите выйти из аккаунта?</div>
          </div>
          <div class="popup-card__actions">
            <div class="btn-empty" @click="show">НЕТ, ОСТАНУСЬ</div>
            <div class="btn-fill" @click="logoff">ДА</div>
          </div>
          <div class="popup-card__footer"></div>
        </div>
        <div class="popup-layout"></div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    props: {
      person: Object,
      widenItem: Boolean
    },
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      // popup() {
      //   this.isActive = !this.isActive;
      // },

      logoff() {
        SiebelApp.S_App.LogOff();
      },

      show() {
        this.isActive = !this.isActive
        console.log('show')
        if (this.isActive) {
          document.getElementById('_swecontent').classList.add('blur')
        } else {
          document.getElementById('_swecontent').classList.remove('blur')
        console.log('show')
        }
      }

    }
  }
</script>
