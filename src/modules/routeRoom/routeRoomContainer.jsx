import React from 'react';
import { RouteRoom } from './component';
import { useSelector } from 'react-redux';

export default function RouteRoomContainer({match}) {
    let id = +match.params.id;
    const routesList = useSelector(store => store.homePageContent.routesList);
    const [roomInfo] = routesList.filter(element => element.id === id);
    return <RouteRoom roomInfo={roomInfo}/>
}
