const { createApp } = Vue

createApp({
    data: function() {
      return {
        message: 'Ciaone!',
        pic: './img/de.jpg'
      }
    }
}).mount('#app')