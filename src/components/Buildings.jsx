import React from 'react';
import './Buildings.css';
import Building from './Building';

const Buildings = ({ buildings, storage, buyProduct, buyBuilding, upgradeBuilding }) => {
    return (
        <div className='buildings'>
            {Object.keys(buildings)
                .map(key_building => {
                    return (
                        <Building
                            key={key_building}
                            building={buildings[key_building]}
                            storage={storage}
                            buyProduct={buyProduct}
                            buyBuilding={buyBuilding}
                            upgradeBuilding={upgradeBuilding} />
                    );
                })}
        </div>
    );
}

export default Buildings;