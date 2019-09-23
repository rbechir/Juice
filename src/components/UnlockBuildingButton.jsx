import React from 'react';
import Button from './Button';

const UnlockBuildingButton = (props) => {
    if (props.juiceStock >= props.buildingPrice) {
        return (
            <Button
                name='building-button'
                onClick={() => props.buyBuilding(props.buildingName)}
                text='Unlock' />
        );
    }

    return (null);
}

export default UnlockBuildingButton;