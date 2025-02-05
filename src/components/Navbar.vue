<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <div class="img"><img src="../assets/images/Dark Green Modern Initial Logo.png" loading="lazy" alt="logo"></div>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" exact-active-class="active-link" href="#main" data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" exact-active-class="active-link" href="#aboutSection">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" exact-active-class="active-link" href="#aboutSection">Education and Experience</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" exact-active-class="active-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" exact-active-class="active-link" href="#contact">Contact</a>

          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

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

.navbar-brand img {
  height: 50px;
  object-fit: cover;
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

.navbar-toggler {
  border: none;
}
.img{
  width: 4vw;
  height: auto;
  object-fit: contain;
  margin: 2px;
}
.img>img{
  height: 100%;
  width: 100%;
}
</style>
