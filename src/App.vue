<template>

    <router-link to="/">Main | </router-link>
    <router-link to="/create">Create | </router-link>
    <router-link to="/info">Info</router-link>

  <router-view />
</template>

<script>



export default {
  name: 'App',
  components: {

  },
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
