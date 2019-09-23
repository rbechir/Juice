import React from 'react';
import '../css/JuiceButton.css';
import Logo from './Logo';

const JuiceButton = (props) => {
    return (
        <div className='juice-button-container'>
            <Logo
                onClick={() => props.manualJuice(props.level * 10)}
                key_product='Juice'
                name='logo' />
        </div>
    );
}

export default JuiceButton;