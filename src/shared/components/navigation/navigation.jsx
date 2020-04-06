import './navigation.scss'

import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink to="/route1">МАРШРУТ</NavLink>
            <NavLink to="/route2">ГЕНИИ МЕСТА</NavLink>
            <NavLink to="/route3">КОМАНДА</NavLink>
            <NavLink to="/route4">СУВЕНИРЫ</NavLink>
        </nav>
    )
};
