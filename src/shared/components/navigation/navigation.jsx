import './navigation.scss'

import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

export const Navigation = ({showSlider, setLink}) => {
    return (
        <nav className="navigation">
            <NavLink onMouseOver={showSlider} onMouseEnter={() => setLink('routes')} className="navigation__rout-link"
                     to="/route1">МАРШРУТ</NavLink>
            <NavLink onMouseOver={showSlider} onMouseEnter={() => setLink('genius')} className="navigation__genius-link"
                     to="/route2">ГЕНИИ МЕСТА</NavLink>
            <NavLink onMouseOver={showSlider} onMouseEnter={() => setLink('team')} className="navigation__team-link"
                     to="/route3">КОМАНДА</NavLink>
            <NavLink onMouseOver={showSlider} onMouseEnter={() => setLink('souvenirs')}
                     className="navigation__souvenirs-link"
                     to="/route4">СУВЕНИРЫ</NavLink>
        </nav>
    )
};

Navigation.propTypes = {
    showSlider: PropTypes.func,
    setLink: PropTypes.func,
};

Navigation.defaultProps = {
    showSlider: null,
    setLink: null,
};
