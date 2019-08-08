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

    export default {
        inject: ['popupMethods'],
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
                }
            }
        },
        methods: {
            popup() {
                // console.log(this)
                let popup = this.$root.$children[0].$children[1]
                // console.log(popup)
                // console.log(this.popupMethods.methods.show)

                // this.popupMethods.methods.show()

                // console.log(typeof this.popupMethods.show)
                // this.popupMethods.show()
                // this.popupMethods.testfunc()
                if (popup)
                    popup.show()
            }
        }
    }
</script>