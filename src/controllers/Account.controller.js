exports.createAccount = (axios,endpoint, params, header) => {
    return axios.post(endpoint, params, header).then(
    (result) => {
      if (result.data.error) {

        return [false, result]
      }
      console.log("Création du compte reussit")
        return [true, result]
    },
    (error) => {
      console.error('Erreur niveau account');
      coNsole.log(error);
      alert("Erreur: vérifiez la connection à l'API");
    }
  );
};
exports.getOneAccount = (axios,endpoint, header) => {
    return axios.get(endpoint, header).then(
    (result) => {
      if (result.data.error) {

        return [false, result]
      }
      console.log("repupération du compte reussit")
        return [true, result]
    },
    (error) => {
      console.error('Erreur niveau account');
      coNsole.log(error);
      alert("Erreur: vérifiez la connection à l'API");
    }
  );
};
