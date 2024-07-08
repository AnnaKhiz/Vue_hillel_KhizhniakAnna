<template>
  <div class="align-items-start py-3 px-2 bg-body-secondary text-start flex-grow-1">
    {{getArticles}}
    <form>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          v-model="newArticle.title"
          type="text"
          class="form-control"
          placeholder="Enter article title..."
          id="title"
          @blur="validateField('title')"
        >
        <div v-if="errors.title" class="err-message">{{ errors.title }}</div>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          v-model="newArticle.desc"
          class="form-control"
          id="description"
          placeholder="Enter article description..."
          :rows="5"
          @blur="validateField('desc')"
        >

        </textarea>
        {{articles}}
        <div v-if="errors.desc" class="err-message">{{ errors.desc }}</div>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="publishArticle">Publish</button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { validationSchema } from '@/schemas/validationSchema';
import {mapGetters, mapMutations} from "vuex";
export default {
  name: "ArticleCreate.vue",
  data() {
    return {
      articles: '',
      newArticle: reactive({}),
      errors: ref({}),
      isValid: false
    }
  },
  computed:{
    ...mapGetters([
      'getArticles'
    ])
  },
  methods: {
    ...mapMutations(['addArticle']),

    async validateField(field) {
      try {
        await validationSchema.validateAt(field, this.newArticle);
        this.errors[field] = null;
      } catch (err) {
        this.errors[field] = err.message;
      }
    },
    async validate() {
      try {
        await validationSchema.validate(this.newArticle, { abortEarly: false });
        this.errors = {};
        return true;
      } catch (err) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        this.errors = validationErrors;
        return false;
      }
    },
    async publishArticle() {
      this.isValid = await this.validate();

      if (!this.isValid) {
        return
      }

      const newArticleId = this.getArticles.at(-1)

      this.newArticle.id = newArticleId.id + 1
      this.addArticle(this.newArticle)
      this.newArticle = {}
      this.errors = {}

    }
  },

}
</script>

<style scoped>
.err-message {
  color: red;
  font-size: 12px;
}
.submit-message {
  color: green;
  font-size: 12px;
}
</style>
