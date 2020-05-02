import './worker.scss';

import React from 'react';
import PropTypes from 'prop-types';

export const Worker = ({workerInfo, workersForSlider}) => (
    workersForSlider === false ?
        <div className="worker">
            <img className="worker__image" src={workerInfo.img}/>
            <div className="worker__name">{workerInfo.name}</div>
            <div className="worker__scope">{workerInfo.scope}</div>
        </div>
        : <div className="worker-slide">
            <img className="worker-slide__image" src={workerInfo.img}/>
            <div className="worker-slide__name">{workerInfo.name}</div>
        </div>
);

Worker.propTypes = {
    workerInfo: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        scope: PropTypes.string
    }),
    workersForSlider: PropTypes.bool
};

Worker.defaultProps = {
    workersForSlider: false
};
