import {getEvents, getEventTypes} from "@/service/eventService";

export default {
  namespaced: true,
  state: {
    eventTypes: null,
    events: null,
  },
  getters: {
    getEventTypes: (state) => {
      return state.eventTypes
    },
    getEvents: (state) => {
      return state.events;
    }
  },
  mutations: {
    setEventTypes: (state, eventTypes) => {
      state.eventTypes = eventTypes;
    },
    setEvents: (state, events) => {
      state.events = events;
    }
  },
  actions: {
    initializeEventTypes: async ({commit}) => {
      const eventTypes = (await getEventTypes()).data
      commit("setEventTypes", eventTypes);
    },
    initializeEvents: async ({commit}) => {
      const events = (await getEvents()).data
      commit("setEvents", events);
    }
  }
}