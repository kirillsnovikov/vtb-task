<template>
  <div class="subject-item">
    <div class="subject-item__title" @click="moveOut">
      <div v-if="subject.subjectTitle">{{subject.subjectTitle}}</div>
      <div class="circle-btn">
        <i :class="getClass"></i>
      </div>
    </div>
    <transition name="subject-item">
      <div class="subject-item__subtitles" v-if="isActive" :key="subject.subjectTitle">
        <div class="subject-item__subtitles__item tag" v-for="(item, i) in subject.subjectSubtitles">
          <div v-if="item.name">{{item.name | truncate(50)}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'popup-subject-item',
  props: {
    subject: Object
  },
  data() {
    return {
      isActive: false,
      subtitlesHeight: '',
    }
  },
  mounted() {
    this.subtitlesHeight = this.$el.offsetHeight
    let subtitlesCount = (this.subject.subjectSubtitles) ? this.subject.subjectSubtitles.length : 0
    let rowsCount = Math.ceil(subtitlesCount / 2)
    if (rowsCount > 0) {
      this.subtitlesHeight = this.$el.offsetHeight + (rowsCount * 57) + 3 + 13 + 'px'
    }
  },
  computed: {
    getClass() {
      if (this.isActive) {
        return 'icon-minus'
      }
      return 'icon-plus'
    },
  },
  methods: {
    moveOut() {
      this.isActive = !this.isActive
      if (this.isActive) {
        this.$el.style.height = this.subtitlesHeight
      } else {
        this.$el.style.height = ''
      }
      // console.log(this)
    }
  }
}
</script>