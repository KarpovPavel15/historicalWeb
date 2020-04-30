import { mocksAxios } from "../mockAPI";
import { Route1, Route2, Route3, Route4 } from 'assets/routes';
import { Worker1, Worker2, Worker3, Worker4, Worker5, Worker6, Worker7 } from 'assets/workers'
import { Person1, Person2, Person3, Person4 } from 'assets/persones';

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
    getRoutesList: () =>
        mocksAxios.onGet("/").reply(200, [
            {
                id: 1,
                img: Route1,
                name: 'Маршрут 1',
                description: 'Гістарычны цэнтр горада 1'
            },
            {
                id: 2,
                img: Route2,
                name: 'Маршрут 2',
                description: 'Гістарычны цэнтр горада 2'
            },
            {
                id: 3,
                img: Route3,
                name: 'Маршрут 3',
                description: 'Гістарычны цэнтр горада 3'
            },
            {
                id: 4,
                img: Route4,
                name: 'Маршрут 4',
                description: 'Гістарычны цэнтр горада 4'
            }
        ]),
    getWorkersList: () =>
        mocksAxios.onGet("/").reply(200, [
            {
                id: 1,
                img: Worker1,
                name: 'Name',
                scope: 'Dev'
            }, {
                id: 2,
                img: Worker2,
                name: 'Name',
                scope: 'Dis'
            }, {
                id: 3,
                img: Worker3,
                name: 'Name',
                scope: 'Test'
            }, {
                id: 4,
                img: Worker4,
                name: 'Name',
                scope: 'Dev'
            }, {
                id: 5,
                img: Worker5,
                name: 'Name',
                scope: 'Dev'
            }, {
                id: 6,
                img: Worker6,
                name: 'Name',
                scope: 'Dev'
            }, {
                id: 7,
                img: Worker7,
                name: 'Name',
                scope: 'Dev'
            }
        ]),
    getPersonsList: () =>
        mocksAxios.onGet("/").reply(200, [
            {
                id: 1,
                img: Person1,
                name: 'Элаіза Ажэшка',
                description: 'Яны былі людзьмі адной эпохі. Абое прайшлі праз выпрабаванні Студзеньскага паўстання 1863-64 гадоў. Абое прысвяцілі сябе пісьменніцтву.'
            }, {
                id: 7,
                img: Person1,
                name: 'Элаіза Ажэшка',
                description: 'Яны былі людзьмі адной эпохі. Абое прайшлі праз выпрабаванні Студзеньскага паўстання 1863-64 гадоў. Абое прысвяцілі сябе пісьменніцтву.'
            }, {
                id: 8,
                img: Person1,
                name: 'Элаіза Ажэшка',
                description: 'Яны былі людзьмі адной эпохі. Абое прайшлі праз выпрабаванні Студзеньскага паўстання 1863-64 гадоў. Абое прысвяцілі сябе пісьменніцтву.'
            },
            {
                id: 2,
                img: Person2,
                name: 'Элаіза Ажэшка',
                description: 'Яны былі людзьмі адной эпохі. Абое прайшлі праз выпрабаванні Студзеньскага паўстання 1863-64 гадоў. Абое прысвяцілі сябе пісьменніцтву.'
            },
            {
                id: 3,
                img: Person3,
                name: 'Элаіза Ажэшка',
                description: 'Яны былі людзьмі адной эпохі. Абое прайшлі праз выпрабаванні Студзеньскага паўстання 1863-64 гадоў. Абое прысвяцілі сябе пісьменніцтву.'
            },
            {
                id: 4,
                img: Person4,
                name: 'Элаіза Ажэшка',
                description: 'Яны былі людзьмі адной эпохі. Абое прайшлі праз выпрабаванні Студзеньскага паўстання 1863-64 гадоў. Абое прысвяцілі сябе пісьменніцтву.'
            }
        ]),
};
