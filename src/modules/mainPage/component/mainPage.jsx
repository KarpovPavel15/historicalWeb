import './main-page.scss'

import React from 'react'
import { AboutPage, AboutWorkers, TourRoutes } from 'shared/components';
import PropTypes from 'prop-types';
import rootImg from 'images/Grodno_panorama-6r.jpg';


export const MainPage = ({routesList,workersList,aboutHomePage}) => {
    return (
        <main className="main-page">
            <div className="main-page__image">
                <img className="main-page__rootImg" src={`/${rootImg}`}/>
            </div>
            <AboutPage aboutHomePage={aboutHomePage}/>
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
