import './header.scss'

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Logo, Navigation, Sliders } from 'shared/components';
import { default as UserOptions } from 'modules/userOptions';
import { default as HamburgerMenu } from 'modules/hamburgerMenu';

export const Header = ({routesList, personsList, workersList}) => {

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
                    {
                        isActive &&
                        <Sliders content={activeLink} routesList={routesList} personsList={personsList}
                                 workersList={workersList}/>
                    }
                </div>
            </div>
            <div className="header__mobile-area">
                <Logo/>
                <HamburgerMenu/>
            </div>
        </header>
    )
};

Header.propTypes = {
    personsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
    })),
    routesList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
    })),
    workersList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        scope: PropTypes.string
    })),
};

Header.defaultProps = {
    personsList: [],
    routesList: [],
    workersList: [],
};
