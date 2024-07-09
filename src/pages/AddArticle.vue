<template>
  <div class="align-items-start py-3 px-2 bg-body-secondary text-start flex-grow-1">
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
          class="form-control textarea-desc"
          id="description"
          placeholder="Enter article description..."
          :rows="5"
          @blur="validateField('desc')"
        />
        <div v-if="errors.desc" class="err-message">{{ errors.desc }}</div>
      </div>
      <div class="mb-3">
        <label for="author" class="form-author">Author</label>
        <input
          v-model="newArticle.author"
          type="text"
          class="form-control"
          placeholder="Enter article author..."
          id="author"
          @blur="validateField('author')"
        >
        <div v-if="errors.author" class="err-message">{{ errors.author }}</div>
      </div>
      <button type="submit" class="btn btn-outline-secondary" @click.prevent="publishArticle" :disabled="errors.length">Publish</button>

    </form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { validationSchema } from '@/schemas/validationSchema';
import {mapGetters} from "vuex";
import storage from "@/functions/LStorage";
export default {
  name: "ArticleCreate.vue",
  data() {
    return {
      articles: '',
      newArticle: reactive({}),
      errors: ref({}),
      isValid: false,
      timeoutId: null
    }
  },
  computed:{
    ...mapGetters([
      'getArticles'
    ])
  },
  methods: {
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

      storage.saveArticle(this.newArticle);
      this.newArticle = {};
      this.errors = {};
      this.$router.push('/');
    }
  },
}
</script>

<style scoped>
.err-message {
  color: red;
  font-size: 12px;
}
.textarea-desc {
  resize: none;
}
</style>
