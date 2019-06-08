import React from 'react';
import './LevelUpButton.css';
import { currency } from '../products_en';

const LevelUpButton = ({ storage, level, levelUp }) => {
    let price = [1000, 5000, 20000, 50000, 100000, 250000, 500000, 1000000]
    if (storage[currency].stock >= price[level - 1] && level < 9) {
        return (
            <button className='levelup-button'
                onClick={() => levelUp(price[level - 1])}>
                <strong>Level UP!</strong>
            </button>
        );
    }
    return (null);
}

export default LevelUpButton;