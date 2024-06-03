<template>
  <div class="btn-group" role="group">
    <button
      type="button"
      class="btn btn-secondary left"
      :class="{active: isActiveButton === 'left'}"
      @click="toggleButton('left')"
    >Left</button>
    <button
      type="button"
      class="btn btn-secondary right"
      :class="{active: isActiveButton === 'right'}"
      @click="toggleButton('right')"
    >Right</button>
  </div>
</template>

<script>
export default {
  name: 'BtnGroupComponent',
  data() {
    return {
      isActiveButton: ''
    }
  },
  methods: {
    toggleButton(button) {
      this.isActiveButton = button;
    }
  },
}
</script>
<style scoped>

</style>
