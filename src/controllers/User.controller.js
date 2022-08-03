const User = require("../models/User.js");

exports.createUser = (axios, endpoint, params, header) => {
  return axios.post(endpoint, params, header).then(
    (result) => {
      if (result.data.error) {
        return [false, result];
      }
      console.log("Création du user");
      return [true, result];
    },
    (error) => {
      console.error("Erreur niveau profil" + error);
      alert("Erreur: vérifiez la connection à l'API");
    }
  );
};

exports.connectUser = (axios, endpoint, params, header) => {
  return axios.post(endpoint, params, header).then(
    (result) => {
      if (result.data.error) {
        console.log(result);
        return [false, null];
      }
      return [true, result];
    },
    (error) => {
      console.error(error);
      alert("Erreur: vérifiez la connection à l'API");
    }
  );
};

exports.findUser = (axios, endpoint, params, header) => {
  return axios.get(endpoint, params, header).then(
    (result) => {
      if (result.data.error) {
        console.log(result);
        return [false, null];
      }
      return [true, result];
    },
    (error) => {
      console.error(error);
      alert("Erreur: vérifiez la connection à l'API");
    }
  );
};
