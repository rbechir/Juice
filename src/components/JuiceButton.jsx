import React from 'react';
import './JuiceButton.css';
import Logo from './Logo';

const JuiceButton = ({ level, manualJuice }) => {
    return (
        <div className='juice-button-container'>
            <Logo
                onClick={() => manualJuice(level * 10)}
                key_product='Juice'
                name='logo' />
        </div>
    );
}

export default JuiceButton;