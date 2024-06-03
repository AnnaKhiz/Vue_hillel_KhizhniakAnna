<template>
  <carousel-component :images="images"/>
</template>

<script>
import CarouselComponent from './components/CarouselComponent.vue'

export default {
  name: 'App',
  components: {
    CarouselComponent
  },
  data() {
    return {
      images: [
        { link: 'img_1.jpeg', id: 1 },
        { link: 'img_2.jpg', id: 2 },
        { link: 'img_3.jpg', id: 3 },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
