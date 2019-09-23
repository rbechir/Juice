import React from 'react';
import '../css/PlayerLevel.css';
import LevelUpButton from './LevelUpButton';

const PlayerLevel = (props) => {
    return (
        <div className='player-level'>
            <h1>Level : {props.level}</h1>
            <LevelUpButton
                juiceStock={props.juiceStock}
                level={props.level}
                levelUp={props.levelUp} />
        </div>
    );
}

export default PlayerLevel;