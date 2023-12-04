<template>
  <nav-bar-dashboard/>
  <router-view/>
</template>

<script>

import NavBarDashboard from "@/components/Shared/NavBarDashboard.vue";

export default {
  name: "DashboardView",
  components: {NavBarDashboard}

}
</script>

<style scoped>

</style>