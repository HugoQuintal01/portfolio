import React from "react";
import Button from "../button/Button";
import Lottie from "lottie-react";
import LottieAnimation from '../../assets/images/lottie-animation.json';

const Cover = () => {

    return(
        <section className="cover-section gridrowfull">
            <div className="cover-left col-d-6 col-t-12 col-12">
                <div className="cover-title col-d-12 col-t-12 col-12">
                    <span>Hey I'm Hugo,</span>
                    <span>Frontend Developer</span>
                    <p>Crafting digital experiences with code, passion, and creativity.</p>
                </div>
                <Button buttonHref={'#scrollDown'} buttonText={"Let's work"} />
            </div>
            <div className="cover-right col-d-6- col-t-12 col-12">
                <Lottie animationData={LottieAnimation} />
            </div>
        </section>
    );
}

export default Cover;