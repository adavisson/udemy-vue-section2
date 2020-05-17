new Vue({
  el: '#assignment4',
  data: {
    specialEffect: '',
    class1: 'class1',
    class2: 'class2',
    class3: 'class3',
    divClass: '',
    div2Class: '',
    div2Bool: 'false',
    color: '',
    progress: 0
  },
  computed: {
    myClass: function() {
      return this.div2Bool ? 'highlight' : 'shrink'
    },
    myStyle: function() {
      return {
        height: 100 + 'px',
        width: 100 + 'px',
        backgroundColor: this.color,
      }
    },
    progressBar: function() {
      return {
        height: 25 + 'px',
        width: this.progress + '%',
        backgroundColor: 'blue',
      }
    }
  },
  methods: {
    startEffect: function() {
      let vm = this
      setInterval(function() {
        vm.specialEffect === 'highlight' ? vm.specialEffect = 'shrink' : vm.specialEffect = 'highlight'
      }, 2000)
    },
    startProgress: function() {
      let vm = this
      setInterval(function() {
        vm.progress < 100 ? vm.progress++ : clearInterval()
      }, 500)
    }
  }
})