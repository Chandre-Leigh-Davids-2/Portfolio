<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-5 x">
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
      <div class="col-lg-7">
        <div class="Landing-picture">
          <img src="/img/icons/IMG_20240702_135344.jpg" alt="Picture of Chandré Leigh Davids">
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
template{
  width: 100vw;
  height: 100vh;
}
.container-fluid {
  height: 100vh;
  border-bottom: 2px solid gray;
}

.x {
  margin: 0 auto;
  /* height: 90vh; */
  display: flex;
  flex-direction: column; /* Stack the boxes vertically */
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
}

.box {
  width: 98%;
  /* height: 18vh; */
  margin: 2%;
  display: flex;
  align-items: center;
}
.box p{
  font-size: 50px;
  margin: 2%;
}
i{
  margin: 3%;
  font-size: 40px;
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