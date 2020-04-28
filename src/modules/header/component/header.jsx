import './header.scss'

import React, { useState } from 'react';
import { Logo, Navigation, Sliders } from 'shared/components';
import { default as UserOptions } from 'modules/userOptions';

export const Header = () => {

    const [isActive, setActive] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const showSlider = () => setActive(true);
    const hideSlider = () => setActive(false);
    const setLink = link => setActiveLink(link);

    return (
        <header className="header">
            <div className="header__area" onMouseLeave={hideSlider}>
                <div className="header__navigation">
                    <Logo/>
                    <Navigation showSlider={showSlider} setLink={setLink}/>
                    <UserOptions/>
                </div>
                <div className="header__slider">
                    {isActive &&
                    <Sliders content={activeLink} isActive={isActive}/>}
                </div>
            </div>
        </header>
    )
};
