import { createRouter, createWebHistory } from 'vue-router'

import RegistrationView from "@/views/RegistrationView.vue";
import LoginView from "@/views/LoginView.vue";
import LandingView from "@/views/LandingView.vue";
import DashboardView from "@/views/DashboardView.vue";
import HomeView from "@/views/HomeView.vue";
import PageNotFound from "@/views/PageNotFound.vue";

import store from "@/store/index";
import {getMe, refreshToken} from "@/service/authService";
import CalendarView from "@/views/CalendarView.vue";
import StatisticsView from "@/views/StatisticsView.vue";

const guardedRoutes = ["DashboardView", "CalendarView"];

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
    component: DashboardView,
    children: [
      {
        path: "",
        name: "StatisticsView",
        component: StatisticsView
      },
      {
        path: "calendar/",
        name: "CalendarView",
        component: CalendarView
      },
    ],
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
  const currentUser = store.getters["loggedState/getLoggedUser"];
  if (guardedRoutes.includes(to.name) && !currentUser) {
    try {
      await refreshToken();
      const user = (await getMe()).data;
      store.commit("loggedState/setLoggedUser", user);
      next(to);
      return;
    } catch (e) {
      store.commit("loggedState/setLoggedUser", null);
      next({name: "LandingView"});
      return;
    }
  }
  next();
})

export default router
