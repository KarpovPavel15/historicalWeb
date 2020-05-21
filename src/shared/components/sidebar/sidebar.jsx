import './sidebar.scss';

import React, { useState } from 'react';

import hamburger from 'assets/hamburger.png';

import { Navigation } from 'shared/components';
import { default as UserOptions } from 'modules/userOptions';

export const Sidebar = () => {

    const [isOpen, setOpen] = useState(false);
    const openMenu = () => setOpen(!isOpen);

    return (
        <div className="sidebar">
            <img className="sidebar__show-button" src={hamburger} onClick={openMenu}/>
            {
                isOpen &&
                <div className="sidebar__content">
                    <Navigation/>
                    <UserOptions/>
                </div>
            }
        </div>
    )
};
