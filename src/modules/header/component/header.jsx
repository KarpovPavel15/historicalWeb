import './header.scss'

import React from 'react';
import { Logo, Navigation } from 'shared/components';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__navigation">
                <Logo/>
                <Navigation/>
                <div><a>userOptions</a></div>
            </div>
            <div className="header__image"/>
        </header>

    )
};
