<template>
    <div id="vertical-menu" class="vertical-menu">
        <div class="vertical-menu__layout">
            <div class="vertical-menu__layout__left">
                <div class="vertical-menu-header">
                    <div class="logo" @click="toggle"></div>
                </div>
                <div class="vertical-menu-search">
                    <div class="vertical-menu-search__link">
                        <div class="search-icon"></div>
                        <span class="vertical-menu-search__link__name">Поиск</span>
                    </div>
                </div>
                <div class="vertical-menu-body">
                    <VerticalMenuList v-bind:items="json"/>
                </div>
                <div class="vertical-menu-bottom">
                    <div class="vertical-menu-bottom__link">
                        <div class="person-icon"></div>
                        <span class="vertical-menu-bottom__link__name">{{person.firstname}}</span>
                    </div>
                </div>
            </div>
            <div class="vertical-menu__layout__right"></div>
        </div>
    </div>
</template>

<script>
    import VerticalMenuList from './VerticalMenuList.vue'

    export default {
        components: {
            VerticalMenuList
        },
        data() {
            return {
                json: {
                    'home': 'Главная',
                    'client': 'Клиенты',
                },
                show: false,
                person: {
                    firstname: 'Алексей',
                    lastname: 'Викторов'
                }
            }
        },
        methods: {
            toggle() {
                let verticalMenuLeft = document.querySelector('#vertical-menu .vertical-menu__layout__left')
                let verticalMenuItems = document.querySelectorAll('#vertical-menu [class*=\'__link__name\']')
                let logo = document.querySelector('#vertical-menu .vertical-menu-header .logo')

                if (!this.show && !verticalMenuLeft.classList.contains('open-menu')) {
                    verticalMenuLeft.classList.add('open-menu')
                    verticalMenuItems.forEach(function(item) {
                        item.style.opacity = 1
                        item.style.width = 86 + 'px'
                        // item.classList.add('open-item')
                    })
                    logo.classList.add('logo-big')
                    this.show = true
                } else {
                    verticalMenuLeft.classList.remove('open-menu')
                    verticalMenuItems.forEach(function(item) {
                        item.style.opacity = 0
                        item.style.width = 0 + 'px'
                        // item.classList.remove('open-item')
                    })
                    logo.classList.remove('logo-big')
                    this.show = false
                }
            }
        }
    }
</script>

<style lang="scss">
.vertical-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background: #e8ecf3;
    &__layout {
        height: 100%;
        display: flex;
        &__left {
            color: #c0c4d1;
            font-size: 11px;
            letter-spacing: 0.15px;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            transition: width ease 0.2s;
            width: 64px;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 1;
        }
        &__right {
            width: 100px;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            background: #ffffff;
        }
    }
    &__blue-layout {
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #000;
        z-index: 111;
    }
}
.open-menu {
    width: 150px;
}
.open-item {
    opacity: 0.8;
    // width: 100px;
}
.vertical-menu-header {
    width: 100%;
    height: 64px;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.18);
    background: #ffffff;
    .logo {
        background: url('./../../assets/icons/hamburger-butt.png') no-repeat center;
        width: 100%;
        height: 100%;

    }
    .logo-big {
        background-image: url('./../../assets/icons/vtb-logo-3.png');
    }
    &:hover {
        cursor: pointer;
    }
}
.vertical-menu-search, .vertical-menu-bottom {
    width: 100%;
    height: 64px;
    line-height: 64px;
    &:hover {
        cursor: pointer;
    }
    &__link {
        display: flex;
        color: inherit;
        text-decoration: none;
        width: 100%;
        height: 100%;
        &__name {
            transition: width ease 0.3s;
            opacity: 0;
            width: 0;
            overflow: hidden;
        }
    }
    .search-icon {
        flex: 1;
        height: 100%;
        background: url('./../../assets/icons/search.png') no-repeat center;
    }
    .person-icon {
        flex: 1;
        height: 100%;
        background: url('./../../assets/icons/group-68.png') no-repeat center;
    }
}
.vertical-menu-body {
    border-top: 1px solid #dce0e8;
}
.vertical-menu-bottom {
    width: 100%;
    height: 64px;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #dce0e8;
}

</style>