<template>
  <div data-aos="zoom-out" class="container-fluid d-none d-md-block">
    <h1>Dashboard</h1>
    <!-- Display images from manyFoods array with names and urls -->
    <div v-for="food in manyFoods" :key="food.gitHub" class="row x mySlides">
      <div>
        <div class="d-flex justify-content-between">
          <div class="github">
            <a :href="food.gitHub" target="_blank"><i class="bi bi-github"></i></a>
          </div>
          <div class="live">
            <a :href="food.live" target="_blank"><i class="bi bi-browser-chrome"></i></a>
          </div>
        </div>
        <img :src="food.url" loading="lazy" class="img1 abnf" />
      </div>
    </div>
    <!-- Div footer -->
    <div v-for="food in manyFoods" :key="food.gitHub" class="row x mySlides"></div>
    <!-- Prev/ Next -->
    <button class="prev" @click="changeSlide('prev')">
      <div class="left"><img src="../assets/images/left.png" alt=""></div>
    </button>
    <button class="next" @click="changeSlide('next')">
      <div class="right"><img src="../assets/images/right.png" alt=""></div>
    </button>
    <br>
    <!-- Display images from littleFoods array -->
    <div v-for="food in littleFoods" :key="food.url2" class="row y myColumns">
      <img :src="food.url2" loading="lazy" class="img2" />
    </div>

  </div>

  <!-- Modal -->
  <div v-if="showModal" class="modal" tabindex="-1" role="dialog" @click.self="closeModal">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ modalTitle }}</h5>
        </div>
        <div class="modal-body">
          <p>{{ modalContent }}</p>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <p>{{ modalFooter }}</p>
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>


  <!-- smaller screen size -->
  <div class="container-fluid d-block d-md-none">
    <h1>Dashboard</h1>
    <!-- Single container to loop through food items -->
    <div class="row" v-for="(food, index) in manyFoods" :key="index"
      :style="{ display: sliderSmallIndex === index + 1 ? 'flex' : 'none' }">
      <!-- Image and Navigation Buttons -->
      <div class="col-12 pop imgDiv text-center">
        <img :src="food.url" alt="project image" class="img-fluid" />
        <div class="d-flex justify-content-center">
          <button class="btn previous" @click="changeSmallSlider('previous')">
            <div class="left"><img src="../assets/images/left.png" alt=""></div>
          </button>
          <button class="btn after" @click="changeSmallSlider('next')">
            <div class="right"><img src="../assets/images/right.png" alt=""></div>
          </button>
        </div>
      </div>

      <!-- Description -->
      <div class="col-12">
        <div class="pop">
          <h5>Description</h5>
          <div class="p">
            <p class="box description">{{ food.description }}</p>
          </div>
        </div>
      </div>

      <!-- Live and GitHub Links -->
      <div class="col-12">
        <div class="box pop">
          <h5>View Live / Github Repo</h5>
          <div class="row d-flex justify-content-between mx-3">
            <span class="a">
              <a :href="food.gitHub" target="_blank"><i class="bi bi-github"></i></a>
            </span>
            <span class="a">
              <a :href="food.live" target="_blank"><i class="bi bi-browser-chrome"></i></a>
            </span>
          </div>
        </div>
        <div class="box pop">
          <h5>Status</h5>
          <p>{{ food.status }}</p>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '@/assets/images/pokemon.png';
