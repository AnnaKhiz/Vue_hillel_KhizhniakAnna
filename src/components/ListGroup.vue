<template>
  <ul class="list-group" >
    <li class="list-group-item" v-for="(node, index) in listNodes" :key="index">
      <component :is="node.type" v-bind="node.data" v-html="node.children"></component>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListGroup',
  computed: {
    listNodes() {
      return this.$slots.default() || []
    }
  }
}
</script>
<style scoped>

</style>
