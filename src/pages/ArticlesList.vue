<template>
  <div class="align-items-start py-3 px-2 bg-body-secondary text-start flex-grow-1">
    <button type="button" class="btn btn-secondary mb-3" @click="$router.push('/create')">Add +</button>
    <div class="row  ">
      <div class="col-sm-6 mb-1" v-for="article in getArticles" :key="article.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"><span class="fw-bold">{{article.id}}. </span>{{article.title}}</h5>
            <p class="card-text">{{article.desc}}</p>
            <button type="button" class="btn btn-outline-secondary mb-3" @click="$router.push(`/article/${article.id}`)">Show more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import { mapGetters } from "vuex";

export default {
  name: "ArticlesList.vue",
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'getArticles'
    ])
  },
  methods: {

  },
  mounted() {

  }
}

</script>
<style scoped>

</style>