import img2 from '@/assets/images/visio.png';
import img3 from '@/assets/images/wordpress.png';
import img4 from '@/assets/images/to-do-list.png';
import img5 from '@/assets/images/calculator.png';
export default {
  data() {
    return {
      slideIndex: 1,
      sliderSmallIndex: 1,
      // manyFoods is an array of objects with name and url
      manyFoods: [
        { gitHub: "https://github.com/ImaraanSheldon/pokedex", url: img1, live: 'https://pokemon-beta-livid.vercel.app/', description: 'This is a pokedex that I created with my team using the Flask framework. We all had specific roles, and I helped with both the backened and frontend of the project. The project still has much room to improve but this is the result of what we initially planned.', status: 'complete' },
        { gitHub: "https://github.com/Chandre-Leigh-Davids-2/VISIO", url: img2, live: 'https://visio-pearl.vercel.app/', description: 'I created a website for VISIO using only HTML,CSS and JavaScript. No framework and no CSS libraries were used.', status: 'complete' },
        { url: img3, live: 'https://dev-ecommerce-giftedmoments.pantheonsite.io/', description: 'I created this using Wordpress during my Web Development learning journey at LC Studio. It has a pay and purchase system included and it fetches products from an API.', status: 'minor Adjustments needed' },
        { gitHub: "https://github.com/Chandre-Leigh-Davids-2/toDoList", url: img4, live: 'https://to-do-list-nu-blush.vercel.app/', description: 'I created this as one of my first JavaScript projects at LC Academy.', status: 'complete' },
        { gitHub: "https://github.com/Chandre-Leigh-Davids-2/calculator", url: img5, live: 'https://calculator-peach-iota-86.vercel.app/', description: 'This is a basic calculator that I built using JavaScript and HTML/CSS, at LC Academy.', status: 'complete' },
      ],
      // Corrected littleFoods array: each object now contains a unique url2
      littleFoods: [
        { url2: img1 },
        { url2: img2 },
        { url2: img3 },
        { url2: img4 },
        { url2: img5 }
      ]
    };
  },
  mounted() {
    this.showSlides(this.slideIndex); // Initialize the first slide when the component is mounted
    this.showSlider(this.sliderSmallIndex);
    AOS.init();

    // Ensure AOS refreshes after navigation
    this.$watch('$route', () => {
      AOS.refreshHard();
    });
  },
  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n)); // Call showSlides with updated slideIndex
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n)); // Set slideIndex and call showSlides
    },
    showSlides(index) {
      let slides = document.getElementsByClassName("mySlides");
      let columns = document.getElementsByClassName("myColumns");
      // Handle wrapping of index
      if (index > slides.length) { this.slideIndex = 1; }
      if (index < 1) { this.slideIndex = slides.length; }
      // Hide all slides and columns
      for (let slide of slides) {
        slide.style.display = "none";
      }
      for (let column of columns) {
        column.style.display = "none";
      }
      // Show the current slide and current column
      slides[this.slideIndex - 1].style.display = "block";
      columns[this.slideIndex - 1].style.display = "block";
    },
    changeSlide(direction) {
      if (direction === 'prev') {
        this.slideIndex -= 1;
      } else {
        this.slideIndex += 1;
      }
      this.showSlides(this.slideIndex); // Ensure that showSlides is called after updating slideIndex
    },
    // Show the current slider item for smaller screens
    showSlider(index) {
      // Ensure the index wraps around the available slides
      if (index > this.manyFoods.length) {
        this.sliderSmallIndex = 1;
      } else if (index < 1) {
        this.sliderSmallIndex = this.manyFoods.length;
      } else {
        this.sliderSmallIndex = index;
      }
    },
    changeSmallSlider(direction) {
      if (direction === 'previous') {
        this.showSlider(this.sliderSmallIndex - 1);
      } else {
        this.showSlider(this.sliderSmallIndex + 1);
      }
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');


/* smaller screen size */
.imgDiv {
  min-width: 100%;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
}

p {
  font-size: 2vw;
}

.pop {
  padding: 1%;
  margin-bottom: 1%;
  border-radius: 10px;
  border: 3px solid white;
  background-color: rgba(255, 255, 255, 0.496);
  backdrop-filter: blur(8px);
  /* Apply blur effect to the background */
  -webkit-backdrop-filter: blur(8px);
  /* For Safari support */
}

.previous,
.after {
  position: absolute;
  bottom: 45%;
  z-index: 2;
  color: green;
  font-size: 5vh;
}

.after {
  right: 0%;
}

.previous {
  left: 0;
}

span {
  width: max-content;
}

.description {
  object-fit: contain;
  text-wrap: wrap;
}


/* Larger Screen Size */
.container-fluid {
  position: relative;
  min-height: 100vh;
  width: 95vw;
  padding: 8%;
  border-radius: 10px;
  border: 3px solid white;
  background-color: rgba(255, 255, 255, 0.496);
  backdrop-filter: blur(8px);
  /* Apply blur effect to the background */
  -webkit-backdrop-filter: blur(8px);
  /* For Safari support */
  max-width: 100vw;
  min-height: 90%;
}

h1,
h5 {
  text-align: center;
  font-family: "Orbitron", serif;
  color: white;
  text-shadow: -2px -2px 4px rgb(66, 66, 66);
}

.img1 {
  width: 100%;
  animation: zoomIn 0.6s ease-out;
  /* Apply the zoom-in animation */
}

.img2 {
  width: 100%;
  height: 100%;
  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);
}

@keyframes zoomIn {
  0% {
    transform: scale(0.93);
    /* Start smaller */
    opacity: 0;
  }

  100% {
    transform: scale(1);
    /* End at normal size */
    opacity: 1;
  }
}

.x {
  width: 60vw;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 25%;
  left: 20%;
}

.y {
  display: flex;
  justify-content: center;
  position: relative;
}

.github {
  color: red;
  font-size: 2.5vh;
  position: absolute;
  bottom: 0;
  left: 40%;
  max-width: fit-content;
  animation: zoomIn 0.6s ease-out;
}

.live {
  color: red;
  font-size: 2.5vh;
  position: absolute;
  bottom: 0;
  right: 40%;
  max-width: fit-content;
  animation: zoomIn 0.6s ease-out;
}

.descrip {
  color: red;
  font-size: 2.5vh;
  position: absolute;
  bottom: 0;
  right: 20%;
  max-width: fit-content;
  animation: zoomIn 0.6s ease-out;
}

button {
  background-color: transparent;
  border: none;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  z-index: 5;
  top: 50%;
  width: auto;
  color: rgb(97, 0, 0);
  font-weight: bold;
  font-size: 5vh;
  border-radius: 0 3px 3px 0;
}

/* Position the "next button" to the right */
.next {
  right: 8.1%;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

a {
  color: #3B5B43;
}

.bi {
  font-size: 3.5vh;
}

.left {
  width: 8.5vw;
}

.right {
  width: 8.5vw;
}

@media screen and (max-width: 768px) {
  .left {
    width: 11vw;
  }
  .right {
    width: 11vw;
  }
  .previous,
  .after {
    bottom: 30%;
  }

}
</style>
