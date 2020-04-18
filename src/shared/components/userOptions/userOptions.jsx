import './user-options.scss'
import search from 'assets/search.png'
import userImg from 'assets/userPicture.png'
import hamburger from 'assets/hamburger.png'

import React from 'react';

export const UserOptions = () => {
    return (
        <div className="user-options">
            <select className="user-options__language">
                <option value="blr">BLR</option>
                <option value="pl">PL</option>
                <option value="en" selected>ENG</option>
            </select>
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
