<template>
    <div v-if="isShow" class="popup-wrap">
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
                <div class="btn-close" @click="show"></div>
            </div>
            <div class="popup-layout"></div>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '@/main'
    export default {
        name: 'popup',
        data() {
            return {
                data: Object,
                isShow: false,
            }
        },
        created() {
            eventBus.$on('showPopup', popupData => {
                this.data = popupData,
                this.show()
            })
        },
        methods: {
            show() {
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