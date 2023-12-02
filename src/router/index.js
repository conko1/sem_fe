import { createRouter, createWebHistory } from 'vue-router'
import RegistrationView from "@/views/RegistrationView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/register",
    name: "register",
    component: RegistrationView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
