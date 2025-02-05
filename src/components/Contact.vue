<template>
  <div class="container-fluid">
    <h1>Contact Details</h1>
    <div class="row mt-5">
      <div class=" col-lg-12 form">
        <div id="experiment">


          <div class="py-4 px-5">
            <!--  -->
            <div class="row d-flex x justify-content-center">
              <h5>Contact Me</h5>
            </div>
            <!--  -->
            <div class="row">
              <div class="col-md-6 pt-4">
                <div class="col mt-3">
                  <ul>
                    <li class="mt-3">
                      <div class="p">Email :</div>
                      <div class="info-container">
                        <span>
                          <a href="mailto:chandreleighdavids.17@gmail.com" target="_blank">
                            <i class="las la-envelope"></i>
                          </a>
                        </span>
                        <span>
                          <p>chandreleighdavids.17@gmail.com</p>
                        </span>
                      </div>
                    </li>
                    <li class="mt-3">
                      <div class="p">Phone Number :</div>
                      <div class="info-container">
                        <span>
                          <a href="tel:+27733253129" target="_blank">
                        <i class="las la-phone-volume"></i>
                      </a>
                        </span>
                        <span>
                          <p>+27 73 325 3129</p>
                        </span>
                      </div>
                    </li>
                    <li class="mt-3">
                      <div class="p">Location :</div>
                      <div class="info-container">
                        <span>
                          <a href="https://maps.app.goo.gl/dcm884dmrj7SwmCK7" target="_blank">
                        <i class="las la-map-marker-alt"></i>
                      </a>
                        </span>
                        <span>
                          <p>Rocklands, Mitchell's Plain</p>
                        </span>
                      </div>
                    </li>
                    <li class="mt-3">
                      <div class="p">Github :</div>
                      <div class="info-container">
                        <span>
                          <a href="linkedin.com/in/chandre-leigh-davids-50410a33b" target="_blank"><i
                            class="lab la-linkedin"></i></a>
                        </span>
                        <span>
                          <p>Chandre Leigh Davids</p>
                        </span>
                      </div>
                    </li>
                    <li class="mt-3">
                      <div class="p">Github :</div>
                      <div class="info-container">
                        <span>
                          <a href="https://github.com/Chany4" target="_blank" title="click on me"><i
                            class="lab la-github"></i></a>
                        </span>
                        <span>
                          <p>Chany4</p>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!--  -->
              <div class="col-md-6">
                <form action="https://formspree.io/f/mgvvbzav" method="post" target="_blank">
                  <div class="row">
                    <div class="group my-2 col-6">
                      <input required="" type="text" class="input" />
                      <span class="highlight"></span>
                      <span class="bar"></span>
                      <label style="text-indent: 10px;">Name</label>
                    </div>
                    <div class="group my-2 col-6">
                      <input required="" type="text" class="input" />
                      <span class="highlight"></span>
                      <span class="bar"></span>
                      <label style="text-indent: 10px;">Surname</label>
                    </div>
                  </div>
                  <div class="group my-3">
                    <input required="" type="text" class="input" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email</label>
                  </div>
                  <div class="group my-4" id="text-area">
                    <textarea placeholder="Questions" name="message" id="message"></textarea>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                  </div>


                  <div class="d-flex justify-content-center">
                    <div class="d-flex justify-content-center align-content-center mx-2">
                      <div class="button-borders">
                        <input type="submit" class="primary-button" />
                      </div>
                    </div>
                    <div class="d-flex justify-content-center align-content-center mx-2">
                      <div class="button-borders">
                        <button type="reset" class="primary-button">Clear</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!--  -->
        <form action="https://formspree.io/f/mgvvbzav" method="POST" target="_blank">
        </form>
      </div>
    </div>

  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.container-fluid {
  min-height: 100vh;
  width: 95vw;
  padding: 8%;
  background-color: transparent;
  border: 3px solid white;
  border-radius: 15px;
}

h1 {
  font-family: "Orbitron", serif;
  text-align: center;
  color: white;
  text-shadow: -2px -2px 4px rgb(51, 51, 51);
}

p {
  font-family: "Poppins", serif;
  font-size: 3vh;
}

