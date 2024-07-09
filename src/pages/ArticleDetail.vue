<template>
  <div class="align-items-start py-3 px-2 bg-body-secondary text-start flex-grow-1">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fw-bold">{{article.id}}. {{article.title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{article.author}}</h6>
        <p class="card-text">{{article.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

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
  computed: {
    ...mapGetters([
      'getArticles'
    ]),
  },
  methods: {
    findArticle() {
      this.article = this.getArticles.find(el => el.id === +this.id)

      if(!Object.values(this.article).length) {
        return
      }

      return this.article
    }
  },
  mounted() {
    this.findArticle()
  }
}
</script>
