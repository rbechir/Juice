import React from 'react';
import Logo from './Logo';

const BuyProduct = (props) => {
    let onClick = null;
    let name = '';

    if (Object.values(props.complete).includes(false)) {
        name = 'transparent';
    } else {
        onClick = () => props.buyProduct(props.key_product);
    }

    return (
        <Logo
            onClick={onClick}
            key_product={props.key_product}
            name={`logo ${name}`} />
    );
}

export default BuyProduct;