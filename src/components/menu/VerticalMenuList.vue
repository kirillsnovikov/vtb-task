<template>
  <ul class="vm-body__list">
    <li v-for="(item, i) in items">
      <a href="#">
        <div class="menu-item-wrap">
          <div class="menu-item" @click="rightMenu(i)" :class="{active: i === itemActive}">
            <div class="menu-item__icon"><img v-if="item.tabIcon" :src="item.tabIcon"></img></div>
            <transition name="widen-item" mode="in-out">
              <span v-if="widenItem" class="menu-item__name" :key="item.captionName">{{item.captionName | capitalize}}</span>
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
  created() {
    this.$eventHub.$on('item-deactivate', () => {
      this.itemActive = null
    })
  },
  beforeDestroy() {
    this.$eventHub.$off('item-deactivate')
  },
  methods: {
    rightMenu(i) {
      if (this.itemActive !== i) {
        this.$parent.deactivateListItems()
        this.$eventHub.$emit('item-deactivate')
      }
      this.itemActive = i

      if (this.items[i] && this.items[i].links) {
        this.items[i].links.isActive = true
        this.$emit('activeRightMenu', this.items[i].links)
      }
    }
  }
}
</script>