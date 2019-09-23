import React from 'react';
import '../css/Button.css';

const Button = (props) => {
    return (
        <button className={`button ${props.name}`}
            onClick={props.onClick}>
            <strong>{props.text}</strong>
        </button>
    );
}

export default Button;