<template>
  <div v-if="isShow" class="popup-wrap">
    <div class="popup-main">
      <div class="popup-card">
        <div class="popup-card__close" @click="hide">
          <icon-base :strokeColor="'currentColor'">
            <icon-close></icon-close>
          </icon-base>
        </div>
        <div class="popup-card__header close-popup-header">
          <div v-if="data.actionTitle" class="popup-card__header__title">{{data.actionTitle}}</div>
        </div>
        <div class="popup-card__body" v-if="data.main">
          <div class="popup-card__body__text">{{data.main}}</div>
        </div>
        <div class="popup-card__actions">
          <div class="btn-fill btn" @click="onClientCard">{{'К карточке клиента' | toupper}}</div>
          <div class="btn-fill btn" @click="popupSubject">{{'Новая тематика' | toupper}}</div>
        </div>
        <div class="popup-card__footer"></div>
      </div>
      <div class="popup-layout"></div>
    </div>
  </div>
</template>
<script>
import IconBase from '@/components/utils/IconBase.vue'
import IconClose from '@/components/utils/icons/IconClose.vue'
export default {
  name: 'popup-subject-finish',
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
    this.$eventHub.$on('popup-finish-thematic', data => {
      this.data = data
      this.show()
    })
  },
  beforeDestroy() {
    this.$eventHub.$off('popup-finish-thematic')
  },
  methods: {
    show() {
      this.isShow = true
      // this.blurContent()
    },
    hide() {
      this.isShow = false
      // this.blurContent()
    },
    blurContent() {
      if (this.isShow) {
        document.getElementById('_swecontent').classList.add('blur')
      } else {
        document.getElementById('_swecontent').classList.remove('blur')
      }
    },
    popupSubject() {
      this.hide()
      console.log('$emit(\'popup-subject\')')
      this.$eventHub.$emit('popup-subject')
    },
    onClientCard() {
      console.log('$emit(\'on-client-card\')')
      this.$eventHub.$emit('on-client-card')
    }
  }
}
</script>