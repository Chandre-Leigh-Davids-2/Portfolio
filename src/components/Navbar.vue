<template>
    <div>
      <!-- The overlay menu -->
      <div id="myNav" class="overlay" :style="{ width: navWidth }">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <div class="overlay-content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
  
      <!-- The navigation bar -->
      <div class="nav">
        <p>This is the logo</p>
        <span style="font-size:30px;cursor:pointer" @click="openNav">&#9776;</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        navWidth: "0%" // Initial width of the navigation is 0%
      };
    },
    methods: {
      openNav() {
        this.navWidth = "100%"; // Set the width to 100% to open the nav
      },
      closeNav() {
        this.navWidth = "0%"; // Set the width back to 0% to close the nav
      }
    }
  };
  </script>
  
  <style scoped>
  .nav {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 0.8% 1.2% 0.8% 1.2%;
    background-color: rgb(194, 194, 194);
    margin-top:0.1%;
  }
  
  .overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
  }
  
  .overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
  
  .overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  
  .overlay a:hover,
  .overlay a:focus {
    color: #f1f1f1;
  }
  
  .overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
  }
  
  @media screen and (max-height: 450px) {
    .overlay a {
      font-size: 20px;
    }
  
    .overlay .closebtn {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
  }
  </style>
  