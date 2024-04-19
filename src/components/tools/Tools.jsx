/*
import JavaScriptLogo from '../../assets/images/javascript-logo.svg'; // Import the image
import ReactLogo from '../../assets/images/react-logo.svg'; // Import the image
import NextLogo from '../../assets/images/nextjs-logo.svg'; // Import the image
import TypeScriptLogo from '../../assets/images/typescript-logo.svg'; // Import the image
import PhpLogo from '../../assets/images/php-logo.svg'; // Import the image
import CssLogo from '../../assets/images/css-logo.svg'; // Import the image
import HtmlLogo from '../../assets/images/html5-logo.svg'; // Import the image
import JqueryLogo from '../../assets/images/jquery-logo.svg'; // Import the image
import SassLogo from '../../assets/images/sass-logo.svg'; // Import the image
*/
import React from 'react';
import Slider from 'react-slick';
import CarouselTools from './CarouselTools';


const Tools = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 5, // Adjusted to show 5 slides at a time
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2 // Adjusted initial slide for better view
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

    return (
        <section className="tools-section gridrowfull">
            <div className="tools-title col-d-12 col-t-12 col-12">
                <span>Main Tools</span>
            </div>
        </section>
    );
}

export default Tools;
