import './header.scss'

import React from 'react';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__area">
                <div><a>Logo</a></div>
                <div><a>nav</a></div>
                <div><a>userOptions</a></div>
            </div>
        </header>
    )
};
