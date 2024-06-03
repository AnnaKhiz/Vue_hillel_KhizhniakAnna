<template>
  <btn-group-component />
</template>

<script>
import BtnGroupComponent from './components/BtnGroupComponent.vue'

export default {
  name: 'App',
  components: {
    BtnGroupComponent
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
