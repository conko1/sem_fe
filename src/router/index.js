import { createRouter, createWebHistory } from 'vue-router'
import RegistrationView from "@/views/RegistrationView.vue";
import LoginView from "@/views/LoginView.vue";
import LandingView from "@/views/LandingView.vue";
import DashboardView from "@/views/DashboardView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    children: [
      {
        path: "/",
        name: "LandingView",
        component: LandingView,
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
    ],
  },
  {
    path: "/dashboard",
    name: "DashboardView",
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
