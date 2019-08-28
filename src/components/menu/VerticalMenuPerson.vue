<template>
  <div class="menu-item-wrap" v-on:click="popup">
    <div class="menu-item" :class="{ active: isActive }">
      <div class="menu-item__icon">
        <div class="person-icon"></div>
      </div>
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
          actionTitle: 'Выход из системы',
          // main: 'Хотите выйти из аккаунта?',
          // actions: {
          //   apply: {
          //     actionName: 'Нет, останусь',
          //     method: 'SiebelApp.S_App.LogOff'
          //   },
          //   reject: {
          //     actionName: 'Да',
          //     method: 'SiebelApp.S_App.LogOff'
          //   }
          // },
          subjects: [
          {
            subjectTitle: 'Финансовое консультирование',
            subjectSubtitles: [
            {
              name: 'Денежные переводы «Кибер Деньги»'
            },
            {
              name: 'Денежные переводы «МОПС»'
            },
            {
              name: 'Денежные суррогаты'
            },
            {
              name: 'Денежный рынок'
            },
            {
              name: 'Деноминация'
            },
            {
              name: 'Деньги'
            },
            {
              name: 'Депозит'
            },
            {
              name: 'Депозит нотариуса'
            },
            {
              name: 'Депозит овернайт'
            },
            {
              name: 'Депозитарий'
            },
            {
              name: 'Валюта вклада'
            },
            {
              name: 'Валютная интервенция'
            },
            {
              name: 'Валютная котировка'
            },
            {
              name: 'Валютная позиция'
            },
            {
              name: 'Валютное законодательство РФ'
            },
            {
              name: 'Валютные вклады'
            },
            ]
          },
          {
            subjectTitle: 'Инвестиции депозитные распоряжения',
            subjectSubtitles: [
            {
              name: 'Валютные войны'
            },
            {
              name: 'Валютные переводы за рубеж'
            },
            {
              name: 'Валютный контроль'
            },
            {
              name: 'Валютный коридор'
            },
            {
              name: 'Кредит без залога'
            },
            {
              name: 'Кредит без поручителей'
            },
            {
              name: 'Кредит без регистрации'
            },
            {
              name: 'Кредит без справок'
            },
            {
              name: 'Кредит безработным'
            },
            {
              name: 'Транзитный валютный счет'
            },
            {
              name: 'Транзитный полис ОСАГО'
            },
            {
              name: 'Трансакция'
            },
            {
              name: 'Трансграничная операция'
            },
            {
              name: 'Транспортная карта'
            },
            {
              name: 'Трансфер-агент'
            },
            ]
          },
          {
            subjectTitle: 'Финансовое консультирование',
            subjectSubtitles: [
            {
              name: 'Траппинг'
            },
            {
              name: 'Акцепт оферты'
            },
            {
              name: 'Акционер банка'
            },
            ]
          },
          ]
        },
        isActive: false
      }
    },
    methods: {
      popup() {
        eventBus.$emit('showPopup', this.popupData)
        this.isActive = !this.isActive
      }
    }
  }
</script>