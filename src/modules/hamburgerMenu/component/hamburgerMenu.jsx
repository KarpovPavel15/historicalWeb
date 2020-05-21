import './hamburger-menu.scss';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import hamburger from 'assets/hamburger.png';

import { Navigation, Sliders } from 'shared/components';
import { UserOptions } from 'modules/userOptions';

export const HamburgerMenu = ({routesList, personsList, workersList}) => {

        const [isOpen, setOpen] = useState(false);
        const [isActive, setActive] = useState(false);
        const [activeLink, setActiveLink] = useState('');

        const showSlider = () => setActive(true);
        const hideSlider = () => setActive(false);
        const setLink = link => setActiveLink(link);

        const openMenu = () => setOpen(!isOpen);

        return (
            <div className="hamburger-menu">
                <img src={hamburger} onClick={openMenu}/>
                {
                    isOpen &&
                    <div className="hamburger-menu__content" onMouseLeave={hideSlider}>
                        <Navigation showSlider={showSlider} setLink={setLink}/>
                        <UserOptions/>
                    </div>
                }
                <div className="hamburger-menu__slider">
                    {
                        isActive &&
                        <Sliders content={activeLink} routesList={routesList} personsList={personsList}
                                 workersList={workersList}/>
                    }
                </div>
            </div>
        )
    };

HamburgerMenu.propTypes = {
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
    }))
};

HamburgerMenu.defaultProps = {
    personsList: [],
    routesList: [],
    workersList: [],
};
