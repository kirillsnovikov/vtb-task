<template>
  <ul class="vm-right__list">
    <li v-for="(item, i) in items">
      <a href="#">
        <div class="menu-item-wrap" >
          <div class="menu-item" :class="{ active: isActive === item.captionName}" @click="myMethod(item.captionName)">
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
    methods: {
      myMethod(name) {
        this.isActive = name
        alert('Вызов метода для меню ' + name)
      }
    }
  }
</script>
