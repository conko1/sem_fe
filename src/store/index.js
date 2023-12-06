import { createStore } from "vuex";

import loggedState from "@/store/loggedState";
import usersState from "@/store/usersState";
import eventState from "@/store/eventState";

const store = createStore({
  modules: {
    loggedState,
    usersState,
    eventState
  },
  // strict: true,
})

export default store