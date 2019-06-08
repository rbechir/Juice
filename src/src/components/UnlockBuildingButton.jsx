import React from 'react';
import './UnlockBuildingButton.css';
import { currency } from '../products_en';

const UnlockBuildingButton = ({ building, storage, buyBuilding }) => {
    if (storage[currency].stock >= building.price[building.level - 1]) {
        return (
            <button className='unlock-building-button'
                onClick={() => buyBuilding(building.name)}>
                <strong>Unlock</strong>
            </button>
        );
    }
    return (null);
}

export default UnlockBuildingButton;