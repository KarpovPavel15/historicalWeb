import axios from "axios";

import { mockHomeAPI } from "./mockHomeAPI";

export const instance = axios.create({
  baseURL: "",
  responseType: "json",
});

export const homeAPI = {
  getHomeInfo: () => {
    mockHomeAPI.getHomeInfo();
    return instance.get("/");
  },
};
