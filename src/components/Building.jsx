import React from 'react';
import './Building.css';
import Products from './Products';
import UnlockBuildingButton from './UnlockBuildingButton';
import UpgradeBuildingButton from './UpgradeBuildingButton';
import UpgradeText from './UpgradeText';

const Building = ({ building, storage, level, buyProduct, buyBuilding, upgradeBuilding }) => {
    if (building.unlocked) {
        return (
            <div className='building'>
                <h2>{building.name}</h2>
                <Products
                    level={building.level}
                    products={building.products}
                    storage={storage}
                    buyProduct={buyProduct} />
                <UpgradeText
                    building={building}
                    level={level} />
                <UpgradeBuildingButton
                    building={building}
                    storage={storage}
                    level={level}
                    upgradeBuilding={upgradeBuilding} />
            </div>
        );
    } else if (level >= building.level) {
        return (
            <div className='building'>
                <h2>{building.name}</h2>
                <h3>
                    Pay {building.price} to unlock
                </h3>
                <UnlockBuildingButton
                    building={building}
                    storage={storage}
                    buyBuilding={buyBuilding} />
            </div>
        );
    } else {
        return (null);
    }
}

export default Building;