import React from 'react';
import '../css/Buildings.css';
import Building from './Building';

const Buildings = (props) => {
    return (
        <div className='buildings'>
            {Object.keys(props.buildings)
                .map(key_building => {
                    return (
                        <Building
                            key={key_building}
                            building={props.buildings[key_building]}
                            storage={props.storage}
                            level={props.level}
                            production={props.production}
                            workersCost={props.workersCost}
                            buyProduct={props.buyProduct}
                            buyBuilding={props.buyBuilding}
                            upgradeBuilding={props.upgradeBuilding}
                            toggleBuilding={props.toggleBuilding}
                            changeWorkerNumber={props.changeWorkerNumber} />
                    );
                })}
        </div>
    );
}

export default Buildings;