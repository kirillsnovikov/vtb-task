<template>
    <div class="vertical-menu-bottom">
        <div class="vertical-menu-bottom__link" @click="popup">
            <div class="person-icon"></div>
            <span class="vertical-menu-bottom__link__name">{{person.firstname}}</span>
        </div>
        <!-- <Popup/> -->
    </div>
</template>

<script>
    import { eventBus } from '@/main'
    // import Popup from '@/components/popups/Popup'
    export default {
        components: {
            // Popup
        },
        props: {
            person: Object
        },
        data() {
            return {
                popupData: {
                    actionTitle: 'Выход из системы',
                    main: 'какой-то текст',
                    actions: {
                        apply: {
                            actionName: 'Нет, останусь',
                            method: 'SiebelApp.S_App.LogOff'
                        },
                        reject: {
                            actionName: 'Да',
                            method: 'SiebelApp.S_App.LogOff'
                        }
                    }
                },
            }
        },
        methods: {
            popup() {
                eventBus.$emit('showPopup', this.popupData)
            }
        }
    }
</script>