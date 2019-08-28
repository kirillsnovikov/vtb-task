<template>
  <div class="subject-item">
    <div class="subject-item__title" @click="moveOut">
      <div>{{subject.subjectTitle}}</div>
      <div class="circle-btn">
        <i :class="getClass"></i>
      </div>
    </div>
    <transition name="subject-item">
      <div class="subject-item__subtitles" v-if="isActive" :key="subject.subjectTitle">
        <div class="subject-item__subtitles__item tag" v-for="(item, i) in subject.subjectSubtitles">{{item.name}}</div>
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
      let subtitlesCount = this.subject.subjectSubtitles.length
      let rowsCount = Math.ceil(subtitlesCount / 2)
      let height = this.$el.offsetHeight + (rowsCount * 57) + 3 + 13 + 'px'
      this.subtitlesHeight = height
      // console.log(height)
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