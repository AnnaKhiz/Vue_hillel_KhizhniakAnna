<template>
  <h1 class="my-2">Приклад компонента Collapse</h1>
  <collapse-component text="Это скрытый текст" :opened="isOpened" @changeOpened="isOpened = $event"/>
</template>

<script>
import CollapseComponent from './components/CollapseComponent.vue'

export default {
  name: 'App',
  components: {
    CollapseComponent
  },
  data() {
    return {
      isOpened: true
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
