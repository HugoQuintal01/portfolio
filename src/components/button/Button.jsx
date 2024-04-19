// Button.js
import React from 'react';

const Button = ({ buttonHref, buttonText }) => { // Destructure props to get buttonName
    return (
        <a href={buttonHref} className="button">
            <span>{buttonText}</span>
        </a>
    );
}

export default Button;
