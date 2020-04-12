import './about-workers.scss';

import React from 'react';
import { Worker } from 'shared/components';
import PropTypes from 'prop-types';

export const AboutWorkers = ({workersList}) => (
    <div className="about-workers">
        <h1 className="about-workers__title">Над праектам працавалі</h1>
        <div className="about-workers__information">
            <div className="about-workers__first-line">
                {
                    workersList.map(element => element.id < 5 ? <Worker workerInfo={element}/> : null)
                }
            </div>
            <div className="about-workers__second-line">
                {
                    workersList.map(element => element.id > 4 ? <Worker workerInfo={element}/> : null)
                }
            </div>
        </div>
    </div>

);
AboutWorkers.propTypes = {
    workersList: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            name: PropTypes.string,
            scope: PropTypes.string
        })).isRequired
};
