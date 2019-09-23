import React, { Fragment } from 'react';
import '../css/Building.css';
import { currency } from '../products_en';
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
                        buildingPrice={building.price}
                        buildingLevel={building.level}
                        level={level} />
                    <UpgradeBuildingButton
                        buildingPrice={building.price}
                        buildingLevel={building.level}
                        buildingName={building.name}
                        juiceStock={storage[currency].stock}
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
                    buildingPrice={building.price[building.level - 1]}
                    buildingName={building.name}
                    juiceStock={storage[currency].stock}
                    buyBuilding={buyBuilding} />
            </div>
        );
    }
    
    return (null);
}

export default Building;