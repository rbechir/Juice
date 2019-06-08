import React from 'react';
import './Buildings.css';
import Building from './Building';

const Buildings = ({ buildings, storage, level, production, workersCost, buyProduct, buyBuilding, upgradeBuilding, toggleBuilding, changeWorkerNumber }) => {
    return (
        <div className='buildings'>
            {Object.keys(buildings)
                .map(key_building => {
                    return (
                        <Building
                            key={key_building}
                            building={buildings[key_building]}
                            storage={storage}
                            level={level}
                            production={production}
                            workersCost={workersCost}
                            buyProduct={buyProduct}
                            buyBuilding={buyBuilding}
                            upgradeBuilding={upgradeBuilding}
                            toggleBuilding={toggleBuilding}
                            changeWorkerNumber={changeWorkerNumber} />
                    );
                })}
        </div>
    );
}

export default Buildings;