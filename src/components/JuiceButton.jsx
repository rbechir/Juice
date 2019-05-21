import React from 'react';

const JuiceButton = ({ manualJuice }) => {
    return (
        <button className='juice-button'
            onClick={() => manualJuice(100)}>
            Make some juice!
        </button>
    );
}
 
export default JuiceButton;