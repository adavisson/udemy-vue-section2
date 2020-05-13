new Vue ({
  el: '#assignment-1',
  data: {
    name: 'Andrew Davisson',
    age: '29',
    imageLink: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Baseball_%28crop%29.jpg/1200px-Baseball_%28crop%29.jpg',
  },
  methods: {
    randomNumber: function() {
      return Math.random()
    },
    changeName: function(e) {
      this.name = e.target.value
    }
  }
})