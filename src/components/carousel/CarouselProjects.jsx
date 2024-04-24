import React from 'react';
import Slider from 'react-slick';


const CarouselProjects = () => {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2 // Adjusted initial slide for better view
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 6000
                }
            }
        ]
    };

    return (
                <Slider {...settings}>
                    <div className='carousel-card-projects'>
                        <span>New Projects</span>
                    </div>
                    <div className='carousel-card-projects'>
                        <span>New Challenges</span>
                    </div>
                    <div className='carousel-card-projects'>
                        <span>New Projects</span>
                    </div>
                    <div className='carousel-card-projects'>
                        <span>New Challenges</span>
                    </div>
                    <div className='carousel-card-projects'>
                        <span>New Projects</span>
                    </div>
                    <div className='carousel-card-projects'>
                        <span>New Challenges</span>
                    </div>
                    <div className='carousel-card-projects'>
                        <span>New Projects</span>
                    </div>
                    <div className='carousel-card-projects'>
                        <span>New Challenges</span>
                    </div>
                </Slider>
    );
}

export default CarouselProjects;
