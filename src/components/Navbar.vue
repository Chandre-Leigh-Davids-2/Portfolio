<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#main">
        <div class="img"><img src="../assets/images/Dark Green Modern Initial Logo.png" loading="lazy" alt="logo"></div>
      </a>
      <!-- Toggle Button -->
      <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Collapsible Navbar -->
      <div :class="['collapse', 'navbar-collapse', { show: isNavbarOpen }]" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#main">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#aboutSection">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#aboutSection">Education and Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // The state of the navbar (collapsed or expanded)
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      // Toggle the collapse state when the button is clicked
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>

<style scoped>
nav {
  background-color: black;
  height: 8vh;
  border-bottom: 1px solid white;
}

.nav-link {
  background-color: black;
  height: 8vh;
}
.navbar-nav .nav-link {
  font-size: 1rem;
  color: white;
  padding: 15px 20px;
  transition: color 0.3s ease, transform 0.3s ease;
}
.navbar-nav .nav-link.active-link {
  color: azure;
}
.img {
  width: 4vw;
  height: auto;
  object-fit: contain;
  margin: 2px;
}
@media screen and (max-width:610px) {
  .img {
    width: 7vw;
    height: auto;
    object-fit: contain;
    margin: 2px;
  }
}
@media screen and (max-width:430px) {
  .img {
    width: 9vw;
    height: auto;
    object-fit: contain;
    margin: 2px;
  }
}
.img> img {
  height: 100%;
  width: 100%;
}
</style>
