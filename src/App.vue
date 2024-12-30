<template>
  <navbar/>
  <main>
    <router-view/>
  </main>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default{
components:{
  Navbar
}
}
</script>

<style src='../src/assets/CSS/style.css'>
</style>
