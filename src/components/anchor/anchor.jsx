import React from "react";
import ArrowIcon from '../../assets/images/arrow-down.png';

const Anchor = () => {
    return(
        <a href="#menu" className="anchor-top">
            <img src={ArrowIcon} alt="Arrow Icon" />
            <span>Top</span>
        </a>  
    );
}

export default Anchor;