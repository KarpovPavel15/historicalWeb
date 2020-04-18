import './main-page.scss'

import React from 'react'
import { AboutPage, AboutWorkers, Persons, TourRoutes } from 'shared/components';

import { Route1, Route2, Route3, Route4 } from 'assets/routes';
import { Person1, Person2, Person3, Person4 } from 'assets/persones';
import { Worker1, Worker2, Worker3, Worker4, Worker5, Worker6, Worker7 } from 'assets/workers'

const routesList = [
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
    }];
const routesList2 = [
    {
        id: 1,
        img: Route1,
        name: 'Маршрут 5',
        description: 'Гістарычны цэнтр горада 5'
    },
    {
        id: 2,
        img: Route2,
        name: 'Маршрут 6',
        description: 'Гістарычны цэнтр горада 6'
    },
    {
        id: 3,
        img: Route3,
        name: 'Маршрут 7',
        description: 'Гістарычны цэнтр горада 7'
    },
    {
        id: 4,
        img: Route4,
        name: 'Маршрут 8',
        description: 'Гістарычны цэнтр горада 8'
    }];
const workersList = [
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
    },
];
const personsList = [
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
];
export const personsListForSlider = [
    {
        id: 1,
        img: Person1,
        name: 'Элаіза Ажэшка',
    }, {
        id: 7,
        img: Person1,
        name: 'Элаіза Ажэшка',
    }, {
        id: 8,
        img: Person1,
        name: 'Элаіза Ажэшка',
    },
    {
        id: 2,
        img: Person2,
        name: 'Элаіза Ажэшка',
    },
    {
        id: 3,
        img: Person3,
        name: 'Элаіза Ажэшка',
    },
    {
        id: 4,
        img: Person4,
        name: 'Элаіза Ажэшка',
    }
];

export const MainPage = () => {
    return (
        <main className="main-page">
            <div className="main-page__image"/>
            <AboutPage/>
            <Persons personsList={personsList}/>
            <TourRoutes routesList={routesList}/>
            <Persons personsList={personsList}/>
            <TourRoutes routesList={routesList2}/>
            <AboutWorkers workersList={workersList}/>
        </main>
    );
};
