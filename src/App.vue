<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <NavComponent />

    <MastheadComponent />

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>

  <!-- Footer -->
  
    <FooterComponent />
 

  </div>



</template>

<script>
import NavComponent from "./components/NavComponent.vue";
import MastheadComponent from "./components/MastheadComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    NavComponent,
    MastheadComponent,
    FooterComponent,
  },
};
</script>
