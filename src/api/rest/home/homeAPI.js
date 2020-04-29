import axios from "axios";

import { mockHomeAPI } from "./mockHomeAPI";

export const instance = axios.create({
  baseURL: "",
  responseType: "json",
});

export const homeAPI = {
  getLanguages: () => {
    mockHomeAPI.getLanguages();
    return instance.get("/");
  },
  getRoutesList: () => {
    mockHomeAPI.getRoutesList();
    return instance.get("/");
  },
  getWorkersList: () => {
    mockHomeAPI.getWorkersList();
    return instance.get("/");
  },
  getPersonsList: () => {
    mockHomeAPI.getPersonsList();
    return instance.get("/");
  },
};
