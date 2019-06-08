import React from 'react';

const BuyProductButton = ({ storage, key_product, buyProduct }) => {
    if (Object.values(storage[key_product].complete).includes(false)) {
        return (null);
    } else {
        return (
            <button className='buy-product-button'
                onClick={() => buyProduct(key_product)}>
                Buy 1
            </button>
        );
    }
}
 
export default BuyProductButton;