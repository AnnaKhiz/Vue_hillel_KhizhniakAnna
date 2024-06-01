<template>
  <alert-component text="Some alert text" type="warning"/>
</template>

<script>
import AlertComponent from './components/AlertComponent.vue'

export default {
  name: 'App',
  components: {
    AlertComponent
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
