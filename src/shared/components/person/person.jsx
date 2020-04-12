import './person.scss'
import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({person}) => (
    <>
        <div className="person__image"><img src={person.img}/></div>
        <div className="person__about">
            <div className="person__name">{person.name}</div>
            <div className="person__description">{person.description}</div>
        </div>
    </>
);

Person.propTypes = {
    person: PropTypes.shape({
        img: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
    })
};
