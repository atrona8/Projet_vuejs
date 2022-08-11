import { mount } from "@vue/test-utils";
import FormProduitComponent from "../../src/components/FormProduitComponent.vue";
import axios from "axios";


test("test add article", async () => {
  const articleController = require("../../src/controllers/Article.controller.js");

 
  let articles = [];


  let resarticle 
  const myheader = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  resarticle = await articleController
  .getArticles(axios, "http://localhost:8089/api/articles/", myheader)
  .then((result) => {
    if (result[0]) {
      articles = result[1].data.data;
      console.log(articles);
      return true;
    } else {
      alert("An error occured while getting articles");
      console.log(articles);
      return false;
    }
  });
  expect(resarticle).toBe(true);
  
});
