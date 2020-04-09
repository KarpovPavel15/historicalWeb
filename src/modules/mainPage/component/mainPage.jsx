import './main-page.scss'

import React from 'react'
import { AboutPage } from 'shared/components';

export const MainPage = () => {
    return (
        <main className="main-page">
            <div className="main-page__image"/>
            <AboutPage/>
            {/*<Persons/>*/}
            {/*<TourRoutes/>*/}
            {/*<Persons/>*/}
            {/*<Workers/>*/}
        </main>
    );
};
