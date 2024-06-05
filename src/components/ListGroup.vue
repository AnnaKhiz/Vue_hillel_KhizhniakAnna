<template>
  <ul class="list-group" ref="list">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'ListGroup',
  mounted() {
    const slotItems = this.$refs.list.children;
    const ul = this.$refs.list;

    const nodes = Array.from(slotItems);

    ul.innerHTML = '';

    nodes.forEach(node => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.appendChild(node);
      ul.appendChild(li);
    });
  }
}
</script>
<style scoped>

</style>
