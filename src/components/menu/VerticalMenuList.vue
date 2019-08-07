<template>
    <ul>
        <li class="menu-item" v-for="(value, item) in items">
            <a href="#" class="menu-item__link">
                <div v-bind:class="item + '-icon'"></div>
                <span class="menu-item__link__name">{{value}}</span>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            items: Object
        }
    }
</script>

<style lang="scss">
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    .menu-item {
        width: 100%;
        height: 64px;
        line-height: 64px;
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
            .home-icon {
                flex: 1;
                height: 100%;
                background: url('./../../assets/icons/home-icon.png') no-repeat center;
            }
            .client-icon {
                flex: 1;
                height: 100%;
                background: url('./../../assets/icons/client-icon.png') no-repeat center;
            }
        }
    }
}
</style>