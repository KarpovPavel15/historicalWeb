import './tour-route.scss'
import React from 'react';
import PropTypes from 'prop-types';

export const TourRoute = ({tourInfo}) => (
    <div className="tour-route">
        <img className="tour-route__image" src={tourInfo.img}/>
        <div className="tour-route__name">{tourInfo.name}</div>
        <div className="tour-route__description">{tourInfo.description}</div>
    </div>
);

TourRoute.propTypes = {
    tourInfo: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
    })
};
