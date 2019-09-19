<template>
    <div v-if="isShow" class="popup-wrap">
        <div class="popup-main">
            <div class="popup-card">
                <div class="popup-card__close" @click="show"><i class="icon-cross"></i></div>
                <div class="popup-card__header">
                    <div v-if="data.actionTitle" class="popup-card__header__title">{{data.actionTitle}}</div>
                </div>
                <!-- <PopupSubject v-if="data.subjects" :data="data.subjects"/> -->
                <div class="popup-card__body" v-if="data.main">
                    <div class="popup-card__body__text">{{data.main}}</div>
                </div>
                <div class="popup-card__actions" v-if="data.actions">
                    <div class="btn-empty btn">{{data.actions.apply.actionName | toupper}}</div>
                    <div class="btn-fill btn" @click="show">{{data.actions.reject.actionName | toupper}}</div>
                </div>
                <div class="popup-card__footer"></div>
            </div>
            <div class="popup-layout"></div>
        </div>
    </div>
</template>

<script>
    // import { eventBus } from '@/main'
    export default {
        name: 'popup',
        data() {
            return {
                data: Object,
                isShow: false,
            }
        },
        // created() {
        //     this.$eventHub.$on('showPopup', popupData => {
        //         // console.log(this)
        //         this.data = popupData,
        //         this.show()
        //     })
        // },
        methods: {
            show() {
                this.isShow = !this.isShow
                if (this.isShow) {
                    document.getElementById('_swecontent').classList.add('blur-content')
                } else {
                    document.getElementById('_swecontent').classList.remove('blur-content')
                }
            }
        },
    }
</script>