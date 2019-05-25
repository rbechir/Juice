import React from 'react';
import Products from './Products';
import UpgradeBuildingButton from './UpgradeBuildingButton';
import UpgradeText from './UpgradeText';

const Building = ({ building, storage, completeDetail, buyProduct, upgradeBuilding }) => {
    return (
        <div className='building'>
            <h2>{building.name}</h2>
            <Products
                level={building.level}
                products={building.products}
                storage={storage}
                completeDetail={completeDetail}
                buyProduct={buyProduct} />
            <UpgradeText
                building={building} />
            <UpgradeBuildingButton
                building={building}
                storage={storage}
                upgradeBuilding={upgradeBuilding} />
        </div>
    );
}

export default Building;