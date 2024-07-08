<template>
  <nav class="navbar bg-secondary">
    <form class="container-fluid justify-content-start">
      <button class="btn btn-danger me-2" type="button" @click="$router.push('/')">Home</button>
    </form>
  </nav>

</template>

<script>
export default {
  name: "NavComponent.vue"
}
</script>

<style scoped>

</style>
