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
            :class="{'link-secondary': currentNavigationName !== 'LandingView' }"
            to="/"
          >
            Domov
          </router-link>
        </li>
        <li>
          <router-link
            class="nav-link fnt-1-15-rem px-2"
            :class="{'link-secondary': currentNavigationName !== 'PricingView' }"
            to=""
          >
            Pricing
          </router-link>
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <router-link to="/login">
          <button type="button" class="btn btn-outline-primary me-2">Log In</button>
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
import navigationMixin from "@/mixins/navigationMixin";

export default {
  name: "NavBarHome",
  mixins: [navigationMixin]
}
</script>

<style scoped lang="scss">
</style>