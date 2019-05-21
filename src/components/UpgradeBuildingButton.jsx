import React from 'react';
import { currency } from '../products_en'

const UpgradeBuildingButton = ({ building, storage, upgradeBuilding }) => {
    if (storage[currency].stock >= building.price && building.level < 9) {
        return (
            <button className='upgrade-building-button'
                onClick={() => upgradeBuilding(building.name)}>
                Upgrade
            </button>
        );
    } else {
        return (null);
    }
}

export default UpgradeBuildingButton;