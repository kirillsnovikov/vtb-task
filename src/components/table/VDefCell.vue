<template>
  <div class="table-body__row__item__value" v-if="data">
    {{data}}
  </div>
</template>

<script>
  export default {
    props: {
      data: [String]
    }
  }
</script>