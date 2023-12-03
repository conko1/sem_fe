import { createStore } from "vuex";
import appState from "@/store/appState";

const store = createStore({
  modules: {
    appState: appState,
  },
  // strict: true,
})

export default store