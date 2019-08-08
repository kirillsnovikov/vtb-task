<template>
    <div v-if="isShow" class="popup-layout" @click="show">
        <div class="popup-main">
            <div class="popup-card">
                <div class="popup-card__header">
                    <div v-if="data.actionTitle" class="popup-card__header__title">{{data.actionTitle}}</div>
                </div>
                <div v-if="data.main" class="popup-card__body">{{data.main}}</div>
                <div class="popup-card__actions">
                    <div class="btn-empty btn">{{data.actions.apply.actionName | toupper}}</div>
                    <div class="btn-fill btn">{{data.actions.reject.actionName | toupper}}</div>
                </div>
                <div class="popup-card__footer">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '@/main'
    export default {
        name: 'popup',
        // inject: ['someMethod'],
        data() {
            return {
                // data: this.$parent.$children[0].$children[1].popupData,
                // data: this.$parent.popupData,
                data: Object,
                isShow: false,
            }
        },
        created() {
            eventBus.$on('showPopup', popupData => {
                this.data = popupData
                this.show()
            })
        },
        methods: {
            show() {

                // console.log(this.$parent.$children[0].$children[1].popupData)
                // console.log(this.someMethod)
                // console.log(eventBus)
                this.isShow = !this.isShow

            },
            testfunc() {
                console.log('testmsg')
            }
        },
        filters: {
            toupper(str) {
                if (!str) return ''
                    str = str.toString()
                return str.toUpperCase()
            }
        }
    }

</script>

<style lang="scss">
.popup-layout {
    position: fixed;
    text-align: center;
    // filter: blur(30px);
    top: 0;
    left: 0;
    // background: #000;
    // opacity: .3;
    width: 100%;
    height: 100%;
    z-index: 2;
    .popup-main {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        // background: #000;
        // opacity: .3;
        .popup-card {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 381px;
            height: 197px;
            border-radius: 10px;
            box-shadow: 0 60px 120px 0 rgba(0, 0, 0, 0.3);
            background-color: #ffffff;
            &__header {
                &__title {
                    font-size: 27px;
                    line-height: 2.22;
                    letter-spacing: 0.33px;
                }
            }
            &__body {
                font-size: 14px;
                font-weight: normal;
                color: rgba(0, 0, 0, 0.85);
            }
            &__actions {
                display: flex;
                justify-content: space-around;

                .btn {
                    width: 163px;
                    height: 48px;
                    line-height: 48px;
                    font-size: 11.2px;
                    font-weight: normal;
                    border-radius: 24px;
                    border: solid 1px #00a0df;
                }
                .btn-fill {
                    background: #00a0df;
                    color: #ffffff;
                }
                .btn-empty {
                    color: #00a0df;
                }
            }
        }
    }
}
</style>