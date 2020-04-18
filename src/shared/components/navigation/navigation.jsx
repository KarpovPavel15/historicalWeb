import './navigation.scss'

import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

export const Navigation = ({showSlider}) => {
    return (
        <nav className="navigation" onMouseEnter={showSlider}>
            <NavLink className="navigation__link"
                     to="/route1">МАРШРУТ</NavLink>
            <NavLink className="navigation__link"
                     to="/route2">ГЕНИИ МЕСТА</NavLink>
            <NavLink className="navigation__link"
                     to="/route3">КОМАНДА</NavLink>
            <NavLink className="navigation__link"
                     to="/route4">СУВЕНИРЫ</NavLink>
        </nav>
    )
};

Navigation.propTypes = {
    showSlider: PropTypes.func,
};

Navigation.defaultProps = {
    showSlider: null,
};
