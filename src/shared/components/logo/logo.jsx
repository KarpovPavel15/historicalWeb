import './logo.scss'
import logo from 'images/Logo.png'

import React from 'react';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
    return (
        <NavLink to="/" className="logo">
            <img src={logo}/>
        </NavLink>
    )
};
