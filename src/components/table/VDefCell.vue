<template>
    <div class="table-body__row__item__value">{{data}}</div>
</template>

<script>
    export default {
        props: {
            data: [Number, Boolean, String]
        }
    }
</script>