import React from 'react';
import '../assets/css/templatemo-style.css';

const Button = ({ hrefLink, btnName }) => (
    <div className="white-button">
        <a href={hrefLink}>{btnName}</a>
    </div>
);

export default Button;