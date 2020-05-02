import './select.scss'

import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({children,className}) => (
        <select className={`select ${className}`}>
            {children.map(element => <option key={element.id} value={element.content}>{element.content}</option>)}
        </select>
    )
;

Select.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string
    })),
    className: PropTypes.string.isRequired
};

Select.defaultProps = {
    children: []
};
