<template>
  <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <div class="col-md-3 mb-2 mb-md-0">
      <router-link to="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        <img src="@/images/icons-clock.svg" alt="logo">
      </router-link>
    </div>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
      <li><a href="#" class="nav-link px-2">Features</a></li>
      <li><a href="#" class="nav-link px-2">Pricing</a></li>
      <li><a href="#" class="nav-link px-2">FAQs</a></li>
      <li><a href="#" class="nav-link px-2">About</a></li>
    </ul>

    <div class="col-md-3 text-end">
      <router-link to="/login">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
      </router-link>
      <router-link to="/register">
        <button type="button" class="btn btn-primary">Sign-up</button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>