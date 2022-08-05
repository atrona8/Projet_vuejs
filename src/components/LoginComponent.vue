<template>
  <div class="t-5 col-md-8 mx-auto rounded bg-light">
    <div id="login">
      <form name="myForm">
        <h1>Login</h1>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            v-model="input.email"
            placeholder="Email"
            class="form-control form-control-lg"
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            v-model="input.password"
            placeholder="Password"
            class="form-control form-control-lg"
          />
        </div>
        <div class="t-5 mx-auto col-md-2">
          <button
            type="button"
            v-on:click="login()"
            class="rounded btn bg-blue btn-lg"
          >
            Login
          </button>
        </div>
        <br />
        <br />
      </form>
    </div>
  </div>
</template>

<script>
const userController = require("../controllers/User.controller.js");
const accountController = require("../controllers/Account.controller.js");

const myheader = {
  "Content-Type": "application/x-www-form-urlencoded",
};

export default {
  name: "LoginComponent",

  data() {
    return {
      input: {
        email: "",
        password: "",
      },
      response: "",
      token: "",
    };
  },
  mounted() {},

  methods: {
    login() {
      if (this.input.email != "" && this.input.password != "") {
        var form = {
          email: this.input.email,
          password: this.input.password,
        };

        userController
          .connectUser(
            this.$axios,
            this.$ENDPOINTS.userConnexion,
            form,
            myheader
          )
          .then((result) => {
            if (result[0]) {
              this.$connectedUser.user = result[1].data.user;
              this.response = result[1];

              alert(
                "Authentification de " +
                  this.$connectedUser.user["email"] +
                  " reussit!!!"
              );
              accountController
                .getOneAccount(
                  this.$axios,
                  this.$ENDPOINTS.account + this.$connectedUser.user["email"],
                  myheader
                )
                .then((result) => {
                  if (result[0]) {
                    this.$connectedUser.account = result[1].data.data[0];
                    console.log(this.$connectedUser.account);
                    alert(
                      "Chargement du compte de " +
                        this.$connectedUser.user["email"] +
                        " reussit!!!"
                    );
                    return result[1].data.data[0];
                  } else {
                    alert("An error occured while getting account");
                    console.log(result[1]);
                  }
                });
              if (this.$connectedUser.user["category"] == "marchand")  this.$router.push({ name: "articlec" });
               else this.$router.push({ name: "articles" });
              
            } else {
              alert("The email and / or password is incorrect");
            }
          });
      } else {
        console.log("A email and password must be present");
        alert("A email and password must be present");
      }
    },
  },
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
