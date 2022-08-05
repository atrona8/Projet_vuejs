import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/registration.vue"),
  },
  {
    path: "/account-creation",
    name: "accountc",
    component: () => import("../views/accountCreation.vue"),
  }, 
  {
    path: "/articles",
    name: "articles",
    component: () => import("../views/articles.vue"),
  },
  {
    path: "/articles-creation",
    name: "articlec",
    component: () => import("../views/articleCreation.vue"),
  },
  {
    path: "/doc-api",
    name: "docapi",
    component: () => import("../views/documentationAPI.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
