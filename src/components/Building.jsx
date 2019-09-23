import React, { Fragment } from 'react';
import '../css/Building.css';
import { currency } from '../products_en';
import Products from './Products';
import UnlockBuildingButton from './UnlockBuildingButton';
import UpgradeBuildingButton from './UpgradeBuildingButton';
import UpgradeText from './UpgradeText';

const Building = (props) => {
    if (props.building.unlocked) {
        return (
            <div className='building'>
                <h2 onClick={() => props.toggleBuilding(props.building.name)}>{props.building.name}</h2>
                {!props.building.folded && <Fragment>
                    <Products
                        level={props.building.level}
                        products={props.building.products}
                        storage={props.storage}
                        production={props.production}
                        workersCost={props.workersCost}
                        buyProduct={props.buyProduct}
                        changeWorkerNumber={props.changeWorkerNumber} />
                    <UpgradeText
                        buildingPrice={props.building.price}
                        buildingLevel={props.building.level}
                        level={props.level} />
                    <UpgradeBuildingButton
                        buildingPrice={props.building.price}
                        buildingLevel={props.building.level}
                        buildingName={props.building.name}
                        juiceStock={props.storage[currency].stock}
                        level={props.level}
                        upgradeBuilding={props.upgradeBuilding} />
                </Fragment>}
            </div>
        );
    } else if (props.level >= props.building.level) {
        return (
            <div className='building'>
                <h2>{props.building.name}</h2>
                <h3>
                    Pay {props.building.price[props.building.level - 1]} to unlock
                </h3>
                <UnlockBuildingButton
                    buildingPrice={props.building.price[props.building.level - 1]}
                    buildingName={props.building.name}
                    juiceStock={props.storage[currency].stock}
                    buyBuilding={props.buyBuilding} />
            </div>
        );
    }

    return (null);
}

export default Building;