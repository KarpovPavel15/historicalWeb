import React from 'react';
import { useRouteMatch } from 'react-router';

export function RouteRoom() {
    const match = useRouteMatch({path: '/routes/'});
    return <div>{match}</div>
}
