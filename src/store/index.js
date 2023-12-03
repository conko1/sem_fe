import { createStore } from "vuex";
import userState from "@/store/userState";

const store = createStore({
  modules: {
    userState,
  },
  // strict: true,
})

export default store