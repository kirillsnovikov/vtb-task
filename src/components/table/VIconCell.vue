<template>
    <div class="vtable-icon-cell">
        <span class><img :src="Link"  border="0" space="0" hspace="0"></span>
        <span class="hide-value">{{ Text }}</span>
    </div>
</template>

<script>
import {CompState} from '../../lib/CompState.js'
    export default {
        name: 'VIconCell',
        props: ["Data","Text"],
        data() {
            return {
                CompState: CompState
            }
        },
        computed: {
            Link() {
                var val = this.Text;
                if(!val)
                    return "";

                var link = this.Data.IconMap
                    .filter((el, i) => el.Value == val)
                    .map((el, i) => el.Link);
                
                if(link.length == 0)
                    return "";

                return link[0];
            }
        },
    }
</script>

<style>
.hide-value{
    display: none;
}
.vtable-icon-cell img{
  max-height: 100%;
  max-width: 100%;
}
</style>