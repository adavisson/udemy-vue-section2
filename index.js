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