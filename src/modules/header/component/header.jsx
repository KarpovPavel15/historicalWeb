import './header.scss'

import React, { useState } from 'react';
import { Logo, Navigation, Person, UserOptions } from 'shared/components';
import { personsListForSlider } from 'modules/mainPage';
import Slider from "react-slick";

export const Header = () => {
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
    const [isActive, setActive] = useState(false);

    const showSlider = () => setActive(true);
    const hideSlider = () => setActive(false);

    return (
        <header className="header">
            <div className="header__area" onMouseLeave={hideSlider}>
                <div className="header__navigation">
                    <Logo/>
                    <Navigation showSlider={showSlider}/>
                    <UserOptions/>
                </div>
                <div className="header__slider">
                    {isActive &&
                    <Slider {...settings}>{personsListForSlider.map(element => <Person key={element.id} person={element} personForSlider={isActive}/>)}</Slider>}
                </div>
            </div>
        </header>
    )
};
