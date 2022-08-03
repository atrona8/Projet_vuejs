

exports.createTransaction = (axios, endpoint, params, header) => {
    return axios.post(endpoint, params, header).then(
      (result) => {
        if (result.data.error) {
          return [false, result];
        }
        console.log("Création de la transaction");
        return [true, result];
      },
      (error) => {
        console.error("Erreur niveau transaction" + error);
        alert("Erreur: vérifiez la connection à l'API");
      }
    );
  };