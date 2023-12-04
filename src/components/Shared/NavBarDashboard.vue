<template>
  <div class="container user-select-none">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <router-link to="/" class="d-inline-flex link-body-emphasis text-decoration-none display-5 fw-medium">
          <span class="primary">Hour</span>Watch
        </router-link>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <router-link
            class="nav-link fnt-1-15-rem px-2"
            :class="{'link-secondary': currentNavigationName !== 'CalendarView' }"
            to="/"
          >
            Kalendár
          </router-link>
        </li>
        <li>
          <router-link
            class="nav-link fnt-1-15-rem px-2"
            :class="{'link-secondary': currentNavigationName !== '/pricing' }"
            to=""
          >
            Štatistiky
          </router-link>
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2" @click="logout">Odhlásiť sa</button>
      </div>
    </header>
  </div>
</template>

<script>
import navigationMixin from "@/mixins/navigationMixin";
import {logout} from "@/service/authService";

export default {
  name: "NavBarDashboard",
  mixins: [navigationMixin],
  methods: {
    async logout() {
      try {
        await logout();
        this.$router.push({name: "LandingView"});
        this.$store.commit("userState/setLoggedUser", null);
      } catch (e) {

      }
    }
  }
}
</script>

<style scoped>

</style>