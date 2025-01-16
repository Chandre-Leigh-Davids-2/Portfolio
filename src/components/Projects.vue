<template>
  <div class="container-fluid d-none d-md-block">
    <!-- Display images from manyFoods array with names and urls -->
    <div v-for="food in manyFoods" :key="food.name" class="row x mySlides">
      <div class="numbertext">{{ food.name }}</div>
      <img :src="food.url" loading="lazy" class="img1 abnf" />
    </div>
    <!-- Prev/ Next -->
    <button class="prev" @click="changeSlide('prev')">&lt;</button>
    <button class="next" @click="changeSlide('next')">&gt;</button>
    <br>
    <!-- Display images from littleFoods array -->
    <div v-for="food in littleFoods" :key="food.url2" class="row y myColumns">
      <img :src="food.url2" loading="lazy" class="img2" />
    </div>
    
  </div>



<!-- smaller screen size -->
  <div class="container-fluid d-block d-md-none">
    <h1>Other slider</h1>
  </div>


</template>

<script>
import img1 from '@/assets/images/pexels-cottonbro-5657664.jpg';
import img2 from '@/assets/images/pexels-cottonbro-9643920.jpg';
import img3 from '@/assets/images/pexels-cottonbro-6862353.jpg';
export default {
  data() {
    return {
      slideIndex: 1,
      // manyFoods is an array of objects with name and url
      manyFoods: [
        { name: "1/3", url: img1 },
        { name: "2/3", url: img2 },
        { name: "3/3", url: img3 },
      ],
      // Corrected littleFoods array: each object now contains a unique url2
      littleFoods: [
        { url2: img1 },
        { url2: img2 },
        { url2: img3}
      ]
    };
  },
  mounted() {
    this.showSlides(this.slideIndex); // Initialize the first slide when the component is mounted
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
    }

  }
}
</script>

<style scoped>
.container-fluid {
  position: relative;
  min-height: 100vh;
  width: 95vw;
  padding: 3%;
  background-color: transparent;
  border: 2px solid #FF007F;
  border-radius:15px;
}

.img1 {
  width: 60vw;
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

.numbertext {
  color: red;
  font-size: 2.5vh;
  position: absolute;
  bottom: 0;
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
  right: 3%;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
