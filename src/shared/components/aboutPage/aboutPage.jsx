import './about-page.scss'

import React from 'react';
import PropTypes from 'prop-types';

export const AboutPage = ({aboutHomePage}) => {
    return (
        <div className="about-page">
            <h1 className="about-page__title">Пра аповед</h1>
            <div className="about-page__description">
                {aboutHomePage.map(element => <p key={element.id}>{element.content}</p>)}
            </div>
        </div>
    )
};

AboutPage.propTypes = {
    aboutHomePage: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string
    }))
};

AboutPage.defaultProps = {
    aboutHomePage: []
};
