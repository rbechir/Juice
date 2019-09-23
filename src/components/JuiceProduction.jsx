import React from 'react';
import '../css/JuiceProduction.css';
import JuiceButton from './JuiceButton';

const JuiceProduction = (props) => {
    return (
        <div className='juice-production'>
            <JuiceButton
                level={props.level}
                manualJuice={props.manualJuice} />
            <h1>{props.stock}</h1>
        </div>
    );
}

export default JuiceProduction;