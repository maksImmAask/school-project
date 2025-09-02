import axios from "axios";

export const api = axios.create({
  baseURL: "https://68b68ac073b3ec66cec1dcd9.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});
