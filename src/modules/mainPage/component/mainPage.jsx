import './main-page.scss'

import React from 'react'
import { AboutPage, AboutWorkers, Persons, TourRoutes } from 'shared/components';

import { Route1, Route2, Route3, Route4 } from 'assets/routes';
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


export const MainPage = () => {
    return (
        <main className="main-page">
            <div className="main-page__image"/>
            <AboutPage/>
            <Persons/>
            <TourRoutes routesList={routesList}/>
            <Persons/>
            <TourRoutes routesList={routesList2}/>
            <AboutWorkers workersList={workersList}/>
        </main>
    );
};
