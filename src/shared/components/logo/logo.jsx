import './logo.scss'
import logo from 'assets/Logo.png'

import React from 'react';

export const Logo = () => {
    return (
        <div className="logo">
            <img src={logo}/>
        </div>
    )
};
