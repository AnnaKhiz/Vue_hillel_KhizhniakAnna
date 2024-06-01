<template>
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      :aria-valuenow="percentage"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="progressbar"
      :style="`width: ${percentage}%;`"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressComponent',
  props: {
    percentage: {
      type: Number,
      default: 0,
      required: true
    }
  }
}
</script>
<style scoped>

</style>
