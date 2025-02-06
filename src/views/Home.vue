<template>
  <div class="Wrapper">
    <section class="section Landing" id="main">
      <LandingComp />
    </section>

    <section class="section" id="aboutSection">
      <AboutComp />
    </section>

    <section class="section" id="projects">
      <PrpjectsComp />
    </section>


    <section class="section" id="contact">
      <ContactComp />
    </section>

    <section class="section" id="footer">
      <FooterComp />
    </section>

  </div>
</template>
<script>
import LandingComp from '@/components/Landing.vue'
import AboutComp from '@/components/About.vue'
import PrpjectsComp from '@/components/Projects.vue'
import ContactComp from '@/components/Contact.vue'
import FooterComp from '@/components/Footer.vue'



export default {
  components: {
    LandingComp,
    AboutComp,
    PrpjectsComp,
    ContactComp,
    FooterComp,
  }
}

</script>
<style scoped>
.Landing {
  background-image: url('../assets/images/Rectangle\ 6.png');
  padding-top: 1%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
}

#aboutSection {
  padding-top: 1%;
  background-image: url('../assets/images/about.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
}

#projects {
  padding-top: 1%;
  background-image: url('../assets/images/projetcs.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
}

#contact {
  padding-top: 1%;
  background-image: url('../assets/images/certifcates.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.Wrapper {
  background-color: #F9E1B5;
  overflow-x: hidden;
}
</style>