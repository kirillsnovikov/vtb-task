<template>
  <div class="sr-registration">
    <div class="tabs-registration">
      <div class="tabs-registration__item" v-for="tab in tabs">
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
// import PopupSubject from '@/components/popups/PopupSubject.vue'

const dataRegistration = {
  tabs: [
    { name: 'Печать справок' },
    { name: 'Печать графика платежей' },
    { name: 'Печать выписки' },
  ]
}
export default {
  name: 'sr-registration',
  props: {
    popupData: Object
  },
  components: {
    // PopupSubject
  },
  data() {
    return {
      tabs: dataRegistration.tabs,
      // isActive: false
    }
  },
  methods: {
    showPopup() {
      //this.$root.$children[0].$children[5].show()
      this.$children[0].show();
    },
    // show() {
    //   let body = document.getElementById('_swecontent')
    //   console.log(body)
    //     body.classList.add('blur-content')
    //     body.classList.add('sss')
    //     body.classList.add('blur-content2')
    //     body.classList.add('blur-content3')
    //     body.classList.add('blur-content4')
    //     body.classList.add('blur-content5')
    // }
  }
}
</script>