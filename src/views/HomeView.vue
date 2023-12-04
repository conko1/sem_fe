<template>
  <nav-bar-home/>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import NavBarHome from "@/components/Shared/NavBarHome.vue";
export default {
  name: "HomeView",
  components: {NavBarHome}
}
</script>

<style scoped>

</style>