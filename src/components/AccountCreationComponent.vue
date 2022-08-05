<template>
  <div class="t-5 col-md-10 mx-auto rounded bg-light">
    <div class="vue-template">
      <iframe name="dummyframe" id="dummyframe" style="display: none"></iframe>

      <form name="myForm" target="dummyframe">
        <h3>Account Creation</h3>
        <div class="row">
          <div class="form-group col-md-5">
            <label>Balance</label>
            <input
              nom="balance"
              type="number"
              min="0"
              class="form-control form-control-lg"
              v-model="input.balance"
              required
            />
          </div>

          <div class="form-group col-md-5">
            <label>Currency</label>
            <input
              nom="currency"
              type="text"
              class="form-control form-control-lg"
              v-model="input.currency"
            />
          </div>
        </div>

        <button
          type="submit"
          class="btn btn-dark btn-lg btn-block"
          v-on:click="signin()"
        >
          Valider
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const accountController = require("../controllers/Account.controller.js");

const myheader = {
    "Accept" : "*/*",
"Access-Control-Allow-Origin": "*",
  "Content-Type": "application/x-www-form-urlencoded",
  "Access-Control-Allow-Methods" :"DELETE, POST, GET, OPTIONS",
  "Access-Control-Allow-Headers" : "Content-Type, Authorization, X-Requested-With",
};

export default {
  data() {
    return {
      input: {
        balance: "",
        currency: null,
      },
    };
  },
  mounted() {
    this.verifUserConnected();
  },

  methods: {

    verifUserConnected() {
      if (this.$connectedUser.user["email"] == undefined) {
        console.log("ne trouve pas le user :");
        console.log(this.$connectedUser.user);
        this.$router.replace({ name: "login" });
      }
    },
    signin() {
     

      if ( this.input["balance"] != "" &&  this.input["currency"] != ""){
        let form = {
          balance: this.input.balance,
          currency: this.input.currency,
          userid: this.$connectedUser.user["email"] ,
        };

        accountController
          .createAccount(this.$axios, this.$ENDPOINTS.account, form, myheader)
          .then((result) => {
            if (result[0]) {
              this.$connectedUser.user = result[1].data;
              alert(
                "Création du compte de " +
                  this.$connectedUser.user["email"] +
                  " reussit!!!"
              );
            } else {
              alert("An error occured");
              console.log("params =" + form);
            }
          });
      } else {
        alert("Fill in all the fields please");
      }
    },
  },
};
</script>
