import React from 'react';
import './JuiceButton.css';

const getImage = key_product => {
    try {
        return (require(`../img/${key_product}.jpg`));
    } catch {
        return (null);
    }
}

const JuiceButton = ({ manualJuice }) => {
    return (
        <div className='juice-button-container'>
            <img className='juice-button'
                onClick={() => manualJuice(10)}
                src={getImage('Juice')}
                alt='Click here' />
        </div>
    );
}
 
export default JuiceButton;