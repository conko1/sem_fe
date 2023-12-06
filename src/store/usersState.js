import {getUsers} from "@/service/userService";

export default {
  namespaced: true,
  state: {
    myEmployees: null,
  },
  getters: {
    getMyEmployees: (state) => {
      return state.myEmployees;
    }
  },
  mutations: {
    setMyEmployees: (state, employees) => {
      state.myEmployees = employees;
    },
  },
  actions: {
    initializeEmployees: async ({commit, rootGetters}) => {
      const eventTypes = rootGetters["eventState/getEventTypes"];
      const events = rootGetters["eventState/getEvents"];

      const employees = (await getUsers()).data;
      const employeeIdIndex = employees.map((e) => e.id);

      for (const event of events) {
        event.type = eventTypes[event.type-1];

        const indexAtEmployees = employeeIdIndex.indexOf(event.user);

        employees[indexAtEmployees].hasOwnProperty("events")
          ? employees[indexAtEmployees].events = [...employees[indexAtEmployees].events, event]
          : employees[indexAtEmployees].events = [event];
      }

      commit("setMyEmployees", employees);
    }
  }
}