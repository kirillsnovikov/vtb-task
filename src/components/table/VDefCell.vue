<template>
    <div  id="tblCell" :class="{active: State ==  CompState.tblActive}">{{ Text }}</div>
    <!--<div v-else>{{ Text }}</div>-->
</template>

<script>
import {CompState} from '../../lib/CompState.js'
    export default {
        props: {
            Text: {
                default: 'n/a'
            },
            State:{
                default: "0"
            }
        },
        data() {
            return {
                CompState: CompState
            }
        },
    }
</script>

<style>
#tblCell{
    margin-left: 5px;
}
.active{
    color: red;
}
</style>