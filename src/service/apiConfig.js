import axios from "axios";
import axi from "./axiConfig";
import router from "@/router";
import store from "@/store"

const api = axios.create({
  //#TODO: Implement production url
  baseURL: process.env.NODE_ENV !== "production" ? "http://127.0.0.1:8000/api" : "",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    if (response.config.url === "auth/user/") {
      store.commit("userState/setLoggedUser", response.data)
    } else if (response.config.url === "auth/logout/") {
      store.commit("userState/setLoggedUser", null);
    }

    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      try {
        await axi.post("auth/token/refresh/");
      } catch (e) {
        router.push({name: "LandingView"});
        store.commit("userState/setLogged", null);
        return
      }
      return axi.request(error.config);
    }
    return Promise.reject(error);
  }
);

export default api;