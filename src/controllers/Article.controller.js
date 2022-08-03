exports.createArticle = (axios,endpoint, params, header) => {
    return axios.post(endpoint, params, header).then(
    (result) => {
      if (result.data.error) {

        return [false, result]
      }
      console.log("Création d'article reussit")
        return [true, result]
    },
    (error) => {
      console.error('Erreur niveau article');
      coNsole.log(error);
      alert("Erreur: vérifiez la connection à l'API");
    }
  );
};

exports.getArticles = (axios,endpoint,  header) => {
    return axios.get(endpoint, header).then(
    (result) => {
      if (result.data.error) {

        return [false, result]
      }
      console.log("recupérage d'articles reussit")
        return [true, result]
    },
    (error) => {
      console.error('Erreur niveau article');
      coNsole.log(error);
      alert("Erreur: vérifiez la connection à l'API");
    }
  );
};


