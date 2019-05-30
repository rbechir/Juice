import React from 'react';
import './PlayerLevel.css';
import LevelUpButton from './LevelUpButton';

const PlayerLevel = ({ storage, level, levelUp }) => {
    return (
        <div className='player-level'>
            <h1>Level : {level}</h1>
            <LevelUpButton
                storage={storage}
                level={level}
                levelUp={levelUp} />
        </div>
    );
}
 
export default PlayerLevel;