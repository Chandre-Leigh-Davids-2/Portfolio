<template>
  <div class="slider col-12">
    <div class="logos">
      <i class="lab la-github"></i>
      <i class="las la-code"></i>
      <i class="lab la-css3"></i>
      <i class="lab la-html5"></i>
      <i class="lab la-js-square"></i>
      <i class="lab la-node-js"></i>
      <i class="lab la-vuejs"></i>
      <i class="lab la-bootstrap"></i>
      <i class="bi bi-filetype-sql"></i>

      <i class="lab la-github"></i>
      <i class="las la-code"></i>
      <i class="lab la-css3"></i>
      <i class="lab la-html5"></i>
      <i class="lab la-js-square"></i>
      <i class="lab la-node-js"></i>
      <i class="lab la-vuejs"></i>
      <i class="lab la-bootstrap"></i>
      <i class="bi bi-filetype-sql"></i>

      <i class="lab la-github"></i>
      <i class="las la-code"></i>
      <i class="lab la-css3"></i>
      <i class="lab la-html5"></i>
      <i class="lab la-js-square"></i>
      <i class="lab la-node-js"></i>
      <i class="lab la-vuejs"></i>
      <i class="lab la-bootstrap"></i>
      <i class="bi bi-filetype-sql"></i>
    </div>
  </div>
  <div id="foot">
    <a href="https://github.com/Chandre-Leigh-Davids-2/" target="_blank" title="click on me">
      <img src="https://chany4.github.io/images.Portfolio/images/GitHub-Mark-ea2971cee799.png" alt="gitHub" id="gitPic">
    </a>
    <p>
      Copyright &copy; <span>{{ cYear }}</span> Chandré Leigh Davids | All Rights Reserved.
    </p>

  </div>

</template>
<script>
export default {
  name: "FooterComp",
  data() {
    return {
      cYear: new Date().getUTCFullYear(),
    };
  },
};
</script>

<style scoped>
div {
  height: 70%;
  display: flex;
  justify-content: center;
  background-color: black;

}

#gitPic {
  width: 32px;
  border: 1px;
  border-radius: 50px;
  margin-right:5px ;
}

.footer-Para {
  margin: 5px;
  margin-top: 10px;
  color: white;
}

#foot {
  padding: 19px;
  border-top: 1px solid white;
}

.slider {
  width: 100%;
  height: fit-content;
  overflow: hidden;
  background-color: black;
  padding: 10px;
  z-index: 1;
}

.logos {
  display: flex;
  align-items: center;
  animation: slider 10s linear infinite;
}

.lab {
  font-size: 3rem;
  color: white;
  width: 110px;
  margin: 0 10px;
}

.las {
  font-size: 3rem;
  color: white;
  width: 110px;
  margin: 0 10px;
}

.bi {
  font-size: 3rem;
  color: white;
  width: 110px;
  margin: 0 10px;
}


@keyframes slider {
  from {
    transform: translateX(0px);
  }

  to {
    transform: translateX(-900px);
  }
}
p{
  color: white;
  align-self: center;
}
</style>