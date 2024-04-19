import JavaScriptLogo from '../../assets/images/javascript-logo.png'; // Import the image
import ReactLogo from '../../assets/images/react-logo.png'; // Import the image
import NextLogo from '../../assets/images/nextjs-logo.png'; // Import the image
import TypeScriptLogo from '../../assets/images/typescript-logo.png'; // Import the image
import PhpLogo from '../../assets/images/php-logo.png'; // Import the image
import CssLogo from '../../assets/images/css-logo.png'; // Import the image
import HtmlLogo from '../../assets/images/html5-logo.png'; // Import the image
import JqueryLogo from '../../assets/images/jquery-logo.png'; // Import the image
import SassLogo from '../../assets/images/sass-logo.png'; // Import the image
import SqlLogo from '../../assets/images/sql-logo.png'; // Import the image

import React from 'react';
import Slider from 'react-slick';


const CarouselTools = () => {
    const settings = {
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        pauseOnHover: true,
        cssEase: 'linear',
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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
                <Slider {...settings}>
                    <div className='carousel-card carousel-card-tools'>
                        <img src={JavaScriptLogo} alt="JavaScript Logo" />
                        <span>JavaScript</span>
                    </div>
                    <div className='carousel-card'>
                        <img src={TypeScriptLogo} alt="TypeScript Logo" />
                        <span>TypeScript</span>
                    </div>
                    <div className='carousel-card'>
                        <img src={ReactLogo} alt="React Logo" />
                        <span>React</span>
                    </div>
                    <div className='carousel-card'>
                        <img src={NextLogo} alt="Next Logo" />
                        <span>NextJS</span>
                    </div>
                    <div className='carousel-card'>
                        <img src={PhpLogo} alt="PHP Logo" />
                        <span>PHP</span>
                    </div>
                    <div className='carousel-card'>
                        <img src={JqueryLogo} alt="JQuery Logo" />
                        <span>JQuery</span>
                    </div>
                    <div className='carousel-card'>
                        <img src={HtmlLogo} alt="HTML Logo" />
                        <span>HTML</span>
                    </div>
                    <div className='carousel-card'>
                        <img src={CssLogo} alt="CSS Logo" />
                        <span>CSS</span>
                    </div>
                    <div className='carousel-card'>
                        <img src={SassLogo} alt="SASS Logo" />
                        <span>SCSS</span>
                    </div>
                    <div className='carousel-card'>
                        <img src={SqlLogo} alt="SQL Logo" />
                        <span>SQL</span>
                    </div>
                </Slider>
    );
}

export default CarouselTools;
