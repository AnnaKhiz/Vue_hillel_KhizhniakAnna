import { createApp } from 'vue';
import App from './App.vue';
// import 'bootstrap/dist/css/bootstrap.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App)

app
  .use(ElementPlus)
  .mount('#app')
