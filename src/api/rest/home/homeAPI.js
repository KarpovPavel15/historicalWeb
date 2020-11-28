import axios from "axios";

import { mockHomeAPI } from "./mockHomeAPI";

export const instance = axios.create({
  baseURL: "",
  responseType: "json",
});

export const homeAPI = {
  getLanguages: () => mockHomeAPI.getLanguages(),
  getRoutesList: () => {
    mockHomeAPI.getRoutesList();
    return instance.get("/");
  },
  getWorkersList: () => {
    mockHomeAPI.getWorkersList();
    return instance.get("/");
  },
  getAboutHomePage: () => {
    mockHomeAPI.getAboutHomePage();
    return instance.get("/");
  },
};
