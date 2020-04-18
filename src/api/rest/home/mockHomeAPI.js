import { mocksAxios } from "../mockAPI";

export const mockHomeAPI = {
    getHomeInfo: () =>
    mocksAxios.onGet("/").reply(200, [
      {
          info:'home'
      }
    ]),
};
