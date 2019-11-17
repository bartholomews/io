import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {
  faGithub, faKeybase, faLinkedinIn, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import router from './router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/main.css';
import './components/bootstrap';

// https://github.com/FortAwesome/vue-fontawesome
library.add(faKeybase, faGithub, faTwitter, faEnvelope, faLinkedinIn);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
