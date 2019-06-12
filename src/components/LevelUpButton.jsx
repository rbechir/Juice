import React from 'react';
import Button from './Button';

const LevelUpButton = ({ juiceStock, level, levelUp }) => {
    let price = [1000, 5000, 20000, 50000, 100000, 250000, 500000, 1000000]

    if (juiceStock >= price[level - 1] && level < 9) {
        return (
            <Button
                name='levelup-button'
                onClick={() => levelUp(price[level - 1])}
                text='Level UP!' />
        );
    }

    return (null);
}

export default LevelUpButton;