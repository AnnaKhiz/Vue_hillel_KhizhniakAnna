<template>
  <div class="align-items-start py-3 px-2 bg-body-secondary text-start flex-grow-1">
    <button type="button" class="btn btn-secondary mb-3" @click="$router.push('/create')">Add article</button>
    <div v-if="articles.length" class="row">
      <div class="col-sm-6 mb-3" v-for="article in articles" :key="article.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fw-bold article-title">{{article.title}}</h5>
            <h6 class="card-subtitle mb-2 subtitle">{{article.author}}</h6>
            <p class="card-text article-text">{{article.desc}}</p>
            <button type="button" class="btn btn-outline-secondary mb-3" @click="$router.push(`/article/${article._id}`)">Show more</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <h5>No articles exist yet!</h5>
    </div>
  </div>
</template>
<script >

export default {
  name: "ArticlesList.vue",
  data() {
    return {
      articles: []
    }
  },
  methods: {
    async getArticle() {
      const response = await fetch('/api/articles')
      const result = await response.json()
      this.articles = result.data
    },
  },
  mounted() {
    this.getArticle();
  }
}

</script>

<style scoped>
.article-title {
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.article-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
.subtitle {
  font-size: 12px;
  color: #b4b3b3;
}
</style>
