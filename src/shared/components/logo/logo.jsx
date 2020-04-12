import './logo.scss'
import logo from 'assets/Logo.png'

import React from 'react';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
    return (
        <NavLink to="/" className="logo">
            <img src={logo}/>
        </NavLink>
    )
};
