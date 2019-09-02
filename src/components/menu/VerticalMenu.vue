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
        <div class="vm-search"  @click="activeSearch">
          <div class="menu-item-wrap">
            <div class="menu-item">
              <div class="menu-item__icon"><i class="icon-search"></i></div>
              <transition name="widen-item">
                <span v-if="isWiden" class="menu-item__name">Поиск</span>
              </transition>
            </div>
          </div>
        </div>
        <div class="vm-body">
          <VerticalMenuList
          :items="dataSetJson.mainMenu"
          :widenItem="isWiden"
          v-on:activeRightMenu="activeRightMenu"
          :isActiveRight="isActiveRight"/>
        </div>
        <div class="vm-bottom">
          <VerticalMenuList
          :items="dataSetJson.bottomMenu"
          :widenItem="isWiden"
          v-on:activeRightMenu="activeRightMenu"
          :isActiveRight="isActiveRight"/>
          <VerticalMenuPerson :person="employee" :widenItem="isWiden"/>
        </div>
      </div>
      <div class="vm__layout__right">
        <transition name="right-menu">
          <div class="vm-right" v-if="isActiveRight">
            <VerticalMenuRight :items="vmRightItems" v-on:gotoViewAndHide="hideAll"/>
          </div>
        </transition>
      </div>
      <div class="vm__layout__search">
        <transition name="search-menu">
          <div class="vm-search-form" v-if="isActiveSearch">
            <VerticalMenuSearch v-on:activeSearch="activeSearch"/>
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
    },
    data() {
      return {
        vmRightItems: null,
        isActiveRight: false,
        isActiveSearch: false,
        isActivePopup: false,
        isWiden: false,
        mainContent: null,
        clickListen: null,
        employee: this.dataSetJson.employee
      }
    },
    mounted() {
      this.mainContent = document.getElementById('_swecontent')
    },
    updated() {
      this.blurContent
      console.log('updated')
    },
    computed: {
      blurContent() {
        if (this.isWiden || this.isActiveRight || this.isActiveSearch) {
          this.mainContent.addEventListener('click', this.hideAll)
          this.mainContent.classList.add('blur-content')
        } else {
          this.mainContent.removeEventListener('click', this.hideAll)
          this.mainContent.classList.remove('blur-content')
          // console.log('hidehide')
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
        this.isActiveRight = data.isActive
        this.isActiveSearch = false
      },
      hideAll() {
        this.isWiden = false
        this.isActiveRight = false
        this.isActiveSearch = false
        this.blurContent
      },
      activeSearch() {
        this.isActiveSearch = !this.isActiveSearch
        this.isActiveRight = false
      }
    }
  }
</script>
