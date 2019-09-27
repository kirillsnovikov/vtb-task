<template>
  <div class="cy-select" :style="selectStyle">
    <div class="cy-select__item" v-for="(cy, i) in cyData" :key="cy.code" :class="{active: cy.code === picked}">
      <input type="radio" :value="cy.code" v-model="picked" :id="`${cy.name}_${i}`">
      <label @click="isActive = !isActive" :for="`${cy.name}_${i}`">
        <div class="item__icon-down" v-if="cy.code === picked">
          <i class="icon-arrow-down"></i>
        </div>
        <div class="item__code" v-else>{{cy.code}}</div>
        <div class="item__icon-cur">
          <i :class="cy.icon"></i>
          <!-- <icon-base :iconName="cy.icon"> -->
            <!-- <component :is="cy.icon"></component> -->
          <!-- </icon-base> -->
        </div>
      </label>
    </div>
  </div>
</template>
<script>
import IconBase from '@/components/utils/IconBase.vue'
import IconRur from '@/components/utils/icons/currencies/IconRur.vue'
import IconEur from '@/components/utils/icons/currencies/IconEur.vue'
import IconGbr from '@/components/utils/icons/currencies/IconGbr.vue'
import IconUsd from '@/components/utils/icons/currencies/IconUsd.vue'
import IconChf from '@/components/utils/icons/currencies/IconChf.vue'
const currencies = [{
    name: 'Rouble',
    code: 'RUR',
    icon: 'icon-rur'
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
  components: {
    IconBase,
    IconRur,
    IconEur,
    IconGbr,
    IconUsd,
    IconChf,
  },
  data() {
    return {
      cyData: currencies,
      picked: 'RUR',
      isActive: false
    }
  },
  watch: {
    picked(newVal) {
      this.$emit('cy-pick', newVal)
      console.log(newVal)
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