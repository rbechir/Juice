import React from 'react';

const UpgradeText = ({ building, level }) => {
    if (building.level >= 9 || building.level >= level) {
        return (null);
    } else {
        return (
            <h3>
                Pay {building.price} to upgrade
            </h3>
        )
    }
}

export default UpgradeText;