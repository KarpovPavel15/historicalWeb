import React from 'react';
import { useSelector } from 'react-redux';
import { HamburgerMenu } from './component';

export default function HamburgerMenuContainer() {

    const {routesList, personsList, workersList} = useSelector(state => state.homePageContent);

    return <HamburgerMenu routesList={routesList} workersList={workersList} personsList={personsList}/>
};
