<template>
  <ul class="vm-body__list">
    <li v-for="(item, i) in items" @click="rightMenu(i)">
      <a href="#">
        <div class="menu-item-wrap" >
          <div class="menu-item" :class="{ active: itemActive === i && isActive}">
            <div class="menu-item__icon"><i v-if="item.tabIcon" :class="item.tabIcon"></i></div>
            <transition name="widen-item">
              <span v-if="widenItem" class="menu-item__name">{{item.name | capitalize}}</span>
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
        isActive: false,
        itemActive: null,
      }
    },
    methods: {
      rightMenu(i) {
        if (this.itemActive && this.itemActive === i) {
          this.itemActive = i
          this.isActive = !this.isActive
        } else if (this.itemActive && this.itemActive !== i) {
          this.itemActive = i
          this.isActive = true
        } else {
          this.itemActive = i
          this.isActive = !this.isActive
        }
        this.items[i].rightMenu.isActive = this.isActive
        this.$parent.$emit('openRightMenu', this.items[i].rightMenu)
      }
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