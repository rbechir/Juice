import React from 'react';
import '../css/PlayerLevel.css';
import LevelUpButton from './LevelUpButton';

const PlayerLevel = ({ juiceStock, level, levelUp }) => {
    return (
        <div className='player-level'>
            <h1>Level : {level}</h1>
            <LevelUpButton
                juiceStock={juiceStock}
                level={level}
                levelUp={levelUp} />
        </div>
    );
}
 
export default PlayerLevel;