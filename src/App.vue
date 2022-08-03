<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
     <NavComponent/>
     
    <MastheadComponent/>
     
    
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavComponent from "./components/NavComponent.vue";
import MastheadComponent from  "./components/MastheadComponent.vue";

export default {
  components: {
    NavComponent,
    MastheadComponent,
},
};
</script>
