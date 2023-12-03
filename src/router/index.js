import { createRouter, createWebHistory } from 'vue-router'
import RegistrationView from "@/views/RegistrationView.vue";
import LoginView from "@/views/LoginView.vue";
import LandingView from "@/views/LandingView.vue";

const routes = [
  {
    path: "/",
    name: "LandingView",
    component: LandingView
  },
  {
    path: "/register",
    name: "RegistrationView",
    component: RegistrationView
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
