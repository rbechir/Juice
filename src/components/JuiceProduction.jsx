import React from 'react';
import './JuiceProduction.css';
import JuiceButton from './JuiceButton';

const JuiceProduction = ({ stock, manualJuice }) => {
    return (
        <div className='juice-production'>
            <JuiceButton
                manualJuice={manualJuice} />
            <h1>{stock}</h1>
        </div>
    );
}
 
export default JuiceProduction;