<template>
    <div id="vm" class="vm">
        <div class="vm__layout">
            <div class="vm__layout__left" :class="{ widen: isWiden }">
                <div class="vm-header" @click="isWiden = !isWiden">
                    <transition name="widen-logo" mode="out-in">
                        <div class="logo" v-if="!isWiden" key="small"></div>
                        <div class="logo-big" v-else key="big"></div>
                    </transition>
                </div>
                <div class="vm-search">
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
                    <VerticalMenuList :items="dataSetJson.mainMenu" :widenItem="isWiden"/>
                </div>
                <div class="vm-bottom">
                    <VerticalMenuList :items="dataSetJson.bottomMenu" :widenItem="isWiden"/>
                    <VerticalMenuPerson v-bind:person="dataSetJson.person" :widenItem="isWiden"/>
                </div>
            </div>
            <div class="vm__layout__right">
                <transition name="right-menu">
                    <div class="vm-right" v-if="isActiveRight">
                        <VerticalMenuRight :items="vmRightItems"/>
                    </div>
                </transition>
            </div>
            <div class="vm__layout__search">
                <div class="vm-search-form" v-if="isActiveSearch">
                    <VerticalMenuSearch />
                </div>
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
        props: ['dataSetJson'],
        components: {
            VerticalMenuList,
            VerticalMenuPerson,
            VerticalMenuRight,
            VerticalMenuSearch,
        },
        created() {
            this.$on('openRightMenu', popupData => {
                this.vmRightItems = popupData
                this.isActiveRight = popupData.isActive
            })
        },
        data() {
            return {
                vmRightItems: null,
                isActiveRight: false,
                isActiveSearch: true,
                isWiden: false
            }
        },
    }
</script>
