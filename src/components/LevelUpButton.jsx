import React from 'react';
import './LevelUpButton.css';
import { currency } from '../products_en';

const LevelUpButton = ({ storage, level, levelUp }) => {
    if (storage[currency].stock >= level * 1000) {
        return (
            <button className='levelup-button'
                onClick={() => levelUp()}>
                <strong>Level UP!</strong>
            </button>
        );
    } else {
        return (null);
    }
}
 
export default LevelUpButton;