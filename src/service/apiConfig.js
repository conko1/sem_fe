import axios from "axios";
import axi from "./axiConfig";
import router from "@/router";

const api = axios.create({
  //#TODO: Implement production url
  baseURL: process.env.NODE_ENV !== "production" ? "http://127.0.0.1:8000/api" : "",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    if (response.config.url === "user/me/") {
      store.commit("userState/setMe", response.data)
      store.commit("userState/setLogged", {logged: true});
    } else if (response.config.url === "auth/logout/") {
      store.commit("userState/setLogged", {logged: false});
      store.commit("userState/setMe", null);
    }

    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      // const refresh = store.getters.getTokens.refresh;
      /*const response =*/
      let user = null;
      try {
        user = (await axi.post("auth/token/refresh/")).user;
      } catch (e) {
        router.push({name: "Landing"});
        store.commit("userState/setLogged", {logged: false});
        store.commit("userState/setMe", null);
        return
      }
      if (
        !["alex_admin", "makler", "financnik", "uctovnik", "pravnik", "fotograf", "znalec"]
          .includes(user.role)
      ) {
        router.push({name: "Landing"});
        store.commit("userState/setLogged", {logged: false});
        store.commit("userState/setMe", null);
      }

      return axi.request(error.config);
    }

    return Promise.reject(error);
  }
);

export default api;