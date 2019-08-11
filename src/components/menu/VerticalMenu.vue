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
                    <VerticalMenuList :items="json.mainMenu" :widenItem="isWiden"/>
                </div>
                <div class="vm-bottom">
                    <VerticalMenuList :items="json.bottomMenu" :widenItem="isWiden"/>
                    <VerticalMenuPerson v-bind:person="json.person" :widenItem="isWiden"/>
                </div>
            </div>
            <div class="vm__layout__right">
                <transition name="right-menu">
                    <div class="vm-right" v-if="isActiveRight">
                        <VerticalMenuRight :items="vmRightItems"/>
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
    import { eventBus } from '@/main'

    export default {
        components: {
            VerticalMenuList,
            VerticalMenuPerson,
            VerticalMenuRight
        },
        created() {
            eventBus.$on('openRightMenu', popupData => {
                console.log(popupData)
                this.vmRightItems = popupData
                this.isActiveRight = popupData.isActive
            })
        },
        data() {
            return {
                vmRightItems: null,
                isActiveRight: false,
                json: {
                    mainMenu: {
                        home: {
                            name: 'главная',
                            icon: 'icon-home',
                            rightMenu: [
                            {
                                name: 'aaaaaa',
                                icon: ''
                            }
                            ]
                        },
                        clients: {
                            name: 'клиенты',
                            icon: 'icon-users',
                            rightMenu: [
                            {
                                name: 'bbbbbb',
                                icon: ''
                            }
                            ]
                        },
                        organisations: {
                            name: 'Организации',
                            icon: 'icon-briefcase',
                            rightMenu: [
                            {
                                name: 'cccccc',
                                icon: ''
                            }
                            ]
                        },
                        tasks: {
                            name: 'задачи',
                            icon: 'icon-inbox-check',
                            rightMenu: [
                            {
                                name: 'мои задачи',
                                icon: ''
                            },
                            {
                                name: 'список задач',
                                icon: ''
                            },
                            {
                                name: 'задачи на обработку',
                                icon: ''
                            }
                            ]
                        },
                        inbox: {
                            name: 'входящие',
                            icon: 'icon-inbox-download',
                            rightMenu: [
                            {
                                name: 'ddddddd',
                                icon: ''
                            }
                            ]
                        }
                    },
                    bottomMenu: {
                        calendar: {
                            name: 'календарь',
                            icon: 'icon-calendar'
                        },
                        settings: {
                            name: 'настройки',
                            icon: 'icon-cog'
                        }
                    },
                    person: {
                        firstname: 'Алексей',
                        lastname: 'Викторов'
                    }
                },
                isWiden: false
            }
        },
    }
</script>