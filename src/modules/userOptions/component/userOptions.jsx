import './user-options.scss'

import React from 'react';
import PropTypes from 'prop-types';

import search from 'assets/search.png'
import userImg from 'assets/userPicture.png'

import { Select } from 'shared/components';

export const UserOptions = ({languages}) => {
    return (
        <div className="user-options">
            <div className="options user-options__main">
                <Select className="user-options__language">{languages}</Select>
                <button className="options__search">
                    <img src={`/${search}`}/>
                </button>
                <button className="options__user">
                    <img src={`/${userImg}`}/>
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
