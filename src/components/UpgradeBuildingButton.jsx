import React from 'react';
import './UpgradeBuildingButton.css';
import { currency } from '../products_en';

const UpgradeBuildingButton = ({ building, storage, level, upgradeBuilding }) => {
    if (storage[currency].stock >= building.price && building.level < 9 && building.level < level) {
        return (
            <button className='upgrade-building-button'
                onClick={() => upgradeBuilding(building.name)}>
                <strong>Upgrade</strong>
            </button>
        );
    } else {
        return (null);
    }
}

export default UpgradeBuildingButton;