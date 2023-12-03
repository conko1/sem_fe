<template>
  <main class="container">
    <div class="position-absolute top-40 start-50 translate-middle d-flex align-items-center flex-column fnt-1-15-rem">
      <img src="@/images/404-page-jpg.jpg" width="350" alt="">
      <div class="mb-4">
        Oops! Page 404
      </div>
      <div class="w-75">
        Ospravedlňujeme sa, ale zdá sa, že ste sa zablúdili vo virtuálnom svete. Hľadaná stránka nie je k dispozícii alebo
        bola presunutá na iné miesto.
      </div>
      <router-link to="/" class="text-decoration-none text-color-default">
        <div class="d-flex justify-content-between flex-row align-items-center mt-4">
          <img src="@/images/back-icon.png" alt="späť" class="">
          <p class="m-0">Späť</p>
        </div>
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped lang="scss">
.top-40 {
  top: 40%;
}
</style>