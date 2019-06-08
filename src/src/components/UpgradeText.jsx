import React from 'react';

const UpgradeText = ({ building, level }) => {
    if (building.level >= 9 || building.level >= level) {
        return (null);
    }
    return (
        <h3>
            Pay {building.price[building.level]} to upgrade
        </h3>
    )
}

export default UpgradeText;