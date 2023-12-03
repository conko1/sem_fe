<template>
  <main class="form-signin w-75 m-auto">
    <div class="d-flex align-items-center flex-column">
      <h1 class="h3 mb-3 fw-normal">Registrácia</h1>
      <div class="color-red" v-if="v$.firstName.$error" v-for="(error) in v$.firstName.$errors">{{ error.$message }}</div>
      <div class="form-floating w-100 mb-4">
        <input
          type="text"
          class="form-control"
          id="name-input"
          v-model="v$.firstName.$model"
        >
        <label for="name-input">Meno</label>
      </div>
      <div class="color-red" v-if="v$.lastName.$error" v-for="(error) in v$.lastName.$errors">{{ error.$message }}</div>
      <div class="form-floating w-100 mb-4">
        <input
          type="text"
          class="form-control"
          id="last-name-input"
          v-model="v$.lastName.$model"
        >
        <label for="last-name-input">Priezvisko</label>
      </div>
      <div class="color-red" v-if="v$.email.$error" v-for="(error) in v$.email.$errors">{{ error.$message }}</div>
      <div class="form-floating w-100 mb-4">
        <input
          type="email"
          class="form-control"
          id="email-input"
          v-model="v$.email.$model"
        >
        <label for="email-input">Email</label>
      </div>
      <div class="color-red" v-if="v$.password1.$error" v-for="(error) in v$.password1.$errors">{{ error.$message }}</div>
      <div class="form-floating w-100 mb-4">
        <input
          type="password"
          class="form-control"
          id="password1-input"
          v-model="v$.password1.$model"
        >
        <label for="password1-input">Heslo</label>
      </div>
      <div class="color-red" v-if="v$.password2.$error" v-for="(error) in v$.password2.$errors">{{ error.$message }}</div>
      <div class="form-floating w-100 mb-4">
        <input
          type="password"
          class="form-control"
          id="password2-input"
          v-model="v$.password2.$model"
        >
        <label for="password2-input">Heslo znova</label>
      </div>
      <button class="btn btn-primary w-50 py-2" type="submit" @click="register">Registrovať</button>
    </div>
  </main>
</template>

<script>
import {useVuelidate} from "@vuelidate/core";
import {email, maxLength, minLength, required} from "@vuelidate/validators";

export default {
  name: "RegistrationView",
  setup () {
    return { v$: useVuelidate() }
  },
  methods: {
    async register() {
      const valid = await this.v$.$validate();
      if (valid) {
        console.log("Registrácia");
        return
      }
      console.log("Form error");
    },
  },
  data: () => ({
    firstName: null,
    lastName: null,
    email: null,
    password1: null,
    password2: null,
  }),
  validations () {
    return {
      firstName: {maxLength: maxLength(150), minLength: minLength(8)},
      lastName: {maxLength: maxLength(150)},
      email: {required, email, maxLength: maxLength(254)},
      password1: {required, minLength: minLength(8)},
      password2: {required, minLength: minLength(8)},
    }
  }
}
</script>

<style scoped lang="scss">

</style>