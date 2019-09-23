import React from 'react';
import Button from './Button';

const UpgradeBuildingButton = (props) => {
    if (props.juiceStock >= props.buildingPrice[props.buildingLevel]
        && props.buildingLevel < 9 && props.buildingLevel < props.level) {
        return (
            <Button
                name='building-button'
                onClick={() => props.upgradeBuilding(props.buildingName)}
                text='Upgrade' />
        );
    }

    return (null);
}

export default UpgradeBuildingButton;