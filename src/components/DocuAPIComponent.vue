<template>
  <div class="vue-tempalte">
    <div class="px-5 pt-5 pb-5">
      <div class="row">
        <div class="mx-auto col-md-5">
          <h3 id="api"><strong>Documentation API</strong></h3>
        </div>
      </div>

      <div class="row px-auto pt-5">
        <div class="">
          <h4  id="1user"><strong>1. APIs utilisateur</strong></h4>
        </div>
      </div>
      <div id="conteneur_secteur">
        <div class="pt-4">
          <h5  id="1.1user">1.1 Créer un utilisateur</h5>
        </div>
        <div class="row px-5 pt-3">
          <div class="col-md-7">
            <label class="sr-only" for="">endpoint</label>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">Endpoint</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername2"
                value=""
                readonly
              />
            </div>
          </div>
        </div>
        <div class="row px-5 pt-3">
          <div class="col-md-7">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Paramétres</th>
                  <th scope="col">Caractéristiques</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>email</td>
                  <td>L'identifiant de l'utilisateur,<br />Requis</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>phone</td>
                  <td>Facultatif</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>password</td>
                  <td>
                    Le mot de passe est hashé avant d'être stoqué,<br />Requis
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>password_confirmation</td>
                  <td>
                    Il doit correspondre au premier ,sinon une erreur est
                    envoyée ,<br />Requis
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>category</td>
                  <td>
                    Permet de différencier les clients des marchants,<br />Prend
                    la valeur 'marchant' par defaut
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row px-5 pt-3">
          <div class="col-md-7">
            <div class="row">
              <div class="mx-auto">
                <strong>Résultats</strong>
              </div>
            </div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Réussite</th>
                  <th scope="col">Echec</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    status: 200,<br />
                    data,<br />
                    message: "New user added successfully"
                  </td>
                  <td>
                    status: 400,<br />
                    message: "password and password_confirmation must be
                    identical"
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="conteneur_secteur">
        <div class="pt-4">
          <h5  id="1.2user">1.2 Connecter un utilisateur</h5>
        </div>
        <div class="row px-5 pt-3">
          <div class="col-md-7">
            <label class="sr-only" for="">endpoint</label>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">Endpoint</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="1.2connect"
                value=""
                readonly
              />
            </div>
          </div>
        </div>
        <div class="row px-5 pt-3">
          <div class="col-md-7">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Paramétres</th>
                  <th scope="col">Caractéristiques</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>email</td>
                  <td>L'identifiant de l'utilisateur,<br />Requis</td>
                </tr>

                <tr>
                  <th scope="row">2</th>
                  <td>password</td>
                  <td>Le mot de passe en clair,<br />Requis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row px-5 pt-3">
          <div class="col-md-7">
            <div class="row">
              <div class="mx-auto">
                <strong>Résultats</strong>
              </div>
            </div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Réussite</th>
                  <th scope="col">Echec</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    status: 201,<br />
                    token: token (un token généré par jwt.sign()),<br />
                    user (l'utilisateur connecté),<br />
                    error: false,<br />
                    message: "User " email de l'utilisateur " connected
                    successfully",
                  </td>
                  <td>
                    status: 400,<br />
                    error: true,<br />
                    data,<br />
                    message: "Wrong identifiers"
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      à compléter
    </div>
  </div>
</template>

<script>
export default {
  name: "DocuAPIComponent",
};
</script>
