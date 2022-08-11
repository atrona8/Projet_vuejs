import { mount } from "@vue/test-utils";
import FormProduitComponent from "../../src/components/FormProduitComponent.vue";
import axios from "axios";


test("test add article", async () => {
  const articleController = require("../../src/controllers/Article.controller.js");


  let article = {};


  let resarticle 
  const myheader = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let form = {
    'reference': 'testproduit',
    'unitprice': '10000',
    'quantity': '1',
    'totalprice':'10000',
    'sellerid': 'atrona8@gmail.com',
  };

  resarticle= await articleController
    .createArticle(axios, "http://localhost:8089/api/articles/", form, myheader)
    .then((result) => {
      if (result[0]) {
        console.log(result[1]);
        console.log(
          "creation de l'article " + + " reussit!!!"
        );
        return true
        
      } else {
        console.log("An error occured while creating profil");
        console.log("params =");
        console.log(form);
        console.log(result[1].data);
        console.log(result[1].data.sqlMessage);
        return false
      }
    });
  expect(resarticle).toBe(true);
  
});
