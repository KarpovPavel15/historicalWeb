import './main-page.scss'

import React from 'react'
import { AboutPage, Persons, TourRoutes } from 'shared/components';
import Route1 from 'assets/Route1.png';
import Route2 from 'assets/Route2.png';
import Route3 from 'assets/Route3.png';
import Route4 from 'assets/Route4.png';

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


export const MainPage = () => {
    return (
        <main className="main-page">
            <div className="main-page__image"/>
            <AboutPage/>
            <Persons/>
            <TourRoutes routesList={routesList}/>
            <Persons/>
            <TourRoutes routesList={routesList2}/>
            {/*<Workers/>*/}
        </main>
    );
};
