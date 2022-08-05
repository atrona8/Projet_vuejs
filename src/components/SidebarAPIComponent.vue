<template>
  <div class="vue-tempalte">
<div class="row mt-5">
  <div class="col-3  bg-light">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a class="nav-link " id="v-pills-home-tab" data-toggle="pill" href="#api" role="tab" aria-controls="v-pills-home" aria-selected="true">Documentation APIs</a>
      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#1user" role="tab" aria-controls="v-pills-profile" aria-selected="false">APIs user</a>
      <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#1.1user" role="tab" aria-controls="v-pills-messages" aria-selected="false">Créer un utilisateur</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#1.2user" role="tab" aria-controls="v-pills-settings" aria-selected="false">Identifier un utilisateur</a>
    </div>
  </div>
  <div class="col-9">
    <DocuAPIComponent />
  </div>
</div>
  </div>
</template>

<script>
import DocuAPIComponent from "../components/DocuAPIComponent.vue";
export default {
  name: "SidebarAPIComponent",
  components: {
    DocuAPIComponent,
  }
};
</script>
