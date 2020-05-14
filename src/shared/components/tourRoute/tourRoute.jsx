import './tour-route.scss'
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const TourRoute = ({tourInfo, routesForSlider}) => (
    routesForSlider === false ?
        <NavLink className="tour-route" to={`/routes/${tourInfo.id}`}>
            <img className="tour-route__image" src={tourInfo.img}/>
            <div className="tour-route__name">{tourInfo.name}</div>
            <div className="tour-route__description">{tourInfo.description}</div>
        </NavLink>
        : <div className="tour-route-slide">
            <img className="tour-route-slide__image" src={tourInfo.img}/>
            <div className="tour-route-slide__name">{tourInfo.name}</div>
        </div>
);

TourRoute.propTypes = {
    tourInfo: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
    }),
    routesForSlider: PropTypes.bool
};

TourRoute.defaultProps = {
    routesForSlider: false
};
