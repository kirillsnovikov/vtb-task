<template>
    <div id="vm" class="vm">
        <div class="vm__layout">
            <div class="vm__layout__left" :class="{ widen: isWiden }">
                <div class="vm-header" @click="isWiden = !isWiden">
                    <transition name="widen-logo">
                        <div class="logo-big" v-if="isWiden"></div>
                    </transition>
                    <transition name="widen-logo">
                        <div class="logo" v-if="!isWiden"></div>
                    </transition>
                </div>
                <div class="vm-search">
                    <div class="menu-item-wrap">
                        <div class="menu-item">
                            <div class="search-icon menu-item__icon"></div>
                            <transition name="widen-item">
                                <span v-if="isWiden" class="menu-item__name">Поиск</span>
                            </transition>
                        </div>
                    </div>
                </div>
                <div class="vm-body">
                    <VerticalMenuList :items="json.items" :widenItem="isWiden"/>
                </div>
                <div class="vm-bottom">
                    <VerticalMenuList :items="json.items" :widenItem="isWiden"/>
                    <VerticalMenuPerson v-bind:person="json.person" :widenItem="isWiden"/>
                </div>
            </div>
            <div class="vm__layout__right"></div>
        </div>
    </div>
</template>

<script>
    import VerticalMenuList from './VerticalMenuList.vue'
    import VerticalMenuPerson from './VerticalMenuPerson.vue'

    export default {
        // inject: ['popupMethods'],
        components: {
            VerticalMenuList,
            VerticalMenuPerson
        },
        data() {
            return {
                json: {
                    items: {
                        home: 'Главная',
                        client: 'Клиенты',
                    },
                    person: {
                        firstname: 'Алексей',
                        lastname: 'Викторов'
                    }
                },
                show: false,
                isWiden: false
            }
        },
        methods: {
            toggle() {
                let verticalMenuLeft = document.querySelector('#vm .vm__layout__left')
                let verticalMenuItems = document.querySelectorAll('#vm [class*=\'__link__name\']')
                let logo = document.querySelector('#vm .vm-header .logo')

                if (!this.isWiden && !verticalMenuLeft.classList.contains('open-menu')) {
                    verticalMenuLeft.classList.add('open-menu')
                    verticalMenuItems.forEach(function(item) {
                        item.style.opacity = 1
                        item.style.width = 86 + 'px'
                        // item.classList.add('open-item')
                    })
                    logo.classList.add('logo-big')
                    this.isWiden = true
                } else {
                    verticalMenuLeft.classList.remove('open-menu')
                    verticalMenuItems.forEach(function(item) {
                        item.style.opacity = 0
                        item.style.width = 0 + 'px'
                        // item.classList.remove('open-item')
                    })
                    logo.classList.remove('logo-big')
                    this.isWiden = false
                }
            },
        }
    }
</script>