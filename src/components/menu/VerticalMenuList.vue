<template>
  <ul class="vm-body__list">
    <li v-for="(value, item) in items">
      <a href="#">
        <div class="menu-item-wrap" @click="isActive = !isActive">
          <div class="menu-item" :class="{ active: isActive }">
            <div v-bind:class="item + '-icon'" class="menu-item__icon"></div>
            <transition name="widen-item">
              <span v-if="widenItem" class="menu-item__name">{{value}}</span>
            </transition>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      items: Object,
      widenItem: Boolean
    },
    data() {
      return {
        isActive: false
      }
    }
  }
</script>