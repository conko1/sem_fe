import api from "@/service/apiConfig";

export async function getUsers() {
  return api.get(`/user/`);
}