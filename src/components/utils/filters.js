import Vue from 'vue'

Vue.filter('toupper', str => {
  if (!str) return ''
    str = str.toString()
  return str.toUpperCase()
})

Vue.filter('capitalize', str => {
  if (!str) return ''
    str = str.toString()
  return str.charAt(0).toUpperCase() + str.slice(1)
})