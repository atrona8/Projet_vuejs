import { mount } from "@vue/test-utils";
import LoginComponent from "../../src/components/LoginComponent.vue";
import axios from "axios";

test("renders a todo", () => {
  const wrapper = mount(LoginComponent);

  const todo = wrapper.get('[data-test="todo"]');

  expect(todo.text()).toBe("Login");
});
test("test sign up", async () => {
  const userController = require("../../src/controllers/User.controller.js");
  const accountController = require("../../src/controllers/Account.controller.js");

  const wrapper = mount(LoginComponent);
  let user = {};


  let resprofil 
  const myheader = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  let form = {
    email: 'tet@test.test',
    password: 'tet@test.test',
    password_confirmation: 'tet@test.test',
    firstname: 'test',
    lastname: 'test',
    country: 'Senegal',
    age: '56',
    userid: 'tet@test.test',
    phone: '+22177777777',
    category: 'testeur',
  };

  user = await userController
    .createUser(axios,"http://localhost:8089/api/users/", form, myheader)
    .then(async (result) => {
      if (result[0]) {
       return await userController
          .findUser(
            axios,
            "http://localhost:8089/api/users/" + form["email"],
            form,
            myheader
          )
          .then((resultf) => {
            if (resultf[0]) {
              user = resultf[1].data.data[0];
              console.log(user);
              console.log(
                "Inscription de " +
                  user["email"] +
                  " reussit!!!"
              );
              
              return resultf[1].data.data[0];
            } else {
              console.log("An error occured while finding user");
              console.log("params =" + form);
              return {email: 'error'}
            }
          });
      } else {
        console.log("An error occured");
        console.log("params =" + form);
      }
    });
  setTimeout(
   async () => {
      resprofil = await profilController
        .createProfil(axios, "http://localhost:8089/api/profils/", form, myheader)
        .then((result) => {
          if (result[0]) {
            console.log(result[1]);
            console.log(
              "creation profil de " +
                user["email"] +
                " reussit!!!"
            );
           return true;
          } else {
            console.log("An error occured while creating profil");
            console.log("params =");
            console.log(form);
            console.log(result[1].data);
            console.log(result[1].data.sqlMessage);
            return false;
          }
        })
        expect(resprofil).toBe(true);
      },

    2000
  );

  expect(user["email"]).toBe('tet@test.test');
  
});
