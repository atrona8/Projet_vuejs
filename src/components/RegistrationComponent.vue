<template>
  <div class="t-5 col-md-8 mx-auto rounded bg-light">
    <div class="vue-tempalte">
      <iframe name="dummyframe" id="dummyframe" style="display: none"></iframe>

      <form name="myForm" target="dummyframe">
    

        <div class="row">
          <div class="form-group col-md-5">
            <label>Email</label>
            <input
              nom="email"
              type="email"
              class="form-control form-control-lg"
              v-model="input.email"
              required
            />
          </div>

          <div class="form-group col-md-5">
            <label>Numéro de telephone</label>
            <input
              nom="numero"
              type="text"
              class="form-control form-control-lg"
              v-model="input.phone"
              required
            />
          </div>
        </div>

        <div class="row">
          <div class="form-group col-md-5">
            <label>Type d'utilisateur</label>
            <select
              name="type"
              class="form-select form-select-lg mb-3"
              v-model="input.categorie"
              :required="true"
              aria-label=".form-select-lg example"
            >
              <option selected value="client">client</option>
              <option value="vendeur">vendeur</option>
            </select>
          </div>

          <div class="form-group col-md-5">
            <label>Pays</label>
            <select
              name="pays"
              class="form-select form-select-lg mb-3"
              v-model="input.countrySelected"
              :required="true"
              aria-label=".form-select-lg example"
            >
              <option selected>Select a country</option>
              <option v-for="option in pays" v-bind:value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Age</label>
          <input
            name="age"
            type="number"
            class="form-control form-control-lg"
            min="18"
            v-model="input.age"
            required
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            name="mpd1"
            type="password"
            class="form-control form-control-lg"
            minlength="8"
            v-model="input.password"
            required
          />
        </div>

        <div class="form-group">
          <label>Répétez</label>
          <input
            name="mdp2"
            type="password"
            class="form-control form-control-lg"
            minlength="8"
            v-model="input.password2"
            required
          />
        </div>

        <button
          type="submit"
          class="btn btn-dark btn-lg btn-block"
          v-on:click="signin()"
        >
          Sign Up
        </button>
        <!--
            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
         -->
      </form>
    </div>
  </div>
</template>

<script>
const userController = require("../controllers/User.controller.js");
const profilController = require("../controllers/Profil.controller.js");

const myheader = {
  "Content-Type": "application/x-www-form-urlencoded",
};

export default {
  data() {
    return {
      input: {
        email: "",
        prenom: "",
        nom: "",
        countrySelected: "",
        age: "",
        categorie: "",
        phone: "",
        password: "",
        password2: "",
      },
      pays: ["Senegal", "Mali", "Mauritanie", "Gambie"],
    };
  },
  methods: {
    signin() {
      if (
        this.input["email"] != "" &&
        this.input["prenom"] != "" &&
        this.input["nom"] != "" &&
        this.input["countrySelected"] != "" &&
        this.input["categorie"] != "" &&
        this.input["phone"] != "" &&
        this.input["password"] != "" &&
        this.input["password2"] != ""
      ) {
        let form = {
          email: this.input.email,
          password: this.input.password,
          password_confirmation: this.input.password2,
          firstname: this.input.prenom,
          lastname: this.input.nom,
          country: this.input.countrySelected,
          age: this.input.age,
          userid: this.input.email,
          phone: this.input.phone,
          category: this.input.categorie,
        };

        this.$connectedUser.user = userController
          .createUser(this.$axios, this.$ENDPOINTS.user, form, myheader)
          .then((result) => {
            if (result[0]) {
              userController
                .findUser(
                  this.$axios,
                  this.$ENDPOINTS.user + form["email"],
                  form,
                  myheader
                )
                .then((resultf) => {
                  if (resultf[0]) {
                    this.$connectedUser.user = resultf[1].data.data[0];
                    console.log(this.$connectedUser.user);
                    alert(
                      "Inscription de " +
                        this.$connectedUser.user["email"] +
                        " reussit!!!"
                    );
                    return resultf[1].data.data[0];
                  } else {
                    alert("An error occured while finding user");
                    console.log("params =" + form);
                  }
                });
            } else {
              alert("An error occured");
              console.log("params =" + form);
            }
          });
        setTimeout(
          () =>
            profilController
              .createProfil(this.$axios, this.$ENDPOINTS.profil, form, myheader)
              .then((result) => {
                if (result[0]) {
                  console.log(result[1]);
                  alert(
                    "creation profil de " +
                      this.$connectedUser.user["email"] +
                      " reussit!!!"
                  );
                  this.$router.replace({ name: "accountc" });
                } else {
                  alert("An error occured while creating profil");
                  console.log("params =");
                  console.log(form);
                  console.log(result[1].data);
                  console.log(result[1].data.sqlMessage);
                }
              }),

          2000
        );

        console.log("Fin user:");
        console.log(this.$connectedUser.user);
      } else {
        alert("Fill in all the fields please");
      }
    },
  },
};
</script>
