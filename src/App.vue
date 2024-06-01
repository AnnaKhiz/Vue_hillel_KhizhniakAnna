<template>
  <progress-component :percentage='40' />
</template>

<script>
import ProgressComponent from './components/ProgressComponent.vue'

export default {
  name: 'App',
  components: {
    ProgressComponent
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
