import React from 'react';

const UpgradeText = (props) => {
    if (props.buildingLevel >= 9 || props.buildingLevel >= props.level) {
        return (null);
    }

    return (
        <h3>
            Pay {props.buildingPrice[props.buildingLevel]} to upgrade
        </h3>
    )
}

export default UpgradeText;