<template>
  <div v-if="isShow" class="popup-wrap">
    <div class="popup-main">
      <div class="popup-card">
        <div class="popup-card__close" @click="show">
          <!-- <div class="popup-card__close__icon"></div> -->
          <icon-base :strokeColor="'currentColor'"><icon-close></icon-close></icon-base>
        </div>
        <div class="popup-card__header close-popup-header">
          <div v-if="data.actionTitle" class="popup-card__header__title">{{data.actionTitle}}</div>
        </div>
        <div class="popup-card__body" v-if="data.main">
          <div class="popup-card__body__text">{{data.main}}</div>
        </div>
        <div class="popup-card__actions" v-if="data.actions">
          <div class="btn-empty btn" @click="show">{{data.actions.apply.actionName | toupper}}</div>
          <div class="btn-fill btn" @click="logoff">{{data.actions.reject.actionName | toupper}}</div>
        </div>
        <div class="popup-card__footer"></div>
      </div>
      <div class="popup-layout">
        <!-- <div class="popup-layout__dark"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import IconBase from '@/components/utils/IconBase.vue'
import IconClose from '@/components/utils/icons/IconClose.vue'
export default {
  name: 'popup',
  components: {
    IconBase,
    IconClose
  },
  data() {
    return {
      data: Object,
      isShow: false,
    }
  },
  created() {
    this.$eventHub.$on('person-popup', data => {
      this.data = data
      this.show()
    })
  },
  beforeDestroy() {
    this.$eventHub.$off('person-popup')
  },
  methods: {
    logoff() {
      SiebelApp.S_App.LogOff();
    },
    show() {
      this.isShow = !this.isShow
      this.$eventHub.$emit('active-person', this.isShow)
      if (this.isShow) {
        document.getElementById('_swecontent').classList.add('blur')
      } else {
        document.getElementById('_swecontent').classList.remove('blur')
      }
    }
  },
}
</script>