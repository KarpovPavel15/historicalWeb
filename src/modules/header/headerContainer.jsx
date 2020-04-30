import React from 'react';
import { Header } from 'modules/header';
import { useSelector } from 'react-redux';

export default function HeaderContainer() {
    const {routesList, personsList, workersList} = useSelector(state => state.homePageContent);
    return <Header routesList={routesList} workersList={workersList} personsList={personsList}/>
};
