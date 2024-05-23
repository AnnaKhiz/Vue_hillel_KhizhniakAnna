<template>
  <div class="card">
    <div class="card-body">
      <h4 v-if="title" class="card-title">{{ title }}</h4>
      <p v-if="text" class="card-text">{{ text }}</p>
      <button type="button" class="btn btn-primary">Go somewhere</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>

</style>
