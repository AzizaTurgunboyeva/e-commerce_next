import axios from "axios";

export const instance =axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    headers: {
    "Content-Type": "application/json",
  },
})
export const comInstance = axios.create({
  baseURL: import.meta.env.VITE_COMMENTS_URL,
  headers: {
    "Content-Type": "application/json",
  },
});