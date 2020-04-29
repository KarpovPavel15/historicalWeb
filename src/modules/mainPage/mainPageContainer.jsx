import React, { useEffect } from 'react';
import { MainPage, setMainPageContentRequestAction } from 'modules/mainPage';
import { useDispatch, useSelector } from 'react-redux';

export default function MainPageContainer() {
    const dispatch = useDispatch();
    const {personsList, routesList, workersList} = useSelector(state => state.homePageContent);

    useEffect(() => {
        dispatch(setMainPageContentRequestAction())
    }, []);

    return <MainPage personsList={personsList} routesList={routesList} workersList={workersList}/>
}
