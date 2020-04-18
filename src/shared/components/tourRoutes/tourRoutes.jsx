import './tour-routes.scss'
import React from 'react';

import { TourRoute } from 'shared/components';
import PropTypes from 'prop-types';

export const TourRoutes = ({routesList}) => (
    <div className="tour-routes">
        <h1 className="tour-routes__title">Турыстычныя маршруты</h1>
        <div className="tour-routes__list">
            {
                routesList.map(element => <TourRoute tourInfo={element}/>)
            }
        </div>
    </div>
);

TourRoutes.propTypes = {
    routesList: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            name: PropTypes.string,
            scope: PropTypes.string
        })).isRequired
};
