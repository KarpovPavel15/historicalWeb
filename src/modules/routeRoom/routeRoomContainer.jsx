import React, { useEffect, useState } from 'react';
import { RouteRoom } from './component';
import { useDispatch, useSelector } from 'react-redux';
import { setMainPageContentRequestAction } from '../mainPage/actions';

/**
 * @return {null}
 */

export default function RouteRoomContainer({match}) {
    let id = +match.params.id;
    const dispatch = useDispatch();

    const [data, setData] = useState(false);

    const routesList = useSelector(store => store.homePageContent.routesList);

    useEffect(() => {
        dispatch(setMainPageContentRequestAction());
        setData(true)
    }, []);

    const [roomInfo] = routesList.filter(element => element.id === id);

    return data ? <RouteRoom roomInfo={roomInfo}/> : null
}
