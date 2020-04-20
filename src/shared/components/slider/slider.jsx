import './slider.scss'

import React from 'react';
import Slider from "react-slick";
import { personsListForSlider, routesListForSlider, workersListForSlider } from 'modules/mainPage';
import { Person, TourRoute, Worker } from 'shared/components';
import PropTypes from 'prop-types';

export const Sliders = ({content}) => {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    switch (content) {
        case 'routes':
            return <Slider {...settings}>{routesListForSlider.map(element => <TourRoute tourInfo={element}
                                                                                        routesForSlider={true}/>)}</Slider>;
        case 'genius':
            return <Slider {...settings}>{personsListForSlider.map(element => <Person person={element}
                                                                                      personForSlider={true}/>)}</Slider>;
        case 'team':
            return <Slider {...settings}>{workersListForSlider.map(element => <Worker workerInfo={element}
                                                                                      workersForSlider={true}/>)}</Slider>;
        case 'souvenirs':
            return <Slider {...settings}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Slider>;
        default:
            return <Slider {...settings}>123</Slider>

    }
};

Sliders.propTypes = {
    activeLink: PropTypes.string,
    isActive: PropTypes.bool
};

Sliders.defaultProps = {
    activeLink: '',
    isActive: false
};
