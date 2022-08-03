import Vue from "vue";
import VueHead from 'vue-head'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import './assets/css/styles.scss';
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";


// global variables
Vue.prototype.$axios = axios;
Vue.prototype.$connectedUser = Vue.observable({
  user:{},
  account:{}
});
Vue.prototype.$ENDPOINTS = {
  userConnexion: "http://localhost:8089/api/users/connect",
  user: "http://localhost:8089/api/users/",
  profil: "http://localhost:8089/api/profils/",
  article: "http://localhost:8089/api/articles/",
  transaction: "http://localhost:8089/api/transactions/",
  account: "http://localhost:8089/api/accounts/",
};

Vue.config.productionTip = false;
Vue.use(VueHead)
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
