// Button.js
import React, { useRef, useState, useEffect } from 'react';

const Button = ({ buttonHref, buttonText }) => { // Destructure props to get buttonName

    const stepsRef = useRef([]);
    const [visibleSteps, setVisibleSteps] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const stepsVisibility = stepsRef.current.map(step => {
                const rect = step.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                return rect.top <= windowHeight * 0.75;
            });
            setVisibleSteps(stepsVisibility);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check on mount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <a href={buttonHref} ref={ref => (stepsRef.current[3] = ref)} className={`button ${visibleSteps[3] ? "visible" : ""}`}>
            <span>{buttonText}</span>
        </a>
    );
}

export default Button;
