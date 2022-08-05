<template>
  <div class="vue-template">
    <div class="mt-3 mb-3 col-md-9 mx-auto rounded bg-light">
      <div class="d-flex justify-content-around">
        <div class="t-3 col-md-5 mx-auto">
          <h3>{{ article["reference"] }}</h3>
        </div>
      </div>

      <div class="d-flex justify-content-around">
        <div class="l-1">
          <h5>Prix Unitaire:</h5>
        </div>
        <div class="l-3 text-primary">
          <h5>{{ article["unitPrice"] }}</h5>
        </div>
      </div>
      <div class="d-flex justify-content-around">
        <div class="l-1">
          <h5>Nombre:</h5>
        </div>
        <div class="l-1 text-primary">
          <h5>{{ article["quantity"] }}</h5>
        </div>

        <div class="l-2">
          <h5>Prix total:</h5>
        </div>
        <div class="l-1 text-primary">
          <h5>{{ article["totalPrice"] }}</h5>
        </div>
      </div>
      <iframe name="dummyframe" id="dummyframe" style="display: none"></iframe>

      <form name="myForm" target="dummyframe">
        <div class="d-flex justify-content-around">
          <div class="col-md-3 mx-auto">
            <button
              type="submit"
              class="btn btn-red btn-lg btn-block"
              v-on:click="buy()"
            >
              Buy
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-around">
          <div> <p>Monnaie:</p> </div>
          <div> <p>{{ this.input.currency }} |</p> </div>
           <div> <p>Taxes:</p> </div>
           <div><p>{{ this.input.taxes }}% |</p> </div>
          <div><p>frais:</p>   </div>
          <div><p>{{ this.input.fees }} |</p>  </div>
          <div><p>frais sup:</p>  </div>
          <div><p>{{ this.input.addedfees }}</p>  </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const transactionController = require("../controllers/Transaction.controller.js");

const myheader = {
  Accept: "*/*",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/x-www-form-urlencoded",
  "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With",
};

export default {
  props: {
    article: {
      identifier: undefined,
      amount: undefined,
        
      quantity: undefined,
        unitPrice : undefined,
        totalPrice : undefined,
      articleId: undefined,
      sellerId: undefined,
    },
  },
  data() {
    return {
      input: {
        balance: "",
        currency: null,
        identifier: this.article["reference"],
        amount: this.article["unitPrice"],
        currency: this.$connectedUser.account["currency"],
        taxes: "18",
        fees: "10",
        addedfees: "10",
        quantity: this.article["quantity"],
        userid: this.$connectedUser.user["email"],
        articleid: this.article["id_article"],
        sellerid: this.article["userId"],
      },
    };
  },
  mounted() {

  },

  methods: {

    buy() {
      if (this.$connectedUser.account["balance"] >=  this.article["totalPrice"]) {
        transactionController
          .createTransaction(
            this.$axios,
            this.$ENDPOINTS.account,
            this.input,
            myheader
          )
          .then((result) => {
            if (result[0]) {
              alert(
                "Création de la transaction de " +
                  this.$connectedUser.user["email"] +
                  " reussit!!!"
              );
            } else {
              alert("An error occured");
              console.log(this.input);
            }
          });
      } else {
        alert("You don't have enough");
        console.log(this.$connectedUser);
      }
    },
  },
};
</script>
