import React from 'react';
import Button from './Button';

const UnlockBuildingButton = ({ buildingPrice, buildingName, juiceStock, buyBuilding }) => {
    if (juiceStock >= buildingPrice) {
        return (
            <Button
                name='building-button'
                onClick={() => buyBuilding(buildingName)}
                text='Unlock' />
        );
    }

    return (null);
}

export default UnlockBuildingButton;