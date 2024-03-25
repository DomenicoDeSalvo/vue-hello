const { createApp } = Vue

createApp({
    data: function() {
      return {
        message: 'Ciaone Vue!',
        pic: './img/de.jpg'
      }
    }
}).mount('#app')