<template>
    <div class="table-body__row__item__value">
        <a href="javascript:void(0);" class="drilldown">{{data}}</a>
    </div>
</template>

<script>
  export default {
    props: {
      data: [Number, Boolean, String]
    }
  }
</script>