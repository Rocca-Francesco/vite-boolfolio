import { createApp } from 'vue'
import './style.css'

// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.vue'

createApp(App, bootstrap).mount('#app')
