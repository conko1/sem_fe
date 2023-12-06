import axios from "axios";
import axi from "./axiConfig";
import router from "@/router";
import store from "@/store"
import {getMe, refreshToken} from "@/service/authService";

const api = axios.create({
  //#TODO: Implement production url
  baseURL: process.env.NODE_ENV !== "production" ? "http://127.0.0.1:8000/api" : "",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    if (response.config.url === "auth/user/") {
      store.commit("loggedState/setLoggedUser", response.data)
    } else if (response.config.url === "auth/logout/") {
      store.commit("loggedState/setLoggedUser", null);
    }

    return response;
  },
  async (error) => {
    if (error.response.status === 401 && error.config.url !== "/auth/token/refresh/") {
      try {
        await refreshToken();
        const user = (getMe()).data;
        store.commit("loggedState/setLogged", user);
      } catch (e) {
        router.push({name: "LandingView"});
        store.commit("loggedState/setLogged", null);
        return
      }
      return axi.request(error.config);
    }
    return Promise.reject(error);
  }
);

export default api;