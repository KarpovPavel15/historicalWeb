import './header.scss'

import React from 'react';
import { Logo } from 'shared/components';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__navigation">
                <Logo/>
                <div><a>nav</a></div>
                <div><a>userOptions</a></div>
            </div>
            <div className="header__image"/>
        </header>

    )
};
