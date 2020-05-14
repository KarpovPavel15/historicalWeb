import './route-room.scss'
import React from 'react';

export const RouteRoom = ({roomInfo}) => {
    return (
        <div className="route-room">
            <div><img src={roomInfo.image}/></div>
            <div>
                <div>
                    {roomInfo.name}
                </div>
                <div>
                    {roomInfo.description}
                </div>
            </div>
        </div>
    )
};
