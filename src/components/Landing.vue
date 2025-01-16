<template>
  <div class="container-fluid">
    <div class="row p-1">
      <div class="col-lg-5 x d-none d-lg-block">
        <div class="box">
          <p> Hi. I am </p>
        </div>
        <div class="box">
          <p>Chandré Leigh Davids</p>
        </div>
        <div class="box">
          <i class="bi bi-github"></i>
          <i class="bi bi-linkedin"></i>
        </div>
      </div>
      <div class="col-lg-7 d-none d-lg-block">
        <div class="Landing-picture">
          <img src="/img/icons/IMG_20240702_135344.jpg" alt="Picture of Chandré Leigh Davids">
        </div>
      </div>

      <!-- Small Screen -->
      <div class="row x d-block d-lg-none">
        <h1> Hi. I am </h1>
        <div class="box">
          <p>Chandré Leigh Davids</p>
        </div>
      </div>
      <div class="d-block d-lg-none">
        <div class="Landing-picture">
          <img src="/img/icons/IMG_20240702_135344.jpg" alt="Picture of Chandré Leigh Davids">
        </div>
      </div>
      <div class="d-block d-lg-none d-flex justify-content-center">
        <div class="box d-flex justify-content-center">
          <i class="bi bi-github"></i>
          <i class="bi bi-linkedin"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>

.container-fluid {
  height: 100vh;
  width: 95vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 3%;
  border: 2px solid #FF007F;
  border-radius:15px;

}
.row>* {
  display: flex;
  justify-content: center;
}

.h1 {
  text-align: center;
  width: max-content;
}
.x {
  margin: 0 auto;
  /* height: 90vh; */
  display: flex;
  flex-direction: column;
  /* Stack the boxes vertically */
  justify-content: center;
  /* Center vertically */
  align-items: center;
  /* Center horizontally */
}

.box {
  width: 98%;
  /* height: 18vh; */
  margin: 2%;
  display: flex;
  align-items: center;
}

.box p {
  margin: 2%;
  color: white;
}

.box p {
  font-size: 50px;
  margin: 2%;
}

@media screen and (max-width:992px) {
  .box p {
    font-size: 5vw;
  }
}

i {
  margin: 3%;
  font-size: 40px;
  color: white;
}

.Landing-picture {
  width: 100%;
  /* height: 90vh; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.Landing-picture img {
  width: 70%;
  height: 67.5%;
}
</style>