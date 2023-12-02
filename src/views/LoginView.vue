<template>
  <main class="form-signin w-75 m-auto">
    <div class="d-flex align-items-center flex-column">
      <h1 class="h3 mb-3 fw-normal">Prihlásenie</h1>
      <div class="client-error" v-if="v$.email.$error" v-for="(error) in v$.email.$errors">{{ error.$message }}</div>
      <div class="form-floating w-100 mb-4">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          v-model="v$.email.$model"
        >
        <label for="floatingInput">Email</label>
      </div>
      <div class="client-error" v-if="v$.password.$error" v-for="(error) in v$.password.$errors">{{ error.$message }}</div>
      <div class="form-floating w-100 mb-4">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          v-model="v$.password.$model"
        >
        <label for="floatingPassword">Heslo</label>
      </div>
      <button class="btn btn-primary w-50 py-2" type="submit">Prihlásiť</button>
    </div>
  </main>
</template>

<script>
import {useVuelidate} from "@vuelidate/core";
import {email, maxLength, minLength, required} from "@vuelidate/validators";
export default {
  name: "LoginView",
  setup () {
    return { v$: useVuelidate() }
  },
  methods: {
    async register() {
      const valid = await this.v$.$validate();
      if (valid) {
        console.log("Prihlásenie");
        return
      }
      console.log("Form error");
    },
  },
  data: () => ({
    email: null,
    password: null,
  }),
  validations () {
    return {
      email: {required, email, maxLength: maxLength(254)},
      password: {required, minLength: minLength(8)},
    }
  }
}
</script>

<style scoped>

</style>