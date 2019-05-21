import React, { Fragment } from 'react';
import Building from './Building';
import UnlockBuildingButton from './UnlockBuildingButton';

const Buildings = ({ buildings, storage, completeDetail, buyProduct, buyBuilding, upgradeBuilding }) => {
    return (
        Object.keys(buildings)
            .map(key_building => {
                if (buildings[key_building].unlocked) {
                    return (
                        <Building
                            key={key_building}
                            building={buildings[key_building]}
                            storage={storage}
                            completeDetail={completeDetail}
                            buyProduct={buyProduct}
                            upgradeBuilding={upgradeBuilding} />
                    );
                } else {
                    return (
                        <Fragment key={key_building}>
                            <h2>
                                Pay {buildings[key_building].price} to unlock {key_building}
                            </h2>
                            <UnlockBuildingButton
                                building={buildings[key_building]}
                                storage={storage}
                                buyBuilding={buyBuilding} />
                        </Fragment>
                    );
                }
            })
    );
}

export default Buildings;