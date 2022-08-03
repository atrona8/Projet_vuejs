<template>
  <div class="vue-template">
    <div class="t-3 col-md-8 mx-auto rounded bg-secondary">
      <h3>Liste des articles disponibles</h3>

      <ArticleComponent
        v-for="item in this.articles"
        :article="item"
        v-if="item['quantity'] != 0"
      />
    </div>
  </div>
</template>

<script>
const articleController = require("../controllers/Article.controller.js");

const myheader = {
  Accept: "*/*",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/x-www-form-urlencoded",
  "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With",
};

import ArticleComponent from "../components/ArticleComponent.vue";

export default {
  components: {
    ArticleComponent,
  },
  data() {
    return {
      articles: {},
    };
  },
  mounted() {
    this.verifUserConnected();
    this.getArticles();
  },

  methods: {
    verifUserConnected() {
      if (
        this.$connectedUser.user["email"] == undefined ||
        this.$connectedUser.account["userId"] == undefined
      ) {
        console.log("ne trouve pas le user :");
        console.log(this.$connectedUser.user);
        console.log("ne trouve pas le account :");
        console.log(this.$connectedUser.account);
        this.$router.replace({ name: "login" });
      }
    },
    getArticles() {
      articleController
        .getArticles(this.$axios, this.$ENDPOINTS.article, myheader)
        .then((result) => {
          if (result[0]) {
            this.articles = result[1].data.data;
            console.log(this.articles);
          } else {
            alert("An error occured while getting articles");
            console.log(this.articles);
          }
        });
    },
  },
};
</script>
