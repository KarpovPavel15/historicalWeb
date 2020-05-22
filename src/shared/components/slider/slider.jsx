import './slider.scss'

import React from 'react';
import Slider from "react-slick";
import { Person, TourRoute, Worker } from 'shared/components';
import PropTypes from 'prop-types';

export const Sliders = ({content, routesList, personsList, workersList}) => {
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
            return <Slider {...settings}>{routesList.map(element => <TourRoute tourInfo={element}
                                                                               key={element.id}
                                                                               routesForSlider={true}/>)}</Slider>;
        case 'genius':
            return <Slider {...settings}>{personsList.map(element => <Person person={element}
                                                                             key={element.id}
                                                                             personForSlider={true}/>)}</Slider>;
        case 'team':
            return <Slider {...settings}>{workersList.map(element => <Worker workerInfo={element}
                                                                             key={element.id}
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
    content: PropTypes.string.isRequired,
    personsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
    })),
    routesList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
    })),
    workersList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        scope: PropTypes.string
    }))
};

Sliders.defaultProps = {
    personsList: [],
    routesList: [],
    workersList: [],
};
