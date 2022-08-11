import { mount } from "@vue/test-utils";
import LoginComponent from "../../src/components/LoginComponent.vue";
import axios from "axios";

test("renders a todo", () => {
  const wrapper = mount(LoginComponent);

  const todo = wrapper.get('[data-test="todo"]');

  expect(todo.text()).toBe("Login");
});
test("test login", async () => {
  const userController = require("../../src/controllers/User.controller.js");
  const accountController = require("../../src/controllers/Account.controller.js");

  const wrapper = mount(LoginComponent);
  let user = {};
  let account = {};

  var form = {
    email: "atrona8@gmail.com",
    password: "azertyui",
  };
  const myheader = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  let myuser = await userController
    .connectUser(
      axios,
      "http://localhost:8089/api/users/connect",
      form,
      myheader
    )
    .then((result) => {
      if (result[0]) {
        user = result[1].data.user;

        //
        console.log("Authentification de " + user["email"] + " reussit!!!");
        return user;
      } else {
        console.log("The email and / or password is incorrect");
      }
    });
  expect(myuser["email"]).toBe("atrona8@gmail.com");
});
