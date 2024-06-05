<template>
  <list-group>
    <p>one</p>
    <p>two</p>
    <p>three</p>
    <p>four</p>
    <p>five</p>
  </list-group>
</template>

<script>
import ListGroup from './components/ListGroup.vue'

export default {
  name: 'App',
  components: {
    ListGroup
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
