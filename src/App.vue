<template>
  <div class="m">
    <SpinnerComp v-if="showSpinner" />
    <div v-else>
      <NavbarComp />
      <main>
        <router-view />
      </main>
      <FooterComp class="footer"/>
    </div>
  </div>
</template>

<script>
import NavbarComp from './components/Navbar.vue';
import FooterComp from '@/components/Footer.vue';
import SpinnerComp from './components/SpinnerComp.vue';

export default {
  components: {
    NavbarComp,
    FooterComp,
    SpinnerComp
  },
  data() {
    return {
      showSpinner: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 6000); // 6 seconds delay before hiding the spinner
  }
};
</script>

<style scoped>
div{
    padding: 0;
    margin: 0;
}
</style>