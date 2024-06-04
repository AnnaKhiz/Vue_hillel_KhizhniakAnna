<template>
  <list-group>
    <template #list-items>
      <li class="list-group-item"><p>one</p></li>
      <li class="list-group-item"><p>two</p></li>
    </template>
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
