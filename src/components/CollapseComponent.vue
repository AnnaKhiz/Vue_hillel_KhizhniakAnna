<template>
  <div class="w-25 m-auto">
    <p>
      <a
        class="btn w-25"
        :class="opened ? 'btn-light' : 'btn-warning'"
        :data-bs-toggle="!opened ? 'collapse' : 'collapse.show'"
        href="#"
        role="button"
        aria-expanded="false"
        @click="toggleOpened">{{ opened ? 'Закрыть' : 'Открыть' }}</a>
    </p>
    <div :class="!opened ? 'collapse' : 'collapse.show'">
      <div class="card card-body">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapseComponent',
  props: {
    text: {
      type: String,
      default: ''
    },
    opened: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleOpened() {
      this.$emit('changeOpened', !this.opened);
    }
  }
}
</script>
