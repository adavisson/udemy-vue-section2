new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'https://google.com',
    finishedLink: '<a href="https://google.com">Google</a>',
  },
  methods: {
    sayHello: function() {
      this.title = 'Hello!'
      return this.title
    },
  },
})

new Vue({
  el: '#app2',
  data: {
    counter: 0,
    x: 0,
    y: 0,
  },
  methods: {
    increase: function(step, event) {
      this.counter += step
    },
    updateCoordinates: function(e)  {
      this.x = e.clientX
      this.y = e.clientY
    },
    alertMe: function(e) {
      alert('Alert!')
    }
  }
})

new Vue({
  el: '#app3',
  data: {
    name: 'Andrew',
  }
})

new Vue({
  el: '#app4',
  data: {
    counter: 0,
    secondCounter: 0,
  },
  computed: {
    //computed properties always need to run synchronously
    output: function() {
      console.log('computed')
      return this.counter > 5 ? 'Greater Than 5' : 'Smaller than 5'
    }
  },
  watch: {
    counter: function(value) {
      let vm = this
      setTimeout(function() {
        vm.counter = 0
      },2000)
    }
  },
  methods: {
    result: function() {
      console.log('method')
      return this.counter > 5 ? 'Greater Than 5' : 'Smaller than 5'
    }
  }
})

new Vue({
  el: '#app5',
  data: {
    attachRed: false,
  },
})