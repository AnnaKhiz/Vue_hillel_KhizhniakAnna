<template>
  <div class="align-items-start py-3 px-2 bg-body-secondary text-start flex-grow-1">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fw-bold">{{article.title}}</h5>
        <h6 class="card-subtitle mb-2 subtitle">{{article.author}}</h6>
        <p class="card-text">{{article.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ArticleInfo.vue",
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      article: {}
    }
  },
  methods: {
    async getArticleById() {
      const response = await fetch(`/api/articles/${this.id}`)
      const result = await response.json();
      this.article = await result.data;
    }
  },
  mounted() {
    this.getArticleById();
  }
}
</script>

<style scoped>
.subtitle {
  font-size: 12px;
  color: #b4b3b3;
}
</style>
