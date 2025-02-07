<template>
  <div class="container-fluid d-none d-lg-block ">
    <!-- large screen -->
    <div class="d-flex justify-content-center ">
      <div class="row opacity ">
        <div class="col-md-8 d-flex flex-column justify-content-between">
          <!-- arrows -->
          <div class="row d-flex justify-content-between">
            <div class="row d-flex justify-content-between">
              <div class="top-left arrow">
                <img src="../assets/images/top-left.png" alt="">
              </div>
              <div class="top-right arrow">
                <img src="../assets/images/top-right.png" alt="">
              </div>
            </div>
          </div>

          <!-- middle content -->
          <div class="row">
            <div class="col-md-3">
              <div class="time-vertical m">{{ currentTime }}</div>
            </div>
            <div class="col-md-9 m">
              <div class="m">
                <p class="name">Chandre Leigh Davids</p>
                <div class="box d-flex justify-content-start">
                  <a href="https://github.com/Chandre-Leigh-Davids-2/" target="_blank" class="mx-3"><i class="bi bi-github"></i></a>
                  <a href="https://www.linkedin.com/in/chandre-leigh-davids-50410a33b" target="_blank"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <!-- arrows -->
          <div class="row d-flex justify-content-between">
            <div class="row d-flex justify-content-between">
              <div class="top-left arrow">
                <img src="../assets/images/bottom-left.png" alt="">
              </div>
              <div class="top-right arrow">
                <img src="../assets/images/bottom-right.png" alt="">
              </div>
            </div>
          </div>
        </div>

        <!-- Image section -->
        <div class="col-md-4 d-flex align-content-center">
          <div class="img">
            <img src="../assets/images/download (1) 1.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Small Screen -->
  <div class="container-fluid d-block d-lg-none">
    <div class="row d-flex ">
      <div class="x ">
        <p>Hi. I am </p>
        <div class="box">
          <p>Chandré Leigh Davids</p>
        </div>
      </div>
      <div class="d-flex align-content-center">
        <div class="Landing-picture">
          <img src="../assets/images/pictureOfSelf1.png" alt="Picture of Chandré Leigh Davids">
        </div>
      </div>
      <div class="d-block d-lg-none d-flex justify-content-center">
        <div class="box d-flex justify-content-center">
          <i class="bi bi-github"></i>
          <i class="bi bi-linkedin"></i>
        </div>
      </div>
      <div class="my-3">
        <p>I am a Full Stack Developer</p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      currentTime: '',
    };
  },
  methods: {
    updateTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      this.currentTime = `${hours}:${minutes}:${seconds}`;
    },
  },
  mounted() {
    // Initialize AOS animations
    AOS.init();

    // Ensure AOS refreshes after navigation
    this.$watch('$route', () => {
      AOS.refreshHard();
    });

    // Start the clock
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');

.container-fluid {
  min-height: 80vh;
  width: 95vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 3%;
  border: 3px solid white;
  border-radius: 15px;
}

@media screen and (max-width:992px) {
  .container-fluid {
    min-height: 100vh;
    width: 95vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 3%;
    border: 3px solid white;
    border-radius: 15px;
  }

  p {
    text-align: center;
  }
}

.opacity {
  position: relative;
  box-shadow: 1px 1px 2px rgb(233, 225, 225);
  background-color: rgba(255, 255, 255, 0.496);
  border-radius: 10px;
  max-width: 80vw;
  min-height: 90%;
  padding: 2%;
  backdrop-filter: blur(8px);
  /* Apply blur effect to the background */
  -webkit-backdrop-filter: blur(8px);
  /* For Safari support */
}

.row {
  width: 100%;
}

.m {
  height: 55vh;
}

p {
  margin: 2%;
  color: white;
  font-family: "Orbitron", serif;
  font-size: 7vw; 
}

.name {
  font-size: 10vh;
}

@media screen and (max-width:1115px) {
  .name {
    font-size: 7vh;
  }
}

.arrow {
  width: 10vw;
  height: 10vh;
}

.time-vertical {
  margin: 2%;
  color: white;
  font-family: "Orbitron", serif;
  font-size: 11vh;
  writing-mode: vertical-rl;
  text-align: center;
  /* Centers the text horizontally */
}

@media screen and (max-width:992px) {
  .box p {
    font-size: 5vw;
  }

  .time-vertical {
    font-size: 8vh;
    /* Adjust size for smaller screens */
  }
}

i {
  margin: 3%;
  font-size: 40px;
  color: white;
}

img {
  width: 100%;
  height: 100%;
}

.Landing-picture {
  width: 100vw;
  /* height: 50vh; */
}
</style>
