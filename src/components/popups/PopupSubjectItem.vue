<template>
  <div class="subject-item">
    <div class="subject-item__title" @click="moveOut">
      <div v-if="subject.subjectTitle">{{subject.subjectTitle}}</div>
      <div class="circle-btn">
        <!-- <i :class="getClass"></i> -->
        <icon-base :strokeColor="'currentColor'" :width="14" :height="14">
          <icon-plus v-if="!isActive"></icon-plus>
          <icon-minus v-else></icon-minus>
        </icon-base>
      </div>
    </div>
    <transition name="subject-item">
      <div class="subject-item__subtitles" v-if="isActive" :key="subject.subjectTitle">
        <div class="subject-item__subtitles__item tag" v-for="(item, i) in getSubjectSubtitles" :key="i" @click="OnStartThematic(subject.subjectTitle, item.name)">
          <div>{{item.name | truncate(50)}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import IconBase from '@/components/utils/IconBase.vue'
import IconPlus from '@/components/utils/icons/IconPlus.vue'
import IconMinus from '@/components/utils/icons/IconMinus.vue'
export default {
  name: 'popup-subject-item',
  components: {
    IconBase,
    IconPlus,
    IconMinus,
  },
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
    let subtitlesCount = (this.subject.subjectSubtitles) ? this.getSubjectSubtitles.length : 0
    let rowsCount = Math.ceil(subtitlesCount / 2)
    if (rowsCount > 0) {
      this.subtitlesHeight = this.$el.offsetHeight + (rowsCount * 57) + 3 + 13 + 'px'
    }
  },
  computed: {
    getSubjectSubtitles() {
      return this.subject.subjectSubtitles.filter(el => !!el.name && el.name != "");
    },
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
    },
    OnStartThematic(parent, child) {
      this.$eventHub.$emit('on-start-thematic', parent, child)
    }
  }
}
</script>