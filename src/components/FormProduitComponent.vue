<template>
  <div class="mt-5 mx-5 px-5 vue-tempalte bg-light ">
    <div></div>

    <div class="px-auto pb-5 pt-5 mx-auto col-md-10">
     <div class="px-auto">
      <h2>Ajouter un article</h2>
    </div>    
<iframe name="dummyframe" id="dummyframe" style="display: none"></iframe>
      <form name="myForm" target="dummyframe">
        
        <div class="row">
          <div class="form-group col-md-5">
            <label>Réference</label>
            <input
              nom="reference"
              type="text"
              class="form-control form-control-lg"
              v-model="input.reference"
              required
            />
          </div>

          <div class="form-group col-md-3">
            <label>Prix unitaire</label>
            <input
              nom="unitprice"
              type="number"
              class="form-control form-control-lg"
              v-model="input.unitprice"
              min="0"
              v-on:change="calculTotalPrice()"
              required
            />
          </div>
        </div>
        <div class="row mb-4">
          <div class="form-group col-md-3">
            <label>Quantité</label>
            <input
              nom="quantity"
              type="number"
              class="form-control form-control-lg"
              v-model="input.quantity"
              v-on:change="calculTotalPrice()"
              min="1"
              max="100"
              required
            />
          </div>
          <div class="form-group col-md-5">
            <label>Montant total</label>
            <input
              nom="totalprice"
              type="number"
              class="form-control form-control-lg"
              v-model="input.totalprice"
              readonly
            />
          </div>
        </div>
        <div class="px-auto col-md-2">
          <button type="button" v-on:click="submito()" class="btn btn-primary">
            Valider
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const articleController = require("../controllers/Article.controller.js");


const myheader = {
  "Content-Type": "application/x-www-form-urlencoded",
};
export default {
  name: "FormProduitComponent",
  data() {
    return {
      input: {
        reference: "",
        unitprice: "",
        totalprice: "",
        quantity: "",
      },
    };
  },
  mounted() {
    this.verifUserConnected() 
  },

  methods: {
    verifUserConnected() {
      if (
        this.$connectedUser.user["email"] == undefined 
      ) {
        console.log("ne trouve pas le user :");
        console.log(this.$connectedUser.user);

        this.$router.replace({ name: "login" });
      }
      if (this.$connectedUser.user["category"] != "marchand")
      {
        console.log("ne trouve pas un marchand :");
        this.$router.replace({ name: "login" });
      }
        
    },
    calculTotalPrice() {
      this.input.totalprice = this.input.unitprice * this.input.quantity;
    },
    submito() {
      if (
        this.input.reference != "" &&
        this.input.unitprice != "" &&
        this.input.quantity != ""
      ) {
        let form = {
          'reference': this.input.reference,
          'unitprice': this.input.unitprice,
          'quantity': this.input.quantity,
          'totalprice': this.input.totalprice,
          'sellerid': this.$connectedUser.user["email"]
        };

        articleController
          .createArticle(this.$axios, this.$ENDPOINTS.article, form, myheader)
          .then((result) => {
            if (result[0]) {
              console.log(result[1]);
              alert(
                "creation de l'article " + this.input.reference + " reussit!!!"
              );
              //this.$router.replace({ name: "accountc" });
            } else {
              alert("An error occured while creating profil");
              console.log("params =");
              console.log(form);
              console.log(result[1].data);
              console.log(result[1].data.sqlMessage);
            }
          });
      } else {
        alert("Fill in all the fields please");
      }
    },
  },
};
</script>
