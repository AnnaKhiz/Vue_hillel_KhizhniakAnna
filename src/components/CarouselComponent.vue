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
      const lastIndex = this.images.length;
      this.checkedImageId = newValue > lastIndex ? 1 : newValue < 1 ? lastIndex : newValue;
    }
  }
}
</script>
<style scoped>

</style>
