export default {
  namespaced: true,
  state: {
    loggedUser: null,
  },
  getters: {
    getLoggedUser: (state) => {
      return state.loggedUser;
    }
  },
  mutations: {
    setLoggedUser: (state, loggedUser) => {
      state.loggedUser = loggedUser;
    }
  },
  actions: {},
}