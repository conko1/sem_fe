<template>
  <nav-bar-dashboard/>
  <router-view/>
</template>

<script>

import NavBarDashboard from "@/components/Shared/NavBarDashboard.vue";

export default {
  name: "DashboardView",
  components: {NavBarDashboard},
  async created() {
    await this.$store.dispatch("eventState/initializeEventTypes");
    await this.$store.dispatch("eventState/initializeEvents");
    this.$store.dispatch("usersState/initializeEmployees");
  }
}
</script>

<style scoped>

</style>