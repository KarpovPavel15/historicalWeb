import './navigation.scss'

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-scroll";

export const Navigation = ({showSlider, setLink}) => {
    return (
        <nav className="navigation">
            {
                showSlider !== null && setLink !== null ?
                    <div className="navigation__content">
                        <Link onMouseOver={showSlider} onMouseEnter={() => setLink('routes')}
                              className="navigation__rout-link"
                              to="tour-routes" spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}>МАРШРУТ</Link>
                        <Link spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500} onMouseOver={showSlider} onMouseEnter={() => setLink('genius')}
                              className="navigation__genius-link"
                              to="persons">ГЕНИИ МЕСТА</Link>
                        <Link spy={true}
                              smooth={true}
                              offset={-800}
                              duration={500} onMouseOver={showSlider} onMouseEnter={() => setLink('team')}
                              className="navigation__team-link"
                              to="about-workers">КОМАНДА</Link>
                        <Link spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500} onMouseOver={showSlider} onMouseEnter={() => setLink('souvenirs')}
                              className="navigation__souvenirs-link"
                              to="/route4">СУВЕНИРЫ</Link>
                    </div> :
                    <div className="navigation__content">
                        <Link className="navigation__rout-link"
                              to="tour-routes" spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}>МАРШРУТ</Link>
                        <Link spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              className="navigation__genius-link"
                              to="persons">ГЕНИИ МЕСТА</Link>
                        <Link spy={true}
                              smooth={true}
                              offset={-800}
                              duration={500}
                              className="navigation__team-link"
                              to="about-workers">КОМАНДА</Link>
                        <Link spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              className="navigation__souvenirs-link"
                              to="/route4">СУВЕНИРЫ</Link>
                    </div>
            }
        </nav>
    )
};

Navigation.propTypes = {
    showSlider: PropTypes.func,
    setLink: PropTypes.func,
};

Navigation.defaultProps = {
    showSlider: null,
    setLink: null,
};
