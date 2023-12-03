import api from "@/service/apiConfig";

export async function login(loginData) {
  return await api.post(`/auth/login/`, loginData);
}

export async function logout() {
  return await api.post(`/auth/logout/`);
}

export async function getMe() {
  return await api.get(`/auth/user/`);
}