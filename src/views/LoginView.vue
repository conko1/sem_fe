<template>
    <main class="form-signin w-75 m-auto">
      <div class="d-flex align-items-center flex-column">
        <h1 class="h3 mb-3 fw-normal">Prihlásenie</h1>
        <div class="color-red" v-if="error">Unable to login with provided credentials</div>
        <div class="color-red" v-if="v$.email.$error" v-for="(error) in v$.email.$errors">{{ error.$message }}</div>
        <div class="form-floating w-100 mb-4">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            v-model="v$.email.$model"
          >
          <label for="floatingInput">Email</label>
        </div>
        <div class="color-red" v-if="v$.password.$error" v-for="(error) in v$.password.$errors">{{ error.$message }}</div>
        <div class="form-floating w-100 mb-4">
          <input
            :type="[passwordPlain ? 'text' : 'password']"
            class="form-control position-relative"
            id="floatingPassword"
            v-model="v$.password.$model"
          >
          <img
            v-if="!passwordPlain"
            class="position-absolute eye-icon"
            src="@/images/eye-slash-icon.svg"
            alt="PASSWORD"
            @click="passwordPlain = true"
          >
          <img
            v-else
            class="position-absolute eye-icon"
            src="@/images/eye-fill-icon.svg"
            alt="TEXT"
            @click="passwordPlain = false"
          />
          <label for="floatingPassword">Heslo</label>
        </div>
        <button class="btn btn-primary w-50 py-2" type="submit" @click="login">Prihlásiť</button>
      </div>
    </main>
</template>

<script>
import {useVuelidate} from "@vuelidate/core";
import {email, maxLength, minLength, required} from "@vuelidate/validators";
import {login} from "@/service/authService";

export default {
  name: "LoginView",
  setup() {
    return {v$: useVuelidate()}
  },
  methods: {
    async login() {
      const valid = await this.v$.$validate();
      if (!valid) return;
      try {
        const loggedUser = (await login({email: this.email, password: this.password})).data.user;
        this.$store.commit("loggedState/setLoggedUser", loggedUser)
        this.$router.push({name: "CalendarView"});
        this.error = false;
      } catch (e) {
        this.error = true;
      }
    },
  },
  data: () => ({
    email: null,
    password: null,
    passwordPlain: false,
    error: false,
  }),
  validations() {
    return {
      email: {required, email, maxLength: maxLength(254)},
      password: {required, minLength: minLength(8)},
    }
  }
}
</script>

<style scoped lang="scss">
.medium-icon {
  width: 150px !important;
}
.eye-icon {
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}
</style>