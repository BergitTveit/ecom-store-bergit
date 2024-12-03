import axios from "axios";

export const BASE_URL = "https://v2.api.noroff.dev/online-shop";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
//move to hook