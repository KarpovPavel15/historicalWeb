import './persons.scss'
import React from 'react';
import PropTypes from 'prop-types';

import { Person } from 'shared/components';

export const Persons = ({personsList}) => (
    <div className="persons">
        {
            personsList.map(element => element.id % 2 !== 0
                ? <div className="persons__left-person"><Person person={element}/></div>
                : <div className="persons__right-person"><Person person={element}/></div>
            )
        }
    </div>
);

Persons.propTypes = {
    personsList: PropTypes.arrayOf.isRequired
};
