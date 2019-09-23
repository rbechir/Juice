import React from 'react';
import Button from './Button';

const LevelUpButton = (props) => {
    let price = [1000, 5000, 20000, 50000, 100000, 250000, 500000, 1000000]

    if (props.juiceStock >= price[props.level - 1] && props.level < 9) {
        return (
            <Button
                name='levelup-button'
                onClick={() => props.levelUp(price[props.level - 1])}
                text='Level UP!' />
        );
    }

    return (null);
}

export default LevelUpButton;