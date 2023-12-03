<template>
  <nav-bar/>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/Shared/NavBar.vue";
export default {
  name: "HomeView",
  components: {NavBar}
}
</script>

<style scoped>

</style>