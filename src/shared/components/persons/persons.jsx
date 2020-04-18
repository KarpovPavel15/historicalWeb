import './persons.scss'
import React from 'react';
import PropTypes from 'prop-types';

import { Person } from 'shared/components';

export const Persons = ({personsList, personsForSlider}) => {
    return (
        personsForSlider === false ? <div className="persons">
            {
                personsList.map(element => element.id % 2 !== 0
                    ? <div className="persons__left-person"><Person person={element}/></div>
                    : <div className="persons__right-person"><Person person={element}/></div>
                )
            }
        </div> : <div className="persons__list">{personsList.map(element => <Person person={element}/>)}</div>
    )
};

Persons.propTypes = {
    personsList: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            name: PropTypes.string,
            scope: PropTypes.string
        })).isRequired,
    personsForSlider: PropTypes.bool
};

Persons.defaultProps = {
    personsForSlider: false
};
