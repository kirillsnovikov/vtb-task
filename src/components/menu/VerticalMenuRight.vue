<template>
  <ul class="vm-right__list">
    <li v-for="(item, i) in items">
      <a href="#">
        <div class="menu-item-wrap" >
          <div class="menu-item" :class="{ active: isActive === i}" @click="isActive = i">
            <div v-if="item.icon"class="menu-item__icon"><i :class="item.icon"></i></div>
            <span class="menu-item__name">{{item.captionName | capitalize}}</span>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      items: null
    },
    data() {
      return {
        isActive: null
      }
    },
    mounted() {
      console.log(this.items)
    },
    filters: {
      capitalize(str) {
        if (!str) return ''
          str = str.toString()
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    }
  }
</script>
