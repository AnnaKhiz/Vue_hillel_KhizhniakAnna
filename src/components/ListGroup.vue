<template>
  <ul class="list-group" v-if="listNodes.length !== 0">
    <li class="list-group-item" v-for="(node, index) in listNodes" :key="index">
      <component :is="node.type" v-bind="node.data" v-html="node.children"></component>
    </li>
  </ul>
  <span v-else> Empty list </span>
</template>

<script>
export default {
  name: 'ListGroup',
  computed: {
    listNodes() {
      if (this.$slots.default) {
        return this.$slots.default()
      }
      return []
    }
  }
}
</script>
