<template>
  <div class="tooltip" v-if="data">
    <div class="tooltip__header" v-if="data.title">
      {{data.title}}
    </div>
    <div class="tooltip__body">
      <div class="tooltip__body__text" v-if="data.text">
        {{data.text}}
      </div>
      <div class="tooltip__body__list" v-if="data.list">
        <ul class="tooltip-list">
          <li class="tooltip-list__item" v-for="(item, i) in data.list">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tooltip',
  props: {
    data: Object
  },
  mounted() {
    console.log(this)
  }
}
</script>