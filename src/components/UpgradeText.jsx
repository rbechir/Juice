import React from 'react';

const UpgradeText = ({ buildingPrice, buildingLevel, level }) => {
    if (buildingLevel >= 9 || buildingLevel >= level) {
        return (null);
    }
    
    return (
        <h3>
            Pay {buildingPrice[buildingLevel]} to upgrade
        </h3>
    )
}

export default UpgradeText;