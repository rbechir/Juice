import React from 'react';

const JuiceButton = ({ manualJuice }) => {
    return (
        <button className='juice-button'
            onClick={() => manualJuice(10)}>
            Make some juice!
        </button>
    );
}
 
export default JuiceButton;