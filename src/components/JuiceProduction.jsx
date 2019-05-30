import React from 'react';
import './JuiceProduction.css';
import JuiceButton from './JuiceButton';

const JuiceProduction = ({ level, stock, manualJuice }) => {
    return (
        <div className='juice-production'>
            <JuiceButton
                level={level}
                manualJuice={manualJuice} />
            <h1>{stock}</h1>
        </div>
    );
}
 
export default JuiceProduction;