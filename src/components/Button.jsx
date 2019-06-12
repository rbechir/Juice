import React from 'react';
import './Button.css';

const Button = ({ name, onClick, text }) => {
    return (
        <button className={`button ${name}`}
            onClick={onClick}>
            <strong>{text}</strong>
        </button>
    );
}
 
export default Button;