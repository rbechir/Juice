import React, { Fragment } from 'react';
import './Building.css';
import Products from './Products';
import UnlockBuildingButton from './UnlockBuildingButton';
import UpgradeBuildingButton from './UpgradeBuildingButton';
import UpgradeText from './UpgradeText';

const Building = ({ building, storage, level, production, workersCost, buyProduct, buyBuilding, upgradeBuilding, toggleBuilding, changeWorkerNumber }) => {
    
    if (building.unlocked) {
        return (
            <div className='building'>
                <h2 onClick={() => toggleBuilding(building.name)}>{building.name}</h2>
                {!building.folded && <Fragment>
                    <Products
                        level={building.level}
                        products={building.products}
                        storage={storage}
                        production={production}
                        workersCost={workersCost}
                        buyProduct={buyProduct}
                        changeWorkerNumber={changeWorkerNumber} />
                    <UpgradeText
                        building={building}
                        level={level} />
                    <UpgradeBuildingButton
                        building={building}
                        storage={storage}
                        level={level}
                        upgradeBuilding={upgradeBuilding} />
                </Fragment>}
            </div>
        );
    } else if (level >= building.level) {
        return (
            <div className='building'>
                <h2>{building.name}</h2>
                <h3>
                    Pay {building.price[building.level - 1]} to unlock
                </h3>
                <UnlockBuildingButton
                    building={building}
                    storage={storage}
                    buyBuilding={buyBuilding} />
            </div>
        );
    }
    return (null);
}

export default Building;