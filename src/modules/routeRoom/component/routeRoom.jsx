import './route-room.scss'
import React from 'react';
import PropTypes from 'prop-types';

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

RouteRoom.propTypes = {
    roomInfo: PropTypes.shape({
        id: PropTypes.number,
        mainImg: PropTypes.string,
        img: PropTypes.string,
        description: PropTypes.string,
        aboutRoute: PropTypes.string
    })
};

RouteRoom.defaultProps = {
    roomInfo: {}
};
