import './worker.scss';

import React from 'react';
import PropTypes from 'prop-types';

export const Worker = ({workerInfo}) => (
    <div className="worker">
        <img className="worker__image" src={workerInfo.img}/>
        <div className="worker__name">{workerInfo.name}</div>
        <div className="worker__scope">{workerInfo.scope}</div>
    </div>
);

Worker.propTypes = {
    workerInfo: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        scope: PropTypes.string
    })
};
