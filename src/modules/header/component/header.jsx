import './header.scss'

import React from 'react';
import { Logo, Navigation,UserOptions } from 'shared/components';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__navigation">
                <Logo/>
                <Navigation/>
                <UserOptions/>
            </div>
        </header>

    )
};
