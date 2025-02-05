import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app'); // Mount first

document.addEventListener("DOMContentLoaded", () => {
  AOS.init(); // Now initialize AOS properly
});
