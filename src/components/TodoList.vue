<template>
  <div class="common-layout">
    <el-container>
      <el-header class="align-l">
        <el-row>
          <el-col :span="24">
            <el-button :value="isCollapse" @click="toggleAside">{{ isCollapse ? 'Add note' : 'Hide form' }}</el-button>
          </el-col>
        </el-row>
      </el-header>

      <el-container>
        <el-aside :width="!isCollapse ? '500px' : '0'" class="align-l" >
              <el-menu
                default-active="2"
                style="width: 100%;"
                :collapse="isCollapse"
              >
                <el-form
                  v-if="!isCollapse"
                  :model="form"
                  label-width="auto"
                  class="form"
                >
                  <el-row class="mb-20">
                    <el-text>Enter title</el-text>
                    <el-input
                      class="input"
                      v-model="form.title"
                      placeholder="Please enter title"
                      @blur="validateField('title')"
                    />
                    <el-text v-if="errors.title" class="err-message">{{ errors.title }}</el-text>
                  </el-row>

                  <el-row class="mb-20">
                    <el-text>Enter description</el-text>
                    <el-input
                      type="textarea"
                      class="input"
                      v-model="form.description"
                      placeholder="Please enter description"
                      :rows="5"
                      resize="none"
                      @blur="validateField('description')"
                    />
                    <el-text v-if="errors.description" class="err-message">{{ errors.description }}</el-text>
                  </el-row>

                  <el-row class="mb-20">
                    <el-text>Select status</el-text>
                    <el-select
                      v-model="form.status"
                      placeholder="Select status"
                      class="input"
                      @blur="validateField('status')"
                    >
                      <el-option
                        v-for="item in statusSelect"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                    <el-text v-if="errors.status" class="err-message">{{ errors.status }}</el-text>
                  </el-row>

                  <el-button @click.prevent="saveNote" class="input">Save note</el-button>
                  <el-text v-if="isValid" class="submit-message">Note successfully created!</el-text>
                </el-form>
              </el-menu>
            </el-aside>

        <el-main>
          <el-header>Todo List</el-header>

          <el-table
            v-if="notes.length"
            :data="notes"
            style="width: 100%"
          >
            <el-table-column label="Status" width="120">
              <template #default="scope">{{ convertStatusValueToText(scope.row.status) }}</template>
            </el-table-column>
            <el-table-column property="title" label="Title" width="120" />
            <el-table-column property="description" label="Description" show-overflow-tooltip />
            <el-table-column width="120">
              <template #default="scope">
                <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete(scope.row.id)"
                >
                  Delete
                </el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-row v-else>
            <el-col :span="24">
              <el-text>Todo list is empty!</el-text>
            </el-col>
          </el-row>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import { reactive, ref } from 'vue';
import { validationSchema } from '@/schemas/validationSchema';

export default {
  name: 'TodoList',
  data() {
    return {
      isCollapse: true,
      isValid: false,
      form: reactive({
        title: '',
        description: '',
        status: '',
      }),
      errors: ref({}),
      notes: [],
      statusSelect: [
        { label: 'Draft', value: 'draft' },
        { label: 'In process', value: 'in_process' },
        { label: 'Finished', value: 'finished' },
      ]
    }
  },
  methods: {
    convertStatusValueToText(status) {
      const statusObj = this.statusSelect.find(el => el.value === status);

      if (!statusObj) {
        return
      }

      return statusObj.label;
    },

    handleDelete(index) {
      const notes = [...this.notes];
      const indexEl = notes.findIndex(el => el.id === index);

      if (indexEl === -1) {
        return
      }

      notes.splice(indexEl, 1);
      localStorage.setItem('notes', JSON.stringify(notes));
      this.notes = notes;
    },

    toggleAside() {
      this.isCollapse = !this.isCollapse;

      if (!this.isCollapse) {
        this.errors = {};
        this.isValid = false;
      }
    },

    async validateField(field) {
      try {
        await validationSchema.validateAt(field, this.form);
        this.errors[field] = null;
      } catch (err) {
        this.errors[field] = err.message;
      }
    },

    async validate() {
      try {
        await validationSchema.validate(this.form, { abortEarly: false });
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

    async saveNote() {
      this.isValid = await this.validate();

      if (this.isValid) {

        let note = {...this.form};
        note.id = Date.now();

        this.notes.push(note);

        localStorage.setItem('notes', JSON.stringify(this.notes));

        this.form = {
          title: '',
          description: '',
          status: '',
        }
      }
    },
  },
  mounted() {
    localStorage.getItem('notes') ? this.notes = JSON.parse(localStorage.getItem('notes')) : false;
  }
}
</script>

<style scoped>
.err-message {
  color: red;
  font-size: 12px;
}

.mb-20 {
  margin-bottom: 20px;
}

.align-l {
  text-align: left;
}

.form {
  max-width: 500px;
  padding: 0 20px;
  margin-bottom: 10px;
}

.input {
  width: 100%;
  margin: 10px 0;
}

.submit-message {
  color: green;
  font-size: 12px;
}

</style>
