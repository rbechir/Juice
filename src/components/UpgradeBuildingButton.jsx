import React from 'react';
import Button from './Button';

const UpgradeBuildingButton = ({ buildingPrice, buildingLevel, buildingName, juiceStock, level, upgradeBuilding }) => {
    if (juiceStock >= buildingPrice[buildingLevel] && buildingLevel < 9 && buildingLevel < level) {
        return (
            <Button
                name='building-button'
                onClick={() => upgradeBuilding(buildingName)}
                text='Upgrade' />
        );
    }

    return (null);
}

export default UpgradeBuildingButton;