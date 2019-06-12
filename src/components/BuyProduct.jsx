import React from 'react';
import Logo from './Logo';

const BuyProduct = ({ complete, key_product, buyProduct }) => {
    let onClick = null;
    let name = '';

    if (Object.values(complete).includes(false)) {
        name = 'transparent';
    } else {
        onClick = () => buyProduct(key_product);
    }
    
    return (
        <Logo
            onClick={onClick}
            key_product={key_product}
            name={`logo ${name}`} />
    );
}

export default BuyProduct;