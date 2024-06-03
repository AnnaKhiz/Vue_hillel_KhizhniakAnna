<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel">

    <div class="carousel-inner bg-black" >
      <div class="carousel-item" v-for="image in images" :key="image.id" :class="{ active : checkedImageId === image.id}">
        <img alt="cat image" class="d-block w-50 m-auto" :src="require(`@/assets/images/${image.link}`)" >
      </div>
    </div>

    <button
      v-for="(button, index) in buttonsInfo"
      :key="index"
      :class="`carousel-control-${button.text}`"
      data-bs-target="#carousel"
      type="button"
      :data-bs-slide="`${button.text}`"
      @click="button.action"
    >
      <span :class="`carousel-control-${button.text}-icon`" aria-hidden="true"></span>
    </button>

  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  props: {
    images: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      checkedImageId: 1,
    }
  },
  computed: {
    buttonsInfo() {
      return [
        { text: 'prev', action: this.goPrev },
        { text: 'next', action: this.goNext }
      ]
    }
  },
  methods: {
    goNext() {
      this.checkedImageId++;
    },
    goPrev() {
      this.checkedImageId--;
    },
  },
  watch: {
    checkedImageId(newValue) {
      if (newValue === this.images.length + 1) {
        this.checkedImageId = 1
      } else if (newValue < 1) {
        this.checkedImageId = this.images.length
      }
    }
  }
}
</script>
<style scoped>

</style>
