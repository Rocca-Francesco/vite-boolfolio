import { createApp } from 'vue';
import { router } from './router';
import App from './App.vue';

// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


createApp(App).use(router).mount('#app');
