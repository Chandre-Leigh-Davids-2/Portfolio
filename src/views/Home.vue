<template>
  <div class="Wrapper">
    <section class="section Landing" id= "main">
      <LandingComp/>
    </section>

    <section class="section" id= "aboutSection">
      <AboutComp/>
    </section>

    <section class="section" id= "projects">
      <PrpjectsComp/>
    </section>

    <section class="section">
      <CerificatesComp/>
    </section>

    
    <section class="section" id="contact">
      <ContactComp/>
    </section>
    
    <section class="section" id="footer">
      <FooterComp/>
    </section>

  </div>
</template>
<script>
import LandingComp from '@/components/Landing.vue'
import AboutComp from '@/components/About.vue'
import PrpjectsComp from '@/components/Projects.vue'
import CerificatesComp from '@/components/Cerificates..vue'
import ContactComp from '@/components/Contact.vue'
import FooterComp from '@/components/Footer.vue'



export default {
  components : {
    LandingComp,
    AboutComp,
    PrpjectsComp,
    CerificatesComp,
    ContactComp,
    FooterComp,
  }
  }

</script>
<style scoped>
.section{
  padding-bottom: 1%;
}
.Landing{
  padding-top: 1%;
}
.Wrapper{
  background-color: rgb(36, 36, 36);
  /* background-color: white; */
}
</style>