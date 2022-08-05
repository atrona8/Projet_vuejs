exports.createProfil =  (axios, endpoint, params, header) => {
  
  return axios.post(endpoint, params, header).then(
   (result) => {
     if (result.data.error) {
       
       return [false, result];
     }
     console.log("INSERT INTO PROFIL(firstname, lastname, country, age, userid)  values("+params.firstname+", "+params.lastname+", "+params.country+", "+params.age+", "+params.userid+")");
     return [true, result];
   },
   (error) => {
     console.error("Erreur niveau profil" + error);
     alert("Erreur: vérifiez la connection à l'API");
   }
 );
 
};


