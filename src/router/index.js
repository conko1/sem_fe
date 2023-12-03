import { createRouter, createWebHistory } from 'vue-router'

import RegistrationView from "@/views/RegistrationView.vue";
import LoginView from "@/views/LoginView.vue";
import LandingView from "@/views/LandingView.vue";
import DashboardView from "@/views/DashboardView.vue";
import HomeView from "@/views/HomeView.vue";
import PageNotFound from "@/views/PageNotFound.vue";

import store from "@/store/index";
import {getMe, refreshToken} from "@/service/authService";

const guardedRoutes = ["DashboardView"];

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
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const currentUser = store.getters["userState/getLoggedUser"];
  console.log(currentUser)
  if (guardedRoutes.includes(to.name) && !currentUser) {
    try {
      await refreshToken();
      const user = (await getMe()).data;
      store.commit("userState/setLoggedUser", user);
      next(to);
    } catch (e) {
      store.commit("userState/setLoggedUser", null);
      next({name: "LandingView"});
      return;
    }
  }
  next();
})

export default router