/* new styles */

a {
  text-decoration: none;
  color: black;
}

ul li {
  list-style: none;
}

i:hover {
  scale: 1.5;
  color: rgb(85, 85, 85);
}

ul>li>p {
  font-size: 80%;
}

ul>li>div>span>p {
  font-size: 80%;
}

label {
  width: 92%;
}

input {
  width: 100%;
}

textarea {
  width: 100%;
  height: 200px;
}

#clear {
  object-fit: contain;
  background-color: #c00066;
  color: white;
}

#submit {
  object-fit: contain;
  background-color: #c00066;
  color: white;
}

#buttonDiv {
  display: flex;
  justify-content: center;
  margin: 5px;
}

#experiment {
  background-color: white;
  max-height: 100wh;
}

.sect1 {
  object-fit: contain;
  height: 100vh;
  object-fit: contain;
}

img {
  width: 100%;
  height: 100%;
  left: 0;
}

h5 {
  font-family: "Poppins", serif;
  /* font-size: 4rem; */
}

.x {
  margin-right: 50%;
}

.group {
  position: relative;
}

.input {
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;
}

.input:focus {
  outline: none;
}

label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.input:focus~label,
.input:valid~label {
  top: -20px;
  font-size: 14px;
  color: #5264ae;
}

.bar {
  position: relative;
  display: block;
  width: 200px;
}

.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

.input:focus~.bar:before,
.input:focus~.bar:after {
  width: 50%;
}

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

.input:focus~.highlight {
  animation: inputHighlighter 0.3s ease;
}

#submitBtn {
  background-color: black;
  color: white;
}

p {
  font-family: "Chathura", sans-serif;
  font-size: 180%;
}


/*  */
.primary-button {
  font-family: "Ropa Sans", sans-serif;
  /* font-family: 'Valorant', sans-serif; */
  color: white;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 0.05rem;
  border: 1px solid #0e1822;
  padding: 0.8rem 2.1rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 531.28 200'%3E%3Cdefs%3E%3Cstyle%3E .shape %7B fill: %23FF4655 /* fill: %230E1822; */ %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpolygon class='shape' points='415.81 200 0 200 115.47 0 531.28 0 415.81 200' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
  background-color: #0e1822;
  background-size: 200%;
  background-position: 200%;
  background-repeat: no-repeat;
  transition: 0.3s ease-in-out;
  transition-property: background-position, border, color;
  position: relative;
  z-index: 1;
}


.primary-button:hover {
  border: 1px solid #ff858f;
  color: white;
  background-position: 40%;
}


.primary-button:before {
  content: "";
  position: absolute;
  background-color: #0e1822;
  width: 0.2rem;
  height: 0.2rem;
  top: -1px;
  left: -1px;
  transition: background-color 0.15s ease-in-out;
}


.primary-button:hover:before {
  background-color: white;
}


.primary-button:hover:after {
  background-color: white;
}


.primary-button:after {
  content: "";
  position: absolute;
  background-color: #ffbfc5;
  width: 0.3rem;
  height: 0.3rem;
  bottom: -1px;
  right: -1px;
  transition: background-color 0.15s ease-in-out;
}


.button-borders {
  position: relative;
  width: fit-content;
  height: fit-content;
}


.button-borders:before {
  content: "";
  position: absolute;
  width: calc(100% + 0.5em);
  height: 50%;
  left: -0.3em;
  top: -0.3em;
  border: 1px solid #0e1822;
  border-bottom: 0px;
  /* opacity: 0.3; */
}


.button-borders:after {
  content: "";
  position: absolute;
  width: calc(100% + 0.5em);
  height: 50%;
  left: -0.3em;
  bottom: -0.3em;
  border: 1px solid #0e1822;
  border-top: 0px;
  /* opacity: 0.3; */
  z-index: 0;
}


.shape {
  fill: #0e1822;
}


@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }


  to {
    width: 0;
    background: transparent;
  }
}

span {
  width: fit-content;
}
.info-container {
  display: flex;
  align-items: center; /* Align items vertically */
  gap: 8px; /* Adjust spacing between elements */
}

.info-container p {
  margin: 0; /* Remove default margin from <p> */
}

</style>