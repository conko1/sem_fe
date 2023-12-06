import api from "@/service/apiConfig";

export async function getEvents() {
  return api.get(`/event/`);
}

export async function getEventTypes() {
  return api.get(`/event/types/`);
}