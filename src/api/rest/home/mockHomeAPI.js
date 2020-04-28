import { mocksAxios } from "../mockAPI";

export const mockHomeAPI = {
    getLanguages: () =>
        mocksAxios.onGet("/").reply(200, [
            {
                id: 1,
                content: 'BLR'
            },
            {
                id: 2,
                content: 'ENG'
            },
            {
                id: 3,
                content: 'RUS'
            }
        ]),
};
