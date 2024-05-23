<template>
  <CardComponent title="Card title" />
  <CardComponent text="Some quick example text to build on the card" />
  <CardComponent title="Card title" text="Some quick example text to build on the card" />
</template>

<script>
import CardComponent from './components/CardComponent.vue'

export default {
  name: 'App',
  components: {
    CardComponent
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
  margin-top: 60px;
}
</style>
