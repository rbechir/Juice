import React from 'react';

const UpgradeText = ({ building }) => {
    if (building.level >= 9) {
        return (null);
    } else {
        return (
            <h3>
                Pay {building.price} to upgrade to level {building.level + 1}
            </h3>
        )
    }
}

export default UpgradeText;