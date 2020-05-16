new Vue({
  el: '#assignment3',
  data: {
    title: 'Assignment 3',
    value: 0,
  },
  watch: {
    result: function() {
      let vm = this
      setTimeout(function() {
        vm.value = 0
      }, 5000)
    }
  },
  computed: {
    result: function() {
      return this.value < 37 ? 'Not there yet' : 'At least 37'
    }
  }
})