<template>
  <div class="cy-select" :style="selectStyle">
    <div class="cy-select__item" v-for="(cy, i) in cyData" :key="cy.code" :class="{active: i === picked}">
      <input type="radio" :value="i" v-model="picked" :id="`${cy.name}_${i}`">
      <label @click="isActive = !isActive" :for="`${cy.name}_${i}`">
        <div class="item__icon-down" v-if="i === picked"><i class="icon-arrow-down"></i></div>
        <div class="item__code" v-else>{{cy.code}}</div>
        <div class="item__icon-cur"><i :class="cy.icon"></i></div>
      </label>
    </div>
  </div>
</template>
<script>
const currencies = [{
    name: 'Rouble',
    code: 'RUB',
    icon: 'icon-rub'
  },
  {
    name: 'Euro',
    code: 'EUR',
    icon: 'icon-eur'
  },
  {
    name: 'Swiss frank',
    code: 'CHF',
    icon: 'icon-chf'
  },
  {
    name: 'British pound',
    code: 'GBR',
    icon: 'icon-gbr'
  },
  {
    name: 'Dollar',
    code: 'USD',
    icon: 'icon-usd'
  },
]
export default {
  name: 'cy-select',
  data() {
    return {
      cyData: currencies,
      picked: 0,
      isActive: false
    }
  },
  computed: {
    selectStyle() {
      if (this.isActive) {
        return {
          height: 28 * this.cyData.length + 'px',
          'box-shadow': '0 6px 38px 0 rgba($black, 0.36)',
          background: '#a2d9ee'
        }
      } else {
        return {
          height: 28 + 'px',
        }
      }
    }
  }
}
</script>