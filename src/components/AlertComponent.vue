<template>
  <div :class="`alert alert-${type}`" role="alert">{{text}}</div>
</template>

<script>
export default {
  name: 'AlertComponent',
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: 'danger',
      required: false
    }
  }
}
</script>
<style scoped>

</style>
