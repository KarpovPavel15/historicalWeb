import './route-room.scss'
import React from 'react';

export const RouteRoom = ({roomInfo}) => {
    return (
        <main className="route-room">
            <div className="route-room__main-picture">
                <img src={roomInfo.mainImg}/>
            </div>
            <div className="route-room__room-info">
                <div className="route-room__picture"><img src={roomInfo.img}/></div>
                <div className="route-room__info">
                    <div className="route-room__description">
                        {roomInfo.description}
                    </div>
                    <div className="route-room__about-room">
                        {roomInfo.aboutRoute}
                    </div>
                </div>
            </div>
        </main>
    )
};
