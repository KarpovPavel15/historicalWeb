import './user-options.scss'
import search from 'assets/search.png'
import userImg from 'assets/userPicture.png'
import hamburger from 'assets/hamburger.png'

import React from 'react';
import { Select } from 'shared/components';

export const UserOptions = () => {
    const languages = [
        {
            id: 1,
            content: 'BLR'
        },
        {
            id: 2,
            content: 'ENG'
        },
        {
            id: 3,
            content: 'RUS'
        }
    ];
    return (
        <div className="user-options">
            <Select className="user-options__language">{languages}</Select>
            <div className="options user-options__main">
                <button className="options__search">
                    <img src={search}/>
                </button>
                <button className="options__user">
                    <img src={userImg}/>
                </button>
                <button className="options__hamburger">
                    <img src={hamburger}/>
                </button>
            </div>
        </div>
    )
};
