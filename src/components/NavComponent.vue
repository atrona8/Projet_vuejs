<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" >
    <div class="container">
      <a class="navbar-brand" href="#">Money</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars ms-1"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">

          <li class="nav-item"><a class="nav-link" to="/"><router-link class="nav-link pr-3" to="/doc-api">Documentation API</router-link> </a></li>
          <li class="nav-item"><a class="nav-link" to="/"><router-link class="nav-link pr-3" to="/">Setting</router-link> </a></li>
          <li class="nav-item"><a class="nav-link" ><router-link class="nav-link pr-3" to="/account-creation">Account</router-link> </a></li>
           <li class="nav-item"><a class="nav-link" to="/"><router-link class="nav-link pr-3" to="/">Log In</router-link> </a></li>
          <li class="nav-item"><a class="nav-link" to="/"><router-link class="nav-link pr-3" to="/signup">Sign Up</router-link></a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {},
  name: "NavComponent",
  data() {
    return {};
  },
  head: {
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    ],
    script: [
      // Font Awesome icons
      {
        src: "https://use.fontawesome.com/releases/v6.1.0/js/all.js",
        crossorigin: "anonymous",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
      },
      { src: "https://cdn.startbootstrap.com/sb-forms-latest.js" },
    ],
    // link tags
    link: [
      // Google fonts
      {
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700",
        rel: "stylesheet",
        type: "text/css",
      },
      {
        href: "https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700",
        rel: "stylesheet",
        type: "text/css",
      },

      // ...
    ],
  },
};
</script>

