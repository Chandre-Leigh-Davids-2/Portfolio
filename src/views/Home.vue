<template>
  <div class="Wrapper">
    <section class="section Landing i" id= "main">
      <LandingComp/>
    </section>

    <section class="section about i padding" id= "aboutSection">
      <AboutComp/>
    </section>
    
    <section class="section padding space-resume i" id= "Resume">
      <ResumeComp/>
    </section>

    <section class="section i padding" id= "projects">
      <PrpjectsComp/>
    </section>

    
    <section class="section padding" id="contact">
      <ContactComp/>
    </section>
    
    <section class="footer">
      <FooterComp/>
    </section>

  </div>
</template>
<script>
import LandingComp from '@/components/Landing.vue'
import AboutComp from '@/components/About.vue'
import ResumeComp from '@/components/Skills.vue'
import PrpjectsComp from '@/components/Projects.vue'
import ContactComp from '@/components/Contact.vue'
import FooterComp from '@/components/Footer.vue'



export default {
  components : {
    LandingComp,
    AboutComp,
    ResumeComp,
    PrpjectsComp,
    ContactComp,
    FooterComp,
  }
  }

</script>
<style scoped>
</style>