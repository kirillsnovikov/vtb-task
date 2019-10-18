<template>
  <div id="vm" class="vm">
    <div class="vm__layout">
      <div class="vm__layout__left" :class="{ widen: isWiden }">
        <div class="vm-header" @click="activeMenu">
          <transition name="widen-logo" mode="out-in">
            <div class="logo" v-if="!isWiden" key="small"></div>
            <div class="logo-big" v-else key="big"></div>
          </transition>
        </div>
        <div class="vm-search">
          <div class="menu-item-wrap" @click="activeSearch">
            <div class="menu-item" :class="{ active: isActiveSearch}">
              <div class="menu-item__icon">
                <div class="search-icon"></div>
              </div>
              <transition name="widen-item">
                <span v-if="isWiden" class="menu-item__name">Поиск</span>
              </transition>
            </div>
          </div>
          <Tooltip ref="tooltip" position="right" :data="startTooltip" :isShow="false" />
        </div>
        <div class="vm-body">
          <VerticalMenuList :items="dataSetJson.mainMenu" :widenItem="isWiden" v-on:activeRightMenu="activeRightMenu" :isActiveRight="isActiveRight" />
        </div>
        <div class="vm-bottom">
          <VerticalMenuList :items="dataSetJson.bottomMenu" :widenItem="isWiden" v-on:activeRightMenu="activeRightMenu" :isActiveRight="isActiveRight" />
          <VerticalMenuPerson :person="employee" :widenItem="isWiden" :active="isActivePerson" />
        </div>
      </div>
      <div class="vm__layout__right">
        <transition name="right-menu">
          <div class="vm-right" v-if="isActiveRight">
            <VerticalMenuRight :items="vmRightItems" v-on:gotoViewAndHide="hideAll" />
          </div>
        </transition>
      </div>
      <div class="vm__layout__search">
        <transition name="search-menu">
          <div class="vm-search-form" v-if="isActiveSearch">
            <VerticalMenuSearch v-on:activeSearch="activeSearch" />
            <Tooltip position="right-top" :data="searchTooltip" :isShow="isActiveSearch" />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import VerticalMenuList from './VerticalMenuList.vue'
import VerticalMenuPerson from './VerticalMenuPerson.vue'
import VerticalMenuRight from './VerticalMenuRight.vue'
import VerticalMenuSearch from './VerticalMenuSearch.vue'
import Tooltip from '@/components/tooltip/Tooltip.vue'
import dataTooltip from '@/components/tooltip/dataTooltip'

export default {
  name: 'vertical-menu',
  props: {
    dataSetJson: Object
  },
  components: {
    VerticalMenuList,
    VerticalMenuPerson,
    VerticalMenuRight,
    VerticalMenuSearch,
    Tooltip,
  },
  data() {
    return {
      vmRightItems: null,
      isActiveRight: false,
      isActiveSearch: false,
      isActivePerson: false,
      isWiden: false,
      mainContent: null,
      clickListen: null,
      listItems: null,
      employee: this.dataSetJson.employee,
      startTooltip: dataTooltip.startTooltip,
      searchTooltip: dataTooltip.searchTooltip,
    }
  },
  created() {
    this.$eventHub.$on('active-person', active => {
      this.deactivateListItems()
      this.isActivePerson = active
      this.blurContent
    })
  },
  mounted() {
    this.mainContent = document.getElementById('_swecontent')
    // this.listItems = document.querySelectorAll('.menu-item-wrap .menu-item')
  },
  updated() {
    this.blurContent
    this.$refs.tooltip.configurateTip()
  },
  computed: {
    blurContent() {
      if (this.isWiden || this.isActiveRight || this.isActiveSearch || this.isActivePerson) {
        this.mainContent.addEventListener('click', this.hideAll)
        this.mainContent.classList.add('blur')
      } else {
        this.mainContent.removeEventListener('click', this.hideAll)
        this.mainContent.classList.remove('blur')
      }
    }
  },
  methods: {
    activeMenu() {
      this.isWiden = !this.isWiden
      if (this.isActiveRight || this.isActiveSearch) {
        this.hideAll()
      }
    },
    activeRightMenu(data) {
      this.vmRightItems = data
      this.isActiveRight = (data) ? data.isActive : false
      this.isActiveSearch = false
    },
    hideAll() {
      this.isWiden = false
      this.isActiveRight = false
      this.isActiveSearch = false
      this.blurContent
      this.deactivateListItems()
    },
    activeSearch() {
      this.deactivateListItems()
      this.isActiveSearch = !this.isActiveSearch
      this.isActiveRight = false
      if (!this.isActiveSearch) {
        this.isWiden = false
      }
    },
    deactivateListItems() {
      this.listItems = document.querySelectorAll('.menu-item-wrap .menu-item')
      if (this.listItems && this.listItems.length) {
        this.listItems.forEach(el => {
          el.classList.remove('active')
        })
      }
    }
  }
}
</script>