import './main-page.scss'

import React from 'react'
import { AboutPage, AboutWorkers, Persons, TourRoutes } from 'shared/components';
import PropTypes from 'prop-types';


export const MainPage = ({personsList,routesList,workersList,aboutHomePage}) => {
    return (
        <main className="main-page">
            <div className="main-page__image"/>
            <AboutPage aboutHomePage={aboutHomePage}/>
            <Persons personsList={personsList}/>
            <TourRoutes routesList={routesList}/>
            <Persons personsList={personsList}/>
            <TourRoutes routesList={routesList}/>
            <AboutWorkers workersList={workersList}/>
        </main>
    );
};

MainPage.propTypes={
    personsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
    })),
    routesList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
    })),
    workersList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        scope: PropTypes.string
    })),
    aboutHomePage: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string
    }))
};

MainPage.defaultProps={
    personsList: [],
    routesList: [],
    workersList: [],
    aboutHomePage: [],
};
