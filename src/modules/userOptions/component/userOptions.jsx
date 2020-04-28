import './user-options.scss'
import search from 'assets/search.png'
import userImg from 'assets/userPicture.png'
import hamburger from 'assets/hamburger.png'

import React from 'react';
import { Select } from 'shared/components';
import PropTypes from 'prop-types';

export const UserOptions = ({languages}) => {
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

UserOptions.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string
    }))
};

UserOptions.defaultProps = {
    languages: []
};
