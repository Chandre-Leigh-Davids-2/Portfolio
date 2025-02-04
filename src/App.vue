<template>
  <navbar/>
  <main>
    <div>
      <router-view/>
    </div> 
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

<style scoped></style>
